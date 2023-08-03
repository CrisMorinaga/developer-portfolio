import morning from "@/public/AboutBanner/morning.webp"
import midday from "@/public/AboutBanner/midday.webp"
import afternoon from "@/public/AboutBanner/afternoon.webp"
import twilight from "@/public/AboutBanner/twilight.webp"
import night from "@/public/AboutBanner/night.webp"
import Image from "next/image"
import {motion} from 'framer-motion'

type Prop = {
    userDemo: string
}

export default function ClockBanner({userDemo}: Prop){

    const date = new Date();
    const hour = date.getHours();
    let source:any = '';
    let userChoice:any = '';

    const MotionImage = motion(Image)

    if (userDemo === 'Night') {
        userChoice = night
    } else if (userDemo === 'Morning') {
        userChoice = morning
    } else if (userDemo === 'Midday') {
        userChoice = midday
    } else if (userDemo === 'Afternoon') {
        userChoice = afternoon
    } else if (userDemo === 'Twilight') {
        userChoice = twilight
    } else if (userDemo === 'Local Time') {
        userChoice = ''
    }

    if (hour < 5) {
    source = night;
    } else if (hour < 12) {
    source = morning;
    } else if (hour < 17) {
    source = midday;
    } else if (hour < 19) {
    source = afternoon;
    } else if (hour < 21) {
    source = twilight;
    }

    
    return(
        <>  
            {userChoice !== '' ? (
                <MotionImage 
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1}}}
                priority src={userChoice} alt="test" className="rounded-xl"/>
            ) : (
                <MotionImage 
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1}}}
                priority src={source} alt="test" className="rounded-xl"/>
            )}
        </>
    )
}