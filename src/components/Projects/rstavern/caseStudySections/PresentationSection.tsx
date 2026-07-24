import Image from "next/image";

import {
	BreadCrumbs,
	PresentationHighlights,
} from "@/components/Projects/parts";
import { LiveAppButton } from "@/components/ui";

const highlights = [
	{
		title: "HYBRID RETRIEVAL",
		description:
			"Uses intent routing, BM25, and semantic search to find information related to the selected quest and the player's question.",
	},
	{
		title: "STRUCTURED CONTEXT",
		description:
			"Saves the quest, current step, referenced items, and intent with each turn. This gives follow-up questions enough context without depending only on chat history.",
	},
	{
		title: "BRANCHING CHAT",
		description:
			"Editing an earlier message starts a new branch without deleting the original conversation.",
	},
	{
		title: "PERSISTENT CHAT STATE",
		description:
			"Messages and branches persist across sessions. Interrupted requests can be retried without losing the existing conversation.",
	},
];

const routes = [
	{ href: "/", name: "Home" },
	{ href: "/projects", name: "Projects" },
	{ href: "", name: "RSTavern" },
];

export function PresentationSection() {
	return (
		<>
			<BreadCrumbs routes={routes} />

			<div className="px-6 pb-10 md:pt-10 pt-10 lg:px-12">
				<div className="mx-auto max-w-7xl flex flex-col gap-8 md:items-start items-center ">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
						Dec 2025 - Present
					</p>

					<div className="flex justify-start">
						<Image
							src={"/projects/rstavern/logotext.png"}
							className="md:w-[400px] h-auto w-[300px] pointer-events-none select-none dark:bg-background bg-primary rounded-xl dark:p-0 p-2"
							alt="rstavern-logo"
							width={400}
							height={200}
						/>
					</div>

					<p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl md:text-start text-center">
						{`Building a context-aware RuneScape companion that
						understands the player's quest state, what they need, and
						what “next” means.`}
					</p>

					<div className="flex flex-wrap gap-4">
						<LiveAppButton href="https://www.rstavernchat.com/" />
					</div>

					<div className="flex md:text-base text-xs">
						<p>Role - Full-stack developer & designer</p>
						<div className="d-divider d-divider-horizontal mx-2" />
						<p>Status - In development</p>
						<div className="d-divider d-divider-horizontal mx-2" />
						<p>Source - Private repository</p>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<Image
					src={"/projects/rstavern/rstavern.png"}
					alt="rstavern-logo"
					width={150}
					height={150}
					className="pointer-events-none select-none"
				/>
			</div>

			<PresentationHighlights highlights={highlights} />
		</>
	);
}
