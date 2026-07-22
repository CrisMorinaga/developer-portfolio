import Image from "next/image";

import { useTheme } from "next-themes";
import { LiveAppButton } from "@/components/ui/LiveAppButton";

import { Database, GitBranch, Layers } from "lucide-react";

const highlights = [
	{
		title: "PROBABILITY CALCULATION",
		description:
			"Uses binomial distribution to predict the current drop rate probability according to the player's kill count.",
		icon: <Layers />,
	},
	{
		title: "PERSISTENT STATE",
		description:
			"Saves progress, tracked bosses, drop rate probability, and kill count even after the user closes the game.",
		icon: <Database />,
	},
	{
		title: "AUTOMATIC STATE UPDATES",
		description:
			"Tracked state is automatically updated while the player plays the game. ",
		icon: <GitBranch />,
	},
];

export function PresentationSection() {
	const { resolvedTheme } = useTheme();
	const shouldUseLightImg = resolvedTheme === "light";
	const logoSrc = shouldUseLightImg
		? "/projects/rngmeter/logolight.png"
		: "/projects/rngmeter/logoDark.png";

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
					<li>RNGMeter</li>
				</ul>
			</section>

			<section className="px-6 pb-10 md:pt-10 pt-10 lg:px-12">
				<div className="mx-auto max-w-7xl flex flex-col gap-8 md:items-start items-center ">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
						Oct 2025 - Dec 2025
					</p>

					<section className="max-w-4xl">
						<div className="flex justify-start">
							<h1 className="font-display leading-relaxed text-6xl">
								RNGMeter
							</h1>
						</div>
					</section>

					<p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl md:text-start text-center">
						{`Building a RuneScape probability tracker that
						automatically calculates the cumulative player's chance of getting the boss drop that they have been waiting for.`}
					</p>

					<div className="flex flex-wrap gap-4">
						<LiveAppButton
							title="Try demo"
							href="https://rngmeter.vercel.app/demo"
						/>
					</div>

					<div className="flex md:text-base text-xs">
						<p>Role - Full-stack developer & designer</p>
						<div className="d-divider d-divider-horizontal mx-2" />
						<p>Status - Finished</p>
						<div className="d-divider d-divider-horizontal mx-2" />
						<p>Source - Private repository</p>
					</div>
				</div>
			</section>

			<section className="w-full">
				<div className="flex justify-center w-full">
					<Image
						src={logoSrc}
						alt="rstavern-logo"
						width={100}
						height={100}
						className="pointer-events-none select-none"
					/>
				</div>
			</section>

			<section className="px-6 pb-16 lg:px-12">
				<div
					className={`mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-${highlights.length}`}
				>
					{highlights.map((highlight) => (
						<div
							key={highlight.title}
							className="bg-card p-6"
						>
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
