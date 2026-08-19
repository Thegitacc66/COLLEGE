import { useState } from "react";
import { Calendar, Bell, ChevronRight, FileText, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export interface Notice {
    id: string;
    titleEn: string;
    titleNp: string;
    date: string;
    category: "Urgent" | "Academic" | "Sports" | "Solidarity" | "General" | "Cultural" | string;
    contentEn: string;
    contentNp: string;
    isUrgent: boolean;
    imageDesc?: string;
}

export const FSU_NOTICES: Notice[] = [
    {
        id: "n1",
        titleEn: "Solidarity Vigil & Seek Justice for Inisha BK",
        titleNp: "इनिसा विकको लागि न्याय र ऐक्यवद्धता कार्यक्रम",
        date: "2026-07-15",
        category: "Solidarity",
        isUrgent: true,
        contentEn: "Free Students' Union Aadikavi Bhanubhakta Campus has organized a solidarity movement seeking immediate justice for student Inisha BK under the slogan 'JUSTICE DELAYED, JUSTICE DENIED'. A peaceful candlelit vigil and assembly will be held at the campus entrance. All students are requested to join in solidarity.",
        contentNp: "स्ववियु आदिकवि भानुभक्त क्याम्पसद्वारा 'JUSTICE DELAYED, JUSTICE DENIED' नारा अन्तर्गत विद्यार्थी इनिसा विकको लागि तत्काल न्याय माग गर्दै ऐक्यवद्धता र दीप प्रज्वलन कार्यक्रम आयोजना गरिएको छ। सम्पूर्ण विद्यार्थी साथीहरूलाई उपस्थितिका लागि हार्दिक अनुरोध गरिन्छ।"
    },
    {
        id: "n2",
        titleEn: "Annual Sports Week and Jersey Distribution",
        titleNp: "वार्षिक खेलकुद सप्ताह तथा जर्सी वितरण कार्यक्रम",
        date: "2026-07-12",
        category: "Sports",
        isUrgent: false,
        contentEn: "FSU President Anup Ale Magar, along with the sports committee, successfully distributed custom football jerseys to our collegiate soccer team representing Aadikavi Bhanubhakta Campus, Vyas-1, Tanahun. The matches begin tomorrow. Let's support our players in red!",
        contentNp: "स्ववियु अध्यक्ष अनुप आले मगर तथा खेलकुद उपसमितिद्वारा आदिकवि भानुभक्त क्याम्पसको प्रतिनिधित्व गर्ने फुटबल टोलीका खेलाडीहरूलाई जर्सी तथा खेलकुद सामग्री हस्तान्तरण गरिएको छ। प्रतियोगिता भोलिदेखि सुरु हुनेछ।"
    },
    {
        id: "n3",
        titleEn: "Submission of 15-Point Academic Demand Sheet",
        titleNp: "क्याम्पस प्रशासन र स्थानीय तहमा १५ बुँदे मागपत्र पेस",
        date: "2026-07-06",
        category: "Academic",
        isUrgent: true,
        contentEn: "A formal delegation led by FSU President Anup Ale Magar has submitted a 15-point memorandum to Campus Chief and local political heads (including Til Bahadur Thapa). The demands focus on library digitalization, technology-focused workshops, free career guidance, and promoting a vibrant startup culture among students.",
        contentNp: "स्ववियु अध्यक्ष अनुप आले मगरको नेतृत्वमा क्याम्पस प्रमुख र स्थानीय जनप्रतिनिधिहरू (तिल बहादुर थापा लगायत) समक्ष पुस्तकालय डिजिटलाईजेसन, प्राविधिक कार्यशाला, निःशुल्क करियर परामर्श र स्टार्टअप संस्कृति प्रवर्द्धनका लागि १५ बुँदे मागपत्र पेस गरिएको छ।"
    },
    {
        id: "n4",
        titleEn: "Classroom Interaction & Student Feedback Survey",
        titleNp: "कक्षाकोठा अन्तरक्रिया र विद्यार्थी प्रतिक्रिया सर्वेक्षण",
        date: "2026-06-28",
        category: "General",
        isUrgent: false,
        contentEn: "Our members are visiting classes to gather feedback on facilities, curriculum, and exam management. FSU is committed to voicing your concerns directly to the campus board. Share your suggestions with any of our visiting members or submit online through the portal.",
        contentNp: "भौतिक पूर्वाधार, पाठ्यक्रम र परीक्षा व्यवस्थापनका विषयमा विद्यार्थी प्रतिक्रिया संकलन गर्न स्ववियु सदस्यहरू विभिन्न कक्षाकोठाहरूमा पुगिरहनुभएको छ। तपाईंका समस्या र सुझावहरू हाम्रो अनलाइन पोर्टल मार्फत पनि पेस गर्न सक्नुहुन्छ।"
    },
    {
        id: "n5",
        titleEn: "Inter-Faculty Futsal Tournament 2026",
        titleNp: "अन्तर-संकाय फुटसल प्रतियोगिता २०८३",
        date: "2026-08-21",
        category: "Sports",
        isUrgent: true,
        contentEn: "The Free Student Union (FSU) of Aadikavi Bhanubhakta Campus proudly announces the Inter-Faculty Futsal Tournament 2026. The tournament will be held from 21 - 23 August 2026 at Damauli Futsal Court. Students from all faculties are encouraged to participate and represent their faculty. Boys' category prizes include Rs. 8,000 for first place and Rs. 5,000 for second place, while the Girls' category offers Rs. 5,000 for first place and Rs. 3,000 for second place. All winners will receive medals and certificates. Register now and be part of this exciting competition.",
        contentNp: "आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (FSU) द्वारा आयोजित अन्तर-संकाय फुटसल प्रतियोगिता २०८३ मा सम्पूर्ण विद्यार्थीहरूलाई हार्दिक निमन्त्रणा गरिन्छ। प्रतियोगिता २०८३ भदौ ५ देखि ७ गते (२१–२३ अगस्ट २०२६) सम्म दमौली फुटसल कोर्टमा सञ्चालन हुनेछ। सबै संकायका विद्यार्थीहरूले आफ्नो संकायको प्रतिनिधित्व गर्दै सहभागिता जनाउन सक्नेछन्। छात्रतर्फ प्रथम पुरस्कार रु. ८,000 तथा द्वितीय पुरस्कार रु. ५,000, छात्रीतर्फ प्रथम पुरस्कार रु. ५,000 तथा द्वितीय पुरस्कार रु. ३,000 प्रदान गरिनेछ। सबै विजेताहरूलाई मेडल र प्रमाणपत्र पनि प्रदान गरिनेछ। समयमै दर्ता गरी प्रतियोगितामा सहभागी बन्नुहोस्।"
    },
    {
        id: "n6",
        titleEn: "Inter-Faculty Original Teej Song Competition 2026",
        titleNp: "अन्तर-संकाय मौलिक तीज गीत प्रतियोगिता २०८३",
        date: "2026-08-25",
        category: "Cultural",
        isUrgent: false,
        contentEn: "The Free Student Union (FSU) of Aadikavi Bhanubhakta Campus is organizing the Inter-Faculty Original Teej Song Competition 2026 to celebrate the rich traditions of Teej and promote Nepali culture through music. Students from all faculties are invited to participate by presenting original Teej songs and showcasing their creativity, teamwork, and cultural talent. Outstanding performances will be recognized with attractive prizes, medals, and certificates. We encourage every faculty to register and make this cultural celebration memorable.",
        contentNp: "आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (FSU) द्वारा आयोजित अन्तर-संकाय मौलिक तीज गीत प्रतियोगिता २०८३ मा सम्पूर्ण विद्यार्थीहरूलाई हार्दिक निमन्त्रणा गरिन्छ। नेपाली संस्कृति, परम्परा तथा मौलिक सिर्जनशीलताको संरक्षण र प्रवर्द्धन गर्ने उद्देश्यले आयोजना गरिएको यस प्रतियोगितामा सबै संकायका विद्यार्थीहरूले मौलिक तीज गीत प्रस्तुत गर्दै आफ्नो प्रतिभा प्रदर्शन गर्न सक्नेछन्। उत्कृष्ट प्रस्तुतिलाई आकर्षक नगद पुरस्कार, मेडल तथा प्रमाणपत्र प्रदान गरिनेछ। समयमै दर्ता गरी आफ्नो संकायको प्रतिनिधित्व गर्दै यस सांस्कृतिक कार्यक्रममा सहभागी बन्नुहोस्।"
    }
];

interface NoticeBoardProps {
    language: "en" | "np";
}

export default function NoticeBoard({ language }: NoticeBoardProps) {
    const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
    const [filter, setFilter] = useState<string>("all");
    const [showAll, setShowAll] = useState<boolean>(false);

    const categories = ["all", "Solidarity", "Sports", "Academic", "General", "Cultural"];
    const INITIAL_LIMIT = 3;

    // Sort notices by date descending (most recent date first)
    const sortedNotices = [...FSU_NOTICES].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const filteredNotices = sortedNotices.filter((n) => {
        if (filter === "all") return true;
        return n.category.toLowerCase() === filter.toLowerCase();
    });

    const displayedNotices = showAll ? filteredNotices : filteredNotices.slice(0, INITIAL_LIMIT);

    const handleFilterChange = (cat: string) => {
        setFilter(cat);
        setShowAll(false);
    };

    return (
        <section id="notices" className="py-14 neu-card rounded-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 w-full min-w-0 max-w-full">
                    <div className="min-w-0 max-w-full">
                        <span className="neu-flat-sm text-[#052855] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                            <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                            {language === "en" ? "Announcements" : "सूचना तथा गतिविधि"}
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                            {language === "en" ? "FSU Notice Board" : "स्ववियु सूचना बोर्ड"}
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl text-sm leading-relaxed">
                            {language === "en"
                                ? "Stay informed on active student issues, administrative submissions, campaigns, and upcoming college events organized by the FSU."
                                : "स्ववियुले सञ्चालन गरेका आन्दोलन, मागपत्र पेस, जर्सी वितरण तथा महत्वपूर्ण निर्णयहरूका सूचनाहरू प्राप्त गर्नुहोस्।"}
                        </p>
                    </div>

                    {/* Categorized Tabs with Neumorphic buttons */}
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto min-w-0 max-w-full neu-pressed-sm p-1.5 rounded-2xl bg-[#eef2f7]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all capitalize shrink-0 cursor-pointer ${filter === cat
                                    ? "neu-button-navy text-white shadow-md"
                                    : "text-slate-600 hover:text-[#052855]"
                                    }`}
                            >
                                {cat === "all"
                                    ? language === "en"
                                        ? "All"
                                        : "सबै"
                                    : language === "en"
                                        ? cat
                                        : cat === "Solidarity"
                                            ? "ऐक्यवद्धता"
                                            : cat === "Sports"
                                                ? "खेलकुद"
                                                : cat === "Academic"
                                                    ? "शैक्षिक"
                                                    : cat === "Cultural"
                                                        ? "सांस्कृतिक"
                                                        : "सामान्य"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notices list & details split view */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* List of Notices */}
                    <div className="lg:col-span-3 space-y-4">
                        {displayedNotices.map((notice) => (
                            <div
                                key={notice.id}
                                onClick={() => setSelectedNotice(notice)}
                                className={`p-5 rounded-2xl transition-all cursor-pointer relative ${selectedNotice?.id === notice.id
                                    ? "neu-pressed border-l-4 border-red-500 bg-[#eef2f7]"
                                    : "neu-flat hover:scale-[1.01]"
                                    }`}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold tracking-wider uppercase ${notice.isUrgent
                                                ? "neu-button-red text-white shadow-xs"
                                                : "neu-pressed-sm text-slate-700"
                                                }`}
                                        >
                                            {notice.category}
                                        </span>
                                        {notice.isUrgent && (
                                            <span className="flex h-2 w-2 rounded-full bg-red-600 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-medium">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {notice.date}
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
                                    {language === "en" ? notice.titleEn : notice.titleNp}
                                </h3>
                                <p className="mt-2 text-slate-600 text-xs line-clamp-2 leading-relaxed text-justify">
                                    {language === "en" ? notice.contentEn : notice.contentNp}
                                </p>

                                <div className="mt-4 flex items-center justify-between text-xs text-blue-900 font-bold">
                                    <span className="inline-flex items-center gap-1">
                                        <FileText className="w-3.5 h-3.5" />
                                        {language === "en" ? "Read Details" : "विस्तृत विवरण"}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedNotice?.id === notice.id ? "translate-x-1 text-red-600" : ""}`} />
                                </div>
                            </div>
                        ))}

                        {/* Show More / Show Less Button */}
                        {filteredNotices.length > INITIAL_LIMIT && (
                            <div className="pt-2 text-center">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="neu-button inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl text-slate-800 font-bold text-xs transition-all cursor-pointer"
                                >
                                    <span>
                                        {showAll
                                            ? language === "en"
                                                ? "Show Less"
                                                : "कम देखाउनुहोस्"
                                            : language === "en"
                                                ? `Show More Notices (${filteredNotices.length - INITIAL_LIMIT} more)`
                                                : `थप सूचनाहरू हेर्नुहोस् (अझै ${filteredNotices.length - INITIAL_LIMIT} वटा)`}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Active Notice Detail Frame */}
                    <div className="lg:col-span-2">
                        {selectedNotice ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="neu-card p-6 rounded-3xl sticky top-24 space-y-4"
                            >
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="neu-flat-sm text-red-600 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                                        {selectedNotice.category} Notice
                                    </span>
                                    <div className="text-xs text-slate-500 font-mono font-bold flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {selectedNotice.date}
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                                    {selectedNotice.titleEn}
                                </h3>
                                <h4 className="text-sm text-blue-900 font-bold font-devanagari pb-2 border-b border-slate-200">
                                    {selectedNotice.titleNp}
                                </h4>

                                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                                    <p className="font-sans text-justify">{selectedNotice.contentEn}</p>
                                    <p className="font-devanagari text-slate-800 neu-pressed-sm p-4 rounded-2xl border-l-4 border-red-500 text-justify">
                                        {selectedNotice.contentNp}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                                    <span className="font-medium text-[11px]">Issued By: FSU Secretariat</span>
                                    <button
                                        onClick={() => {
                                            const text = `${selectedNotice.titleEn}\n\n${selectedNotice.contentEn}`;
                                            navigator.clipboard.writeText(text);
                                        }}
                                        className="neu-button px-3.5 py-1.5 rounded-xl font-bold text-[10px] text-slate-700 hover:text-blue-900 cursor-pointer"
                                    >
                                        Copy Notice
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center neu-pressed rounded-3xl p-6 text-center text-slate-500 bg-[#eef2f7]">
                                <div className="w-14 h-14 neu-flat rounded-2xl flex items-center justify-center text-slate-400 mb-3">
                                    <FileText className="w-7 h-7 animate-pulse text-blue-900" />
                                </div>
                                <p className="text-sm font-bold text-slate-800">
                                    {language === "en" ? "Select a notice to view details" : "विवरण हेर्नको लागि सूचना चयन गर्नुहोस्"}
                                </p>
                                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                                    {language === "en"
                                        ? "Click on any item on the notice list to see full English and Nepali descriptions."
                                        : "नेपाली र अंग्रेजी विवरणहरू हेर्न सूचीमा क्लिक गर्नुहोस्।"}
                                </p>
                                {filteredNotices.length > 0 && (
                                    <button
                                        onClick={() => setSelectedNotice(filteredNotices[0])}
                                        className="mt-4 neu-button px-4 py-1.5 rounded-xl text-xs text-blue-900 font-bold inline-flex items-center gap-1 cursor-pointer"
                                    >
                                        {language === "en" ? "Open first notice" : "पहिलो सूचना खोल्नुहोस्"}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
