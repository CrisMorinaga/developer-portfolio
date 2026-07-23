"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

type Props = {
	className?: string;
};

export default function DarkThemeButton({ className = "" }: Props) {
	const { resolvedTheme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			aria-label="DarkThemeSwitcher"
			onClick={() =>
				setTheme(resolvedTheme === "dark" ? "light" : "dark")
			}
			className={`flex items-center justify-center rounded-full  hover:cursor-pointer ${className}`}
		>
			{resolvedTheme === "dark" ? (
				<Sun className={`hover:stroke-primary stroke-foreground`} />
			) : (
				<Moon className="hover:stroke-primary" />
			)}
		</button>
	);
}
