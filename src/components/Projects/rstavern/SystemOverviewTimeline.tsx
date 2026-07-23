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
			"The request is associated with the explicit quest that the user selected, preventing similarly named items, characters, or objectives from introducing unrelated context.",
	},
	{
		label: "02",
		title: "Intent and entity classification",
		description:
			"RSTavern identifies what the player is asking for, such as the current topic, intent, required items, the next objective, quest recommendations, or a follow-up to an earlier response.",
	},
	{
		label: "03",
		title: "Context reconstruction",
		description:
			"Stored turn metadata is used to reconstruct the current quest step, referenced items, previous intent, and any information required from earlier messages. This helps enrich the context of any semantic search that might be done.",
	},
	{
		label: "04",
		title: "Hybrid retrieval",
		description:
			"Keyword matching and semantic search retrieve quest documents that are both explicitly relevant and conceptually related to the player's question.",
	},
	{
		label: "05",
		title: "Metadata-aware re-ranking",
		description:
			"Retrieved candidates are re-scored using the selected quest, current step, referenced items, and query intent before the top results are selected.",
	},
	{
		label: "06",
		title: "Contextual response generation",
		description:
			"The selected information is provided to Auri together with structured conversation context, allowing her to answer accurately while remaining in character.",
	},
	{
		label: "07",
		title: "Structured state update",
		description:
			"Quest-step and item metadata from the completed turn is persisted, enabling deterministic follow-ups and branching conversations without losing the player's place.",
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
