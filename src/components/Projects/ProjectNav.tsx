import { Dispatch, SetStateAction } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectNav({
	projectsArrLength,
	currProjectIdx,
	setCurrProjectIdx,
}: {
	projectsArrLength: number;
	currProjectIdx: number;
	setCurrProjectIdx: Dispatch<SetStateAction<number>>;
}) {
	const previousProject = () => {
		if (!currProjectIdx) return;
		setCurrProjectIdx((prev) => prev - 1);
	};

	const nextProject = () => {
		if (currProjectIdx === projectsArrLength - 1) return;
		setCurrProjectIdx((prev) => prev + 1);
	};

	return (
		<div className="absolute top-0 right-11 flex items-center gap-3 z-10">
			<span className="text-sm text-foreground/60">
				<span className="text-primary">
					{String(currProjectIdx + 1).padStart(2, "0")}
				</span>{" "}
				/ {String(projectsArrLength).padStart(2, "0")}
			</span>

			<button
				type="button"
				onClick={previousProject}
				disabled={!currProjectIdx}
				aria-label="Previous project"
				className="flex d-btn d-btn-sm d-btn-ghost shadow-none items-center justify-center rounded-md border border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary hover:bg-transparent disabled:border-muted-foreground/30"
			>
				<ChevronLeft className="size-5" />
			</button>
			<button
				type="button"
				disabled={currProjectIdx === projectsArrLength - 1}
				onClick={nextProject}
				aria-label="Previous project"
				className={`flex d-btn d-btn-sm d-btn-ghost shadow-none items-center justify-center rounded-md border border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary hover:bg-transparent disabled:border-muted-foreground/30`}
			>
				<ChevronRight className="size-5" />
			</button>
		</div>
	);
}
