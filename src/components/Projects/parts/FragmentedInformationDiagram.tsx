import {
	ArrowDown,
	BookOpen,
	MessageSquare,
	PlaySquare,
	Search,
	Bot,
} from "lucide-react";

const sources = [
	{
		title: "Wiki pages",
		description: "Complete, but often lengthy.",
		icon: BookOpen,
	},
	{
		title: "Forum posts",
		description: "Useful, but answers are scattered across discussions.",
		icon: MessageSquare,
	},
	{
		title: "Video guides",
		description: "Helpful, but difficult to search quickly.",
		icon: PlaySquare,
	},
	{
		title: "General purpose chatbots",
		description: "Fast search, but unreliable information.",
		icon: Bot,
	},
];

const FragmentedInformationDiagram = () => {
	return (
		<div>
			<div className="grid gap-4 sm:grid-cols-4">
				{sources.map(({ title, description, icon: Icon }) => (
					<div
						key={title}
						className="rounded-xl border border-border bg-card/50 p-5 text-center"
					>
						<div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
							<Icon className="size-5" />
						</div>

						<h3 className="font-semibold text-foreground">
							{title}
						</h3>

						<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
							{description}
						</p>
					</div>
				))}
			</div>

			{/* Desktop connectors */}
			<div
				aria-hidden="true"
				className="relative mx-auto hidden h-16 w-[68%] sm:block"
			>
				{/* Horizontal connector */}
				<span className="absolute left-0 right-0 top-4 h-px bg-border" />

				{/* Three source connectors */}
				<span className="absolute left-0 top-0 h-4 w-px bg-border" />
				<span className="absolute left-[32%] top-0 h-4 w-px -translate-x-1/2 bg-border" />
				<span className="absolute right-[30%] top-0 h-4 w-px -translate-x-1/2 bg-border" />
				<span className="absolute right-0 top-0 h-4 w-px bg-border" />

				{/* Central connector */}
				<span className="absolute bottom-3 left-1/2 top-4 w-px -translate-x-1/2 bg-border" />

				<ArrowDown className="absolute bottom-0 left-1/2 size-4 -translate-x-1/2 text-primary" />
			</div>

			{/* Mobile connector */}
			<div className="flex justify-center py-4 sm:hidden">
				<ArrowDown className="size-5 text-primary" />
			</div>

			<div className="mx-auto max-w-xl rounded-xl border border-primary/40 bg-primary/5 p-6 text-center">
				<Search className="mx-auto mb-3 size-6 text-primary" />

				<p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
					THE REAL PROBLEM
				</p>

				<h3 className="mt-2 text-xl font-semibold text-foreground">
					Time consuming searching and cross-referencing
				</h3>

				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
					Players must combine information from multiple sources
					before they can understand what to do next.
				</p>
			</div>
		</div>
	);
};

export default FragmentedInformationDiagram;
