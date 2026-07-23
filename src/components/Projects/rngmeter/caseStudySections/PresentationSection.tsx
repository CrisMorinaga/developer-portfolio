import Image from "next/image";
import { useTheme } from "next-themes";

import {
	PresentationHighlights,
	BreadCrumbs,
} from "@/components/Projects/parts";
import { LiveAppButton } from "@/components/ui";

const highlights = [
	{
		title: "PROBABILITY CALCULATION",
		description:
			"Uses binomial distribution to predict the current drop rate probability according to the player's kill count.",
	},
	{
		title: "PERSISTENT STATE",
		description:
			"Saves progress, tracked bosses, drop rate probability, and kill count even after the user closes the game.",
	},
	{
		title: "AUTOMATIC STATE UPDATES",
		description:
			"Tracked state is automatically updated while the player plays the game. ",
	},
];

export function PresentationSection() {
	const { resolvedTheme } = useTheme();

	const isLightTheme = resolvedTheme === "light";

	const logoSrc = isLightTheme
		? "/projects/rngmeter/logolight.png"
		: "/projects/rngmeter/logoDark.png";

	const breadCrumbRoutes = [
		{ name: "Home", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "RNGMeter", href: "" },
	];

	return (
		<>
			<BreadCrumbs routes={breadCrumbRoutes} />

			<div className="px-6 pb-10 md:pt-10 pt-10 lg:px-12">
				<div className="mx-auto max-w-7xl flex flex-col gap-8 md:items-start items-center ">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
						Oct 2025 - Dec 2025
					</p>

					<div className="max-w-4xl">
						<div className="flex justify-start">
							<h1 className="font-display leading-relaxed text-6xl">
								RNGMeter
							</h1>
						</div>
					</div>

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
			</div>

			<div className="flex justify-center w-full">
				<Image
					src={logoSrc}
					alt="rstavern-logo"
					width={100}
					height={100}
					className="pointer-events-none select-none"
				/>
			</div>

			<PresentationHighlights highlights={highlights} />
		</>
	);
}
