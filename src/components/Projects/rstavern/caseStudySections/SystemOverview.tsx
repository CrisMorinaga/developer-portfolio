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
					`Each request moves through a structured pipeline that combines conversation state, retrieval, and deterministic metadata before Auri responds.`,
				]}
			/>

			<SystemOverviewTimeline />
		</div>
	);
}
