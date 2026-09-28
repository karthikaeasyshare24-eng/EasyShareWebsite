export interface CourseItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'school' | 'college' | 'professional' | 'spoken';
  duration: string;
  fees: string;
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
