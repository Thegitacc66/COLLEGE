export type Language = 'en' | 'np';
export type ViewMode = 'grid' | 'list' | 'categorized';

export type ClubCategory =
    | 'Technology & IT'
    | 'Student Welfare'
    | 'Business & Management'
    | 'Literature & Culture'
    | 'Sports & Athletics'
    | 'Science & Innovation'
    | 'Humanitarian & Service'
    | 'Academic & Analytics'
    | string;

export interface LeadershipMember {
    id: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone?: string;
    avatarUrl: string;
}

export interface ClubEvent {
    id: string;
    clubId: string;
    clubName: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    category: string;
    description: string;
    capacity?: number;
    registeredCount?: number;
    isRegistered?: boolean;
    image?: string;
}

export interface ClubNotice {
    id: string;
    clubId: string;
    clubName: string;
    title: string;
    date: string;
    content: string;
    isImportant?: boolean;
    category: string;
}

export interface AchievementItem {
    id?: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    image?: string;
    badge?: string;
}

export interface Club {
    id: string;
    name: string;
    nepaliName?: string;
    category: string;
    logo: string;
    accentColor?: string;
    description?: string;
    shortDescription?: string;
    establishedYear?: number;
    memberCount?: number;
    facultyAdvisor?: string;
    president?: string;
    meetingSchedule?: string;
    roomLocation?: string;
    leadership?: LeadershipMember[];
    achievements?: (string | AchievementItem)[];
    achievementItems?: AchievementItem[];
    galleryImages?: string[];
    contactEmail?: string;
    featured?: boolean;
    vision?: string;
    mission?: string[];
    presidentMessage?: {
        senderName?: string;
        senderRole?: string;
        message?: string;
        avatarUrl?: string;
    };
    advisorMessage?: {
        senderName?: string;
        senderRole?: string;
        message?: string;
        avatarUrl?: string;
    };
    manifesto?: {
        title?: string;
        points?: string[];
    };
    history?: string;
    [key: string]: any;
}

