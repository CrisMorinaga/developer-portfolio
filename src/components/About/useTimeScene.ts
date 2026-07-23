import { useEffect, useMemo, useState } from "react";

import {
	formatTime,
	getRepresentativeDate,
	getSceneFromHour,
	SceneDefinition,
} from "./timeScene.helper";

type SceneKey = "morning" | "midday" | "afternoon" | "twilight" | "night";
type TimeMode = "current" | SceneKey;

export function useTimeScene(scenes: SceneDefinition[]) {
	const [currentDate, setCurrentDate] = useState<Date | null>(null);
	const [timeMode, setTimeMode] = useState<TimeMode>("current");

	const displayedDate = useMemo(() => {
		if (!currentDate) return null;

		if (timeMode === "current") {
			return currentDate;
		}

		return getRepresentativeDate(currentDate, scenes, timeMode);
	}, [currentDate, timeMode, scenes]);

	const displayedTime = displayedDate
		? formatTime(displayedDate)
		: "--:--:-- --";

	const activeScene = useMemo<SceneKey>(() => {
		if (timeMode !== "current") {
			return timeMode;
		}

		return getSceneFromHour(currentDate?.getHours() ?? 12);
	}, [currentDate, timeMode]);

	useEffect(() => {
		const updateTime = () => {
			setCurrentDate(new Date());
		};

		updateTime();

		const interval = window.setInterval(updateTime, 1000);

		return () => window.clearInterval(interval);
	}, []);

	return {
		activeScene,
		displayedTime,
		timeMode,
		setTimeMode,
	};
}
