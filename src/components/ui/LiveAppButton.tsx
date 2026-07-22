import Link from "next/link";

import { ExternalLink } from "lucide-react";

export function LiveAppButton({
	href,
	title,
	iconSize = 17,
	className,
}: {
	href: string;
	iconSize?: number;
	title?: string;
	className?: string;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className={`d-btn d-btn-md d-btn-warning dark:d-btn-primary dark:text-white text-warning-content flex gap-1 rounded-lg font-normal items-center  ${className}`}
		>
			<ExternalLink size={iconSize} />
			{title ?? <p>Live app</p>}
		</Link>
	);
}
