import FragmentedInformationDiagram from "../../parts/FragmentedInformationDiagram";
import { SectionHeading } from "./SectionHeading";

export function ProblemSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="01 · The problem"
				title="Quest information exists. Finding the right piece is the problem."
				description={[
					"RuneScape has accumulated years of quests, items, and player written documentation. Answering a single contextual question often means moving between wiki pages, forum posts, and video guides, then skimming long sections to find the few lines relevant to the player's current step.",

					"In addition, general purpose chatbots have a different limitation: reliability. Even when relevant information is available, language models can still drift from it: inventing item names, locations, requirements, or quest steps that sound plausible but are wrong. For a quest helper, that kind of confident mistake is worse than no answer at all.",
				]}
			/>
			<FragmentedInformationDiagram />
		</div>
	);
}
