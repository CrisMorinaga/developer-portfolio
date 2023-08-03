"use client"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuLabel,
DropdownMenuRadioGroup,
DropdownMenuRadioItem,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

type Prop = {
    children: any,
    setUserChoice: (position:string) => void
}

export default function DropdownMenuComponent({children, setUserChoice}:Prop) {
    const [position, setPosition] = useState("Local Time")

    useEffect(() => {
        setUserChoice(position)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    return (
        <div className="container mt-4">
            <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-primary">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="Local Time">Current Time</DropdownMenuRadioItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-white">Try changing the time</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioItem value="Morning">{`Morning (5 AM to 11 AM)`}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Midday">{`Midday (12 PM to 4 PM)`}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Afternoon">{`Afternoon (5 PM to 6 PM)`}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Twilight">{`Twilight (7 PM to 8 PM)`}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Night">{`Night (9 PM to 4 AM)`}</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
