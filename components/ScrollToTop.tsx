"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(currentProgress);

            if (window.scrollY > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.25 }}
                    className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#000d27] text-white shadow-xl flex items-center justify-center cursor-pointer border border-blue-400/40 hover:border-amber-400 group"
                    aria-label="Scroll to top"
                    title="Scroll to Top"
                >
                    {/* Circular Progress Ring */}
                    <svg className="w-12 h-12 absolute -rotate-90 pointer-events-none" viewBox="0 0 44 44">
                        <circle
                            cx="22"
                            cy="22"
                            r={radius}
                            className="text-white/10"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            fill="transparent"
                        />
                        <circle
                            cx="22"
                            cy="22"
                            r={radius}
                            className="text-amber-400 transition-all duration-150"
                            strokeWidth="2.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                        />
                    </svg>

                    <ArrowUp className="w-5 h-5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
