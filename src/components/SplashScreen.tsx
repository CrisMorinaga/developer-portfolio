"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import LeftSideBlack from "@/public/SplashScreen/LeftSideBlack.webp";
import RightSideBlack from "@/public/SplashScreen/RightSideBlack.webp";

export default function SplashScreen() {
	const MotionImage = motion(Image);

	return (
		<div className="container grid grid-cols-2">
			<AnimatePresence mode="wait">
				<motion.div>
					<motion.div
						id="splashScreen"
						key={"left"}
						initial={{ x: "-50%", width: "100%" }}
						animate={{ x: -1000, width: "0%" }}
						transition={{ duration: 2, ease: "easeInOut" }}
						className="fixed top-0 bottom-0 left-0 col-span-1 h-full z-100 flex justify-end items-center"
					>
						<MotionImage
							priority
							src={LeftSideBlack}
							alt="Splash screen"
							className="h-[500px]"
						/>
					</motion.div>

					<motion.div
						id="splashScreen"
						key={"right"}
						initial={{ x: "50%", width: "100%", y: "-0.5px" }}
						animate={{ x: 1000, width: "0%", scale: 1.2 }}
						transition={{ duration: 2, ease: "easeInOut" }}
						className="fixed top-0 bottom-0 right-0 col-span-1 h-full z-100 flex items-center"
					>
						<MotionImage
							priority
							src={RightSideBlack}
							alt="Splash screen"
							className="h-[500px]"
						/>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
