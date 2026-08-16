"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import { Club, Language } from '../app/data/clubsData';

export const DEFAULT_CLUB_SAMPLE: Club = {
    id: 'abit-club',
    name: 'ABIT Club',
    nepaliName: 'एबीआईटी क्लब',
    category: 'Technology & IT',
    logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop',
    accentColor: '#0c72b8',
    description: 'Fostering tech innovation and programming skills.',
    shortDescription: 'Fostering tech innovation and programming skills.',
    establishedYear: 2018,
    memberCount: 120,
    facultyAdvisor: 'Er. Suresh Pokharel',
    president: 'Aayush Adhikari',
    meetingSchedule: 'Fridays at 4 PM',
    roomLocation: 'IT Lab 2',
    contactEmail: 'abit@abcampus.edu.np',
    featured: true,
    leadership: [],
    achievements: [],
    galleryImages: []
};

interface ClubCardProps {
    club?: Club;
    onSelect?: (club: Club) => void;
    onJoin?: (clubId: string) => void;
    language?: Language;
}

export const ClubCard: React.FC<ClubCardProps> = ({
    club = DEFAULT_CLUB_SAMPLE,
    onSelect = (_club: Club) => { },
    language = 'en'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.985 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            onClick={() => onSelect(club)}
            className="group neu-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer"
        >
            <div>
                {/* Category Badge & Optional Featured Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-[#0c72b8] neu-pressed px-3 py-1 rounded-full uppercase tracking-wider truncate max-w-[70%]">
                        {club.category}
                    </span>
                    {club.featured && (
                        <span className="neu-pressed text-[#0c72b8] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
                            <Sparkles className="w-3 h-3 text-[#0c72b8]" />
                            <span>{language === 'en' ? 'Featured' : 'विशेष'}</span>
                        </span>
                    )}
                </div>

                {/* Logo Avatar & Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-14 h-14 rounded-full neu-pressed flex items-center justify-center overflow-hidden p-1 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img
                            src={club.logo}
                            alt={club.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0c72b8] transition-colors leading-snug truncate">
                            {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                        </h3>
                        {club.nepaliName && language === 'en' && (
                            <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                                {club.nepaliName}
                            </p>
                        )}
                    </div>
                </div>

                {/* Short Description - Crisp 2 lines */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2 mb-4">
                    {club.shortDescription || club.description}
                </p>
            </div>

            <div>
                {/* Footer Meta Row: Members & Leader */}
                <div className="pt-3 border-t border-slate-300/40 mb-4 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Users className="w-3.5 h-3.5 text-[#0c72b8]" />
                        <span>{club.memberCount}+ {language === 'en' ? 'Members' : 'सदस्य'}</span>
                    </div>

                    <div className="text-right truncate max-w-[50%]">
                        <span className="text-slate-500">
                            {language === 'en' ? 'Lead: ' : 'प्रमुख: '}
                        </span>
                        <span className="font-semibold text-slate-800 truncate">
                            {club.president}
                        </span>
                    </div>
                </div>

                {/* Primary Action Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(club);
                    }}
                    className="w-full py-2.5 px-4 neu-button-primary text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                    <span>{language === 'en' ? 'View Committee' : 'समिति हेर्नुहोस्'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};
