"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Loader } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
	const [status, setStatus] = useState<FormStatus>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		setStatus("sending");
		setErrorMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message"),
					website: formData.get("website"), // Honeypot
				}),
			});

			if (!response.ok) {
				throw new Error("The message could not be sent.");
			}

			form.reset();
			setStatus("success");
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Something went wrong. Please try again.",
			);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full"
		>
			<div className="space-y-4">
				<FormField
					id="name"
					label="Name"
					placeholder="Your name"
					autoComplete="name"
					minLength={2}
					maxLength={80}
				/>

				<FormField
					id="email"
					label="Email"
					type="email"
					placeholder="you@example.com"
					autoComplete="email"
					maxLength={254}
				/>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-semibold text-foreground"
					>
						Message
					</label>

					<textarea
						id="message"
						name="message"
						required
						minLength={10}
						maxLength={3000}
						placeholder="Write your message..."
						className="
              mt-3 min-h-15 w-full resize-y
              border-0 border-b border-border
              bg-transparent px-0 py-3
              text-foreground outline-none
              transition-colors duration-200
              placeholder:text-muted-foreground/70
              focus:border-primary
            "
					/>
				</div>

				{/* Campo invisible para bloquear bots simples */}
				<div
					aria-hidden="true"
					className="absolute -left-[9999px]"
				>
					<label htmlFor="website">Website</label>
					<input
						id="website"
						name="website"
						type="text"
						tabIndex={-1}
						autoComplete="off"
					/>
				</div>
			</div>

			<div className="mt-7">
				<button
					type="submit"
					disabled={status === "sending"}
					className={`d-btn d-btn-md d-btn-primary flex gap-1 rounded-lg font-normal text-foreground hover:bg-[#b47440] hover:border-[#b47440]`}
				>
					{status === "sending" ? (
						<>
							<Loader className="size-5 animate-spin" />
							Sending...
						</>
					) : status === "success" ? (
						<>
							<Check className="size-5" />
							Message sent
						</>
					) : (
						<>
							Send message
							<ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</>
					)}
				</button>

				<p className="mt-4 text-sm text-muted-foreground">
					Your details are only used to reply to this message.
				</p>

				<div
					aria-live="polite"
					className="mt-3 min-h-6 text-sm"
				>
					{status === "success" && (
						<p className="text-primary">
							Thanks! Your message has been sent.
						</p>
					)}

					{status === "error" && (
						<p className="text-destructive">{errorMessage}</p>
					)}
				</div>
			</div>
		</form>
	);
}

type FormFieldProps = {
	id: string;
	label: string;
	type?: "text" | "email";
	placeholder: string;
	autoComplete?: string;
	minLength?: number;
	maxLength?: number;
};

function FormField({
	id,
	label,
	type = "text",
	placeholder,
	autoComplete,
	minLength,
	maxLength,
}: FormFieldProps) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-semibold text-foreground"
			>
				{label}
			</label>

			<input
				id={id}
				name={id}
				type={type}
				required
				minLength={minLength}
				maxLength={maxLength}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className="
          mt-3 w-full
          border-0 border-b border-border
          bg-transparent px-0 py-3
          text-foreground outline-none
          transition-colors duration-200
          placeholder:text-muted-foreground/70
          focus:border-primary
        "
			/>
		</div>
	);
}
