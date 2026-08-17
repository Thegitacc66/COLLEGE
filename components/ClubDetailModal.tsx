"use client";

import React, { useState } from 'react';
import {
    X,
    Users,
    MapPin,
    Calendar,
    Award,
    Mail,
    Phone,
    Building2,
    CheckCircle2,
    UserPlus,
    Bell,
    GraduationCap
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

export interface ClubDetailModalProps {
    club?: Club | null;
    onClose?: () => void;
    events?: ClubEvent[];
    notices?: ClubNotice[];
    onRegisterEvent?: (eventId: string) => void;
    language?: Language;
}

export const ClubDetailModal: React.FC<ClubDetailModalProps> = ({
    club = DEFAULT_CLUB_SAMPLE,
    onClose = () => { },
    events = DEFAULT_CLUB_EVENTS,
    notices = [],
    onRegisterEvent = (_eventId: string) => { },
    language = 'en'
}) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'leadership' | 'events' | 'notices' | 'gallery'>('overview');

    if (!club) return null;

    const clubEvents = (events || []).filter((e) => e.clubId === club.id);
    const clubNotices = (notices || []).filter((n) => n.clubId === club.id);
    const achievementsList = club.achievements || [];
    const leadershipList = club.leadership || [];
    const galleryList = club.galleryImages || [];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">

                {/* Modal Header Banner */}
                <div className="relative bg-[#000d27] text-white p-6 sm:p-8 shrink-0">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md cursor-pointer transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-lg shrink-0 overflow-hidden border-2 border-amber-400">
                            <img
                                src={club.logo}
                                alt={club.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {club.category}
                                </span>
                                {club.establishedYear && (
                                    <span className="bg-amber-400 text-[#000d27] text-xs font-bold px-2.5 py-0.5 rounded-full">
                                        Est. {club.establishedYear}
                                    </span>
                                )}
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold font-poppins leading-tight">
                                {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                            </h2>

                            {club.roomLocation && (
                                <p className="text-sm text-gray-300 mt-1 flex flex-wrap items-center gap-4">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                                        {club.roomLocation}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tab Header Bar */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
                    {[
                        { id: 'overview', label: language === 'en' ? 'Overview' : 'अवलोकन' },
                        { id: 'leadership', label: language === 'en' ? 'Executive Board' : 'कार्यसमिति' },
                        { id: 'events', label: `${language === 'en' ? 'Events' : 'कार्यक्रमहरू'} (${clubEvents.length})` },
                        { id: 'notices', label: `${language === 'en' ? 'Notices' : 'सूचनाहरू'} (${clubNotices.length})` },
                        { id: 'gallery', label: language === 'en' ? 'Photo Gallery' : 'ग्यालेरी' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`py-3.5 px-4 font-bold text-xs sm:text-sm transition-all border-b-2 whitespace-nowrap cursor-pointer ${activeTab === tab.id
                                    ? 'border-blue-700 text-blue-700 bg-white'
                                    : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Body Content */}
                <div className="p-6 overflow-y-auto flex-1 space-y-6">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-[#000d27] font-poppins mb-2">
                                    {language === 'en' ? 'About Committee' : 'समितिको बारेमा'}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed font-inter">
                                    {club.description}
                                </p>
                            </div>

                            {/* Quick Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-500">Active Members</span>
                                        <p className="text-sm font-bold text-gray-900">{club.memberCount || 0}+ Enrolled</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-500">Faculty Advisor</span>
                                        <p className="text-sm font-bold text-gray-900">{club.facultyAdvisor || 'N/A'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-500">Official Contact</span>
                                        <p className="text-xs font-bold text-gray-900 truncate">{club.contactEmail || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Achievements */}
                            {achievementsList.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-[#000d27] font-poppins mb-3 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-amber-500" />
                                        <span>{language === 'en' ? 'Key Achievements & Milestones' : 'मुख्य उपलब्धिहरू'}</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {achievementsList.map((ach, idx) => {
                                            const title = typeof ach === 'string' ? ach : ach.title;
                                            const desc = typeof ach === 'object' ? ach.description : undefined;
                                            const date = typeof ach === 'object' ? ach.date : undefined;

                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                                    <div className="min-w-0 flex-1">
                                                        <span className="text-xs font-semibold text-gray-800 block">{title}</span>
                                                        {desc && <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">{desc}</p>}
                                                        {date && <span className="text-[10px] text-[#0c72b8] font-bold mt-1 inline-block">{date}</span>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Leadership Board Tab */}
                    {activeTab === 'leadership' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#000d27] font-poppins mb-2">
                                Executive Leadership & Faculty Advisors
                            </h3>
                            {leadershipList.length === 0 ? (
                                <p className="text-sm text-gray-500">No leadership records available for this committee.</p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {leadershipList.map((member) => (
                                        <div
                                            key={member.id}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/70"
                                        >
                                            <img
                                                src={member.avatarUrl}
                                                alt={member.name}
                                                referrerPolicy="no-referrer"
                                                className="w-14 h-14 rounded-full object-cover border-2 border-blue-600 shrink-0"
                                            />
                                            <div className="min-w-0 flex-1">
                                                <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md uppercase">
                                                    {member.role}
                                                </span>
                                                <h4 className="text-sm font-bold text-gray-900 mt-1 truncate">{member.name}</h4>
                                                <p className="text-xs text-gray-500 truncate">{member.department}</p>
                                                {member.phone && (
                                                    <a
                                                        href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                                        className="text-[11px] text-[#0c72b8] hover:text-blue-800 font-semibold flex items-center gap-1 mt-1 transition-colors hover:underline"
                                                        title={`Call ${member.phone}`}
                                                    >
                                                        <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
                                                        <span>{member.phone}</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Events Tab */}
                    {activeTab === 'events' && (
                        <div className="space-y-4">
                            {clubEvents.length === 0 ? (
                                <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                    <Calendar className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 font-medium">No upcoming events currently scheduled for this club.</p>
                                </div>
                            ) : (
                                clubEvents.map((evt) => (
                                    <div
                                        key={evt.id}
                                        className="p-4 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-300 transition-colors"
                                    >
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                                                {evt.category}
                                            </span>
                                            <h4 className="text-base font-bold text-gray-900">{evt.title}</h4>
                                            <p className="text-xs text-gray-500 flex flex-wrap items-center gap-3">
                                                <span>📅 {evt.date} • {evt.time}</span>
                                                <span>📍 {evt.venue}</span>
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => onRegisterEvent(evt.id)}
                                            disabled={evt.isRegistered}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors ${evt.isRegistered
                                                    ? 'bg-emerald-100 text-emerald-800'
                                                    : 'bg-blue-700 hover:bg-blue-800 text-white shadow-xs'
                                                }`}
                                        >
                                            {evt.isRegistered ? 'Registered ✓' : 'Register Now'}
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Notices Tab */}
                    {activeTab === 'notices' && (
                        <div className="space-y-4">
                            {clubNotices.length === 0 ? (
                                <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                    <Bell className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 font-medium">No official notices posted for this committee yet.</p>
                                </div>
                            ) : (
                                clubNotices.map((not) => (
                                    <div key={not.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                                                {not.category}
                                            </span>
                                            <span className="text-xs text-gray-400">{not.date}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2">{not.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">{not.content}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Gallery Tab */}
                    {activeTab === 'gallery' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryList.length === 0 ? (
                                <p className="text-sm text-gray-500 col-span-full">No photo gallery available.</p>
                            ) : (
                                galleryList.map((imgUrl, idx) => (
                                    <div key={idx} className="rounded-2xl overflow-hidden h-44 bg-gray-100 border border-gray-200">
                                        <img
                                            src={imgUrl}
                                            alt={`Activity photo ${idx + 1}`}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 shrink-0">
                    <span>Aadikavi Bhanubhakta Campus Student Portal</span>
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

