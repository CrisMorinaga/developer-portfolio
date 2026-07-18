"use client";
import { usePathname, useRouter } from "next/navigation";

import { Ghost, Home, ScanFace, Send } from "lucide-react";

export default function BottomNavBar() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<ul className="flex flex-row justify-between py-4 px-10 fixed bottom-0 w-full m-0 md:hidden bg-light dark:bg-dark z-10 border-t-2">
			<li className="icon-div transition-transform duration-200 hover:scale-[1.2] active:scale-[1.2]">
				<Home
					className={`sidebar-icon dark:stroke-light h-6 w-6 ${pathname === "/" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
					onClick={() => router.push("/")}
				/>
				<span
					className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light ${pathname === "/" ? "text-primary dark:text-primaryDark" : ""}`}
				>
					Home
				</span>
			</li>
			<li className="icon-div transition-transform duration-200 hover:scale-[1.2] active:scale-[1.2]">
				<Ghost
					className={`sidebar-icon dark:stroke-light h-6 w-6 ${pathname === "/projects" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
					onClick={() => router.push("/projects")}
				/>
				<span
					className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light ${pathname === "/projects" ? "text-primary dark:text-primaryDark" : ""}`}
				>
					Projects
				</span>
			</li>
			<li className="icon-div transition-transform duration-200 hover:scale-[1.2] active:scale-[1.2]">
				<ScanFace
					className={`sidebar-icon dark:stroke-light h-6 w-6 ${pathname === "/about" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
					onClick={() => router.push("/about")}
				/>
				<span
					className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light ${pathname === "/about" ? "text-primary dark:text-primaryDark" : ""}`}
				>
					About
				</span>
			</li>
			<li className="icon-div transition-transform duration-200 hover:scale-[1.2] active:scale-[1.2]">
				<Send
					className={`sidebar-icon dark:stroke-light h-6 w-6 ${pathname === "/contact" ? "dark:stroke-primaryDark stroke-primary" : ""}`}
					onClick={() => router.push("/contact")}
				/>
				<span
					className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light ${pathname === "/contact" ? "text-primary dark:text-primaryDark" : ""}`}
				>
					Contact
				</span>
			</li>
		</ul>
	);
}
