"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    duration = 1.5,
    suffix = '+',
    prefix = '',
    className = ''
}) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: false, margin: '-20px' });

    useEffect(() => {
        let startTimestamp: number | null = null;
        let animationFrameId: number;

        if (isInView) {
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setDisplayValue(Math.floor(easeOut * value));

                if (progress < 1) {
                    animationFrameId = window.requestAnimationFrame(step);
                } else {
                    setDisplayValue(value);
                }
            };

            animationFrameId = window.requestAnimationFrame(step);
        } else {
            setDisplayValue(0);
        }

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toLocaleString()}
            {suffix}
        </span>
    );
};
