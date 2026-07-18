type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	description?: string[];
};

export function SectionHeading({
	eyebrow,
	title,
	description,
}: SectionHeadingProps) {
	return (
		<section className="border-t border-border px-6 py-20 lg:px-12">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
				<header>
					<p className="text-sm uppercase tracking-[0.2em] text-primary">
						{eyebrow}
					</p>
				</header>
				<div className="max-w-3xl">
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						{title}
					</h2>

					{description?.map((d, i) => (
						<p
							key={i}
							className="mt-8 text-lg leading-relaxed text-muted-foreground"
						>
							{d}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
