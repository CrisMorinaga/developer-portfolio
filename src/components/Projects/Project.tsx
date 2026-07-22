import { Calendar } from "lucide-react";

import { ProjectGallery } from "./ProjectGallery";
import { TechnologyCards } from "./TechnologiesCards";

import { LiveAppButton } from "../ui/LiveAppButton";
import { CallToActionButton } from "../ui/CallToActionButton";

type ProjectGalleryImg = {
	src: string;
	alt: string;
	caption: string;
};

type ProjectProps = {
	header: string;
	title: React.ReactNode;
	subtitle: string;
	creationDate: string;
	description: string;
	liveAppUrl: string;
	appCTABtnTitle?: string;
	callToActionRoute: string;
	useBrowserMockup?: boolean;
	galleryImgs: ProjectGalleryImg[];
	technologiesArr: string[];
};
export default function Project({
	header,
	title,
	subtitle,
	creationDate,
	description,
	galleryImgs,
	technologiesArr,
	liveAppUrl,
	appCTABtnTitle,
	callToActionRoute,
	useBrowserMockup,
}: ProjectProps) {
	return (
		<div className="w-full p-5 px-10 flex flex-col gap-4">
			<div className="grid max-[1100px]:grid-cols-1 gap-6 grid-cols-[1fr_3fr]">
				<div className="flex flex-col min-w-0 items-start max-[1100px]:items-center max-[1100px]:text-[1.5rem] text-base mt-5 gap-2 ">
					<h1 className="text-[#a16839] text-[1.2em]">{header}</h1>

					<div className="flex justify-start max-w-4xl">{title}</div>

					<p className="text-[0.9375em] muted-foreground max-[500px]:text-center">
						{subtitle}
					</p>

					<div className="flex gap-1 items-center">
						<Calendar
							color={"#a16839"}
							size={15}
						/>

						<p className="text-[0.75em] muted-foreground">
							{creationDate}
						</p>
					</div>

					<div className="d-divider before:bg-muted-foreground/20 after:bg-muted-foreground/20" />

					<p className="text-[15px] text-muted-foreground w-[80%] text-start max-[1100px]:text-center">
						{description}
					</p>
					<div className="flex gap-2 mt-5">
						<LiveAppButton
							title={appCTABtnTitle}
							href={liveAppUrl}
						/>
						<CallToActionButton
							btnTitle="View details"
							href={callToActionRoute}
							direction="right"
						/>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0"
				></div>
				<ProjectGallery
					useBrowserMockup={useBrowserMockup}
					images={galleryImgs}
				/>
			</div>
			<div className="flex gap-2 items-start w-full">
				<div className="flex flex-col gap-2">
					<p className="text-[#cd7c3b] text-[14px] ">Technologies</p>
					<div className="flex gap-4 flex-wrap">
						{technologiesArr.map((title, i) => (
							<TechnologyCards
								key={i}
								title={title}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
