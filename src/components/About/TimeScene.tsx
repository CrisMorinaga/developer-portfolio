"use client";
import Image from "next/image";

import { useTimeScene } from "./useTimeScene";
import type { SceneDefinition } from "./timeScene.helper";
import { TimeSceneDropdown } from "./TimeSceneDropdown";

type SceneKey = "morning" | "midday" | "afternoon" | "twilight" | "night";
type SceneImages = { scene: SceneKey; src: string };

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

export function TimeScene() {
	const { activeScene, displayedTime, timeMode, setTimeMode } =
		useTimeScene(scenes);

	const sceneImages: SceneImages[] = [
		{ scene: "morning", src: "/AboutBanner/morning.webp" },
		{ scene: "midday", src: "/AboutBanner/midday.webp" },
		{ scene: "afternoon", src: "/AboutBanner/afternoon.webp" },
		{ scene: "twilight", src: "/AboutBanner/twilight.webp" },
		{ scene: "night", src: "/AboutBanner/night.webp" },
	];

	return (
		<div className="relative">
			<TimeSceneDropdown
				scenes={scenes}
				displayedTime={displayedTime}
				timeMode={timeMode}
				onSelectMode={setTimeMode}
			/>

			<div className="relative isolate w-full max-w-[711px]">
				{/* AURA */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0"
				>
					{sceneImages.map((obj) => {
						const isActive = obj.scene === activeScene;
						return (
							<Image
								key={`aura-${obj.scene}`}
								src={obj.src}
								alt=""
								fill
								sizes="(max-width: 711px) 100vw, 711px"
								className={`object-cover scale-[1.08] saturate-[1.5] blur-[35px] transition-opacity duration-700 ease-in-out sm:scale-[1.12] sm:blur-[55px] ${isActive ? "opacity-25" : "opacity-0"}`}
							/>
						);
					})}
				</div>

				<div className="relative z-10 grid overflow-hidden rounded-2xl border border-border bg-card">
					{sceneImages.map((obj) => {
						const isActive = obj.scene === activeScene;

						return (
							<Image
								key={obj.scene}
								src={obj.src}
								alt={
									isActive
										? `${obj.scene} pixel-art scene in Japan`
										: ""
								}
								aria-hidden={!isActive}
								width={711}
								height={400}
								sizes="(max-width: 711px) 100vw, 711px"
								loading="eager"
								decoding="async"
								// Images start at the same col and row
								className={`col-start-1 row-start-1 block h-auto w-full transition-opacity duration-1000
                ease-in-out [image-rendering:pixelated] ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
