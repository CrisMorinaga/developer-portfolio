"use client";
import { TimeScene } from "@/components/About/TimeScene";
import { YoutubeIcon } from "@/components/Home/Icons";
import { Music } from "lucide-react";
import Link from "next/link";

const info = [
	{ title: "BASED IN", description: "Japan" },
	{ title: "LANGUAGES", description: "Spanish • English • Japanese" },
	{
		title: "CERTIFICATION",
		description: "Fundamental Information Technology Engineer Examination",
	},
	{ title: "CURRENTLY", description: "Building RSTavern" },
];

export default function About() {
	return (
		<div className="flex w-full min-w-screen flex-col item-center justify-center lg:px-30 px-15 sm:py-10 py-5 sm:pt-10 pt-0">
			<section className="flex md:flex-row flex-col md:gap-4 gap-10 items-center justify-center py-5">
				<div className="flex flex-col gap-2 flex-1 font-display leading-relaxed">
					<p className="text-primary lg:text-xl md:text-lg md:text-start text-center">
						About me
					</p>
					<p className="lg:text-6xl text-5xl md:text-start text-center">
						Music came first.
					</p>
					<p className="lg:text-6xl text-5xl md:text-start text-center">
						Software came later.
					</p>

					{/* <Link
						href="https://www.youtube.com/watch?v=8-3RiKe1jfk&t=1s"
						target="_blank"
						rel="noreferrer"
						className="group relative z-10 inline-flex items-center gap-2 text-foreground/80 transition hover:text-primary md:self-start self-center"
						aria-label="YouTube Video"
					>
						<span className="font-mont text-center group-hover:underline sm:text-start">
							A window into one of my piano{" "}
							<span className="inline-flex items-center gap-2 whitespace-nowrap group-hover:underline">
								performances
								<YoutubeIcon className="size-5 shrink-0" />
							</span>
						</span>
					</Link> */}

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
							I began programming in 2023 and now work primarily
							with TypeScript, React, Next.js, and backend
							services. My recent work includes RSTavern, a
							context-aware RuneScape companion.
						</p>
					</div>

					<div className="flex flex-col">
						{info.map((info, i) => (
							<div key={i}>
								<div className="d-divider m-0 before:bg-muted-foreground/20 after:bg-muted-foreground/20" />
								<div className="flex items-center justify-start gap-2 lg:text-sm text-xs">
									<p className="flex-1 text-muted-foreground flex-wrap">
										{info.title}
									</p>
									<p className="flex-1/2 flex-wrap">
										{info.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<div className="d-divider before:bg-muted-foreground/20 after:bg-muted-foreground/20" />

			<section className="flex md:flex-row flex-col gap-2">
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
			</section>
		</div>
	);
}
