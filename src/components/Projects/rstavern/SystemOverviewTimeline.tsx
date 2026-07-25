"use client";

import {
	TimelineConnector,
	TimelineMarker,
	TimelineContent,
	useTimelineAnimation,
} from "./system-overview-timeline";

const pipelineSteps = [
	{
		label: "01",
		title: "Quest scope",
		description:
			"The request is tied to the quest selected by the player. This prevents similarly named items, characters, or objectives from pulling in context from another quest.",
	},
	{
		label: "02",
		title: "Intent and entity classification",
		description:
			"RSTavern identifies what the player is asking about, including the current topic, required items, next objective, quest recommendations, or a follow-up to an earlier answer.",
	},
	{
		label: "03",
		title: "Context reconstruction",
		description:
			"Metadata from previous turns is used to recover the current quest step, referenced items, and previous intent. That information is then added to the search query when more context is needed.",
	},
	{
		label: "04",
		title: "Hybrid retrieval",
		description:
			"Keyword matching finds direct references, while semantic search finds passages that describe the same idea using different words.",
	},
	{
		label: "05",
		title: "Metadata-aware re-ranking",
		description:
			"The retrieved results are scored again using the selected quest, current step, referenced items, and the player's intent. Only the strongest matches are kept.",
	},
	{
		label: "06",
		title: "Contextual response generation",
		description:
			"The selected passages and conversation state are sent to Auri so she can answer the question without losing her personality.",
	},
	{
		label: "07",
		title: "Structured state update",
		description:
			"Quest-step and item metadata from the completed turn is saved for the next message. This allows follow-up questions and conversation branches to keep the player's current position.",
	},
];

export function SystemOverviewTimeline() {
	const {
		geometry,
		timelineRef,
		scrollYProgress,
		registerConnector,
		registerMarker,
	} = useTimelineAnimation(pipelineSteps);

	return (
		<section
			id="system-overview"
			className="mx-auto max-w-7xl px-6 lg:px-12"
		>
			<ul
				ref={timelineRef}
				className="d-timeline d-timeline-vertical d-timeline-snap-icon max-md:d-timeline-compact mx-auto mt-20 max-w-5xl"
			>
				{pipelineSteps.map((step, index) => {
					const isStartSide = index % 2 === 0;
					const isLast = index === pipelineSteps.length - 1;

					const incomingConnectorIndex = index * 2 - 1;
					const outgoingConnectorIndex = index * 2;

					const nodePosition =
						geometry.nodes[index] ??
						index / (pipelineSteps.length - 1);

					return (
						<li key={step.title}>
							{index > 0 && (
								<TimelineConnector
									progress={scrollYProgress}
									range={
										geometry.connectors[
											incomingConnectorIndex
										]
									}
									register={(element) =>
										registerConnector(
											incomingConnectorIndex,
											element,
										)
									}
								/>
							)}

							{isStartSide && (
								<TimelineContent
									isFirst={index === 0}
									progress={scrollYProgress}
									position={nodePosition}
									side="start"
									isLast={isLast}
									step={step}
								/>
							)}

							<TimelineMarker
								progress={scrollYProgress}
								index={index}
								isFirst={index === 0}
								position={nodePosition}
								register={(element) =>
									registerMarker(index, element)
								}
							/>

							{!isStartSide && (
								<TimelineContent
									isFirst={index === 0}
									progress={scrollYProgress}
									position={nodePosition}
									side="end"
									isLast={isLast}
									step={step}
								/>
							)}

							{!isLast && (
								<TimelineConnector
									progress={scrollYProgress}
									range={
										geometry.connectors[
											outgoingConnectorIndex
										]
									}
									register={(element) =>
										registerConnector(
											outgoingConnectorIndex,
											element,
										)
									}
								/>
							)}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
