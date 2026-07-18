import { SolutionFlow } from "../../parts/SolutionFlow";

import { SectionHeading } from "./SectionHeading";

export function SolutionSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="02 · The solution"
				title="Guidance that responds to the player current context."
				description={[
					"RSTavern builds a structured understanding of each request before Auri, the RSTavern assistant, responds. It builds its knowledge from an extensive quest database designed exclusively for the app.",

					"On top of that, it considers the selected quest, the player's current step, relevant items, the intent behind the question, and context carried from previous turns. This allows Auri to respond to the situation the player is actually facing instead of returning a generic passage from a guide.",
				]}
			/>

			<SolutionFlow />
		</div>
	);
}
