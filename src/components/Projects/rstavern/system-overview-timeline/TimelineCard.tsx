type TimelineCardProps = {
	step: {
		label: string;
		title: string;
		description: string;
	}[][number];
	alignment: "start" | "end";
};

export function TimelineCard({ step, alignment }: TimelineCardProps) {
	return (
		<div className="rounded-2xl border border-border bg-card/70 p-6 text-start shadow-sm backdrop-blur-sm md:p-7">
			<p
				className={`font-mono text-sm font-semibold text-primary ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.label}
			</p>

			<h3
				className={`mt-2 text-xl font-semibold text-foreground ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.title}
			</h3>

			<p
				className={`mt-4 leading-relaxed text-muted-foreground ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.description}
			</p>
		</div>
	);
}
