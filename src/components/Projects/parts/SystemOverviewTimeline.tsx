"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import {
	motion,
	useMotionTemplate,
	useReducedMotion,
	useScroll,
	useTransform,
	type MotionValue,
} from "motion/react";
import { Check } from "lucide-react";

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

type ConnectorRange = {
	start: number;
	end: number;
};

type TimelineGeometry = {
	nodes: number[];
	connectors: ConnectorRange[];
};

type TimelineConnectorProps = {
	progress: MotionValue<number>;
	range: ConnectorRange;
	register: (element: HTMLHRElement | null) => void;
};

function TimelineConnector({
	progress,
	range,
	register,
}: TimelineConnectorProps) {
	const fill = useTransform(progress, [range.start, range.end], [0, 100], {
		clamp: true,
	});

	const background = useMotionTemplate`
    linear-gradient(
      to bottom,
      hsl(var(--primary)) 0%,
      hsl(var(--primary)) ${fill}%,
      hsl(var(--border)) ${fill}%,
      hsl(var(--border)) 100%
    )
  `;

	return (
		<motion.hr
			ref={register}
			aria-hidden="true"
			className="w-0.5 border-0"
			style={{ background }}
		/>
	);
}

type TimelineMarkerProps = {
	progress: MotionValue<number>;
	index: number;
	position: number;
	isFirst: boolean;
	register: (element: HTMLDivElement | null) => void;
};

function TimelineMarker({
	progress,
	index,
	position,
	isFirst,
	register,
}: TimelineMarkerProps) {
	const activationStart = Math.max(0, position - 0.025);

	const activationProgress = useTransform(
		progress,
		[activationStart, position],
		[0, 1],
		{ clamp: true },
	);

	const scale = useTransform(activationProgress, [0, 1], [0.78, 1]);

	return (
		<div
			ref={register}
			className="d-timeline-middle"
		>
			<motion.div
				style={{ scale: isFirst ? 1 : scale }}
				className="relative z-10 grid size-8 place-items-center rounded-full border border-border bg-background shadow-sm"
			>
				<motion.span
					aria-hidden="true"
					style={{ opacity: isFirst ? 1 : activationProgress }}
					className="absolute inset-0 rounded-full bg-primary"
				/>

				<motion.span
					style={{ opacity: isFirst ? 1 : activationProgress }}
					className="relative z-10"
				>
					<Check
						aria-hidden="true"
						className="size-4 text-primary-foreground"
						strokeWidth={3}
					/>
				</motion.span>

				<span className="sr-only">Pipeline step {index + 1}</span>
			</motion.div>
		</div>
	);
}

type TimelineContentProps = {
	progress: MotionValue<number>;
	position: number;
	side: "start" | "end";
	isFirst: boolean;
	isLast: boolean;
	step: (typeof pipelineSteps)[number];
};

function TimelineContent({
	progress,
	position,
	side,
	isFirst,
	isLast,
	step,
}: TimelineContentProps) {
	const prefersReducedMotion = useReducedMotion();

	/*
	 * La geometría cambia después de medir el DOM.
	 * Guardamos siempre la posición más reciente sin reconstruir
	 * el MotionValue.
	 */
	const positionRef = useRef(position);
	positionRef.current = position;

	const revealProgress = useTransform(progress, (currentProgress) => {
		if (isFirst) {
			return 1;
		}

		const nodePosition = positionRef.current;

		if (!Number.isFinite(nodePosition)) {
			return 0;
		}

		/*
		 * La tarjeta comienza a aparecer antes del nodo y queda
		 * completamente visible poco antes de que la línea lo alcance.
		 */
		const revealStart = Math.max(0, nodePosition - 0.09);
		const revealEnd = Math.max(0.001, nodePosition);
		const revealDistance = revealEnd - revealStart;

		if (revealDistance <= 0) {
			return currentProgress >= revealEnd ? 1 : 0;
		}

		const localProgress = (currentProgress - revealStart) / revealDistance;

		return Math.min(1, Math.max(0, localProgress));
	});

	const opacity = revealProgress;

	const y = useTransform(revealProgress, [0, 1], [20, 0]);

	const x = useTransform(
		revealProgress,
		[0, 1],
		side === "start" ? [-24, 0] : [24, 0],
	);

	return (
		<motion.article
			style={{
				opacity,
				x: prefersReducedMotion ? 0 : x,
				y: prefersReducedMotion ? 0 : y,
			}}
			className={`
        w-full max-w-xl
        ${
			side === "start"
				? "d-timeline-start md:mr-8 md:text-end"
				: "d-timeline-end md:ml-8"
		}
        ${isLast ? "" : "mb-14 md:mb-20"}
      `}
		>
			<TimelineCard
				step={step}
				alignment={side}
			/>
		</motion.article>
	);
}

