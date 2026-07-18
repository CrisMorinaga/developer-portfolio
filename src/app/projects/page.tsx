"use client";
import Image from "next/image";

import { TechnologyCards } from "@/components/Projects/TechnologiesCards";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import { LiveAppButton } from "@/components/ui/LiveAppButton";
import { CallToActionButton } from "@/components/ui/CallToActionButton";

import { Calendar } from "lucide-react";

import smartbrain from "@/public/Projects/SmartBrain.webp";
import tictactoe from "@/public/Projects/TicTacToe.webp";
import chatroom from "@/public/Projects/ChatRoom.webp";

// const featuredProject = {
//     title: 'SmartBrain',
//     img: smartbrain,
//     type: "Featured Project",
//     summary: "A website that uses Clarifai API to scan an image and detect faces on it.",
//     backend: ['Clarifai','Flask', 'SQLAlchemy', 'Flask-login', 'Werkzeug Security'],
//     frontend: ['React', 'Next.js 13', 'Tailwind', 'Zod', 'Next-auth', 'Axios', 'Shadcn-UI'],
//     database: ['PostgreSQL'],
//     cloudStorage: ['Firebase'],
//     link: "https://smartbrai.vercel.app/",
//     github: "https://github.com/CrisMorinaga/SmartBrain"
// }

const project1 = {
	title: "AI Tic-Tac-Toe",
	img: tictactoe,
	type: "Python Project",
	summary:
		"A Tic-Tac-Toe game build using Pygame with an 3 level difficulty AI.",
	link: "https://github.com/CrisMorinaga/Tic-Tac-Toe",
	github: "https://github.com/CrisMorinaga/Tic-Tac-Toe",
};
const project2 = {
	title: "Chat Room",
	img: chatroom,
	type: "Python - React/Next.Js 13 Project",
	summary: "A chat room built using Flask-Socketio and React/Next.js.",
	link: "https://github.com/CrisMorinaga/ChatRoom",
	github: "https://github.com/CrisMorinaga/ChatRoom",
};

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

					<section className="max-w-4xl">
						<div className="flex justify-start">
							<Image
								src={"/Projects/rstavern/logotext.png"}
								className="md:w-[250px] h-auto w-[250px]"
								alt="rstavern-logo"
								width={400}
								height={400}
							/>
						</div>
					</section>

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
