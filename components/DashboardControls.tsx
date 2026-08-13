"use client";

import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid, List, Layers, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { ViewMode, Language } from '../app/data/clubsData';

export const DEFAULT_CATEGORIES = [
    'All',
    'Academic & Faculty',
    'IT & Technology',
    'Business & Innovation',
    'Literature & Media',
    'Humanitarian & Service',
    'Sports & Athletics',
    'Culture & Arts',
    'Environment & Safety',
    'Alumni & Welfare'
];

interface DashboardControlsProps {
    categories?: string[];
    selectedCategory?: string;
    onSelectCategory?: (category: string) => void;
    viewMode?: ViewMode;
    onViewModeChange?: (mode: ViewMode) => void;
    sortBy?: string;
    onSortChange?: (sort: string) => void;
    filteredCount?: number;
    totalCount?: number;
    searchQuery?: string;
    onClearSearch?: () => void;
    language?: Language;
}

const SORT_OPTIONS = [
    { id: 'featured', labelEn: 'Featured First', labelNp: 'विशेष पहिले' },
    { id: 'members-desc', labelEn: 'Most Members', labelNp: 'धेरै सदस्य भएका' },
    { id: 'name-asc', labelEn: 'Name (A-Z)', labelNp: 'नाम (A-Z)' },
    { id: 'established', labelEn: 'Established Year', labelNp: 'स्थापना वर्ष' },
];

export const DashboardControls: React.FC<DashboardControlsProps> = ({
    categories = DEFAULT_CATEGORIES,
    selectedCategory = 'All',
    onSelectCategory = (_category: string) => { },
    viewMode = 'grid',
    onViewModeChange = (_mode: ViewMode) => { },
    sortBy = 'featured',
    onSortChange = (_sort: string) => { },
    filteredCount = 14,
    totalCount = 14,
    searchQuery = '',
    onClearSearch = () => { },
    language = 'en'
}) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentOption = SORT_OPTIONS.find(opt => opt.id === sortBy) || SORT_OPTIONS[0];

    return (
        <div className="neu-flat rounded-2xl p-5 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-300/40">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-[#000d27] font-poppins">
                            {language === 'en' ? 'Our 14 Student Committees' : 'हाम्रा १४ विद्यार्थी समितिहरू'}
                        </h2>
                        <span className="neu-pressed px-3 py-1 rounded-full text-blue-800 text-xs font-bold">
                            {filteredCount} / {totalCount} {language === 'en' ? 'Clubs' : 'क्लबहरू'}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        {language === 'en'
                            ? 'Discover and join official campus clubs matching your faculty, interests, and leadership goals.'
                            : 'तपाईंको सङ्काय, रुचि र नेतृत्व लक्ष्य अनुसारका आधिकारिक क्याम्पस क्लबहरू खोज्नुहोस् र सामेल हुनुहोस्।'}
                    </p>
                </div>

                {/* View Mode & Sort Controls */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Custom Stylized Sort By Dropdown */}
                    <div className="relative" ref={sortDropdownRef}>
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 neu-pressed px-3.5 py-2 rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors"
                            aria-expanded={isSortOpen}
                            aria-haspopup="listbox"
                        >
                            <SlidersHorizontal className="w-4 h-4 text-[#0c72b8] shrink-0" />
                            <span className="font-semibold text-slate-500 hidden sm:inline">
                                {language === 'en' ? 'Sort:' : 'क्रम:'}
                            </span>
                            <span className="font-bold text-slate-900">
                                {language === 'en' ? currentOption.labelEn : currentOption.labelNp}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isSortOpen ? 'rotate-180 text-[#0c72b8]' : ''}`} />
                        </button>

                        {/* Dropdown Popover */}
                        {isSortOpen && (
                            <div
                                className="absolute right-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-1.5 z-40 animate-in fade-in zoom-in-95 duration-150"
                                role="listbox"
                            >
                                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                                    {language === 'en' ? 'Sort Committees By' : 'क्रमबद्ध गर्नुहोस्'}
                                </div>
                                {SORT_OPTIONS.map((option) => {
                                    const isSelected = option.id === sortBy;
                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => {
                                                onSortChange(option.id);
                                                setIsSortOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${isSelected
                                                    ? 'bg-[#0c72b8]/10 text-[#0c72b8] font-bold'
                                                    : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                                                }`}
                                            role="option"
                                            aria-selected={isSelected}
                                        >
                                            <span>{language === 'en' ? option.labelEn : option.labelNp}</span>
                                            {isSelected && <Check className="w-4 h-4 text-[#0c72b8] shrink-0" />}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* View Mode Toggle Buttons */}
                    <div className="flex items-center neu-pressed p-1 rounded-xl">
                        <button
                            onClick={() => onViewModeChange('grid')}
                            title={language === 'en' ? 'Grid Cards View' : 'ग्रिड कार्ड भ्यु'}
                            className={`p-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${viewMode === 'grid'
                                    ? 'neu-button text-[#000d27] font-bold'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => onViewModeChange('list')}
                            title={language === 'en' ? 'List Table View' : 'सूची टेबल भ्यु'}
                            className={`p-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${viewMode === 'list'
                                    ? 'neu-button text-[#000d27] font-bold'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => onViewModeChange('categorized')}
                            title={language === 'en' ? 'Categorized Section View' : 'वर्ग अनुसार भ्यु'}
                            className={`p-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${viewMode === 'categorized'
                                    ? 'neu-button text-[#000d27] font-bold'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            <Layers className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Pills Filter Grid */}
            <div className="pt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <button
                    onClick={() => onSelectCategory('All')}
                    className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${selectedCategory === 'All'
                            ? 'neu-button-primary text-white'
                            : 'neu-button text-gray-700'
                        }`}
                >
                    {language === 'en' ? 'All 14 Clubs' : 'सबै १४ क्लबहरू'}
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${selectedCategory === cat
                                ? 'neu-button-primary text-white'
                                : 'neu-button text-gray-700'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Active Search & Filter Banner */}
            {(searchQuery || selectedCategory !== 'All') && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 bg-blue-50/50 px-3 py-2 rounded-xl">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-blue-900">Active Filter:</span>
                        {selectedCategory !== 'All' && (
                            <span className="bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded-md font-medium">
                                Category: {selectedCategory}
                            </span>
                        )}
                        {searchQuery && (
                            <span className="bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md font-medium">
                                Search: "{searchQuery}"
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClearSearch}
                        className="text-blue-700 hover:text-blue-900 font-bold hover:underline cursor-pointer"
                    >
                        Reset Filters
                    </button>
                </div>
            )}
        </div>
    );
};

