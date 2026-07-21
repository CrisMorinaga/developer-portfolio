import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

export function CallToActionButton({
	className,
	btnTitle,
	href,
	direction,
}: {
	className?: string;
	btnTitle: string;
	href: string;
	direction: "left" | "right";
}) {
	return (
		<Link
			href={href}
			className={`${className} items-center d-btn d-btn-md d-btn-ghost flex gap-1 border border-muted-foreground text-foreground font-normal dark:hover:bg-[#262621] hover:bg-[#f0e5e5] shadow-none`}
		>
			{direction === "right" ? (
				<>
					{btnTitle}
					<ArrowRight className="size-4" />
				</>
			) : (
				<>
					<ArrowLeft className="size-4" /> {btnTitle}
				</>
			)}
		</Link>
	);
}
