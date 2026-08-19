import { useState } from "react";
import { Images, Expand, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface GalleryImage {
    id: string;
    titleEn: string;
    titleNp: string;
    category: "Protest" | "Campaign" | "Interaction" | "Sports" | "Academic" | "Solidarity" | string;
    descriptionEn: string;
    descriptionNp: string;
    placeholderBg: string;
    symbolicEmoji: string;
    imageUrl?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: "g1",
        titleEn: "In Solidarity with INISHA BK",
        titleNp: "इनिसा विकको न्यायको लागि ऐक्यवद्धता र्याली",
        category: "Solidarity",
        descriptionEn: "Justice for Inisha BK Solidarity Rally - unified student march demanding safety and student protection at Aadikavi Campus.",
        descriptionNp: "इनिसा विकको तत्काल न्यायका लागि क्याम्पस गेट बाहिर आयोजित वृहत दीप प्रज्वलन र शान्तिपूर्ण ऐक्यवद्धता प्रदर्शन।",
        placeholderBg: "from-red-900 to-slate-950",
        symbolicEmoji: "🕯️",
        imageUrl: "/img12.jpeg"
    },
    {
        id: "g2",
        titleEn: "Awareness Campaign",
        titleNp: "क्याम्पस सचेतना कार्यक्रम",
        category: "Interaction",
        descriptionEn: "Standing in solidarity during campus awareness and leadership workshops, encouraging participation.",
        descriptionNp: "विद्यार्थी सचेतना तथा व्यावहारिक नेतृत्व विकास कार्यक्रमको एक सुखद क्षण।",
        placeholderBg: "from-blue-900 to-indigo-950",
        symbolicEmoji: "🤝",
        imageUrl: "/img4.jpeg"
    },
    {
        id: "g3",
        titleEn: "Official Jersey Launch",
        titleNp: "आधिकारिक फुटबल जर्सी अनावरण",
        category: "Sports",
        descriptionEn: "Supporting Sports: President Anup Ale Magar presenting the official team jerseys to our campus players.",
        descriptionNp: "खेलकुद प्रवर्द्धन: स्ववियु अध्यक्ष अनुप आले मगरद्वारा क्याम्पस फुटबल टोलीलाई नयाँ जर्सी हस्तान्तरण।",
        placeholderBg: "from-rose-700 to-slate-900",
        symbolicEmoji: "👕",
        imageUrl: "/imag.jpeg"
    },
    {
        id: "g4",
        titleEn: "Promoting Student Athletics",
        titleNp: "खेलकुद विकास तथा सामग्री",
        category: "Sports",
        descriptionEn: "Promoting Student Athletics: Union members with the new campus sports kits preparing for the league.",
        descriptionNp: "खेलाडीहरू र स्ववियु पदाधिकारीहरू नयाँ फुटबल जर्सी तथा खेलकुद सामग्रीका साथ एकीकृत।",
        placeholderBg: "from-blue-800 to-red-800",
        symbolicEmoji: "⚽",
        imageUrl: "/sp2.jpeg"
    },
    {
        id: "g5",
        titleEn: "Academic Guidance",
        titleNp: "शैक्षिक सहजीकरण र सहयोग",
        category: "Academic",
        descriptionEn: "Academic Support: Facilitating student resources and college administrative assistance.",
        descriptionNp: "विद्यार्थीहरूलाई शैक्षिक सामग्री वितरण र फारम दर्ता प्रक्रियामा सहजीकरण।",
        placeholderBg: "from-teal-800 to-slate-900",
        symbolicEmoji: "📚",
        imageUrl: "/img11.jpeg"
    },
    {
        id: "g6",
        titleEn: "Advocating for Student Rights",
        titleNp: "प्रशासन समक्ष ज्ञापन पत्र पेस",
        category: "Campaign",
        descriptionEn: "Advocating for Student Rights: Submitting official memorandums and 15-point charter to the campus administration.",
        descriptionNp: "विद्यार्थी हकहित र शैक्षिक सुधारका विषय समेटिएको ज्ञापन पत्र क्याम्पस प्रशासनलाई बुझाउँदै स्ववियु प्रतिनिधि।",
        placeholderBg: "from-slate-800 to-sky-950",
        symbolicEmoji: "📄",
        imageUrl: "/img6.jpeg"
    },
    {
        id: "g7",
        titleEn: "Union Proposals Submission",
        titleNp: "विद्यार्थी प्रस्ताव दर्ता",
        category: "Campaign",
        descriptionEn: "Strengthening Communication: Official handover of student union proposals for library digitalization.",
        descriptionNp: "सुदृढ संचार तथा डिजिटल पुस्तकालय सम्बन्धी प्रस्तावहरू आधिकारिक रूपमा दर्ता गरिँदै।",
        placeholderBg: "from-emerald-800 to-slate-900",
        symbolicEmoji: "🤝",
        imageUrl: "/imgee.png"
    },
    {
        id: "g8",
        titleEn: "Annual Student Gathering",
        titleNp: "स्ववियु वार्षिक भेला तथा स्वागत",
        category: "Solidarity",
        descriptionEn: "FSU Annual Gathering: Celebrating student unity, academic excellence, and progressive leadership.",
        descriptionNp: "स्ववियु वार्षिक भेलामा विद्यार्थी एकता, सहभागिता र लोकतान्त्रिक प्रतिबद्धता प्रदर्शन।",
        placeholderBg: "from-amber-800 to-indigo-950",
        symbolicEmoji: "🎉",
        imageUrl: "/img8.jpeg"
    },
    {
        id: "g9",
        titleEn: "Inclusive Leadership Desk",
        titleNp: "स्ववियु अध्यक्ष र सरोकारवाला छलफल",
        category: "Interaction",
        descriptionEn: "Inclusive Leadership: Engaging directly with students, faculty, and delegates at the Union office.",
        descriptionNp: "समावेशी नेतृत्व: स्ववियु कार्यालयमा विद्यार्थी र प्राध्यापकहरूसँग निरन्तर संवाद तथा सर-सल्लाह।",
        placeholderBg: "from-blue-900 to-neutral-900",
        symbolicEmoji: "💼",
        imageUrl: "/img10.jpeg"
    },
    {
        id: "g10",
        titleEn: "Mourning Session for Inisha BK",
        titleNp: "इनिशा बिकको सम्झनामा श्रद्धाञ्जली सभा",
        category: "Tribute",
        descriptionEn: "A heartfelt mourning session organized by the Free Students' Union to pay tribute to the late Inisha BK. Students, teachers, and staff gathered to offer condolences, observe a moment of silence, and honor her memory.",
        descriptionNp: "स्वर्गीय इनिशा बिकको सम्झनामा स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित श्रद्धाञ्जली सभामा विद्यार्थी, शिक्षक तथा कर्मचारीहरूको सहभागिता। दिवंगत आत्माप्रति श्रद्धाञ्जली अर्पण गर्दै मौनधारण गरिएको क्षण।",
        placeholderBg: "from-slate-800 to-gray-900",
        symbolicEmoji: "🕯️",
        imageUrl: "/img5.jpeg"
    },
    {
        id: "g11",
        titleEn: "Donation Campaign",
        titleNp: "दान अभियान",
        category: "Social Service",
        descriptionEn: "A donation campaign organized by the Free Students' Union to support individuals and families in need. Students, teachers, and well-wishers came together to contribute generously, promoting the values of compassion, unity, and social responsibility.",
        descriptionNp: "आवश्यकतामा परेका व्यक्ति तथा परिवारहरूको सहयोगका लागि स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित दान अभियान। विद्यार्थी, शिक्षक तथा शुभेच्छुकहरूको सक्रिय सहभागिताले सहयोग, एकता र सामाजिक उत्तरदायित्वको भावना झल्काएको कार्यक्रम।",
        placeholderBg: "from-blue-950 to-slate-900",
        symbolicEmoji: "🤝",
        imageUrl: "/img7.jpeg"
    },
    {
        id: "g12",
        titleEn: "Extracurricular Athletics",
        titleNp: "अतिरिक्त खेलकुद गतिविधि",
        category: "Sports",
        descriptionEn: "Fostering Teamwork: Supporting dynamic campus sports leagues and extracurricular participation.",
        descriptionNp: "क्याम्पसमा अतिरिक्त क्रियाकलाप र खेलकुद सहभागिताको विकासका लागि खेल आयोजना।",
        placeholderBg: "from-red-700 to-indigo-950",
        symbolicEmoji: "🏆",
        imageUrl: "/sp3.jpeg"
    }
];

