"use client";

import {
	ProblemSection,
	SolutionSection,
	SystemOverview,
	LessonsSection,
	ProductWalkthrough,
	ReliabilitySection,
	TechnologiesSection,
	PresentationSection,
} from "@/components/Projects/rstavern/caseStudySections";
import { LiveAppButton } from "@/components/ui/LiveAppButton";
import { CallToActionButton } from "@/components/ui/CallToActionButton";

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
];

export default function Page() {
	return (
		<div className="w-full p-5 px-10 flex flex-col gap-4">
			<PresentationSection />
			<ProblemSection />
			<SolutionSection />
			<SystemOverview />
			<ReliabilitySection />
			<ProductWalkthrough videos={walkthroughVideos} />
			<TechnologiesSection />
			<LessonsSection />
			<div className="flex gap-2 mt-5 md:w-100 w-full">
				<CallToActionButton
					className="flex-1"
					href="/projects"
					btnTitle="Back to projects"
					direction="left"
				/>
				<LiveAppButton
					className="flex-1"
					href="https://www.rstavernchat.com/"
				/>
			</div>
		</div>
	);
}
