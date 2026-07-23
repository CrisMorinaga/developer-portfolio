import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { useScroll } from "motion/react";
import type { PipelineSteps } from "./TimelineContent";

type ConnectorRange = {
	start: number;
	end: number;
};

type TimelineGeometry = {
	nodes: number[];
	connectors: ConnectorRange[];
};

export function useTimelineAnimation(pipelineSteps: PipelineSteps[]) {
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

	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start 40%", "end 40%"],
	});

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
	}, [connectorCount, pipelineSteps.length]);

	return {
		geometry,
		timelineRef,
		scrollYProgress,
		registerConnector,
		registerMarker,
	};
}
