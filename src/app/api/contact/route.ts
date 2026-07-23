import { NextResponse } from "next/server";
import { Resend } from "resend";

import { Form } from "@/zod-validation/emailFormValidation";
import { getRateLimitIdentifier, ratelimit } from "@/rate-limit/EmailRateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const parsedBody = await Form.safeParseAsync(body);

		if (!parsedBody.success) {
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

		const { name, email, message } = parsedBody.data;

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
