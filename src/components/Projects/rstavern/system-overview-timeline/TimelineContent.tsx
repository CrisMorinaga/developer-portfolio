import { useRef } from "react";

import {
	motion,
	MotionValue,
	useReducedMotion,
	useTransform,
} from "motion/react";

import { TimelineCard } from "./TimelineCard";

import { getRevealProgress } from "./getRevealProgress";

export type PipelineSteps = {
	label: string;
	title: string;
	description: string;
};

type TimelineContentProps = {
	progress: MotionValue<number>;
	position: number;
	side: "start" | "end";
	isFirst: boolean;
	isLast: boolean;
	step: PipelineSteps[][number];
};

export function TimelineContent({
	progress,
	position,
	side,
	isFirst,
	isLast,
	step,
}: TimelineContentProps) {
	const prefersReducedMotion = useReducedMotion();

	// Geometry changes after measuring the DOM.
	// We save the most recent position without reconstruction the MotionValue.
	const positionRef = useRef(position);
	positionRef.current = position;

	const revealProgress = useTransform(progress, (currentProgress) =>
		getRevealProgress(currentProgress, positionRef.current, isFirst),
	);

	const opacity = revealProgress;

	const y = useTransform(revealProgress, [0, 1], [20, 0]);

	const x = useTransform(
		revealProgress,
		[0, 1],
		side === "start" ? [-24, 0] : [24, 0],
	);

	return (
		<motion.article
			style={{
				opacity,
				x: prefersReducedMotion ? 0 : x,
				y: prefersReducedMotion ? 0 : y,
			}}
			className={`
        w-full max-w-xl
        ${
			side === "start"
				? "d-timeline-start md:mr-8 md:text-end"
				: "d-timeline-end md:ml-8"
		}
        ${isLast ? "" : "mb-14 md:mb-20"}
      `}
		>
			<TimelineCard
				step={step}
				alignment={side}
			/>
		</motion.article>
	);
}
