"use client";

import { useState } from "react";
import { motion, useAnimationControls } from "motion/react";

type CoinSide = "heads" | "tails";

const coinProb = 0.1;

export function CoinFlipProbability() {
	const [lastResult, setLastResult] = useState<CoinSide | null>(null);
	const [flipCount, setFlipCount] = useState(0);
	const resultAnimation = useAnimationControls();

	const cumulativeProbability =
		(1 - Math.pow(1 - coinProb, flipCount ? flipCount + 1 : 1)) * 100;

	function flipCoin() {
		const result: CoinSide = Math.random() < coinProb ? "tails" : "heads";

		setLastResult(result);
		setFlipCount((currentCount) =>
			result === "tails" ? 0 : currentCount + 1,
		);

		void resultAnimation.start({
			y: [0, -10, 0],
			scale: [1, 1.08, 1],
			transition: {
				duration: 0.3,
				times: [0, 0.45, 1],
				ease: "easeOut",
			},
		});
	}

	return (
		<div className="mx-auto max-w-md border rounded-xl bg-card p-6 text-center">
			<p className="text-sm uppercase tracking-[0.2em] text-primary">
				Test it yourself!
			</p>
			<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
				This coin flip has a 10% chance of being tails.
			</p>

			<div className="mt-6 relative">
				<motion.p
					animate={resultAnimation}
					className="text-3xl font-semibold capitalize text-primary"
				>
					{lastResult ? `${lastResult}!` : "Ready?"}
				</motion.p>

				{lastResult === "tails" && (
					<p className="absolute left-30 text-sm text-muted-foreground">
						The counter was reset.
					</p>
				)}
			</div>

			<div className="mt-6 flex items-end justify-between gap-4 text-left">
				<div>
					<p className="text-xs text-muted-foreground">Flip count</p>
					<p className="text-2xl font-semibold text-foreground">
						{flipCount}
					</p>
				</div>
				<div className="text-right">
					<p className="text-xs text-muted-foreground">
						Chance of at least one tail
					</p>
					<p className="text-2xl font-semibold text-foreground">
						{cumulativeProbability.toFixed(2)}%
					</p>
				</div>
			</div>

			<progress
				className="d-progress d-progress-primary mt-3 w-full"
				value={cumulativeProbability}
				max={100}
			/>

			<button
				type="button"
				onClick={flipCoin}
				className="d-btn d-btn-primary mt-6 w-full rounded-xl text-white"
			>
				Flip a coin!
			</button>
		</div>
	);
}
