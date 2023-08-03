import NavBar from '@/components/NavBars/NavBar'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import BottomNavBar from '@/components/NavBars/BottomNavBar'
import Logo from '@/components/Logo'
import TransitionEffect from '@/components/TransitionEffect'

import './globals.css'
import type { Metadata } from 'next'

const montserrat = Montserrat({ 
        subsets: ['latin'],
        variable: '--font-mont' 
})

export const metadata: Metadata = {
    title: `Cristopher's Portfolio`,
    description: 'Created using Next js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>  
            <html lang="en" suppressHydrationWarning={true}>
            <body
            suppressHydrationWarning={true}
            className={`${montserrat.variable} 
            font-mont bg-light w-full min-h-screen dark:bg-dark`} >
                <Providers>
                    <TransitionEffect />
                    <Logo />
                    <NavBar />
                    {children}
                    <Footer />
                    <BottomNavBar />
                </Providers>
            </body>
            </html>
        </>
    )
}
