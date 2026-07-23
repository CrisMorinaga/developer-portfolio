"use client";

import {
	ProblemSection,
	SolutionSection,
	SystemOverview,
	LessonsSection,
	ProductWalkthrough,
	ReliabilitySection,
	TechnologiesSection,
	PresentationSection,
} from "@/components/Projects/rstavern/caseStudySections";

import { LiveAppButton, CallToActionButton } from "@/components/ui";

export default function Page() {
	return (
		<div className="w-full p-5 px-10 flex flex-col gap-4">
			<PresentationSection />
			<ProblemSection />
			<SolutionSection />
			<SystemOverview />
			<ReliabilitySection />
			<ProductWalkthrough />
			<TechnologiesSection />
			<LessonsSection />

			<div className="flex gap-2 mt-5 md:w-100 w-full">
				<CallToActionButton
					className="flex-1"
					href="/projects"
					btnTitle="Back to projects"
					direction="left"
				/>
				<LiveAppButton
					className="flex-1"
					href="https://www.rstavernchat.com/"
				/>
			</div>
		</div>
	);
}
