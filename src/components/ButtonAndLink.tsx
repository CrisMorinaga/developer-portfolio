"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
	buttonText: string;
};

type LinkProps = {
	linkText: string;
	newTab: boolean;
	link: string;
	className?: string;
	download?: boolean;
	children?: React.ReactNode;
};

const Button = ({ buttonText }: ButtonProps) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			className="bg-dark dark:bg-light text-light dark:text-dark 
        hover:dark:bg-primaryDark hover:bg-primary rounded-lg p-2 px-6 sm:text-lg text-md font-semibold"
		>
			{buttonText}
		</motion.button>
	);
};

const MotionLink = ({
	linkText,
	newTab,
	link,
	className,
	download = false,
	children,
}: LinkProps) => {
	const MotionLink = motion(Link);

	return (
		<MotionLink
			download={download}
			whileHover={{ scale: 1.1 }}
			href={link}
			target={newTab ? "_blank" : "_self"}
			className={`flex flex-row gap-2 ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark 
        hover:dark:bg-primaryDark hover:bg-primary py-2 px-6 
        xl:text-lg lg:text-base md:text-sm text-xs font-semibold ${className}`}
		>
			{linkText}
			{children}
		</MotionLink>
	);
};

export { Button, MotionLink };
