"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import RSTavern from "@/components/Projects/rstavern/RSTavern";
import RNGMeter from "@/components/Projects/rngmeter/RNGMeter";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
	const projectsArr = [<RSTavern key={0} />, <RNGMeter key={1} />];

	const [currProjectIdx, setCurrProjectIdx] = useState(0);

	const previousProject = () => {
		if (!currProjectIdx) return;

		setCurrProjectIdx((prev) => prev - 1);
	};

	const nextProject = () => {
		if (currProjectIdx === projectsArr.length - 1) return;

		setCurrProjectIdx((prev) => prev + 1);
	};
	return (
		<div className="relative pt-5">
			<div className="absolute top-0 right-11 flex items-center gap-3 z-10">
				<span className="text-sm text-foreground/60">
					<span className="text-primary">
						{String(currProjectIdx + 1).padStart(2, "0")}
					</span>{" "}
					/ {String(projectsArr.length).padStart(2, "0")}
				</span>

				<button
					type="button"
					onClick={previousProject}
					disabled={!currProjectIdx}
					aria-label="Previous project"
					className="flex d-btn d-btn-sm d-btn-ghost shadow-none items-center justify-center rounded-md border border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary hover:bg-transparent disabled:border-muted-foreground/30"
				>
					<ChevronLeft className="size-5" />
				</button>
				<button
					type="button"
					disabled={currProjectIdx === projectsArr.length - 1}
					onClick={nextProject}
					aria-label="Previous project"
					className={`flex d-btn d-btn-sm d-btn-ghost shadow-none items-center justify-center rounded-md border border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary hover:bg-transparent disabled:border-muted-foreground/30`}
				>
					<ChevronRight className="size-5" />
				</button>
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={currProjectIdx}
					initial={{ opacity: 0, x: 0 }}
					animate={{ opacity: 1, x: 10 }}
					exit={{ opacity: 0, x: 0 }}
					transition={{ duration: 0.3 }}
				>
					{projectsArr[currProjectIdx]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
