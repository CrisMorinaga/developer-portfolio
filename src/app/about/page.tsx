import Link from "next/link";

import { TimeScene } from "@/components/About";
import { YoutubeIcon } from "@/components/ui/SocialIcons";

import { Music } from "lucide-react";

type InfoItem = {
	title: string;
	description: string;
};

const info = [
	{ title: "BASED IN", description: "Japan" },
	{ title: "LANGUAGES", description: "Spanish • English • Japanese" },
	{
		title: "CERTIFICATION",
		description: "Fundamental Information Technology Engineer Examination",
	},
	{ title: "CURRENTLY", description: "Building RSTavern" },
];

function AboutFacts({ items }: { items: InfoItem[] }) {
	return (
		<div className="flex flex-col">
			{items.map(({ title, description }) => (
				<div key={title}>
					<div className="d-divider m-0 before:bg-muted-foreground/20 after:bg-muted-foreground/20" />
					<div className="flex items-center justify-start gap-2 lg:text-sm text-xs">
						<p className="flex-1 text-muted-foreground flex-wrap">
							{title}
						</p>
						<p className="flex-1/2 flex-wrap">{description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default function About() {
	return (
		<div className="flex w-full flex-col items-center justify-center lg:px-30 px-15 sm:py-10 py-5 sm:pt-10 pt-0">
			<div className="flex md:flex-row flex-col md:gap-4 gap-10 items-center justify-center py-5">
				<div className="flex flex-col gap-2 flex-1 leading-relaxed">
					<p className="text-primary lg:text-xl md:text-lg md:text-start text-center">
						About me
					</p>
					<h1 className="text-center font-display text-5xl md:text-start lg:text-6xl">
						<span className="block">Music came first.</span>
						<span className="block">Software came later.</span>
					</h1>

					<Link
						href="https://www.youtube.com/watch?v=8-3RiKe1jfk&t=1s"
						target="_blank"
						rel="noreferrer"
						className="group relative z-10 inline-flex items-center gap-2 text-foreground/80 transition hover:text-primary md:self-start self-center"
						aria-label="YouTube Video"
					>
						<span className="font-mont sm:text-start text-sm text-center group-hover:underline">
							{`A window into one of my piano `}
							<span className="inline-flex items-center gap-2 whitespace-nowrap group-hover:underline">
								{`performances · Chopin, 2020`}
								<YoutubeIcon className="size-5 shrink-0" />
							</span>
						</span>
					</Link>

					<Music
						size={450}
						strokeWidth={1}
						className="absolute top-20 opacity-5 w-[clamp(220px,35vw,450px)] md:flex hidden"
					/>
				</div>
				<div className="d-divider md:hidden flex m-0 before:bg-muted-foreground/20 after:bg-muted-foreground/20" />

				<div className="flex-1 flex flex-col gap-5">
					<div className="flex flex-col gap-4 lg:text-base text-sm md:text-start text-center">
						<p>
							{`I'm a Chilean full-stack developer based in Japan.
              Before moving into software, I trained as a pianist and
              worked in music education. `}
						</p>
						<p>
							{`I began programming in 2023 and now work primarily
							with TypeScript, React, Next.js, and backend
							services. My recent work includes RSTavern, a
							context-aware RuneScape companion.`}
						</p>
					</div>
					<AboutFacts items={info} />
				</div>
			</div>

			<div className="d-divider before:bg-muted-foreground/20 after:bg-muted-foreground/20" />

			<div className="flex md:flex-row flex-col gap-2">
				<div className="flex flex-col flex-1 md:text-start text-center">
					<p className="text-primary lg:text-base text-sm">
						A small corner of the site
					</p>
					<p className="lg:text-2xl text-xl">
						Meanwhile, somewhere in Japan...
					</p>
					<p className="text-muted-foreground lg:text-base text-sm">
						This little scene changes throught the day. Try pressing
						the clock!
					</p>
				</div>
				<TimeScene />
			</div>
		</div>
	);
}
