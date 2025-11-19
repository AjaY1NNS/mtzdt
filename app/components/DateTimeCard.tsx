const TIME_ZONES = [
    { label: 'UTC (Universal)', timeZone: 'UTC' },
    { label: 'United Kingdom (London)', timeZone: 'Europe/London' },
    { label: 'USA (New York)', timeZone: 'America/New_York' },
    { label: 'USA (Chicago)', timeZone: 'America/Chicago' },
    { label: 'USA (Los Angeles)', timeZone: 'America/Los_Angeles' },
    { label: 'Canada (Toronto)', timeZone: 'America/Toronto' },
    { label: 'Brazil (Sao Paulo)', timeZone: 'America/Sao_Paulo' },
    { label: 'Germany (Berlin)', timeZone: 'Europe/Berlin' },
    { label: 'France (Paris)', timeZone: 'Europe/Paris' },
    { label: 'Russia (Moscow)', timeZone: 'Europe/Moscow' },
    { label: 'South Africa (Johannesburg)', timeZone: 'Africa/Johannesburg' },
    { label: 'Egypt (Cairo)', timeZone: 'Africa/Cairo' },
    { label: 'China (Shanghai)', timeZone: 'Asia/Shanghai' },
    { label: 'India (Mumbai)', timeZone: 'Asia/Kolkata' }, // IST
    { label: 'Japan (Tokyo)', timeZone: 'Asia/Tokyo' },
    { label: 'Singapore (Singapore)', timeZone: 'Asia/Singapore' },
    { label: 'Australia (Sydney)', timeZone: 'Australia/Sydney' },
    { label: 'New Zealand (Auckland)', timeZone: 'Pacific/Auckland' },
]

import { useState } from 'react';
import DigitalClock from '../components/DigitalClock';
import ToggleButton from '../components/ToggleButton';

export default function DateTimeCard() {
    const [hour12Flag, setHour12Flag] = useState(false) // Placeholder for future state management  
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Current Date & Time In Different Time Zone</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Get your time from others time zone</p>
                    <hr className="my-10 border-gray-200" />
                </div>
                <div>
                    <div>
                        <p className='text-lg/8 text-gray-600'>Time In 24 Hours Format </p> <ToggleButton value={hour12Flag} onToggle={(toggle: boolean) => { setHour12Flag(toggle) }} />
                    </div>
                    <hr className="my-10 border-gray-200" />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:grid-cols-3">
                    {TIME_ZONES.map(({ label, timeZone }) => (
                        <DigitalClock key={timeZone} timeZone={timeZone} label={label} hour12Flag={hour12Flag} />
                    ))}
                </div>
            </div>
        </div>
    )
}
