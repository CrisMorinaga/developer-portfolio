"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { RSTavern } from "@/components/Projects/rstavern";
import { RNGMeter } from "@/components/Projects/rngmeter";

import { ProjectNav } from "@/components/Projects/ProjectNav";

export default function Projects() {
	const [currProjectIdx, setCurrProjectIdx] = useState(0);

	const projectsArr = [<RSTavern key={0} />, <RNGMeter key={1} />];

	return (
		<div className="relative pt-5 overflow-hidden">
			<ProjectNav
				projectsArrLength={projectsArr.length}
				currProjectIdx={currProjectIdx}
				setCurrProjectIdx={setCurrProjectIdx}
			/>

			<AnimatePresence mode="wait">
				<motion.div
					key={currProjectIdx}
					initial={{ opacity: 0, x: 0 }}
					animate={{ opacity: 1, x: 10 }}
					exit={{ opacity: 0, x: 0 }}
					transition={{ duration: 0.3 }}
				>
					{projectsArr[currProjectIdx]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
