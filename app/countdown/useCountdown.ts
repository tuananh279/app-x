'use client'
import { useEffect, useState } from "react";

export function useCountdown() {
    const [targetDate, setTargetDate] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState("");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!targetDate || !isActive) {
            setTimeLeft("");
            return;
        }

        const interval = setInterval(() => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const diff = target - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft("Event has passed!");
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, isActive]);

    const startCountdown = (date: string) => {
        setTargetDate(date);
        setIsActive(true);
    };

    return { timeLeft, startCountdown };
}
