import { Check } from "lucide-react";
import { motion, MotionValue, useTransform } from "motion/react";

type TimelineMarkerProps = {
	progress: MotionValue<number>;
	index: number;
	position: number;
	isFirst: boolean;
	register: (element: HTMLDivElement | null) => void;
};

export function TimelineMarker({
	progress,
	index,
	position,
	isFirst,
	register,
}: TimelineMarkerProps) {
	const activationStart = Math.max(0, position - 0.025);

	const activationProgress = useTransform(
		progress,
		[activationStart, position],
		[0, 1],
		{ clamp: true },
	);

	const scale = useTransform(activationProgress, [0, 1], [0.78, 1]);

	return (
		<div
			ref={register}
			className="d-timeline-middle"
		>
			<motion.div
				style={{ scale: isFirst ? 1 : scale }}
				className="relative z-10 grid size-8 place-items-center rounded-full border border-border bg-background shadow-sm"
			>
				<motion.span
					aria-hidden="true"
					style={{ opacity: isFirst ? 1 : activationProgress }}
					className="absolute inset-0 rounded-full bg-primary"
				/>

				<motion.span
					style={{ opacity: isFirst ? 1 : activationProgress }}
					className="relative z-10"
				>
					<Check
						aria-hidden="true"
						className="size-4 text-primary-foreground"
						strokeWidth={3}
					/>
				</motion.span>

				<span className="sr-only">Pipeline step {index + 1}</span>
			</motion.div>
		</div>
	);
}
