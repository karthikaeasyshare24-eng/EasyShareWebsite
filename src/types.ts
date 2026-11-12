export interface CourseItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'school' | 'college' | 'professional' | 'spoken' | 'ai-coding' | 'cybersecurity' | 'data-science' | 'pathways' | 'business-management' | 'design-creative' | 'engineering-robotics';
  duration?: string;
  fees?: string;
  topics: string[];
  outcome?: string;
  includes?: string;
  badge?: string;
}

export interface ComboProgram {
  id: string;
  title: string;
  duration: string;
  fees: string;
  features: string[];
  isPopular?: boolean;
  highlightText?: string;
}

export interface ProjectIndustry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  projects: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  shortName?: string;
  path: string;
  iconName: string;
  badge: string;
  description: string;
  targetAudience?: string;
  courses: CourseItem[];
}
