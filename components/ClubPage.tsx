"use client";

import React, { useState } from 'react';
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
    FileText,
    Quote,
    Target,
    Compass,
    History,
    ShieldCheck,
    Image as ImageIcon
} from 'lucide-react';

import {
    Club,
    ClubEvent,
    ClubNotice,
    LeadershipMember,
    Language
} from '../app/data/clubsData';

const DEFAULT_CLUB_SAMPLE: Club = {
    id: 'abit-club',
    name: 'ABIT Club',
    nepaliName: 'एबीआइटी क्लब',
    category: 'Technology & IT',
    logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#1d4ed8',
    description: 'The premier Information Technology student committee at Aadikavi Bhanubhakta Campus.',
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
    type TabType = 'home' | 'about' | 'vision' | 'message' | 'notices' | 'manifesto' | 'history' | 'committee' | 'gallery';

    const [activeTab, setActiveTab] = useState<TabType>('home');
    const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

    const safeEvents = events || [];
    const safeNotices = notices || [];
    const leadershipList = club.leadership || [];
    const achievementsList = club.achievements || [];
    const galleryList = club.galleryImages || [];

    const clubEvents = safeEvents.filter((e) => e.clubId === club.id);
    const clubNotices = safeNotices.filter((n) => n.clubId === club.id);

    // Defaults for rich fields if not defined explicitly in data
    const defaultVision = club.vision ||
        `To establish ${club.name} as a leading student innovation center at Aadikavi Bhanubhakta Campus, empowering every member through practical skill development, ethical leadership, collaborative projects, and institutional impact.`;

    const defaultMission = club.mission || [
        `Provide regular hands-on workshops, training bootcamps, and real-world project experience in ${(club.category || '').toLowerCase()}.`,
        'Cultivate an inclusive community where students from all faculties can share ideas, build networks, and excel academically.',
        'Organize regional competitions, seminars, and industry connect sessions to bridge campus learning with career opportunities.',
        'Maintain 100% student representation and transparent executive leadership under institutional guidance.'
    ];

    const defaultPresidentMessage = {
        senderName: club.presidentMessage?.senderName || club.president || 'President',
        senderRole: club.presidentMessage?.senderRole || `President, ${club.name}`,
        message: club.presidentMessage?.message || `Greetings respected teachers, guests, and fellow students! As the President of ${club.name}, I welcome you to our official committee hub. Our committee was established in ${club.establishedYear || 'N/A'} with a clear commitment to fostering student potential. We believe that extracurricular engagement is key to holistic personal and professional growth. I invite all passionate students of Aadikavi Bhanubhakta Campus to join hands with us, participate in our upcoming events, and lead positive change together.`,
        avatarUrl: club.presidentMessage?.avatarUrl || leadershipList.find((m) => m.role === 'President')?.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    };

    const defaultAdvisorMessage = {
        senderName: club.advisorMessage?.senderName || club.facultyAdvisor || 'Faculty Advisor',
        senderRole: club.advisorMessage?.senderRole || `Faculty Advisor, ${club.name}`,
        message: club.advisorMessage?.message || `At Aadikavi Bhanubhakta Campus, student committees form the core of experiential learning. ${club.name} has consistently demonstrated excellence in organizing high-impact academic and extracurricular initiatives. As faculty advisor, I am proud to guide our dedicated student executive board. We encourage every student to make full use of the opportunities provided by this committee.`,
        avatarUrl: club.advisorMessage?.avatarUrl || leadershipList.find((m) => m.role === 'Faculty Advisor')?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    };

    const defaultManifesto = {
        title: club.manifesto?.title || `Official Action Manifesto & Code of Conduct (${club.establishedYear || 'N/A'} - Present)`,
        points: club.manifesto?.points || [
            'Equal Opportunity & Inclusive Access: Every student enrolled at ABC Campus has the equal right to join and participate in all committee activities without discrimination.',
            'Skill Enhancement & Practical Mastery: Organizing at least 4 major skill-building workshops and 2 grand competitions per academic calendar.',
            'Financial Transparency & Integrity: Maintaining audited, transparent accounts of all committee funds under campus administration guidelines.',
            'Student Welfare First: Representing student interests, academic concerns, and career advancement at every level.',
            'Community & Eco Responsibility: Participating in campus green initiatives, social service drives, and community outreach in Tanahun district.'
        ]
    };

    const defaultHistory = club.history ||
        `${club.name} was formally established in ${club.establishedYear || 'N/A'} under the guidance of Aadikavi Bhanubhakta Campus administration and student pioneers. Over the years, the committee has grown from a small group of enthusiastic students into an active hub of ${club.memberCount || 0}+ members. Recognized for its consistency and academic contribution, the committee continues to hold annual elections, organize flagship regional events, and nurture campus leaders.`;

    const tabs: { id: TabType; labelEn: string; labelNp: string; icon: React.ReactNode }[] = [
        { id: 'home', labelEn: 'Home', labelNp: 'गृहपृष्ठ', icon: <Building2 className="w-4 h-4" /> },
        { id: 'about', labelEn: 'About', labelNp: 'बारेमा', icon: <FileText className="w-4 h-4" /> },
        { id: 'vision', labelEn: 'Vision', labelNp: 'दृष्टिकोण', icon: <Target className="w-4 h-4" /> },
        { id: 'message', labelEn: 'Message', labelNp: 'सन्देश', icon: <Quote className="w-4 h-4" /> },
        { id: 'notices', labelEn: 'Notices', labelNp: 'सूचनाहरू', icon: <Bell className="w-4 h-4" /> },
        { id: 'manifesto', labelEn: 'Manifesto', labelNp: 'घोषणापत्र', icon: <ShieldCheck className="w-4 h-4" /> },
        { id: 'history', labelEn: 'History', labelNp: 'इतिहास', icon: <History className="w-4 h-4" /> },
        { id: 'committee', labelEn: 'Committee', labelNp: 'कार्यसमिति', icon: <Users className="w-4 h-4" /> },
        { id: 'gallery', labelEn: 'Gallery', labelNp: 'ग्यालेरी', icon: <ImageIcon className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-[#faf9fc] text-[#1b1b1e] font-inter pb-16 animate-in fade-in duration-300">

            {/* Top Header Breadcrumb Bar */}
            <div className="bg-[#000d27] text-white border-b border-gray-800 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 text-amber-400" />
                        <span>{language === 'en' ? 'Back to All 13 Committees' : 'सबै १३ समितिहरूमा फर्कनुहोस्'}</span>
                    </button>

                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-amber-400 font-bold">Aadikavi Bhanubhakta Campus</span>
                        <span>•</span>
                        <span className="font-semibold text-white">{club.name} Official Hub</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => onApplyJoin(club.id)}
                            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-[#000d27] text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                        >
                            <UserPlus className="w-4 h-4" />
                            <span>{language === 'en' ? 'Join Committee' : 'सामेल हुनुहोस्'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Banner Section */}
            <div className="relative bg-gradient-to-b from-[#000d27] via-[#051838] to-[#0a2348] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Logo Badge */}
                    <div className="relative shrink-0">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-2 shadow-2xl border-4 border-amber-400 overflow-hidden flex items-center justify-center">
                            <img
                                src={club.logo}
                                alt={club.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {club.featured && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-[#000d27] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                                FEATURED HUB
                            </span>
                        )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-center md:text-left space-y-3">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {club.category}
                            </span>
                            <span className="bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                                Established {club.establishedYear}
                            </span>
                            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                                QAA Accredited Campus
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins leading-tight">
                            {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                        </h1>

                        {club.nepaliName && language === 'en' && (
                            <p className="text-lg text-amber-300 font-semibold font-poppins">{club.nepaliName}</p>
                        )}

                        <p className="text-sm sm:text-base text-gray-200 max-w-3xl leading-relaxed font-inter">
                            {club.description}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs sm:text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                                <span>{club.roomLocation}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                                <span>{club.meetingSchedule}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                                <span className="font-bold text-white">{club.memberCount}+ Active Members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Tab Navigation Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${isActive
                                            ? 'bg-[#000d27] text-white shadow-sm'
                                            : 'text-gray-600 hover:text-[#000d27] hover:bg-gray-100'
                                        }`}
                                >
                                    {tab.icon}
                                    <span>{language === 'en' ? tab.labelEn : tab.labelNp}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Tab Body Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

                {/* 1. HOME TAB */}
                {activeTab === 'home' && (
                    <div className="space-y-8">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Active Committee Members</span>
                                <p className="text-2xl sm:text-3xl font-extrabold text-[#000d27] font-poppins">{club.memberCount}+</p>
                                <p className="text-[11px] text-emerald-600 font-semibold mt-1">Enrolled & Active</p>
                            </div>

                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Faculty Advisor</span>
                                <p className="text-sm font-bold text-[#000d27] truncate font-poppins">{club.facultyAdvisor}</p>
                                <p className="text-[11px] text-blue-600 font-semibold mt-1">Academic Mentorship</p>
                            </div>

                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Committee President</span>
                                <p className="text-sm font-bold text-[#000d27] truncate font-poppins">{club.president}</p>
                                <p className="text-[11px] text-amber-600 font-semibold mt-1">Student Leader</p>
                            </div>

                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Official Contact</span>
                                <p className="text-xs font-bold text-[#000d27] truncate font-poppins">{club.contactEmail}</p>
                                <p className="text-[11px] text-gray-500 font-medium mt-1">Campus Mailbox</p>
                            </div>
                        </div>

                        {/* Overview & Featured Notice Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">

                                {/* About Brief */}
                                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                                    <h3 className="text-xl font-bold text-[#000d27] font-poppins flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-blue-600" />
                                        <span>Welcome to {club.name}</span>
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed font-inter">
                                        {club.description}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                                        <button
                                            onClick={() => setActiveTab('about')}
                                            className="px-4 py-2 bg-blue-50 text-blue-800 text-xs font-bold rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
                                        >
                                            Read Full Profile →
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('vision')}
                                            className="px-4 py-2 bg-amber-50 text-amber-800 text-xs font-bold rounded-xl hover:bg-amber-100 transition-colors cursor-pointer"
                                        >
                                            View Vision & Mission →
                                        </button>
                                    </div>
                                </div>

                                {/* Major Milestones */}
                                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs">
                                    <h3 className="text-xl font-bold text-[#000d27] font-poppins mb-4 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-amber-500" />
                                        <span>Key Achievements & Campus Impact</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {achievementsList.map((ach, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span className="text-xs font-medium text-gray-800">{ach}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar Quick Actions & President Message Snippet */}
                            <div className="space-y-6">
                                {/* President Message Teaser */}
                                <div className="bg-gradient-to-br from-[#000d27] to-[#0a2348] text-white p-6 rounded-3xl shadow-md relative overflow-hidden border border-amber-400/50">
                                    <Quote className="w-12 h-12 text-white/10 absolute top-4 right-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-2">President's Corner</span>
                                    <p className="text-xs italic text-gray-200 leading-relaxed line-clamp-4">
                                        "{defaultPresidentMessage.message}"
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                                        <img
                                            src={defaultPresidentMessage.avatarUrl}
                                            alt={defaultPresidentMessage.senderName}
                                            referrerPolicy="no-referrer"
                                            className="w-10 h-10 rounded-full object-cover border border-amber-400"
                                        />
                                        <div>
                                            <h5 className="text-xs font-bold text-white">{defaultPresidentMessage.senderName}</h5>
                                            <p className="text-[10px] text-amber-300">{defaultPresidentMessage.senderRole}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setActiveTab('message')}
                                        className="w-full mt-4 py-2 bg-amber-400 hover:bg-amber-300 text-[#000d27] font-bold text-xs rounded-xl cursor-pointer transition-colors"
                                    >
                                        Read Full Official Messages →
                                    </button>
                                </div>

                                {/* Registration CTA Card */}
                                <div className="bg-amber-50/70 border border-amber-300/80 p-6 rounded-3xl text-center">
                                    <Sparkles className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                    <h4 className="text-base font-bold text-[#000d27] font-poppins">Become an Official Member</h4>
                                    <p className="text-xs text-gray-600 mt-1 mb-4">
                                        Join {club.name} today and receive your digital student membership pass.
                                    </p>
                                    <button
                                        onClick={() => onApplyJoin(club.id)}
                                        className="w-full py-2.5 bg-[#000d27] text-white hover:bg-[#0a2348] font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                                    >
                                        Apply for Membership
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. ABOUT TAB */}
                {activeTab === 'about' && (
                    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8">
                        <div>
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                Committee Profile & Operational Details
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#000d27] font-poppins mt-2">
                                About {club.name}
                            </h2>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed font-inter">
                            {club.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-2">
                                <h4 className="text-sm font-bold text-[#000d27] flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-500" />
                                    <span>Room Location & Campus Base</span>
                                </h4>
                                <p className="text-xs text-gray-600">{club.roomLocation}</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-2">
                                <h4 className="text-sm font-bold text-[#000d27] flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>Regular Meeting Schedule</span>
                                </h4>
                                <p className="text-xs text-gray-600">{club.meetingSchedule}</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-2">
                                <h4 className="text-sm font-bold text-[#000d27] flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-emerald-600" />
                                    <span>Affiliated Faculty</span>
                                </h4>
                                <p className="text-xs text-gray-600">{club.facultyAdvisor} (Advisor)</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-2">
                                <h4 className="text-sm font-bold text-[#000d27] flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-purple-600" />
                                    <span>Official Correspondence</span>
                                </h4>
                                <p className="text-xs text-gray-600">{club.contactEmail}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-[#000d27] font-poppins mb-3">
                                Key Achievements & Milestones
                            </h3>
                            <div className="space-y-2">
                                {achievementsList.map((ach, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                                        <span className="text-xs text-gray-800 font-medium">{ach}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. VISION & MISSION TAB */}
                {activeTab === 'vision' && (
                    <div className="space-y-8">
                        {/* Vision Banner */}
                        <div className="bg-gradient-to-r from-[#000d27] to-[#0a2348] text-white p-8 sm:p-10 rounded-3xl shadow-md border-l-8 border-amber-400">
                            <div className="flex items-center gap-3 mb-3">
                                <Target className="w-8 h-8 text-amber-400" />
                                <h2 className="text-2xl font-bold font-poppins">Our Institutional Vision</h2>
                            </div>
                            <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic font-poppins">
                                "{defaultVision}"
                            </p>
                        </div>

                        {/* Mission Goals Card */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                            <div className="flex items-center gap-3">
                                <Compass className="w-7 h-7 text-blue-700" />
                                <h3 className="text-xl font-bold text-[#000d27] font-poppins">Mission Objectives</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {defaultMission.map((m, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                            {idx + 1}
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-inter pt-1">
                                            {m}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. MESSAGE TAB */}
                {activeTab === 'message' && (
                    <div className="space-y-8">
                        {/* President's Message */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-100 pb-6">
                                <img
                                    src={defaultPresidentMessage.avatarUrl}
                                    alt={defaultPresidentMessage.senderName}
                                    referrerPolicy="no-referrer"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-400 shadow-md shrink-0"
                                />
                                <div className="text-center sm:text-left">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                        Official Executive Message
                                    </span>
                                    <h3 className="text-xl font-bold text-[#000d27] font-poppins mt-2">
                                        Message from the President
                                    </h3>
                                    <p className="text-sm font-bold text-blue-700">{defaultPresidentMessage.senderName}</p>
                                    <p className="text-xs text-gray-500">{defaultPresidentMessage.senderRole}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed italic font-inter bg-gray-50 p-6 rounded-2xl border border-gray-200/60">
                                "{defaultPresidentMessage.message}"
                            </p>
                        </div>

                        {/* Advisor's Message */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-100 pb-6">
                                <img
                                    src={defaultAdvisorMessage.avatarUrl}
                                    alt={defaultAdvisorMessage.senderName}
                                    referrerPolicy="no-referrer"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 shadow-md shrink-0"
                                />
                                <div className="text-center sm:text-left">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                                        Faculty Mentorship Message
                                    </span>
                                    <h3 className="text-xl font-bold text-[#000d27] font-poppins mt-2">
                                        Message from the Faculty Advisor
                                    </h3>
                                    <p className="text-sm font-bold text-blue-700">{defaultAdvisorMessage.senderName}</p>
                                    <p className="text-xs text-gray-500">{defaultAdvisorMessage.senderRole}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed italic font-inter bg-gray-50 p-6 rounded-2xl border border-gray-200/60">
                                "{defaultAdvisorMessage.message}"
                            </p>
                        </div>
                    </div>
                )}

                {/* 5. NOTICES TAB */}
                {activeTab === 'notices' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-[#000d27] font-poppins">
                                Official Bulletins & Announcements ({clubNotices.length})
                            </h3>
                        </div>

                        {clubNotices.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-gray-300">
                                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                                <p className="text-sm text-gray-600 font-medium">No active bulletins posted for this committee yet.</p>
                            </div>
                        ) : (
                            clubNotices.map((not) => (
                                <div key={not.id} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                                            {not.category}
                                        </span>
                                        <span className="text-xs text-gray-400">{not.date}</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#000d27] font-poppins">{not.title}</h4>
                                    <p className="text-xs text-gray-700 leading-relaxed">{not.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* 6. MANIFESTO TAB */}
                {activeTab === 'manifesto' && (
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <ShieldCheck className="w-8 h-8 text-amber-500" />
                            <div>
                                <h2 className="text-xl font-bold text-[#000d27] font-poppins">
                                    {defaultManifesto.title}
                                </h2>
                                <p className="text-xs text-gray-500">Official Student Governance Commitment</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {defaultManifesto.points.map((pt, idx) => (
                                <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-inter">{pt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. HISTORY TAB */}
                {activeTab === 'history' && (
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <History className="w-8 h-8 text-blue-700" />
                            <div>
                                <h2 className="text-xl font-bold text-[#000d27] font-poppins">
                                    Historical Background & Evolution
                                </h2>
                                <p className="text-xs text-gray-500">Est. {club.establishedYear} • Aadikavi Bhanubhakta Campus</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed font-inter bg-gray-50 p-6 rounded-2xl border border-gray-200/70">
                            {defaultHistory}
                        </p>
                    </div>
                )}

                {/* 8. COMMITTEE TAB */}
                {activeTab === 'committee' && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-[#000d27] font-poppins">
                                Executive Leadership Board ({leadershipList.length})
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Elected officers and faculty advisors steering {club.name}
                            </p>
                        </div>

                        {leadershipList.length === 0 ? (
                            <div className="bg-white p-8 rounded-3xl border border-dashed border-gray-300 text-center">
                                <Users className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                                <p className="text-sm text-gray-500 font-medium">No executive leadership records listed yet for this committee.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {leadershipList.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={member.avatarUrl}
                                                alt={member.name}
                                                referrerPolicy="no-referrer"
                                                className="w-16 h-16 rounded-full object-cover border-2 border-blue-700 shrink-0"
                                            />
                                            <div className="min-w-0 flex-1">
                                                <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md uppercase">
                                                    {member.role}
                                                </span>
                                                <h4 className="text-base font-bold text-gray-900 mt-1 truncate">{member.name}</h4>
                                                <p className="text-xs text-gray-500 truncate">{member.department}</p>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-600">
                                            <p className="flex items-center gap-2 truncate">
                                                <Mail className="w-3.5 h-3.5 text-gray-400" />
                                                <span>{member.email}</span>
                                            </p>
                                            {member.phone && (
                                                <p className="flex items-center gap-2">
                                                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                                                    <span>{member.phone}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* 9. GALLERY TAB */}
                {activeTab === 'gallery' && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-[#000d27] font-poppins">
                                Photo Gallery & Activity Moments
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">Highlights from workshops, events, and campus drives</p>
                        </div>

                        {galleryList.length === 0 ? (
                            <div className="bg-white p-8 rounded-3xl border border-dashed border-gray-300 text-center">
                                <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                                <p className="text-sm text-gray-500 font-medium">No activity photo gallery available yet for this committee.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {galleryList.map((imgUrl, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedGalleryImg(imgUrl)}
                                        className="rounded-3xl overflow-hidden h-52 bg-gray-100 border border-gray-200 cursor-pointer group relative shadow-xs"
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={`Activity photo ${idx + 1}`}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs">
                                            <Eye className="w-5 h-5 mr-1" /> View Image
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Gallery Image Modal Lightbox */}
                        {selectedGalleryImg && (
                            <div
                                onClick={() => setSelectedGalleryImg(null)}
                                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
                            >
                                <div className="max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative">
                                    <img src={selectedGalleryImg} alt="Enlarged gallery view" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};
