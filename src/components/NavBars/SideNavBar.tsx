"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { motion } from "motion/react";

import LogoBlack from "@/public/CrisMorinagaBlack.webp";
import LogoWhite from "@/public/CrisMorinagaWhite.webp";

import { Home, ScanFace, Send, X, FolderClosed } from "lucide-react";

type Props = {
	onClose: () => void;
};

export default function SideNavBar({ onClose }: Props) {
	const router = useRouter();
	const pathname = usePathname();

	const MotionLink = motion(Link);
	const { resolvedTheme } = useTheme();

	return (
		<motion.aside
			initial={{ opacity: 0, x: "-100%" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "-100%" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="flex flex-col items-center fixed top-0 left-0 h-screen w-16 m-0 bg-light dark:bg-dark z-10 border justify-between"
		>
			<motion.ul className="flex flex-col items-center justify-center gap-6 mt-6">
				<motion.li whileHover={{ scale: 1.1 }}>
					<X
						className="sidebar-icon dark:stroke-light"
						onClick={onClose}
					/>
				</motion.li>
				<motion.li
					className="flex flex-col items-center justify-center gap-2 cursor-pointer"
					whileHover={{ scale: 1.1 }}
				>
					<Home
						className={`sidebar-icon dark:stroke-light ${pathname === "/" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
						onClick={() => {
							router.push("/");
							onClose();
						}}
					/>
				</motion.li>
				<motion.li
					className="flex flex-col items-center justify-center gap-2 cursor-pointer"
					whileHover={{ scale: 1.1 }}
				>
					<FolderClosed
						className={`sidebar-icon dark:stroke-light ml-1 ${pathname === "/projects" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
						onClick={() => {
							router.push("/projects");
							onClose();
						}}
					/>
				</motion.li>
				<motion.li
					className="flex flex-col items-center justify-center gap-2 cursor-pointer"
					whileHover={{ scale: 1.1 }}
				>
					<ScanFace
						className={`sidebar-icon dark:stroke-light ${pathname === "/about" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
						onClick={() => {
							router.push("/about");
							onClose();
						}}
					/>
				</motion.li>
				<motion.li
					className="flex flex-col items-center justify-center gap-2 cursor-pointer"
					whileHover={{ scale: 1.1 }}
				>
					<Send
						className={`sidebar-icon dark:stroke-light ml-1 ${pathname === "/contact" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
						onClick={() => {
							router.push("/contact");
							onClose();
						}}
					/>
				</motion.li>
			</motion.ul>
			<div className="mb-5">
				<div className="flex items-center justify-center mt-2">
					<MotionLink
						onClick={() => onClose()}
						aria-label="HomeButton"
						whileHover={{ scale: 1.1 }}
						href={"/"}
						className="w-7 h-7 bg-dark dark:bg-light dark:text-dark text-light flex items-center justify-center rounded-full lg:text-2xl md:text-xl text-lg"
					>
						<Image
							src={
								resolvedTheme === "dark" ? LogoWhite : LogoBlack
							}
							alt="HomeButton"
							className="w-7 h-7 rounded-full"
						/>
					</MotionLink>
				</div>
			</div>
		</motion.aside>
	);
}
