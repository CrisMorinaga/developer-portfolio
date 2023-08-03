'use client'

import { motion } from "framer-motion";

type Props = {
    text: string;
    className?: string;
}

const quote = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const singleWord ={
    initial: {
        opacity: 0,
        x: 50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 1.5
        }
    }
}

export default function AnimatedTextHr({ text, className='' }: Props) {

    return (
        <>
            <motion.div
                className="flex md:justify-start justify-center"
                variants={quote}
                initial='initial'
                animate='animate'
            >
                <motion.p 
                className={`md:text-base md:text-start text-center font-medium dark:text-light ${className}`}
                variants={singleWord}
                >
                    {text}
                </motion.p>
            </motion.div>
        </>
    );
};
