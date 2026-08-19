import React, { useState } from "react";
import { Compass, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface JourneySectionProps {
    language: "en" | "np";
}

export default function JourneySection({ language }: JourneySectionProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const journeyPhotos = [
        {
            url: "/1.png",
            altEn: "Student Protest for Academic Rights",
            altNp: "शैक्षिक अधिकारका लागि विद्यार्थी आन्दोलन",
            gridClass: "col-span-2 md:col-span-2 md:row-span-2 h-[260px] sm:h-[340px] md:h-[480px]"
        },
        {
            url: "/2.png",
            altEn: "Unified Student Rally",
            altNp: "विद्यार्थी एकता र्याली प्रदर्शन",
            gridClass: "col-span-2 md:col-span-1 md:row-span-1 h-[170px] sm:h-[210px] md:h-[228px]"
        },
        {
            url: "/3.png",
            altEn: "Youth Activists Conference",
            altNp: "युवा अभियन्ता भेला तथा अन्तरक्रिया",
            gridClass: "col-span-2 md:col-span-1 md:row-span-1 h-[170px] sm:h-[210px] md:h-[228px]"
        },
        {
            url: "/reason.png",
            altEn: "National Banner Event",
            altNp: "राष्ट्रिय महाधिवेशन ब्यानर अनावरण",
            gridClass: "col-span-2 md:col-span-1 md:row-span-2 h-[260px] sm:h-[340px] md:h-[480px]"
        },
        {
            url: "/5.png",
            altEn: "Neither War Nor Terrorism",
            altNp: "स्ववियु ब्यानर र प्रचार कार्यक्रम",
            gridClass: "col-span-2 md:col-span-2 md:row-span-1 h-[170px] sm:h-[210px] md:h-[228px]"
        },
        {
            url: "/4.png",
            altEn: "Peaceful Public Demonstration",
            altNp: "शान्तिपूर्ण प्रदर्शन र ऐक्यवद्धता",
            gridClass: "col-span-2 md:col-span-2 md:row-span-1 h-[170px] sm:h-[210px] md:h-[228px]"
        }
    ];

    return (
        <section id="movements" className="py-14 neu-card rounded-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="neu-flat-sm text-red-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                        <Compass className="w-3.5 h-3.5" />
                        {language === "en" ? "Journey of ANNFSU | अनेरास्ववियु यात्रा" : "अनेरास्ववियु यात्रा | Journey of ANNFSU"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl font-devanagari">
                        {language === "en"
                            ? "Student Movements, Leadership & Community Service"
                            : "विद्यार्थी आन्दोलन, नेतृत्व विकास र सामुदायिक सेवा"}
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
                        {language === "en"
                            ? "Journey of ANNFSU through student movements, leadership, and community service around the nation."
                            : "देशभरका शैक्षिक र सामाजिक रुपान्तरणका अभियानहरूमा अनेरास्ववियु र विद्यार्थी शक्तिको सहभागिताको एक सचित्र झलक।"}
                    </p>
                </div>

                {/* Photo Grid - Fluid Bento Grid with Neumorphic borders and frames */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {journeyPhotos.map((photo, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedPhoto(photo.url)}
                            className={`relative rounded-3xl overflow-hidden neu-flat p-2 bg-[#eef2f7] cursor-pointer group hover:scale-[1.02] transition-all duration-300 ${photo.gridClass}`}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <img
                                    src={photo.url}
                                    alt={language === "en" ? photo.altEn : photo.altNp}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Soft dark gradient at bottom for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none transition-opacity duration-300"></div>

                                {/* Title Overlay at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white pointer-events-none">
                                    <p className="text-xs sm:text-sm font-bold leading-snug font-devanagari drop-shadow-md group-hover:text-red-300 transition-colors">
                                        {language === "en" ? photo.altEn : photo.altNp}
                                    </p>
                                </div>

                                {/* View Large Overlay on hover */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                    <div className="neu-button bg-[#eef2f7] text-[#052855] px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <ZoomIn className="w-4 h-4 text-red-600" />
                                        <span>{language === "en" ? "View Large" : "ठूलो हेर्नुहोस्"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox for Journey Gallery */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 neu-button-navy text-white p-2.5 rounded-full transition-colors border border-white/10 cursor-pointer hover:scale-110"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden neu-card bg-[#eef2f7] p-2 shadow-2xl"
                        >
                            <img
                                src={selectedPhoto}
                                alt="Enlarged movement action"
                                referrerPolicy="no-referrer"
                                className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
