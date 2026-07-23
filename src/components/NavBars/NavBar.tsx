"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";

import ThemeButton from "../DarkThemeButton";
import SideNavBar from "./SideNavBar";

import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { Menu } from "lucide-react";

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
				className={`absolute left-0 -bottom-0.5 h-[2px] bg-foreground transition-[width] duration-300 ease group-hover:w-full ${
					pathname === href ? "w-full" : "w-0"
				}`}
			/>
		</Link>
	);
};

export default function NavBar() {
	const [open, setOpen] = useState(false);

	const links = [
		{ href: "/", title: "Home" },
		{ href: "/projects", title: "Projects" },
		{ href: "/about", title: "About" },
		{ href: "/contact", title: "Contact" },
	];

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
				<nav className="sm:flex hidden flex-1 gap-4">
					{links.map(({ href, title }) => (
						<CustomLink
							key={href}
							href={href}
							title={title}
							className="mr-4"
						/>
					))}
				</nav>

				<nav className="flex gap-2 items-center justify-end flex-1">
					<motion.a
						href={"https://github.com/CrisMorinaga"}
						target="_blank"
						rel="noreferrer"
						whileTap={{ scale: 0.9 }}
						whileHover={{ y: -2 }}
						className="text-foreground/80 transition-colors hover:text-primary"
						aria-label="GitHub profile"
					>
						<GithubIcon className="sm:size-7 size-6" />
					</motion.a>

					<motion.a
						href={"https://www.linkedin.com/in/morales-cristopher"}
						target="_blank"
						whileTap={{ scale: 0.9 }}
						whileHover={{ y: -2 }}
						className="text-foreground/80 transition-colors hover:text-primary"
						aria-label="LinkedIn Profile"
					>
						<LinkedinIcon className="sm:size-6 size-5" />
					</motion.a>

					<ThemeButton />
				</nav>
			</div>
		</div>
	);
}
