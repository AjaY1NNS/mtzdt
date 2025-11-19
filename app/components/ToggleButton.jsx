'use client';

import React, { useState } from 'react';

const ToggleButton = ({ value, onToggle }) => {
    const [isEnabled, setIsEnabled] = useState(value || false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onToggle(!isEnabled);
        // You can add an optional callback function here to handle the state change in the parent component
    };

    return (
        <div className="flex items-center">
            {/* Hidden Checkbox Input */}
            <input
                type="checkbox"
                id="toggle"
                className="sr-only" // sr-only hides the actual checkbox visually but keeps it accessible
                checked={isEnabled}
                onChange={toggleSwitch}
            />

            {/* The Visual Switch (Styled Label) */}
            <label
                htmlFor="toggle"
                className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-200 ease-in-out ${isEnabled ? 'bg-blue-600' : 'bg-gray-400'
                    }`}
            >
                {/* The Toggle 'Handle' (Styled Span) */}
                <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${isEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </label>

            {/* Optional Label Text */}
            <span className="ml-3 text-gray-700 text-sm">
                {isEnabled ? 'Enabled' : 'Disabled'}
            </span>
        </div>
    );
};

export default ToggleButton;
