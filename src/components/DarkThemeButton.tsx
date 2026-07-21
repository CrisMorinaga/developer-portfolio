"use client";
import { useEffect, useState } from "react";
// import { motion } from "motion/react";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {
	className?: string;
	strokeBlack?: boolean;
};

export default function DarkThemeButton({
	className = "",
	strokeBlack,
}: Props) {
	const { resolvedTheme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			// whileTap={{ scale: 0.9 }}
			// whileHover={{ y: -2 }}
			aria-label="DarkThemeSwitcher"
			onClick={() =>
				setTheme(resolvedTheme === "dark" ? "light" : "dark")
			}
			className={`flex items-center justify-center rounded-full  hover:cursor-pointer ${className}`}
		>
			{resolvedTheme === "dark" ? (
				<Sun
					className={`hover:stroke-primary ${strokeBlack ? "stroke-dark" : "stroke-light"}`}
				/>
			) : (
				<Moon className="hover:stroke-primary" />
			)}
		</button>
	);
}
