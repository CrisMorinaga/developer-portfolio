import Image from "next/image";
import Project from "@/components/Projects/Project";

const technologiesArr = [
	"Next.js",
	"TypeScript",
	"Supabase",
	"IndexedDB",
	"Upstash Redis",
	"Clerk",
	"Resend",
	"OpenAI API",
];

const featuresArr = [
	"Hybrid retrieval",
	"Interaction-driven relationships",
	"Persistent & recoverable state",
	"Branching conversations",
];

const projectImages = [
	{
		src: "/projects/rstavern/auri-quest-guidance.webp",
		alt: "Auri providing structured quest item guidance",
		caption: "Contextual quest guidance with suggested actions.",
	},
	{
		src: "/projects/rstavern/auri-item.webp",
		alt: "User interacting with the item information UI",
		caption:
			"Retrieved quests items open into interactive information view",
	},
	{
		src: "/projects/rstavern/negative-interaction.webp",
		alt: "User interacts negatively with Auri",
		caption:
			"Interactions with Auri dynamically update your relationship with her.",
	},
	{
		src: "/projects/rstavern/branching.webp",
		alt: "Auri greeting the player inside the tavern",
		caption:
			"Editing an earlier message creates a new conversation branch while preserving the original.",
	},
];

export function RSTavern() {
	return (
		<Project
			header="Featured project"
			title={
				<Image
					src={"/projects/rstavern/logotext.png"}
					className="md:w-[250px] h-auto w-[250px] pointer-events-none select-none dark:bg-background bg-primary rounded-xl dark:p-0 p-2"
					alt="rstavern-logo"
					width={400}
					height={400}
				/>
			}
			subtitle="Context-aware quest companion for RuneScape"
			creationDate="Dec 2025 - Present"
			description="A quest companion that retrieves information relevant to the player's current quest and step, supports branching conversations, preserves chat state across sessions and interrupted requests, and dynamically evolves its relationship with the player."
			liveAppUrl="https://www.rstavernchat.com/"
			callToActionRoute="/projects/rstavern"
			galleryImgs={projectImages}
			technologiesArr={technologiesArr}
			featuresArr={featuresArr}
		/>
	);
}
