"use client";
import { ContactForm } from "@/components/Contact/ContactForm";

export default function Page() {
	return (
		<div className="relative flex w-full flex-col item-center justify-center overflow-hidden lg:px-30 px-15 sm:py-10 py-2 sm:pt-10 pt-0">
			<section className="flex md:flex-row flex-col md:gap-4 gap-10 items-start justify-center py-5 md:pt-5 pt-3">
				<div className="flex-1 relative flex flex-col md:gap-2 gap-4 md:justify-start justify-center md:self-start self-center">
					<p className="text-primary md:text-xl text-start">
						Contact
					</p>
					<p className="md:text-8xl text-6xl md:text-start text-center font-display md:mr-0 mr-5">
						Say
					</p>
					<p className="md:text-8xl text-6xl md:text-start text-center font-display">
						hello.
					</p>
					<p className="text-muted-foreground md:text-start md:text-base text-sm text-center">
						{`I'm based in Japan. You can use the form or reach me
						directly by email.`}
					</p>
					<a
						href="mailto:crismorinaga@outlook.com?subject=Portfolio%20Contact&body=Hi%20Cris,%20I%20saw%20your%20portfolio..."
						className="text-primary text-lg md:text-start text-center hover:underline cursor-pointer"
					>
						crismorinaga@outlook.com ↗
					</a>
					<p
						aria-hidden="true"
						style={{
							WebkitTextStroke: "1px hsl(var(--foreground))",
						}}
						className="pointer-events-none select-none absolute lg:-top-60 md:-top-45 -top-26 md:left-5 left-25 font-display lg:text-[470px] md:text-[400px] text-[290px] text-transparent opacity-10 md:flex hidden"
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
