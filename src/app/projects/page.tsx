"use client";
import Image from "next/image";

import { TechnologyCards } from "@/components/Projects/TechnologiesCards";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import { LiveAppButton } from "@/components/ui/LiveAppButton";
import { CallToActionButton } from "@/components/ui/CallToActionButton";

import { Calendar } from "lucide-react";

const technologiesArr = [
	"Next.js",
	"TypeScript",
	"Supabase",
	"Redis",
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

export default function Projects() {
	return (
		<div className="w-full p-5 px-10 flex flex-col gap-4">
			<div className="grid max-[1100px]:grid-cols-1 gap-6 grid-cols-[1fr_3fr]">
				<div className="flex flex-col min-w-0 items-start max-[1100px]:items-center max-[1100px]:text-[1.5rem] text-base mt-5 gap-2 ">
					<h1 className="text-[#a16839] text-[1em]">
						Featured project
					</h1>

					<div className="flex justify-start max-w-4xl">
						<Image
							src={"/projects/rstavern/logotext.png"}
							className="md:w-[250px] h-auto w-[250px] pointer-events-none select-none dark:bg-dark bg-primary rounded-xl dark:p-0 p-2"
							alt="rstavern-logo"
							width={400}
							height={400}
						/>
					</div>

					<p className="text-[0.9375em] muted-foreground">
						AI companion for RuneScape
					</p>

					<div className="flex gap-1 items-center">
						<Calendar
							color={"#a16839"}
							size={15}
						/>

						<p className="text-[0.75em] muted-foreground">
							Oct 2025 - Present
						</p>
					</div>

					<div className="d-divider" />

					<p className="text-[15px] text-muted-foreground w-[80%] text-start max-[1100px]:text-center">
						Contextual quest guidance powered by multi-stage
						retrieval and structured conversation memory.
					</p>
					<div className="flex gap-2 mt-5">
						<LiveAppButton href="https://www.rstavernchat.com/" />
						<CallToActionButton
							btnTitle="Case study"
							href="/projects/rstavern"
							direction="right"
						/>
					</div>
				</div>
				<ProjectGallery images={auriImages} />
			</div>
			<div className="flex gap-2 items-start w-full">
				<div className="flex flex-col gap-2">
					<p className="text-[#cd7c3b] text-[14px] ">Technologies</p>
					<div className="flex gap-4 flex-wrap">
						{technologiesArr.map((title, i) => (
							<TechnologyCards
								key={i}
								title={title}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