export const abitClubData: Club = {
    id: 'abit-club',
    name: 'ABIT Club',
    nepaliName: 'एबीआइटी क्लब',
    category: 'Technology & IT',
    logo: '../abit.jpg',
    accentColor: '#1d4ed8',
    description: 'The premier Information Technology student committee at Aadikavi Bhanubhakta Campus. Dedicated to fostering software development, artificial intelligence skills, cybersecurity awareness, web technologies, and tech innovation among students.',
    shortDescription: 'Empowering students in IT innovation, coding bootcamps, AI workshops, and hackathons.',
    establishedYear: 2018,
    memberCount: 120,
    facultyAdvisor: 'Er. Ghan Bahadur Thapa',
    president: 'Subash Chandra Giri',
    meetingSchedule: 'Every Friday at 3:30 PM',
    roomLocation: 'IT Building, Lab 204',
    contactEmail: 'abit.club@abcampus.edu.np',
    featured: true,
    vision: 'To position Aadikavi Bhanubhakta Campus as a leading hub of tech talent in Gandaki Province through hands-on software development, AI research, and digital solution delivery.',
    mission: [
        'Host weekly coding bootcamps in React, Python, and Full-Stack Web Development.',
        'Organize annual provincial hackathons and tech innovation fests.',
        'Maintain and update campus web applications and student portals.',
        'Bridge academia with the IT industry via guest lectures and mentorship.'
    ],
    presidentMessage: {
        senderName: 'Subash Chandra Giri',
        senderRole: 'President, ABIT Club',
        message: 'Welcome to the official digital hub of ABIT Club! Technology is expanding rapidly, and our committee ensures every student at Aadikavi Bhanubhakta Campus gains industry-ready coding skills, practical exposure, and problem-solving confidence.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Er. Ghan Bahadur Thapa',
        senderRole: 'Faculty Advisor, Dept of CS & IT',
        message: 'ABIT Club has consistently led technical excellence on campus. We encourage students from all faculties to join our workshops and embrace digital literacy.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'ABIT IT Code of Conduct & Innovation Charter',
        points: [
            'Open Access: Coding workshops and tech bootcamps remain 100% free for all enrolled campus students.',
            'Practical Mastery: Every member completes at least one hands-on software project per academic year.',
            'Ethics & Security: Promoting ethical hacking, cyber security awareness, and data privacy.',
            'Peer Mentorship: Senior IT students mentor junior members in programming fundamentals.'
        ]
    },
    history: 'ABIT Club was founded in 2018 by IT faculty members and enthusiastic BIM students. From a small study circle, it has grown into an active committee with over 120 members, managing campus digital initiatives and hosting Tanahun Tech Fest.',
    leadership: [
        {
            id: 'l1',
            name: 'Er. Ghan Bahadur Thapa',
            role: 'Faculty Advisor',
            department: 'Department of Computer Science & IT',
            email: 'ghanbahadur@abcampus.edu.np',
            phone: '+977 9856012345',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'l2',
            name: 'Subash Chandra Giri',
            role: 'President',
            department: 'BIM 7th Semester',
            email: 'subash.giri@student.abcampus.edu.np',
            phone: '+977 9846054321',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'l3',
            name: 'Pooja Sharma',
            role: 'Vice President',
            department: 'BIM 5th Semester',
            email: 'pooja.sharma@student.abcampus.edu.np',
            phone: '+977 9846198234',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'l4',
            name: 'Suman Shrestha',
            role: 'Secretary',
            department: 'BIM 5th Semester',
            email: 'suman.shrestha@student.abcampus.edu.np',
            phone: '+977 9860154389',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Organized Inter-College Hackathon "Tanahun Tech Fest 2025"',
        'Trained 250+ students in Full-Stack Web Development & React',
        'Developed campus digital notice board & student feedback portal'
    ],
    achievementItems: [
        {
            id: 'ach-1',
            title: 'Organized Inter-College Hackathon "Tanahun Tech Fest 2025"',
            description: 'Brought together over 180+ developers, designers, and innovators across 12 colleges in Gandaki Province for 36 hours of competitive coding.',
            date: 'Jan 2026',
            category: 'Hackathon & Innovation',
            badge: 'Major Milestone',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80'
        },
        {
            id: 'ach-2',
            title: 'Trained 250+ Students in Full-Stack Web Development & React',
            description: 'Delivered an intensive 6-week hands-on bootcamp covering modern JavaScript, TypeScript, React 18, and API architecture with 94% course completion rate.',
            date: 'Nov 2024',
            category: 'Technical Training',
            badge: 'Capacity Building',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
        },
        {
            id: 'ach-3',
            title: 'Developed Campus Digital Notice Board & Student Feedback Portal',
            description: 'Engineered an in-house digital signage software and mobile-responsive portal replacing physical paper notices across all campus departments.',
            date: 'Aug 2024',
            category: 'Campus Digitalization',
            badge: 'Institutional Impact',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
        }
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ]
};

export const alumniWelfareData: Club = {
    id: 'free-student-union',
    name: 'Free Student Union & Alumni Welfare',
    nepaliName: 'स्वतन्त्र विद्यार्थी युनियन तथा पूर्वविद्यार्थी कल्याण',
    category: 'Student Welfare',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTjRGdyZbbonJMArck2KAjZKW90z39NnSUFKCejek5yjEyOC_93E0sgxFCj76NJUsqWvFokGGa2RIfFWQikaX4XR8CmX1M8mmcQq4VIqRV0h8QKQDdPR3uExr1dpHswI2HME96rnsuKI2-3x9xOs6G2XLSS-jtc-s2s6IJ7SGOsHHFUSTX2LwSuJpkiB3tSWK1JWeVlBJbM8CUNHcwz7CkdrxWrpyDvRpsLf3jFnFo1pVzCaJqhi7iEdUq2tzHs_StIdsKEhTIIIhNPA',
    accentColor: '#991b1b',
    description: 'The elected official governing body for all students at Aadikavi Bhanubhakta Campus. FSU works tirelessly to protect student rights, enhance campus infrastructure, coordinate cross-committee activities, and connect active students with the global alumni network.',
    shortDescription: 'The central student union guarding student rights, campus welfare, alumni connections, and institutional growth.',
    establishedYear: 1987,
    memberCount: 2400,
    facultyAdvisor: 'Campus Chief - Prof. Dr. Bhoj Raj Kafle',
    president: 'Anup Aale Magar',
    meetingSchedule: 'Bi-weekly Sunday at 2:00 PM',
    roomLocation: 'FSU Secretariat, Main Admin Wing',
    contactEmail: 'fsu@abcampus.edu.np',
    featured: true,
    vision: 'To serve as a resilient voice for student rights, campus excellence, and a vibrant lifelong alumni network.',
    mission: [
        'Safeguard student welfare, library resources, and academic equity.',
        'Establish an active Alumni Mentorship & Career Guidance network.',
        'Organize the annual Campus Week and inter-college sports championships.'
    ],
    presidentMessage: {
        senderName: 'Anup Aale Magar',
        senderRole: 'President, Free Student Union',
        message: 'Welcome fellow students and alumni! FSU stands firm as the voice of every student at Aadikavi Bhanubhakta Campus. We invite you to stay engaged and contribute to our campus community.',
        avatarUrl: '../fsu/anup.webp'
    },
    advisorMessage: {
        senderName: 'Prof. Dr. Bhoj Raj Kafle',
        senderRole: 'Campus Chief',
        message: 'Student leadership and alumni relations are integral to institutional quality. FSU continues to lead campus development with high dedication.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'FSU Student Welfare Charter',
        points: [
            'Student Defense: Unwavering commitment to student rights and academic fairness.',
            'Infrastructure Expansion: Upgrading digital library, canteen hygiene, and campus sports fields.',
            'Alumni Connection: Creating career placement pathways with distinguished ABC alumni.'
        ]
    },
    history: 'Founded in 1987 alongside the establishment of Aadikavi Bhanubhakta Campus, FSU has spearheaded decades of academic advancements, campus expansions, and alumni welfare initiatives.',
    leadership: [
        {
            id: 'fsu1',
            name: 'Anup Aale Magar',
            role: 'President',
            department: 'MBS 2nd Year',
            email: 'anup.magar@student.abcampus.edu.np',
            phone: '+977 9856098765',
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'fsu2',
            name: 'Saraswati Devkota',
            role: 'Vice President',
            department: 'MA Nepali',
            email: 'saraswati.d@student.abcampus.edu.np',
            phone: '+977 9846234567',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'fsu3',
            name: 'Deepak Raj Thapa',
            role: 'Secretary',
            department: 'BBS 4th Year',
            email: 'deepak.thapa@student.abcampus.edu.np',
            phone: '+977 9860345678',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Secured QAA Re-accreditation Support and Campus Library digital expansion',
        'Established 24/7 Campus Emergency Medical Relief Fund',
        'Constructed student recreation gazebo and upgraded sports facilities',
        'Organized annual Campus Week with 3,000+ attendees'
    ], achievementItems: [
        {
            id: 'ach-1',
            title: 'Organized Inter-College Hackathon "Tanahun Tech Fest 2025"',
            description: 'Brought together over 180+ developers, designers, and innovators across 12 colleges in Gandaki Province for 36 hours of competitive coding.',
            date: 'Jan 2025',
            category: 'Hackathon & Innovation',
            badge: 'Major Milestone',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80'
        },
        {
            id: 'ach-2',
            title: 'Trained 250+ Students in Full-Stack Web Development & React',
            description: 'Delivered an intensive 6-week hands-on bootcamp covering modern JavaScript, TypeScript, React 18, and API architecture with 94% course completion rate.',
            date: 'Nov 2024',
            category: 'Technical Training',
            badge: 'Capacity Building',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
        },
        {
            id: 'ach-3',
            title: 'Developed Campus Digital Notice Board & Student Feedback Portal',
            description: 'Engineered an in-house digital signage software and mobile-responsive portal replacing physical paper notices across all campus departments.',
            date: 'Aug 2024',
            category: 'Campus Digitalization',
            badge: 'Institutional Impact',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
        }
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80'
    ]
};

export const bbaClubData: Club = {
    id: 'bba-cloud',
    name: 'ABC BBA Student Cloud',
    nepaliName: 'एबीसी बीबीए विद्यार्थी क्लाउड',
    category: 'Management',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzUnP6eSb8SEAUNO-OUesJ2keSdthciymO40Cl281oQvu0Z6K9e9vEN3jfIL8FyM0cqoaDXulhAVrJTq4KX7BqmwuYNzXitE8Bg7hTTz38qgownOQKZUGnZ0y_oL6FVRzNUw_Kk-wOtYFufn_WTwgEycekVZXEtDOFlw8D1IddoCdmf0pgnc5Z2SjcjuAc6l6Pyh-fL-e32hXYQM9XZY-lzfwVLbleDx_KDouzX24FnpCA_u9HpD-2TEw3eotxPkPAE45vEmKQrtP_jA',
    accentColor: '#1d4ed8',
    description: 'ABC BBA Student Cloud is a student-led platform at Aadikavi Bhanubhakta Campus, dedicated to the academic, professional, and personal growth of BBA students. Through seminars, training sessions, and field visits, the club builds leadership, teamwork, and practical skills, fostering a united and collaborative student community.',
    establishedYear: 2076,
    memberCount: 85,
    facultyAdvisor: 'Chij Kumar Shrestha',
    president: 'Ashim Bhandari',
    meetingSchedule: 'Wednesdays at 4:00 PM',
    roomLocation: 'Management Block, Conference Hall B',
    contactEmail: 'bbastudentcloud1@gmail.com',
    featured: true,
    vision: 'To be a leading student platform that empowers BBA students through diverse academic, professional, and leadership opportunities, fostering a skilled and collaborative student community.',
    mission: [
        'ABC BBA Student Cloud is committed to organizing seminars, workshops, training sessions, and community-oriented initiatives in coordination with Aadikavi Bhanubhakta Campus. Through these programs, the club aims to enhance student practical knowledge, leadership abilities, communication skills, and professional competence.'
    ],
    presidentMessage: {
        senderName: 'Ashim Bhandari',
        senderRole: 'President, BBA Summit Circle',
        message: 'It is a privilege to serve as President of ABC BBA Student Cloud, dedicated to the academic, professional, and personal growth of BBA students. We provide a platform for students to connect, collaborate, and build leadership through academic and extracurricular activities, believing true learning extends beyond the classroom. We remain committed to fostering a culture of unity, teamwork, and excellence. I encourage all BBA students to actively participate and help make our club stronger and more impactful.',
        avatarUrl: '../bba/asim.webp'
    },
    advisorMessage: {
        senderName: 'Chij Kumar Shrestha',
        senderRole: 'Faculty Advisor, BBA Program Head',
        message: 'BBA Summit provides an exceptional platform for students to hone strategic thinking, business ethics, and entrepreneurial initiative.',
        avatarUrl: '../bba/chij2.webp'
    },
    manifesto: {
        title: 'BBA Summit Leadership & Professional Ethics Manifesto',
        points: [
            'Promote unity, leadership, academic excellence, teamwork, and personal development among BBA students. ',
            'Encourage active participation in academic, cultural, social, sports, and extracurricular activities. ',
            'Provide opportunities to build practical skills, share ideas, showcase talents, and take on leadership responsibilities. ',
            'Contribute to the overall growth, confidence, and professional development of BBA students at Aadikavi Bhanubhakta Campus'
        ]
    },
    history: 'Established in 2076 B.S. at Aadikavi Bhanubhakta Campus, Damauli, Tanahun, ABC BBA Student Cloud brings BBA students together on a common platform for academic growth, leadership, teamwork, and communication. Founded under the leadership of its first President, Samundra Dhakal, the club encourages student participation in academic, social, cultural, sports, and leadership activities. Today, it continues to serve as a student-led platform fostering collaboration and the overall development of BBA students within the campus',
    leadership: [
        {
            id: 'bba1',
            name: 'Chij Kumar Shrestha',
            role: 'Faculty Advisor',
            department: 'Department of Management',
            email: '',
            phone: '+977 9856011223',
            avatarUrl: '../bba/chij2.webp'
        },
        {
            id: 'bba2',
            name: 'Ashim Bhandari',
            role: 'President',
            department: 'BBA 6th Semester',
            phone: '+977 9817152251',
            avatarUrl: '../bba/asim.webp',
            email: ""
        }
        ,
        {
            id: 'bba3',
            name: 'Shreedhar Khatri',
            role: 'Vice - President',
            department: 'BBA 6th Semester',
            phone: '+977 9829181846',
            avatarUrl: '../bba/sri.webp',
            email: ""
        },
        {
            id: 'bba4',
            name: 'Shristi Shrestha',
            role: 'Secretary',
            department: 'BBA 6th Semester',
            phone: '+977 9806765816',
            avatarUrl: '../bba/sristi.webp',
            email: ""
        },
        {
            id: 'bba5',
            name: 'Sushma Thapa',
            role: 'Joint - Secretary',
            department: 'BBA 6th Semester',
            phone: '+977 9829196990',
            avatarUrl: '../bba/susma.webp',
            email: ""
        },
        {
            id: 'bba6',
            name: 'Sabita Adhikari',
            role: 'Treasurer',
            department: 'BBA 8th Semester',
            phone: '+977 9824104395',
            avatarUrl: '../bba/sabita.webp',
            email: ""
        },
        {
            id: 'bba7',
            name: 'Safalta Gauli',
            role: 'Spokesperson',
            department: 'BBA 6th Semester',
            phone: '+9779701368577',
            avatarUrl: '../bba/safalta.webp',
            email: ""
        },
        {
            id: 'bba8',
            name: 'Kripa Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779817136160 ',
            avatarUrl: '../bba/kripa.webp',
            email: ""
        },
        {
            id: 'bba9',
            name: 'Sapana Thapa',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779806762359',
            avatarUrl: '../bba/sapana.webp',
            email: ""
        },
        {
            id: 'bba10',
            name: 'Bishnu Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779702722010 ',
            avatarUrl: '../bba/bisnu.webp',
            email: ""
        },
        {
            id: 'bba11',
            name: 'Bipin Adhikari',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779762861361',
            avatarUrl: '../bba/bipin.webp',
            email: ""
        },
        {
            id: 'bba12',
            name: 'Sumitra Dhungana',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779767561994',
            avatarUrl: '../bba/sumitra.webp',
            email: ""
        },
        {
            id: 'bba13',
            name: 'Apshara Thakuri',
            role: 'Member',
            department: 'BBA 4th Semester',
            phone: '+9779702618709',
            avatarUrl: '../bba/apsara.webp',
            email: ""
        },
        {
            id: 'bba14',
            name: 'Sujata B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779815166331',
            avatarUrl: '../bba/sujata.webp',
            email: ""
        },
        {
            id: 'bba15',
            name: 'Sadiksha Adhikari',
            role: 'Member',
            department: 'BBA 4th Semester',
            phone: '+9779815105797 ',
            avatarUrl: '../bba/sadik.webp',
            email: ""
        },
        {
            id: 'bba16',
            name: 'Jamira Miya',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779842268371 ',
            avatarUrl: '../bba/jamira.webp',
            email: ""
        },
        {
            id: 'bba17',
            name: 'Asmita B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779769499653 ',
            avatarUrl: '../bba/asmita.webp',
            email: ""
        },
        {
            id: 'bba18',
            name: 'Jharana Sapkota',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: 'To be updated',
            avatarUrl: '../bba/jharna.webp',
            email: ""
        }
    ],
    achievements: [
        'Hosted National Management Fest "BizVenture 2025"',
        'Secured Top 3 position in Nepal Student Stock Market Challenge',
        'Facilitated 15+ student internships in regional banks and MNCs',
        'Published annual business research digest "Management Vista"'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80'
    ]
};

export const abccricket: Club = {
    id: 'abc-cricket-club',
    name: 'ABC Cricket Club',
    nepaliName: 'एबीसी क्रिकेट क्लब',
    category: 'Sports',
    logo: '../cricket/crilogo.webp',
    accentColor: '#b45309',
    description: 'The ABC Cricket Club is dedicated to promoting cricketing excellence and fostering a love for the game among students.',
    shortDescription: 'Promoting cricketing excellence and fostering a love for the game among students.',
    establishedYear: 1992,
    memberCount: 7,
    facultyAdvisor: 'Prof. Ram Chandra Bhattarai',
    president: 'Manoj Pokharel',
    meetingSchedule: 'Saturdays at 11:00 AM',
    roomLocation: 'Bhanu Memorial Hall',
    contactEmail: 'cricket@abcampus.edu.np',
    vision: 'To keep the immortal literary legacy of Aadikavi Bhanubhakta Acharya alive through youth poetry, creative writing, and linguistic excellence.',
    mission: [
        'Host the annual Bhanu Jayanti Grand Literary Symposium and poetry slam.',
        'Publish the biannual student literary magazine "Bhanu Srijana".',
        'Conducted gazal and drama writing workshops for emerging writers.'
    ],
    presidentMessage: {
        senderName: 'Manoj Pokharel',
        senderRole: 'President, Literature Forum',
        message: 'Literature is the mirror of society. We invite all creative minds at Aadikavi Bhanubhakta Campus to express their thoughts through verses, stories, and plays.',
        avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Prof. Ram Chandra Bhattarai',
        senderRole: 'Faculty Advisor, Dept of Nepali',
        message: 'The Creative Literature Forum serves as a cradle for linguistic art and youth expression on campus.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Literary Art & Creative Expression Manifesto',
        points: [
            'Preserving Cultural & Linguistic Heritage.',
            'Encouraging Youth Poetry & Ghazal Recitations.',
            'Providing Publishing Platforms for Student Authors.'
        ]
    },
    history: 'Founded in 1992, the forum has organized over 30 years of literary symposia, publishing dozens of anthologies and hosting regional poetry competitions.',
    leadership: [
        {
            id: 'lit1',
            name: 'Prof. Ram Chandra Bhattarai',
            role: 'Faculty Advisor',
            department: 'Department of Nepali Literature',
            email: 'ramchandra@abcampus.edu.np',
            phone: '+977 9856022334',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'lit2',
            name: 'Manoj Pokharel',
            role: 'President',
            department: 'MA Nepali 2nd Year',
            email: 'manoj.pokharel@student.abcampus.edu.np',
            phone: '+977 9812345678',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'lit3',
            name: 'Ashim Chhertri',
            role: 'Member',
            department: 'BICTE 4th Semester',
            email: 'ramchandra@abcampus.edu.np',
            phone: '+977 9856022334',
            avatarUrl: '/cricket/ashim.webp',
        },
        {
            id: 'lit4',
            name: 'Sabin Shrestha',
            role: 'Member',
            department: 'BICTE 4th Semester',
            email: 'manoj.pokharel@student.abcampus.edu.np',
            phone: '+977 9812345678',
            avatarUrl: '/cricket/sabing.webp'
        },
        {
            id: 'lit5',
            name: 'Bipu Katila',
            role: 'Member',
            department: 'BICTE 4th Semester',
            email: 'ramchandra@abcampus.edu.np',
            phone: '+977 9856022334',
            avatarUrl: '/cricket/bipug.webp'
        },
        {
            id: 'lit6',
            name: 'Ram Shrestha',
            role: 'Member',
            department: 'MA Nepali 2nd Year',
            email: 'manoj.pokharel@student.abcampus.edu.np',
            phone: '+977 9812345678',
            avatarUrl: '/cricket/laxg.webp'
        }
    ],
    achievements: [
        'Organizes annual Bhanu Jayanti Grand Literary Symposium',
        'Published 12 editions of campus magazine "Bhanu Srijana"',
        'Gandaki Provincial Youth Poetry Award winners 2024 & 2025'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
    ]
};

export const managementclub: Club = {
    id: 'bbs-student',
    name: 'Student Management Circle',
    nepaliName: 'विद्यार्थी व्यवस्थापन वृत्त ',
    category: 'Management',
    logo: '/bbs/logo.webp',
    accentColor: '#0369a1',
    description: 'Promoting student mental and physical health, ergonomic wellness, financial literacy, taxation workshops, and auditing masterclasses tailored for campus students.',
    shortDescription: 'Student wellness, health awareness, financial literacy, tax seminars, and auditing.',
    establishedYear: 2010,
    memberCount: 160,
    facultyAdvisor: 'Ganesh Shrestha',
    president: 'Sita Adhikari',
    meetingSchedule: 'Tuesdays at 3:30 PM',
    roomLocation: 'BBS Block, Hall 102',
    contactEmail: 'bbs.circle@abcampus.edu.np',
    vision: 'To foster physical health, mental resilience, and financial acumen for holistic student success.',
    mission: [
        'Host campus health screenings and mental health wellness seminars.',
        'Conduct tax filing and personal financial literacy workshops.',
        'Organize yoga, meditation, and fitness sessions.'
    ],
    presidentMessage: {
        senderName: 'Sita Adhikari',
        senderRole: 'President, Health & Commerce Forum',
        message: 'Maintaining physical health and financial literacy are the two pillars of sustainable career growth.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Ganesh Shrestha',
        senderRole: 'Faculty Advisor',
        message: 'Healthy students build strong academic communities.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Health & Professional Development Charter',
        points: [
            'Student Health Checks: Free health and fitness checks.',
            'Financial Education: Tax and budgeting seminars.'
        ]
    },
    history: 'Founded in 2010, the forum has organized health drives and tax workshops benefiting hundreds of students.',
    leadership: [
        {
            id: 'bbs1',
            name: 'Ganesh Shrestha',
            role: 'Faculty Advisor',
            department: 'Department of Accountancy',
            email: 'ganesh.shrestha@abcampus.edu.np',
            phone: '+977 9856033445',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'bbs2',
            name: 'Sita Adhikari',
            role: 'President',
            department: 'BBS 4th Year',
            email: 'sita.adhikari@student.abcampus.edu.np',
            phone: '+977 9867891234',
            avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Conducted Tax Return Filing Workshop for 300+ local SMEs',
        'Organized Bank Training Orientation with Rastriya Banijya Bank',
        'Best Academic Circle Award 2024'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    ]
};


export const human: Club = {
    id: 'human-club',
    name: 'Humanities Club',
    nepaliName: 'मानविकी क्लब',
    category: 'Arts',
    logo: '../human/hlogo.webp',
    accentColor: '#7c3aed',

    description:
        'The Humanities Club at Aadikavi Bhanubhakta Campus is dedicated to promoting literature, language, culture, creativity, critical thinking, and social awareness among students. The club provides a platform for students to express ideas, explore creativity, and celebrate the richness of humanities and the arts.',

    shortDescription:
        'Promoting literature, creativity, culture, critical thinking, and student expression.',

    establishedYear: 2019,
    memberCount: 13,

    facultyAdvisor: 'Faculty Advisor, Department of Humanities',
    president: 'Dilip Karki',

    meetingSchedule: 'Every Wednesday at 3:30 PM',
    roomLocation: 'Main Campus Building',

    contactEmail: 'humanities.club@abcampus.edu.np',

    featured: true,

    vision:
        'To create a vibrant intellectual and creative community where students develop critical thinking, cultural awareness, communication skills, and a deeper appreciation for literature, arts, and society.',

    mission: [
        'Organize literary events, debates, essay competitions, poetry recitals, and creative writing programs.',
        'Promote Nepali literature, language, culture, arts, and heritage among students.',
        'Provide students with opportunities to develop communication, presentation, and critical-thinking skills.',
        'Encourage meaningful discussions on society, culture, education, and contemporary issues.'
    ],

    presidentMessage: {
        senderName: 'Dilip Karki',
        senderRole: 'President, Humanities Club',
        message: 'It is my great pleasure to welcome you to the Humanities Club. Our club is a platform where students can learn, share ideas, develop leadership skills, and express their creativity.As the President, I am committed to making the club more active, inclusive, and meaningful for every student. We will continue to organize educational, literary, cultural, and social programs that encourage students to discover their potential.I believe that the Humanities Club is not only about organizing programs; it is about building confidence, friendship, teamwork, and leadership among students.Let us work together, learn together, and create memorable experiences together.Thank you.',
        avatarUrl: ''
    },

    advisorMessage: {
        senderName: 'Faculty Advisor',
        senderRole: 'Faculty Advisor, Humanities Department',
        message:
            'The Humanities Club encourages students to think deeply, express themselves confidently, and appreciate literature, culture, and society. We welcome every student who wishes to learn, create, and contribute.',
        avatarUrl: ''
    },

    manifesto: {
        title: 'Humanities Club Values & Creative Charter',

        points: [
            'Creative Expression: Provide every student with a platform to express ideas through writing, art, speech, and performance.',
            'Literary Appreciation: Promote Nepali and international literature through readings, discussions, and literary events.',
            'Cultural Heritage: Celebrate and preserve Nepals diverse languages, traditions, literature, and cultural practices.',
            'Critical Thinking: Encourage thoughtful discussion, debate, research, and awareness of contemporary social issues.'
        ]
    },

    history:
        'The Humanities Club was established to provide students with a dedicated platform for literary, cultural, and creative activities at Aadikavi Bhanubhakta Campus. Starting as a small group of students interested in literature and the arts, the club has grown into an active student community organizing literary programs, debates, cultural events, creative competitions, and awareness activities.',

    leadership: [
        {
            id: 'h1',
            name: '',
            role: 'Faculty Advisor',
            department: 'Department of Humanities',
            email: 'humanities@abcampus.edu.np',
            phone: '+977 9856012345',
            avatarUrl:
                ''
        },

        {
            id: 'h2',
            name: 'Dilip Karki',
            role: 'President',
            department: 'Humanities, 7th Semester',
            email: '',
            phone: '+977 9824189131',
            avatarUrl:
                ''
        },

        {
            id: 'h3',
            name: 'Suraj Sunar',
            role: 'Vice President',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9826600026',
            avatarUrl:
                ''
        },
        {
            id: 'h4',
            name: 'Pratigya Pandey',
            role: 'Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9814163135',
            avatarUrl:
                ''
        },
        {
            id: 'h5',
            name: 'Rohan Gurung',
            role: 'Joint - Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815161226',
            avatarUrl:
                ''
        },
        {
            id: 'h6',
            name: 'Manisha Thapa Magar',
            role: 'Treasurer',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9707795101',
            avatarUrl:
                ''
        },
        {
            id: 'h7',
            name: 'Man Prashad Nepali',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9846723968',
            avatarUrl: ''
        },
        {
            id: 'h8',
            name: 'Sajina Ale',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9701682017',
            avatarUrl: ''
        },
        {
            id: 'h9',
            name: 'Bimala Sahi',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9816619897',
            avatarUrl: ''
        },
        {
            id: 'h10',
            name: 'Milan Pariyar',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815127704',
            avatarUrl: ''
        },
        {
            id: 'h11',
            name: 'Saraswati Shrestha',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9807241144',
            avatarUrl: ''
        },
        {
            id: 'h12',
            name: 'Sanumati Basnet',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815189739',
            avatarUrl: ''
        },
        {
            id: 'h13',
            name: 'Muskan Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9826600545',
            avatarUrl: ''
        },
        {
            id: 'h14',
            name: 'Robin Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9702003110',
            avatarUrl: ''
        }
    ],

    achievements: [
        'Organized Inter-Faculty Poetry and Creative Writing Competition',
        'Conducted Literary Discussion and Nepali Literature Appreciation Program',
        'Organized Cultural Awareness and Student Expression Program'
    ],

    achievementItems: [
        {
            id: 'ha-1',
            title: 'Inter-Faculty Poetry & Creative Writing Competition',

            description:
                'Provided students from different faculties with a platform to showcase their creativity through poetry, essays, storytelling, and creative writing.',

            date: 'Dec 2025',
            category: 'Literature & Creativity',
            badge: 'Major Event',

            image:
                'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80'
        },

        {
            id: 'ha-2',
            title: 'Nepali Literature Appreciation Program',

            description:
                'Organized an interactive literary session focusing on Nepali literature, poetry, writers, and the importance of preserving Nepal’s literary heritage.',

            date: 'Aug 2025',
            category: 'Literary Program',
            badge: 'Cultural Impact',

            image:
                'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=80'
        },

        {
            id: 'ha-3',
            title: 'Student Debate & Social Awareness Program',

            description:
                'Conducted student-centered discussions and debates on contemporary social, educational, cultural, and community issues to encourage critical thinking and confident communication.',

            date: 'Mar 2025',
            category: 'Debate & Awareness',
            badge: 'Student Engagement',

            image:
                'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=80'
        }
    ],

    galleryImages: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=80'
    ]
};


// Master independent array of all 14 clubs with 0 external file dependencies
export const ALL_CLUBS: Club[] = [
    abitClubData,
    alumniWelfareData,
    bbaClubData,
    abccricket,
    managementclub,
    human,

];

export const UPCOMING_EVENTS: ClubEvent[] = [
    // ABIT Club (abit-club)

    // Free Student Union & Alumni Welfare (free-student-union)
    {
        id: 'evt-fsu-1',
        clubId: 'free-student-union',
        clubName: 'Free Student Union & Alumni Welfare',
        title: 'Annual Campus Sports & Cultural Week 2026',
        date: '2026-09-02',
        time: '08:00 AM - 05:00 PM',
        venue: 'Campus Main Ground & Bhanu Hall',
        category: 'Campus Grand Event',
        description: 'Inter-department cricket, volleyball, dance, poetry, debate, and music competitions celebrating campus unity.',
        capacity: 2000,
        registeredCount: 890,
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-fsu-2',
        clubId: 'free-student-union',
        clubName: 'Free Student Union & Alumni Welfare',
        title: 'Global Alumni Mentorship & Career Guidance Assembly',
        date: '2026-09-18',
        time: '11:00 AM - 03:00 PM',
        venue: 'Main Auditorium',
        category: 'Alumni & Career',
        description: 'Connect with distinguished alumni working across banking, IT, public administration, and research.',
        capacity: 250,
        registeredCount: 140,
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=80'
    },

    // BBA Summit & Management Circle (bba-cloud)
    {
        id: 'evt-bba-1',
        clubId: 'bba-cloud',
        clubName: 'BBA Summit & Management Circle',
        title: 'Startup Pitch Deck & Youth Venture Summit 2026',
        date: '2026-08-28',
        time: '11:00 AM - 03:00 PM',
        venue: 'Management Seminar Hall',
        category: 'Business & Pitch',
        description: 'Present your innovative business plan to regional venture leaders and banking executives. Winning pitches receive mentorship and incubation support.',
        capacity: 80,
        registeredCount: 42,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-bba-2',
        clubId: 'bba-cloud',
        clubName: 'BBA Summit & Management Circle',
        title: 'NEPSE Stock Trading & Financial Portfolio Masterclass',
        date: '2026-09-05',
        time: '01:30 PM - 04:00 PM',
        venue: 'BBA Interactive Hall',
        category: 'Financial Seminar',
        description: 'Deep dive into fundamental company analysis, technical charting, and risk mitigation strategies in the Nepalese capital market.',
        capacity: 70,
        registeredCount: 51,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-bba-3',
        clubId: 'bba-cloud',
        clubName: 'BBA Summit & Management Circle',
        title: 'Corporate Leadership & Case Study Challenge',
        date: '2026-09-18',
        time: '10:00 AM - 02:00 PM',
        venue: 'Conference Room A',
        category: 'Case Competition',
        description: 'Solve real-world brand expansion dilemmas under strict time limits in teams of three. Judged by seasoned corporate consultants.',
        capacity: 60,
        registeredCount: 38,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    },

    // Literature & Creative Forum (aadikavi-nepali-creative-form)
    {
        id: 'evt-lit-1',
        clubId: 'aadikavi-nepali-creative-form',
        clubName: 'Aadikavi Nepali Literature & Creative Forum',
        title: 'Inter-College Poetry, Gazal & Short Story Recitation',
        date: '2026-09-15',
        time: '01:00 PM - 04:30 PM',
        venue: 'Bhanu Memorial Hall',
        category: 'Literature & Poetry',
        description: 'Showcase your creative writing, poetic recitation, and gazal compositions. Renowned litterateurs and alumni poets on the judge panel.',
        capacity: 150,
        registeredCount: 78,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-lit-2',
        clubId: 'aadikavi-nepali-creative-form',
        clubName: 'Aadikavi Nepali Literature & Creative Forum',
        title: 'Bhanu Jayanti Cultural Drama & Creative Writing Fest',
        date: '2026-09-24',
        time: '11:00 AM - 04:00 PM',
        venue: 'Main Campus Amphitheater',
        category: 'Cultural Exhibition',
        description: 'Celebration of Nepalese traditional folklore, theatrical drama, and instrumental folk performances.',
        capacity: 400,
        registeredCount: 220,
        image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=80'
    },

    // Health, Wellness & Commerce (bbs-circle)
    {
        id: 'evt-bbs-1',
        clubId: 'bbs-circle',
        clubName: 'Health, Wellness & Commerce Forum',
        title: 'Student Tax Filing, Auditing & Financial Accounting Workshop',
        date: '2026-09-07',
        time: '01:00 PM - 04:00 PM',
        venue: 'BBS Block, Hall 102',
        category: 'Financial Seminar',
        description: 'Hands-on training on Nepalese taxation laws, VAT/PAN returns, and preparing corporate balance sheets.',
        capacity: 80,
        registeredCount: 46,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-bbs-2',
        clubId: 'bbs-circle',
        clubName: 'Health, Wellness & Commerce Forum',
        title: 'Campus Mental Health Wellness & Ergonomics Seminar',
        date: '2026-09-17',
        time: '11:00 AM - 02:00 PM',
        venue: 'Interactive Room 201',
        category: 'Wellness & Health',
        description: 'Practical mindfulness, stress reduction techniques, and ergonomic posture practices for students.',
        capacity: 70,
        registeredCount: 35,
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80'
    },
    // Red Cross Circle (nepal-youth-red-cross)
    {
        id: 'evt-rc-1',
        clubId: 'abit-club',
        clubName: 'Nepal Youth Red Cross Circle (YRCC)',
        title: 'Mega Blood Donation & Free Health Screening Camp',
        date: '2026-09-10',
        time: '09:30 AM - 03:30 PM',
        venue: 'Student Recreation Gazebo',
        category: 'Health & Humanitarian',
        description: 'Join hands to donate blood and save lives in Tanahun district. Free blood pressure, blood glucose, and basic health consultation by medical professionals.',
        capacity: 300,
        registeredCount: 145,
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'evt-rc-2',
        clubId: 'abit-club',
        clubName: 'Nepal Youth Red Cross Circle (YRCC)',
        title: 'First Aid Certification & Disaster Preparedness Drill',
        date: '2026-09-22',
        time: '10:00 AM - 02:00 PM',
        venue: 'Red Cross Resource Room & Courtyard',
        category: 'Emergency Training',
        description: 'Practical training on CPR, emergency bandage techniques, stretcher transport, and rapid earthquake evacuation response.',
        capacity: 90,
        registeredCount: 65,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
    },
];
