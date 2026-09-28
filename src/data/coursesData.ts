import { CourseItem, ComboProgram, ProjectIndustry, FAQItem } from '../types';

export const SCHOOL_COURSES: CourseItem[] = [
  {
    id: 'ai-basics-school',
    title: '1. AI Basics for School Students',
    subtitle: 'Build strong AI literacy and learn to use AI responsibly as a study companion',
    category: 'school',
    duration: '5 Days',
    fees: '₹2,500',
    topics: [
      'What is Artificial Intelligence?',
      'Generative AI & Chatbots',
      'How AI works (simple explanation)',
      'ChatGPT & Gemini basics',
      'AI for homework & learning',
      'AI for presentations & projects',
      'Creating images using AI',
      'Prompt writing basics',
      'AI safety & responsible use',
      'Fun AI activities & mini project'
    ],
    outcome: 'Students learn how to use AI as a Study Partner, not just a chatbot.',
    badge: 'Beginner Friendly'
  },
  {
    id: 'ai-study-partner',
    title: '2. AI Study Partner',
    subtitle: 'Master AI-powered academic workflows, exam preparation, and smart study skills',
    category: 'school',
    duration: '7 Days',
    fees: '₹10,000',
    topics: [
      'AI-powered study techniques',
      'Smart notes & summaries',
      'Research using AI',
      'Creating presentations',
      'Exam preparation with AI',
      'Question generation & quizzes',
      'English improvement using AI',
      'AI image & creative tools',
      'Productivity tools',
      'Mini AI project'
    ],
    outcome: 'Accelerate homework, study efficiency, and creative school presentations with hands-on AI tools.',
    badge: 'Comprehensive'
  }
];

export const COLLEGE_COURSES: CourseItem[] = [
  {
    id: 'ai-genai-foundation',
    title: '3. AI & Generative AI Foundation',
    subtitle: 'Essential modern AI tools, prompt engineering, and career applications for undergraduate and postgraduate students',
    category: 'college',
    duration: '7 Days',
    fees: '₹2,999',
    topics: [
      'AI, ML & Generative AI basics',
      'ChatGPT/Gemini/Claude',
      'Prompt Engineering',
      'AI research & information gathering',
      'AI for presentations & documentation',
      'AI image & content generation',
      'AI productivity tools',
      'AI ethics & responsible AI',
      'Resume & career applications',
      'Practical AI assignment'
    ],
    outcome: 'Gain practical fluency in top AI models (ChatGPT, Gemini, Claude) with ready-to-use resume assets.',
    badge: 'Foundational'
  },
  {
    id: 'ai-career-project-mentor',
    title: '4. AI Career & Project Mentor',
    subtitle: 'Deep dive into industry-specific AI tools, data analytics, APIs, and end-to-end portfolio building',
    category: 'college',
    duration: '10 Days',
    fees: '₹7,999',
    topics: [
      'Generative AI',
      'Prompt Engineering',
      'AI tools for different industries',
      'AI + Excel',
      'AI + Data Analysis',
      'AI + Power BI',
      'AI automation basics',
      'AI APIs (introduction)',
      'Building AI-based applications',
      'Resume & portfolio support',
      'Project presentation preparation'
    ],
    includes: 'Certificate + Practical Project + Mentorship',
    outcome: 'Build an industry-ready portfolio with real AI applications, Excel & Power BI automation, and 1:1 mentorship.',
    badge: 'Career Ready'
  }
];

export const PROJECT_ASSISTANCE_PROGRAM = {
  title: 'AI Project Guidance Program',
  heading: 'Final-Year Project Assistance',
  duration: '7–15 Days',
  fees: '₹15,000 onwards',
  description: 'Complete end-to-end mentoring for final-year engineering, MCA, BCA, and science students. We provide step-by-step guidance from problem formulation to final viva.',
  checklist: [
    'Project idea selection',
    'Problem statement',
    'AI tool/technology selection',
    'Project planning',
    'AI implementation guidance',
    'Documentation',
    'PPT preparation',
    'Project demonstration',
    'Viva preparation'
  ],
  note: "Projects are selected according to the student's stream and academic requirements."
};

