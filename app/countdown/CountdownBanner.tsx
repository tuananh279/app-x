'use client'
import React, { useEffect } from 'react'
import { useCountdown } from './useCountdown';

const CountdownBanner = () => {
    const url = 'https://lh4.googleusercontent.com/RjAhJUWIZc8YvYV_swNxE868xCTEKicA_B-vX5k603fXYCKh-RaB2E-mYntXhOGAIWAWt5vyRTCjJaBdAYr-9vvs1wUVQyF0u2teexc-IZMvDRnIKKp_9gHyD28Q4TrMD3E8lx5O'
    const targetDate = '2025-01-01T09:29'
    const targetName = 'Tet is coming...'

    const { timeLeft, startCountdown } = useCountdown();

    useEffect(() => {
        startCountdown(targetDate)       
    }, [startCountdown])

    return (
        <div
            style={{ backgroundImage: `url(${url})` }}
            className="bg-cover bg-center h-64 w-full flex items-center justify-center">
            <div className='flex flex-col bg-background-highlight rounded-xl px-5 py-6 w-1/2 justify-center items-center'>
                <h1 className='text-text-main text-5xl font-semibold'>{targetName}</h1>
                <h2 className='text-text-main text-3xl mt-5'>{timeLeft}</h2>
            </div>
        </div>
    );
}

export default CountdownBanner