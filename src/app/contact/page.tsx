"use client";
import { TimeScene } from "@/components/About/TimeScene";
import { ContactForm } from "@/components/Contact/ContactForm";

const info = [
	{ title: "BASED IN", description: "Japan" },
	{ title: "LANGUAGES", description: "Spanish • English • Japanese" },
	{
		title: "CERTIFICATION",
		description: "Fundamental Information Technology Engineer Examination",
	},
	{ title: "CURRENTLY", description: "Building RSTavern" },
];

export default function About() {
	return (
		<div className="relative flex w-full flex-col item-center justify-center overflow-hidden lg:px-30 px-15 sm:py-10 py-5 sm:pt-10 pt-0">
			<section className="flex md:flex-row flex-col md:gap-4 gap-10 items-start justify-center py-5">
				<div className="flex-1 flex flex-col gap-2">
					<p className="text-primary lg:text-xl md:text-lg md:text-start text-center">
						Contact
					</p>
					<p className="lg:text-8xl text-5xl md:text-start text-center font-display">
						Say
					</p>
					<p className="lg:text-8xl text-5xl md:text-start text-center font-display">
						hello.
					</p>
					<p className="text-muted-foreground md:text-start text-center">
						{`I'm based in Japan. You can use the form or reach me
						directly by email.`}
					</p>
					<p className="text-primary text-lg md:text-start text-center underline">
						crismorinaga@outlook.com ↗
					</p>
					<p
						aria-hidden="true"
						style={{
							WebkitTextStroke: "1px hsl(var(--foreground))",
						}}
						className="pointer-events-none absolute -top-42 font-display text-[470px] text-transparent opacity-10"
					>
						@
					</p>
				</div>

				<section className="flex-1 flex flex-col items-start justify-center gap-5">
					<ContactForm />
				</section>
			</section>
		</div>
	);
}
