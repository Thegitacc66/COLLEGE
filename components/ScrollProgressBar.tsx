"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c72b8] via-[#38bdf8] to-[#800000] origin-left z-[100] shadow-[0_1px_8px_rgba(12,114,184,0.5)]"
        />
    );
};
