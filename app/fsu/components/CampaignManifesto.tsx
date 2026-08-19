"use client";

import { useState } from "react";
import { BookOpen, Cpu, Lightbulb, Briefcase, HelpCircle, CheckCircle } from "lucide-react";

// --- 1. LOCAL INTERFACES ---
interface CampaignManifestoProps {
    language: "en" | "np";
}

interface ManifestoItem {
    id: string;
    titleEn: string;
    titleNp: string;
    descEn: string;
    descNp: string;
    iconName: string;
}

// --- 2. LOCAL STATIC DATA ---
const CAMPAIGN_MANIFESTO: ManifestoItem[] = [
    {
        id: "m1",
        titleEn: "Quality Education & Policy Reforms",
        titleNp: "गुणस्तरीय शिक्षा र व्यावहारिक नीति",
        descEn: "Implementing student-centric policies, continuous learning evaluation, and practical training modules to prepare students for international standards.",
        descNp: "विद्यार्थी केन्द्रित नीति, निरन्तर शैक्षिक मूल्यांकन र व्यावहारिक तालीम मोड्युलहरू लागू गरी विद्यार्थीहरूलाई राष्ट्रिय तथा अन्तर्राष्ट्रिय स्तरमा प्रतिस्पर्धात्मक बनाउने।",
        iconName: "BookOpen"
    },
    {
        id: "m2",
        titleEn: "Technology & Digitalization",
        titleNp: "सूचना र प्रविधिको विकास",
        descEn: "Equipping classrooms with smart projectors, high-speed campus Wi-Fi, digital library search, and accessible online student services.",
        descNp: "क्याम्पसभर उच्च गतिको वाइफाइ, डिजिटल पुस्तकालय, प्रविधिमैत्री कक्षाकोठा र अनलाइन विद्यार्थी सेवाहरूको सहज पहुँच सुनिश्चित गर्ने।",
        iconName: "Cpu"
    },
    {
        id: "m3",
        titleEn: "Startup Culture & Innovation",
        titleNp: "स्टार्टअप र उद्यमशीलता",
        descEn: "Establishing an entrepreneurial incubation hub, seed funding advocacy, and annual youth innovation hackathons to turn ideas into ventures.",
        descNp: "क्याम्पस भित्र स्टार्टअप इन्क्युबेशन हब स्थापना गर्ने र विद्यार्थीहरूका नवप्रवर्तनात्मक सोचहरूलाई उद्यममा बदल्न सघाउने।",
        iconName: "Lightbulb"
    },
    {
        id: "m4",
        titleEn: "Career & Skill Opportunities",
        titleNp: "करियर र रोजगारीका अवसर",
        descEn: "Direct linkages with local enterprises, skill development courses, resume building seminars, and on-campus placement drives.",
        descNp: "रोजगारदाता कम्पनीहरूसँग प्रत्यक्ष समन्वय, सीप विकास तालिम, बायोडाटा लेखन कार्यशाला र क्याम्पस प्लेसमेन्ट पहलहरू सञ्चालन गर्ने।",
        iconName: "Briefcase"
    }
];

const iconMap: Record<string, any> = {
    BookOpen: BookOpen,
    Cpu: Cpu,
    Lightbulb: Lightbulb,
    Briefcase: Briefcase,
};

export default function CampaignManifesto({ language }: CampaignManifestoProps) {
    return (
        <section id="manifesto" className="py-14 neu-card rounded-3xl overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="neu-flat-sm text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-800" />
                        {language === "en" ? "FSU Agenda" : "स्ववियु चुनावी एजेन्डा"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                        {language === "en" ? "Core Vision & Manifesto" : "हाम्रा मुख्य कार्यदिशा र एजेन्डाहरू"}
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
                        {language === "en"
                            ? "We believe in a modern campus environment where academic excellence is supported by technology, career guidance, and progressive student rights."
                            : "हामी विश्वास गर्छौं कि प्रविधि, व्यावहारिक शैक्षिक नीति र उद्यमशीलताको माध्यमबाट मात्र आदिकवि भानुभक्त क्याम्पसको चौतर्फी विकास सम्भव छ।"}
                    </p>
                </div>

                {/* Neumorphic Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {CAMPAIGN_MANIFESTO.map((item) => {
                        const IconComponent = iconMap[item.iconName] || HelpCircle;
                        return (
                            <div
                                key={item.id}
                                className="neu-flat p-6 sm:p-7 rounded-3xl transition-all flex gap-5 group hover:scale-[1.015]"
                            >
                                <div className="w-14 h-14 neu-pressed-sm rounded-2xl flex items-center justify-center text-blue-900 shrink-0 group-hover:scale-105 transition-transform bg-[#eef2f7]">
                                    <IconComponent className="w-6 h-6" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                                        {language === "en" ? item.titleEn : item.titleNp}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                        {language === "en" ? item.descEn : item.descNp}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}