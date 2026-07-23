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

const auriImages = [
	{
		src: "/projects/rstavern/auri-quest-guidance.png",
		alt: "Auri's Tavern providing structured quest item guidance",
		caption: "Contextual quest guidance with suggested actions.",
	},
	{
		src: "/projects/rstavern/auri-item.png",
		alt: "User interacting with the item information UI",
		caption: "User interacting with the item information UI",
	},
	{
		src: "/projects/rstavern/auri-greeting.png",
		alt: "Auri greeting the player inside the tavern",
		caption: "In-character conversation and immersive tavern interface.",
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
			subtitle="AI companion for RuneScape"
			creationDate="Dec 2025 - Present"
			description="Contextual quest guidance powered by multi-stage retrieval and structured conversation memory."
			liveAppUrl="https://www.rstavernchat.com/"
			callToActionRoute="/projects/rstavern"
			galleryImgs={auriImages}
			technologiesArr={technologiesArr}
		/>
	);
}
