"use client"
import React, { useState, useEffect } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    });
    return (
        isLoading && (
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading-text">
                        <span>A</span>
                        <span>L</span>
                        <span>S</span>
                        <span>H</span>
                        <span>A</span>
                        <span>Y</span>
                        <span>A</span>
                    </div>
                </div>
            </div>
        )
    )
}