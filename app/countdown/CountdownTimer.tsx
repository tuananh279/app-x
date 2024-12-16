'use client'
import React, { useState } from 'react'
import { useCountdown } from './useCountdown';

const CountdownTimer = () => {
    const [inputDate, setInputDate] = useState("");
    const { timeLeft, startCountdown } = useCountdown();

    const handleChangeInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('[debugger] e', e.target.value)
        setInputDate(e.target.value)
    }

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Countdown</h1>
            <input
                type="datetime-local"
                value={inputDate}
                onChange={handleChangeInputDate}
                className="border rounded px-4 py-2 mb-4"
            />
            <button
                onClick={() => startCountdown(inputDate)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Start Countdown
            </button>
            <p className="mt-4 text-lg">{timeLeft}</p>
        </div>
    );
}

export default CountdownTimer