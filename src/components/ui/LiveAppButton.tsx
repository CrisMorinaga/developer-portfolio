import Link from "next/link";

import { ExternalLink } from "lucide-react";

export function LiveAppButton({
	href,
	className,
}: {
	href: string;
	className?: string;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className={`d-btn d-btn-md d-btn-primary flex gap-1 rounded-lg font-normal text-foreground hover:bg-[#b47440] hover:border-[#b47440] ${className}`}
		>
			<ExternalLink />
			<p>Live app</p>
		</Link>
	);
}
