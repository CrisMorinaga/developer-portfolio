'use client'

import { Home , Ghost, ScanFace, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";


type Props = {
    open: boolean;
    handleOpenClose: () => void
}

export default function SideNavBar({open, handleOpenClose}:Props) {

    const router = useRouter();
    const pathname = usePathname();

    return(
        <>
            <AnimatePresence>
                {open && (
                    <motion.div 
                    key='sideNavBar'
                    initial={{opacity: 1, x: -200}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x:-200}}
                    transition={{duration: 0.3}}
                    className="md:flex flex-col align-middle hidden fixed top-0 left-0 h-screen w-20 m-0 bg-light dark:bg-dark shadow-lg shadow-dark dark:shadow-light z-10">
                        <motion.ul className="flex flex-col items-center align-middle gap-[58px] mt-6">
                            <motion.li whileHover={{scale: 1.2}}> 
                                <X className="sidebar-icon dark:stroke-light" onClick={handleOpenClose}/> 
                            </motion.li>
                            <motion.li className={``} whileHover={{scale: 1.2}}> 
                                <Home className={`sidebar-icon dark:stroke-light
                                ${pathname === '/' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/')} /> 
                                <span className={`sidebar-tooltip pointer-events-none
                                ${pathname === '/' ? 'dark:text-primaryDark text-primary' : ''}`}>Home</span>
                            </motion.li>
                            <motion.li className="" whileHover={{scale: 1.2}}> 
                                <Ghost className={`sidebar-icon dark:stroke-light ml-1
                                ${pathname === '/projects' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/projects')} /> 
                                <span className={`sidebar-tooltip pointer-events-none 
                                ${pathname === '/projects' ? 'dark:text-primaryDark text-primary' : ''}`}>Projects</span>
                            </motion.li>
                            <motion.li whileHover={{scale: 1.2}}> 
                                <ScanFace className={`sidebar-icon dark:stroke-light
                                ${pathname === '/about' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/about')} /> 
                                <span className={`sidebar-tooltip pointer-events-none 
                                ${pathname === '/about' ? 'dark:text-primaryDark text-primary' : ''}`}>About</span>
                            </motion.li>
                            <motion.li whileHover={{scale: 1.2}}> 
                                <Send className={`sidebar-icon dark:stroke-light ml-1
                                ${pathname === '/contact' ? 'dark:stroke-primaryDark stroke-primary' : ''}`} onClick={ ()=> router.push('/contact')} /> 
                                <span className={`sidebar-tooltip pointer-events-none 
                                ${pathname === '/contact' ? 'dark:text-primaryDark text-primary' : ''}`}>Contact</span>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )} 
            </AnimatePresence>
        </>
    )
}