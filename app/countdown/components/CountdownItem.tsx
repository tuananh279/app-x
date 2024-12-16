'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect } from 'react'
import { useCountdown } from '../useCountdown'

const CountdownItem = () => {

    const targetDate = '2024-12-24T09:29'
    const targetName = 'Noel is coming...'

    const { timeLeft, startCountdown } = useCountdown();

    useEffect(() => {
        startCountdown(targetDate)
    }, [startCountdown])

    return (
        <Card className='flex-1'>
            <CardHeader>
                <CardTitle>{targetName}</CardTitle>
                <CardDescription>Time to do st</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-text-main'>{timeLeft}</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default CountdownItem