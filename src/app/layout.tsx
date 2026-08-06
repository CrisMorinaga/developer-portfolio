import { Analytics } from "@vercel/analytics/next";

import { Montserrat, DM_Serif_Display } from "next/font/google";

import NavBar from "@/components/NavBars/NavBar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import SplashScreen from "@/components/SplashScreen";

import type { Metadata } from "next";

import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const dmSerif = DM_Serif_Display({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-dm-serif",
});

export const metadata: Metadata = {
	title: `Cristopher's Portfolio`,
	description: "Portfolio of a software developer based in Japan.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${montserrat.variable} ${dmSerif.variable}
          flex min-h-dvh w-full flex-col font-mont`}
			>
				<Analytics />
				<Providers>
					<SplashScreen />
					<NavBar />
					<main className="flex flex-1 flex-col">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
