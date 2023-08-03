'use client'
import { useEffect, useState } from "react";
import DropdownMenuComponent from "@/components/About/DropdownMenu";
import { motion } from "framer-motion";
  
type Prop = {
    handleChange: (userChoice:string) => void
}

export default function ClockComponent({handleChange}: Prop) {
    const date = new Date();
    const test = date.getHours()
    const hoursIn12HourFormat = test % 12 || 12;
    const hour = `${hoursIn12HourFormat < 10 ? '0' : ''}${hoursIn12HourFormat}`;
    const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    const seconds = `${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}`;

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const currentDate = `${hour}:${minutes}:${seconds} ${date.getHours() < 12 ? 'AM' : 'PM'} `;
        const timer = setInterval(() => {
            setCurrentTime(currentDate);
        }, 1000);

        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentTime, hour, minutes, seconds])

    const setUserChoice = (userChoice:string) => {
        handleChange(userChoice)
    }

    return(
        <>
            <div 
            className="relative">
                <DropdownMenuComponent setUserChoice={setUserChoice}>
                    <motion.div 
                    whileHover={{scale:1.2}}
                    className="flex cursor-pointer absolute right-4 top-2">
                        <p className="border rounded-lg border-light p-1 bg-primary text-light select-none">{currentTime}</p>
                    </motion.div>
                </DropdownMenuComponent>
            </div>
        </>        
    )
}