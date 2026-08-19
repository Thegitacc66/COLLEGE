import React from "react";
import { MessageSquareQuote } from "lucide-react";

interface PresidentMessageProps {
    language: "en" | "np";
}

export default function PresidentMessage({ language }: PresidentMessageProps) {
    return (
        <section id="president" className="py-14 neu-card rounded-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* President's Photo Column with Neumorphic Frame */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative rounded-3xl p-4 neu-pressed w-68 h-88 sm:w-80 sm:h-96 group bg-[#eef2f7]">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-md relative">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAxpwZqECowFkgGe16BWInuAiAhxjHw9dS-OrebDJ-7zceHX8KkcV1hdCinCsBabVQfHAGdwl8XRRqA0Dt2t7hnhMWjXEpgwmXkYpCF4W0-gfVDEN5l6SNKIl-tvZlKYoFWEN_OL8KYaXghQi1W5BNEzHx4pwvPeBh1VWDM3rCymFlalfKciPuK3ZDlAUOoFhsBCCR_zPDRybrHiRep77o_HhRNF3On2hhzFebvX1HNZzqZd0SvruEMR5kls0vFAppaY-IuZERyb0"
                                    alt="President Anup Ale Magar"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                                {/* Overlay with subtle visual touch */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#052855]/60 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Message Content Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="neu-flat-sm text-red-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
                            <MessageSquareQuote className="w-3.5 h-3.5 text-red-600" />
                            {language === "en" ? "Message from the President | अध्यक्षको सन्देश" : "अध्यक्षको सन्देश | Message from the President"}
                        </span>

                        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                            <p className="font-extrabold text-slate-900 text-lg sm:text-xl font-devanagari">
                                {language === "en"
                                    ? "Dear Students of Aadikavi Bhanubhakta Campus,"
                                    : "आदरणीय विद्यार्थी साथीहरू,"}
                            </p>

                            <p className="font-devanagari text-slate-800 leading-relaxed font-semibold neu-pressed-sm p-4 rounded-2xl border-l-4 border-blue-900 bg-[#eef2f7]">
                                "स्वतन्त्र विद्यार्थी युनियन (स्ववियु) केवल एउटा संस्था मात्र होइन, यो विद्यार्थीहरूको ढुकढुकी हो। हाम्रो उद्देश्य विद्यार्थीहरूको हक, हितको रक्षा गर्दै शैक्षिक क्षेत्रमा आमूल परिवर्तन ल्याउनु हो।"
                            </p>

                            <p className="font-devanagari text-slate-700">
                                "हामी यस क्याम्पसका हरेक विद्यार्थीको आवाजलाई क्याम्पस प्रशासन र सरोकारवाला समक्ष पुर्याउने प्रण गर्दछौं। म सबै विद्यार्थी साथीहरूलाई यस युनियनको अभियानमा जोडिन र हाम्रा गतिविधिहरूमा सक्रिय सहभागिता जनाउन विनम्र अनुरोध गर्दछु।"
                            </p>

                            <p className="font-devanagari text-slate-700">
                                "हामी पारदर्शिता, जवावदेहिता र गुणस्तरीय प्रविधिमैत्री शिक्षाका लागि निरन्तर लडिरहनेछौं।"
                            </p>
                        </div>

                        {/* Signature & Author Info */}
                        <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-full neu-button-navy text-white font-bold flex items-center justify-center text-xs shadow-md">
                                AAM
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 text-sm">Anup Ale Magar</h4>
                                <p className="text-xs font-semibold text-slate-500">
                                    {language === "en" ? "President, Free Students' Union" : "सभापति, स्वतन्त्र विद्यार्थी युनियन (स्ववियु)"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
