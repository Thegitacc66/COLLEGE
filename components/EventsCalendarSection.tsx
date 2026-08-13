"use client";

import React, { useState, useMemo, useRef } from 'react';
import { ClubEvent, ClubNotice, Language } from '../app/data/clubsData';
import {
    Calendar,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Filter
} from 'lucide-react';

export const DEFAULT_CLUB_EVENTS: ClubEvent[] = [
    {
        id: 'e1',
        clubId: 'abit-club',
        clubName: 'ABIT Club',
        title: 'Full-Stack React & AI Agent Hackathon 2026',
        date: '2026-08-25',
        time: '09:00 AM - 05:00 PM',
        venue: 'IT Lab 204 & Main Auditorium',
        category: 'Workshop & Competition',
        description: 'Build innovative web applications integrated with AI models. Prize pool worth NPR 50,000 with certificates for all participants!',
        capacity: 100,
        registeredCount: 68,
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e2',
        clubId: 'bba-cloud',
        clubName: 'BBA Cloud',
        title: 'Startup Pitch Deck & Investor Summit',
        date: '2026-08-28',
        time: '11:00 AM - 03:00 PM',
        venue: 'Management Seminar Hall',
        category: 'Business & Pitch',
        description: 'Present your business idea to prominent entrepreneurs and regional bank managers. Top 3 ideas win seed funding mentoring.',
        capacity: 80,
        registeredCount: 42,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e3',
        clubId: 'free-student-union',
        clubName: 'Free Student Union',
        title: 'Annual Campus Sports & Cultural Week 2026',
        date: '2026-09-02',
        time: '08:00 AM - 05:00 PM',
        venue: 'Campus Main Ground & Bhanu Hall',
        category: 'Campus Grand Event',
        description: 'Inter-department cricket, volleyball, dance, poetry, debate, and music competitions celebrating campus unity.',
        capacity: 2000,
        registeredCount: 890,
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e4',
        clubId: 'nepal-youth-red-cross',
        clubName: 'Nepal Youth Red Cross',
        title: 'Grand Blood Donation & Free Health Screening Camp',
        date: '2026-09-10',
        time: '09:30 AM - 03:30 PM',
        venue: 'Student Recreation Gazebo',
        category: 'Health & Humanitarian',
        description: 'Donate blood to save lives. Free eye checkup, blood pressure, and blood sugar tests provided by Damauli Hospital doctors.',
        capacity: 300,
        registeredCount: 145,
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e5',
        clubId: 'aadikavi-nepali-creative-form',
        clubName: 'Aadikavi Nepali Creative Form',
        title: 'Inter-College Poetry & Gazal Competition',
        date: '2026-09-15',
        time: '01:00 PM - 04:30 PM',
        venue: 'Bhanu Memorial Hall',
        category: 'Literature & Poetry',
        description: 'Showcase your poetic rhythm and ghazal recitation skills. Renowned Nepalese poets will grace the judge panel.',
        capacity: 150,
        registeredCount: 78,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
    }
];

interface EventsCalendarSectionProps {
    events?: ClubEvent[];
    onRegisterEvent?: (eventId: string) => void;
    language?: Language;
}

const INITIAL_EVENTS_COUNT = 3;

