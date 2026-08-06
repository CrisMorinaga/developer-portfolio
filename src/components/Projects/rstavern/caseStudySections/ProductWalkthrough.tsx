import { SectionHeading } from "./SectionHeading";

const walkthroughVideos = [
	{
		mp4Src: "/projects/rstavern/videos/QuestQuery.mp4",
		poster: "/projects/rstavern/videos/QuestQueryPoster.webp",
		title: "Quest selection and guidance",
		description:
			"Quest selection gives subsequent questions an explicit retrieval scope.",
		ariaLabel: "Selecting A Clockwork Syringe from the message composer",
	},
	{
		mp4Src: "/projects/rstavern/videos/Items.mp4",
		poster: "/projects/rstavern/videos/ItemsPoster.webp",
		title: "Interacting with the item information UI",
		description:
			"Assistant responses might contain interactable UI to dig deeper into the selected item information.",
		ariaLabel: "User selects different items to check their information",
	},
	{
		mp4Src: "/projects/rstavern/videos/Followup.mp4",
		poster: "/projects/rstavern/videos/FollowupPoster.webp",
		title: "Using the suggested follow-ups",
		description:
			"Every response might suggest follow-ups to the current query.",
		ariaLabel:
			"User selects the follow up question: 'Where do I start the quest?'.",
	},
	{
		mp4Src: "/projects/rstavern/videos/Branching.mp4",
		poster: "/projects/rstavern/videos/BranchingPoster.webp",
		title: "Editing a message and navigating branches",
		description:
			"Editing a message creates a new independent branch to use.",
		ariaLabel: "User edits an existing message and creates a new branch",
	},
	{
		mp4Src: "/projects/rstavern/videos/Negative_interaction.mp4",
		poster: "/projects/rstavern/videos/negativeInteractionPoster.webp",
		title: "Interactions dynamically update your relationship",
		description:
			"Depending on the player's interaction the change could be positive or negative.",
		ariaLabel: "User reacting negatively to an assistant message",
	},
];

export function ProductWalkthrough() {
	return (
		<div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
			<SectionHeading
				eyebrow="05 · Interface"
				title="Project walkthrough"
			/>

			<div className="space-y-16">
				{walkthroughVideos.map((video) => (
					<figure
						key={video.mp4Src}
						className="flex flex-col items-center"
					>
						<div className="overflow-hidden rounded-2xl border border-border bg-card">
							<video
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
								poster={video.poster}
								aria-label={video.ariaLabel}
								className="w-full object-cover"
							>
								<source
									src={video.mp4Src}
									type="video/mp4"
								/>
								Your browser does not support embedded videos.
							</video>
							<figcaption className="p-4 grid gap-2 md:grid-cols-[0.4fr_0.6fr]">
								<h3 className="font-semibold text-foreground">
									{video.title}
								</h3>

								<p className="text-sm leading-relaxed text-muted-foreground">
									{video.description}
								</p>
							</figcaption>
						</div>
					</figure>
				))}
			</div>
		</div>
	);
}
