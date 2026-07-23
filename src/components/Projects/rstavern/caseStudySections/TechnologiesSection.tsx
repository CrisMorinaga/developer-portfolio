import { TechnologyCards } from "../../parts";
import { SectionHeading } from "./SectionHeading";

const technologyGroups = [
	{
		title: "Application",
		items: ["Next.js", "React", "TypeScript"],
	},
	{
		title: "Data and retrieval",
		items: [
			"Supabase",
			"IndexedDB",
			"PostgreSQL",
			"Upstash Redis",
			"OpenAI API",
		],
	},
	{
		title: "Authentication and delivery",
		items: ["Clerk", "Resend", "Streaming responses", "Rate limiting"],
	},
];

export function TechnologiesSection() {
	return (
		<div className="bg-card/30">
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<SectionHeading
					eyebrow="06 · Technologies"
					title="Stack"
					description={[
						"From streaming and authentication to retrieval and persistence, each tool supports a certain aspect of the application.",
					]}
				/>

				<TechnologyCards technologyGroups={technologyGroups} />
			</div>
		</div>
	);
}
