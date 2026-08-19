/**
 * Next.js Type Definitions
 * File: types-next.tsx (or types.ts / types.tsx in your Next.js project)
 * 
 * This file contains fully typed interfaces for Committee Members, Notices,
 * Manifesto Items, Gallery Images, Grievance Submissions, and Chat Messages.
 * You can copy and paste this directly into your Next.js project.
 */

export interface CommitteeMember {
    id: string;
    nameEn: string;
    nameNp: string;
    roleEn: string;
    roleNp: string;
    phone: string;
    photoUrl?: string;
    isExecutive: boolean;
    order: number;
}

export interface Notice {
    id: string;
    titleEn: string;
    titleNp: string;
    date: string;
    category: "Urgent" | "Academic" | "Sports" | "Solidarity" | "General";
    contentEn: string;
    contentNp: string;
    isUrgent: boolean;
    imageDesc?: string;
}

export interface ManifestoItem {
    id: string;
    titleEn: string;
    titleNp: string;
    descEn: string;
    descNp: string;
    iconName: string;
}

export interface GalleryImage {
    id: string;
    titleEn: string;
    titleNp: string;
    category: "Protest" | "Campaign" | "Interaction" | "Sports" | "Academic" | "Solidarity";
    descriptionEn: string;
    descriptionNp: string;
    placeholderBg: string;
    symbolicEmoji: string;
    imageUrl?: string;
}

export interface Grievance {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    subject: string;
    category: string;
    message: string;
    status: "Pending" | "In Review" | "Resolved";
    createdAt: string;
    isAnonymous: boolean;
    response?: string;
}

export interface ChatMessage {
    id: string;
    role: "user" | "model";
    text: string;
    timestamp: Date;
}
