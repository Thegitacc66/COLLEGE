"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  ALL_CLUBS,
  UPCOMING_EVENTS,
  CAMPUS_NOTICES
} from './data/clubsData';
import {
  Club,
  ClubEvent,
  ClubNotice,
  Language,
  ViewMode
} from './data/clubsData';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DashboardControls } from '@/components/DashboardControls';
import { ClubCard } from '@/components/ClubCard';
import { ClubPage } from '@/components/ClubPage';
import { ClubDetailModal } from '@/components/ClubDetailModal';
import { EventsCalendarSection } from '@/components/EventsCalendarSection';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Building2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [clubs, setClubs] = useState<Club[]>(ALL_CLUBS);
  const [events, setEvents] = useState<ClubEvent[]>(UPCOMING_EVENTS);
  const [notices, setNotices] = useState<ClubNotice[]>(CAMPUS_NOTICES);

  // Selection & View States
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  // Filter & View States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [language, setLanguage] = useState<Language>('en');

  // Committees Pagination / Expansion State
  const [showAllCommittees, setShowAllCommittees] = useState<boolean>(false);
  const INITIAL_COMMITTEES_COUNT = 3;

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Categories extraction
  const categories = useMemo(() => {
    const cats = Array.from(new Set(clubs.map((c) => c.category)));
    return cats;
  }, [clubs]);

  // Filtered & Sorted Clubs list
  const filteredClubs = useMemo(() => {
    let result = [...clubs];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((c) => c.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.nepaliName && c.nepaliName.includes(q)) ||
          c.category.toLowerCase().includes(q) ||
          (c.facultyAdvisor && c.facultyAdvisor.toLowerCase().includes(q)) ||
          (c.president && c.president.toLowerCase().includes(q)) ||
          (c.description && c.description.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'members-desc') {
      result.sort((a, b) => (b.memberCount || 0) - (a.memberCount || 0));
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'established') {
      result.sort((a, b) => (a.establishedYear || 0) - (b.establishedYear || 0));
    }

    return result;
  }, [clubs, selectedCategory, searchQuery, sortBy]);

  // Displayed clubs based on Show More / Show Less limit
  const displayedClubs = useMemo(() => {
    if (showAllCommittees) return filteredClubs;
    return filteredClubs.slice(0, INITIAL_COMMITTEES_COUNT);
  }, [filteredClubs, showAllCommittees]);

  // Grouped by Category for 'categorized' view mode
  const categorizedClubs = useMemo<Record<string, Club[]>>(() => {
    const groups: Record<string, Club[]> = {};
    const clubsToGroup = showAllCommittees ? filteredClubs : filteredClubs.slice(0, INITIAL_COMMITTEES_COUNT);
    clubsToGroup.forEach((club) => {
      if (!groups[club.category]) {
        groups[club.category] = [];
      }
      groups[club.category].push(club);
    });
    return groups;
  }, [filteredClubs, showAllCommittees]);

  // Handlers
  const handleRegisterEvent = (eventId: string) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === eventId
          ? {
            ...e,
            isRegistered: true,
            registeredCount: (e.registeredCount || 0) + 1
          }
          : e
      )
    );
    showToast('Event Pass Registered Successfully! See details in calendar.');
  };

  const handleSelectClub = (club: Club | null) => {
    setSelectedClub(club);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // IF A CLUB IS SELECTED, RENDER FULL COMMITTEE HUB PAGE
  if (selectedClub) {
    return (
      <div className="min-h-screen flex flex-col bg-[#eef2f7] text-[#1b1b1e] font-quicksand">
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-[#000d27] text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400 flex items-center gap-3 animate-in slide-in-from-bottom-5">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* Global Navigation Bar */}
        <Header
          clubs={clubs}
          onSelectClub={handleSelectClub}
          onSearchChange={(q) => {
            setSearchQuery(q);
            if (q.trim()) {
              handleSelectClub(null);
            }
          }}
          searchQuery={searchQuery}
          language={language}
          onLanguageToggle={() => setLanguage(language === 'en' ? 'np' : 'en')}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            handleSelectClub(null);
            setSelectedCategory(cat);
          }}
          onHomeClick={() => handleSelectClub(null)}
          showBackButton={true}
          onBack={() => handleSelectClub(null)}
        />

        <ClubPage
          club={selectedClub}
          onBack={() => handleSelectClub(null)}
          events={events}
          notices={notices}
          onRegisterEvent={handleRegisterEvent}
          onApplyJoin={(_clubId) => {
            showToast('Membership application submitted to committee executive board!');
          }}
          language={language}
        />

        <Footer
          language={language}
          onNavigateToCategory={(cat) => {
            handleSelectClub(null);
            setSelectedCategory(cat);
          }}
        />

        {/* Scroll To Top Action */}
        <ScrollToTop />
      </div>
    );
  }

  // MAIN DASHBOARD VIEW
  return (
    <div className="min-h-screen flex flex-col bg-[#eef2f7] text-[#1b1b1e] font-inter">
      {/* Scroll Progress Indicator Bar */}
      <ScrollProgressBar />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#000d27] text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400 flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header
        clubs={clubs}
        onSelectClub={handleSelectClub}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        language={language}
        onLanguageToggle={() => setLanguage(language === 'en' ? 'np' : 'en')}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Hero Section Banner */}
      <HeroSection
        onExploreClick={() => {
          const el = document.getElementById('clubs-dashboard-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        language={language}
        totalClubsCount={clubs.length}
      />

      {/* Main Interactive Dashboard Canvas */}
      <main id="clubs-dashboard-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12">
        {/* Filter Controls & Search Summary Bar */}
        <DashboardControls
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filteredCount={filteredClubs.length}
          totalCount={clubs.length}
          searchQuery={searchQuery}
          onClearSearch={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}
          language={language}
        />

        {/* 1) GRID CARD VIEW MODE */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedClubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                onSelect={(c) => handleSelectClub(c)}
                language={language}
              />
            ))}
          </div>
        )}

        {/* 2) LIST TABLE VIEW MODE */}
        {viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="neu-flat rounded-2xl p-2 sm:p-4 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-[#000d27] text-white text-xs uppercase font-bold tracking-wider rounded-xl">
                  <tr>
                    <th className="p-4 rounded-l-xl whitespace-nowrap">Committee Name</th>
                    <th className="p-4 whitespace-nowrap">Category</th>
                    <th className="p-4 whitespace-nowrap">Faculty Advisor</th>
                    <th className="p-4 whitespace-nowrap">President</th>
                    <th className="p-4 text-center whitespace-nowrap">Members</th>
                    <th className="p-4 text-right rounded-r-xl whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-inter">
                  {displayedClubs.map((club) => (
                    <tr key={club.id} className="hover:bg-blue-50/60 transition-colors">
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-3">
                          <img
                            src={club.logo}
                            alt={club.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full object-cover neu-pressed shrink-0"
                          />
                          <div>
                            <span className="font-bold text-gray-900 block font-poppins">
                              {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                            </span>
                            <span className="text-xs text-gray-400">Est. {club.establishedYear} • {club.roomLocation}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle whitespace-nowrap">
                        <span className="inline-flex items-center whitespace-nowrap neu-pressed text-[#0c72b8] text-xs font-semibold px-3 py-1 rounded-full">
                          {club.category}
                        </span>
                      </td>
                      <td className="p-4 align-middle text-xs font-medium text-gray-700">{club.facultyAdvisor}</td>
                      <td className="p-4 align-middle text-xs font-medium text-gray-700">{club.president}</td>
                      <td className="p-4 align-middle text-center whitespace-nowrap">
                        <span className="neu-pressed text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                          {club.memberCount}+
                        </span>
                      </td>
                      <td className="p-4 align-middle text-right whitespace-nowrap">
                        <div className="flex items-center justify-end">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSelectClub(club)}
                            className="px-3.5 py-1.5 neu-button-primary text-white text-xs font-bold rounded-xl cursor-pointer transition-colors whitespace-nowrap"
                          >
                            {language === 'en' ? 'View Committee' : 'समिति हेर्नुहोस्'}
                          </motion.button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* 3) CATEGORIZED ACCORDION VIEW MODE */}
        {viewMode === 'categorized' && (
          <div className="space-y-8">
            {(Object.entries(categorizedClubs) as [string, Club[]][]).map(([categoryName, clubList]) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="neu-flat rounded-2xl p-6"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0c72b8]" />
                    <h3 className="text-xl font-bold text-[#000d27] font-poppins">{categoryName}</h3>
                  </div>
                  <span className="neu-pressed text-[#0c72b8] text-xs font-bold px-3 py-1 rounded-full">
                    {clubList.length} Committee{clubList.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {clubList.map((club) => (
                    <ClubCard
                      key={club.id}
                      club={club}
                      onSelect={(c) => handleSelectClub(c)}
                      language={language}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Global Show More / Show Less Committees Button */}
        {filteredClubs.length > INITIAL_COMMITTEES_COUNT && (
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAllCommittees(!showAllCommittees)}
              className="px-6 py-3 neu-button text-gray-800 hover:text-[#0c72b8] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>
                {showAllCommittees
                  ? (language === 'en' ? 'Show Less Committees' : 'कम समितिहरू देखाउनुहोस्')
                  : (language === 'en'
                    ? `Show More Committees (${filteredClubs.length - INITIAL_COMMITTEES_COUNT} more)`
                    : `थप समितिहरू हेर्नुहोस् (${filteredClubs.length - INITIAL_COMMITTEES_COUNT} बाँकी)`)}
              </span>
              {showAllCommittees ? (
                <ChevronUp className="w-4 h-4 text-[#0c72b8] group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#0c72b8] group-hover:translate-y-0.5 transition-transform" />
              )}
            </motion.button>
          </div>
        )}

        {/* Empty State */}
        {filteredClubs.length === 0 && (
          <div className="neu-flat rounded-2xl p-12 text-center">
            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No student committees match your filter</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try resetting your search query or selecting "All 14 Clubs" to explore all active committees.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-5 py-2 neu-button-primary text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Events Calendar & Registration Section */}
      <EventsCalendarSection
        events={events}
        onRegisterEvent={handleRegisterEvent}
        language={language}
        onSelectClubById={(clubId) => {
          const matched = clubs.find((c) => c.id === clubId);
          if (matched) {
            handleSelectClub(matched);
          }
        }}
      />

      {/* Modals & Dialog Views */}
      <ClubDetailModal
        club={selectedClub}
        onClose={() => setSelectedClub(null)}
        events={events}
        notices={notices}
        onRegisterEvent={handleRegisterEvent}
        language={language}
      />

      {/* Institutional Campus Footer */}
      <Footer
        language={language}
      />

      {/* Global Scroll To Top Button with Circular Progress */}
      <ScrollToTop />
    </div>
  );
}