export const PROJECT_INDUSTRIES: ProjectIndustry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    iconName: 'Activity',
    description: 'AI assistants, clinical summaries, and patient inquiry systems',
    projects: [
      'AI-based Symptom & Health Information Assistant',
      'Medical Report Summarizer',
      'Hospital FAQ Chatbot'
    ]
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    description: 'Personalized learning systems, quiz builders, and student analytics',
    projects: [
      'AI Study Assistant',
      'AI Quiz & Question Generator',
      'Student Performance Analysis System'
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    iconName: 'TrendingUp',
    description: 'Personal expense tracking, automated document audits, and market bots',
    projects: [
      'Personal Expense Analysis using AI',
      'Financial Document Summarizer',
      'Stock/Market Information Assistant'
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    iconName: 'ShoppingBag',
    description: 'Conversational shopping, recommendation engines, and WhatsApp checkout bots',
    projects: [
      'AI Customer Support Chatbot',
      'Product Recommendation System',
      'WhatsApp Order Assistant'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    iconName: 'Home',
    description: 'Automated property matching, lead qualification, and listing copywriting',
    projects: [
      'AI Property Recommendation Assistant',
      'Real Estate Lead Qualification Bot',
      'Property Description Generator'
    ]
  },
  {
    id: 'hr',
    name: 'HR & Talent',
    iconName: 'Users',
    description: 'Automated candidate screening, job description crafting, and interview simulations',
    projects: [
      'AI Resume Analyzer',
      'Job Description Generator',
      'Interview Question Generator'
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering',
    iconName: 'Cpu',
    description: 'Industrial maintenance diagnosis, automated quality checks, and predictive concepts',
    projects: [
      'AI Maintenance Assistant',
      'AI-based Quality Inspection',
      'Predictive Maintenance Concept Project'
    ]
  }
];

export const SPOKEN_COURSES: CourseItem[] = [
  {
    id: 'spoken-english',
    title: 'Spoken English — Communicate with Confidence',
    subtitle: 'Break the hesitation and speak English fluently in professional and personal contexts',
    category: 'spoken',
    duration: '10 Days',
    fees: '₹3,000',
    topics: [
      'Basic English Grammar',
      'Everyday Conversation',
      'Vocabulary Building',
      'Speaking Practice',
      'Sentence Formation',
      'Pronunciation',
      'Workplace Communication',
      'Presentation Skills',
      'Interview Communication',
      'Confidence Building'
    ],
    outcome: 'Learn to speak, not just study grammar.',
    badge: 'High Demand'
  },
  {
    id: 'spoken-hindi',
    title: 'Spoken Hindi — Hindi for Everyday Communication',
    subtitle: 'Practical conversational Hindi for non-native speakers, professionals, and students',
    category: 'spoken',
    duration: '10 Days',
    fees: '₹2,500',
    topics: [
      'Hindi Basics',
      'Everyday Vocabulary',
      'Sentence Formation',
      'Common Conversations',
      'Workplace Hindi',
      'Travel & Shopping Conversations',
      'Pronunciation',
      'Speaking Practice',
      'Confidence Building'
    ],
    outcome: 'Master day-to-day spoken Hindi for work, travel, and social interactions with ease.',
    badge: 'Practical Fluency'
  }
];

export const PROFESSIONAL_COURSE: CourseItem = {
  id: 'ai-professionals-bootcamp',
  title: 'AI Productivity Bootcamp',
  subtitle: 'Transform your daily professional output using modern AI workflows and tools',
  category: 'professional',
  duration: '5 Days',
  fees: '₹2,499',
  topics: [
    'Emails & documentation',
    'Excel & data work',
    'Presentations',
    'Research',
    'Content creation',
    'Meeting summaries',
    'Customer communication',
    'Daily task automation',
    'Productivity',
    'AI tools for your profession'
  ],
  outcome: 'Save time. Work smarter. Become AI-ready.',
  badge: 'Working Professionals'
};

export const COMBO_PROGRAMS: ComboProgram[] = [
  {
    id: 'combo-ai-spoken-english',
    title: 'AI + Spoken English',
    duration: '15 Days',
    fees: '₹3,999',
    features: [
      'AI Fundamentals & Basics',
      'Generative AI Hands-on',
      'Prompt Engineering Techniques',
      'Spoken English Fluency & Speaking Practice',
      'Confidence Building & Vocabulary',
      'Course Completion Certificate'
    ],
    highlightText: 'Ideal for students and job seekers wanting both tech and communication skills'
  },
  {
    id: 'combo-ai-career-skills',
    title: 'AI + Career Skills',
    duration: '15 Days',
    fees: '₹4,999',
    isPopular: true,
    features: [
      'Advanced AI Tools & Workflows',
      'Prompt Engineering Mastery',
      'AI-Powered Resume Optimization',
      'Mock Interview & Communication Prep',
      'Practical Hands-on Project & Demo',
      '1:1 Mentorship & Verified Certificate'
    ],
    highlightText: 'Our #1 choice for graduates preparing for high-paying corporate roles'
  },
  {
    id: 'combo-ai-project-assistance',
    title: 'AI + Project Assistance',
    duration: '10–15 Days',
    fees: '₹6,999 onwards',
    features: [
      'Foundational AI Training & Theory',
      'Tailored Academic Project Idea Selection',
      'Full Implementation Guidance',
      'Project Documentation & Report Preparation',
      'Final PPT & Viva Voce Coaching',
      'Live Execution Support & Certificate'
    ],
    highlightText: 'Best package for engineering and science students with upcoming final submissions'
  }
];

export const WHY_US_ITEMS = [
  'Practical & easy-to-understand training',
  'Real-world AI tools',
  'Hands-on activities',
  'Industry-oriented projects',
  'Personal guidance',
  'Student-focused learning',
  'Certificates',
  'Career & project mentoring'
];

export const COACH_PROFILE = {
  name: 'Rajeshwara Pandian',
  role: 'AI Literacy Coach | Career Coach | Business AI Trainer',
  bio: 'Helping students, professionals and businesses understand and apply AI in the real world.',
  experienceHighlights: [
    'Trained 2,500+ students and working professionals in practical AI tools',
    'Passionate mentor for college final-year engineering projects & presentations',
    'Specialist in actionable prompt engineering, workplace automation & career skills'
  ]
};

export const WHAT_WE_OFFER_ITEMS = [
  { title: 'AI & Generative AI Training', link: '/courses/college', icon: 'Brain', desc: 'Core models & modern generative AI concepts' },
  { title: 'AI Tools & Prompt Engineering', link: '/professionals', icon: 'Sparkles', desc: 'ChatGPT, Gemini, Claude & workflow shortcuts' },
  { title: 'AI Literacy for School Students', link: '/courses/school', icon: 'BookOpen', desc: 'Safe, engaging AI learning for school kids' },
  { title: 'AI Skills for College Students', link: '/courses/college', icon: 'GraduationCap', desc: 'Career-ready AI, resume assets & certifications' },
  { title: 'Final-Year AI Project Assistance', link: '/projects', icon: 'FolderGit2', desc: 'Idea to code, report, PPT and viva coaching' },
  { title: 'Spoken English', link: '/spoken-skills', icon: 'MessageSquare', desc: 'Everyday and workplace spoken fluency' },
  { title: 'Spoken Hindi', link: '/spoken-skills', icon: 'Languages', desc: 'Practical communication for daily & work settings' },
  { title: 'Career & Interview Skills', link: '/combos', icon: 'Briefcase', desc: 'Resume overhaul, mock interviews & presentation skills' },
  { title: 'Practical AI Projects', link: '/projects', icon: 'Code2', desc: 'Build functioning AI apps for your portfolio' },
  { title: 'Certificates & Mentorship', link: '/about', icon: 'Award', desc: 'Recognized certificates and 1-on-1 coach guidance' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Are the training sessions conducted offline, online, or hybrid?',
    answer: 'All our programs are offered in three flexible modes: Offline (classroom sessions), Online (live interactive video sessions), and Hybrid (blend of both). You can choose the format that best fits your schedule and location.'
  },
  {
    question: 'Do I need a coding or computer science background to learn AI here?',
    answer: 'No coding background is required for our foundation courses! Our curriculum is beginner-friendly and focused on practical AI literacy, prompt engineering, and real-world tools that anyone can use.'
  },
  {
    question: 'Will I receive a course completion certificate?',
    answer: 'Yes! Every student receives an official Easy AI Academia Course Completion Certificate upon finishing the course requirements and practical assignments.'
  },
  {
    question: 'How does the Final-Year Project Assistance program work?',
    answer: 'We provide end-to-end guidance tailored to your university guidelines: from selecting an approved problem statement and AI tech stack, through code implementation, to creating the complete report, PPT, and mock viva preparation.'
  },
  {
    question: 'How can I enroll or get a free counseling session?',
    answer: 'You can click "Enroll Now" on any course to fill out our quick enquiry form, or reach out directly to our coach on WhatsApp at +91 8828481500 for immediate answers and batch scheduling.'
  }
];

export const CONTACT_INFO = {
  phone: '9326278398',
  displayPhone: '+91 9326278398',
  callPhone: '9326278398',
  displayCallPhone: '+91 9326278398',
  alternatePhone: '8828481500',
  displayAlternatePhone: '+91 8828481500',
  whatsappNumber: '918828481500',
  whatsappUrl: 'https://wa.me/918828481500',
  email: 'easyaiadmin@gmail.com',
  modes: ['Offline', 'Online', 'Hybrid']
};

export const ALL_COURSES_SELECT = [
  'AI Basics for School Students (5 Days - ₹2,500)',
  'AI Study Partner for School (7 Days - ₹10,000)',
  'AI & Generative AI Foundation for College (7 Days - ₹2,999)',
  'AI Career & Project Mentor for College (10 Days - ₹7,999)',
  'AI Project Guidance Program (7-15 Days - ₹15,000 onwards)',
  'Spoken English (10 Days - ₹3,000)',
  'Spoken Hindi (10 Days - ₹2,500)',
  'AI Productivity Bootcamp for Professionals (5 Days - ₹2,499)',
  'Combo: AI + Spoken English (15 Days - ₹3,999)',
  'Combo: AI + Career Skills (15 Days - ₹4,999)',
  'Combo: AI + Project Assistance (10-15 Days - ₹6,999 onwards)'
];