export function SystemOverviewTimeline() {
	const timelineRef = useRef<HTMLUListElement>(null);

	const markerRefs = useRef<Array<HTMLDivElement | null>>([]);
	const connectorRefs = useRef<Array<HTMLHRElement | null>>([]);

	const connectorCount = (pipelineSteps.length - 1) * 2;

	const [geometry, setGeometry] = useState<TimelineGeometry>(() => ({
		nodes: pipelineSteps.map((_, index) =>
			pipelineSteps.length === 1 ? 0 : index / (pipelineSteps.length - 1),
		),
		connectors: Array.from({ length: connectorCount }, (_, index) => ({
			start: index / connectorCount,
			end: (index + 1) / connectorCount,
		})),
	}));

	const registerMarker = useCallback(
		(index: number, element: HTMLDivElement | null) => {
			markerRefs.current[index] = element;
		},
		[],
	);

	const registerConnector = useCallback(
		(index: number, element: HTMLHRElement | null) => {
			connectorRefs.current[index] = element;
		},
		[],
	);

	useLayoutEffect(() => {
		const timeline = timelineRef.current;

		if (!timeline) return;

		const measure = () => {
			const timelineRect = timeline.getBoundingClientRect();
			const timelineHeight = timelineRect.height;

			if (timelineHeight === 0) return;

			const nodes = markerRefs.current.map((marker, index) => {
				if (!marker) {
					return pipelineSteps.length === 1
						? 0
						: index / (pipelineSteps.length - 1);
				}

				const rect = marker.getBoundingClientRect();
				const center = rect.top + rect.height / 2 - timelineRect.top;

				return center / timelineHeight;
			});

			const connectors = connectorRefs.current.map((connector, index) => {
				if (!connector) {
					return {
						start: index / connectorCount,
						end: (index + 1) / connectorCount,
					};
				}

				const rect = connector.getBoundingClientRect();

				return {
					start: (rect.top - timelineRect.top) / timelineHeight,
					end: (rect.bottom - timelineRect.top) / timelineHeight,
				};
			});

			setGeometry({ nodes, connectors });
		};

		measure();

		const resizeObserver = new ResizeObserver(measure);

		resizeObserver.observe(timeline);

		markerRefs.current.forEach((marker) => {
			if (marker) resizeObserver.observe(marker);
		});

		window.addEventListener("resize", measure);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener("resize", measure);
		};
	}, [connectorCount]);

	const { scrollYProgress } = useScroll({
		target: timelineRef,

		/*
		 * Usamos el mismo punto del viewport en ambos extremos.
		 * Así el progreso representa una posición física dentro
		 * del timeline.
		 */
		offset: ["start 40%", "end 40%"],
	});

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

type TimelineCardProps = {
	step: (typeof pipelineSteps)[number];
	alignment: "start" | "end";
};

function TimelineCard({ step, alignment }: TimelineCardProps) {
	return (
		<div className="rounded-2xl border border-border bg-card/70 p-6 text-start shadow-sm backdrop-blur-sm md:p-7">
			<p
				className={`font-mono text-sm font-semibold text-primary ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.label}
			</p>

			<h3
				className={`mt-2 text-xl font-semibold text-foreground ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.title}
			</h3>

			<p
				className={`mt-4 leading-relaxed text-muted-foreground ${
					alignment === "start" ? "md:text-end" : "md:text-start"
				}`}
			>
				{step.description}
			</p>
		</div>
	);
}
