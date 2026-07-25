import { SectionHeading } from "./SectionHeading";

const developmentNotes = [
	{
		title: "More context was not always better",
		description:
			"Early versions relied heavily on conversation history, but more context did not always lead to better answers. Keeping the current quest, step, item, and intent as structured data made follow-up questions much easier to handle and test.",
	},
	{
		title: "The model needs to know when to stop",
		description:
			'When retrieval does not find enough reliable information, the model can still invent an answer that sounds convincing. In those cases, a direct instruction such as "Do not answer yet; ask whether the player means X" worked better than adding more loosely related context.',
	},
	{
		title: "Known state should stay in code",
		description:
			"If the application already knows the selected quest or current step, there is little reason to ask the model to figure it out again. Resolving that state in code made the answers more predictable and removed unnecessary guesswork.",
	},
	{
		title: "Not every failure should be handled the same way",
		description:
			"An interrupted response, missing retrieval results, and unavailable remote storage are different problems. Treating them separately made it easier to show the right message and recover without forcing the user to restart everything.",
	},
];

const currentLimitations = [
	"Quest and item coverage depends on structured source data. Since that data can change after game updates, keeping it accurate will require ongoing maintenance.",
	"Long conversation branches will eventually need to be summarized or compacted instead of keeping their entire history.",
	"AI models have improved a lot, but hallucinations are still a problem without a complete solution.",
];

export const LessonsSection = () => (
	<div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
		<SectionHeading
			eyebrow="07 · Notes"
			title="Notes from development"
		/>

		<div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
			<div className="space-y-8">
				{developmentNotes.map(({ title, description }, index) => (
					<article
						key={title}
						className="grid gap-4 border-b border-border pb-8 sm:grid-cols-[3rem_1fr]"
					>
						<span className="font-display text-2xl text-primary/60">
							0{index + 1}
						</span>

						<div>
							<h3 className="text-xl font-semibold text-foreground">
								{title}
							</h3>

							<p className="mt-3 leading-relaxed text-muted-foreground">
								{description}
							</p>
						</div>
					</article>
				))}
			</div>

			<aside className="h-fit border-l-2 border-primary pl-7">
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
					Current limitations
				</p>

				<ul className="mt-6 space-y-5">
					{currentLimitations.map((limitation) => (
						<li
							key={limitation}
							className="flex gap-3 text-muted-foreground"
						>
							<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

							<span className="leading-relaxed">
								{limitation}
							</span>
						</li>
					))}
				</ul>
			</aside>
		</div>
	</div>
);
