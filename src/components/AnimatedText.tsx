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
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export default function AnimatedText({ text, className='' }: Props) {

    return (
        <>
            <motion.div
                variants={quote}
                initial='initial'
                animate='animate'
            >
                <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
                    <h1 className={`inline-block w-full gap-1 text-dark dark:text-light 
                    font-bold capitalize xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl ${className}`}>
                        {
                            text.split(" ").map((word, index) => (
                                <motion.span 
                                key={index} 
                                className="inline-block my-1"
                                variants={singleWord}
                                >
                                   {word}&nbsp;
                                </motion.span>
                            )
                        )}
                    </h1>
                </div>
            </motion.div>
        </>
    );
};
