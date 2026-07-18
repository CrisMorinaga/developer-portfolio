import { RefreshCw, ShieldCheck } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const reliabilityItems = [
	{
		label: "Temporary API failure",
		response:
			"Retries the request with backoff while keeping the current conversation and selected quest intact.",
	},
	{
		label: "Interrupted response stream",
		response:
			"Stops the incomplete stream, preserves the existing conversation, and gives the user a clear way to retry.",
	},
	{
		label: "Insufficient retrieval context",
		response:
			"Gives Auri failure-specific instructions so she can ask a targeted clarification question while remaining in character.",
	},
	{
		label: "Ambiguous follow-up",
		response:
			"Uses quest-step, item, and intent metadata from previous turns to resolve vague questions such as “What should I do next?”",
	},
	{
		label: "Rate limit reached",
		response:
			"Stops the request before generation and clearly tells the user when they can try again.",
	},
];

export function ReliabilitySection() {
	return (
		<section className="bg-card/30">
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<SectionHeading
					eyebrow="04 · Reliability"
					title="Handling failures"
					description={[
						"Streaming AI interfaces can fail in several places. RSTavern keeps those failures understandable and recoverable.",
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
		</section>
	);
}
