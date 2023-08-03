'use client'

import Image, { StaticImageData } from "next/image";
import nextJs from '@/public/Projects/Icons/nextjs.webp'
import flask from '@/public/Projects/Icons/flask.webp'
import postgresql from '@/public/Projects/Icons/postgresql.webp'
import Link from "next/link";
import { GithubIcon } from "@/components/Home/Icons";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import StackInfo from "./StackInfo";
import { MotionLink } from "../ButtonAndLink";


interface Props {
    type: string,
    title: string,
    backend?: string[],
    frontend?: string[],
    database?: string[],
    cloudStorage?: string[],
    summary?: string,
    img: StaticImageData,
    link?: any,
    github: string,
    imgClassName?: string
}

export function FeaturedProject ({ type, title, backend, frontend, database, cloudStorage, summary, img, link, github }: Props) {

    const GitHubLink = motion(Link)

    return (
        <div className="container !max-w-full">
            <article className="w-full flex md:flex-row flex-col items-center justify-between rounded-3xl border
            border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-xl shadow-dark dark:shadow-light p-12">
                <Link href={link} target="_blank" className="md:w-1/2 cursor-pointer overflow-hidden rounded-lg">
                    <Image 
                    priority
                    src={img} alt={title} className="w-full h-auto"/>
                </Link>
                <div className="md:w-1/2 flex flex-col items-start justify-between md:pl-6 md:pt-0 pt-4"> 
                    <span className="text-primary dark:text-primaryDark font-medium md:text-xl text-lg"> {type} </span>
                    <Link href={link} target="_blank" className="hover:underline underline-offset-2 ">
                        <h2 className="my-2 w-full text-left md:text-4xl sm:text-3xl text-2xl font-bold ">{title}</h2>
                    </Link>
                    <p className="my-2 font-medium sm:text-base text-sm text-dark dark:text-light text-start"> {summary} </p>
                    <div className="flex flex-row gap-2 w-full justify-between">
                        <div className="mt-2 flex items-center">
                            <GitHubLink 
                            aria-label='GithubProfile'
                            whileHover={{scale: 1.1}}
                            href={github} target="_blank" className="md:w-9 sm:w-7 w-6 dark:bg-light dark:rounded-full"> <GithubIcon/> </GitHubLink>
                            <span>
                                <MotionLink 
                                linkText="Visit Project" newTab={true} link={link}/>
                            </span>
                        </div>
                        <Dialog>
                        <DialogTrigger>
                            <div className="flex cursor-default sm:mt-0 mt-2">
                                <motion.div 
                                whileHover={{scale: 1.1}} 
                                className="flex gap-2 cursor-pointer">
                                    <Image src={flask} className="lg:w-9 sm:w-7 w-6 p-1 h-auto dark:rounded-full dark:border dark:bg-light dark:border-light" alt="flask icon"/>
                                    <Image src={nextJs} className="lg:w-9 sm:w-7 w-6 h-auto dark:rounded-full dark:bg-light dark:border dark:border-light " alt="nextjs icon"/>
                                    <Image src={postgresql} className="lg:w-9 sm:w-7 w-6 h-auto dark:rounded-full dark:border dark:bg-light dark:border-light" alt="postgresql icon"/>
                                </motion.div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Tech Stack</DialogTitle>
                            </DialogHeader>
                                <div className="sm:flex sm:flex-row grid grid-cols-2 p-4 px-0 gap-2">
                                    <StackInfo title="Backend" list={backend}/> 
                                    <StackInfo title="Frontend" list={frontend}/> 
                                    <StackInfo title="Database" list={database}/> 
                                    <StackInfo title="CloudStorage" list={cloudStorage}/> 
                                </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                </div>
            </article>
        </div>
    )
}

export function Project ({ type, title, img, link, github, imgClassName }: Props) {

    const GitHubLink = motion(Link)

    return (
        <motion.article 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{margin: "-50px", once: true}}
        transition={{ease: "easeOut", duration: 1}}
        className="w-full md:h-auto h-40 flex md:flex-col flex-row overflow-hidden items-center justify-center rounded-2xl border border-solid 
        border-dark bg-light dark:bg-dark dark:border-light p-6 relative shadow-xl shadow-dark dark:shadow-light">
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg bg-slate-700">
                <Image priority 
                src={img} alt={title} className={`w-full h-auto object-cover ${imgClassName}`}/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4 md:ml-0 ml-4"> 
                <span className="text-primary dark:text-primaryDark font-medium md:text-xl text-base"> 
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 ">
                    <h2 className="my-2 w-full text-left md:text-3xl sm:text-2xl text-xl font-bold ">
                        {title}
                    </h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-dark dark:text-light md:text-lg sm:text-base text-sm font-semibold underline"> 
                        Visit 
                    </Link>
                    <GitHubLink
                    aria-label='GithubProfile'
                    whileHover={{scale: 1.1}}
                    href={github} target="_blank" className="md:w-9 sm:w-7 w-6 dark:bg-light dark:rounded-full"> 
                        <GithubIcon/> 
                    </GitHubLink>
                </div>
            </div>
        </motion.article>
    )
}