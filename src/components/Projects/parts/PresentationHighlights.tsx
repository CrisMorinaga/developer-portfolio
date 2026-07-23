type Highlights = {
	title: string;
	description: string;
}[];

export function PresentationHighlights({
	highlights,
}: {
	highlights: Highlights;
}) {
	return (
		<div className="px-6 pb-16 lg:px-12">
			<div
				className={`mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-${highlights.length}`}
			>
				{highlights.map(({ title, description }) => (
					<div
						key={title}
						className="bg-card p-6"
					>
						<p className="mt-4 font-medium">{title}</p>

						<p className="mt-2 text-sm text-muted-foreground">
							{description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
