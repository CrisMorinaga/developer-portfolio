import {
	motion,
	MotionValue,
	useMotionTemplate,
	useTransform,
} from "motion/react";

type ConnectorRange = {
	start: number;
	end: number;
};

type TimelineConnectorProps = {
	progress: MotionValue<number>;
	range: ConnectorRange;
	register: (element: HTMLHRElement | null) => void;
};

export function TimelineConnector({
	progress,
	range,
	register,
}: TimelineConnectorProps) {
	const fill = useTransform(progress, [range.start, range.end], [0, 100]);

	const background = useMotionTemplate`
    linear-gradient(
      to bottom,
      hsl(var(--primary)) 0%,
      hsl(var(--primary)) ${fill}%,
      hsl(var(--border)) ${fill}%,
      hsl(var(--border)) 100%
    )
  `;

	return (
		<motion.hr
			ref={register}
			aria-hidden="true"
			className="w-0.5 border-0"
			style={{ background }}
		/>
	);
}
