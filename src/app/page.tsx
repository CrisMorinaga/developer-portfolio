import { Introduction, IntroInfo, CurrWorkingOn } from "@/components/Home";

export default function Home() {
	return (
		<div className="flex flex-col justify-center gap-25 max-[1100px]:gap-10 bg-background w-full flex-1 md:px-40 px-14">
			<div className="flex flex-row max-[1100px]:flex-col gap-5 max-[1100px]:gap-1">
				<Introduction />
				<IntroInfo />
			</div>
			<CurrWorkingOn />
		</div>
	);
}
