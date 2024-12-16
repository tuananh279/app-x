'use client'
import React, { useState } from 'react'

// const API_KEY = 'e312a5c02439c296c4bb6651eec6fe86'

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(
                // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e312a5c02439c296c4bb6651eec6fe86`
            );
            const data = await response.json();
            console.log('[debugger] data: ', data)
            setWeather(data);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Weather</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="border rounded px-4 py-2 mb-4"
            />
            <button
                onClick={fetchWeather}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Get Weather
            </button>
            {weather && (
                <div className="mt-4">
                    {/* <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p> */}
                </div>
            )}
        </div>
    )
}

export default Weather