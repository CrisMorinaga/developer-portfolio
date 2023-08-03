'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ColorRing } from  'react-loader-spinner'

export function SpinnerLoader() {

    const { resolvedTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null
    }

    return (
        <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}   
        wrapperClass="blocks-wrapper"
        colors=
        {resolvedTheme === 'dark' ? 
        ['#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5'] : 
        ['#1b1b1b', '#1b1b1b', '#1b1b1b', '#1b1b1b', '#1b1b1b']}
        />
    )
}