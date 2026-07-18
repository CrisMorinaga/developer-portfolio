import Link from "next/link";

export default function CurrProjectFooter() {
	return (
		<div className="grid gap-3 border-y border-border px-4 py-5 text-left lg:grid-cols-[auto_1fr_auto] sm:items-center lg:gap-8">
			<p className="text-xs uppercase tracking-wider text-primary">
				Currently building
			</p>

			<p className="text-sm text-muted-foreground">
				RSTavern — A context-aware RuneScape companion.
			</p>

			<Link
				href={"/projects/rstavern"}
				className="text-sm text-primary"
			>
				View project ↗
			</Link>
		</div>
	);
}
