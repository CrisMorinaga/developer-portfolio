import { SectionHeading } from "./SectionHeading";

const developmentNotes = [
	{
		title: "More context was not always better",
		description:
			"Earlier versions relied more heavily on conversation history. Storing quest, step, item, and intent data explicitly made follow-up behavior easier to reason about and test.",
	},
	{
		title: "The model needs a clear way not to answer",
		description:
			'When retrieval does not provide enough reliable context, the model may still fill the gaps with a plausible response. Giving Auri a short instruction such as "Do not answer yet; ask whether the player means X" proved more reliable than supplying additional but weakly related context.',
	},
	{
		title: "Known state should stay in code",
		description:
			"When the selected quest or current step is already known, resolving that state before generation produces more consistent results than asking the model to infer it again.",
	},
	{
		title: "Different failures need different recovery paths",
		description:
			"An interrupted stream, a retrieval miss, and unavailable remote storage are separate problems. Handling them individually made recovery behavior clearer for both the application and the user.",
	},
];

const currentLimitations = [
	"Quest coverage still depends on structured source data and remains the main scaling constraint.",
	"The retrieval evaluation set needs more paraphrases, vague follow-ups, and item-acquisition queries.",
	"Long conversation branches will eventually require compaction instead of carrying their full history.",
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
