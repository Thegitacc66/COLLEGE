"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Sparkles,
    Mail,
    Send,
    ChevronDown,
    UserCheck,
    Phone,
    ArrowUpRight,
    Check,
    User,
    Tag
} from 'lucide-react';
import { Club, Language } from '../app/data/clubsData';

const CATEGORIES = [
    'Events & Workshops',
    'Activities & Training',
    'Club Resources',
    'Membership & Induction',
    'Academic Support',
    'General Inquiry'
];

const ROLES = [
    'Student',
    'Faculty / Teacher',
    'Club Member',
    'Campus Staff',
    'Campus Executive',
    'Visitor / Parent'
];

interface NeumorphicSelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (val: string) => void;
    icon?: React.ReactNode;
    placeholder?: string;
}

const NeumorphicSelect: React.FC<NeumorphicSelectProps> = ({
    label,
    value,
    options,
    onChange,
    icon
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={containerRef}>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                {label}
            </label>

            {/* Select Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between bg-[#eef2f7] border rounded-xl px-4 py-2.5 text-sm text-slate-900 font-semibold transition-all cursor-pointer text-left ${isOpen
                    ? 'border-[#0c72b8] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] ring-2 ring-[#0c72b8]/30'
                    : 'border-white/80 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] hover:border-slate-300'
                    }`}
            >
                <div className="flex items-center gap-2.5 truncate">
                    {icon && <span className="text-[#0c72b8] shrink-0">{icon}</span>}
                    <span className="truncate">{value}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-2"
                >
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                </motion.div>
            </button>

            {/* Floating Neumorphic Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full mt-2 left-0 right-0 z-40 bg-[#eef2f7] rounded-2xl border border-white/90 shadow-[6px_6px_20px_#c8d2e2,-6px_-6px_20px_#ffffff] p-2 space-y-1 max-h-64 overflow-y-auto"
                    >
                        {options.map((option) => {
                            const isSelected = option === value;
                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all text-left cursor-pointer ${isSelected
                                        ? 'bg-[#0c72b8]/10 text-[#0c72b8] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]'
                                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/70 active:bg-slate-200/60'
                                        }`}
                                >
                                    <span className="truncate">{option}</span>
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Check className="w-4 h-4 text-[#0c72b8] shrink-0 ml-2" />
                                        </motion.div>
                                    )}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export interface SuggestionMessageBoxProps {
    club?: Club;
    language?: Language;
    onToast?: (message: string) => void;
}

export const SuggestionMessageBox: React.FC<SuggestionMessageBoxProps> = ({
    club,
    language = 'en',
    onToast
}) => {
    // Form State
    const [name, setName] = useState('');
    const [role, setRole] = useState('Student');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const clubName = club ? club.name : 'Aadikavi Bhanubhakta Campus';

    // Dynamic President Information Extraction
    const presidentLeader = useMemo(() => {
        if (!club) return null;
        if (club.leadership && club.leadership.length > 0) {
            const exactPresident = club.leadership.find(
                (m) => m.role.toLowerCase().includes('president') && !m.role.toLowerCase().includes('vice')
            );
            if (exactPresident) return exactPresident;
            const anyPresident = club.leadership.find((m) => m.role.toLowerCase().includes('president'));
            if (anyPresident) return anyPresident;
        }
        return null;
    }, [club]);

    const presidentName =
        presidentLeader?.name ||
        club?.presidentMessage?.senderName ||
        club?.president ||
        'Executive President';

    const presidentEmail =
        presidentLeader?.email ||
        (club?.presidentMessage as any)?.email ||
        club?.contactEmail ||
        (club ? `${club.id.replace(/[^a-z0-9]/gi, '.')}.president@student.abcampus.edu.np` : 'subash.giri@student.abcampus.edu.np');

    const presidentRawPhone =
        presidentLeader?.phone ||
        (club?.presidentMessage as any)?.phone ||
        (club as any)?.presidentPhone ||
        '+977 9804126359';

    // Format phone for WhatsApp API: digits only with country code (977)
    const waCleanPhone = useMemo(() => {
        if (!presidentRawPhone || typeof presidentRawPhone !== 'string') return '9779804126359';
        const digitsOnly = presidentRawPhone.replace(/\D/g, '');
        if (digitsOnly.startsWith('977')) {
            return digitsOnly;
        }
        const stripped = digitsOnly.replace(/^0+/, '');
        return `977${stripped}`;
    }, [presidentRawPhone]);

    // Clean formatted display phone
    const displayPhoneFormatted = useMemo(() => {
        if (!presidentRawPhone || typeof presidentRawPhone !== 'string') return '+977 9804126359';
        if (presidentRawPhone.startsWith('+')) return presidentRawPhone;
        const clean = presidentRawPhone.replace(/\D/g, '');
        if (clean.startsWith('977')) {
            return `+977 ${clean.slice(3, 8)} ${clean.slice(8)}`;
        }
        return `+977 ${clean}`;
    }, [presidentRawPhone]);

    // Send via Gmail directly to President's email
    const handleSendGmail = () => {
        try {
            const emailContent = message.trim() || `Hello President ${presidentName},\n\nI am writing to you regarding ${clubName} (${category}).\n\nSubject: ${subject || 'Inquiry / Suggestion'}\nSender: ${name || 'Campus Student'}\nRole: ${role}\nPhone: ${phone || 'N/A'}`;

            const emailSubject = encodeURIComponent(`[${clubName}] ${category}: ${subject || 'Inquiry for President ' + presidentName}`);
            const emailBody = encodeURIComponent(
                `--- DIRECT DISPATCH FOR PRESIDENT ${presidentName.toUpperCase()} ---\n` +
                `Club / Organization: ${clubName}\n` +
                `Recipient: ${presidentName} (${presidentEmail})\n\n` +
                `--- SENDER INFORMATION ---\n` +
                `Sender Name: ${name || 'Anonymous Student / Visitor'}\n` +
                `Sender Role: ${role}\n` +
                `Sender Contact: ${phone || 'Not provided'}\n` +
                `Category: ${category}\n` +
                `Subject / Topic: ${subject || 'General Suggestion / Inquiry'}\n\n` +
                `--- MESSAGE CONTENT ---\n` +
                `${emailContent}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `Dispatched via Aadikavi Bhanubhakta Campus Clubs & Committees Portal (${new Date().toLocaleDateString()})`
            );

            // Direct Web Gmail Compose URL targeting President's email address
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(presidentEmail)}&su=${emailSubject}&body=${emailBody}`;

            const a = document.createElement('a');
            a.href = gmailUrl;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            if (onToast) {
                onToast(language === 'en' ? `Opening Gmail for President ${presidentName} (${presidentEmail})!` : `राष्ट्रपति ${presidentName} (${presidentEmail}) को Gmail खुल्दै छ!`);
            }
        } catch (err) {
            console.warn('Could not launch Gmail link:', err);
        }
    };

    // Send via WhatsApp directly to President's WhatsApp number
    const handleSendWhatsApp = () => {
        try {
            const waMessageContent = message.trim() || `Hello President ${presidentName}, I am contacting you regarding ${clubName} (${category}: ${subject || 'General Inquiry'}).`;

            const waText = encodeURIComponent(
                `*🏛️ ${clubName.toUpperCase()} - DISPATCH TO PRESIDENT*\n` +
                `👤 *To President:* ${presidentName}\n` +
                `━━━━━━━━━━━━━━━━━━━━\n` +
                `🙋 *From:* ${name || 'Student / Visitor'}\n` +
                `🎓 *Role:* ${role}\n` +
                `📞 *Contact Phone:* ${phone || 'N/A'}\n` +
                `📂 *Category:* ${category}\n` +
                `📌 *Subject:* ${subject || 'Club Inquiry'}\n\n` +
                `📝 *Message:*\n${waMessageContent}\n\n` +
                `_Sent via ABC Campus Clubs & Committees Portal_`
            );

            const waUrl = `https://wa.me/${waCleanPhone}?text=${waText}`;

            const a = document.createElement('a');
            a.href = waUrl;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            if (onToast) {
                onToast(language === 'en' ? `Opening WhatsApp to President ${presidentName} (${displayPhoneFormatted})!` : `राष्ट्रपति ${presidentName} (${displayPhoneFormatted}) को WhatsApp खुल्दै छ!`);
            }
        } catch (err) {
            console.warn('Could not launch WhatsApp link:', err);
        }
    };

    return (
        <div id="compose-message-box" className="w-full">
            {/* COMPOSE MESSAGE BOX (SOFT NEUMORPHIC DESIGN MATCHING CLUB PAGE EXACTLY) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#eef2f7] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/80 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[8px_8px_20px_#c8d2e2,-8px_-8px_20px_#ffffff] transition-all"
            >
                {/* Header inside Form Container */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-300/50 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#eef2f7] text-[#0c72b8] flex items-center justify-center shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/90 shrink-0">
                            <Sparkles className="w-5 h-5 fill-current/10" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins tracking-tight">
                                {language === 'en' ? 'Compose Message to President' : 'राष्ट्रपति/अध्यक्षलाई सन्देश लेख्नुहोस्'}
                            </h2>
                            <p className="text-xs text-slate-500 font-medium">
                                Direct channel to {presidentName} ({clubName})
                            </p>
                        </div>
                    </div>

                    {/* Direct Line to President Recipient Badge */}
                    <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#eef2f7] text-[#0c72b8] font-bold text-xs rounded-full shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] border border-white/80 self-start sm:self-auto">
                        <UserCheck className="w-3.5 h-3.5 text-[#0c72b8]" />
                        <span>Target: {presidentName}</span>
                    </div>
                </div>

                {/* Quick Info Strip displaying President destination details */}
                <div className="mb-6 p-4 rounded-2xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#0c72b8]/10 text-[#0c72b8] flex items-center justify-center shrink-0 font-extrabold">
                            {presidentName.charAt(0)}
                        </div>
                        <div>
                            <p className="font-extrabold text-slate-800">
                                President: {presidentName}
                            </p>
                            <p className="text-slate-500 text-[11px]">
                                {clubName} Executive Board
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600">
                        <div className="flex items-center gap-1 bg-[#eef2f7] px-2.5 py-1 rounded-lg shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff] border border-white/80">
                            <Mail className="w-3 h-3 text-[#e50000]" />
                            <span className="truncate max-w-[190px]">{presidentEmail}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-[#eef2f7] px-2.5 py-1 rounded-lg shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff] border border-white/80">
                            <Phone className="w-3 h-3 text-[#00a86b]" />
                            <span>{displayPhoneFormatted}</span>
                        </div>
                    </div>
                </div>

                {/* Form Body */}
                <div className="space-y-5">
                    {/* 3-Column Inputs Row: Name, Role, Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {/* Your Name (Optional) */}
                        <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                                {language === 'en' ? 'Your Name (Optional)' : 'तपाईंको नाम (ऐच्छिक)'}
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="E.g., Aaditya Sharma"
                                className="w-full bg-[#eef2f7] border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#0c72b8]/40 focus:border-[#0c72b8] transition-all"
                            />
                        </div>

                        {/* Your Role */}
                        <NeumorphicSelect
                            label={language === 'en' ? 'Your Role' : 'तपाईंको भूमिका'}
                            value={role}
                            options={ROLES}
                            onChange={(val) => setRole(val)}
                            icon={<User className="w-4 h-4 text-[#0c72b8]" />}
                        />

                        {/* Phone Number (Optional) */}
                        <div>
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                                {language === 'en' ? 'Phone Number (Optional)' : 'फोन नम्बर (ऐच्छिक)'}
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="98XXXXXXXX"
                                className="w-full bg-[#eef2f7] border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#0c72b8]/40 focus:border-[#0c72b8] transition-all"
                            />
                        </div>
                    </div>

                    {/* 2-Column Inputs Row: Topic Category & Subject / Topic Title */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
                        {/* Topic Category */}
                        <div className="lg:col-span-5">
                            <NeumorphicSelect
                                label={language === 'en' ? 'Topic Category' : 'विषय वर्ग'}
                                value={category}
                                options={CATEGORIES}
                                onChange={(val) => setCategory(val)}
                                icon={<Tag className="w-4 h-4 text-[#0c72b8]" />}
                            />
                        </div>

                        {/* Subject / Topic Title */}
                        <div className="lg:col-span-7">
                            <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                                {language === 'en' ? 'Subject / Topic Title' : 'विषय / शीर्षक'}
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="E.g., Suggestion for upcoming bootcamp"
                                className="w-full bg-[#eef2f7] border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#0c72b8]/40 focus:border-[#0c72b8] transition-all"
                            />
                        </div>
                    </div>

                    {/* Textarea: Write Message or Suggestion * */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs sm:text-sm font-bold text-slate-700">
                                {language === 'en' ? 'Write Message or Suggestion for President *' : 'अध्यक्ष/राष्ट्रपतिलाई सन्देश वा सुझाव लेख्नुहोस् *'}
                            </label>
                            <span className="text-xs font-semibold text-slate-400">
                                {message.length} chars
                            </span>
                        </div>
                        <textarea
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={`Write your detailed message, request, or suggestion to President ${presidentName}...`}
                            className="w-full bg-[#eef2f7] border border-white/80 rounded-2xl p-4 text-sm text-slate-900 placeholder-slate-400 shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#0c72b8]/40 focus:border-[#0c72b8] transition-all resize-y min-h-[130px]"
                        />
                    </div>

                    {/* Action Buttons Row targeting President (Refined Neumorphic Style matching Campus Portal) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                        {/* Send via Gmail (Neumorphic Card Button) */}
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.01, y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={handleSendGmail}
                            className="w-full p-4 rounded-2xl bg-[#eef2f7] hover:bg-[#f3f6fa] border border-white/90 shadow-[5px_5px_13px_#d1d9e6,-5px_-5px_13px_#ffffff] hover:shadow-[7px_7px_18px_#c8d2e2,-7px_-7px_18px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] transition-all cursor-pointer group flex items-center justify-between gap-3 text-left"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="w-12 h-12 rounded-2xl bg-[#eef2f7] p-1 flex items-center justify-center shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/90 shrink-0 group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full rounded-xl bg-red-500/10 text-[#e50000] flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(229,0,0,0.15)]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-[#e50000] font-poppins transition-colors">
                                            {language === 'en' ? 'Send via Gmail' : 'Gmail मार्फत पठाउनुहोस्'}
                                        </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">
                                        {presidentName} • <span className="text-slate-600 font-semibold">{presidentEmail}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-xl bg-[#eef2f7] text-[#e50000] flex items-center justify-center shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 shrink-0 transition-all">
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </motion.button>

                        {/* Send via WhatsApp (Neumorphic Card Button) */}
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.01, y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={handleSendWhatsApp}
                            className="w-full p-4 rounded-2xl bg-[#eef2f7] hover:bg-[#f3f6fa] border border-white/90 shadow-[5px_5px_13px_#d1d9e6,-5px_-5px_13px_#ffffff] hover:shadow-[7px_7px_18px_#c8d2e2,-7px_-7px_18px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] transition-all cursor-pointer group flex items-center justify-between gap-3 text-left"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="w-12 h-12 rounded-2xl bg-[#eef2f7] p-1 flex items-center justify-center shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/90 shrink-0 group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full rounded-xl bg-emerald-500/10 text-[#00a86b] flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(0,168,107,0.15)]">
                                        <Send className="w-5 h-5 rotate-45 -mt-0.5" />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-[#00a86b] font-poppins transition-colors">
                                            {language === 'en' ? 'Send via WhatsApp' : 'WhatsApp मार्फत पठाउनुहोस्'}
                                        </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate mt-0.5">
                                        {presidentName} • <span className="text-slate-600 font-semibold">{displayPhoneFormatted}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-xl bg-[#eef2f7] text-[#00a86b] flex items-center justify-center shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 shrink-0 transition-all">
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
