import { SectionHeading } from "./SectionHeading";

const technologyGroups = [
	{
		title: "Application",
		items: ["Next.js", "React", "TypeScript"],
	},
	{
		title: "Data and retrieval",
		items: ["Supabase", "PostgreSQL", "Redis", "OpenAI API"],
	},
	{
		title: "Authentication and delivery",
		items: ["Clerk", "Resend", "Streaming responses", "Rate limiting"],
	},
];

export function TechnologiesSection() {
	return (
		<section className="bg-card/30">
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<SectionHeading
					eyebrow="06 · Technologies"
					title="Stack"
					description={[
						"Each tool supports a specific part of the application, from retrieval and persistence to authentication and streaming.",
					]}
				/>

				<div className="mt-3 grid gap-5 md:grid-cols-3">
					{technologyGroups.map(({ title, items }) => (
						<div
							key={title}
							className="rounded-2xl border border-border bg-background p-7"
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
			</div>
		</section>
	);
}
