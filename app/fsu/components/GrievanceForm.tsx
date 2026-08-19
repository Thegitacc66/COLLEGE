import { useState } from "react";
import { MessageSquare, Mail, Send, CheckCircle2, HelpCircle, PhoneCall, Sparkles, AlertCircle, Copy, Check } from "lucide-react";

interface GrievanceFormProps {
    language: "en" | "np";
}

const FIXED_EMAIL = "xpta393@gmail.com";
const FIXED_PHONE = "9804126359";
const FIXED_WHATSAPP_NUMBER = "9817126133";

export default function GrievanceForm({ language }: GrievanceFormProps) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("Student");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("Academic");
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [sentNotice, setSentNotice] = useState<string | null>(null);

    const roles = [
        { value: "Student", labelEn: "Student", labelNp: "विद्यार्थी" },
        { value: "Teacher", labelEn: "Teacher / Faculty", labelNp: "शिक्षक / प्राध्यापक" },
        { value: "Staff", labelEn: "Campus Staff", labelNp: "क्याम्पस कर्मचारी" },
        { value: "Executive", labelEn: "FSU Executive / Member", labelNp: "स्ववियु पदाधिकारी / सदस्य" },
        { value: "Other", labelEn: "Visitor / Other", labelNp: "अन्य / सर्वसाधारण" },
    ];

    const categories = [
        { value: "Academic", labelEn: "Academic & Exams", labelNp: "शैक्षिक तथा परीक्षा" },
        { value: "Infrastructure", labelEn: "Campus Facilities", labelNp: "क्याम्पस पूर्वाधार तथा सुविधा" },
        { value: "Sports", labelEn: "Sports & Extra-Curricular", labelNp: "खेलकुद तथा अतिरिक्त क्रियाकलाप" },
        { value: "General", labelEn: "General Suggestion", labelNp: "सामान्य सुझाव तथा सोधपुछ" },
    ];

    const quickTemplates = [
        {
            labelEn: " Library Hours Extension",
            labelNp: " पुस्तकालय समय थप",
            category: "Academic",
            subjectEn: "Request for Extended Library Hours",
            subjectNp: "पुस्तकालय अध्ययन समय थप गर्ने सम्बन्धमा",
            msgEn: "Respected FSU Team, we request extending the campus library study hours until 6:00 PM during exam preparation months.",
            msgNp: "आदरणीय स्ववियु टिम, परीक्षा तयारीको समयमा क्याम्पस पुस्तकालयको अध्ययन समय साँझ ६:०० बजेसम्म विस्तार गरिदिनुहुन अनुरोध गर्दछौं।"
        },
        {
            labelEn: "Sports Equipment Suggestion",
            labelNp: "खेलकुद सामग्री सुझाव",
            category: "Sports",
            subjectEn: "Suggestion for Sports Equipment",
            subjectNp: "नयाँ खेलकुद सामग्री व्यवस्थापन सम्बन्धमा",
            msgEn: "Dear FSU Sports Committee, please arrange additional volleyballs and badminton rackets for student break hours.",
            msgNp: "आदरणीय स्ववियु खेलकुद समिति, विद्यार्थीहरूको खाली समयका लागि अतिरिक्त भलिबल र ब्याडमिन्टन र्याकेटको व्यवस्था गरिदिनुहुन अनुरोध गर्दछौं।"
        },
        {
            labelEn: "IT Lab Workstations",
            labelNp: "कम्प्युटर ल्याब सुधार",
            category: "Infrastructure",
            subjectEn: "Maintenance for IT Computer Lab",
            subjectNp: "कम्प्युटर ल्याब सुधार तथा व्यवस्थापन",
            msgEn: "Dear FSU Team, we suggest adding 10 more high-speed computers in the BCA practical lab.",
            msgNp: "आदरणीय स्ववियु टिम, बीसीए प्रयोगात्मक कक्षाका लागि कम्प्युटर ल्याबमा थप १० वटा कम्प्युटर प्रणाली थप्न सुझाव पेश गर्दछौं।"
        }
    ];

    const handleApplyTemplate = (tpl: typeof quickTemplates[0]) => {
        setCategory(tpl.category);
        setSubject(language === "en" ? tpl.subjectEn : tpl.subjectNp);
        setMessage(language === "en" ? tpl.msgEn : tpl.msgNp);
        setErrorMsg("");
    };

    const constructEmailContent = () => {
        const emailSubject = `[FSU Inquiry] ${category}: ${subject || "General Suggestion"}`;
        const emailBody = `Respected Free Students' Union (FSU) Executive Team,

I am writing to submit the following inquiry/suggestion via the FSU Aadikavi Digital Portal:

Sender Name: ${name.trim() || "Aadikavi Member / Visitor"}
Your Role: ${role}
Contact Number: ${phone.trim() || "Not specified"}
Topic Category: ${category}
Subject: ${subject.trim() || "General Suggestion"}


MESSAGE / SUGGESTION:
${message.trim()}

Thank you for your dedication to student welfare.

Best regards,
${name.trim() || "Aadikavi Member / Visitor"}
Aadikavi Bhanubhakta Campus, Tanahun`;

        return { emailSubject, emailBody };
    };

    const constructWhatsAppContent = () => {
        return `*FSU AADIKAVI INQUIRY & SUGGESTION*
━━━━━━━━━━━━━━━━━━━━
Sender: ${name.trim() || "Aadikavi Member / Visitor"} (${role})
Contact: ${phone.trim() || "N/A"}
Category: ${category}
Subject: ${subject.trim() || "Suggestion"}

Message / Inquiry:
${message.trim()}
━━━━━━━━━━━━━━━━━━━━
_Sent via FSU Aadikavi Official Web Portal_`;
    };

    const handleSendViaGmail = () => {
        if (!message.trim()) {
            setErrorMsg(
                language === "en"
                    ? "Please type your message or suggestion before sending."
                    : "कृपया पठाउनु अघि आफ्नो सन्देश वा सुझाव लेख्नुहोस्।"
            );
            return;
        }

        setErrorMsg("");
        const { emailSubject, emailBody } = constructEmailContent();

        // Open Gmail webmail composer
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            FIXED_EMAIL
        )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Fallback mailto link
        const mailtoUrl = `mailto:${FIXED_EMAIL}?subject=${encodeURIComponent(
            emailSubject
        )}&body=${encodeURIComponent(emailBody)}`;

        const newWindow = window.open(gmailUrl, "_blank");
        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
            window.location.href = mailtoUrl;
        }

        setSentNotice(
            language === "en"
                ? "Opening Gmail with pre-filled message... Send it to complete!"
                : "जिमेल खोलिँदैछ... पठाउन बटन थिच्नुहोस्!"
        );
        setTimeout(() => setSentNotice(null), 6000);
    };

    const handleSendViaWhatsApp = () => {
        if (!message.trim()) {
            setErrorMsg(
                language === "en"
                    ? "Please type your message or suggestion before sending."
                    : "कृपया पठाउनु अघि आफ्नो सन्देश वा सुझाव लेख्नुहोस्।"
            );
            return;
        }

        setErrorMsg("");
        const waText = constructWhatsAppContent();
        const waUrl = `https://wa.me/${FIXED_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

        window.open(waUrl, "_blank");

        setSentNotice(
            language === "en"
                ? "Opening WhatsApp with pre-filled message... Click send in WhatsApp!"
                : "व्हाट्सएप खोलिँदैछ... व्हाट्सएपमा सेन्ड थिच्नुहोस्!"
        );
        setTimeout(() => setSentNotice(null), 6000);
    };

    const handleCopy = (text: string, type: "email" | "phone") => {
        navigator.clipboard.writeText(text);
        if (type === "email") {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    return (
        <section id="grievances" className="py-14 neu-card rounded-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="neu-flat-sm text-[#052855] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3 shadow-xs">
                        <MessageSquare className="w-3.5 h-3.5 text-red-600" />
                        {language === "en" ? "Suggestion & Inquiry Desk" : "सुझाव तथा सोधपुछ कक्ष"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                        {language === "en" ? "Inquire Us & Share Suggestions" : "हामीलाई सोधपुछ र सुझाव पठाउनुहोस्"}
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
                        {language === "en"
                            ? "Type your inquiry or suggestion below. Upon clicking, Gmail or WhatsApp will open with your pre-filled message sent directly to the FSU Executive Office!"
                            : "तपाईंको सोधपुछ वा सुझाव तलको बक्समा लेख्नुहोस्। बटन थिच्नासाथ तपाईंको सन्देश स्ववियु सचिवालयको आधिकारिक जिमेल वा व्हाट्सएपमा खुल्नेछ।"}
                    </p>

                    {/* Fixed Contact Badge Highlights */}
                    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 neu-pressed-sm p-2 rounded-2xl bg-[#eef2f7]">
                        <div className="flex items-center gap-2 px-3.5 py-1.5 neu-flat text-red-900 rounded-xl text-xs font-bold bg-[#eef2f7]">
                            <Mail className="w-4 h-4 text-red-600 shrink-0" />
                            <span>{FIXED_EMAIL}</span>
                            <button
                                type="button"
                                onClick={() => handleCopy(FIXED_EMAIL, "email")}
                                className="ml-1 text-red-500 hover:text-red-700 cursor-pointer"
                                title="Copy Email"
                            >
                                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                        </div>

                        <div className="flex items-center gap-2 px-3.5 py-1.5 neu-flat text-emerald-900 rounded-xl text-xs font-bold bg-[#eef2f7]">
                            <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>+{FIXED_WHATSAPP_NUMBER} (WhatsApp)</span>
                            <button
                                type="button"
                                onClick={() => handleCopy(FIXED_PHONE, "phone")}
                                className="ml-1 text-emerald-500 hover:text-emerald-700 cursor-pointer"
                            >
                                {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Main Inquiry Box Section */}
                    <div className="lg:col-span-7 neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-blue-900" />
                                {language === "en" ? "Compose Message" : "सन्देश / सुझाव लेख्नुहोस्"}
                            </h3>
                            <span className="text-[11px] font-bold text-slate-600 neu-flat-sm px-3 py-1 rounded-full">
                                {language === "en" ? "Direct Dispatch" : "सिधा प्रेषण"}
                            </span>
                        </div>

                        {/* Quick Template Pills */}
                        <div className="mb-5">
                            <label className="block text-xs font-bold text-slate-700 mb-2">
                                {language === "en" ? "Quick Suggestion Templates:" : "छिटो सुझाव टेम्प्लेटहरू:"}
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {quickTemplates.map((tpl, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleApplyTemplate(tpl)}
                                        className="text-[11px] neu-button px-3.5 py-1.5 rounded-xl font-semibold text-slate-700 hover:text-blue-900 transition-all cursor-pointer"
                                    >
                                        {language === "en" ? tpl.labelEn : tpl.labelNp}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Notice or Error Alert */}
                        {sentNotice && (
                            <div className="mb-5 p-4 neu-pressed bg-emerald-50 text-emerald-800 rounded-2xl flex items-center gap-3 animate-fade-in text-xs font-bold">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                <p>{sentNotice}</p>
                            </div>
                        )}

                        {errorMsg && (
                            <div className="mb-5 p-4 neu-pressed bg-red-50 text-red-800 rounded-2xl flex items-center gap-3 animate-fade-in text-xs font-bold">
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                <p>{errorMsg}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            {/* Personal Info Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        {language === "en" ? "Your Name (Optional)" : "तपाईंको नाम (ऐच्छिक)"}
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full neu-pressed-sm rounded-xl p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7]"
                                        placeholder={language === "en" ? "E.g., Aaditya Sharma" : "जस्तै: आदित्य शर्मा"}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        {language === "en" ? "Your Role" : "तपाईंको भूमिका"}
                                    </label>
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="block w-full neu-pressed-sm rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7] cursor-pointer"
                                    >
                                        {roles.map((r) => (
                                            <option key={r.value} value={r.value}>
                                                {language === "en" ? r.labelEn : r.labelNp}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        {language === "en" ? "Phone Number (Optional)" : "फोन नम्बर (ऐच्छिक)"}
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full neu-pressed-sm rounded-xl p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7]"
                                        placeholder="98XXXXXXXX"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Category & Subject */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        {language === "en" ? "Topic Category" : "विषय विधा"}
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block w-full neu-pressed-sm rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7] cursor-pointer"
                                    >
                                        {categories.map((c) => (
                                            <option key={c.value} value={c.value}>
                                                {language === "en" ? c.labelEn : c.labelNp}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                        {language === "en" ? "Subject / Topic Title" : "मुख्य विषय / शीर्षक"}
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full neu-pressed-sm rounded-xl p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7]"
                                        placeholder={
                                            language === "en"
                                                ? "E.g., Suggestion for sports ground lights"
                                                : "जस्तै: खेलकुद मैदानमा बत्ती जडान गर्ने सम्बन्धमा"
                                        }
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Message Box */}
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="block text-xs font-bold text-slate-700">
                                        {language === "en" ? "Write Message or Suggestion" : "सुझाव वा सोधपुछ विवरण"} *
                                    </label>
                                    <span className="text-[10px] text-slate-400 font-mono font-medium">
                                        {message.length} {language === "en" ? "chars" : "अक्षर"}
                                    </span>
                                </div>
                                <textarea
                                    rows={5}
                                    required
                                    className="block w-full neu-pressed-sm rounded-2xl p-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 bg-[#eef2f7] leading-relaxed"
                                    placeholder={
                                        language === "en"
                                            ? "Write your detailed message, question, or suggestion here..."
                                            : "तपाईंको विचार, प्रश्न वा सुझाव विस्तृत रूपमा यहाँ लेख्नुहोस्..."
                                    }
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            {/* Dispatch Action Buttons */}
                            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Gmail Button */}
                                <button
                                    type="button"
                                    onClick={handleSendViaGmail}
                                    className="w-full neu-button-red text-white font-bold text-xs py-3.5 px-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 group"
                                >
                                    <Mail className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <span className="block leading-none">{language === "en" ? "Send via Gmail" : "जिमेलबाट पठाउनुहोस्"}</span>
                                        <span className="text-[9px] text-red-100 font-normal opacity-90">{FIXED_EMAIL}</span>
                                    </div>
                                </button>

                                {/* WhatsApp Button */}
                                <button
                                    type="button"
                                    onClick={handleSendViaWhatsApp}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 group"
                                >
                                    <Send className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <span className="block leading-none">{language === "en" ? "Send via WhatsApp" : "व्हाट्सएपबाट पठाउनुहोस्"}</span>
                                        <span className="text-[9px] text-emerald-100 font-normal opacity-90">+{FIXED_PHONE}</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Information & Contact Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Target Details Card */}
                        <div className="neu-card p-6 sm:p-7 rounded-3xl relative overflow-hidden">
                            <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-blue-900" />
                                {language === "en" ? "How Direct Dispatch Works" : "सन्देश पठाउने विधि"}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                {language === "en"
                                    ? "When you click Gmail or WhatsApp, your written inquiry is instantly formatted into a clean petition draft and opened directly in your app with our official destination pre-filled."
                                    : "जिमेल वा व्हाट्सएप बटन थिच्नासाथ तपाईंको सन्देश स्वतः तयार भई आधिकारिक ठेगाना सहित खुल्नेछ।"}
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 neu-pressed rounded-2xl flex items-start gap-3 bg-[#eef2f7]">
                                    <div className="p-2 neu-button-red text-white rounded-xl shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-900">
                                            {language === "en" ? "Official Gmail Address" : "आधिकारिक इमेल ठेगाना"}
                                        </h4>
                                        <p className="text-[11px] text-red-600 font-mono font-bold mt-0.5">{FIXED_EMAIL}</p>
                                        <p className="text-[10px] text-slate-500 mt-1">
                                            {language === "en"
                                                ? "Monitored daily by FSU Executive Secretary"
                                                : "स्ववियु सचिव द्वारा दैनिक निगरानी गरिने इमेल।"}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 neu-pressed rounded-2xl flex items-start gap-3 bg-[#eef2f7]">
                                    <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 shadow-sm">
                                        <Send className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-900">
                                            {language === "en" ? "Official WhatsApp Helpline" : "व्हाट्सएप हटलाइन"}
                                        </h4>
                                        <p className="text-[11px] text-emerald-700 font-mono font-bold mt-0.5">
                                            +{FIXED_WHATSAPP_NUMBER} (9804141296)
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-1">
                                            {language === "en"
                                                ? "Directly reaches Anup Ale Magar (FSU President)"
                                                : "स्ववियु अध्यक्ष अनुप आले मगरसँग सिधा सम्पर्क।"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Office Contact Card */}
                        <div className="neu-flat p-6 rounded-3xl border-l-4 border-blue-900">
                            <h4 className="text-xs font-extrabold text-[#052855] uppercase tracking-wider mb-2">
                                {language === "en" ? "FSU Physical Secretariat" : "स्ववियु भौतिक सचिवालय"}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                {language === "en"
                                    ? "You can also visit our FSU Office in person during campus working hours (6:00 AM - 4:00 PM)."
                                    : "तपाईं क्याम्पस समयमा (बिहान ६:00 देखि ११:00 बजेसम्म) स्ववियु भवनमा आएर पनि प्रत्यक्ष भेट्न सक्नुहुन्छ।"}
                            </p>
                            <div className="text-[11px] font-bold text-blue-900">
                                📍 Vyas-1, Vigyanchaur, Tanahun, Nepal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
