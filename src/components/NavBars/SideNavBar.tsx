"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { motion } from "motion/react";

import LogoBlack from "@/public/CrisMorinagaBlack.webp";
import LogoWhite from "@/public/CrisMorinagaWhite.webp";

import { Home, ScanFace, Send, X, FolderClosed } from "lucide-react";

type Paths = "/" | "/projects" | "/about" | "/contact";
type SideNavBarProps = {
	onClose: () => void;
};

function NavBarIcon({ onClose, path }: { onClose: () => void; path: Paths }) {
	const router = useRouter();
	const pathname = usePathname();

	const className = `sidebar-icon ${pathname === `${path}` ? "stroke-primary" : ""}`;

	const ChooseIcon = () => {
		switch (path) {
			case "/":
				return Home;
			case "/projects":
				return FolderClosed;
			case "/about":
				return ScanFace;
			case "/contact":
				return Send;
		}
	};

	const Icon = ChooseIcon();

	return (
		<motion.li
			className="flex flex-col items-center justify-center gap-2 cursor-pointer"
			whileHover={{ scale: 1.1 }}
		>
			<Icon
				className={className}
				onClick={() => {
					router.push(`${path}`);
					onClose();
				}}
			/>
		</motion.li>
	);
}

export default function SideNavBar({ onClose }: SideNavBarProps) {
	const MotionLink = motion.create(Link);
	const { resolvedTheme } = useTheme();

	const paths: Paths[] = ["/", "/projects", "/about", "/contact"];

	return (
		<motion.aside
			initial={{ opacity: 0, x: "-100%" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "-100%" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="flex flex-col items-center fixed top-0 left-0 h-dvh w-16 m-0 bg-background z-10 border justify-between"
		>
			<motion.ul className="flex flex-col items-center justify-center gap-6 mt-6">
				<motion.li whileHover={{ scale: 1.1 }}>
					<X
						className="sidebar-icon"
						onClick={onClose}
					/>
				</motion.li>

				{paths.map((path) => (
					<NavBarIcon
						key={path}
						onClose={onClose}
						path={path}
					/>
				))}
			</motion.ul>

			<MotionLink
				onClick={() => onClose()}
				aria-label="HomeButton"
				whileHover={{ scale: 1.1 }}
				href={"/"}
				className="w-7 h-7 bg-background rounded-full mb-5"
			>
				<Image
					src={resolvedTheme === "dark" ? LogoWhite : LogoBlack}
					alt="HomeButton"
					className="w-7 h-7 rounded-full"
				/>
			</MotionLink>
		</motion.aside>
	);
}
