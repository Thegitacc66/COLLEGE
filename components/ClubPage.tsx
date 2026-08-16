
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
    ArrowLeft,
    Users,
    MapPin,
    Award,
    Mail,
    Phone,
    Building2,
    Clock,
    CheckCircle2,
    UserPlus,
    Sparkles,
    Bell,
    Eye,
    Zap,
    FileText,
    Quote,
    Target,
    Compass,
    History,
    ShieldCheck,
    GraduationCap,
    Calendar,
    X,
    Send,
    ExternalLink,
    ChevronRight,
    Image as ImageIcon,
    Trophy,
    Plus,
    ZoomIn,
    Check,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    Layers,
    Info
} from 'lucide-react';

import {
    Club,
    ClubEvent,
    ClubNotice,
    Language
} from '../app/data/clubsData';

// FIX 1: Updated path to sibling directory (common fix for 'module not found')
import { SuggestionMessageBox } from './SuggestionMessageBox';

export interface AchievementCardData {
    id: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    image?: string;
    badge?: string;
}

const getClubUpcomingEvents = (club: Club, passedEvents: ClubEvent[] = []): ClubEvent[] => {
    const existing = passedEvents.filter((e) => e.clubId === club.id);

    const cat = (club.category || '').toLowerCase();
    const name = club.name;

    let committeeDefaults: ClubEvent[] = [];

    if (cat.includes('tech') || cat.includes('computer') || cat.includes('it')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Full-Stack React & AI Agent Hackathon 2026',
                date: '2026-08-25',
                time: '09:00 AM - 05:00 PM',
                venue: 'IT Lab 204 & Main Auditorium',
                category: 'Workshop & Hackathon',
                description: 'Build innovative web applications integrated with modern AI models. Prize pool worth NPR 50,000 with certificates and mentor feedback for all participants!',
                capacity: 100,
                registeredCount: 68,
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Cybersecurity & Ethical Hacking Hands-On Bootcamp',
                date: '2026-09-08',
                time: '01:00 PM - 04:30 PM',
                venue: 'Computer Science Center, Lab B',
                category: 'Technical Workshop',
                description: 'Explore network penetration testing, web vulnerability discovery, and modern cyber defense strategies guided by industry security analysts.',
                capacity: 80,
                registeredCount: 54,
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-3`,
                clubId: club.id,
                clubName: club.name,
                title: 'Open Source Contribution & Git Mastery Session',
                date: '2026-09-20',
                time: '11:00 AM - 02:00 PM',
                venue: 'Digital Media Room 102',
                category: 'Peer Learning',
                description: 'Learn collaborative Git workflows, submitting pull requests, and building portfolio-ready open source projects on GitHub.',
                capacity: 60,
                registeredCount: 39,
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('business') || cat.includes('management') || cat.includes('bba')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Startup Pitch Deck & Youth Venture Summit 2026',
                date: '2026-08-28',
                time: '11:00 AM - 03:00 PM',
                venue: 'Management Seminar Hall',
                category: 'Business & Pitch',
                description: 'Present your innovative business plan to regional venture leaders and banking executives. Winning pitches receive mentorship and incubation support.',
                capacity: 80,
                registeredCount: 42,
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'NEPSE Stock Trading & Financial Portfolio Masterclass',
                date: '2026-09-05',
                time: '01:30 PM - 04:00 PM',
                venue: 'BBA Interactive Hall',
                category: 'Financial Seminar',
                description: 'Deep dive into fundamental company analysis, technical charting, and risk mitigation strategies in the Nepalese capital market.',
                capacity: 70,
                registeredCount: 51,
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-3`,
                clubId: club.id,
                clubName: club.name,
                title: 'Corporate Leadership & Case Study Challenge',
                date: '2026-09-18',
                time: '10:00 AM - 02:00 PM',
                venue: 'Conference Room A',
                category: 'Case Competition',
                description: 'Solve real-world brand expansion dilemmas under strict time limits in teams of three. Judged by seasoned corporate consultants.',
                capacity: 60,
                registeredCount: 38,
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('sport') || cat.includes('athletic')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Inter-Faculty Futsal & Cricket Championship 2026',
                date: '2026-09-03',
                time: '08:00 AM - 04:00 PM',
                venue: 'Campus Sports Arena & Futsal Ground',
                category: 'Tournament & Sports',
                description: 'Multi-day tournament bringing together student teams from all academic faculties. Medals, trophies, and certificates for top performers!',
                capacity: 250,
                registeredCount: 160,
                image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Annual Badminton & Table Tennis Open Cup',
                date: '2026-09-14',
                time: '10:00 AM - 03:30 PM',
                venue: 'Indoor Sports Complex',
                category: 'Singles & Doubles',
                description: 'Exciting racket sport matchups across Men and Women singles and mixed doubles brackets.',
                capacity: 80,
                registeredCount: 45,
                image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('literature') || cat.includes('culture') || cat.includes('art')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Inter-College Poetry, Gazal & Short Story Recitation',
                date: '2026-09-15',
                time: '01:00 PM - 04:30 PM',
                venue: 'Bhanu Memorial Hall',
                category: 'Literature & Poetry',
                description: 'Showcase your creative writing, poetic recitation, and gazal compositions. Renowned litterateurs and alumni poets on the judge panel.',
                capacity: 150,
                registeredCount: 78,
                image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Bhanu Jayanti Cultural Drama & Folk Music Festival',
                date: '2026-09-24',
                time: '11:00 AM - 04:00 PM',
                venue: 'Main Campus Amphitheater',
                category: 'Cultural Exhibition',
                description: 'Celebration of Nepalese traditional folklore, theatrical drama, and instrumental folk performances.',
                capacity: 400,
                registeredCount: 220,
                image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('humanitarian') || cat.includes('red cross') || cat.includes('service') || cat.includes('health') || cat.includes('disaster')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Mega Blood Donation & Free Health Screening Camp',
                date: '2026-09-10',
                time: '09:30 AM - 03:30 PM',
                venue: 'Student Recreation Gazebo',
                category: 'Health & Humanitarian',
                description: 'Join hands to donate blood and save lives in Tanahun district. Free blood pressure, blood glucose, and basic health consultation by medical professionals.',
                capacity: 300,
                registeredCount: 145,
                image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'First Aid Certification & Disaster Preparedness Drill',
                date: '2026-09-22',
                time: '10:00 AM - 02:00 PM',
                venue: 'Red Cross Resource Room & Courtyard',
                category: 'Emergency Training',
                description: 'Practical training on CPR, emergency bandage techniques, stretcher transport, and rapid earthquake evacuation response.',
                capacity: 90,
                registeredCount: 65,
                image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('eco') || cat.includes('environment')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Green Campus Tree Plantation & Botanical Flora Tagging',
                date: '2026-09-06',
                time: '07:30 AM - 11:30 AM',
                venue: 'Campus Eco Park & Botanical Garden',
                category: 'Environmental Action',
                description: 'Planting 200+ indigenous saplings across campus grounds and creating digital QR plant tags for botanical awareness.',
                capacity: 120,
                registeredCount: 82,
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Zero-Waste & Plastic-Free Campus Campaign',
                date: '2026-09-19',
                time: '12:00 PM - 03:00 PM',
                venue: 'Student Cafeteria & Courtyard',
                category: 'Awareness Drive',
                description: 'Interactive workshops on waste segregation, composting organic cafeteria waste, and distributing cloth bags.',
                capacity: 100,
                registeredCount: 60,
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else if (cat.includes('women') || cat.includes('empowerment')) {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: 'Women in Leadership & Entrepreneurship Summit 2026',
                date: '2026-09-12',
                time: '10:30 AM - 03:30 PM',
                venue: 'Bhanu Main Auditorium',
                category: 'Leadership Summit',
                description: 'Panel discussions with prominent female leaders, financial literacy workshops, and mentorship circles for female students.',
                capacity: 180,
                registeredCount: 115,
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Self-Defense, Mental Wellness & Confidence Workshop',
                date: '2026-09-26',
                time: '01:00 PM - 04:00 PM',
                venue: 'Student Activities Complex',
                category: 'Practical Training',
                description: 'Hands-on self-defense training with martial arts coaches along with mental wellness coping techniques.',
                capacity: 90,
                registeredCount: 62,
                image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80'
            }
        ];
    } else {
        committeeDefaults = [
            {
                id: `evt-${club.id}-1`,
                clubId: club.id,
                clubName: club.name,
                title: `${name} Annual Assembly & Flagship Workshop 2026`,
                date: '2026-09-04',
                time: '10:00 AM - 03:00 PM',
                venue: 'Main Auditorium & Seminar Hall',
                category: 'Flagship Event',
                description: `Join us for the premier annual gathering of ${name}. Featuring keynote talks from distinguished alumni, practical project showcases, and student networking.`,
                capacity: 150,
                registeredCount: 85,
                image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `evt-${club.id}-2`,
                clubId: club.id,
                clubName: club.name,
                title: 'Skill Development & Career Mentorship Bootcamp',
                date: '2026-09-16',
                time: '01:00 PM - 04:30 PM',
                venue: 'Interactive Room 302',
                category: 'Mentorship & Growth',
                description: 'Hands-on practical training designed to expand your core competencies, public speaking, and project leadership.',
                capacity: 80,
                registeredCount: 48,
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
            }
        ];
    }

    // Combine passed events with defaults without duplicate titles
    const combined = [...existing];
    for (const def of committeeDefaults) {
        if (!combined.some((c) => c.title.toLowerCase().trim() === def.title.toLowerCase().trim())) {
            combined.push(def);
        }
    }

    return combined;
};

