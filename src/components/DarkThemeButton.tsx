'use client'
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
    className?: string;
    strokeBlack?: boolean
}

export default function DarkThemeButton({className='', strokeBlack}: Props) {

    const { resolvedTheme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null
    }

    return (
        <button
        aria-label="DarkThemeSwitcher"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`ml-2 flex items-center justify-center rounded-full ${className}`}
        >
            {
                resolvedTheme === 'dark' ? 
                <Sun className={strokeBlack? 'stroke-dark' : 'stroke-light'} /> : <Moon className=""/>
            }
        </button>
    )
}