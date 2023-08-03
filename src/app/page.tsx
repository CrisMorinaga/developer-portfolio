import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import ProfilePict from "@/components/Home/ProfilePict"
import AnimatedTextHr from "@/components/AnimatedTextHr"
import { MotionLink } from "@/components/ButtonAndLink"
import { Download } from "lucide-react"

export default function Home() {
  return (
    <>
        <div className="flex md:items-center bg-light text-dark dark:bg-dark w-full min-h-screen">
            <Layout className="!pt-0 !mt-4 container">    
                <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full">
                    <div className="md:w-1/2">
                        <ProfilePict />
                    </div>
                    <div className="md:w-1/2 flex flex-col self-center">
                        <AnimatedTextHr text="A pianist turned Developer" 
                        className="my-2 italic !mr-4"/>
                        <AnimatedText 
                        className="md:!text-4xl md:!text-left !text-3xl text-center"
                        text={"Python developer, full-stack developer"}
                        />
                        <AnimatedTextHr text="From Keyboard to Keyboard: Embracing Creativity and Discipline in Coding" 
                        className="my-2"/>
                    </div>
                </div>
                <div className="grid grid-cols-4">  
                    <div className="col-span-2"/>
                    <div className="md:col-span-2 col-span-4 mt-4 sm:mb-0 mb-10 flex flex-row md:justify-start justify-center">
                        <MotionLink 
                        className="!ml-0"
                        download={true} 
                        newTab={true} 
                        link="/" 
                        linkText="Resume"> 
                            <Download className="sm:w-6 sm:h-6 w-4 h-4"/>
                        </MotionLink>
                    </div>
                </div>
                
            </Layout>
        </div>
    </>
  )
}
