import Image from "next/image";

import {
	Database,
	GitBranch,
	Layers,
	ShieldCheck,
	ExternalLink,
} from "lucide-react";
import { LiveAppButton } from "@/components/ui/LiveAppButton";

const highlights = [
	{
		title: "HYBRID RETRIEVAL",
		description:
			"Combines intent routing, BM25 keyword retrieval, and semantic search to find context relevant to the selected quest and question.",
		icon: <Layers />,
	},
	{
		title: "STRUCTURED CONTEXT",
		description:
			"Stores quest, step, item, and intent metadata per turn so ambiguous follow-ups can be resolved without relying solely on chat history.",
		icon: <Database />,
	},
	{
		title: "BRANCHING CHAT",
		description:
			"Editing an earlier message creates a new branch, allowing users to explore alternatives without losing the original path.",
		icon: <GitBranch />,
	},
	{
		title: "PERSISTENT CHAT STATE",
		description:
			"Messages and branches persist across sessions. Interrupted requests can be retried without losing the existing conversation.",
		icon: <ShieldCheck />,
	},
];

export function PresentationSection() {
	return (
		<>
			<section className="d-breadcrumbs text-sm">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/projects">Projects</a>
					</li>
					<li>RSTavern</li>
				</ul>
			</section>

			<section className="px-6 pb-10 md:pt-10 pt-10 lg:px-12">
				<div className="mx-auto max-w-7xl flex flex-col gap-8 md:items-start items-center ">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
						Case Study · Oct 2025 - Present
					</p>

					<section className="max-w-4xl">
						<div className="flex justify-start">
							<Image
								src={"/projects/rstavern/logotext.png"}
								className="md:w-[400px] h-auto w-[300px] pointer-events-none select-none dark:bg-dark bg-primary rounded-xl dark:p-0 p-2"
								alt="rstavern-logo"
								width={400}
								height={200}
							/>
						</div>
					</section>

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
			</section>

			<section className="w-full">
				<div className="flex justify-center w-full">
					<Image
						src={"/projects/rstavern/rstavern.png"}
						alt="rstavern-logo"
						width={150}
						height={150}
						className="pointer-events-none select-none"
					/>
				</div>
			</section>

			<section className="px-6 pb-16 lg:px-12">
				<div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
					{highlights.map((highlight) => (
						<div
							key={highlight.title}
							className="bg-card p-6"
						>
							{/* <highlight.icon className="size-6 text-primary" /> */}

							<p className="mt-4 font-medium">
								{highlight.title}
							</p>

							<p className="mt-2 text-sm text-muted-foreground">
								{highlight.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
