import { LiveAppButton } from "@/components/ui/LiveAppButton";
import { SectionHeading } from "./SectionHeading";

export function Limitations() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
			<SectionHeading
				eyebrow="04 · Limitations"
				title={
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						Relying on an{" "}
						<span className="text-primary text-7xl">external </span>
						dependency comes with its own issues.
					</h2>
				}
				description={[
					"As stated in the previous section, RNGMeter was originally built around the game state exposed by Alt1. Following a RuneScape interface update, Alt1's OCR compatibility became unstable.",

					"In addition, because of RuneScape's ToS, no external tools that interact directly with the game client are allowed, leaving Alt1 as the only exception that seemed to work (as it relied heavily on its OCR implementation).",

					"As a result of that, RuneScape add-on developers are stuck waiting for an update to Alt1.",

					"To account for Alt1's current state, the portfolio demo replaces the external input layer with simulated events while preserving RNGMeter's original state management, probability calculations, persistence, and interface.",
				]}
			/>
			<LiveAppButton
				title="Try the interactive demo"
				iconSize={28}
				className="w-fit! justify-self-center d-btn-xl!"
				href="https://rngmeter.vercel.app/demo"
			/>
		</section>
	);
}
