"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { Menu } from "lucide-react";

import ThemeButton from "../DarkThemeButton";
import SideNavBar from "./SideNavBar";

// import { GithubIcon, LinkedinIcon } from "../Home/Icons";

interface CustomLinkProps {
	href: string;
	title: string;
	className: string;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={`${className} relative group`}
		>
			{title}
			<span
				className={`h-[2px] inline-block bg-black dark:bg-light
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration:300 
            ${pathname === href ? "w-full" : "w-0"}`}
			>
				{" "}
				&nbsp;{" "}
			</span>
		</Link>
	);
};

export default function NavBar() {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full lg:pr-10 pr px-5 py-5 font-medium flex items-center justify-between gap-5">
			<motion.div
				className="sm:hidden flex"
				whileHover={{ scale: 1.2 }}
			>
				<Menu
					size={26}
					className="hover:cursor-pointer"
					onClick={() => setOpen((prev) => !prev)}
				/>
			</motion.div>

			<AnimatePresence>
				{open && (
					<SideNavBar
						key="side-navigation"
						onClose={() => setOpen(false)}
					/>
				)}
			</AnimatePresence>

			<div className="flex w-full justify-between items-center">
				<nav className="sm:flex hidden flex-1">
					<CustomLink
						href={"/"}
						title="Home"
						className="mr-4"
					/>
					<CustomLink
						href={"/projects"}
						title="Projects"
						className="mx-4"
					/>
					<CustomLink
						href={"/about"}
						title="About"
						className="mx-4"
					/>
					<CustomLink
						href={"/contact"}
						title="Contact"
						className="ml-4"
					/>
				</nav>

				<nav className="flex gap-2 items-center justify-end flex-1">
					{/* <motion.a
						href={"https://github.com/CrisMorinaga"}
						target="_blank"
						rel="noreferrer"
						whileTap={{ scale: 0.9 }}
						whileHover={{ y: -2 }}
						className="text-foreground/80 transition-colors hover:text-primary"
						aria-label="GitHub profile"
					>
						<GithubIcon className="size-7" />
					</motion.a>

					<motion.a
						href={"https://www.linkedin.com/in/morales-cristopher"}
						target="_blank"
						whileTap={{ scale: 0.9 }}
						whileHover={{ y: -2 }}
						className="text-foreground/80 transition-colors hover:text-primary"
						aria-label="LinkedIn Profile"
					>
						<LinkedinIcon className="size-6" />
					</motion.a> */}

					<ThemeButton />
				</nav>
			</div>
		</div>
	);
}
