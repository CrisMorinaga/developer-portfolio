type TechnologyGroup = {
	title: string;
	items: string[];
};

export function TechnologyCards({
	technologyGroups,
}: {
	technologyGroups: TechnologyGroup[];
}) {
	return (
		<div
			className={`grid gap-5 md:grid-cols-${String(technologyGroups.length)}`}
		>
			{technologyGroups.map(({ title, items }) => (
				<div
					key={title}
					className="rounded-2xl border border-primary bg-background p-7"
				>
					<h3 className="font-display text-2xl text-foreground">
						{title}
					</h3>

					<ul className="mt-6 flex flex-wrap gap-2">
						{items.map((item) => (
							<li
								key={item}
								className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
