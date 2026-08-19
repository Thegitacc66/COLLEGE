"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClubEvent, Language } from '../app/data/clubsData';
import {
    Calendar,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp,
    ArrowUpDown,
    Search,
    X,
    CheckCircle2,
    UserPlus,
    Share2,
    ExternalLink,
    Users,
    Sparkles,
    Ticket,
    Building2,
    CalendarPlus
} from 'lucide-react';

export const DEFAULT_CLUB_EVENTS: ClubEvent[] = [
    {
        id: 'e1',
        clubId: 'abit-club',
        clubName: 'ABIT Club (IT & Computer)',
        title: 'Full-Stack React & AI Agent Hackathon 2026',
        date: '2026-08-25',
        time: '09:00 AM - 05:00 PM',
        venue: 'IT Lab 204 & Main Auditorium',
        category: 'Workshop & Tech',
        description: 'Build innovative web applications integrated with AI models. Prize pool worth NPR 50,000 with certificates and mentorship for all participants!',
        capacity: 100,
        registeredCount: 68,
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e2',
        clubId: 'bba-cloud',
        clubName: 'BBA Cloud (Business Summit)',
        title: 'Startup Pitch Deck & Youth Investor Summit',
        date: '2026-08-28',
        time: '11:00 AM - 03:00 PM',
        venue: 'Management Seminar Hall',
        category: 'Business & Pitch',
        description: 'Present your business and venture idea to prominent entrepreneurs, chamber of commerce delegates, and regional bank managers. Top 3 ideas win seed funding mentorship.',
        capacity: 80,
        registeredCount: 42,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e3',
        clubId: 'free-student-union',
        clubName: 'Free Student Union (FSU)',
        title: 'Annual Campus Sports & Cultural Week 2026',
        date: '2026-09-02',
        time: '08:00 AM - 05:00 PM',
        venue: 'Campus Main Ground & Bhanu Hall',
        category: 'Sports & Athletics',
        description: 'Inter-department cricket, volleyball, futsal, dance, poetry, debate, and musical competitions celebrating campus unity and athletic talent.',
        capacity: 2000,
        registeredCount: 890,
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e4',
        clubId: 'nepal-youth-red-cross',
        clubName: 'Nepal Youth Red Cross Circle',
        title: 'Grand Blood Donation & Free Health Screening Camp',
        date: '2026-09-10',
        time: '09:30 AM - 03:30 PM',
        venue: 'Student Recreation Gazebo',
        category: 'Humanitarian & Health',
        description: 'Donate blood to save lives. Free eye checkup, blood pressure, and blood sugar tests provided by Damauli Hospital medical staff and volunteers.',
        capacity: 300,
        registeredCount: 145,
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e5',
        clubId: 'aadikavi-nepali-creative-form',
        clubName: 'Aadikavi Nepali Creative Form',
        title: 'Inter-College Poetry & Gazal Recitation Competition',
        date: '2026-09-15',
        time: '01:00 PM - 04:30 PM',
        venue: 'Bhanu Memorial Hall',
        category: 'Literature & Arts',
        description: 'Showcase your poetic rhythm, storytelling, and ghazal recitation skills. Renowned Nepalese poets and litterateurs will grace the evaluation panel.',
        capacity: 150,
        registeredCount: 78,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e6',
        clubId: 'nature-conservation-club',
        clubName: 'Nature Conservation & Eco Club',
        title: 'Clean Seti River Watershed & Tree Plantation Drive',
        date: '2026-09-22',
        time: '07:30 AM - 12:00 PM',
        venue: 'Seti River Bank & Campus Arboretum',
        category: 'Eco & Environment',
        description: 'Environmental cleanliness drive and planting 200 indigenous saplings along the riparian zone. Includes gloves, seedling distribution, and eco-badges for volunteers.',
        capacity: 120,
        registeredCount: 94,
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e7',
        clubId: 'women-empowerment-cell',
        clubName: 'Women Empowerment Cell',
        title: 'Women in Leadership & Tech Career Masterclass',
        date: '2026-09-29',
        time: '01:30 PM - 04:30 PM',
        venue: 'Conference Hall A',
        category: 'Workshop & Tech',
        description: 'Interactive session featuring inspiring female leaders in business, governance, and technology discussing career growth, negotiation, and entrepreneurship.',
        capacity: 100,
        registeredCount: 65,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
    }
];

