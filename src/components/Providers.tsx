"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class">
			<MotionConfig
				reducedMotion={
					process.env.NODE_ENV === "production" ? "user" : "never"
				}
			>
				{children}
			</MotionConfig>
		</ThemeProvider>
	);
};

export default Providers;
