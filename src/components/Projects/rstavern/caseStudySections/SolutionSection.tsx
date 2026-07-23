import { SolutionFlow } from "../SolutionFlow";

import { SectionHeading } from "./SectionHeading";

export function SolutionSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="02 · The solution"
				title={
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						{"Guidance that responds to the player current"}{" "}
						<span className="text-primary text-7xl">context.</span>
					</h2>
				}
				description={[
					"RSTavern builds a structured understanding of each request before Auri, the RSTavern assistant, responds. It builds its knowledge from an extensive quest database designed exclusively for the app.",

					"On top of that, it considers the selected quest, the player's current step, relevant items, the intent behind the question, and context carried from previous turns. This allows Auri to respond to the situation the player is actually facing instead of returning a generic passage from a guide.",
				]}
			/>

			<SolutionFlow />
		</div>
	);
}
