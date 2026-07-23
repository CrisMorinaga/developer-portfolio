import Project from "../Project";

const technologiesArr = ["Next.js", "TypeScript", "IndexedDB", "Alt1"];

const projectImgs = [
	{
		src: "/projects/rngmeter/main-cover.png",
		alt: "RNGMeter app showing the 3 drops selected for the current boss.",
		caption: "RNGMeter with 3 usual drops for the selected boss.",
	},
];

export function RNGMeter() {
	return (
		<Project
			header=""
			title={
				<h1 className="font-display leading-relaxed text-[58px]">
					RNGMeter
				</h1>
			}
			subtitle="A boss drop tracker for RuneScape"
			creationDate="Nov 2025 - Dec 2025"
			description="Drop and boss probability tracker using binomial distribution."
			useBrowserMockup={false}
			appCTABtnTitle="Try demo"
			liveAppUrl="https://rngmeter.vercel.app/demo"
			callToActionRoute="/projects/rngmeter"
			galleryImgs={projectImgs}
			technologiesArr={technologiesArr}
		/>
	);
}
