"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import LeftSideBlack from "@/public/SplashScreen/LeftSideBlack.webp";
import RightSideBlack from "@/public/SplashScreen/RightSideBlack.webp";

const MotionImage = motion.create(Image);

export default function SplashScreen() {
	const [isVisible, setIsVisible] = useState(true);
	const shouldReduceMotion = useReducedMotion();
	const shouldApplyReducedMotion =
		shouldReduceMotion && process.env.NODE_ENV === "production";

	useEffect(() => {
		if (!isVisible) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isVisible]);

	if (!isVisible) return null;

	const transition = shouldApplyReducedMotion
		? { duration: 0.2, ease: "easeOut" as const }
		: { delay: 0.35, duration: 1.2, ease: "easeInOut" as const };

	return (
		<div className="pointer-events-auto fixed inset-0 z-[100] overflow-hidden">
			<motion.div
				initial={{ x: 0 }}
				animate={
					shouldApplyReducedMotion ? { opacity: 0 } : { x: "-100%" }
				}
				transition={transition}
				className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-end bg-[#10110e]"
			>
				<MotionImage
					priority
					src={LeftSideBlack}
					alt=""
					className="h-[min(500px,80dvh,90vw)] w-auto max-w-none"
				/>
			</motion.div>

			<motion.div
				initial={{ x: 0 }}
				animate={
					shouldApplyReducedMotion ? { opacity: 0 } : { x: "100%" }
				}
				transition={transition}
				onAnimationComplete={() => setIsVisible(false)}
				className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-start bg-[#10110e]"
			>
				<MotionImage
					priority
					src={RightSideBlack}
					alt=""
					className="h-[min(500px,80dvh,90vw)] w-auto max-w-none"
				/>
			</motion.div>
		</div>
	);
}
