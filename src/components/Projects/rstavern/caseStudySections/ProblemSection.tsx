import FragmentedInformationDiagram from "../FragmentedInformationDiagram";
import { SectionHeading } from "./SectionHeading";

export function ProblemSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="01 · The problem"
				title={
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						{"Quest information exists."}{" "}
						<span className="text-primary text-7xl">Finding</span>{" "}
						{"the right piece is the problem."}
					</h2>
				}
				description={[
					"RuneScape has accumulated years of quests, items, and documentation written by players. Answering a single contextual question often means moving between wiki pages, forum posts, and video guides, then skimming long sections to find the few lines relevant to the player's current step.",

					"General-purpose chatbots have a different limitation: they can be unreliable even when relevant information is available. Language models can still drift from that information and invent item names, locations, requirements, or quest steps that sound plausible but are wrong. For a quest helper, that kind of confident mistake is worse than no answer at all.",
				]}
			/>
			<FragmentedInformationDiagram />
		</div>
	);
}
