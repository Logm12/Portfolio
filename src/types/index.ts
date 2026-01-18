// ============================================================================
// TYPES FOR PORTFOLIO WEBSITE
// Refactored for better type safety and extensibility
// ============================================================================

/**
 * Metric for displaying key project results
 */
export interface ProjectMetric {
    label: string;
    value: string;
    icon?: string;
}

/**
 * Project data structure - enhanced with metrics and architecture
 */
export interface Project {
    id: string;
    title: string;

    // Descriptions - short for cards, full for modal
    description: string;
    fullDescription?: string;

    // Display configuration
    tags: string[];
    image: string;
    architectureImage?: string; // Path to architecture diagram

    // Technical details
    techStack: TechItem[];
    metrics?: ProjectMetric[]; // Key performance metrics

    // Problem/Solution narrative
    problem: string;
    solution: string;

    // Links
    githubUrl: string;
    demoUrl?: string;
    reportUrl?: string;

    // Spotlight flag - for featured display
    isSpotlight?: boolean;
}

/**
 * Technology item for tech stack displays
 */
export interface TechItem {
    name: string;
    icon?: string;
    category?: 'core' | 'ml' | 'data' | 'deployment';
}

/**
 * Work experience entry
 */
export interface Experience {
    id: string;
    period: string;
    company: string;
    role: string;
    description: string;
    isActive: boolean;
    skills?: string[];
}

/**
 * Social media link
 */
export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

/**
 * Honor/Award entry for achievements section
 */
export interface Honor {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image?: string; // Path to certificate image
    description?: string;
}

/**
 * Skill category for radar chart
 */
export interface SkillCategory {
    name: string;
    level: number; // 0-100
    skills: string[];
}
