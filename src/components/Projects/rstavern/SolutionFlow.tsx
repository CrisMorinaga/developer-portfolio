export function SolutionFlow() {
	const steps = [
		{
			title: "Select a quest",
			description:
				"The user selects the quest that they want to talk about from our quest database.",
		},
		{
			title: "Ask naturally",
			description:
				"In natural language, the user asks as if talking with a real companion.",
		},
		{
			title: "Receive contextual guidance",
			description:
				"Auri responds with correct information about the topic and gives her own insight into the problem.",
		},
		{
			title: "Continue through suggested follow-ups",
			description:
				"The app offers follow-ups suggestions to help the user find its answers.",
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-4">
			{steps.map((step, index) => (
				<article
					key={step.title}
					className="rounded-xl border border-border bg-card p-6"
				>
					<span className="font-display text-4xl text-primary/50">
						0{index + 1}
					</span>

					<h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

					<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
						{step.description}
					</p>
				</article>
			))}
		</div>
	);
}
