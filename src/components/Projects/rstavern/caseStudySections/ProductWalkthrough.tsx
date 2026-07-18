import { SectionHeading } from "./SectionHeading";

type WalkthroughVideo = {
	mp4Src: string;
	poster?: string;
	title: string;
	description: string;
	ariaLabel: string;
};

type ProductWalkthroughProps = {
	videos: WalkthroughVideo[];
};

export function ProductWalkthrough({ videos }: ProductWalkthroughProps) {
	return (
		<section className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
			<SectionHeading
				eyebrow="05 · Interface"
				title="Product walkthrough"
			/>

			<div className="space-y-16">
				{videos.map((video) => (
					<figure key={video.mp4Src}>
						<div className="overflow-hidden rounded-2xl border border-border bg-card">
							<video
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
								poster={video.poster}
								aria-label={video.ariaLabel}
								className="aspect-video w-full object-cover"
							>
								<source
									src={video.mp4Src}
									type="video/mp4"
								/>
								Your browser does not support embedded videos.
							</video>
							<figcaption className="p-4 grid gap-2 md:grid-cols-[0.4fr_0.6fr]">
								<h3 className="font-semibold text-foreground">
									{video.title}
								</h3>

								<p className="text-sm leading-relaxed text-muted-foreground">
									{video.description}
								</p>
							</figcaption>
						</div>
					</figure>
				))}
			</div>
		</section>
	);
}