const getContextualAchievementImage = (title: string, idx: number, category: string = ''): string => {
    const t = (title + ' ' + category).toLowerCase();
    if (t.includes('hackathon') || t.includes('code') || t.includes('programming') || t.includes('fest')) {
        return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('train') || t.includes('workshop') || t.includes('bootcamp') || t.includes('react') || t.includes('web')) {
        return 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('portal') || t.includes('board') || t.includes('digital') || t.includes('software') || t.includes('feedback')) {
        return 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('robot') || t.includes('trophy') || t.includes('champion') || t.includes('runner') || t.includes('award') || t.includes('win')) {
        return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('sport') || t.includes('cricket') || t.includes('football') || t.includes('athletics')) {
        return 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('blood') || t.includes('health') || t.includes('relief') || t.includes('donation') || t.includes('medical')) {
        return 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('business') || t.includes('market') || t.includes('summit') || t.includes('venture') || t.includes('pitch')) {
        return 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80';
    }
    if (t.includes('literature') || t.includes('poetry') || t.includes('drama') || t.includes('culture') || t.includes('art')) {
        return 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80';
    }
    const genericList = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80'
    ];
    return genericList[idx % genericList.length];
};

const DEFAULT_CLUB_SAMPLE: Club = {
    id: 'abit-club',
    name: 'ABIT Club (IT & Computer)',
    nepaliName: 'एबीआइटी क्लब (सूचना तथा प्रविधि)',
    category: 'Technology & IT',
    logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#0c72b8',
    description: 'The premier Information Technology student committee at Aadikavi Bhanubhakta Campus. Dedicated to fostering software development, artificial intelligence skills, cybersecurity awareness, web technologies, and tech innovation among students.',
    shortDescription: 'Empowering students in IT innovation, coding bootcamps, AI workshops, and hackathons.',
    establishedYear: 2018,
    memberCount: 120,
    facultyAdvisor: 'Er. Ghan Bahadur Thapa',
    president: 'Subash Chandra Giri',
    meetingSchedule: 'Every Friday at 3:30 PM',
    roomLocation: 'IT Building, Lab 204',
    contactEmail: 'abit.club@abcampus.edu.np',
    featured: true,
    leadership: [],
    achievements: [],
    galleryImages: []
};

const DEFAULT_CLUB_EVENTS: ClubEvent[] = [];

export interface ClubPageProps {
    club?: Club;
    onBack?: () => void;
    events?: ClubEvent[];
    notices?: ClubNotice[];
    onRegisterEvent?: (eventId: string) => void;
    onApplyJoin?: (clubId: string) => void;
    language?: Language;
}

