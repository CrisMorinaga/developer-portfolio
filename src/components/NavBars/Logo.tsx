"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import LogoBlack from "@/public/CrisMorinagaBlack.webp";
import LogoWhite from "@/public/CrisMorinagaWhite.webp";

export default function Logo() {
	const MotionLink = motion(Link);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="absolute lg:left-[50%] md:hidden left-[3%] lg:top-1 top-2 lg:translate-x-[-50%] translate-x-[-5%]">
			<div className="flex items-center justify-center mt-2">
				<MotionLink
					aria-label="HomeButton"
					whileHover={{ scale: 1.1 }}
					href={"/"}
					className="lg:w-10 lg:h-10 w-10 h-10 bg-dark dark:bg-light dark:text-dark text-light flex items-center justify-center
                rounded-full lg:text-2xl md:text-xl text-lg"
				>
					<Image
						src={resolvedTheme === "dark" ? LogoWhite : LogoBlack}
						alt="HomeButton"
						className="lg:w-10 lg:h-10 w-10 h-10 rounded-full"
					/>
				</MotionLink>
			</div>
		</div>
	);
}
