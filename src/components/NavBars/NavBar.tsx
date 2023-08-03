'use client'

import {GithubIcon, LinkedinIcon, YoutubeIcon} from "../Home/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion';
import ThemeButton from "../DarkThemeButton";
import { Menu } from 'lucide-react'
import { useState } from "react";
import SideNavBar from "./SideNavBar";
import { Separator } from "@/components/ui/separator"


interface CustomLinkProps{
    href: string;
    title: string;
    className: string;
}


const CustomLink = ({href, title, className=''}: CustomLinkProps) => {
    
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}> 
            {title} 
            <span className={`h-[2px] inline-block bg-black dark:bg-light
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration:300 
            ${pathname === href ? 'w-full' : 'w-0'}`}> &nbsp; </span>
        </Link>
    )
}

export default function NavBar() {

    const [open, setOpen] = useState(false);
    const handleOpenClose = () => {
        setOpen(prev => !prev)
    }

    return(
        <> 
            <div className="w-full lg:px-32 px-10 py-8 font-medium flex items-center justify-between">

                <motion.div
                    className="fixed left-5 top-6 md:flex hidden" 
                    whileHover={{scale:1.2}}>
                        <Menu className=" hover:cursor-pointer w-10 h-10" onClick={() => setOpen((prev) => !prev)}/>
                </motion.div>
                <SideNavBar open={open} handleOpenClose={handleOpenClose}/>
                
                <div className="w-full justify-between items-center lg:flex">
                    <nav className="lg:flex hidden">
                        <CustomLink href={'/'} title="Home" className="mr-4"/>
                        <CustomLink href={'/projects'} title="Projects" className="mx-4"/>
                        <CustomLink href={'/about'}  title="About" className="mx-4"/>
                        <CustomLink href={'/contact'} title="Contact" className="ml-4"/>
                    </nav>
                
                    <nav className="md:flex items-center justify-end flex-wrap hidden">
                        <motion.a 
                        href={'https://github.com/CrisMorinaga'}
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3 bg-light rounded-full"
                        aria-label="CrismorinagaGithubProfile"
                        > 
                            <GithubIcon /> 
                        </motion.a>
                        
                        <motion.a 
                        href={'https://www.youtube.com/watch?v=8-3RiKe1jfk&t=1s'} 
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3"
                        aria-label="CrismorinagaYoutubePianoVideo"
                        > 
                            <YoutubeIcon className="bg-light rounded-full"/> 
                        </motion.a>

                        <motion.a 
                        href={'https://www.linkedin.com/in/cristopher-morales-c'} 
                        target="_blank"
                        whileTap={{scale:0.9}}
                        whileHover={{y:-2}}
                        className="w-6 mx-3 bg-light rounded-full"
                        aria-label="CrismorinagaLinkedinProfile"
                        > 
                            <LinkedinIcon />
                        </motion.a>

                        <ThemeButton />
                    </nav>
                </div>
            </div>
            <Separator className="bg-dark/30 dark:bg-light/30"/>

        </>
    )
}