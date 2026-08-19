import React from "react";
import { Info, Eye, Zap } from "lucide-react";
import { motion } from "motion/react";

interface AboutSectionProps {
    language: "en" | "np";
}

export default function AboutSection({ language }: AboutSectionProps) {
    return (
        <div id="about" className="space-y-16">
            {/* About Us Sub-Section */}
            <section className="py-14 neu-card rounded-3xl overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Logo Image Column with Neumorphic Plate */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl neu-pressed p-6 flex items-center justify-center bg-[#eef2f7]">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VyJwjk3U8Bmc9yTWYqUPrSDvWW3P-2s9TJKPxsRHkalC1ArG2tvmf7H5rIFRAdg-CFYudQYucNgzVVGxJkEAX7sHVZL3AA-f-pjeFXvxATKHZscjXuanNdBg63VU9RsNK-exGjH2L2lWjxkmE9ehLvin4HlaHU3srNjkMp_s8velzwMBLPfOJvvvaJEiJ1-WnvIWOgJ5FNFq5fQa3wiyWLNNu4tIlPJOXyTBdbt4fjCBJRgl6JTH22Vc0qB2YYNWGukAg6G4Ehc"
                                    alt="ANNFSU Logo"
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <span className="neu-flat-sm text-red-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
                                <Info className="w-3.5 h-3.5 text-red-600" />
                                {language === "en" ? "About Us | हाम्रो बारेमा" : "हाम्रो बारेमा | About Us"}
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl font-devanagari">
                                {language === "en" ? "Free Students' Union (FSU)" : "स्वतन्त्र विद्यार्थी युनियन (स्ववियु)"}
                            </h2>
                            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                                <p>
                                    The Free Students' Union (FSU) at Aadikavi Bhanubhakta Campus is the legitimate representative body of students. Dedicated to safeguarding student rights, we promote a healthy academic environment and social responsibility.
                                </p>
                                <p className="font-devanagari text-slate-600 neu-pressed-sm p-4 rounded-2xl border-l-4 border-red-500">
                                    आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (स्ववियु) विद्यार्थीहरूको आधिकारिक र वैधानिक प्रतिनिधि संस्था हो। विद्यार्थी हकहितको संरक्षण गर्दै स्वस्थ शैक्षिक वातावरण र सामाजिक उत्तरदायित्व प्रवर्द्धन गर्न हामी प्रतिबद्ध छौं।
                                </p>
                            </div>

                            {/* Highlight Pillars */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-5 neu-flat rounded-2xl transition-all hover:scale-[1.02]">
                                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                                        {language === "en" ? "Student Rights & Advocacy" : "विद्यार्थी अधिकार र वकालत"}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {language === "en"
                                            ? "Standing in solidarity with students to protect their rights and dignity through effective representation."
                                            : "प्रभावकारी प्रतिनिधित्व मार्फत विद्यार्थी हकहित, मर्यादा र समानताको पक्षमा दृढतापूर्वक उभिने।"}
                                    </p>
                                </div>
                                <div className="p-5 neu-flat rounded-2xl transition-all hover:scale-[1.02]">
                                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                                        {language === "en" ? "Academic Support" : "शैक्षिक सहयोग तथा गुणस्तर"}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {language === "en"
                                            ? "Promoting academic excellence by supporting quality education and fostering a culture of learning."
                                            : "गुणस्तरीय व्यावहारिक शिक्षा र क्याम्पस सुधारका कार्यक्रमहरू सञ्चालन गर्दै शैक्षिक स्तर बढाउने।"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Sub-Section */}
            <section id="vision" className="py-8 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="p-8 neu-card rounded-3xl space-y-5"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-button-navy flex items-center justify-center text-white">
                                <Eye className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900">
                                {language === "en" ? "Our Vision | हाम्रो दृष्टि" : "हाम्रो दृष्टि | Our Vision"}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                To build a globally competent, socially responsible, and academically brilliant student community that leads the nation towards progress and equality.
                            </p>
                            <p className="text-xs text-slate-600 font-devanagari neu-pressed-sm p-4 rounded-2xl">
                                राष्ट्रलाई प्रगति र समानताको दिशामा डोऱ्याउने विश्वव्यापी रूपमा सक्षम, सामाजिक रूपमा जिम्मेवार र शैक्षिक रूपमा उत्कृष्ट विद्यार्थी समुदाय निर्माण गर्ने।
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="p-8 neu-card rounded-3xl space-y-5"
                        >
                            <div className="w-14 h-14 rounded-2xl neu-button-red flex items-center justify-center text-white">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900">
                                {language === "en" ? "Our Mission | हाम्रो लक्ष्य" : "हाम्रो लक्ष्य | Our Mission"}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                To provide a dynamic platform for student voices, ensuring access to quality education, fostering leadership skills, and engaging in meaningful community service.
                            </p>
                            <p className="text-xs text-slate-600 font-devanagari neu-pressed-sm p-4 rounded-2xl">
                                विद्यार्थीका आवाजहरूका लागि गतिशील मञ्च प्रदान गर्ने, गुणस्तरीय शिक्षामा पहुँच सुनिश्चित गर्ने, नेतृत्व सीपहरू विकास गर्ने र अर्थपूर्ण सामुदायिक सेवामा संलग्न हुने।
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