interface PhotoGalleryProps {
    language: "en" | "np";
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [selectedImg, setSelectedImg] = useState<GalleryImage | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);

    const categories = ["all", "Protest", "Sports", "Solidarity", "Campaign", "Interaction"];
    const INITIAL_LIMIT = 6;

    const filteredImages = GALLERY_IMAGES.filter((img) => {
        if (activeCategory === "all") return true;
        return img.category.toLowerCase() === activeCategory.toLowerCase();
    });

    const displayedImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_LIMIT);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setShowAll(false);
    };

    return (
        <section id="gallery" className="py-14 neu-card rounded-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <span className="neu-flat-sm text-red-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                            <Images className="w-3.5 h-3.5" />
                            {language === "en" ? "Media Archive" : "तस्वीर तथा मिडिया ग्यालेरी"}
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                            {language === "en" ? "FSU in Action" : "मैदानमा स्ववियु: झलकहरू"}
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl text-sm leading-relaxed">
                            {language === "en"
                                ? "Visual updates from active protest movements, football games, classroom dialogs, and petition submissions in Tanahun, Nepal."
                                : "अनेरास्ववियु तथा स्ववियुका आन्दोलन, खेलकुद प्रतियोगिता, कक्षाकोठा छलफल र आधिकारिक अभियानका मुख्य झलकहरू।"}
                        </p>
                    </div>

                    {/* Categories Tab with Neumorphic Styling */}
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto neu-pressed-sm p-2 rounded-2xl bg-[#eef2f7]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize shrink-0 cursor-pointer ${activeCategory === cat
                                    ? "neu-button-navy text-white shadow-md"
                                    : "neu-button text-slate-700 hover:text-blue-900"
                                    }`}
                            >
                                {cat === "all"
                                    ? language === "en"
                                        ? "All Media"
                                        : "सबै झलक"
                                    : language === "en"
                                        ? cat
                                        : cat === "Protest"
                                            ? "आन्दोलन"
                                            : cat === "Sports"
                                                ? "खेलकुद"
                                                : cat === "Solidarity"
                                                    ? "ऐक्यवद्धता"
                                                    : cat === "Campaign"
                                                        ? "ज्ञापनपत्र"
                                                        : "अन्तरक्रिया"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Media Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    <AnimatePresence mode="popLayout">
                        {displayedImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedImg(img)}
                                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer neu-flat hover:scale-[1.02] transition-all p-2 bg-[#eef2f7]"
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    {/* Image or Gradient fallback */}
                                    {img.imageUrl ? (
                                        <img
                                            src={img.imageUrl}
                                            alt={language === "en" ? img.titleEn : img.titleNp}
                                            referrerPolicy="no-referrer"
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${img.placeholderBg} opacity-85 group-hover:scale-105 transition-transform duration-500`}></div>
                                    )}
                                    {/* Subtle dark overlay for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:via-black/20 transition-all duration-300"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-3.5 left-3.5 z-10 neu-button-navy text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        {img.category}
                                    </div>

                                    <div className="absolute top-3.5 right-3.5 z-10 bg-black/50 text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Expand className="w-4 h-4" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 pointer-events-none">
                                        <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                                            {language === "en" ? img.titleEn : img.titleNp}
                                        </h3>
                                        <p className="text-slate-200 text-xs mt-1 line-clamp-2 leading-relaxed font-devanagari">
                                            {language === "en" ? img.descriptionEn : img.descriptionNp}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less Button */}
                {filteredImages.length > INITIAL_LIMIT && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="neu-button inline-flex items-center gap-2 text-blue-950 px-7 py-3 rounded-full text-sm font-bold shadow-md transition-all cursor-pointer hover:scale-105"
                        >
                            <span>
                                {showAll
                                    ? language === "en"
                                        ? "Show Less"
                                        : "कम देखाउनुहोस्"
                                    : language === "en"
                                        ? `Show More (${filteredImages.length - INITIAL_LIMIT} more)`
                                        : `थप हेर्नुहोस् (${filteredImages.length - INITIAL_LIMIT} थप)`}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 text-blue-900" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-blue-900" />
                            )}
                        </button>
                    </div>
                )}

                {/* Modal Lightbox for Images */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
                            onClick={() => setSelectedImg(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="neu-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl bg-[#eef2f7]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Visual Header */}
                                <div className="h-64 sm:h-80 relative bg-slate-950 flex items-center justify-center overflow-hidden">
                                    {selectedImg.imageUrl ? (
                                        <img
                                            src={selectedImg.imageUrl}
                                            alt={selectedImg.titleEn}
                                            referrerPolicy="no-referrer"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedImg.placeholderBg} opacity-90 flex items-center justify-center`}>
                                            <Images className="w-16 h-16 text-white/40" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                                    <button
                                        onClick={() => setSelectedImg(null)}
                                        className="absolute top-4 right-4 neu-button-navy text-white p-2 rounded-full transition-all border border-white/10 z-10 cursor-pointer hover:scale-110"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 sm:p-7">
                                    <span className="neu-flat-sm text-red-600 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {selectedImg.category} Archives
                                    </span>

                                    <h3 className="text-xl font-extrabold mt-3 text-slate-900">
                                        {selectedImg.titleEn}
                                    </h3>
                                    <h4 className="text-base text-blue-900 font-bold font-devanagari mt-1">
                                        {selectedImg.titleNp}
                                    </h4>

                                    <div className="mt-4 space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                                        <p>{selectedImg.descriptionEn}</p>
                                        <p className="font-devanagari p-3.5 neu-pressed rounded-2xl text-slate-700 bg-[#eef2f7]">
                                            {selectedImg.descriptionNp}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono font-medium">
                                        <span>FSU Media Log ID: {selectedImg.id}</span>
                                        <span>Aadikavi Bhanubhakta Campus, Tanahun</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
