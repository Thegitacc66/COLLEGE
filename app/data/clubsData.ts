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
    name: 'ABIT Club (IT & Computer)',
    nepaliName: 'एबीआइटी क्लब (सूचना तथा प्रविधि)',
    category: 'Technology & IT',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe3-3xLjjnq6yezaAWxXSXRILMiIFH1l-EKpmH4O94MztAwJVNS2twlf0XxDqvyusiWD9Q9osImht0-bMQj4dJaDvwQlj66cALWusLjc7nyHNz51zoZ-4C-oGU8JKi9uSt8ztve7-dUav5hvEa0X0R1nwItBoRNErFn6qBtFcehTPzZrhj-dDnj2scv9z0O-ukPX_qAJBg7GziTtXGPVs2xuKgxqhwsOAeLpjc78XG4Q1xSZI-SCKoB-n9WWlUf0ZEYN4WunktNbFN5g',
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
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
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
            department: 'BBA 6th Semester',
            phone: '+977 9824104395',
            avatarUrl: '../bba/sabita.webp',
            email: ""
        },
        {
            id: 'bba7',
            name: 'Safalta Gauli',
            role: 'Spokesperson',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/safalta.webp',
            email: ""
        },
        {
            id: 'bba8',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba9',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba10',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba11',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba12',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba13',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba14',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba15',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba16',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba17',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
            email: ""
        },
        {
            id: 'bba18',
            name: '',
            role: '',
            department: 'BBA 6th Semester',
            phone: '+977 ',
            avatarUrl: '../bba/',
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

export const literatureForumData: Club = {
    id: 'aadikavi-nepali-creative-form',
    name: 'Aadikavi Nepali Literature & Creative Forum',
    nepaliName: 'आदिकवि नेपाली सिर्जनात्मक साहित्य मञ्च',
    category: 'Literature & Culture',
    logo: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#b45309',
    description: 'Named in honor of Aadikavi Bhanubhakta Acharya, this literary forum promotes poetry, storytelling, drama, gazal recitations, and literary criticism in Nepali and local languages.',
    shortDescription: 'Honoring Bhanubhakta through literary brilliance, poetry slams, drama, and creative writing.',
    establishedYear: 1992,
    memberCount: 95,
    facultyAdvisor: 'Prof. Ram Chandra Bhattarai',
    president: 'Manoj Pokharel',
    meetingSchedule: 'Saturdays at 11:00 AM',
    roomLocation: 'Bhanu Memorial Hall',
    contactEmail: 'nepali.literary@abcampus.edu.np',
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

export const healthSportsData: Club = {
    id: 'bbs-circle',
    name: 'Health, Wellness & Commerce Forum',
    nepaliName: 'स्वास्थ्य, कल्याण तथा वाणिज्य मञ्च',
    category: 'Business & Management',
    logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=300&fit=crop&crop=faces',
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

export const socialServiceData: Club = {
    id: 'student-management-circle',
    name: 'Youth Social Service & Leadership Circle',
    nepaliName: 'युवा सामाजिक सेवा तथा नेतृत्व वृत्त',
    category: 'Student Welfare',
    logo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#1e3a8a',
    description: 'A dedicated platform for social service, public speaking, parliamentary debate, campus event coordination, and community development across Tanahun district.',
    shortDescription: 'Social service, leadership development, public speaking, MUNs, and community outreach.',
    establishedYear: 2016,
    memberCount: 110,
    facultyAdvisor: 'Janak Raj Kafle',
    president: 'Bikash Poudel',
    meetingSchedule: 'Mondays at 4:00 PM',
    roomLocation: 'Auditorium Meeting Room',
    contactEmail: 'smc@abcampus.edu.np',
    vision: 'To nurture socially responsible student leaders dedicated to community service and institutional governance.',
    mission: [
        'Organize community outreach, blood donation support, and educational donation drives.',
        'Host public speaking competitions and Model United Nations (AMUN).',
        'Coordinate student volunteer corps for campus events.'
    ],
    presidentMessage: {
        senderName: 'Bikash Poudel',
        senderRole: 'President, Social Service Circle',
        message: 'Leadership begins with service. Our circle empowers students to make a real difference on campus and in society.',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Janak Raj Kafle',
        senderRole: 'Faculty Advisor',
        message: 'Social service instills empathy and practical leadership skills that last a lifetime.',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Social Service & Community Charter',
        points: [
            'Community First: Dedicated blood donation and health relief drives.',
            'Youth Empowerment: Training in public speaking and civic responsibility.'
        ]
    },
    history: 'Founded in 2016, Social Service Circle has led over 50 community initiatives and regional Model UN conferences.',
    leadership: [
        {
            id: 'smc1',
            name: 'Janak Raj Kafle',
            role: 'Faculty Advisor',
            department: 'Faculty of Public Administration',
            email: 'janak.kafle@abcampus.edu.np',
            phone: '+977 9856044556',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'smc2',
            name: 'Bikash Poudel',
            role: 'President',
            department: 'BBA 8th Semester',
            email: 'bikash.poudel@student.abcampus.edu.np',
            phone: '+977 9846123987',
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Hosted Aadikavi Model UN (AMUN 2025)',
        'Trained 180 students in Master of Ceremonies (MCing) & Public Oration',
        'Managed logistics for 20+ major campus events'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80'
    ]
};

export const redCrossData: Club = {
    id: 'nepal-youth-red-cross',
    name: 'Nepal Youth Red Cross Circle (YRCC)',
    nepaliName: 'नेपाल युवा रेडक्रस सर्कल',
    category: 'Humanitarian & Service',
    logo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#dc2626',
    description: 'The official youth wing of Nepal Red Cross Society at campus. Coordinates blood donation drives, disaster management training, first aid certification, and health awareness camps.',
    shortDescription: 'Blood donation, first aid emergency response, humanitarian service, and community relief.',
    establishedYear: 1998,
    memberCount: 210,
    facultyAdvisor: 'Niranjan Shrestha',
    president: 'Sunita Shrestha',
    meetingSchedule: 'Thursdays at 3:30 PM',
    roomLocation: 'Red Cross Room, Student Center',
    contactEmail: 'redcross@abcampus.edu.np',
    vision: 'To serve humanity without discrimination through active blood donation, emergency first response, and health relief drives.',
    mission: [
        'Organize quarterly blood donation camps supplying Damauli Blood Bank.',
        'Certify 100+ students annually in Basic First Aid & CPR.',
        'Mobilize disaster emergency volunteers during floods and natural crises.'
    ],
    presidentMessage: {
        senderName: 'Sunita Shrestha',
        senderRole: 'President, Youth Red Cross Circle',
        message: 'Humanitarian service is the highest calling. We welcome every student to join our emergency response corps and blood donation drives.',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Niranjan Shrestha',
        senderRole: 'Faculty Advisor',
        message: 'Youth Red Cross empowers students with life-saving skills and compassionate leadership.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Red Cross Seven Seven Fundamental Principles Charter',
        points: [
            'Humanity, Impartiality, Neutrality, Independence, Voluntary Service, Unity, and Universality.'
        ]
    },
    history: 'Active since 1998, YRCC ABC Campus has collected over 5,000 pints of blood and responded to regional disaster emergencies.',
    leadership: [
        {
            id: 'rc1',
            name: 'Niranjan Shrestha',
            role: 'Faculty Advisor',
            department: 'Health & Physical Education',
            email: 'niranjan@abcampus.edu.np',
            phone: '+977 9856055667',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'rc2',
            name: 'Sunita Shrestha',
            role: 'President',
            department: 'B.Ed 3rd Year',
            email: 'sunita.shrestha@student.abcampus.edu.np',
            phone: '+977 9856123456',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Collected 520+ pints of blood in Annual Campus Blood Donation Drive',
        'Certified 150 students in Basic First Aid & CPR',
        'Displaced community flood relief distribution in Tanahun district'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
    ]
};

export const extraCurricularData: Club = {
    id: 'science-and-research-club',
    name: 'Extra-Curricular Activities & Science Club',
    nepaliName: 'अतिरिक्त क्रियाकलाप तथा विज्ञान क्लब',
    category: 'Science & Innovation',
    logo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#0d9488',
    description: 'Promoting extra-curricular excellence, scientific inquiry, botanical and environmental research, physics exhibitions, astronomy observation nights, and field research studies across Tanahun region.',
    shortDescription: 'Scientific research, extra-curricular events, telescope stargazing, lab experiments, and eco-tech projects.',
    establishedYear: 2012,
    memberCount: 75,
    facultyAdvisor: 'Dr. Hari Prasad Devkota',
    president: 'Prashant Adhikari',
    meetingSchedule: 'Fridays at 2:00 PM',
    roomLocation: 'Science Building, Lab 101',
    contactEmail: 'science.club@abcampus.edu.np',
    vision: 'To foster scientific curiosity, extra-curricular talent, and environmental research among campus students.',
    mission: [
        'Organize annual Science & Tech Exhibitions for regional schools.',
        'Host night astronomy stargazing sessions and robotics workshops.',
        'Conduct field research on local river ecosystems and biodiversity.'
    ],
    presidentMessage: {
        senderName: 'Prashant Adhikari',
        senderRole: 'President, Science & ECA Club',
        message: 'Science comes alive when we experiment and explore outside textbooks. Join us for hands-on research and extra-curricular innovation!',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Dr. Hari Prasad Devkota',
        senderRole: 'Faculty Advisor',
        message: 'Extra-curricular research activities sharpen critical thinking and practical problem solving.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'ECA & Science Innovation Charter',
        points: [
            'Field Research: Engaging students in authentic environmental and physical science research.',
            'Public Engagement: Hosting science fairs for local schools in Tanahun.'
        ]
    },
    history: 'Founded in 2012, the club has built a weather station on campus and hosted multiple regional science fairs.',
    leadership: [
        {
            id: 'sc1',
            name: 'Dr. Hari Prasad Devkota',
            role: 'Faculty Advisor',
            department: 'Department of Science & Research',
            email: 'hari.devkota@abcampus.edu.np',
            phone: '+977 9856066778',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'sc2',
            name: 'Prashant Adhikari',
            role: 'President',
            department: 'B.Sc 4th Year',
            email: 'prashant.a@student.abcampus.edu.np',
            phone: '+977 9805678901',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Organized Science Expo 2024 with 1,200 local school attendees',
        'Published research on Madi River Water Quality Assessment',
        'Constructed campus solar-powered weather monitoring station'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80'
    ]
};

export const sportsBoardData: Club = {
    id: 'cricket-and-athletics-club',
    name: 'Campus Sports & Athletics Board',
    nepaliName: 'क्याम्पस खेलकुद तथा एथलेटिक्स बोर्ड',
    category: 'Sports & Athletics',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#15803d',
    description: 'Promoting athletic excellence, cricket tournaments, badminton championships, marathon runs, and sportsmanship across all faculties at Aadikavi Bhanubhakta Campus.',
    shortDescription: 'Inter-college cricket league, track & field athletics, volleyball, and physical fitness.',
    establishedYear: 2005,
    memberCount: 140,
    facultyAdvisor: 'Lal Bahadur Thapa',
    president: 'Roshan Gurung',
    meetingSchedule: 'Saturdays at 7:00 AM (Sports Ground)',
    roomLocation: 'Campus Sports Pavilion',
    contactEmail: 'sports@abcampus.edu.np',
    vision: 'To build healthy, disciplined, and championship-winning student athletes representing Aadikavi Bhanubhakta Campus at provincial and national levels.',
    mission: [
        'Host the Annual Inter-Faculty Sports Meet and Cricket Tournament.',
        'Train varsity teams in Cricket, Volleyball, Football, Badminton, and Athletics.',
        'Maintain high quality sports grounds and fitness facilities.'
    ],
    presidentMessage: {
        senderName: 'Roshan Gurung',
        senderRole: 'President, Sports Board',
        message: 'Sports teach us teamwork, resilience, and discipline. We invite every student to participate in campus sports!',
        avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Lal Bahadur Thapa',
        senderRole: 'Faculty Advisor',
        message: 'A healthy mind lives in a healthy body. Sports play a vital role in student wellness.',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Campus Athletics & Fair Play Charter',
        points: [
            'Fair Play & Sportsmanship.',
            'Equal Sports Access for Men and Women Athletes.',
            'Regular Inter-Faculty Leagues.'
        ]
    },
    history: 'Established in 2005, the Sports Board has won multiple regional university trophies in cricket and athletics.',
    leadership: [
        {
            id: 'sp1',
            name: 'Lal Bahadur Thapa',
            role: 'Faculty Advisor',
            department: 'Department of Physical Education',
            email: 'lal.thapa@abcampus.edu.np',
            phone: '+977 9856077889',
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'sp2',
            name: 'Roshan Gurung',
            role: 'President',
            department: 'BBS 3rd Year',
            email: 'roshan.gurung@student.abcampus.edu.np',
            phone: '+977 9846789012',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Champions of Tribhuvan University Western Regional Cricket Cup 2024',
        'Organized Annual Inter-Faculty Sports Meet with 800+ participants',
        'Upgraded campus cricket net practice facilities'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80'
    ]
};

export const culturalClubData: Club = {
    id: 'vyas-cultural-form',
    name: 'Vyas Cultural & Performing Arts Society',
    nepaliName: 'व्यास सांस्कृतिक तथा मञ्चीय कला समाज',
    category: 'Literature & Culture',
    logo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#c026d3',
    description: 'Preserving and performing traditional Nepalese folk dances, ethnic music, cultural drama, musical instruments (Madal, Sarangi, Flute), and ethnic heritage showcases.',
    shortDescription: 'Preserving Nepalese heritage through folk dance, music ensembles, and cultural pageants.',
    establishedYear: 2002,
    memberCount: 90,
    facultyAdvisor: 'Saraswati Sen',
    president: 'Manisha Thapa',
    meetingSchedule: 'Fridays at 4:00 PM',
    roomLocation: 'Cultural Activity Room',
    contactEmail: 'vyas.culture@abcampus.edu.np',
    vision: 'To celebrate Nepal\'s rich cultural diversity and preserve indigenous performing arts through youth dance and musical ensembles.',
    mission: [
        'Train students in traditional Nepalese folk instruments and dance forms.',
        'Organize ethnic heritage pageants during campus festivals.',
        'Represent the campus in provincial cultural showcases.'
    ],
    presidentMessage: {
        senderName: 'Manisha Thapa',
        senderRole: 'President, Vyas Cultural Society',
        message: 'Cultural art brings us together. We invite every student who loves music, dance, and theater to perform with us!',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Saraswati Sen',
        senderRole: 'Faculty Advisor',
        message: 'Cultural expression nurtures heritage awareness and artistic pride.',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Cultural Heritage Preservation Charter',
        points: [
            'Diversity & Harmony: Celebrating all ethnic traditions of Tanahun and Nepal.',
            'Student Skill Training: Free coaching in Madal, Flute, and folk dance.'
        ]
    },
    history: 'Founded in 2002, Vyas Cultural Society has performed in over 100 regional festivals and national showcases.',
    leadership: [
        {
            id: 'vy1',
            name: 'Saraswati Sen',
            role: 'Faculty Advisor',
            department: 'Department of Sociology & Culture',
            email: 'saraswati.sen@abcampus.edu.np',
            phone: '+977 9856088990',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'vy2',
            name: 'Manisha Thapa',
            role: 'President',
            department: 'BA 3rd Year',
            email: 'manisha.thapa@student.abcampus.edu.np',
            phone: '+977 9816543210',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        '1st Place in National University Cultural Dance Showcase 2024',
        'Performed ethnic Gurung, Magar, and Newari traditional dances at Tanahun Mahotsav',
        'Conducted Madal and Flute training program for 80 students'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&auto=format&fit=crop&q=80'
    ]
};

export const academicCommitteeData: Club = {
    id: 'maths-circle',
    name: 'Academic Excellence & Maths Circle',
    nepaliName: 'शैक्षिक उत्कृष्टता तथा गणित वृत्त',
    category: 'Academic & Analytics',
    logo: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#4f46e5',
    description: 'Demystifying mathematics, data analytics, logical reasoning, and academic research through puzzle challenges, mathematical modeling, and Olympiad training.',
    shortDescription: 'Quantitative reasoning, data modeling, math olympiads, research methodology, and logic puzzles.',
    establishedYear: 2017,
    memberCount: 60,
    facultyAdvisor: 'Er. Binod Sharma',
    president: 'Aayush Karki',
    meetingSchedule: 'Wednesdays at 3:30 PM',
    roomLocation: 'Mathematics Lab, Room 302',
    contactEmail: 'maths.circle@abcampus.edu.np',
    vision: 'To build analytical rigor and problem-solving brilliance across all academic disciplines at Aadikavi Bhanubhakta Campus.',
    mission: [
        'Organize Gandaki Provincial Math Olympiads & Logic Challenges.',
        'Conduct Python & R Data Analysis bootcamps for student researchers.',
        'Provide academic peer-tutoring in quantitative subjects.'
    ],
    presidentMessage: {
        senderName: 'Aayush Karki',
        senderRole: 'President, Academic Circle',
        message: 'Mathematics and analytical logic form the bedrock of modern innovation. Join us to make quantitative reasoning intuitive and fun!',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Er. Binod Sharma',
        senderRole: 'Faculty Advisor, Dept of Mathematics',
        message: 'Analytical problem solving is a superpower in today\'s data-driven world.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Academic & Quantitative Excellence Charter',
        points: [
            'Peer Academic Support: Free quantitative tutoring for all campus students.',
            'Research Methodology: Training in data analysis and academic writing.'
        ]
    },
    history: 'Established in 2017, the committee has successfully hosted regional Math Olympiads and quantitative reasoning seminars.',
    leadership: [
        {
            id: 'mc1',
            name: 'Er. Binod Sharma',
            role: 'Faculty Advisor',
            department: 'Department of Mathematics & Statistics',
            email: 'binod.sharma@abcampus.edu.np',
            phone: '+977 9856099001',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'mc2',
            name: 'Aayush Karki',
            role: 'President',
            department: 'B.Sc 3rd Year',
            email: 'aayush.karki@student.abcampus.edu.np',
            phone: '+977 9860123789',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Organized Gandaki Math Olympiad 2025',
        'Conducted Python for Data Analysis Bootcamp for 90 students',
        'Published weekly Math Puzzle challenge on campus bulletin'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80'
    ]
};

export const disasterManagementData: Club = {
    id: 'abc-readers-club',
    name: 'Disaster Management & Campus Readers Club',
    nepaliName: 'विपद् व्यवस्थापन तथा पाठक मञ्च',
    category: 'Literature & Culture',
    logo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#7c3aed',
    description: 'A dual-impact committee promoting disaster preparedness, emergency rescue drills, library book circles, author interactions, campus library donation drives, and community safety.',
    shortDescription: 'Disaster emergency preparedness, book discussions, author meetups, and reading marathon challenges.',
    establishedYear: 2019,
    memberCount: 80,
    facultyAdvisor: 'Prakash Devkota',
    president: 'Kirtan Joshi',
    meetingSchedule: 'Saturdays at 2:00 PM (Central Library)',
    roomLocation: 'Campus Library Discussion Lounge',
    contactEmail: 'readers.club@abcampus.edu.np',
    vision: 'To build a knowledgeable, disaster-resilient, and well-read campus community.',
    mission: [
        'Host campus earthquake and fire evacuation mock drills.',
        'Conduct monthly book reviews and author interactive lounge sessions.',
        'Maintain student open bookshelf and community emergency kits.'
    ],
    presidentMessage: {
        senderName: 'Kirtan Joshi',
        senderRole: 'President, Disaster & Readers Circle',
        message: 'Knowledge prepares us for life, and safety awareness protects our community.',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Prakash Devkota',
        senderRole: 'Faculty Advisor',
        message: 'Disaster readiness paired with intellectual growth makes well-rounded campus citizens.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Disaster Safety & Literacy Charter',
        points: [
            'Campus Safety First: Bi-annual disaster rescue drills.',
            'Open Access Library: Freely accessible student bookshelf.'
        ]
    },
    history: 'Founded in 2019, the circle has trained hundreds in emergency drills while stocking hundreds of books.',
    leadership: [
        {
            id: 'rcb1',
            name: 'Prakash Devkota',
            role: 'Faculty Advisor',
            department: 'Head Librarian',
            email: 'prakash.library@abcampus.edu.np',
            phone: '+977 9856013579',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'rcb2',
            name: 'Kirtan Joshi',
            role: 'President',
            department: 'BA English 3rd Year',
            email: 'kirtan.j@student.abcampus.edu.np',
            phone: '+977 9856781234',
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Added 450+ donated books to the student open bookshelf',
        'Hosted 8 prominent Nepalese authors for campus interactive sessions',
        'Completed 52-Week Book Reading Challenge & Fire Rescue Drill'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80'
    ]
};

export const ecoEnvironmentData: Club = {
    id: 'eco-and-environment-club',
    name: 'Eco Club & Environmental Protection Circle',
    nepaliName: 'वातावरण तथा पर्यावरण संरक्षण क्लब',
    category: 'Humanitarian & Service',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#166534',
    description: 'Championing environmental sustainability, zero-plastic campus initiatives, botanical garden maintenance, tree plantation drives, and waste management campaigns across Damauli and Tanahun.',
    shortDescription: 'Green campus initiative, tree plantation, recycling campaigns, and climate action.',
    establishedYear: 2014,
    memberCount: 115,
    facultyAdvisor: 'Dr. Kamala Sharma',
    president: 'Aarav Giri',
    meetingSchedule: 'Mondays at 3:30 PM',
    roomLocation: 'Campus Eco Park',
    contactEmail: 'eco.club@abcampus.edu.np',
    vision: 'To create a plastic-free, carbon-neutral, and biodiverse green campus at Aadikavi Bhanubhakta Campus.',
    mission: [
        'Plant 1,000+ native saplings annually in Tanahun region.',
        'Implement waste segregation and composting across campus premises.',
        'Lead climate action rallies and environmental awareness drives.'
    ],
    presidentMessage: {
        senderName: 'Aarav Giri',
        senderRole: 'President, Eco Club',
        message: 'Protecting our planet starts right here on our campus. Every tree planted and plastic recycled counts!',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Dr. Kamala Sharma',
        senderRole: 'Faculty Advisor',
        message: 'Environmental stewardship is the most urgent responsibility of our student generation.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Green Campus Environmental Charter',
        points: [
            'Zero Single-Use Plastic Policy.',
            'Regular Tree Plantation & Seti River Bank Cleaning Drives.'
        ]
    },
    history: 'Founded in 2014, Eco Club has planted over 5,000 trees across Damauli and earned municipal green recognition awards.',
    leadership: [
        {
            id: 'eco1',
            name: 'Dr. Kamala Sharma',
            role: 'Faculty Advisor',
            department: 'Department of Environmental Science',
            email: 'kamala.sharma@abcampus.edu.np',
            phone: '+977 9856024680',
            avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'eco2',
            name: 'Aarav Giri',
            role: 'President',
            department: 'B.Sc 3rd Year',
            email: 'aarav.giri@student.abcampus.edu.np',
            phone: '+977 9846345678',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Planted 1,000+ saplings along Seti River bank and campus premises',
        'Awarded "Greenest Campus Campaign 2024" by Damauli Municipality',
        'Installed waste segregation bins across all campus blocks'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1511497584788-8767611136f6?w=800&auto=format&fit=crop&q=80'
    ]
};

export const womenEmpowermentData: Club = {
    id: 'women-empowerment-cell',
    name: 'Women Empowerment & Gender Equity Cell',
    nepaliName: 'महिला सशक्तिकरण तथा लैङ्गिक समानता कक्ष',
    category: 'Humanitarian & Service',
    logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces',
    accentColor: '#db2777',
    description: 'Fostering female leadership, career mentorship, self-defense workshops, health awareness, and gender sensitization across campus.',
    shortDescription: 'Female leadership development, career mentoring, health awareness, and equity drives.',
    establishedYear: 2018,
    memberCount: 75,
    facultyAdvisor: 'Dr. Saraswati Adhikari',
    president: 'Puja Sharma',
    meetingSchedule: 'Thursdays at 3:30 PM',
    roomLocation: 'Main Building, Room 108',
    contactEmail: 'women.empowerment@abcampus.edu.np',
    vision: 'To empower every female student with confidence, leadership opportunities, and equal platform in academia and society.',
    mission: [
        'Organize leadership, public speaking, and digital literacy workshops for female students.',
        'Conduct reproductive health, hygiene, and mental wellness awareness sessions.',
        'Provide career mentorship and connect female students with women leaders in Gandaki Province.'
    ],
    presidentMessage: {
        senderName: 'Puja Sharma',
        senderRole: 'President, Women Empowerment Cell',
        message: 'Empowering women isn\'t just about creating opportunities—it\'s about giving every student the courage to lead with confidence.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Dr. Saraswati Adhikari',
        senderRole: 'Faculty Advisor & Associate Professor',
        message: 'Gender equality in higher education paves the way for a progressive and resilient society.',
        avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Women Empowerment Charter',
        points: [
            'Equal Leadership Opportunities: Encouraging female representation across all campus clubs.',
            'Health & Wellness: Regular free health screening and hygiene awareness camps.',
            'Skill Mentorship: Connect students with inspiring female alumni and professionals.'
        ]
    },
    history: 'Founded in 2018, the cell has spearheaded numerous gender sensitization programs, health awareness drives, and women in tech summits.',
    leadership: [
        {
            id: 'we1',
            name: 'Dr. Saraswati Adhikari',
            role: 'Faculty Advisor',
            department: 'Department of Humanities',
            email: 'saraswati.adhikari@abcampus.edu.np',
            phone: '+977 9856035791',
            avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'we2',
            name: 'Puja Sharma',
            role: 'President',
            department: 'BBA 4th Year',
            email: 'puja.sharma@abcampus.edu.np',
            phone: '+977 9804126359',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [
        'Organized Gandaki Provincial Women Leadership Summit 2025.',
        'Distributed over 1,000 health and hygiene safety kits in rural Tanahun schools.',
        'Hosted Self-Defense and Confidence Building Workshops for 300+ campus students.'
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80'
    ]
};

// Master independent array of all 14 clubs with 0 external file dependencies
export const ALL_CLUBS: Club[] = [
    abitClubData,
    alumniWelfareData,
    bbaClubData,
    literatureForumData,
    healthSportsData,
    socialServiceData,
    redCrossData,
    extraCurricularData,
    sportsBoardData,
    culturalClubData,
    academicCommitteeData,
    disasterManagementData,
    ecoEnvironmentData,
    womenEmpowermentData
];

export const UPCOMING_EVENTS: ClubEvent[] = [
    {
        id: 'e1',
        clubId: 'abit-club',
        clubName: 'ABIT Club (IT & Computer)',
        title: 'Full-Stack React & AI Agent Hackathon 2026',
        date: '2026-08-25',
        time: '09:00 AM - 05:00 PM',
        venue: 'IT Lab 204 & Main Auditorium',
        category: 'Workshop & Tech',
        description: 'Build innovative web applications integrated with AI models. Prize pool worth NPR 50,000 with certificates and mentorship for all participants!',
        capacity: 100,
        registeredCount: 68,
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e2',
        clubId: 'bba-cloud',
        clubName: 'BBA Cloud (Business Summit)',
        title: 'Startup Pitch Deck & Youth Investor Summit',
        date: '2026-08-28',
        time: '11:00 AM - 03:00 PM',
        venue: 'Management Seminar Hall',
        category: 'Business & Pitch',
        description: 'Present your business and venture idea to prominent entrepreneurs, chamber of commerce delegates, and regional bank managers. Top 3 ideas win seed funding mentorship.',
        capacity: 80,
        registeredCount: 42,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e3',
        clubId: 'free-student-union',
        clubName: 'Free Student Union (FSU)',
        title: 'Annual Campus Sports & Cultural Week 2026',
        date: '2026-09-02',
        time: '08:00 AM - 05:00 PM',
        venue: 'Campus Main Ground & Bhanu Hall',
        category: 'Sports & Athletics',
        description: 'Inter-department cricket, volleyball, futsal, dance, poetry, debate, and musical competitions celebrating campus unity and athletic talent.',
        capacity: 2000,
        registeredCount: 890,
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e4',
        clubId: 'nepal-youth-red-cross',
        clubName: 'Nepal Youth Red Cross Circle',
        title: 'Grand Blood Donation & Free Health Screening Camp',
        date: '2026-09-10',
        time: '09:30 AM - 03:30 PM',
        venue: 'Student Recreation Gazebo',
        category: 'Humanitarian & Health',
        description: 'Donate blood to save lives. Free eye checkup, blood pressure, and blood sugar tests provided by Damauli Hospital medical staff and volunteers.',
        capacity: 300,
        registeredCount: 145,
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e5',
        clubId: 'aadikavi-nepali-creative-form',
        clubName: 'Aadikavi Nepali Creative Form',
        title: 'Inter-College Poetry & Gazal Recitation Competition',
        date: '2026-09-15',
        time: '01:00 PM - 04:30 PM',
        venue: 'Bhanu Memorial Hall',
        category: 'Literature & Arts',
        description: 'Showcase your poetic rhythm, storytelling, and ghazal recitation skills. Renowned Nepalese poets and litterateurs will grace the evaluation panel.',
        capacity: 150,
        registeredCount: 78,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e6',
        clubId: 'nature-conservation-club',
        clubName: 'Nature Conservation & Eco Club',
        title: 'Clean Seti River Watershed & Tree Plantation Drive',
        date: '2026-09-22',
        time: '07:30 AM - 12:00 PM',
        venue: 'Seti River Bank & Campus Arboretum',
        category: 'Eco & Environment',
        description: 'Environmental cleanliness drive and planting 200 indigenous saplings along the riparian zone. Includes gloves, seedling distribution, and eco-badges for volunteers.',
        capacity: 120,
        registeredCount: 94,
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e7',
        clubId: 'women-empowerment-cell',
        clubName: 'Women Empowerment Cell',
        title: 'Women in Leadership & Tech Career Masterclass',
        date: '2026-09-29',
        time: '01:30 PM - 04:30 PM',
        venue: 'Conference Hall A',
        category: 'Workshop & Tech',
        description: 'Interactive session featuring inspiring female leaders in business, governance, and technology discussing career growth, negotiation, and entrepreneurship.',
        capacity: 100,
        registeredCount: 65,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
    },
    {
        id: 'e8',
        clubId: 'cultural-and-musical-club',
        clubName: 'Cultural & Musical Club',
        title: 'Gandaki Folk Music & Traditional Dance Fiesta',
        date: '2026-10-05',
        time: '02:00 PM - 06:00 PM',
        venue: 'Main Open-Air Amphitheatre',
        category: 'Literature & Arts',
        description: 'Celebrating traditional folk instruments (Madal, Sarangi, Bansuri) with student music bands and cultural group dance performances.',
        capacity: 500,
        registeredCount: 310,
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80'
    }
];

export const CAMPUS_NOTICES: ClubNotice[] = [
    {
        id: 'n1',
        clubId: 'free-student-union',
        clubName: 'Free Student Union',
        title: 'Call for New Club Memberships for Academic Session 2026/27',
        date: '2026-08-05',
        content: 'All newly enrolled and continuing students are encouraged to register for up to two student committees through the digital portal before August 31st.',
        isImportant: true,
        category: 'Recruitment'
    },
    {
        id: 'n2',
        clubId: 'abit-club',
        clubName: 'ABIT Club',
        title: 'Selection Results for Web Dev Mentor Core Team',
        date: '2026-08-02',
        content: 'Congratulations to the 12 shortlisted mentors for the upcoming React & Node.js peer learning sessions. First briefing on Friday at 3:30 PM.',
        isImportant: false,
        category: 'Results'
    },
    {
        id: 'n3',
        clubId: 'bba-cloud',
        clubName: 'BBA Cloud',
        title: 'Guest Lecture on Nepalese Banking Regulations & Digital Wallets',
        date: '2026-07-28',
        content: 'Featuring guest speaker Mr. Ramesh Pokharel, Branch Manager at Nabil Bank Damauli branch. Attendance mandatory for BBA 4th & 6th Sem.',
        isImportant: false,
        category: 'Announcement'
    },
    {
        id: 'n4',
        clubId: 'eco-and-environment-club',
        clubName: 'Eco & Environment Club',
        title: 'Weekly Campus Cleanliness Drive & Tree Plantation',
        date: '2026-07-25',
        content: 'Join us this Saturday at 7:00 AM at the Eco Park entrance. Refreshments and certificate of volunteering hours provided.',
        isImportant: false,
        category: 'Meeting'
    }
];
