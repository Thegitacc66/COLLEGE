"use client";

import React from 'react';
// Added Variants to the import
import { motion, Variants } from 'motion/react';
import {
    Users,
    Calendar,
    UserCheck,
    Award,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    GraduationCap,
    Building2,
    FileText,
    Sparkles
} from 'lucide-react';

import { Language } from '../app/data/clubsData';
import { AnimatedCounter } from './AnimatedCounter';

export interface HeroSectionProps {
    onExploreClick?: () => void;
    onJoinClick?: () => void;
    language?: Language;
    totalClubsCount?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    onExploreClick = () => { },
    onJoinClick = () => { },
    language = 'en',
    totalClubsCount = 14
}) => {
    // Explicitly typed as Variants to fix the "index signature" error
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    // Explicitly typed as Variants to fix the "ease: number[]" error
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="relative w-full bg-[#eef2f7] text-[#1b1b1e] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 border-b border-slate-300/60 overflow-hidden">
            {/* Background Subtle Gradient Glows for Depth */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100/70 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none"
                />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Main Grid: Left Academic Directives & Right Campus Building Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                    {/* Left Column (7 cols): Academic Information & Directives */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col items-start text-left"
                    >

                        {/* Accreditation Badge */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full bg-white/90 sm:bg-[#eef2f7] border border-slate-200/90 text-slate-700 text-xs font-medium mb-4 shadow-2xs cursor-default backdrop-blur-sm"
                        >
                            <div className="w-5 h-5 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                                <img
                                    src="/logo.jpg"
                                    alt="Campus Seal"
                                    className="w-full h-full object-contain rounded-full"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/logo.svg';
                                    }}
                                />
                            </div>
                            <span className="text-[#800000] font-bold text-[11px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
                                {language === 'en' ? 'Official Portal' : 'आधिकारिक पोर्टल'}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-600 font-medium text-[11px] sm:text-xs truncate sm:whitespace-normal">
                                {language === 'en'
                                    ? 'QAA Certified Public Campus'
                                    : 'QAA प्रमाणित पब्लिक क्याम्पस'}
                            </span>
                        </motion.div>

                        {/* Institution Eyebrow */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0c72b8] mb-2"
                        >
                            <GraduationCap className="w-4 h-4 text-[#800000] inline shrink-0" />
                            <span>
                                {language === 'en'
                                    ? 'Aadikavi Bhanubhakta Campus'
                                    : 'आदिकवि भानुभक्त क्याम्पस'}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.18] tracking-tight font-poppins mb-3.5 sm:mb-4"
                        >
                            {language === 'en' ? (
                                <>
                                    Student Committees & <span className="text-[#0c72b8]">Leadership Hub</span>
                                </>
                            ) : (
                                <>
                                    विद्यार्थी समिति तथा <span className="text-[#0c72b8]">नेतृत्व मञ्च</span>
                                </>
                            )}
                        </motion.h1>

                        {/* Academic Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xs sm:text-base lg:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed font-normal"
                        >
                            {language === 'en'
                                ? 'Fostering academic excellence, student governance, leadership development, and community engagement under the official charter of Aadikavi Bhanubhakta Campus.'
                                : 'आदिकवि भानुभक्त क्याम्पसको आधिकारिक विधान अन्तर्गत शैक्षिक उत्कृष्टता, विद्यार्थी सुशासन, नेतृत्व विकास र सामुदायिक सहभागितालाई प्रवर्द्धन गर्दै।'}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-6 w-full sm:w-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={onExploreClick}
                                className="group px-6 py-3 bg-[#0c72b8] hover:bg-[#0a629e] text-white font-bold text-sm sm:text-base rounded-xl transition-colors shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5"
                            >
                                <span>{language === 'en' ? 'Explore Committees' : 'समितिहरू हेर्नुहोस्'}</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    const el = document.getElementById('events-calendar-section');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-xl transition-colors shadow-2xs hover:shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <FileText className="w-4 h-4 text-[#800000]" />
                                <span>{language === 'en' ? 'Academic Calendar' : 'शैक्षिक पात्रो'}</span>
                            </motion.button>
                        </motion.div>

                        {/* Trust Markers */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 pt-4 border-t border-slate-300/60 text-xs sm:text-sm text-slate-600 font-medium w-full"
                        >
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{language === 'en' ? 'Official Campus Charter' : 'आधिकारिक क्याम्पस मान्यता'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-[#800000] shrink-0" />
                                <span>{language === 'en' ? 'TU Affiliated' : 'त्रिभुवन विश्वविद्यालय सम्बद्ध'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#0c72b8] shrink-0" />
                                <span>{language === 'en' ? 'Estd. 2044 BS (1987 AD)' : 'स्था. २०४४ (१९८७ एडी)'}</span>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right Column (5 cols): Framed Campus Photo Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative mt-2 lg:mt-0"
                    >
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            {/* Main Photo Frame Card */}
                            <div className="bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-200/90 relative overflow-hidden group">
                                <div className="relative h-72 sm:h-80 lg:h-[400px] w-full rounded-xl overflow-hidden bg-slate-900">
                                    <img
                                        src='../campusIMG.png'
                                        alt="Aadikavi Bhanubhakta Campus Building"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                                    {/* Top Location Badge */}
                                    <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                                        <Building2 className="w-4 h-4 text-amber-400" />
                                        <span>Damauli, Tanahun, Nepal</span>
                                    </div>

                                    {/* Bottom Image Caption */}
                                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                                        <p className="font-bold text-base leading-snug drop-shadow-sm">Aadikavi Bhanubhakta Campus</p>
                                        <p className="text-xs text-slate-200 font-medium drop-shadow-sm">QAA Accredited Public Campus</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge Accent */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-3 -right-2 sm:-right-3 bg-white/95 backdrop-blur-sm border border-slate-200/90 p-2 sm:p-2.5 rounded-xl shadow-xl flex items-center gap-2 hidden sm:flex z-20"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100">
                                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Community Owned</p>
                                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight">Serving Students Since 1987</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>

                {/* Integrated Statistics Bar */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12
                            }
                        }
                    }}
                    className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5"
                >

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">
                                <AnimatedCounter value={totalClubsCount || 14} />
                            </h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Active Committees' : 'सक्रिय समितिहरू'}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">
                                <AnimatedCounter value={50} />
                            </h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Annual Initiatives' : 'वार्षिक कार्यक्रमहरू'}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">
                                <AnimatedCounter value={2500} />
                            </h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Student Scholars' : 'सक्रिय विद्यार्थीहरू'}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">
                                <AnimatedCounter value={20} />
                            </h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'National Awards' : 'राष्ट्रिय सम्मानहरू'}
                            </p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};