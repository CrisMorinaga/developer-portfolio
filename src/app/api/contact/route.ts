import { getRateLimitIdentifier, ratelimit } from "@/rate-limit/EmailRateLimit";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequest = {
	name?: unknown;
	email?: unknown;
	message?: unknown;
	website?: unknown;
};

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactRequest;

		const name = typeof body.name === "string" ? body.name.trim() : "";

		const email =
			typeof body.email === "string"
				? body.email.trim().toLowerCase()
				: "";

		const message =
			typeof body.message === "string" ? body.message.trim() : "";

		const website =
			typeof body.website === "string" ? body.website.trim() : "";

		/*
		 * Honeypot:
		 * los usuarios reales nunca completan este campo.
		 * Respondemos como si hubiera funcionado para no dar pistas al bot.
		 */
		if (website) {
			return NextResponse.json({ success: true });
		}

		if (
			name.length < 2 ||
			name.length > 80 ||
			!EMAIL_PATTERN.test(email) ||
			email.length > 254 ||
			message.length < 10 ||
			message.length > 3000
		) {
			return NextResponse.json(
				{
					success: false,
					message: "Invalid form data.",
				},
				{ status: 400 },
			);
		}

		if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_FROM) {
			return NextResponse.json(
				{
					success: false,
					message: "Email service is unavailable.",
				},
				{ status: 500 },
			);
		}

		const identifier = getRateLimitIdentifier(request);

		const { success, reset } = await ratelimit.limit(identifier);

		if (!success) {
			const retryAfter = Math.max(
				1,
				Math.ceil((reset - Date.now()) / 1000),
			);

			return NextResponse.json(
				{
					success: false,
					message: "Too many messages. Please try again later.",
				},
				{
					status: 429,
					headers: {
						"Retry-After": retryAfter.toString(),
					},
				},
			);
		}

		const { data, error } = await resend.emails.send({
			from: process.env.CONTACT_FROM,
			to: [process.env.CONTACT_EMAIL],
			replyTo: email,

			subject: "New portfolio message",
			text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
		});

		if (error) {
			return NextResponse.json(
				{
					success: false,
					message: "The message could not be sent.",
				},
				{ status: 500 },
			);
		}

		return NextResponse.json({
			success: true,
			message: "Message sent.",
			id: data?.id,
		});
	} catch {
		return NextResponse.json(
			{
				success: false,
				message: "The message could not be sent.",
			},
			{ status: 500 },
		);
	}
}