export const EventsCalendarSection: React.FC<EventsCalendarSectionProps> = ({
    events = DEFAULT_CLUB_EVENTS,
    onRegisterEvent = (_eventId: string) => { },
    language = 'en'
}) => {
    const [filterCategory, setFilterCategory] = useState<string>('All');
    const [sortAscending, setSortAscending] = useState<boolean>(true); // true = nearest date first
    const [showAllEvents, setShowAllEvents] = useState<boolean>(false);
    const eventScrollRef = useRef<HTMLDivElement>(null);

    const scrollEventCategories = (direction: 'left' | 'right') => {
        if (eventScrollRef.current) {
            const scrollAmount = 240;
            eventScrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const categories = [
        'All',
        'Workshop & Competition',
        'Business & Pitch',
        'Campus Grand Event',
        'Health & Humanitarian',
        'Literature & Poetry'
    ];

    // Format date string into month & day badge parts
    const formatDateBadge = (dateStr: string) => {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) {
            return { month: 'EVENT', day: 'DATE' };
        }
        const month = d.toLocaleString(language === 'en' ? 'en-US' : 'np-NP', { month: 'short' }).toUpperCase();
        const day = d.getDate();
        return { month, day };
    };

    // Sort events chronologically by date
    const sortedEvents = useMemo(() => {
        return [...events].sort((a, b) => {
            const timeA = new Date(a.date).getTime();
            const timeB = new Date(b.date).getTime();
            const validA = !isNaN(timeA);
            const validB = !isNaN(timeB);

            if (validA && validB) {
                return sortAscending ? timeA - timeB : timeB - timeA;
            }
            return validA ? -1 : 1;
        });
    }, [events, sortAscending]);

    // Filter events by selected category
    const filteredEvents = useMemo(() => {
        if (filterCategory === 'All') return sortedEvents;
        return sortedEvents.filter((e) => e.category === filterCategory);
    }, [sortedEvents, filterCategory]);

    // Display subset based on showAllEvents toggle
    const displayedEvents = showAllEvents
        ? filteredEvents
        : filteredEvents.slice(0, INITIAL_EVENTS_COUNT);

    const remainingCount = filteredEvents.length - INITIAL_EVENTS_COUNT;

    return (
        <section id="events-section" className="py-16 bg-[#eef2f7] border-t border-slate-300/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Neumorphic Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 neu-pressed text-[#0c72b8] rounded-full text-xs font-bold mb-3 tracking-wide">
                            <Calendar className="w-3.5 h-3.5 text-[#0c72b8]" />
                            <span>{language === 'en' ? 'Campus Calendar' : 'क्याम्पस क्यालेन्डर'}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-poppins">
                            {language === 'en' ? 'Upcoming Student Club Events' : 'आगामी क्लब कार्यक्रमहरू'}
                        </h2>
                        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                            {language === 'en'
                                ? 'Discover workshops, competitions, sports meets, and cultural programs organized by campus committees.'
                                : 'क्याम्पस समितिहरूद्वारा आयोजित कार्यशाला, खेलकुद तथा सांस्कृतिक कार्यक्रमहरू।'}
                        </p>
                    </div>

                    {/* Neumorphic Date Sort Button */}
                    <button
                        onClick={() => setSortAscending(!sortAscending)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 neu-button text-slate-700 hover:text-[#0c72b8] text-xs font-bold rounded-xl transition-all cursor-pointer shrink-0 self-start md:self-end"
                        title="Sort by date"
                    >
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#0c72b8]" />
                        <span>
                            {sortAscending
                                ? (language === 'en' ? 'Earliest First' : 'निकटतम मिति')
                                : (language === 'en' ? 'Latest First' : 'पछिल्लो मिति')}
                        </span>
                    </button>
                </div>

                {/* Dedicated Category Filter Pills Row - Neumorphic Horizontal Slider */}
                <div className="flex items-center gap-2 pb-4 mb-8 border-b border-slate-300/40">
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0 mr-1 py-1 hidden xs:inline">
                        {language === 'en' ? 'FILTER:' : 'फिल्टर:'}
                    </span>

                    {/* Mobile Quick Dropdown */}
                    <div className="sm:hidden flex items-center gap-1.5 neu-pressed px-2.5 py-1.5 rounded-xl shrink-0">
                        <Filter className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                        <select
                            value={filterCategory}
                            onChange={(e) => {
                                setFilterCategory(e.target.value);
                                setShowAllEvents(false);
                            }}
                            className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer max-w-[110px]"
                            aria-label="Filter events by category"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Scroll Left Button */}
                    <button
                        onClick={() => scrollEventCategories('left')}
                        className="p-1.5 rounded-xl neu-button text-slate-600 hover:text-[#0c72b8] shrink-0 hidden sm:flex items-center justify-center"
                        aria-label="Scroll filter left"
                        title="Scroll left"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Horizontal Track */}
                    <div
                        ref={eventScrollRef}
                        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setFilterCategory(cat);
                                    setShowAllEvents(false);
                                }}
                                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${filterCategory === cat
                                        ? 'neu-button-primary text-white'
                                        : 'neu-button text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Scroll Right Button */}
                    <button
                        onClick={() => scrollEventCategories('right')}
                        className="p-1.5 rounded-xl neu-button text-slate-600 hover:text-[#0c72b8] shrink-0 hidden sm:flex items-center justify-center"
                        aria-label="Scroll filter right"
                        title="Scroll right"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Neumorphic Cards Grid */}
                {displayedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {displayedEvents.map((evt) => {
                            const { month, day } = formatDateBadge(evt.date);

                            return (
                                <div
                                    key={evt.id}
                                    className="group neu-card flex flex-col justify-between overflow-hidden relative transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    <div>
                                        {/* Image Banner */}
                                        <div className="h-44 w-full relative overflow-hidden rounded-t-2xl neu-pressed shrink-0">
                                            {evt.image ? (
                                                <img
                                                    src={evt.image}
                                                    alt={evt.title}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white/30">
                                                    <Calendar className="w-10 h-10" />
                                                </div>
                                            )}

                                            {/* Subtle Vignette Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />

                                            {/* Host Club Tag */}
                                            <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-200/80 shadow-sm backdrop-blur-md">
                                                {evt.clubName}
                                            </div>

                                            {/* Date Badge */}
                                            <div className="absolute top-3 right-3 bg-white text-slate-900 rounded-xl px-3 py-1.5 text-center min-w-[50px] shadow-sm border border-slate-100">
                                                <span className="block text-[10px] font-extrabold text-[#0c72b8] tracking-widest uppercase leading-none">
                                                    {month}
                                                </span>
                                                <span className="block text-base font-extrabold text-slate-900 leading-tight mt-0.5">
                                                    {day}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5 sm:p-6">
                                            {/* Category Label */}
                                            <span className="inline-block text-[10px] font-extrabold text-[#0c72b8] neu-pressed px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                                                {evt.category}
                                            </span>

                                            {/* Event Title */}
                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0c72b8] transition-colors leading-snug line-clamp-2 mb-2 font-poppins">
                                                {evt.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                                                {evt.description}
                                            </p>

                                            {/* Details: Time & Location */}
                                            <div className="space-y-2 text-xs text-slate-600 font-medium pt-3.5 border-t border-slate-300/40">
                                                <div className="flex items-center gap-2 text-slate-700">
                                                    <Clock className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                                    <span className="truncate">{evt.date} • {evt.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-700">
                                                    <MapPin className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                                    <span className="truncate">{evt.venue}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="neu-pressed rounded-2xl p-10 text-center my-4">
                        <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-xs sm:text-sm font-semibold text-slate-600">
                            {language === 'en' ? 'No events found in this category' : 'यस श्रेणीमा कुनै कार्यक्रमहरू फेला परेनन्'}
                        </p>
                        <button
                            onClick={() => setFilterCategory('All')}
                            className="mt-4 px-5 py-2.5 neu-button-primary text-white text-xs font-bold rounded-xl cursor-pointer"
                        >
                            {language === 'en' ? 'View All Events' : 'सबै कार्यक्रमहरू हेर्नुहोस्'}
                        </button>
                    </div>
                )}

                {/* Neumorphic Show More / Show Less Button */}
                {filteredEvents.length > INITIAL_EVENTS_COUNT && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAllEvents(!showAllEvents)}
                            className="px-6 py-3 neu-button text-slate-700 hover:text-[#0c72b8] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer group"
                        >
                            <span>
                                {showAllEvents
                                    ? (language === 'en' ? 'Show Less Events' : 'कम देखाउनुहोस्')
                                    : (language === 'en'
                                        ? `Show More Events (${remainingCount} More)`
                                        : `थप कार्यक्रमहरू (${remainingCount} बाँकी)`)}
                            </span>
                            {showAllEvents ? (
                                <ChevronUp className="w-4 h-4 text-[#0c72b8] group-hover:-translate-y-0.5 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-[#0c72b8] group-hover:translate-y-0.5 transition-transform" />
                            )}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};
