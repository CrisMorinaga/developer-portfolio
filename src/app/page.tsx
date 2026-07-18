import { MainPresentation } from "@/components/Home/parts/MainPresentation";
import MainInfo from "@/components/Home/parts/MainInfo";
import CurrProjectFooter from "@/components/Home/parts/CurrProjectFooter";

export default function Home() {
	return (
		<div className="flex flex-col justify-center gap-25 max-[1100px]:gap-10 bg-light dark:bg-dark w-full min-h-screen h-full md:px-40 px-14">
			<div className="flex flex-row max-[1100px]:flex-col gap-5 max-[1100px]:gap-1">
				<MainPresentation />
				<MainInfo />
			</div>
			<CurrProjectFooter />
		</div>
	);
}
