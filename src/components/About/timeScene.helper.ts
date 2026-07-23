type SceneKey = "morning" | "midday" | "afternoon" | "twilight" | "night";

export type SceneDefinition = {
	key: SceneKey;
	label: string;
	range: string;
	representativeHour: number;
};

export function getSceneFromHour(hour: number): SceneKey {
	if (hour >= 5 && hour < 12) {
		return "morning";
	}

	if (hour >= 12 && hour < 17) {
		return "midday";
	}

	if (hour >= 17 && hour < 19) {
		return "afternoon";
	}

	if (hour >= 19 && hour < 21) {
		return "twilight";
	}

	return "night";
}

export function getRepresentativeDate(
	currentDate: Date,
	scenes: SceneDefinition[],
	scene: SceneKey,
) {
	const definition = scenes.find((item) => item.key === scene);

	const date = new Date(currentDate);

	date.setHours(definition?.representativeHour ?? 12, 0, 0, 0);

	return date;
}

export function formatTime(date: Date) {
	return new Intl.DateTimeFormat(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	}).format(date);
}
