import { CoinFlipProbability } from "../CoinFlipProbability";
import { SectionHeading } from "@/components/Projects/parts";

export function SolutionSection() {
	return (
		<div className="py-10">
			<SectionHeading
				eyebrow="02 · The solution"
				title={
					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						The probability updates{" "}
						<span className="text-primary text-7xl">
							with every kill.
						</span>
					</h2>
				}
				description={[
					"RNGMeter runs inside Alt1 and reads relevant RuneScape chat messages through OCR. When it recognizes a boss kill or a tracked drop, it updates the player's progress automatically.",

					"The tracker combines the item's drop rate, which is stored in the app's database, with the recorded kill count and includes the active encounter as the next attempt. A player with 100 completed kills therefore sees their overall chance across 101 attempts, keeping the meter aligned with the fight currently in progress.",

					"Kill counts, obtained drops, and tracker state are stored locally and preserved across sessions. Instead of maintaining separate notes or repeatedly leaving the game to use external calculators, the player can follow the entire run through a live visual meter.",
				]}
			/>

			<CoinFlipProbability />
		</div>
	);
}
