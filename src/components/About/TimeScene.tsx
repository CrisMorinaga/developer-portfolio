/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useMemo, useRef, useState } from "react";

import { Check, ChevronDown } from "lucide-react";

type SceneKey = "morning" | "midday" | "afternoon" | "twilight" | "night";
type SceneImages = { scene: SceneKey; src: string };

type TimeMode = "current" | SceneKey;

type SceneDefinition = {
	key: SceneKey;
	label: string;
	range: string;
	representativeHour: number;
};

const scenes: SceneDefinition[] = [
	{
		key: "morning",
		label: "Morning",
		range: "5 AM to 11 AM",
		representativeHour: 8,
	},
	{
		key: "midday",
		label: "Midday",
		range: "12 PM to 4 PM",
		representativeHour: 13,
	},
	{
		key: "afternoon",
		label: "Afternoon",
		range: "5 PM to 6 PM",
		representativeHour: 17,
	},
	{
		key: "twilight",
		label: "Twilight",
		range: "7 PM to 8 PM",
		representativeHour: 19,
	},
	{
		key: "night",
		label: "Night",
		range: "9 PM to 4 AM",
		representativeHour: 22,
	},
];

function getSceneFromHour(hour: number): SceneKey {
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

function getRepresentativeDate(currentDate: Date, scene: SceneKey) {
	const definition = scenes.find((item) => item.key === scene);

	const date = new Date(currentDate);

	date.setHours(definition?.representativeHour ?? 12, 0, 0, 0);

	return date;
}

function formatTime(date: Date) {
	return new Intl.DateTimeFormat(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	}).format(date);
}

export function TimeScene() {
	const [currentDate, setCurrentDate] = useState<Date | null>(null);

	const [timeMode, setTimeMode] = useState<TimeMode>("current");

	const dropdownRef = useRef<HTMLDetailsElement>(null);

	/*
	 * We initialize the date after hydration so the server time
	 * cannot conflict with the visitor's local time.
	 */
	useEffect(() => {
		const updateTime = () => {
			setCurrentDate(new Date());
		};

		updateTime();

		const interval = window.setInterval(updateTime, 1000);

		return () => {
			window.clearInterval(interval);
		};
	}, []);

	const activeScene = useMemo<SceneKey>(() => {
		if (timeMode !== "current") {
			return timeMode;
		}

		return getSceneFromHour(currentDate?.getHours() ?? 12);
	}, [currentDate, timeMode]);

	const displayedDate = useMemo(() => {
		if (!currentDate) {
			return null;
		}

		if (timeMode === "current") {
			return currentDate;
		}

		return getRepresentativeDate(currentDate, timeMode);
	}, [currentDate, timeMode]);

	const displayedTime = displayedDate
		? formatTime(displayedDate)
		: "--:--:-- --";

	const sceneImages: SceneImages[] = [
		{ scene: "morning", src: "/AboutBanner/morning.webp" },
		{ scene: "midday", src: "/AboutBanner/midday.webp" },
		{ scene: "afternoon", src: "/AboutBanner/afternoon.webp" },
		{ scene: "twilight", src: "/AboutBanner/twilight.webp" },
		{ scene: "night", src: "/AboutBanner/night.webp" },
	];

	const selectMode = (mode: TimeMode) => {
		setTimeMode(mode);
		dropdownRef.current?.removeAttribute("open");
	};

	return (
		<div className="relative">
			<details
				ref={dropdownRef}
				className="d-dropdown d-dropdown-end md:d-dropdown-bottom d-dropdown-top group absolute right-4 top-4 z-30 sm:right-6 sm:top-6"
			>
				<summary
					className="
            d-btn -z-10
            h-auto min-h-0
            list-none gap-2
            rounded-xl
            border-2 border-primary
            dark:hover:bg-black/70
            hover:bg-light
            dark:group-open:bg-black/70
            group-open:bg-light
            bg-white/80 px-4 py-2
            font-mono text-sm font-semibold
            tabular-nums text-primary
            shadow-md
            sm:text-base
            [&::-webkit-details-marker]:hidden
          "
				>
					{displayedTime}

					<ChevronDown
						aria-hidden="true"
						className="size-4 transition-transform group-open:rotate-180"
					/>
				</summary>

				<ul
					className="
            opacity-98
            d-dropdown-content d-menu
            z-50 mt-2 max-h-[min(16rem,calc(100dvh-6rem))] w-72
            flex-nowrap overflow-x-hidden overflow-y-auto overscroll-contain
            rounded-xl border border-border
            bg-card p-2
            text-card-foreground
            shadow-xl
          "
				>
					<li className="d-menu-title text-foreground">
						<span>Try changing the time</span>
					</li>

					<DropdownOption
						label="Current time"
						description="Use your local time"
						selected={timeMode === "current"}
						onSelect={() => selectMode("current")}
					/>

					<li className="my-1 border-t border-border" />

					{scenes.map((scene) => (
						<DropdownOption
							key={scene.key}
							label={scene.label}
							description={scene.range}
							selected={timeMode === scene.key}
							onSelect={() => selectMode(scene.key)}
						/>
					))}
				</ul>
			</details>

			<div className="relative isolate w-full max-w-[711px]">
				{/* Ambient aura */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0"
				>
					{sceneImages.map((obj) => {
						const isActive = obj.scene === activeScene;
						return (
							<img
								key={`aura-${obj.scene}`}
								src={obj.src}
								alt=""
								loading="eager"
								className={`
                  absolute inset-0
                  h-full w-full
                  scale-[1.08]
                  object-cover
                  saturate-[1.5]
                  blur-[35px]
                  transition-opacity
                  duration-700
                  ease-in-out
                  sm:scale-[1.12]
                  sm:blur-[55px]
                  ${isActive ? "opacity-25" : "opacity-0"}
                `}
							/>
						);
					})}
				</div>

				{/* Images remain in normal layout flow */}
				<div className="relative z-10 grid overflow-hidden rounded-2xl border border-border bg-card">
					{sceneImages.map((obj) => {
						const isActive = obj.scene === activeScene;

						return (
							<img
								key={obj.scene}
								src={obj.src}
								alt={
									isActive
										? `${obj.scene} pixel-art scene in Japan`
										: ""
								}
								aria-hidden={!isActive}
								loading="eager"
								decoding="async"
								className={`
                  col-start-1
                  row-start-1
                  block h-auto w-full
                  transition-opacity
                  duration-500
                  ease-in-out
                  [image-rendering:pixelated]
                  ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}
                `}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

type DropdownOptionProps = {
	label: string;
	description: string;
	selected: boolean;
	onSelect: () => void;
};

function DropdownOption({
	label,
	description,
	selected,
	onSelect,
}: DropdownOptionProps) {
	return (
		<li className="dark:hover:bg-[#262621] hover:bg-[#f0e5e5]">
			<button
				type="button"
				onClick={onSelect}
				className={`
          grid grid-cols-[1.25rem_1fr]
          items-center gap-2
          ${selected ? "bg-primary/10" : ""}
        `}
			>
				<span className="grid size-5 place-items-center">
					{selected && (
						<Check
							className="size-4 text-primary"
							strokeWidth={3}
						/>
					)}
				</span>

				<span className="text-left">
					<span className="block text-sm font-semibold">{label}</span>

					<span className="block text-xs text-muted-foreground">
						{description}
					</span>
				</span>
			</button>
		</li>
	);
}
