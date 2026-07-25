import { SectionHeading } from "@/components/Projects/parts";

export function ProblemSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="01 · The problem"
				title={
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						{`A drop rate does not show how`}{" "}
						<span className="text-primary text-7xl">unusual</span>{" "}
						{`your streak is.`}
					</h2>
				}
				description={[
					"RuneScape provides item drop rates and boss kill counts, but it does not link them. Just knowing that an item has a drop rate of 1 in 100 does not tell you much about what 20, 100, or 300 kills without the drop actually mean.",

					"This also makes drop rates easy to get wrong. Reaching 100 kills does not mean that a 1-in-100 item was guaranteed to drop (the cumulative probability is only about 63%). At 300 kills, however, approximately 95% of players should have seen it at least once.",

					"Players can calculate these values manually, but doing so means leaving the game, finding the correct drop rate, recording every attempt, and recalculating it as the kill count changes. There is no visual indication of how the current kill streak compares with the underlying probability.",
				]}
			/>

			<figure
				className="d-diff aspect-10/3"
				tabIndex={0}
			>
				<div
					className="d-diff-item-1"
					role="img"
					tabIndex={0}
				>
					<div className="bg-base-200 text-primary-content grid place-content-center text-center lg:text-5xl md:text-4xl sm:text-3xl max-[500px]:text-xs sm:px-0 px-10 text-base font-black">
						{`NO WAY I'VE KILLED IT 50 TIMES AND STILL NOTHING...`}
					</div>
				</div>
				<div
					className="d-diff-item-2"
					role="img"
				>
					<div className=" bg-primary text-primary-content grid place-content-center text-center lg:text-5xl md:text-4xl sm:text-3xl text-base max-[500px]:text-xs sm:px-10 px-10 font-black">
						{`MOST RUNS WITH 50 KILLS HAVE A 20% CHANCE OF SEEING THAT DROP,
						SO I'M NOT AS BAD AS I THOUGHT!`}
					</div>
				</div>
				<div className="d-diff-resizer"></div>
			</figure>
		</div>
	);
}
