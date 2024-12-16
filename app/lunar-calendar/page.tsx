'use client'
import React, { useState } from 'react'

const LunarCalendar = () => {
    const [date, setDate] = useState("");
    const [lunarInfo, setLunarInfo] = useState("");

    const fetchLunarInfo = async () => {
        try {
            const response = await fetch(`/api/lunar-calendar?date=${date}`);
            const data = await response.json();
            setLunarInfo(data.lunarInfo);
        } catch (error) {
            console.error("Error fetching lunar info:", error);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Lunar Calendar</h1>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border rounded px-4 py-2 mb-4"
            />
            <button
                onClick={fetchLunarInfo}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Get Lunar Info
            </button>
            <p className="mt-4">{lunarInfo}</p>
        </div>
    );
}

export default LunarCalendar