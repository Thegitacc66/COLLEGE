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
    GraduationCap,
    Calendar,
    X,
    Send,
    ExternalLink,
    ChevronRight,
    Image as ImageIcon
} from 'lucide-react';

import {
    Club,
    ClubEvent,
    ClubNotice,
    Language
} from '../app/data/clubsData';

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
    type TabType = 'home' | 'about' | 'vision' | 'message' | 'notices' | 'manifesto' | 'history' | 'committee' | 'gallery';

    const [activeTab, setActiveTab] = useState<TabType>('home');
    const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
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

    const safeEvents = events || [];
    const safeNotices = notices || [];
    const leadershipList = club.leadership || [];
    const achievementsList = club.achievements || [];
    const galleryList = club.galleryImages || [];

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
                    <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">

                        {/* Committee Official Logo Badge */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full neu-flat flex items-center justify-center p-2.5 border-2 border-slate-200/90 overflow-hidden relative group">
                                <img
                                    src={club.logo}
                                    alt={club.name}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {club.featured && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 neu-pressed text-[#0c72b8] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-2xs whitespace-nowrap flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-[#0c72b8]" />
                                    <span>FEATURED HUB</span>
                                </div>
                            )}
                        </div>

                        {/* Committee Metadata & Description */}
                        <div className="flex-1 text-center md:text-left space-y-3.5">

                            {/* Badges Row */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                <span className="neu-pressed text-[#0c72b8] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                                    {club.category}
                                </span>
                                <span className="bg-white border border-slate-200/90 text-[#800000] text-xs font-bold px-3.5 py-1 rounded-full shadow-2xs">
                                    Established {club.establishedYear}
                                </span>
                                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/90 text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>QAA Accredited Campus</span>
                                </span>
                            </div>

                            {/* Committee Main Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight tracking-tight">
                                {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                            </h1>

                            {/* Nepali Subtitle */}
                            {club.nepaliName && language === 'en' && (
                                <p className="text-base sm:text-lg text-[#800000] font-bold font-poppins">{club.nepaliName}</p>
                            )}

                            {/* Detailed Description */}
                            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
                                {club.description}
                            </p>

                            {/* Fast Facts Metadata Chips */}
                            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
                                    <MapPin className="w-4 h-4 text-[#0c72b8] shrink-0" />
                                    <span className="font-medium">{club.roomLocation}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
                                    <Clock className="w-4 h-4 text-[#800000] shrink-0" />
                                    <span className="font-medium">{club.meetingSchedule}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
                                    <Users className="w-4 h-4 text-[#0c72b8] shrink-0" />
                                    <span className="font-bold text-slate-900">{club.memberCount}+ Active Members</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Sticky Tab Navigation Bar */}
            <div className="bg-[#eef2f7] border-b border-slate-200/90 sticky top-20 z-30 shadow-2xs backdrop-blur-md bg-[#eef2f7]/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${isActive
                                            ? 'neu-button-primary bg-[#0c72b8] text-white shadow-md'
                                            : 'neu-button bg-[#eef2f7] hover:bg-white text-slate-700 hover:text-slate-900'
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

            {/* Main Tab Body Content Canvas */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

                {/* 1. HOME TAB */}
                {activeTab === 'home' && (
                    <div className="space-y-8">

                        {/* Quick Stats Grid (Identical to Clubs Dashboard Stats) */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

                            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0c72b8] flex items-center justify-center shrink-0 border border-blue-100/90 group-hover:bg-[#0c72b8] group-hover:text-white transition-all">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                                        Active Members
                                    </span>
                                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 font-poppins tracking-tight group-hover:text-[#0c72b8] transition-colors">
                                        {club.memberCount}+
                                    </h3>
                                    <p className="text-[11px] text-emerald-600 font-semibold truncate">Enrolled & Active</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100/90 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                                        Faculty Advisor
                                    </span>
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 font-poppins tracking-tight truncate group-hover:text-[#0c72b8] transition-colors">
                                        {club.facultyAdvisor}
                                    </h3>
                                    <p className="text-[11px] text-[#0c72b8] font-semibold truncate">Academic Mentorship</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100/90 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                                        President
                                    </span>
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 font-poppins tracking-tight truncate group-hover:text-[#0c72b8] transition-colors">
                                        {club.president}
                                    </h3>
                                    <p className="text-[11px] text-[#800000] font-semibold truncate">Student Leader</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 transition-all group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100/90 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                                        Official Contact
                                    </span>
                                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-poppins tracking-tight truncate group-hover:text-[#0c72b8] transition-colors">
                                        {club.contactEmail}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 font-medium truncate">Campus Mailbox</p>
                                </div>
                            </div>

                        </div>

                        {/* Overview & Featured Notice Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

                            <div className="lg:col-span-2 space-y-6">

                                {/* About Brief Card */}
                                <div className="neu-card p-6 sm:p-8 space-y-4">
                                    <div className="flex items-center gap-2.5 text-[#0c72b8]">
                                        <Building2 className="w-5 h-5" />
                                        <h3 className="text-xl font-bold text-slate-900 font-poppins">
                                            Welcome to {club.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                        {club.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-300/40 flex flex-wrap gap-3">
                                        <button
                                            onClick={() => setActiveTab('about')}
                                            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200/90 text-[#0c72b8] text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
                                        >
                                            <span>Read Full Profile</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('vision')}
                                            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
                                        >
                                            <span>View Vision & Mission</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Major Milestones */}
                                <div className="neu-card p-6 sm:p-8 space-y-4">
                                    <div className="flex items-center gap-2.5 text-[#800000]">
                                        <Award className="w-5 h-5 text-amber-500" />
                                        <h3 className="text-xl font-bold text-slate-900 font-poppins">
                                            Key Achievements & Campus Impact
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                                        {achievementsList.map((ach, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                                <span className="text-xs sm:text-sm font-medium text-slate-800">{ach}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar Quick Actions & President Message Snippet */}
                            <div className="space-y-6">

                                {/* President Message Teaser */}
                                <div className="neu-card p-6 space-y-4 relative overflow-hidden">
                                    <Quote className="w-16 h-16 text-slate-200 absolute -top-2 -right-2 pointer-events-none" />

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
                                        onClick={() => setActiveTab('message')}
                                        className="w-full mt-2 py-2 px-3 bg-white hover:bg-slate-50 border border-slate-200/90 text-[#0c72b8] font-bold text-xs rounded-xl cursor-pointer transition-colors shadow-2xs"
                                    >
                                        Read Full Official Messages →
                                    </button>
                                </div>

                                {/* Registration CTA Card */}
                                <div className="neu-card p-6 text-center space-y-3 bg-gradient-to-b from-blue-50/60 to-[#eef2f7] border border-blue-200/60">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0c72b8] flex items-center justify-center mx-auto shadow-2xs">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900 font-poppins">Become an Official Member</h4>
                                    <p className="text-xs text-slate-600">
                                        Join {club.name} today and receive your digital student membership certificate.
                                    </p>
                                    <button
                                        onClick={() => setIsJoinModalOpen(true)}
                                        className="w-full py-2.5 px-4 neu-button-primary text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
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
                    <div className="neu-card p-6 sm:p-10 space-y-8">
                        <div>
                            <span className="neu-pressed text-[#0c72b8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Committee Profile & Operational Base
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins mt-3">
                                About {club.name}
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {club.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-300/40">
                            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#0c72b8]" />
                                    <span>Room Location & Campus Base</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600">{club.roomLocation}</p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#800000]" />
                                    <span>Regular Meeting Schedule</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600">{club.meetingSchedule}</p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-emerald-600" />
                                    <span>Affiliated Faculty</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600">{club.facultyAdvisor} (Advisor)</p>
                            </div>

                            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-purple-600" />
                                    <span>Official Correspondence</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600">{club.contactEmail}</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-lg font-bold text-slate-900 font-poppins mb-4">
                                Key Achievements & Milestones
                            </h3>
                            <div className="space-y-2.5">
                                {achievementsList.map((ach, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                                        <CheckCircle2 className="w-4 h-4 text-[#0c72b8] shrink-0" />
                                        <span className="text-xs sm:text-sm text-slate-800 font-medium">{ach}</span>
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
                        <div className="neu-card p-8 sm:p-10 space-y-4 border-l-6 border-[#0c72b8] bg-gradient-to-r from-blue-50/50 via-[#eef2f7] to-[#eef2f7]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0c72b8] flex items-center justify-center shadow-2xs">
                                    <Target className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 font-poppins">Our Institutional Vision</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic font-normal pt-2">
                                "{defaultVision}"
                            </p>
                        </div>

                        {/* Mission Goals Card */}
                        <div className="neu-card p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <Compass className="w-6 h-6 text-[#0c72b8]" />
                                <h3 className="text-xl font-bold text-slate-900 font-poppins">Mission Objectives</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-3.5">
                                {defaultMission.map((m, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c72b8] border border-blue-100 flex items-center justify-center font-bold text-sm shrink-0">
                                            {idx + 1}
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pt-1">
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
                        <div className="neu-card p-6 sm:p-8 space-y-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-slate-300/40 pb-6">
                                <img
                                    src={defaultPresidentMessage.avatarUrl}
                                    alt={defaultPresidentMessage.senderName}
                                    referrerPolicy="no-referrer"
                                    className="w-20 h-20 rounded-full object-cover border-3 border-[#0c72b8] shadow-md shrink-0"
                                />
                                <div className="text-center sm:text-left">
                                    <span className="neu-pressed text-[#0c72b8] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Executive Student Leadership Message
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 font-poppins mt-2">
                                        Message from the President
                                    </h3>
                                    <p className="text-sm font-bold text-[#0c72b8]">{defaultPresidentMessage.senderName}</p>
                                    <p className="text-xs text-slate-500">{defaultPresidentMessage.senderRole}</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-700 leading-relaxed italic bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                                "{defaultPresidentMessage.message}"
                            </p>
                        </div>

                        {/* Advisor's Message */}
                        <div className="neu-card p-6 sm:p-8 space-y-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-slate-300/40 pb-6">
                                <img
                                    src={defaultAdvisorMessage.avatarUrl}
                                    alt={defaultAdvisorMessage.senderName}
                                    referrerPolicy="no-referrer"
                                    className="w-20 h-20 rounded-full object-cover border-3 border-[#800000] shadow-md shrink-0"
                                />
                                <div className="text-center sm:text-left">
                                    <span className="bg-white border border-slate-200/90 text-[#800000] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                                        Faculty Mentorship Guidance
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 font-poppins mt-2">
                                        Message from the Faculty Advisor
                                    </h3>
                                    <p className="text-sm font-bold text-[#800000]">{defaultAdvisorMessage.senderName}</p>
                                    <p className="text-xs text-slate-500">{defaultAdvisorMessage.senderRole}</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-700 leading-relaxed italic bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                                "{defaultAdvisorMessage.message}"
                            </p>
                        </div>
                    </div>
                )}

                {/* 5. NOTICES TAB */}
                {activeTab === 'notices' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900 font-poppins">
                                Official Bulletins & Announcements ({clubNotices.length})
                            </h3>
                        </div>

                        {clubNotices.length === 0 ? (
                            <div className="neu-card p-12 text-center border-dashed border-2 border-slate-300">
                                <Bell className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                                <p className="text-sm text-slate-600 font-medium">No active bulletins posted for this committee yet.</p>
                            </div>
                        ) : (
                            clubNotices.map((not) => (
                                <div key={not.id} className="neu-card p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="neu-pressed text-[#0c72b8] text-[10px] font-bold px-3 py-1 rounded-md">
                                            {not.category}
                                        </span>
                                        <span className="text-xs text-slate-400">{not.date}</span>
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900 font-poppins">{not.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{not.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* 6. MANIFESTO TAB */}
                {activeTab === 'manifesto' && (
                    <div className="neu-card p-8 space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-300/40 pb-4">
                            <ShieldCheck className="w-8 h-8 text-[#0c72b8]" />
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 font-poppins">
                                    {defaultManifesto.title}
                                </h2>
                                <p className="text-xs text-slate-500">Official Student Governance Commitment</p>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            {defaultManifesto.points.map((pt, idx) => (
                                <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{pt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. HISTORY TAB */}
                {activeTab === 'history' && (
                    <div className="neu-card p-8 space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-300/40 pb-4">
                            <History className="w-8 h-8 text-[#0c72b8]" />
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 font-poppins">
                                    Historical Background & Evolution
                                </h2>
                                <p className="text-xs text-slate-500">Est. {club.establishedYear} • Aadikavi Bhanubhakta Campus</p>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                            {defaultHistory}
                        </p>
                    </div>
                )}

                {/* 8. COMMITTEE TAB */}
                {activeTab === 'committee' && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 font-poppins">
                                Executive Leadership Board ({leadershipList.length})
                            </h2>
                            <p className="text-xs text-slate-500 mt-1">
                                Elected officers and faculty advisors steering {club.name}
                            </p>
                        </div>

                        {leadershipList.length === 0 ? (
                            <div className="neu-card p-12 text-center border-dashed border-2 border-slate-300">
                                <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                                <p className="text-sm text-slate-500 font-medium">No executive leadership records listed yet for this committee.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                {leadershipList.map((member) => (
                                    <div
                                        key={member.id}
                                        className="neu-card p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
                                    >
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <img
                                                    src={member.avatarUrl}
                                                    alt={member.name}
                                                    referrerPolicy="no-referrer"
                                                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0c72b8] shrink-0 shadow-xs"
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <span className="neu-pressed text-[#0c72b8] text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider inline-block">
                                                        {member.role}
                                                    </span>
                                                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">{member.name}</h4>
                                                    <p className="text-xs text-slate-500 truncate">{member.department}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-slate-300/40 space-y-1.5 text-xs text-slate-600">
                                            <p className="flex items-center gap-2 truncate">
                                                <Mail className="w-3.5 h-3.5 text-[#0c72b8]" />
                                                <span className="truncate">{member.email}</span>
                                            </p>
                                            {member.phone && (
                                                <p className="flex items-center gap-2">
                                                    <Phone className="w-3.5 h-3.5 text-[#800000]" />
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
                    </div>
                )}

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

        </div>
    );
};
