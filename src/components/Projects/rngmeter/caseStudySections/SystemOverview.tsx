import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/Projects/parts";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function SystemOverview() {
	const [currProjectIdx, setCurrProjectIdx] = useState(0);

	const prevExplanation = () => {
		if (!currProjectIdx) return;

		setCurrProjectIdx((prev) => prev - 1);
	};

	const nextExplanation = () => {
		if (currProjectIdx === explanationSteps.length - 1) return;

		setCurrProjectIdx((prev) => prev + 1);
	};

	const explanationSteps: string[] = [
		`Alt1 uses OCR to read relevant text from the RuneScape screen and makes it available to apps in real time.`,
		`RNGMeter consumes that state through the Alt1 API and watches for boss kills and tracked drop events in the player's chat.`,
		`When an event is detected, RNGMeter updates the relevant counts, recalculates each item's drop chance, and saves the new state.`,
		`The overlay then re-renders with the latest values, keeping the tracker synchronized with the game.`,
	];

	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="03 · System overview"
				title={
					<div className="max-w-3xl">
						<h2 className="font-display text-4xl md:text-5xl">
							How the system works
						</h2>
						<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
							From Alt1 to RNGMeter, the main pipeline is about
							updating states in real-time.
						</p>
					</div>
				}
			/>

			<div className="relative mx-auto mt-8 w-full max-w-[628px] px-10 sm:px-16">
				<button
					type="button"
					onClick={prevExplanation}
					disabled={!currProjectIdx}
					className="d-btn d-btn-circle dark:d-btn-primary d-btn-warning d-btn-sm absolute left-0 md:top-1/2 top-[40%] z-20 -translate-y-1/2 border border-muted-foreground text-muted-foreground shadow-none disabled:opacity-30 sm:d-btn-lg"
				>
					<ChevronLeft className="size-5" />
				</button>

				<button
					type="button"
					onClick={nextExplanation}
					disabled={currProjectIdx === explanationSteps.length - 1}
					className="d-btn d-btn-circle dark:d-btn-primary d-btn-warning d-btn-sm absolute right-0 md:top-1/2 top-[40%] z-20 -translate-y-1/2 border border-muted-foreground text-muted-foreground shadow-none disabled:opacity-30 sm:d-btn-lg"
				>
					<ChevronRight className="size-5" />
				</button>

				<div className="min-w-0 min-h-0 sm:h-[300px] h-[150px] flex items-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={currProjectIdx}
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.98 }}
							transition={{ duration: 0.3 }}
						>
							<div className="flex w-full items-center justify-center bg-card/50">
								<p className="w-full max-w-[500px] rounded-2xl border border-primary p-4 text-center text-xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
									{explanationSteps[currProjectIdx]}
								</p>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
