"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

import { Language } from '../app/data/clubsData';

export const CampusLogoBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ size = 'md', className = '' }) => {
    const dimensions = size === 'sm' ? 'w-8 h-8 p-0.5' : size === 'lg' ? 'w-14 h-14 p-1' : 'w-10 h-10 p-0.5';

    return (
        <div className={`${dimensions} bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-sm shrink-0 ${className}`}>
            <div className="w-full h-full rounded-full bg-white p-0 flex items-center justify-center overflow-hidden">
                <img
                    src='../logo1.png'
                    alt="Aadikavi Bhanubhakta Campus Logo"
                    className="w-full h-full object-contain rounded-full"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/logo.svg';
                    }}
                />
            </div>
        </div>
    );
};

export interface FooterProps {
    language?: Language;
    onNavigateToCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
    language = 'en',
    onNavigateToCategory = () => { }
}) => {
    const scrollToCommittees = () => {
        const el = document.getElementById('clubs-dashboard-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <footer className="bg-[#0c72b8] pt-16 text-white pb-8 shadow-[0_-10px_25px_rgba(12,114,184,0.25)] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 items-start"
            >
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <CampusLogoBadge size="md" />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">Aadikavi Campus</h2>
                            <p className="text-[11px] font-semibold tracking-wider text-blue-100">QAA CERTIFIED</p>
                        </div>
                    </div>
                    <p className="text-sm text-blue-100 max-w-xs leading-relaxed font-normal">
                        {language === 'en'
                            ? 'Empowering students through unity, creativity, and excellence for 37+ years.'
                            : '३७+ वर्षदेखि एकता, सिर्जनशीलता र उत्कृष्टता मार्फत विद्यार्थीहरूलाई सशक्त बनाउँदै।'}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://abcampus.edu.np"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),2px_2px_6px_rgba(0,0,0,0.2)] flex items-center justify-center text-blue-100 hover:text-white transition-all duration-200"
                            aria-label="Website"
                        >
                            <Globe className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:abcampus@gmail.com"
                            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),2px_2px_6px_rgba(0,0,0,0.2)] flex items-center justify-center text-blue-100 hover:text-white transition-all duration-200"
                            aria-label="Email"
                        >
                            <Mail className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'en' ? 'Quick Links' : 'त्वरित लिङ्कहरू'}
                    </h3>
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-sm text-blue-100 hover:text-white text-left transition-colors cursor-pointer"
                    >
                        {language === 'en' ? 'About Campus' : 'क्याम्पसको बारेमा'}
                    </button>
                    <button
                        onClick={scrollToCommittees}
                        className="text-sm text-blue-100 hover:text-white text-left transition-colors cursor-pointer"
                    >
                        {language === 'en' ? 'Committees Directory' : 'समिति डाइरेक्टरी'}
                    </button>
                    <button
                        onClick={() => {
                            const el = document.getElementById('events-calendar-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm text-blue-100 hover:text-white text-left transition-colors cursor-pointer"
                    >
                        {language === 'en' ? 'Upcoming Events' : 'आगामी कार्यक्रमहरू'}
                    </button>
                    <button
                        onClick={scrollToCommittees}
                        className="text-sm text-blue-100 hover:text-white text-left transition-colors cursor-pointer"
                    >
                        {language === 'en' ? 'Explore Student Committees' : 'विद्यार्थी समितिहरू हेर्नुहोस्'}
                    </button>
                </div>

                {/* Contact Us Column */}
                <div className="flex flex-col gap-3.5">
                    <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
                    </h3>
                    <p className="text-sm text-blue-100 flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-white shrink-0" />
                        <span>Bigyanchaur, Tanahun, Nepal</span>
                    </p>
                    <p className="text-sm text-blue-100 flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-white shrink-0" />
                        <span>065-590096</span>
                    </p>
                    <p className="text-sm text-blue-100 flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-white shrink-0" />
                        <span>abcampus@gmail.com</span>
                    </p>
                </div>

                {/* Follow Us Column */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'en' ? 'Follow Us' : 'हामीलाई पछ्याउनुहोस्'}
                    </h3>
                    <div className="flex items-center gap-2.5 mt-1">
                        {/* Facebook */}
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),3px_3px_8px_rgba(0,0,0,0.25)] transition-all duration-200"
                            aria-label="Facebook"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </motion.a>

                        {/* X / Twitter */}
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),3px_3px_8px_rgba(0,0,0,0.25)] transition-all duration-200"
                            aria-label="X Twitter"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),3px_3px_8px_rgba(0,0,0,0.25)] transition-all duration-200"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                            </svg>
                        </motion.a>

                        {/* YouTube */}
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2),3px_3px_8px_rgba(0,0,0,0.25)] transition-all duration-200"
                            aria-label="YouTube"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-400/30 pt-6 text-xs sm:text-sm text-blue-100">
                <p>© 2024 Aadikavi Bhanubhakta Campus. All rights reserved.</p>
            </div>
        </footer>
    );
};

