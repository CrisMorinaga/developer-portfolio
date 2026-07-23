import { useRef } from "react";

import { Check, ChevronDown } from "lucide-react";

import type { SceneDefinition } from "./timeScene.helper";

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

type SceneKey = "morning" | "midday" | "afternoon" | "twilight" | "night";
type TimeMode = "current" | SceneKey;

type TimeSceneDropdownProps = {
	scenes: SceneDefinition[];
	displayedTime: string;
	timeMode: TimeMode;
	onSelectMode: (mode: TimeMode) => void;
};

export function TimeSceneDropdown({
	scenes,
	displayedTime,
	timeMode,
	onSelectMode,
}: TimeSceneDropdownProps) {
	const dropdownRef = useRef<HTMLDetailsElement>(null);

	const selectMode = (mode: TimeMode) => {
		onSelectMode(mode);
		dropdownRef.current?.removeAttribute("open");
	};

	return (
		<details
			ref={dropdownRef}
			className="d-dropdown d-dropdown-end md:d-dropdown-bottom d-dropdown-top group absolute right-4 top-4 z-30 sm:right-6 sm:top-6"
		>
			<summary
				className="
          d-btn -z-10 min-h-0 list-none gap-2 rounded-xl border-2 border-primary dark:hover:bg-black/70 hover:bg-background dark:group-open:bg-black/70 group-open:bg-background bg-background/80 px-4 py-2 font-mono text-sm font-semibold tabular-nums text-primary shadow-md sm:text-base"
			>
				{displayedTime}

				<ChevronDown
					aria-hidden="true"
					className="size-4 transition-transform group-open:rotate-180"
				/>
			</summary>

			<ul
				className="
          opacity-98 d-dropdown-content d-menu z-50 mt-2 max-h-[min(16rem,calc(100dvh-6rem))] w-72
          flex-nowrap overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl bg-card p-2
          text-card-foreground
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
	);
}
