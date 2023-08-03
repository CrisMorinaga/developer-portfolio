'use client'
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import ClockComponent from "@/components/About/Clock";
import ClockBanner from "@/components/About/ClockBanner";
import { useState } from "react";

export default function About() {

    const [ userDemo, setUserDemo ] = useState('');

    const handleChange = (userChoice='') => {
        setUserDemo(userChoice)
    }

    return (
        <>
            <div className="flex w-full min-w-screen flex-col item-center justify-center px-4">
                <Layout className="pt-16">
                    <AnimatedText text="A Pianist's Journey into Coding"/>
                    <div className="flex flex-col text-justify sm:pb-0 pb-28">
                        <h2 className="mb-5 text-lg font-bold uppercase text-dark/75 dark:text-light/75"> 
                            {  
                                "Biography"
                            }
                        </h2>

                        <p className="mb-4">
                            {
                                `Hello, nice to meet you! My name is Cristopher Morales and I'm a developer from Chile.`
                            } 
                        </p>

                        <p className="mb-4">
                            {
                                `Since school, I always had an interest in studying something related to coding and computer 
                                science (I've always loved gaming and computers) but never tried to give the first steps toward it. 
                                But after seeing the recent explosion in AI with OpenAI and chatGPT-4, that interest came back to me.`
                            } 
                        </p>

                        <p className="">
                            {
                                `In Chile, I pursued my first passion which is music. But now, here in Japan, I'm pursuing my second passion which is coding! 
                                Hope you find my portfolio interesting. Have a good day :)`
                            }
                        </p>
                        <Separator className="my-2 bg-dark/30 dark:bg-light/30"/>
                        <div className="col-span-8 mt-2 relative">
                            <ClockComponent handleChange={handleChange}/>
                            <ClockBanner userDemo={userDemo}/>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}
