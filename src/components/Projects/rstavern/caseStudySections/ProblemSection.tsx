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
					"RuneScape has years of quests, items, and player-written documentation spread across wikis, forum posts, and video guides. Finding the answer to one specific question can mean opening several sources and skipping through a lot of information just to find the part that matches the player's current step.",

					"General-purpose chatbots have a different problem. Even when they are given the right information, they can still ignore parts of it or fill in missing details with something that sounds believable. That can lead to invented item names, locations, requirements, or quest steps. For a quest helper, a confident wrong answer is often worse than simply saying it does not know.",
				]}
			/>
			<FragmentedInformationDiagram />
		</div>
	);
}
