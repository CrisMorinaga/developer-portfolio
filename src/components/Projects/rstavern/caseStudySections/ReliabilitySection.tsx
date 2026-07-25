import { RefreshCw } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const reliabilityItems = [
	{
		label: "Temporary API failure",
		response:
			"Retries the request with backoff without losing the current conversation or selected quest.",
	},
	{
		label: "Interrupted response stream",
		response:
			"Stops the incomplete response, keeps the messages already in the conversation, and lets the user try again.",
	},
	{
		label: "Not enough retrieval context",
		response:
			"Gives Auri a specific instruction to ask for clarification instead of guessing, while still responding in character.",
	},
	{
		label: "Ambiguous follow-up",
		response:
			"Uses the quest step, referenced items, and previous intent to understand vague questions such as “What should I do next?”",
	},
	{
		label: "Rate limit reached",
		response:
			"Stops the request before calling the model and tells the user when they can try again.",
	},
];

export function ReliabilitySection() {
	return (
		<div className="bg-card/30">
			<SectionHeading
				eyebrow="04 · Reliability"
				title="Handling failures"
				description={[
					"AI streaming can fail in several places. RSTavern tries to recover without losing the conversation or leaving the user wondering what happened.",
				]}
			/>

			<div className="mt-5 overflow-hidden rounded-2xl border border-border">
				{reliabilityItems.map(({ label, response }) => (
					<div
						key={label}
						className="grid gap-4 border-b border-border p-6 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:p-8"
					>
						<div className="flex items-center gap-3 font-semibold text-foreground">
							<RefreshCw className="size-5 shrink-0 text-primary" />
							{label}
						</div>

						<p className="leading-relaxed text-muted-foreground">
							{response}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
