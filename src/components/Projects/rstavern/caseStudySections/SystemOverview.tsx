import { SystemOverviewTimeline } from "../SystemOverviewTimeline";
import { SectionHeading } from "./SectionHeading";

export function SystemOverview() {
	return (
		<div className="">
			<SectionHeading
				eyebrow="03 · System overview"
				title={
					<h2 className="font-display text-4xl md:text-5xl">
						How retrieval works
					</h2>
				}
				description={[
					"Before Auri answers, RSTavern combines conversation state, retrieved quest information, and metadata from previous turns.",
				]}
			/>

			<SystemOverviewTimeline />
		</div>
	);
}
