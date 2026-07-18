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
			className={`${className} d-btn d-btn-md d-btn-ghost flex gap-1 border border-muted-foreground text-foreground font-normal`}
		>
			{direction === "right" ? (
				<>
					{btnTitle}
					<ArrowRight className="size-5" />
				</>
			) : (
				<>
					<ArrowLeft className="size-5" /> {btnTitle}
				</>
			)}
		</Link>
	);
}
