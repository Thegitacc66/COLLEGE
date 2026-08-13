"use client";

import React from 'react';
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
    return (
        <section className="relative w-full bg-[#eef2f7] text-[#1b1b1e] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 border-b border-slate-300/60">
            {/* Background Subtle Gradient Glows for Depth */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Main Grid: Left Academic Directives & Right Campus Building Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                    {/* Left Column (7 cols): Academic Information & Directives */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Accreditation Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium mb-4 shadow-xs">
                            <div className="w-5 h-5 rounded-full bg-slate-100 p-0.5 flex items-center justify-center shrink-0 border border-slate-200">
                                <img
                                    src="/logo2.jpg"
                                    alt="Campus Seal"
                                    className="w-full h-full object-contain rounded-full"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/logo2.jpg';
                                    }}
                                />
                            </div>
                            <span className="text-[#800000] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                                {language === 'en' ? 'Official Portal' : 'आधिकारिक पोर्टल'}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-600 font-medium text-xs sm:text-sm">
                                {language === 'en'
                                    ? 'QAA Certified Public Campus • Damauli, Tanahun'
                                    : 'QAA प्रमाणित पब्लिक क्याम्पस • दमौली, तनहुँ'}
                            </span>
                        </div>

                        {/* Institution Eyebrow */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0c72b8] mb-2">
                            <GraduationCap className="w-4 h-4 text-[#800000] inline shrink-0" />
                            <span>
                                {language === 'en'
                                    ? 'Aadikavi Bhanubhakta Campus'
                                    : 'आदिकवि भानुभक्त क्याम्पस'}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.16] tracking-tight font-poppins mb-4">
                            {language === 'en' ? (
                                <>
                                    Student Committees & <span className="text-[#0c72b8]">Leadership Hub</span>
                                </>
                            ) : (
                                <>
                                    विद्यार्थी समिति तथा <span className="text-[#0c72b8]">नेतृत्व मञ्च</span>
                                </>
                            )}
                        </h1>

                        {/* Academic Subtitle */}
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed font-normal">
                            {language === 'en'
                                ? 'Fostering academic excellence, student governance, leadership development, and community engagement under the official charter of Aadikavi Bhanubhakta Campus.'
                                : 'आदिकवि भानुभक्त क्याम्पसको आधिकारिक विधान अन्तर्गत शैक्षिक उत्कृष्टता, विद्यार्थी सुशासन, नेतृत्व विकास र सामुदायिक सहभागितालाई प्रवर्द्धन गर्दै।'}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3.5 mb-6">
                            <button
                                onClick={onExploreClick}
                                className="group px-6 py-3 bg-[#0c72b8] hover:bg-[#0a629e] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5"
                            >
                                <span>{language === 'en' ? 'Explore Committees' : 'समितिहरू हेर्नुहोस्'}</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <a
                                href="#events-calendar-section"
                                className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4 text-[#800000]" />
                                <span>{language === 'en' ? 'Academic Calendar' : 'शैक्षिक पात्रो'}</span>
                            </a>
                        </div>

                        {/* Trust Markers */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-slate-300/60 text-xs sm:text-sm text-slate-600 font-medium w-full">
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
                        </div>

                    </div>

                    {/* Right Column (5 cols): Framed Campus Photo Showcase */}
                    <div className="lg:col-span-5 relative mt-2 lg:mt-0">
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

                            {/* Floating Badge Accent - Compact and shifted to the right side */}
                            <div className="absolute -bottom-3 -right-2 sm:-right-3 bg-white border border-slate-200/90 p-2 sm:p-2.5 rounded-lg shadow-lg flex items-center gap-2 hidden sm:flex z-20">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100">
                                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Community Owned</p>
                                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight">Serving Students Since 1987</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Integrated Statistics Bar - Grid of 4 Clean Neumorphic Cards */}
                <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">

                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all duration-200 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">{totalClubsCount || 14}+</h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Active Committees' : 'सक्रिय समितिहरू'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all duration-200 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">50+</h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Annual Initiatives' : 'वार्षिक कार्यक्रमहरू'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all duration-200 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">2500+</h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'Student Scholars' : 'सक्रिय विद्यार्थीहरू'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all duration-200 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all duration-200">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">20+</h3>
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                {language === 'en' ? 'National Awards' : 'राष्ट्रिय सम्मानहरू'}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