export const ClubPage: React.FC<ClubPageProps> = ({
    club = DEFAULT_CLUB_SAMPLE,
    onBack = () => { },
    events = DEFAULT_CLUB_EVENTS,
    notices = [],
    onRegisterEvent = (_eventId: string) => { },
    onApplyJoin = (_clubId: string) => { },
    language = 'en'
}) => {
    type TabType = 'home' | 'about' | 'vision' | 'events' | 'manifesto' | 'history' | 'committee' | 'gallery' | 'message';

    const [activeTab, setActiveTab] = useState<TabType>('home');
    const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
    const [selectedEventForModal, setSelectedEventForModal] = useState<ClubEvent | null>(null);
    const [registeredEventIds, setRegisteredEventIds] = useState<Set<string>>(new Set());
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [joinSubmitted, setJoinSubmitted] = useState(false);
    const [joinFormData, setJoinFormData] = useState({
        name: '',
        rollNo: '',
        faculty: 'BIM / CSIT',
        semester: '1st Semester',
        email: '',
        phone: '',
        reason: ''
    });

    const [clubEventsList, setClubEventsList] = useState<ClubEvent[]>(() => {
        return getClubUpcomingEvents(club, events);
    });

    useEffect(() => {
        setClubEventsList(getClubUpcomingEvents(club, events));
    }, [club, events]);

    const handleEventRegistration = (eventId: string, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setRegisteredEventIds((prev) => {
            const next = new Set(prev);
            if (next.has(eventId)) {
                next.delete(eventId);
            } else {
                next.add(eventId);
            }
            return next;
        });

        setClubEventsList((prev) =>
            prev.map((ev) => {
                if (ev.id === eventId) {
                    const isNowRegistered = !registeredEventIds.has(eventId);
                    const currentCount = ev.registeredCount || 0;
                    return {
                        ...ev,
                        isRegistered: isNowRegistered,
                        registeredCount: isNowRegistered ? currentCount + 1 : Math.max(0, currentCount - 1)
                    };
                }
                return ev;
            })
        );
        onRegisterEvent(eventId);
    };

    const tabsContainerRef = React.useRef<HTMLDivElement>(null);
    const tabButtonRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Check scroll position to show/hide left/right indicators and gradient masks
    const checkScrollability = () => {
        if (tabsContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
            setCanScrollLeft(scrollLeft > 6);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
        }
    };

    // Dynamic CSS Mask for smooth fade on overflow sides
    const maskStyle = useMemo(() => {
        if (canScrollLeft && canScrollRight) {
            return {
                maskImage: 'linear-gradient(to right, transparent 0px, black 32px, black calc(100% - 32px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 32px, black calc(100% - 32px), transparent 100%)',
                transition: 'mask-image 0.25s ease, -webkit-mask-image 0.25s ease'
            };
        } else if (canScrollLeft && !canScrollRight) {
            return {
                maskImage: 'linear-gradient(to right, transparent 0px, black 32px, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 32px, black 100%)',
                transition: 'mask-image 0.25s ease, -webkit-mask-image 0.25s ease'
            };
        } else if (!canScrollLeft && canScrollRight) {
            return {
                maskImage: 'linear-gradient(to right, black 0%, black calc(100% - 32px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black calc(100% - 32px), transparent 100%)',
                transition: 'mask-image 0.25s ease, -webkit-mask-image 0.25s ease'
            };
        }
        return {};
    }, [canScrollLeft, canScrollRight]);

    const isProgrammaticScrollRef = React.useRef(false);
    const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const scrollTabs = (direction: 'left' | 'right') => {
        if (tabsContainerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollToSection = (sectionId: string) => {
        setActiveTab(sectionId as TabType);
        isProgrammaticScrollRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            isProgrammaticScrollRef.current = false;
        }, 850);

        if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                // Calculate document position: element.getBoundingClientRect().top + window.scrollY
                const navOffset = 140; // Total height of sticky Header (80px) + Sticky Tab Bar (56px) + breathing space
                const elementPosition = element.getBoundingClientRect().top;
                const currentScroll = window.scrollY || window.pageYOffset || 0;
                const offsetPosition = elementPosition + currentScroll - navOffset;

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });
            }
        }

        // Auto-scroll tab button into view in the horizontal container
        setTimeout(() => {
            const btn = tabButtonRefs.current[sectionId];
            const container = tabsContainerRef.current;
            if (btn && container) {
                const targetScroll = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
                container.scrollTo({
                    left: Math.max(0, targetScroll),
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    // Auto-scroll active tab into view when activeTab updates
    useEffect(() => {
        const btn = tabButtonRefs.current[activeTab];
        const container = tabsContainerRef.current;
        if (btn && container) {
            const targetScroll = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
            container.scrollTo({
                left: Math.max(0, targetScroll),
                behavior: 'smooth'
            });
        }
    }, [activeTab]);

    useEffect(() => {
        const container = tabsContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollability, { passive: true });
            window.addEventListener('resize', checkScrollability, { passive: true });
            checkScrollability();
            // Also run after a brief delay to ensure layout metrics are settled
            const t = setTimeout(checkScrollability, 100);
            return () => {
                container.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
                clearTimeout(t);
            };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isProgrammaticScrollRef.current) return;

            const currentScrollY = window.scrollY || window.pageYOffset || 0;
            if (currentScrollY < 120) {
                setActiveTab('home');
                return;
            }

            const sectionIds: TabType[] = ['home', 'about', 'vision', 'events', 'manifesto', 'history', 'committee', 'gallery', 'message'];

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const id = sectionIds[i];
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the section top has reached or scrolled past the sticky navigation bar area (<= 160px)
                    if (rect.top <= 160) {
                        setActiveTab(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const safeEvents = events || [];
    const safeNotices = notices || [];
    const leadershipList = club.leadership || [];
    const galleryList = club.galleryImages || [];

    // Achievements State with rich cards
    const [achievements, setAchievements] = useState<AchievementCardData[]>(() => {
        if (club.achievementItems && club.achievementItems.length > 0) {
            return club.achievementItems.map((item: { id: any; title: string; description: any; date: any; category: any; badge: any; image: any; }, idx: number) => ({
                id: item.id || `ach-${club.id}-${idx}`,
                title: item.title,
                description: item.description || 'Major impactful milestone organized and delivered by the committee members and executive leadership.',
                date: item.date || (['2023', '2024', '2023', '2024'][idx % 4]),
                category: item.category || (idx === 0 ? 'Business Competition' : idx === 1 ? 'Campus Honor' : idx === 2 ? 'Finance Expo' : 'Academic Contest'),
                badge: item.badge || (idx === 0 ? 'National Champions' : idx === 1 ? 'Management Honor' : idx === 2 ? '1st Place Gold' : 'Overall Champions'),
                image: item.image || getContextualAchievementImage(item.title, idx, club.category)
            }));
        }
        if (club.achievements && club.achievements.length > 0) {
            return club.achievements.map((item, idx) => {
                // FIX 2: Added 'as any' to avoid 'property does not exist on type never' error
                const itemObj = item as any;
                if (typeof itemObj === 'object' && itemObj !== null) {
                    return {
                        id: itemObj.id || `ach-${club.id}-${idx}`,
                        title: itemObj.title,
                        description: itemObj.description || 'Major impactful milestone organized and delivered by the committee members and executive leadership.',
                        date: itemObj.date || (['2023', '2024', '2023', '2024'][idx % 4]),
                        category: itemObj.category || (idx === 0 ? 'Business Competition' : idx === 1 ? 'Campus Honor' : idx === 2 ? 'Finance Expo' : 'Academic Contest'),
                        badge: itemObj.badge || (idx === 0 ? 'National Champions' : idx === 1 ? 'Management Honor' : idx === 2 ? '1st Place Gold' : 'Overall Champions'),
                        image: itemObj.image || getContextualAchievementImage(itemObj.title, idx, club.category)
                    };
                }
                return {
                    id: `ach-${club.id}-${idx}`,
                    title: String(item),
                    description: 'Successfully planned, organized, and executed with high student turnout and institutional recognition.',
                    date: ['2023', '2024', '2023', '2024'][idx % 4],
                    category: idx === 0 ? 'Business Competition' : idx === 1 ? 'Campus Honor' : idx === 2 ? 'Finance Expo' : 'Academic Contest',
                    badge: idx === 0 ? 'National Champions' : idx === 1 ? 'Management Honor' : idx === 2 ? '1st Place Gold' : 'Overall Champions',
                    image: getContextualAchievementImage(String(item), idx, club.category)
                };
            });
        }
        return [
            {
                id: `ach-${club.id}-default-1`,
                title: 'National Management Case Challenge Winners',
                description: 'Student delegation won 1st Place in the All-Nepal Inter-College Business Strategy & Corporate Analysis Challenge.',
                date: '2023',
                category: 'Business Competition',
                badge: 'National Champions',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `ach-${club.id}-default-2`,
                title: 'Best Student Management Circle Award',
                description: 'Recognized by Aadikavi Bhanubhakta Campus for outstanding initiative in financial literacy campaigns and corporate networking seminars.',
                date: '2024',
                category: 'Campus Honor',
                badge: 'Management Honor',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `ach-${club.id}-default-3`,
                title: 'Inter-College Stock Market Trading Champions',
                description: 'Secured top position in virtual NEPSE trading competition by demonstrating superior portfolio yield and risk management.',
                date: '2023',
                category: 'Finance Expo',
                badge: '1st Place Gold',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80'
            },
            {
                id: `ach-${club.id}-default-4`,
                title: 'Inter-Departmental Business Quiz Winners',
                description: 'Emerged overall winners in the Campus Management Quiz, demonstrating exceptional knowledge in economics, taxation, and international trade.',
                date: '2024',
                category: 'Academic Contest',
                badge: 'Overall Champions',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
            }
        ];
    });

    const [showAllAchievements, setShowAllAchievements] = useState(false);
    const [activeAchievementPreview, setActiveAchievementPreview] = useState<AchievementCardData | null>(null);

    const clubAcronym = React.useMemo(() => {
        if (club.acronym) return club.acronym;
        const match = club.name.match(/\b([A-Z]{2,})\b/);
        if (match) return match[1];
        const words = club.name.replace(/[()&]/g, '').split(/\s+/).filter(Boolean);
        if (words.length >= 2) {
            return words.map((w) => w[0]).join('').toUpperCase().slice(0, 4);
        }
        return 'CAMPUS';
    }, [club.name, club.acronym]);

    const extractYear = (dateStr?: string, fallbackIndex = 0) => {
        if (!dateStr) return ['2023', '2024', '2023', '2024'][fallbackIndex % 4];
        const match = dateStr.match(/\b(20\d{2})\b/);
        return match ? match[1] : (['2023', '2024', '2025', '2024'][fallbackIndex % 4]);
    };

    const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 4);

    const clubEvents = safeEvents.filter((e) => e.clubId === club.id);
    const clubNotices = safeNotices.filter((n) => n.clubId === club.id);

    // Defaults for rich fields if not defined explicitly in data
    const defaultVision = club.vision ||
        `To establish ${club.name} as a premier center of student innovation, leadership, and practical excellence at Aadikavi Bhanubhakta Campus, empowering every member through ethical governance, collaborative problem solving, and community advancement.`;

    const defaultMission = club.mission || [
        `Deliver regular hands-on workshops, training bootcamps, and project experience in ${(club.category || '').toLowerCase()}.`,
        'Cultivate an inclusive community where students from all faculties share ideas, build networks, and excel academically.',
        'Organize campus-wide competitions, seminars, and industry connect sessions to bridge academic learning with career opportunities.',
        'Maintain 100% student representation and transparent executive leadership under institutional campus guidance.'
    ];

    const defaultPresidentMessage = {
        senderName: club.presidentMessage?.senderName || club.president || 'President',
        senderRole: club.presidentMessage?.senderRole || `President, ${club.name}`,
        message: club.presidentMessage?.message || `Greetings respected teachers, guests, and fellow students! As the President of ${club.name}, I warmly welcome you to our official committee hub. Our committee was established in ${club.establishedYear || '2018'} with a clear commitment to fostering student potential. Extracurricular engagement is key to holistic personal and professional growth. I invite all passionate scholars of Aadikavi Bhanubhakta Campus to join hands with us, participate in our initiatives, and lead positive change together.`,
        avatarUrl: club.presidentMessage?.avatarUrl || leadershipList.find((m) => m.role === 'President')?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    };

    const presidentLeader = leadershipList.find((m) => m.role.toLowerCase().includes('president') && !m.role.toLowerCase().includes('vice')) || leadershipList.find((m) => m.role.toLowerCase().includes('president'));
    const presidentEmail = presidentLeader?.email || club.contactEmail || 'subash.giri@student.abcampus.edu.np';
    const presidentRawPhone = presidentLeader?.phone || '+977 9804126359';
    const presidentCleanPhone = presidentRawPhone.replace(/\D/g, '').startsWith('977')
        ? presidentRawPhone.replace(/\D/g, '')
        : `977${presidentRawPhone.replace(/\D/g, '').replace(/^0+/, '')}`;

    const defaultAdvisorMessage = {
        senderName: club.advisorMessage?.senderName || club.facultyAdvisor || 'Faculty Advisor',
        senderRole: club.advisorMessage?.senderRole || `Faculty Advisor, ${club.name}`,
        message: club.advisorMessage?.message || `At Aadikavi Bhanubhakta Campus, student committees form the heartbeat of experiential learning. ${club.name} has consistently demonstrated excellence in organizing high-impact academic and extracurricular initiatives. As faculty advisor, I take pride in mentoring our dedicated executive board and encourage every student to actively participate in this vibrant platform.`,
        avatarUrl: club.advisorMessage?.avatarUrl || leadershipList.find((m) => m.role === 'Faculty Advisor')?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    };

    const defaultManifesto = {
        title: club.manifesto?.title || `Official Action Manifesto & Code of Conduct (${club.establishedYear || 'N/A'} - Present)`,
        points: club.manifesto?.points || [
            'Equal Opportunity & Inclusive Access: Every student enrolled at ABC Campus has an equal right to join and participate in all committee activities without discrimination.',
            'Skill Enhancement & Practical Mastery: Organizing regular skill-building workshops, bootcamps, and competitions per academic calendar.',
            'Financial Transparency & Integrity: Maintaining audited, transparent accounts of all committee funds under campus administration guidelines.',
            'Student Welfare First: Representing student interests, academic concerns, and career advancement at every level.',
            'Community & Eco Responsibility: Contributing actively to campus green initiatives, social service drives, and community outreach in Tanahun district.'
        ]
    };

    const defaultHistory = club.history ||
        `${club.name} was formally established in ${club.establishedYear || '2018'} under the guidance of Aadikavi Bhanubhakta Campus administration and student pioneers. Over the years, the committee has grown from a small group of enthusiastic students into an active hub of ${club.memberCount || 0}+ members. Recognized for its consistency and academic contribution, the committee continues to hold annual elections, organize flagship regional events, and nurture future leaders.`;

    const tabs: { id: TabType; labelEn: string; labelNp: string; icon: React.ReactNode }[] = [
        { id: 'home', labelEn: 'Overview', labelNp: 'परिचय', icon: <Building2 className="w-4 h-4" /> },
        { id: 'about', labelEn: 'About', labelNp: 'बारेमा', icon: <FileText className="w-4 h-4" /> },
        { id: 'vision', labelEn: 'Vision', labelNp: 'दृष्टिकोण', icon: <Target className="w-4 h-4" /> },
        { id: 'events', labelEn: 'Upcoming Events', labelNp: 'आगामी कार्यक्रमहरू', icon: <Calendar className="w-4 h-4" /> },
        { id: 'manifesto', labelEn: 'Manifesto', labelNp: 'घोषणापत्र', icon: <ShieldCheck className="w-4 h-4" /> },
        { id: 'history', labelEn: 'History', labelNp: 'इतिहास', icon: <History className="w-4 h-4" /> },
        { id: 'committee', labelEn: 'Committee', labelNp: 'कार्यसमिति', icon: <Users className="w-4 h-4" /> },
        { id: 'gallery', labelEn: 'Gallery', labelNp: 'ग्यालेरी', icon: <ImageIcon className="w-4 h-4" /> },
        { id: 'message', labelEn: 'Message & Contact', labelNp: 'सन्देश तथा सम्पर्क', icon: <Quote className="w-4 h-4" /> }
    ];

    const handleJoinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setJoinSubmitted(true);
        setTimeout(() => {
            setJoinSubmitted(false);
            setIsJoinModalOpen(false);
            onApplyJoin(club.id);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#eef2f7] text-[#1b1b1e] font-quicksand pb-20 animate-in fade-in duration-300">
            {/* Hero Banner Section (Clean Academic Neumorphic Aesthetic) */}
            <section className="relative bg-[#eef2f7] text-[#1b1b1e] pt-6 sm:pt-10 pb-8 sm:pb-12 border-b border-slate-300/60 overflow-hidden">
                {/* Ambient Subtle Glows */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">

                        {/* Committee Official Logo Badge */}
                        <div className="relative shrink-0 flex flex-col items-center">
                            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#eef2f7] p-2 flex items-center justify-center shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] border border-white/90 group transition-all duration-300">
                                <div className="w-full h-full rounded-full bg-white p-1.5 flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] overflow-hidden">
                                    <img
                                        src={club.logo}
                                        alt={club.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Committee Metadata & Description */}
                        <div className="flex-1 text-center md:text-left space-y-3 w-full">

                            {/* Badges Row - Unified, cleanly aligned */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                {club.featured && (
                                    <span className="bg-[#eef2f7] text-[#0c72b8] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80 inline-flex items-center gap-1.5">
                                        <Sparkles className="w-3 h-3 text-[#0c72b8]" />
                                        <span>Featured</span>
                                    </span>
                                )}
                                <span className="bg-[#eef2f7] text-[#0c72b8] text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80">
                                    {club.category}
                                </span>
                                {club.establishedYear && (
                                    <span className="text-[11px] font-semibold text-slate-500 bg-[#eef2f7] px-3 py-1 rounded-full shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80">
                                        Est. {club.establishedYear}
                                    </span>
                                )}
                            </div>

                            {/* Committee Main Title */}
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-poppins leading-tight tracking-tight">
                                    {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                                </h1>
                                {club.nepaliName && language === 'en' && (
                                    <p className="text-sm sm:text-base text-[#800000] font-semibold font-poppins mt-1">
                                        {club.nepaliName}
                                    </p>
                                )}
                            </div>

                            {/* Detailed Description */}
                            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-normal mx-auto md:mx-0">
                                {club.description}
                            </p>

                            {/* Key Location Information */}
                            {club.roomLocation && (
                                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 text-xs text-slate-700 max-w-2xl mx-auto md:mx-0">
                                    <div className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 bg-white/70 sm:bg-[#eef2f7] border border-white/90 rounded-xl shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                                        <MapPin className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                        <span className="font-medium text-slate-800 text-center sm:text-left">{club.roomLocation}</span>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </section>

            {/* Sticky Quick-Navigation Bar - Smooth Anchor Navigation */}
            <div className="bg-[#eef2f7]/95 border-b border-slate-200/70 sticky top-20 z-30 shadow-[0_4px_12px_rgba(209,217,230,0.5)] backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-1.5 sm:py-2">

                    {/* Horizontal Scroll Bar with Left/Right Chevrons & Smooth Mask Fade */}
                    <div className="relative flex items-center">
                        {/* Left Scroll Chevron (Shows if scrolled) */}
                        {canScrollLeft && (
                            <button
                                onClick={() => scrollTabs('left')}
                                className="hidden sm:flex absolute left-0 z-20 w-7 h-7 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-[0_2px_8px_rgba(0,0,0,0.12)] items-center justify-center -ml-1 border border-slate-200 transition-transform active:scale-95 cursor-pointer"
                                aria-label="Scroll tabs left"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                        )}

                        {/* Tab Buttons Container with dynamic CSS edge mask */}
                        <div
                            ref={tabsContainerRef}
                            style={maskStyle}
                            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1.5 sm:py-2 px-3 sm:px-4 scroll-smooth w-full"
                        >
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        // FIX 3: Wrapped assignment in braces to ensure callback returns void
                                        ref={(el) => { tabButtonRefs.current[tab.id] = el; }}
                                        onClick={() => scrollToSection(tab.id)}
                                        className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 border ${isActive
                                            ? 'bg-[#0c72b8] text-white shadow-[0_4px_12px_rgba(12,114,184,0.35)] border-[#0c72b8]'
                                            : 'bg-[#eef2f7] text-slate-700 hover:text-slate-900 shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[4px_4px_10px_#c8d2e2,-4px_-4px_10px_#ffffff] active:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border-white/80'
                                            }`}
                                    >
                                        {tab.icon}
                                        <span>{language === 'en' ? tab.labelEn : tab.labelNp}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Scroll Chevron */}
                        {canScrollRight && (
                            <button
                                onClick={() => scrollTabs('right')}
                                className="hidden sm:flex absolute right-0 z-20 w-7 h-7 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-[0_2px_8px_rgba(0,0,0,0.12)] items-center justify-center -mr-1 border border-slate-200 transition-transform active:scale-95 cursor-pointer"
                                aria-label="Scroll tabs right"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                </div>
            </div>

            {/* Main Continuous Single-Page Body */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12 sm:space-y-16">

                {/* 1. OVERVIEW / HOME SECTION */}
                <motion.section
                    id="home"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-8 scroll-mt-36"
                >
                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
                        <div className="bg-[#eef2f7] rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#c8d2e2,-6px_-6px_14px_#ffffff] flex items-center gap-3.5 transition-all group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shrink-0 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-slate-200/40 group-hover:scale-105 transition-all">
                                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                    Active Members
                                </span>
                                <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight">
                                    {club.memberCount}+
                                </h3>
                                <p className="text-[11px] sm:text-xs text-emerald-600 font-bold">Enrolled & Active</p>
                            </div>
                        </div>

                        <div className="bg-[#eef2f7] rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#c8d2e2,-6px_-6px_14px_#ffffff] flex items-center gap-3.5 transition-all group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#eef2f7] text-amber-700 flex items-center justify-center shrink-0 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-slate-200/40 group-hover:scale-105 transition-all">
                                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                    Faculty Advisor
                                </span>
                                <h3 className="font-bold text-sm sm:text-base text-slate-900 font-poppins tracking-tight leading-snug">
                                    {club.facultyAdvisor}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#0c72b8] font-bold">Academic Mentorship</p>
                            </div>
                        </div>

                        <div className="bg-[#eef2f7] rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#c8d2e2,-6px_-6px_14px_#ffffff] flex items-center gap-3.5 transition-all group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#eef2f7] text-purple-700 flex items-center justify-center shrink-0 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-slate-200/40 group-hover:scale-105 transition-all">
                                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                    President
                                </span>
                                <h3 className="font-bold text-sm sm:text-base text-slate-900 font-poppins tracking-tight leading-snug">
                                    {club.president}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#800000] font-bold">Student Leader</p>
                            </div>
                        </div>

                        <div className="bg-[#eef2f7] rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#c8d2e2,-6px_-6px_14px_#ffffff] flex items-center gap-3.5 transition-all group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#eef2f7] text-emerald-700 flex items-center justify-center shrink-0 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-slate-200/40 group-hover:scale-105 transition-all">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                    Official Contact
                                </span>
                                <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-poppins tracking-tight break-all">
                                    {club.contactEmail}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Campus Mailbox</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview & President Message Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="neu-card p-5 sm:p-8 space-y-4.5">
                                <div className="flex items-start sm:items-center gap-3">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shrink-0 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 mt-0.5 sm:mt-0">
                                        <Building2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-poppins leading-snug flex-1">
                                        Welcome to {club.name}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                                    {club.description}
                                </p>

                                <div className="pt-3.5 border-t border-slate-300/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="px-4 py-2.5 bg-[#eef2f7] hover:bg-white text-[#0c72b8] text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[4px_4px_10px_#c8d2e2,-4px_-4px_10px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 flex items-center justify-between sm:justify-center gap-2"
                                    >
                                        <span>Read Full Profile</span>
                                        <ChevronRight className="w-4 h-4 text-[#0c72b8]" />
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('vision')}
                                        className="px-4 py-2.5 bg-[#eef2f7] hover:bg-white text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[4px_4px_10px_#c8d2e2,-4px_-4px_10px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 flex items-center justify-between sm:justify-center gap-2"
                                    >
                                        <span>View Vision & Mission</span>
                                        <ChevronRight className="w-4 h-4 text-slate-500" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="neu-card p-6 space-y-4 relative overflow-hidden">
                                <Quote className="w-16 h-16 text-slate-300/40 absolute -top-2 -right-2 pointer-events-none" />

                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c72b8]">
                                    <Quote className="w-4 h-4" />
                                    <span>President's Corner</span>
                                </div>

                                <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed line-clamp-4 relative z-10">
                                    "{defaultPresidentMessage.message}"
                                </p>

                                <div className="pt-3 border-t border-slate-300/40 flex items-center gap-3 relative z-10">
                                    <img
                                        src={defaultPresidentMessage.avatarUrl}
                                        alt={defaultPresidentMessage.senderName}
                                        referrerPolicy="no-referrer"
                                        className="w-11 h-11 rounded-full object-cover border-2 border-[#0c72b8] shadow-xs"
                                    />
                                    <div className="min-w-0">
                                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{defaultPresidentMessage.senderName}</h5>
                                        <p className="text-[11px] text-slate-500 truncate">{defaultPresidentMessage.senderRole}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => scrollToSection('message')}
                                    className="w-full mt-2 py-2 px-3 bg-[#eef2f7] hover:bg-white text-[#0c72b8] font-bold text-xs rounded-xl cursor-pointer transition-all shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[4px_4px_10px_#c8d2e2,-4px_-4px_10px_#ffffff] border border-white/80"
                                >
                                    Read Full Official Messages →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Key Achievements & Campus Impact */}
                    <div className="space-y-6 w-full pt-2">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2">
                            <div>
                                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#b91c1c] mb-1">
                                    <Sparkles className="w-3.5 h-3.5 text-[#b91c1c]" />
                                    <span>HONORS & EXCELLENCE</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                    {club.name} Achievements
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium sm:text-right">
                                Celebrating key milestones of {clubAcronym} & {club.category || 'Department'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {displayedAchievements.map((ach, idx) => {
                                const year = extractYear(ach.date, idx);
                                const categoryTag = ach.category || (idx === 0 ? 'Business Competition' : idx === 1 ? 'Campus Honor' : idx === 2 ? 'Finance Expo' : 'Academic Contest');
                                const awardBadge = ach.badge || (idx === 0 ? 'National Champions' : idx === 1 ? 'Management Honor' : idx === 2 ? '1st Place Gold' : 'Overall Champions');

                                return (
                                    <div
                                        key={ach.id}
                                        onClick={() => setActiveAchievementPreview(ach)}
                                        className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 border border-slate-200/90 shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff] hover:shadow-[6px_6px_16px_#c8d2e2,-6px_-6px_16px_#ffffff] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-amber-800 bg-amber-50/90 border border-amber-200/80">
                                                    {year}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-blue-700 bg-blue-50/90 border border-blue-200/70 truncate max-w-[65%]">
                                                    {categoryTag}
                                                </span>
                                            </div>

                                            <div className="relative w-full h-36 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner bg-slate-100 mb-3.5">
                                                <img
                                                    src={ach.image}
                                                    alt={ach.title}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100">
                                                    {idx % 2 === 0 ? (
                                                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                                                    ) : (
                                                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                                                    )}
                                                </div>
                                            </div>

                                            <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 font-poppins leading-snug group-hover:text-[#0c72b8] transition-colors line-clamp-2">
                                                {ach.title}
                                            </h4>

                                            {ach.description && (
                                                <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                                                    {ach.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="pt-3 mt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 truncate min-w-0">
                                                {idx % 2 === 0 ? (
                                                    <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                ) : (
                                                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                )}
                                                <span className="truncate">{awardBadge}</span>
                                            </div>

                                            <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0c72b8] uppercase tracking-wider shrink-0">
                                                {clubAcronym} HONOR
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {achievements.length > 4 && (
                            <div className="flex justify-center pt-2">
                                <button
                                    onClick={() => setShowAllAchievements((prev) => !prev)}
                                    className="px-6 py-3 bg-[#eef2f7] hover:bg-white text-slate-800 hover:text-[#0c72b8] text-xs sm:text-sm font-bold rounded-2xl shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#c8d2e2,-6px_-6px_14px_#ffffff] border border-white/80 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                                >
                                    {showAllAchievements ? (
                                        <>
                                            <span>Show Less Achievements</span>
                                            <ChevronUp className="w-4 h-4 text-[#0c72b8]" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Show More ({achievements.length - 4} More Achievements)</span>
                                            <ChevronDown className="w-4 h-4 text-[#0c72b8]" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* 2. ABOUT PROFILE SECTION */}
                <motion.section
                    id="about"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-[#eef2f7] rounded-3xl p-6 sm:p-10 space-y-8 shadow-[7px_7px_18px_#d1d9e6,-7px_-7px_18px_#ffffff] border border-white/80 scroll-mt-36"
                >
                    <div>
                        <span className="bg-[#eef2f7] text-[#0c72b8] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] border border-white/80 inline-block">
                            Committee Profile & Operational Base
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins mt-3.5 tracking-tight">
                            About {club.name}
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {club.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-300/40">
                        <div className="p-5 bg-[#eef2f7] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] space-y-2">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#eef2f7] flex items-center justify-center shadow-[inset_1.5px_1.5px_3px_#d1d9e6,inset_-1.5px_-1.5px_3px_#ffffff]">
                                    <MapPin className="w-3.5 h-3.5 text-[#0c72b8]" />
                                </div>
                                <span>Room Location & Campus Base</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 pl-9">{club.roomLocation}</p>
                        </div>

                        <div className="p-5 bg-[#eef2f7] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] space-y-2">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#eef2f7] flex items-center justify-center shadow-[inset_1.5px_1.5px_3px_#d1d9e6,inset_-1.5px_-1.5px_3px_#ffffff]">
                                    <Clock className="w-3.5 h-3.5 text-[#800000]" />
                                </div>
                                <span>Regular Meeting Schedule</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 pl-9">{club.meetingSchedule}</p>
                        </div>

                        <div className="p-5 bg-[#eef2f7] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] space-y-2">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#eef2f7] flex items-center justify-center shadow-[inset_1.5px_1.5px_3px_#d1d9e6,inset_-1.5px_-1.5px_3px_#ffffff]">
                                    <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span>Affiliated Faculty</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 pl-9">{club.facultyAdvisor} (Advisor)</p>
                        </div>

                        <div className="p-5 bg-[#eef2f7] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] space-y-2">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#eef2f7] flex items-center justify-center shadow-[inset_1.5px_1.5px_3px_#d1d9e6,inset_-1.5px_-1.5px_3px_#ffffff]">
                                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                                </div>
                                <span>Official Correspondence</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 pl-9">{club.contactEmail}</p>
                        </div>
                    </div>
                </motion.section>

                {/* 3. VISION & MISSION SECTION */}
                <motion.section
                    id="vision"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 scroll-mt-36"
                >
                    <div className="bg-[#eef2f7] rounded-3xl p-6 sm:p-8 space-y-5 border border-white/80 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#c8d2e2,-8px_-8px_20px_#ffffff] transition-all flex flex-col justify-between group">
                        <div className="space-y-4">
                            <div className="w-13 h-13 rounded-2xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shadow-[inset_2.5px_2.5px_5px_#d1d9e6,inset_-2.5px_-2.5px_5px_#ffffff] border border-slate-200/50 shrink-0 group-hover:scale-105 transition-transform">
                                <Eye className="w-6 h-6" />
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                    Our Vision <span className="text-slate-400 font-normal">|</span> <span className="text-[#0c72b8]">हाम्रो दृष्टि</span>
                                </h2>
                            </div>

                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                                {defaultVision}
                            </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-2xl bg-[#eef2f7] text-slate-700 text-xs sm:text-sm leading-relaxed italic shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50 mt-4">
                            "राष्ट्रलाई प्रगति र समानताको दिशामा डोऱ्याउने विश्वव्यापी रूपमा सक्षम, सामाजिक रूपमा जिम्मेवार र शैक्षिक रूपमा उत्कृष्ट विद्यार्थी समुदाय निर्माण गर्ने।"
                        </div>
                    </div>

                    <div className="bg-[#eef2f7] rounded-3xl p-6 sm:p-8 space-y-5 border border-white/80 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#c8d2e2,-8px_-8px_20px_#ffffff] transition-all flex flex-col justify-between group">
                        <div className="space-y-4">
                            <div className="w-13 h-13 rounded-2xl bg-[#eef2f7] text-[#d90429] flex items-center justify-center shadow-[inset_2.5px_2.5px_5px_#d1d9e6,inset_-2.5px_-2.5px_5px_#ffffff] border border-slate-200/50 shrink-0 group-hover:scale-105 transition-transform">
                                <Zap className="w-6 h-6 fill-current" />
                            </div>

                            <div>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                    Our Mission <span className="text-slate-400 font-normal">|</span> <span className="text-[#d90429]">हाम्रो लक्ष्य</span>
                                </h2>
                            </div>

                            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed font-normal">
                                {defaultMission.map((m, mi) => (
                                    <li key={mi} className="flex items-start gap-2">
                                        <span className="text-[#d90429] font-bold mt-0.5">•</span>
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 sm:p-5 rounded-2xl bg-[#eef2f7] text-slate-700 text-xs sm:text-sm leading-relaxed italic shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50 mt-4">
                            "विद्यार्थीका आवाजहरूका लागि गतिशील मञ्च प्रदान गर्ने, गुणस्तरीय शिक्षामा पहुँच सुनिश्चित गर्ने, नेतृत्व सीपहरू विकास गर्ने र अर्थपूर्ण सामुदायिक सेवामा संलग्न हुने।"
                        </div>
                    </div>
                </motion.section>

                {/* 4. UPCOMING EVENTS SECTION */}
                <motion.section
                    id="events"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-6 scroll-mt-36"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <div>
                            <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c72b8] mb-1">
                                <Calendar className="w-3.5 h-3.5 text-[#0c72b8]" />
                                <span>UPCOMING ACTIVITIES & SESSIONS</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                Upcoming Events & Workshops ({clubEventsList.length})
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium sm:text-right">
                            Participate in upcoming programs, hackathons, and seminars organized by {clubAcronym}
                        </p>
                    </div>

                    {clubEventsList.length === 0 ? (
                        <div className="bg-[#eef2f7] rounded-3xl p-12 text-center shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50">
                            <Calendar className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-500 font-medium">No upcoming events scheduled right now for this committee.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {clubEventsList.map((evt) => {
                                return (
                                    <div
                                        key={evt.id}
                                        className="group bg-[#eef2f7] rounded-3xl p-5 border border-white/80 shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#c8d2e2,-8px_-8px_18px_#ffffff] transition-all flex flex-col justify-between hover:-translate-y-1"
                                    >
                                        <div>
                                            {/* Image Banner with Badges */}
                                            <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-200 mb-4 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                                                <img
                                                    src={evt.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                                                    alt={evt.title}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0c72b8] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md border border-slate-100">
                                                    {evt.category}
                                                </div>
                                                <div className="absolute top-3 right-3 bg-[#800000] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{evt.date}</span>
                                                </div>
                                            </div>

                                            {/* Time & Venue Indicators */}
                                            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-slate-600 mb-2.5">
                                                <div className="flex items-center gap-1 font-medium">
                                                    <Clock className="w-3.5 h-3.5 text-[#800000] shrink-0" />
                                                    <span>{evt.time}</span>
                                                </div>
                                                <div className="flex items-center gap-1 font-medium truncate">
                                                    <MapPin className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                                                    <span className="truncate">{evt.venue}</span>
                                                </div>
                                            </div>

                                            {/* Event Title */}
                                            <h4 className="text-base font-bold text-slate-900 font-poppins leading-snug group-hover:text-[#0c72b8] transition-colors line-clamp-2 mb-2">
                                                {evt.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                                                {evt.description}
                                            </p>
                                        </div>

                                        {/* Interactive Actions */}
                                        <div className="pt-3 border-t border-slate-300/40">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedEventForModal(evt)}
                                                className="w-full py-2.5 px-4 bg-[#eef2f7] hover:bg-white text-slate-800 hover:text-[#0c72b8] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[5px_5px_12px_#c8d2e2,-5px_-5px_12px_#ffffff] border border-white/80 cursor-pointer flex items-center justify-center gap-2 group/btn"
                                            >
                                                <Info className="w-4 h-4 text-[#0c72b8] group-hover/btn:scale-110 transition-transform" />
                                                <span>View Details</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </motion.section>

                {/* 6. GOVERNANCE MANIFESTO SECTION */}
                <motion.section
                    id="manifesto"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-[#eef2f7] rounded-3xl p-6 sm:p-8 space-y-6 shadow-[7px_7px_18px_#d1d9e6,-7px_-7px_18px_#ffffff] border border-white/80 scroll-mt-36"
                >
                    <div className="flex items-center gap-3.5 border-b border-slate-300/40 pb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/40 shrink-0">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                {defaultManifesto.title}
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Official Student Governance Commitment</p>
                        </div>
                    </div>

                    <div className="space-y-3.5">
                        {defaultManifesto.points.map((pt, idx) => (
                            <div key={idx} className="p-4 sm:p-4.5 bg-[#eef2f7] rounded-2xl border border-white/80 shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] flex items-start gap-3.5">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{pt}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 7. HISTORY & HERITAGE SECTION */}
                <motion.section
                    id="history"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-[#eef2f7] rounded-3xl p-6 sm:p-8 space-y-6 shadow-[7px_7px_18px_#d1d9e6,-7px_-7px_18px_#ffffff] border border-white/80 scroll-mt-36"
                >
                    <div className="flex items-center gap-3.5 border-b border-slate-300/40 pb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/40 shrink-0">
                            <History className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                Historical Background & Evolution
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Est. {club.establishedYear} • Aadikavi Bhanubhakta Campus</p>
                        </div>
                    </div>

                    <div className="p-6 sm:p-7 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {defaultHistory}
                        </p>
                    </div>
                </motion.section>

                {/* 8. EXECUTIVE LEADERSHIP COMMITTEE SECTION */}
                <motion.section
                    id="committee"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-6 scroll-mt-36"
                >
                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                            Executive Leadership Board ({leadershipList.length})
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Elected officers and faculty advisors steering {club.name}
                        </p>
                    </div>

                    {leadershipList.length === 0 ? (
                        <div className="bg-[#eef2f7] rounded-3xl p-12 text-center shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50">
                            <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-500 font-medium">No executive leadership records listed yet for this committee.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {leadershipList.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-[#eef2f7] rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#c8d2e2,-8px_-8px_18px_#ffffff] border border-white/80 transition-all hover:-translate-y-1"
                                >
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-15 h-15 rounded-full bg-[#eef2f7] p-1 flex items-center justify-center shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/90 shrink-0">
                                                <img
                                                    src={member.avatarUrl}
                                                    alt={member.name}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <span className="bg-[#eef2f7] text-[#0c72b8] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff] border border-white/80">
                                                    {member.role}
                                                </span>
                                                <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">{member.name}</h4>
                                                <p className="text-xs text-slate-500 truncate">{member.department}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-300/40">
                                        {member.phone ? (
                                            <a
                                                href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                                className="w-full flex items-center justify-between px-3 py-2 bg-white/70 hover:bg-white text-slate-700 hover:text-[#0c72b8] rounded-xl text-xs font-bold transition-all border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] hover:shadow-[3px_3px_8px_#c8d2e2,-3px_-3px_8px_#ffffff] group/call cursor-pointer"
                                                title={`Call ${member.name} (${member.phone})`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover/call:bg-blue-50 group-hover/call:text-[#0c72b8] transition-colors">
                                                        <Phone className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="font-semibold text-slate-800 group-hover/call:text-[#0c72b8] transition-colors">
                                                        {member.phone}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded-full group-hover/call:bg-blue-50 group-hover/call:text-[#0c72b8] transition-colors">
                                                    Call
                                                </span>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-2 text-xs text-slate-400 py-1">
                                                <Phone className="w-3.5 h-3.5" />
                                                <span>Phone not available</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.section>

                {/* 9. PHOTO GALLERY SECTION */}
                <motion.section
                    id="gallery"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-6 scroll-mt-36"
                >
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 font-poppins">
                            Photo Gallery & Activity Moments
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">Highlights from workshops, events, and campus drives</p>
                    </div>

                    {galleryList.length === 0 ? (
                        <div className="neu-card p-12 text-center border-dashed border-2 border-slate-300">
                            <ImageIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-500 font-medium">No activity photo gallery available yet for this committee.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                            {galleryList.map((imgUrl, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedGalleryImg(imgUrl)}
                                    className="neu-card overflow-hidden h-56 cursor-pointer group relative p-1.5"
                                >
                                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                                        <img
                                            src={imgUrl}
                                            alt={`Activity photo ${idx + 1}`}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-2xs">
                                            <Eye className="w-4 h-4" /> View Full Image
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Lightbox Modal */}
                    {selectedGalleryImg && (
                        <div
                            onClick={() => setSelectedGalleryImg(null)}
                            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer backdrop-blur-xs animate-in fade-in"
                        >
                            <div className="max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900">
                                <img src={selectedGalleryImg} alt="Enlarged gallery view" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    )}
                </motion.section>

                {/* 9. MESSAGES FROM LEADERSHIP & COMPOSE DISPATCH SECTION (END OF PAGE) */}
                <motion.section
                    id="message"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-8 scroll-mt-36 pt-4"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <div>
                            <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c72b8] mb-1">
                                <Quote className="w-3.5 h-3.5 text-[#0c72b8]" />
                                <span>LEADERSHIP VOICE & STUDENT DISPATCH</span>
                            </div>
                            <h2 className="text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                Messages & Direct Contact Hub
                            </h2>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                            Official addresses and direct message channel for {club.name}
                        </p>
                    </div>

                    {/* Leadership Statements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                        {/* President Message Card */}
                        <div className="bg-[#eef2f7] rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#c8d2e2,-8px_-8px_20px_#ffffff] border border-white/80 transition-all flex flex-col justify-between group overflow-hidden">
                            <div className="space-y-4 flex-1 flex flex-col">
                                <div className="flex items-start gap-3.5 sm:gap-4 pb-4 border-b border-slate-300/50">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef2f7] p-1 flex items-center justify-center shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] border border-white/90 shrink-0 group-hover:scale-105 transition-transform">
                                        <div className="w-full h-full rounded-full bg-[#eef2f7] p-0.5 flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                                            <img
                                                src={defaultPresidentMessage.avatarUrl}
                                                alt={defaultPresidentMessage.senderName}
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <span className="bg-[#eef2f7] text-[#0c72b8] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80 inline-flex items-center gap-1.5 mb-1.5">
                                            <Award className="w-3 h-3 text-[#0c72b8] shrink-0" />
                                            <span className="truncate">Executive Student Leadership</span>
                                        </span>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 font-poppins tracking-tight leading-snug">
                                            Message from the President
                                        </h3>
                                        <p className="text-xs sm:text-sm font-bold text-[#0c72b8] mt-0.5 truncate">{defaultPresidentMessage.senderName}</p>
                                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">{defaultPresidentMessage.senderRole}</p>
                                    </div>
                                </div>

                                <div className="relative bg-[#eef2f7] p-4 sm:p-5 lg:p-6 rounded-2xl shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50 overflow-hidden flex-1 flex flex-col justify-center">
                                    <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-[#0c72b8]/10 absolute -right-2 -bottom-2 pointer-events-none" />
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal relative z-10">
                                        "{defaultPresidentMessage.message}"
                                    </p>
                                </div>

                                {/* President Direct Contact Triggers - Responsive for Tablet & Mobile */}
                                <div className="pt-2 grid grid-cols-1 xl:grid-cols-2 gap-2.5 w-full">
                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(presidentEmail)}&su=${encodeURIComponent(`[${club.name}] Inquiry for President ${defaultPresidentMessage.senderName}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#eef2f7] hover:bg-red-50 text-red-600 hover:text-red-700 text-xs font-bold shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all cursor-pointer text-center"
                                    >
                                        <Mail className="w-4 h-4 text-[#e50000] shrink-0" />
                                        <span className="truncate">Gmail President</span>
                                    </a>
                                    <a
                                        href={`https://wa.me/${presidentCleanPhone}?text=${encodeURIComponent(`Hello President ${defaultPresidentMessage.senderName}, I am contacting you from ${club.name} campus portal.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#eef2f7] hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 text-xs font-bold shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all cursor-pointer text-center"
                                    >
                                        <Send className="w-4 h-4 text-[#00a86b] rotate-45 shrink-0 -mt-0.5" />
                                        <span className="truncate">WhatsApp President</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Faculty Advisor Message Card */}
                        <div className="bg-[#eef2f7] rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#c8d2e2,-8px_-8px_20px_#ffffff] border border-white/80 transition-all flex flex-col justify-between group overflow-hidden">
                            <div className="space-y-4 flex-1 flex flex-col">
                                <div className="flex items-start gap-3.5 sm:gap-4 pb-4 border-b border-slate-300/50">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef2f7] p-1 flex items-center justify-center shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] border border-white/90 shrink-0 group-hover:scale-105 transition-transform">
                                        <div className="w-full h-full rounded-full bg-[#eef2f7] p-0.5 flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                                            <img
                                                src={defaultAdvisorMessage.avatarUrl}
                                                alt={defaultAdvisorMessage.senderName}
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <span className="bg-[#eef2f7] text-[#800000] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80 inline-flex items-center gap-1.5 mb-1.5">
                                            <GraduationCap className="w-3 h-3 text-[#800000] shrink-0" />
                                            <span className="truncate">Faculty Mentorship Guidance</span>
                                        </span>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 font-poppins tracking-tight leading-snug">
                                            Message from Faculty Advisor
                                        </h3>
                                        <p className="text-xs sm:text-sm font-bold text-[#800000] mt-0.5 truncate">{defaultAdvisorMessage.senderRole}</p>
                                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">{defaultAdvisorMessage.senderName}</p>
                                    </div>
                                </div>

                                <div className="relative bg-[#eef2f7] p-4 sm:p-5 lg:p-6 rounded-2xl shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-slate-200/50 overflow-hidden flex-1 flex flex-col justify-center">
                                    <Quote className="w-14 h-14 sm:w-16 sm:h-16 text-[#800000]/10 absolute -right-2 -bottom-2 pointer-events-none" />
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal relative z-10">
                                        "{defaultAdvisorMessage.message}"
                                    </p>
                                </div>

                                {/* Faculty Advisor Correspondence Badge */}
                                <div className="pt-2 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#eef2f7] border border-white/80 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] text-xs text-slate-600">
                                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                                        <GraduationCap className="w-4 h-4 text-[#800000]" />
                                        Academic Supervision
                                    </span>
                                    <span className="text-[11px] text-slate-500 font-medium">Aadikavi Bhanubhakta Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Student Compose Message / Suggestion Box */}
                    <div className="pt-2">
                        <SuggestionMessageBox
                            club={club}
                            language={language}
                        />
                    </div>
                </motion.section>

            </main>

            {/* Interactive Join Committee Modal */}
            {isJoinModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
                    <div className="bg-[#eef2f7] w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
                        <button
                            onClick={() => setIsJoinModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0c72b8] flex items-center justify-center shrink-0">
                                <UserPlus className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 font-poppins">
                                    Join {club.name}
                                </h3>
                                <p className="text-xs text-slate-500">Official Student Committee Application</p>
                            </div>
                        </div>

                        {joinSubmitted ? (
                            <div className="py-8 text-center space-y-3">
                                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h4 className="text-base font-bold text-slate-900">Application Submitted Successfully!</h4>
                                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                                    Your membership request has been dispatched to {club.president} and Faculty Advisor {club.facultyAdvisor}.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleJoinSubmit} className="space-y-3.5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={joinFormData.name}
                                        onChange={(e) => setJoinFormData({ ...joinFormData, name: e.target.value })}
                                        placeholder="e.g. Ramesh Poudel"
                                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Roll / Campus ID</label>
                                        <input
                                            type="text"
                                            required
                                            value={joinFormData.rollNo}
                                            onChange={(e) => setJoinFormData({ ...joinFormData, rollNo: e.target.value })}
                                            placeholder="e.g. BIM-2024-04"
                                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Faculty / Program</label>
                                        <select
                                            value={joinFormData.faculty}
                                            onChange={(e) => setJoinFormData({ ...joinFormData, faculty: e.target.value })}
                                            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                        >
                                            <option>BIM / CSIT</option>
                                            <option>BBA / Management</option>
                                            <option>B.Ed / Education</option>
                                            <option>BA / Humanities</option>
                                            <option>MBS / Master's</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={joinFormData.email}
                                            onChange={(e) => setJoinFormData({ ...joinFormData, email: e.target.value })}
                                            placeholder="student@abcampus.edu.np"
                                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            value={joinFormData.phone}
                                            onChange={(e) => setJoinFormData({ ...joinFormData, phone: e.target.value })}
                                            placeholder="98XXXXXXXX"
                                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Why do you wish to join?</label>
                                    <textarea
                                        rows={2}
                                        value={joinFormData.reason}
                                        onChange={(e) => setJoinFormData({ ...joinFormData, reason: e.target.value })}
                                        placeholder="Briefly state your interests, skills, or expectations..."
                                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c72b8]"
                                    />
                                </div>

                                <div className="pt-2 flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsJoinModalOpen(false)}
                                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 neu-button-primary text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>Submit Application</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Modal: Full-size Achievement Image Lightbox */}
            {activeAchievementPreview && (
                <div
                    onClick={() => setActiveAchievementPreview(null)}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer backdrop-blur-xs animate-in fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#eef2f7] border border-white/80"
                    >
                        <div className="relative w-full h-80 sm:h-96 bg-slate-900">
                            <img
                                src={activeAchievementPreview.image}
                                alt={activeAchievementPreview.title}
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setActiveAchievementPreview(null)}
                                className="absolute top-4 right-4 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 sm:p-8 space-y-2 bg-[#eef2f7]">
                            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#0c72b8]">
                                <span>{activeAchievementPreview.category}</span>
                                <span>•</span>
                                <span>{activeAchievementPreview.date}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-poppins">
                                {activeAchievementPreview.title}
                            </h3>
                            {activeAchievementPreview.description && (
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                    {activeAchievementPreview.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal: Event Details & Registration */}
            {selectedEventForModal && (
                <div
                    onClick={() => setSelectedEventForModal(null)}
                    className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 cursor-pointer backdrop-blur-xs animate-in fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#eef2f7] border border-white/90 cursor-default animate-in zoom-in-95 duration-200"
                    >
                        <div className="relative w-full h-56 sm:h-64 bg-slate-900">
                            <img
                                src={selectedEventForModal.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                                alt={selectedEventForModal.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedEventForModal(null)}
                                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                                <span className="bg-white/95 text-[#0c72b8] text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                                    {selectedEventForModal.category}
                                </span>
                                <span className="bg-[#800000] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{selectedEventForModal.date}</span>
                                </span>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 space-y-5 bg-[#eef2f7]">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins leading-snug">
                                    {selectedEventForModal.title}
                                </h3>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    Organized by {selectedEventForModal.clubName || club.name} • Aadikavi Bhanubhakta Campus
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div className="p-3.5 bg-white/80 rounded-2xl border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Session Time</span>
                                        <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                                            {selectedEventForModal.time}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-white/80 rounded-2xl border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Event Venue</span>
                                        <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                                            {selectedEventForModal.venue}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Event Overview & Agenda</h4>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                                    {selectedEventForModal.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
