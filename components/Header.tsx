"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Club, Language } from '../app/data/clubsData';
import {
    ChevronDown,
    Globe,
    Menu,
    X,
    PhoneCall,
    Search,
    ArrowLeft
} from 'lucide-react';

export interface HeaderProps {
    clubs?: Club[];
    onSelectClub?: (club: Club) => void;
    onSearchChange?: (query: string) => void;
    searchQuery?: string;
    language?: Language;
    onLanguageToggle?: () => void;
    selectedCategory?: string;
    onSelectCategory?: (category: string) => void;
    onHomeClick?: () => void;
    showBackButton?: boolean;
    onBack?: () => void;
}

export const CampusLogoBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ size = 'md', className = '' }) => {
    const dimensions = size === 'sm' ? 'w-8 h-8 p-0.5' : size === 'lg' ? 'w-14 h-14 p-1' : 'w-10 h-10 p-0.5';

    return (
        <div
            className={`${dimensions} bg-[#eef2f7] rounded-full flex items-center justify-center neu-flat-sm border border-white/80 shrink-0 transition-all ${className}`}
            title="Aadikavi Bhanubhakta Campus"
        >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-0 shadow-2xs overflow-hidden">
                <img
                    src='../logo1.png'
                    alt="Aadikavi Bhanubhakta Campus FSU Logo"
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

export const Header: React.FC<HeaderProps> = ({
    clubs = [],
    onSelectClub = (_club: Club) => { },
    onSearchChange = (_query: string) => { },
    searchQuery = '',
    language = 'en',
    onLanguageToggle = () => { },
    selectedCategory = 'All',
    onSelectCategory = (_category: string) => { },
    onHomeClick,
    showBackButton = false,
    onBack
}) => {
    const [isCommitteesOpen, setIsCommitteesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const scrollToContact = () => {
        const footerEl = document.querySelector('footer');
        if (footerEl) {
            footerEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSearchSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            setIsSearchFocused(false);
            const dashboardSection = document.getElementById('clubs-dashboard-section');
            if (dashboardSection) {
                dashboardSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Filtered search results for autocomplete dropdown
    const searchResults = searchQuery.trim()
        ? clubs.filter((c) => {
            const q = searchQuery.toLowerCase();
            return (
                c.name.toLowerCase().includes(q) ||
                (c.nepaliName && c.nepaliName.includes(q)) ||
                (c.category && c.category.toLowerCase().includes(q)) ||
                (c.facultyAdvisor && c.facultyAdvisor.toLowerCase().includes(q)) ||
                (c.president && c.president.toLowerCase().includes(q)) ||
                (c.description && c.description.toLowerCase().includes(q))
            );
        })
        : [];

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#eef2f7] sticky top-0 w-full z-50 border-b border-slate-200/80 shadow-xs"
        >
            {/* Main Header Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                {/* Left Side: Optional Back Button + Brand Logo & Name */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {(showBackButton || onBack) && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBack}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-all cursor-pointer shrink-0 -ml-1 sm:-ml-2"
                            title={language === 'en' ? 'Back to All Committees' : 'सबै समितिहरूमा फर्कनुहोस्'}
                            aria-label="Back"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform hover:-translate-x-0.5" />
                        </motion.button>
                    )}

                    {/* Brand Logo & Name */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.01 }}
                        onClick={(e) => {
                            e.preventDefault();
                            if (onHomeClick) {
                                onHomeClick();
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
                    >
                        <CampusLogoBadge size="md" />
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-1.5">
                                <span className="font-extrabold text-gray-900 text-lg sm:text-xl leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                                    CLUBS
                                </span>
                                <span className="hidden lg:inline-block text-xs font-bold text-slate-400">|</span>
                                <span className="hidden lg:inline-block font-bold text-gray-900 text-sm leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                                    Aadikavi Bhanubhakta Campus
                                </span>
                            </div>
                            <span className="text-[#800000] text-xs sm:text-sm font-bold leading-tight mt-0.5">
                                आदिकवि भानुभक्त क्याम्पस
                            </span>
                        </div>
                    </motion.a>
                </div>

                {/* Center Search Input Bar with Instant Results Dropdown */}
                <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-md mx-2 lg:mx-4 relative">
                    <form onSubmit={handleSearchSubmit} className="relative w-full">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                onSearchChange(e.target.value);
                                setIsSearchFocused(true);
                            }}
                            onFocus={() => setIsSearchFocused(true)}
                            placeholder={
                                language === 'en'
                                    ? 'Search committees, members, events...'
                                    : 'समितिहरू, सदस्यहरू, कार्यक्रमहरू खोज्नुहोस्...'
                            }
                            className="w-full bg-white border border-slate-200/90 rounded-full pl-10 pr-9 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    onSearchChange('');
                                    setIsSearchFocused(false);
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </form>

                    {/* Search Dropdown Overlay */}
                    <AnimatePresence>
                        {isSearchFocused && searchQuery.trim() && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                transition={{ duration: 0.18 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 z-50"
                            >
                                <div className="px-3 py-1.5 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                    <span>
                                        {language === 'en'
                                            ? `Matching Results (${searchResults.length})`
                                            : `नतिजाहरू (${searchResults.length})`}
                                    </span>
                                    <button
                                        onClick={() => setIsSearchFocused(false)}
                                        className="text-gray-400 hover:text-gray-600 text-[11px]"
                                    >
                                        Close
                                    </button>
                                </div>

                                {searchResults.length > 0 ? (
                                    <div className="max-h-80 overflow-y-auto space-y-1 mt-1 pr-1">
                                        {searchResults.map((club) => (
                                            <button
                                                key={club.id}
                                                onClick={() => {
                                                    onSelectClub(club);
                                                    setIsSearchFocused(false);
                                                }}
                                                className="w-full flex items-center gap-3 p-2 text-left rounded-xl hover:bg-blue-50/80 transition-colors cursor-pointer group"
                                            >
                                                <img
                                                    src={club.logo}
                                                    alt={club.name}
                                                    referrerPolicy="no-referrer"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0 group-hover:border-blue-500"
                                                />
                                                <div className="flex flex-col min-w-0 flex-1">
                                                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 truncate">
                                                        {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                                                    </span>
                                                    <span className="text-xs text-gray-500 truncate">
                                                        {club.category} • President: {club.president}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-sm text-gray-500">
                                        {language === 'en'
                                            ? `No committees found matching "${searchQuery}"`
                                            : `"${searchQuery}" सँग मिल्ने कुनै समिति भेटिएन`}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop Navigation Items */}
                <nav className="hidden md:flex items-center gap-2.5 sm:gap-3.5 lg:gap-6 shrink-0">
                    {/* Committees Dropdown Trigger */}
                    <div className="relative group">
                        <button
                            onClick={() => setIsCommitteesOpen(!isCommitteesOpen)}
                            onMouseEnter={() => setIsCommitteesOpen(true)}
                            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#061129] transition-all cursor-pointer py-2"
                        >
                            <span>{language === 'en' ? 'Committees' : 'समितिहरू'}</span>
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
                        </button>

                        {/* Committees Overlay Dropdown */}
                        <AnimatePresence>
                            {isCommitteesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    onMouseLeave={() => setIsCommitteesOpen(false)}
                                    className="absolute top-full right-0 mt-1 w-80 bg-white shadow-xl rounded-2xl border border-gray-100 p-2 z-50"
                                >
                                    <div className="p-2 border-b border-gray-100 mb-1 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                            {language === 'en' ? 'Select Student Committee' : 'विद्यार्थी समिति छान्नुहोस्'}
                                        </span>
                                        <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md font-medium">
                                            13 Clubs
                                        </span>
                                    </div>

                                    <div className="max-h-96 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                        {clubs.map((club) => (
                                            <button
                                                key={club.id}
                                                onClick={() => {
                                                    onSelectClub(club);
                                                    setIsCommitteesOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 p-2 text-left rounded-xl hover:bg-blue-50/80 transition-colors group/item cursor-pointer"
                                            >
                                                <img
                                                    src={club.logo}
                                                    alt={club.name}
                                                    referrerPolicy="no-referrer"
                                                    className="w-8 h-8 rounded-full object-cover border border-gray-200 group-hover/item:border-blue-500 shrink-0"
                                                />
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-sm font-medium text-gray-900 group-hover/item:text-blue-700 truncate">
                                                        {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                                                    </span>
                                                    <span className="text-[11px] text-gray-500 truncate">
                                                        {club.category}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Globe Language Switch Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onLanguageToggle}
                        className="p-2 sm:p-2.5 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/80 transition-colors rounded-full cursor-pointer flex items-center justify-center shadow-2xs"
                        title="Toggle Language"
                    >
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                    </motion.button>

                    {/* Contact Us Campus Blue Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={scrollToContact}
                        className="px-3.5 py-2 sm:px-6 sm:py-2.5 bg-[#0c72b8] hover:bg-[#0a5f9c] text-white font-semibold text-xs sm:text-sm rounded-full cursor-pointer transition-colors shadow-2xs whitespace-nowrap"
                    >
                        {language === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
                    </motion.button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-700 hover:text-[#061129] rounded-lg cursor-pointer"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-b border-gray-200 p-4 space-y-4 overflow-hidden"
                    >
                        {/* Mobile Search Bar */}
                        <div className="relative w-full">
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                placeholder={
                                    language === 'en' ? 'Search committees...' : 'समितिहरू खोज्नुहोस्...'
                                }
                                className="w-full bg-gray-100 border border-gray-200 rounded-lg pl-9 pr-8 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => onSearchChange('')}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 p-1"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>

                        <div className="space-y-1">
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 py-1">
                                Student Committees
                            </div>
                            <div className="max-h-60 overflow-y-auto space-y-1">
                                {(searchQuery.trim() ? searchResults : clubs).map((club) => (
                                    <button
                                        key={club.id}
                                        onClick={() => {
                                            onSelectClub(club);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-left text-sm font-medium text-gray-800"
                                    >
                                        <img
                                            src={club.logo}
                                            alt={club.name}
                                            referrerPolicy="no-referrer"
                                            className="w-7 h-7 rounded-full object-cover shrink-0"
                                        />
                                        <div className="flex flex-col min-w-0">
                                            <span className="truncate">{language === 'np' && club.nepaliName ? club.nepaliName : club.name}</span>
                                            <span className="text-[11px] text-gray-500 truncate">{club.category}</span>
                                        </div>
                                    </button>
                                ))}
                                {searchQuery.trim() && searchResults.length === 0 && (
                                    <div className="p-3 text-center text-xs text-gray-500">
                                        {language === 'en' ? 'No committees found' : 'कुनै समिति भेटिएन'}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                            <button
                                onClick={onLanguageToggle}
                                className="w-full py-2 bg-gray-100 text-gray-800 font-medium text-sm rounded-lg flex items-center justify-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                <span>{language === 'en' ? 'Language: English (Switch to नेपाली)' : 'भाषा: नेपाली (Switch to English)'}</span>
                            </button>
                            <button
                                onClick={() => {
                                    scrollToContact();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full py-2.5 bg-[#0c72b8] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2"
                            >
                                <PhoneCall className="w-4 h-4 text-amber-400" />
                                <span>Contact Us</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

