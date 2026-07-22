import { ReactNode, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SystemOverview() {
	const [currProjectIdx, setCurrProjectIdx] = useState(0);

	const previousProject = () => {
		if (!currProjectIdx) return;

		setCurrProjectIdx((prev) => prev - 1);
	};

	const nextProject = () => {
		if (currProjectIdx === explanationSteps.length - 1) return;

		setCurrProjectIdx((prev) => prev + 1);
	};

	const explanationSteps: ReactNode[] = [
		<div
			key={0}
			className="flex w-full items-center justify-center bg-card/50"
		>
			<p className="w-full max-w-[500px] rounded-2xl border border-primary p-4 text-center text-xl leading-relaxed text-foreground sm:px-10 sm:text-3xl lg:text-4xl">
				{`Alt1 uses OCR to read relevant text from the RuneScape screen and makes it available to apps in real time.`}
			</p>
		</div>,
		<div
			key={1}
			className="flex w-full items-center justify-center bg-card/50"
		>
			<p className="w-full max-w-[500px] rounded-2xl border border-primary p-4 text-center text-xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
				{`RNGMeter consumes that state through the Alt1 API and watches for boss kills and tracked drop events in the player's chat.`}
			</p>
		</div>,
		<div
			key={2}
			className="flex w-full items-center justify-center bg-card/50"
		>
			<p className="w-full max-w-[500px] rounded-2xl border border-primary p-4 text-center text-xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
				{`When an event is detected, RNGMeter updates the relevant counts, recalculates each item's drop chance, and saves the new state.`}
			</p>
		</div>,
		<div
			key={3}
			className="flex w-full items-center justify-center bg-card/50"
		>
			<p className="w-full max-w-[500px] rounded-2xl border border-primary p-4 text-center text-xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
				{`The overlay then re-renders with the latest values, keeping the tracker synchronized with the game.`}
			</p>
		</div>,
	];

	return (
		<section className="border-t border-border px-6 pt-20 lg:px-12">
			<div className=" mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
				<header>
					<p className="text-sm uppercase tracking-[0.2em] text-primary">
						03 · System overview
					</p>
				</header>

				<div className="max-w-3xl">
					<h2 className="font-display text-4xl md:text-5xl">
						How the system works
					</h2>
					<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
						From Alt1 to RNGMeter, the main pipeline is about
						updating states in real-time.
					</p>
				</div>
			</div>

			<div className="relative mx-auto mt-8 w-full max-w-[628px] px-10 sm:px-16">
				<button
					type="button"
					onClick={previousProject}
					disabled={!currProjectIdx}
					className="d-btn d-btn-circle dark:d-btn-primary d-btn-warning d-btn-sm absolute left-0 md:top-1/2 top-[40%] z-20 -translate-y-1/2 border border-muted-foreground text-muted-foreground shadow-none disabled:opacity-30 sm:d-btn-lg"
				>
					<ChevronLeft className="size-5" />
				</button>

				<button
					type="button"
					onClick={nextProject}
					disabled={currProjectIdx === explanationSteps.length - 1}
					className="d-btn d-btn-circle dark:d-btn-primary d-btn-warning d-btn-sm absolute right-0 md:top-1/2 top-[40%] z-20 -translate-y-1/2 border border-muted-foreground text-muted-foreground shadow-none disabled:opacity-30 sm:d-btn-lg"
				>
					<ChevronRight className="size-5" />
				</button>

				<div className="min-w-0 min-h-0 min-h-[280px] h-[300px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={currProjectIdx}
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.98 }}
							transition={{ duration: 0.3 }}
						>
							{explanationSteps[currProjectIdx]}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
