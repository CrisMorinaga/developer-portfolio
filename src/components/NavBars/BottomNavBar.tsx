'use client'

import { motion } from "framer-motion";
import { Ghost, Home, ScanFace, Send } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import ThemeButton from "../DarkThemeButton";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "../Home/Icons";

export default function BottomNavBar() {

    const router = useRouter();
    const pathname = usePathname();

    return(
        <>
            <div>
                <div className="absolute top-0 right-0 pl-10 pr-4 py-8 md:hidden">
                    <nav className="flex flex-row md:hidden">
                        
                        <motion.a 
                        href={'https://github.com/CrisMorinaga'}
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3 bg-light rounded-full"
                        > 
                            <GithubIcon /> 
                        </motion.a>
                        
                        <motion.a 
                        href={'https://www.youtube.com/watch?v=8-3RiKe1jfk&t=1s'} 
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3"
                        > 
                            <YoutubeIcon className="bg-light rounded-full"/> 
                        </motion.a>

                        <motion.a 
                        href={'https://www.linkedin.com/in/cristopher-morales-c'} 
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3 bg-light rounded-full"
                        > 
                            <LinkedinIcon />
                        </motion.a>

                        <ThemeButton />

                    </nav>
                </div>
            </div>

            <div className="flex">
                <div className="fixed bottom-0 w-screen h-16 m-0 md:hidden
                bg-light dark:bg-dark z-10 shadow-2xl shadow-dark dark:shadow-light">
                    <motion.ul className="flex flex-row justify-between mt-3 px-10">
                        <motion.li className="icon-div" whileHover={{scale: 1.2}}> 
                            <Home className={`sidebar-icon dark:stroke-light h-6 w-6 
                            ${pathname === '/' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/')} /> 
                            <span className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light
                            ${pathname === '/' ? 'text-primary dark:text-primaryDark' : ''}`}>Home</span>
                        </motion.li>
                        <motion.li className="icon-div" whileHover={{scale: 1.2}}> 
                            <Ghost className={`sidebar-icon dark:stroke-light h-6 w-6
                            ${pathname === '/projects' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/projects')} /> 
                            <span className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light
                            ${pathname === '/projects' ? 'text-primary dark:text-primaryDark' : ''}`}>Projects</span>
                        </motion.li>
                        <motion.li className="icon-div" whileHover={{scale: 1.2}}> 
                            <ScanFace className={`sidebar-icon dark:stroke-light h-6 w-6
                            ${pathname === '/about' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/about')}/> 
                            <span className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light
                            ${pathname === '/about' ? 'text-primary dark:text-primaryDark' : ''}`}>About</span>
                        </motion.li>
                        <motion.li className="icon-div" whileHover={{scale: 1.2}}> 
                            <Send className={`sidebar-icon dark:stroke-light h-6 w-6
                            ${pathname === '/contact' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/contact')}  /> 
                            <span className={`sidebar-tooltip pointer-events-none dark:bg-dark dark:text-light
                            ${pathname === '/contact' ? 'text-primary dark:text-primaryDark' : ''}`}>Contact</span>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </>
    )
}