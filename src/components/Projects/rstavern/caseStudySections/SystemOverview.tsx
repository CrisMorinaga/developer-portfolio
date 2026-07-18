import { SystemOverviewTimeline } from "../../parts/SystemOverviewTimeline";

export function SystemOverview() {
	return (
		<section className="border-t border-border px-6 py-20 lg:px-12">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
				<header>
					<p className="text-sm uppercase tracking-[0.2em] text-primary">
						03 · System overview
					</p>
				</header>

				<div className="max-w-3xl">
					<h2 className="font-display text-4xl md:text-5xl">
						How retrieval works
					</h2>
					<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
						Each request moves through a structured pipeline that
						combines conversation state, retrieval, and
						deterministic metadata before Auri responds.
					</p>
				</div>
			</div>
			<SystemOverviewTimeline />
		</section>
	);
}
