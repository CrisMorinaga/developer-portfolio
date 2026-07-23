type SectionHeadingProps = {
	eyebrow: string;
	title: string | React.ReactNode;
	description?: string[];
};

export function SectionHeading({
	eyebrow,
	title,
	description,
}: SectionHeadingProps) {
	return (
		<div className="border-t border-border px-6 sm:py-20 py-10 lg:px-12">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
				<header>
					<p className="text-sm uppercase tracking-[0.2em] text-primary">
						{eyebrow}
					</p>
				</header>
				<div className="max-w-3xl">
					{typeof title === "string" ? (
						<h2 className="mt-4 font-display text-4xl md:text-5xl">
							{title}
						</h2>
					) : (
						title
					)}
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
		</div>
	);
}
