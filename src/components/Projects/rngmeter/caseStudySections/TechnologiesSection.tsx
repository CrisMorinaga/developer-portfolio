import { SectionHeading, TechnologyCards } from "@/components/Projects/parts";

const technologyGroups = [
	{
		title: "Application",
		items: ["Next.js", "React", "TypeScript"],
	},
	{
		title: "Platform integration",
		items: ["Alt1 Toolkit API"],
	},
	{
		title: "Local persistance",
		items: ["IndexedDB"],
	},
];

export function TechnologiesSection() {
	return (
		<div className="bg-card/30 py-10">
			<SectionHeading
				eyebrow="05 · Technologies"
				title="Stack"
			/>
			<TechnologyCards technologyGroups={technologyGroups} />
		</div>
	);
}
