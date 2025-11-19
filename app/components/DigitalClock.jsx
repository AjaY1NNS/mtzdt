'use client';

import React, { useState, useEffect } from 'react';

const DigitalClock = ({ timeZone, label, hour12Flag }) => {
    const [time, setTime] = useState(new Date());
    console.log("Hour12 Flag:", new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 10);

        return () => clearInterval(timerId);
    }, []);

    // Format the time
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: hour12Flag,
        timeZone: timeZone,
    });

    // Format the date
    const formattedDate = time.toLocaleDateString('en-US', {
        weekday: 'short', // e.g., "Wed"
        year: 'numeric',
        month: 'short', // e.g., "Nov"
        day: 'numeric',
        timeZone: timeZone,
    });

    // Manually get milliseconds
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0');

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white font-mono flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-1">{label}</span>
            <span className="text-md mb-2">{formattedDate}</span>
            <div className="flex items-baseline">
                <span className="text-4xl">{formattedTime}</span>
                <span className="text-xl text-blue-400 ml-2">.{milliseconds}</span>
            </div>
        </div>
    );
};

export default DigitalClock;
