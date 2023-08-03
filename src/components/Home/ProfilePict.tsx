'use client'

import Developer from "@/public/Home/developer.webp"
import Pianist from "@/public/Home/pianist.webp"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageMotion = motion(Image)

export default function ProfilePict() {

    const[ isHovered, setIsHovered ] = useState(false)

    return (
        <>
            <motion.div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <ImageMotion 
                priority
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw
                "
                src={Developer} 
                alt="Profile developer" 
                animate={{
                    opacity: isHovered ? 0 : 1,
                    transition: {
                        duration: 0.2
                    }
                }}
                className="w-[330px] h-auto absolute dark:bg-dark rounded-3xl"/>

                <ImageMotion 
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw
                "
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    transition: {
                        duration: 0.2
                    }
                }}
                src={Pianist} 
                alt="Profile pianist" 
                className=" w-[330px] h-[235px] dark:bg-dark rounded-3xl"/>

            </motion.div>
        </>
    )
}