interface EventsCalendarSectionProps {
    events?: ClubEvent[];
    onRegisterEvent?: (eventId: string) => void;
    language?: Language;
    onSelectClubById?: (clubId: string) => void;
}

const INITIAL_EVENTS_COUNT = 3;

// Safe Date Parser that avoids UTC timezone offset bugs
const parseSafeDate = (dateStr: string) => {
    if (!dateStr) return { month: 'EVENT', day: 'DATE', dateObj: new Date() };
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const d = parseInt(parts[2], 10);
        const dateObj = new Date(y, m, d);
        const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        return { month, day: String(d).padStart(2, '0'), dateObj };
    }
    const dateObj = new Date(dateStr);
    const month = isNaN(dateObj.getTime()) ? 'EVENT' : dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = isNaN(dateObj.getTime()) ? 'DATE' : String(dateObj.getDate()).padStart(2, '0');
    return { month, day, dateObj };
};

export const EventsCalendarSection: React.FC<EventsCalendarSectionProps> = ({
    events = DEFAULT_CLUB_EVENTS,
    onRegisterEvent = (_eventId: string) => { },
    language = 'en',
    onSelectClubById
}) => {
    const [filterCategory, setFilterCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortAscending, setSortAscending] = useState<boolean>(true); // true = earliest date first
    const [showAllEvents, setShowAllEvents] = useState<boolean>(false);
    const [activeEventModal, setActiveEventModal] = useState<ClubEvent | null>(null);
    const [registeredIds, setRegisteredIds] = useState<Set<string>>(new Set());
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [rsvpName, setRsvpName] = useState<string>('');
    const [rsvpEmail, setRsvpEmail] = useState<string>('');
    const [rsvpRoll, setRsvpRoll] = useState<string>('');

    const triggerToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3500);
    };

    // Category translation helper
    const getCategoryLabel = (cat: string, lang?: Language | string) => {
        if (lang !== 'np') return cat;
        switch (cat) {
            case 'All': return 'सबै';
            case 'Workshop & Tech': return 'कार्यशाला र प्रविधि';
            case 'Business & Pitch': return 'व्यापार र पिच';
            case 'Sports & Athletics': return 'खेलकुद र एथलेटिक्स';
            case 'Humanitarian & Health': return 'मानवता र स्वास्थ्य';
            case 'Literature & Arts': return 'साहित्य र कला';
            case 'Eco & Environment': return 'वातावरण र संरक्षण';
            default: return cat;
        }
    };

    // Derive unique categories from active events
    const categories = useMemo(() => {
        const set = new Set<string>();
        events.forEach(e => {
            if (e.category) set.add(e.category.trim());
        });
        return ['All', ...Array.from(set)];
    }, [events]);

    // Sort events chronologically by date safely
    const sortedEvents = useMemo(() => {
        return [...events].sort((a, b) => {
            const timeA = parseSafeDate(a.date).dateObj.getTime();
            const timeB = parseSafeDate(b.date).dateObj.getTime();
            const validA = !isNaN(timeA);
            const validB = !isNaN(timeB);

            if (validA && validB) {
                return sortAscending ? timeA - timeB : timeB - timeA;
            }
            return validA ? -1 : 1;
        });
    }, [events, sortAscending]);

    // Filter events by selected category and search query
    const filteredEvents = useMemo(() => {
        return sortedEvents.filter((e) => {
            const matchesCategory =
                filterCategory === 'All' ||
                (e.category && e.category.trim().toLowerCase() === filterCategory.trim().toLowerCase());

            if (!matchesCategory) return false;

            if (!searchQuery.trim()) return true;
            const q = searchQuery.toLowerCase().trim();
            return (
                (e.title && e.title.toLowerCase().includes(q)) ||
                (e.clubName && e.clubName.toLowerCase().includes(q)) ||
                (e.venue && e.venue.toLowerCase().includes(q)) ||
                (e.category && e.category.toLowerCase().includes(q)) ||
                (e.description && e.description.toLowerCase().includes(q))
            );
        });
    }, [sortedEvents, filterCategory, searchQuery]);

    // Display subset: If filtering by specific category or searching, show all matching events. If 'All', paginate with INITIAL_EVENTS_COUNT
    const isFiltering = filterCategory !== 'All' || searchQuery.trim().length > 0;
    const displayedEvents = (showAllEvents || isFiltering)
        ? filteredEvents
        : filteredEvents.slice(0, INITIAL_EVENTS_COUNT);

    const remainingCount = Math.max(0, filteredEvents.length - INITIAL_EVENTS_COUNT);

    // Handle Event Registration / RSVP
    const handleToggleRsvp = (eventItem: ClubEvent) => {
        const isCurrentlyRegistered = registeredIds.has(eventItem.id) || eventItem.isRegistered;

        setRegisteredIds((prev) => {
            const next = new Set(prev);
            if (isCurrentlyRegistered) {
                next.delete(eventItem.id);
                triggerToast(
                    language === 'en'
                        ? `Cancelled RSVP for ${eventItem.title}`
                        : `${eventItem.title} का लागि दर्ता रद्द गरियो`
                );
            } else {
                next.add(eventItem.id);
                onRegisterEvent(eventItem.id);
                triggerToast(
                    language === 'en'
                        ? `Pass Confirmed! See you at ${eventItem.title}`
                        : `पास दर्ता सम्पन्न भयो! ${eventItem.title}`
                );
            }
            return next;
        });

        if (activeEventModal && activeEventModal.id === eventItem.id) {
            setActiveEventModal((prev) =>
                prev
                    ? {
                        ...prev,
                        isRegistered: !isCurrentlyRegistered,
                        registeredCount: (prev.registeredCount || 0) + (isCurrentlyRegistered ? -1 : 1)
                    }
                    : null
            );
        }
    };

    // Google Calendar URL Generator
    const generateGoogleCalendarUrl = (evt: ClubEvent) => {
        const { dateObj } = parseSafeDate(evt.date);
        const yyyymmdd = dateObj.toISOString().replace(/-|:|\.\d+/g, '').substring(0, 8);
        const startIso = `${yyyymmdd}T040000Z`;
        const endIso = `${yyyymmdd}T100000Z`;
        const title = encodeURIComponent(evt.title);
        const details = encodeURIComponent(`${evt.description}\n\nOrganized by: ${evt.clubName}\nVenue: ${evt.venue}\nTime: ${evt.time}`);
        const location = encodeURIComponent(`${evt.venue}, Aadikavi Bhanubhakta Campus, Damauli, Tanahun`);

        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
    };

    // Download .ics File for Apple / Outlook
    const downloadIcsFile = (evt: ClubEvent) => {
        const { dateObj } = parseSafeDate(evt.date);
        const yyyymmdd = dateObj.toISOString().replace(/-|:|\.\d+/g, '').substring(0, 8);
        const icsData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Aadikavi Bhanubhakta Campus//Student Club Events//EN',
            'BEGIN:VEVENT',
            `UID:${evt.id}-${Date.now()}@abcampus.edu.np`,
            `DTSTAMP:${yyyymmdd}T000000Z`,
            `DTSTART:${yyyymmdd}T040000Z`,
            `DTEND:${yyyymmdd}T100000Z`,
            `SUMMARY:${evt.title}`,
            `DESCRIPTION:${evt.description.replace(/\n/g, '\\n')}`,
            `LOCATION:${evt.venue}, Aadikavi Bhanubhakta Campus`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', `${evt.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        triggerToast('Calendar invite (.ics) downloaded successfully!');
    };

    // Share Event
    const handleShareEvent = async (evt: ClubEvent) => {
        const shareData = {
            title: evt.title,
            text: `${evt.title} on ${evt.date} at ${evt.venue} - ${evt.clubName}`,
            url: window.location.href
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // Fallback to copy
                copyToClipboard(window.location.href);
            }
        } else {
            copyToClipboard(window.location.href);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        triggerToast(language === 'en' ? 'Event link copied to clipboard!' : 'कार्यक्रम लिङ्क प्रतिलिपि गरियो!');
    };

    return (
        <section id="events-calendar-section" className="py-14 sm:py-18 bg-[#eef2f7] border-t border-slate-300/40 relative scroll-mt-20">

            {/* Mini Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 z-50 bg-[#000d27] text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400 flex items-center gap-3"
                    >
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header & Sort Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 tracking-wide bg-[#eef2f7] text-[#0c72b8] shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] border border-white/80"
                        >
                            <Calendar className="w-3.5 h-3.5 text-[#0c72b8]" />
                            <span>{language === 'en' ? 'Campus Activity Calendar' : 'क्याम्पस कार्यक्रम क्यालेन्डर'}</span>
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-poppins">
                            {language === 'en' ? 'Upcoming Student Club Events' : 'आगामी विद्यार्थी क्लब कार्यक्रमहरू'}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                            {language === 'en'
                                ? 'Join hackathons, business pitch summits, cultural fests, health camps, and creative workshops organized across campus committees.'
                                : 'क्याम्पस समितिहरूद्वारा आयोजित कार्यशाला, खेलकुद, रक्तदान, र सांस्कृतिक कार्यक्रमहरूमा सहभागी हुनुहोस्।'}
                        </p>
                    </div>

                    {/* Quick Date Sort & Counter */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex items-center gap-3 self-start md:self-end"
                    >
                        <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
                            {filteredEvents.length} {language === 'en' ? 'Events' : 'कार्यक्रमहरू'}
                        </span>
                        <button
                            type="button"
                            onClick={() => setSortAscending(!sortAscending)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#eef2f7] hover:bg-white text-slate-700 hover:text-[#0c72b8] text-xs font-bold rounded-xl transition-all shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] border border-white/80 cursor-pointer shrink-0 active:scale-95"
                            title="Sort events by chronological date"
                        >
                            <ArrowUpDown className="w-3.5 h-3.5 text-[#0c72b8]" />
                            <span>
                                {sortAscending
                                    ? (language === 'en' ? 'Earliest First' : 'निकटतम मिति')
                                    : (language === 'en' ? 'Latest First' : 'पछिल्लो मिति')}
                            </span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Search & Category Filter Toolbar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                    className="space-y-4 mb-8"
                >
                    {/* Live Search Field */}
                    <div className="relative max-w-md">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={language === 'en' ? "Search events by title, club, venue..." : "शीर्षक, क्लब वा स्थान अनुसार खोज्नुहोस्..."}
                            className="w-full pl-10 pr-10 py-2.5 bg-[#eef2f7] border border-white/80 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-[inset_2.5px_2.5px_5px_#d1d9e6,inset_-2.5px_-2.5px_5px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#0c72b8] transition-all"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Chips */}
                    <div className="flex items-center gap-2 sm:gap-2.5 py-1.5 px-1 overflow-x-auto no-scrollbar scroll-smooth">
                        <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                            <span>{language === 'en' ? 'Category:' : 'श्रेणी:'}</span>
                        </span>
                        {categories.map((cat) => {
                            const count = cat === 'All'
                                ? events.length
                                : events.filter(e => e.category && e.category.trim().toLowerCase() === cat.trim().toLowerCase()).length;

                            const isSelected = filterCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => {
                                        // If clicking already selected category (other than 'All'), toggle back to 'All'
                                        if (isSelected && cat !== 'All') {
                                            setFilterCategory('All');
                                        } else {
                                            setFilterCategory(cat);
                                        }
                                        setShowAllEvents(true);
                                    }}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${isSelected
                                            ? 'neu-button-primary text-white shadow-sm scale-[1.02]'
                                            : 'bg-[#eef2f7] text-slate-700 hover:text-slate-900 shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/80 hover:bg-white'
                                        }`}
                                    title={`Filter by ${getCategoryLabel(cat, language)}`}
                                >
                                    <span>{getCategoryLabel(cat, language)}</span>
                                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${isSelected ? 'bg-white/30 text-white' : 'bg-slate-300/60 text-slate-700'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Events Cards Grid with AnimatePresence for seamless filtering */}
                <AnimatePresence mode="popLayout">
                    {displayedEvents.length > 0 ? (
                        <motion.div
                            key={`events-grid-${filterCategory}-${sortAscending ? 'asc' : 'desc'}-${searchQuery ? 'search' : 'all'}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        >
                            {displayedEvents.map((evt, idx) => {
                                const { month, day } = parseSafeDate(evt.date);

                                return (
                                    <motion.div
                                        key={evt.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.35,
                                            delay: Math.min(idx * 0.05, 0.25),
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                        className="group bg-[#eef2f7] rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[9px_9px_22px_#c8d2e2,-9px_-9px_22px_#ffffff] transition-all flex flex-col justify-between relative"
                                    >
                                        <div>
                                            {/* Top Image Banner */}
                                            <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-200 mb-4 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] shrink-0">
                                                <img
                                                    src={evt.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                                                    alt={evt.title}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />

                                                {/* Vignette Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                                                {/* Host Club Tag (Clickable to open committee page) */}
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (onSelectClubById && evt.clubId) {
                                                            onSelectClubById(evt.clubId);
                                                        }
                                                    }}
                                                    className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200/80 shadow-md backdrop-blur-md hover:bg-blue-50 hover:text-[#0c72b8] transition-colors cursor-pointer flex items-center gap-1"
                                                    title="View host committee details"
                                                >
                                                    <Building2 className="w-3 h-3 text-[#0c72b8]" />
                                                    <span className="max-w-[130px] truncate">{evt.clubName}</span>
                                                </button>

                                                {/* Date Badge */}
                                                <div className="absolute top-3 right-3 bg-white text-slate-900 rounded-2xl px-3 py-1.5 text-center min-w-[50px] shadow-md border border-slate-100/90">
                                                    <span className="block text-[10px] font-extrabold text-[#0c72b8] tracking-widest uppercase leading-none">
                                                        {month}
                                                    </span>
                                                    <span className="block text-base font-extrabold text-slate-900 leading-tight mt-0.5">
                                                        {day}
                                                    </span>
                                                </div>

                                                {/* Category Label Bottom Tag */}
                                                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                                                    {getCategoryLabel(evt.category, language)}
                                                </div>
                                            </div>

                                            {/* Title & Description */}
                                            <div className="space-y-2">
                                                <h3
                                                    onClick={() => setActiveEventModal(evt)}
                                                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0c72b8] transition-colors leading-snug line-clamp-2 font-poppins cursor-pointer"
                                                >
                                                    {evt.title}
                                                </h3>

                                                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                                                    {evt.description}
                                                </p>
                                            </div>

                                            {/* Schedule & Location */}
                                            <div className="space-y-2 text-xs text-slate-600 font-medium pt-3.5 my-3 border-t border-slate-300/40">
                                                <div className="flex items-center gap-2 text-slate-700">
                                                    <Clock className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                                    <span className="truncate">{evt.date} • {evt.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-700">
                                                    <MapPin className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                                    <span className="truncate">{evt.venue}</span>
                                                </div>
                                            </div>

                                            {/* Card Action Button */}
                                            <div className="pt-3 border-t border-slate-300/40">
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveEventModal(evt)}
                                                    className="w-full py-2.5 px-4 bg-[#eef2f7] hover:bg-white text-slate-800 hover:text-[#0c72b8] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[5px_5px_12px_#c8d2e2,-5px_-5px_12px_#ffffff] border border-white/80 cursor-pointer flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
                                                >
                                                    <Ticket className="w-4 h-4 text-[#0c72b8] group-hover/btn:scale-110 transition-transform" />
                                                    <span>{language === 'en' ? 'View Event Details' : 'कार्यक्रम विवरण हेर्नुहोस्'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        /* Empty Search & Filter State */
                        <motion.div
                            key="events-empty-state"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#eef2f7] rounded-3xl p-10 sm:p-14 text-center border border-white/80 shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] max-w-lg mx-auto my-6"
                        >
                            <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                            <h3 className="text-base font-bold text-slate-900 font-poppins">
                                {language === 'en' ? 'No events match your criteria' : 'कुनै कार्यक्रमहरू फेला परेनन्'}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                                {language === 'en'
                                    ? 'Try adjusting your search keyword or switching the category filter back to "All".'
                                    : 'कृपया खोज शब्द परिवर्तन गर्नुहोस् वा सबै कार्यक्रमहरू हेर्नुहोस्।'}
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setFilterCategory('All');
                                    setSearchQuery('');
                                    setShowAllEvents(false);
                                }}
                                className="mt-5 px-5 py-2.5 neu-button-primary text-white text-xs font-bold rounded-xl cursor-pointer active:scale-95 transition-transform"
                            >
                                {language === 'en' ? 'Reset All Filters' : 'फिल्टरहरू रिसेट गर्नुहोस्'}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Show More / Show Less Button (Only shown when browsing All and count exceeds initial count) */}
                {!isFiltering && filteredEvents.length > INITIAL_EVENTS_COUNT && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mt-10 flex justify-center"
                    >
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                if (showAllEvents) {
                                    setShowAllEvents(false);
                                    const el = document.getElementById('events-calendar-section');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    }
                                } else {
                                    setShowAllEvents(true);
                                }
                            }}
                            className="px-6 py-3 bg-[#eef2f7] hover:bg-white text-slate-700 hover:text-[#0c72b8] font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] hover:shadow-[7px_7px_16px_#c8d2e2,-7px_-7px_16px_#ffffff] border border-white/80 flex items-center gap-2 cursor-pointer group"
                        >
                            <span>
                                {showAllEvents
                                    ? (language === 'en' ? 'Show Less Events' : 'कम देखाउनुहोस्')
                                    : (language === 'en'
                                        ? `Explore More Events (${remainingCount} More)`
                                        : `थप कार्यक्रमहरू हेर्नुहोस् (${remainingCount} बाँकी)`)}
                            </span>
                            {showAllEvents ? (
                                <ChevronUp className="w-4 h-4 text-[#0c72b8] group-hover:-translate-y-0.5 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-[#0c72b8] group-hover:translate-y-0.5 transition-transform" />
                            )}
                        </motion.button>
                    </motion.div>
                )}

            </div>

            {/* RICH NEUMORPHIC EVENT DETAILS & REGISTRATION MODAL */}
            <AnimatePresence>
                {activeEventModal && (
                    <div
                        onClick={() => setActiveEventModal(null)}
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xs overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#eef2f7] border border-white/90 my-auto"
                        >
                            {/* Modal Banner Image */}
                            <div className="relative w-full h-52 sm:h-64 bg-slate-900">
                                <img
                                    src={activeEventModal.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                                    alt={activeEventModal.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={() => setActiveEventModal(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                                    title="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Header Tags */}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/95 text-[#0c72b8] text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                                            {activeEventModal.category}
                                        </span>
                                        <span className="bg-[#800000] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{activeEventModal.date}</span>
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleShareEvent(activeEventModal)}
                                        className="p-2 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md transition-all cursor-pointer flex items-center gap-1 text-xs font-bold px-3"
                                        title="Share event link"
                                    >
                                        <Share2 className="w-3.5 h-3.5 text-[#0c72b8]" />
                                        <span className="hidden sm:inline">Share</span>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">

                                {/* Title & Host Club Info */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins leading-snug">
                                        {activeEventModal.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="text-xs text-slate-600 font-medium">Organized by:</span>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (onSelectClubById && activeEventModal.clubId) {
                                                    setActiveEventModal(null);
                                                    onSelectClubById(activeEventModal.clubId);
                                                }
                                            }}
                                            className="text-xs font-bold text-[#0c72b8] hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                            <Building2 className="w-3.5 h-3.5" />
                                            <span>{activeEventModal.clubName}</span>
                                            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                                        </button>
                                    </div>
                                </div>

                                {/* Session Time & Location Info Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 shadow-inner">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Session Timing</span>
                                            <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                                                {activeEventModal.time}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-inner">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Event Venue</span>
                                            <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                                                {activeEventModal.venue}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Overview & Highlights */}
                                <div className="space-y-2">
                                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                                        Event Overview & Agenda
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white/60 p-4 rounded-2xl border border-white/80 shadow-[inset_1px_1px_3px_#d1d9e6]">
                                        {activeEventModal.description}
                                    </p>
                                </div>

                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
};
