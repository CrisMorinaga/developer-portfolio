import Link from "next/link";

import { ArrowRight, Download } from "lucide-react";

export function IntroInfo() {
	return (
		<div className="flex flex-col gap-4 flex-1 items-center justify-center sm:px-7 px-2 max-[1100px]:text-center">
			<p className="md:text-base text-sm leading-relaxed text-muted-foreground ">
				I build web applications with TypeScript, React, Next.js, and
				PostgreSQL. I especially enjoy working on front-end systems and
				AI features.
			</p>
			<div className="flex gap-4 items-center justify-start w-full">
				<Link
					href={"/projects"}
					className={`d-btn d-btn-md d-btn-primary hover:bg-[#b47440] hover:border-[#b47440] flex flex-1 gap-1 border font-normal text-white`}
				>
					<p>View projects</p>
					<ArrowRight className="size-4" />
				</Link>
				<Link
					href={"/Cristopher_Morales_Resume_2026.pdf"}
					target="_blank"
					className={`d-btn d-btn-md border d-btn-ghost flex flex-1 gap-1 rounded-lg font-normal border-muted-foreground text-foreground items-center`}
				>
					<p>Resume</p>
					<Download size={18} />
				</Link>
			</div>
			<p className="text-muted-foreground self-start max-[1100px]:self-center">
				Former music educator · FE certified
			</p>
		</div>
	);
}
