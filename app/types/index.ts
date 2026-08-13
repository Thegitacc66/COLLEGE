export type ClubCategory =
    | 'Technology & IT'
    | 'Student Welfare'
    | 'Business & Management'
    | 'Literature & Culture'
    | 'Sports & Athletics'
    | 'Science & Innovation'
    | 'Humanitarian & Service'
    | 'Academic & Analytics';

export interface LeadershipMember {
    id: string;
    name: string;
    role: 'Faculty Advisor' | 'President' | 'Vice President' | 'Secretary' | 'Treasurer' | 'Event Co-ordinator' | 'Executive Member';
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
    capacity: number;
    registeredCount: number;
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
    category: 'Announcement' | 'Meeting' | 'Recruitment' | 'Results';
}

export interface Club {
    id: string;
    name: string;
    nepaliName?: string;
    category: ClubCategory;
    logo: string;
    accentColor: string;
    description: string;
    shortDescription: string;
    establishedYear: number;
    memberCount: number;
    facultyAdvisor: string;
    president: string;
    meetingSchedule: string;
    roomLocation: string;
    leadership: LeadershipMember[];
    achievements: string[];
    galleryImages: string[];
    contactEmail: string;
    featured?: boolean;
    vision?: string;
    mission?: string[];
    presidentMessage?: {
        senderName: string;
        senderRole: string;
        message: string;
        avatarUrl: string;
    };
    advisorMessage?: {
        senderName: string;
        senderRole: string;
        message: string;
        avatarUrl: string;
    };
    manifesto?: {
        title: string;
        points: string[];
    };
    history?: string;
}

export interface MemberApplication {
    id: string;
    studentName: string;
    studentId: string;
    email: string;
    phone: string;
    program: 'BBA' | 'BIM' | 'BBS' | 'BED' | 'BA' | 'BSC' | 'MBS';
    semester: string;
    clubId: string;
    clubName: string;
    motivation: string;
    skills: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    appliedDate: string;
}

export type Language = 'en' | 'np';
export type ViewMode = 'grid' | 'list' | 'categorized';
