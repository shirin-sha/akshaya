"use client"
import React, { useState, useEffect } from 'react';

const LOADING_TEXT = 'ALSHAYA ENTERPRISES';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) {
        return null;
    }

    return (
        <div className="preloader">
            <div className="loading-container">
                <div className="loading-text">
                    {LOADING_TEXT.split('').map((letter, index) => (
                        <span
                            key={index}
                            className={letter === ' ' ? 'loading-text-space' : undefined}
                            style={{ animationDelay: `${(index + 1) * 0.05}s` }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
