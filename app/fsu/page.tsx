"use client";
import { useState, useEffect, useRef } from "react";
import {
    Shield,
    Sparkles,
    MessageSquare,
    Bell,
    Images,
    BookOpen,
    Globe,
    Phone,
    MapPin,
    ChevronRight,
    ChevronDown,
    Menu,
    X,
    ArrowRight,
    ArrowLeft,
    Users,
    GraduationCap,
    PartyPopper,
    Heart,
    LayoutGrid,
    Building2,
    Search
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ALL_CLUBS, Club } from "../data/clubsData";
import CampaignManifesto from "./components/CampaignManifesto";
import NoticeBoard from "./components/NoticeBoard";
import CommitteeSection from "./components/CommitteeSection";
import PhotoGallery from "./components/PhotoGallery";
import GrievanceForm from "./components/GrievanceForm";
//import FSUAssistant from "./components/FSUAssistant";
import AboutSection from "./components/AboutSection";
import PresidentMessage from "./components/PresidentMessage";
import HistorySection from "./components/HistorySection";
import JourneySection from "./components/JourneySection";

export interface FSUPageProps {
    onBack?: () => void;
    clubs?: Club[];
    onSelectClub?: (club: Club) => void;
}

export default function FSUPage({
    onBack,
    clubs = ALL_CLUBS,
    onSelectClub
}: FSUPageProps = {}) {
    const [language, setLanguage] = useState<"en" | "np">("en");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileCommitteesOpen, setMobileCommitteesOpen] = useState(false);
    const [isCommitteesDropdownOpen, setIsCommitteesDropdownOpen] = useState(false);
    const [committeeSearchQuery, setCommitteeSearchQuery] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCommitteesDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            // Scroll Spy Logic
            const sections = [
                { id: "home", href: "#" },
                { id: "about", href: "#about" },
                { id: "notices", href: "#notices" },
                { id: "manifesto", href: "#manifesto" },
                { id: "committee", href: "#committee" },
                { id: "gallery", href: "#gallery" },
                { id: "movements", href: "#movements" },
                { id: "grievances", href: "#grievances" }
            ];

            if (window.scrollY < 120) {
                setActiveLink("#");
                return;
            }

            let currentSection = "#";

            for (const section of sections) {
                if (section.id === "home") continue;
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 140 && rect.bottom > 140) {
                        currentSection = section.href;
                        break;
                    }
                }
            }

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                currentSection = "#grievances";
            }

            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "np" : "en"));
    };

    const handleClubClick = (club: Club) => {
        setIsCommitteesDropdownOpen(false);
        setMobileMenuOpen(false);
        if (onSelectClub) {
            onSelectClub(club);
        } else if (onBack) {
            onBack();
        }
    };

    const filteredDropdownClubs = committeeSearchQuery.trim()
        ? clubs.filter((c) => {
            const q = committeeSearchQuery.toLowerCase();
            return (
                c.name.toLowerCase().includes(q) ||
                (c.nepaliName && c.nepaliName.includes(q)) ||
                (c.category && c.category.toLowerCase().includes(q)) ||
                (c.president && c.president.toLowerCase().includes(q))
            );
        })
        : clubs;

    const navLinks = [
        { href: "#", labelEn: "Home", labelNp: "गृहपृष्ठ" },
        { href: "#about", labelEn: "About", labelNp: "हाम्रो बारेमा" },
        { href: "#notices", labelEn: "Notices", labelNp: "सूचना" },
        { href: "#manifesto", labelEn: "Manifesto", labelNp: "घोषणापत्र" },
        { href: "#committee", labelEn: "Committee", labelNp: "कार्यसमिति" },
        { href: "#gallery", labelEn: "Gallery", labelNp: "ग्यालेरी" },
        { href: "#movements", labelEn: "Journey", labelNp: "यात्रा" },
        { href: "#grievances", labelEn: "Contact", labelNp: "सम्पर्क" },
    ];

    return (
        <div className="min-h-screen bg-[#eef2f7] flex flex-col font-sans selection:bg-red-500 selection:text-white antialiased w-full max-w-full overflow-x-hidden relative">
            {/* Fixed Header */}
            <motion.header
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2.5 flex items-center justify-between gap-3">
                    {/* Left: Back Action + FSU Brand */}
                    <div className="flex items-center gap-3 shrink-0">
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="bg-white border border-slate-200 hover:border-slate-300 w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-[#052855] transition-all cursor-pointer shadow-sm hover:shadow active:scale-95 shrink-0"
                                title={language === "en" ? "Back to Campus Clubs Hub" : "क्याम्पस क्लब पोर्टलमा फर्कनुहोस्"}
                                aria-label="Back to Clubs Hub"
                            >
                                <ArrowLeft className="w-4 h-4 text-blue-900" />
                            </button>
                        )}

                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex items-center gap-2.5 text-left cursor-pointer group"
                        >
                            <div className="w-10 h-10 p-1 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform bg-white border border-slate-200 shadow-sm">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VyJwjk3U8Bmc9yTWYqUPrSDvWW3P-2s9TJKPxsRHkalC1ArG2tvmf7H5rIFRAdg-CFYudQYucNgzVVGxJkEAX7sHVZL3AA-f-pjeFXvxATKHZscjXuanNdBg63VU9RsNK-exGjH2L2lWjxkmE9ehLvin4HlaHU3srNjkMp_s8velzwMBLPfOJvvvaJEiJ1-WnvIWOgJ5FNFq5fQa3wiyWLNNu4tIlPJOXyTBdbt4fjCBJRgl6JTH22Vc0qB2YYNWGukAg6G4Ehc"
                                    alt="ANNFSU Logo"
                                    className="w-full h-full object-contain rounded-full"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-black text-[#052855] tracking-wider leading-none uppercase group-hover:text-blue-900 transition-colors">
                                    FSU
                                </span>
                                <span className="text-[10px] font-bold text-red-600 tracking-tight leading-normal font-devanagari mt-0.5">
                                    आदिकवि भानुभक्त क्याम्पस
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Center: Streamlined Pill Nav Bar */}
                    <nav className="hidden xl:flex items-center gap-1 px-1.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.href;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.href)}
                                    className={`relative text-xs font-bold transition-all py-1.5 px-3.5 rounded-full cursor-pointer select-none ${isActive
                                            ? "bg-white text-red-600 font-extrabold shadow-sm border border-slate-200/80"
                                            : "text-slate-600 hover:text-[#052855] hover:bg-white/70"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 rounded-full border border-red-500/20 pointer-events-none"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{language === "en" ? link.labelEn : link.labelNp}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Right Action buttons */}
                    <div className="hidden md:flex items-center gap-2.5 shrink-0">
                        {/* Committees Dropdown Menu */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsCommitteesDropdownOpen(!isCommitteesDropdownOpen)}
                                className={`bg-white border border-slate-200 hover:border-slate-300 flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer shadow-sm hover:shadow ${isCommitteesDropdownOpen ? "text-[#052855] border-blue-300 bg-blue-50/50" : "text-slate-700 hover:text-[#052855]"
                                    }`}
                                aria-expanded={isCommitteesDropdownOpen}
                            >
                                <Building2 className="w-3.5 h-3.5 text-blue-900" />
                                <span>{language === "en" ? "Committees" : "समितिहरू"}</span>
                                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isCommitteesDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isCommitteesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        className="absolute top-full right-0 mt-2 w-84 bg-white shadow-xl rounded-2xl border border-slate-200 p-3 z-50"
                                    >
                                        <div className="p-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                                {language === "en" ? "Campus Committees" : "क्याम्पस समितिहरू"}
                                            </span>
                                            <span className="text-[10px] bg-blue-50 text-blue-900 px-2 py-0.5 rounded-full font-bold">
                                                {clubs.length} {language === "en" ? "Clubs" : "क्लबहरू"}
                                            </span>
                                        </div>

                                        {/* Quick back to clubs hub button in dropdown */}
                                        {onBack && (
                                            <button
                                                onClick={onBack}
                                                className="w-full flex items-center gap-2 p-2 mb-2 text-xs font-bold text-blue-900 bg-blue-50/80 hover:bg-blue-100/90 rounded-xl transition-all border border-blue-200/60 cursor-pointer"
                                            >
                                                <LayoutGrid className="w-3.5 h-3.5 text-blue-900" />
                                                <span>{language === "en" ? "View All Clubs Grid" : "सबै क्लबहरूको ग्रिड हेर्नुहोस्"}</span>
                                            </button>
                                        )}

                                        {/* Search inside dropdown */}
                                        <div className="relative mb-2">
                                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                            <input
                                                type="text"
                                                value={committeeSearchQuery}
                                                onChange={(e) => setCommitteeSearchQuery(e.target.value)}
                                                placeholder={language === "en" ? "Filter committees..." : "समिति खोज्नुहोस्..."}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-colors"
                                            />
                                        </div>

                                        {/* Clubs List */}
                                        <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                            {filteredDropdownClubs.map((club) => {
                                                const isCurrentFSU = club.id === 'free-student-union' || club.id === 'fsu';
                                                return (
                                                    <button
                                                        key={club.id}
                                                        onClick={() => handleClubClick(club)}
                                                        className={`w-full flex items-center gap-2.5 p-2 text-left rounded-xl transition-all group cursor-pointer ${isCurrentFSU ? "bg-blue-50/80 border border-blue-200" : "hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        <img
                                                            src={club.logo}
                                                            alt={club.name}
                                                            referrerPolicy="no-referrer"
                                                            className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0 group-hover:border-blue-500"
                                                        />
                                                        <div className="flex flex-col min-w-0 flex-1">
                                                            <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 truncate">
                                                                {language === "np" && club.nepaliName ? club.nepaliName : club.name}
                                                            </span>
                                                            <span className="text-[10px] text-slate-500 truncate">
                                                                {club.category} {club.president ? `• ${club.president}` : ""}
                                                            </span>
                                                        </div>
                                                        {isCurrentFSU && (
                                                            <span className="text-[9px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded-full shrink-0">
                                                                Current
                                                            </span>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Language Switcher Pill */}
                        <button
                            onClick={toggleLanguage}
                            className="bg-white border border-slate-200 hover:border-slate-300 flex items-center gap-1.5 px-3.5 py-2 text-slate-700 hover:text-blue-900 rounded-full transition-all cursor-pointer text-xs font-bold shadow-sm hover:shadow"
                            title={language === "en" ? "नेपाली भाषामा हेर्नुहोस्" : "Switch to English"}
                        >
                            <Globe className="w-3.5 h-3.5 text-blue-900" />
                            <span>{language === "en" ? "नेपाली" : "EN"}</span>
                        </button>

                        {/* Join Us Pill Button */}
                        <a
                            href="#grievances"
                            className="bg-[#052855] hover:bg-[#073674] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all uppercase flex items-center gap-1.5 shadow hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <span>{language === "en" ? "Join Us" : "हामीसँग जोडिनुहोस्"}</span>
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="flex items-center gap-2 xl:hidden">
                        {/* Mobile Language switch */}
                        <button
                            onClick={toggleLanguage}
                            className="bg-white border border-slate-200 hover:border-slate-300 px-3 py-1.5 text-slate-700 hover:text-blue-900 rounded-full text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-sm"
                            title="Change Language"
                        >
                            <Globe className="w-3.5 h-3.5 text-blue-900" />
                            <span>{language === "en" ? "नेपाली" : "EN"}</span>
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 p-2 rounded-xl transition-colors cursor-pointer shadow-sm"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Drawer menu with Committees dropdown accordion */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 top-[64px] bottom-0 bg-[#eef2f7] border-b border-slate-200/80 z-30 p-6 flex flex-col gap-4 shadow-2xl xl:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-2">
                            {onBack && (
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onBack();
                                    }}
                                    className="bg-white border border-slate-200 shadow-sm hover:border-slate-300 flex items-center gap-2 text-sm font-bold text-blue-900 p-3 rounded-2xl transition-colors text-left cursor-pointer"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>{language === "en" ? "← Back to Campus Clubs" : "← क्याम्पस क्लबहरूमा फर्कनुहोस्"}</span>
                                </button>
                            )}

                            {/* Mobile Committees Expandable Accordion */}
                            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white/40">
                                <button
                                    onClick={() => setMobileCommitteesOpen(!mobileCommitteesOpen)}
                                    className="w-full flex items-center justify-between p-3 text-sm font-bold text-slate-800 hover:text-blue-900 cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-blue-900" />
                                        <span>{language === "en" ? "Committees Directory" : "समितिहरूको सूची"}</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCommitteesOpen ? "rotate-180" : ""}`} />
                                </button>

                                {mobileCommitteesOpen && (
                                    <div className="p-2 border-t border-slate-200/80 max-h-60 overflow-y-auto space-y-1">
                                        {clubs.map((club) => (
                                            <button
                                                key={club.id}
                                                onClick={() => handleClubClick(club)}
                                                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-blue-50 transition-colors"
                                            >
                                                <img
                                                    src={club.logo}
                                                    alt={club.name}
                                                    referrerPolicy="no-referrer"
                                                    className="w-7 h-7 rounded-full object-cover shrink-0"
                                                />
                                                <div className="flex flex-col min-w-0 flex-1">
                                                    <span className="text-xs font-bold text-slate-800 truncate">
                                                        {language === "np" && club.nepaliName ? club.nepaliName : club.name}
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 truncate">{club.category}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveLink(link.href);
                                    }}
                                    className="text-sm font-semibold text-slate-800 hover:text-blue-900 p-2.5 rounded-xl hover:bg-white/60 transition-colors"
                                >
                                    {language === "en" ? link.labelEn : link.labelNp}
                                </a>
                            ))}
                        </nav>
                        <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                            <a
                                href="#grievances"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-[#052855] hover:bg-[#073674] text-white py-3 rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                            >
                                <span>{language === "en" ? "Join Us" : "हामीसँग जोडिनुहोस्"}</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Banner / Hero Section with subtle staggered entrance animation */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden text-white mt-12 w-full max-w-full"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWW5sJJ_cYRhwOjpLtMuP3mNQ7ynEqagVJnI1OeHoVEoHbdjG50CLbyajjeAq0hfeh41ob9CesPNaUnmhXDCGYcrdUb1SvnGaEBG5QOBmHuTwoRZlqHSk4Kc2dMNr4BAwCwi0OrUWADdehuwZW9Hkm12Fsb_Ohi8Nusuw9DRIy4u2pMbvgrcTxSgbyoGpbvARoJWsbHBBUu9DnW6ddKkkSorZV9yvU3Uy9aBz_crXZGAdJvqgTet816AVUDBApeTdG7HF7dk4A-5c"
                        alt="ANNFSU Students Gathering"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Clean dark overlay without glowing edge mix-blend or vignetting */}
                    <div className="absolute inset-0 bg-[#051c36]/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full min-w-0">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                        className="max-w-4xl space-y-6"
                    >
                        {/* Red Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <span className="bg-[#b91c1c] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase inline-block shadow-sm">
                                OFFICIAL STUDENTS' UNION
                            </span>
                        </motion.div>

                        {/* Welcome Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white break-words"
                        >
                            Welcome to Free Students' Union, Aadikavi Bhanubhakta Campus |{" "}
                            <span className="font-devanagari block mt-2 text-white font-bold text-xl sm:text-3xl lg:text-4xl leading-normal break-words">
                                आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (स्ववियु) मा स्वागत छ।
                            </span>
                        </motion.h2>

                        {/* Description Blocks */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-4 max-w-3xl"
                        >
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                Join the vanguard of student leadership at Aadikavi Bhanubhakta Campus. We represent your voice, foster academic excellence, and build the future leaders of Nepal. Empowerment, Transparency, and Progress are our core pillars.
                            </p>
                            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-devanagari">
                                आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियनमा स्वागत छ। हामी विद्यार्थीहरूको आवाजलाई प्रतिनिधित्व गर्छौं, शैक्षिक उत्कृष्टता प्रवर्द्धन गर्छौं र नेपालका भविष्यका नेताहरू निर्माण गर्छौं। सशक्तीकरण, पारदर्शिता र प्रगति हाम्रा मुख्य स्तम्भहरू हुन्।
                            </p>
                        </motion.div>

                        {/* CTA Buttons without colored edge glows */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a
                                href="#grievances"
                                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                            >
                                <span>Join FSU</span>
                            </a>

                            <a
                                href="#about"
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Double Chevron down indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-white cursor-pointer opacity-75 hover:opacity-100 flex flex-col items-center gap-0.5"
                            onClick={() => {
                                document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <svg
                                className="w-5 h-5 -mt-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Statistics Section underneath Hero with subtle viewport entry and stagger */}
            <motion.section
                id="stats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#eef2f7] py-14 border-b border-slate-200/80 relative z-20 w-full max-w-full overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Students */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="neu-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-pressed-sm flex items-center justify-center text-red-600">
                                <Users className="w-7 h-7" />
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">3500+</div>
                            <div className={`text-xs font-bold text-slate-600 tracking-wider uppercase ${language === 'np' ? 'font-devanagari' : ''}`}>
                                {language === "en" ? "Students Represented" : "विद्यार्थी प्रतिनिधित्व"}
                            </div>
                        </motion.div>

                        {/* Card 2: Academic Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.12 }}
                            className="neu-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-pressed-sm flex items-center justify-center text-blue-900">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">16+</div>
                            <div className={`text-xs font-bold text-slate-600 tracking-wider uppercase ${language === 'np' ? 'font-devanagari' : ''}`}>
                                {language === "en" ? "Academic Programs" : "शैक्षिक कार्यक्रमहरू"}
                            </div>
                        </motion.div>

                        {/* Card 3: Annual Activities */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.19 }}
                            className="neu-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-pressed-sm flex items-center justify-center text-amber-600">
                                <PartyPopper className="w-7 h-7" />
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">40+</div>
                            <div className={`text-xs font-bold text-slate-600 tracking-wider uppercase ${language === 'np' ? 'font-devanagari' : ''}`}>
                                {language === "en" ? "Annual Activities" : "वार्षिक गतिविधिहरू"}
                            </div>
                        </motion.div>

                        {/* Card 4: Community Projects */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.26 }}
                            className="neu-card p-8 flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-pressed-sm flex items-center justify-center text-rose-600">
                                <Heart className="w-7 h-7" />
                            </div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">10+</div>
                            <div className={`text-xs font-bold text-slate-600 tracking-wider uppercase ${language === 'np' ? 'font-devanagari' : ''}`}>
                                {language === "en" ? "Community Projects" : "सामुदायिक परियोजनाहरू"}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Main Page Layout Container with smooth section viewport reveals */}
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16 sm:space-y-20 flex-1 min-w-0 overflow-hidden">
                {/* Section: About Us & Vision/Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <AboutSection language={language} />
                </motion.div>

                {/* Section: Message from the President */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <PresidentMessage language={language} />
                </motion.div>

                {/* Section: Campaign vision / Manifesto */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <CampaignManifesto language={language} />
                </motion.div>

                {/* Section: Notice Board (Timeline feed) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <NoticeBoard language={language} />
                </motion.div>

                {/* Section: History timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <HistorySection language={language} />
                </motion.div>

                {/* Section: Committee Directory (Executives & General) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <CommitteeSection language={language} />
                </motion.div>

                {/* Section: Photo Gallery of Student activities */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <PhotoGallery language={language} />
                </motion.div>

                {/* Section: Journey of Student Movements */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <JourneySection language={language} />
                </motion.div>

                {/* Section: Grievance Desk Box */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <GrievanceForm language={language} />
                </motion.div>
            </main>

            {/* Elegant Footer */}
            <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 w-full max-w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                        {/* Column 1: FSU Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-white border border-slate-800 p-1 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VyJwjk3U8Bmc9yTWYqUPrSDvWW3P-2s9TJKPxsRHkalC1ArG2tvmf7H5rIFRAdg-CFYudQYucNgzVVGxJkEAX7sHVZL3AA-f-pjeFXvxATKHZscjXuanNdBg63VU9RsNK-exGjH2L2lWjxkmE9ehLvin4HlaHU3srNjkMp_s8velzwMBLPfOJvvvaJEiJ1-WnvIWOgJ5FNFq5fQa3wiyWLNNu4tIlPJOXyTBdbt4fjCBJRgl6JTH22Vc0qB2YYNWGukAg6G4Ehc"
                                        alt="FSU Logo"
                                        className="w-full h-full object-contain"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white leading-none">Free Students' Union</h4>
                                    <p className="text-[10px] text-slate-500 uppercase mt-0.5 font-mono">Aadikavi Campus</p>
                                </div>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-400">
                                {language === "en"
                                    ? "The premier representative body advocating for students' academic, developmental, and social rights at Aadikavi Bhanubhakta Campus."
                                    : "आदिकवि भानुभक्त क्याम्पसका सम्पूर्ण विद्यार्थीहरूको हक, हित र शैक्षिक अधिकारका लागि क्रियाशील वैधानिक संस्था।"}
                            </p>
                        </div>

                        {/* Column 2: Direct Contact */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                                {language === "en" ? "FSU Executive Office" : "स्ववियु मुख्य सचिवालय"}
                            </h4>
                            <ul className="space-y-2 text-xs">
                                <li className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                                    <span>Vyas-1, Vigyanchaur, Tanahun, Nepal (व्यास-१, विज्ञानचौर, तनहुँ, नेपाल)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                                    <a href="tel:9804141256" className="hover:text-white">9804141256 (Anup Ale Magar)</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Navigation links */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                                {language === "en" ? "Core Portals" : "मुख्य सुविधाहरू"}
                            </h4>
                            <ul className="space-y-2 text-xs">
                                {onBack && (
                                    <li>
                                        <button
                                            onClick={onBack}
                                            className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                                        >
                                            <LayoutGrid className="w-3.5 h-3.5" />
                                            <span>{language === "en" ? "← All Campus Clubs" : "← सबै क्याम्पस क्लबहरू"}</span>
                                        </button>
                                    </li>
                                )}
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="hover:text-white flex items-center gap-1">
                                            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                                            <span>{language === "en" ? link.labelEn : link.labelNp}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Institutional Disclaimer */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                                {language === "en" ? "Democratic Mandate" : "लोकतान्त्रिक जनादेश"}
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-500">
                                {language === "en"
                                    ? "This digital portal is fully managed by the elected FSU committee of Aadikavi Bhanubhakta Campus. Core data and contact listings are verified and approved for public circulation."
                                    : "यो पोर्टल आदिकवि भानुभक्त क्याम्पसको निर्वाचित स्वतन्त्र विद्यार्थी युनियन कार्यसमिति द्वारा संचालित छ। सूचनाहरू आधिकारिक र प्रमाणित छन्।"}
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
                        <span className="text-center sm:text-left break-words max-w-full">
                            © {new Date().getFullYear()} Free Students' Union, Aadikavi Bhanubhakta Campus. All Rights Reserved.
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                            <Globe className="w-3.5 h-3.5" />
                            Tanahun, Nepal
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
