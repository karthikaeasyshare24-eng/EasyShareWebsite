import { CourseItem, ComboProgram, ProjectIndustry, FAQItem, CourseCategory } from '../types';

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
  name: 'Mr. Rajeshwara Pandian',
  role: 'AI Literacy Coach | Business Strategist | Entrepreneur',
  bio: 'Helping students, professionals and businesses understand and apply AI in the real world while building sustainable, high-growth technology and business enterprises.',
  experienceHighlights: [
    '14 Years of IT Management Experience at UCO Bank',
    'Approximately ₹20 Crore Annual Business Turnover',
    'Around 300 Employees led across diversified business ventures',
    'Founder of 3 Established Businesses: Easy Share Services, Easy Space Realty & EasyAI Academia'
  ],
  stats: [
    { label: 'IT Management Experience', value: '14 Years', context: 'At UCO Bank', highlight: 'Enterprise Banking' },
    { label: 'Annual Business Turnover', value: '₹20 Crore', context: 'Approximately', highlight: 'Group Scale' },
    { label: 'Employees & Workforce', value: '~300', context: 'Across ventures', highlight: 'Corporate Team' },
    { label: 'Founded Businesses', value: '3', context: 'Thriving enterprises', highlight: 'Leadership' }
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
    answer: 'Yes! Every student receives an official Mumbai Ai Academia Course Completion Certificate upon finishing the course requirements and practical assignments.'
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
  // School Students
  'School: AI Basics for School Students (5 Days - ₹2,500)',
  'School: AI Study Partner for School (7 Days - ₹10,000)',
  // College Students
  'College: AI & Generative AI Foundation (7 Days - ₹2,999)',
  'College: AI Career & Project Mentor (10 Days - ₹7,999)',
  // AI, Coding & GenAI
  'AI & Coding: Python & AI Foundations (30 Hours - ₹6,000)',
  'AI & Coding: GenAI-Assisted Coding & Developer Tools (30 Hours - ₹6,000)',
  'AI & Coding: Object-Oriented Programming (OOPs) in Python (30 Hours - ₹6,000)',
  'AI & Coding: NoSQL & MongoDB for AI Systems (30 Hours - ₹6,000)',
  'AI & Coding: Prompt Engineering Mastery (30 Hours - ₹6,000)',
  'AI & Coding: Generative AI & Agentic AI Foundations (36 Hours - ₹7,000)',
  'AI & Coding: Explainable AI (XAI) & Model Interpretability (30 Hours - ₹6,000)',
  'AI & Coding: Retrieval-Augmented Generation (RAG) & Vector DBs (36 Hours - ₹7,000)',
  'AI & Coding: LangChain & LlamaIndex for AI Applications (36 Hours - ₹7,000)',
  'AI & Coding: Fine-Tuning & Customizing Open-Source LLMs (40 Hours - ₹8,000)',
  // Cybersecurity & Ethical Hacking
  'Cybersecurity: Networking & Infrastructure Fundamentals (30 Hours - ₹6,000)',
  'Cybersecurity: Linux Mastery & Command Line for Hackers (30 Hours - ₹6,000)',
  'Cybersecurity: Python Scripting for Cybersecurity (30 Hours - ₹6,000)',
  'Cybersecurity: Ethical Hacking & Reconnaissance CEH (36 Hours - ₹7,000)',
  'Cybersecurity: Web App Penetration Testing OWASP (36 Hours - ₹7,000)',
  'Cybersecurity: Network Security, Traffic Analysis & Wireshark (30 Hours - ₹6,000)',
  'Cybersecurity: Vulnerability Assessment & Pentesting VAPT (36 Hours - ₹7,000)',
  'Cybersecurity: SOC Operations, SIEM & Incident Response (36 Hours - ₹7,000)',
  'Cybersecurity: Cloud Security & DevSecOps Fundamentals (30 Hours - ₹6,000)',
  // Data Science, ML & NLP
  'Data Science: Python for Data Science (NumPy, Pandas) (30 Hours - ₹6,000)',
  'Data Science: Advanced SQL & Database Analytics (30 Hours - ₹6,000)',
  'Data Science: Power BI & Data Storytelling (30 Hours - ₹6,000)',
  'Data Science: Mathematics & Statistics for Data Science (30 Hours - ₹6,000)',
  'Data Science: Machine Learning Algorithms & Scikit-Learn (36 Hours - ₹7,000)',
  'Data Science: Deep Learning & Neural Networks PyTorch (36 Hours - ₹7,000)',
  'Data Science: Natural Language Processing NLP & Transformers (36 Hours - ₹7,000)',
  'Data Science: Computer Vision & OpenCV (36 Hours - ₹7,000)',
  'Data Science: Big Data Analytics with Apache Spark (36 Hours - ₹7,000)',
  'Data Science: Predictive Analytics Capstone (36 Hours - ₹8,000)',
  'Data Science: Cloud & AWS Foundations for Data & AI (36 Hours - ₹7,000)',
  // More Pathways to Success
  'Pathways: Investment Banking & Financial Markets',
  'Pathways: Share Market & Modern Banking Operations',
  'Pathways: Taxation & Business Commerce',
  'Pathways: Marketing & Business Development',
  'Pathways: Career Guidance & Placement Acceleration',
  'Pathways: Professional Communication & Soft Skills',
  // Business Management
  'Business: Business Management Essentials (40 Hours - ₹8,000)',
  'Business: Digital Marketing & Analytics (35 Hours - ₹7,000)',
  'Business: Entrepreneurship & Startup Strategy (36 Hours - ₹7,500)',
  // Design & Creative Technology
  'Design: UI/UX Design with Figma (36 Hours - ₹7,500)',
  'Design: Motion Graphics & Video Editing (32 Hours - ₹6,500)',
  'Design: 3D Modeling & Generative Creative Tools (30 Hours - ₹7,000)',
  // Engineering & Robotics
  'Robotics: Robotics with Arduino & Sensors (45 Hours - ₹9,000)',
  'Robotics: IoT & CAD for Engineers (40 Hours - ₹8,500)',
  'Robotics: Drone Technology & Embedded Flight Control (36 Hours - ₹8,000)',
  // Working Professionals
  'Professionals: AI Productivity Bootcamp (5 Days - ₹2,499)',
  // Spoken Skills
  'Spoken Skills: Spoken English Mastery (10 Days - ₹3,000)',
  'Spoken Skills: Spoken Hindi Fluency (10 Days - ₹2,500)',
  // Project Assistance & Combos
  'Projects: Final-Year AI Project Assistance (7-15 Days - ₹15,000 onwards)',
  'Combo: AI + Spoken English (15 Days - ₹3,999)',
  'Combo: AI + Career Skills (15 Days - ₹4,999)',
  'Combo: AI + Project Assistance (10-15 Days - ₹6,999 onwards)'
];

export const AI_CODING_GENAI_COURSES: CourseItem[] = [
  {
    id: 'ai-python-foundations',
    title: 'Python & AI Foundations',
    subtitle: 'Core programming fundamentals, data structures, and algorithmic thinking for modern AI',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Python syntax, variables & data types',
      'Control flow, loops & conditional logic',
      'Functions, modules & package management',
      'Data structures: Lists, Tuples, Sets, Dicts',
      'File handling & basic data ingestion',
      'Introduction to AI problem solving'
    ],
    outcome: 'Write clean, structured Python code ready for AI and modern software development.',
    badge: 'Core Foundation'
  },
  {
    id: 'genai-coding-tools',
    title: 'GenAI-Assisted Coding & Developer Tools',
    subtitle: 'Supercharge development productivity using Cursor, GitHub Copilot, and LLM coding assistants',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Setting up Copilot, Cursor & modern AI IDEs',
      'Context management & system instructions',
      'AI-powered code generation & refactoring',
      'Test generation & automated bug hunting',
      'Codebase comprehension with AI chat',
      'Ethical & secure AI coding best practices'
    ],
    outcome: 'Code 3x faster with AI copilots while maintaining high code quality and security standards.',
    badge: 'High Productivity'
  },
  {
    id: 'oop-python',
    title: 'Object-Oriented Programming (OOP) in Python',
    subtitle: 'Master enterprise software design principles, abstraction, modularity, and design patterns',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Classes, objects, constructors & attributes',
      'Encapsulation, public/private modifiers',
      'Inheritance & method overriding',
      'Polymorphism & duck typing in Python',
      'Dunder (magic) methods & operator overloading',
      'Design patterns for AI application pipelines'
    ],
    outcome: 'Architect modular, reusable, enterprise-grade Python software systems.',
    badge: 'Essential'
  },
  {
    id: 'nosql-mongodb',
    title: 'NoSQL & MongoDB for AI Systems',
    subtitle: 'Document database architecture, indexing, aggregation, and unstructured data storage',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Relational vs NoSQL database paradigms',
      'MongoDB architecture, documents & collections',
      'CRUD operations & schema design for AI logs',
      'Aggregation framework & pipeline analytics',
      'Indexing, querying & performance optimization',
      'Integrating MongoDB with Python and AI backends'
    ],
    outcome: 'Store, query, and manage large-scale unstructured datasets and AI conversational memory.',
    badge: 'Database Focus'
  },
  {
    id: 'prompt-engineering-mastery',
    title: 'Prompt Engineering Mastery',
    subtitle: 'Advanced techniques for eliciting high-precision outputs from frontier LLMs',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'System prompts, personas & instruction hierarchy',
      'Zero-shot, Few-shot & Chain-of-Thought (CoT)',
      'Directional stimulus & Tree-of-Thought prompting',
      'Constrained generation, JSON mode & schemas',
      'Prompt vulnerability defense & jailbreak prevention',
      'Automated prompt evaluation & benchmarking'
    ],
    outcome: 'Elicit reliable, deterministic, structured outputs from state-of-the-art LLMs.',
    badge: 'Must Have'
  },
  {
    id: 'genai-agentic-foundations',
    title: 'Generative AI & Agentic AI Foundations',
    subtitle: 'Core principles of modern transformers, LLM reasoning loops, and autonomous agents',
    category: 'ai-coding',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Transformer architecture & attention mechanism',
      'Tokens, temperature, top-p & sampling parameters',
      'Reasoning patterns: ReAct, Plan-and-Solve',
      'Function calling & tool invocation mechanisms',
      'Memory systems: short-term vs long-term',
      'Building your first autonomous task agent'
    ],
    outcome: 'Understand the architecture of LLMs and build autonomous agents capable of multi-step execution.',
    badge: 'Cutting Edge'
  },
  {
    id: 'xai-interpretability',
    title: 'Explainable AI (XAI) & Model Interpretability',
    subtitle: 'Techniques to explain, audit, and interpret black-box AI models for compliance and trust',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'The black-box problem in modern AI',
      'Feature importance & permutation techniques',
      'SHAP (SHapley Additive exPlanations) values',
      'LIME (Local Interpretable Model-agnostic Explanations)',
      'Model bias detection, fairness & regulatory standards',
      'Building human-in-the-loop explainability dashboards'
    ],
    outcome: 'Make AI models interpretable, auditable, and compliant with enterprise governance standards.',
    badge: 'Governance'
  },
  {
    id: 'embeddings-vector-dbs',
    title: 'Embeddings & Vector Databases',
    subtitle: 'Semantic search, high-dimensional vector representations, and indexing at scale',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Mathematical foundations of high-dimensional vectors',
      'Embedding models: OpenAI, Cohere, HuggingFace',
      'Cosine similarity, Euclidean distance & dot products',
      'Vector indexing algorithms: HNSW, IVF-Flat',
      'Hands-on with Pinecone, ChromaDB & FAISS',
      'Metadata filtering & hybrid semantic search'
    ],
    outcome: 'Implement lightning-fast semantic search and knowledge retrieval for AI applications.',
    badge: 'Core AI Stack'
  },
  {
    id: 'rag-architecture',
    title: 'Retrieval-Augmented Generation (RAG)',
    subtitle: 'Connect LLMs to private enterprise data pipelines with advanced retrieval systems',
    category: 'ai-coding',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Naive RAG vs Advanced RAG architectures',
      'Document chunking strategies & recursive splitters',
      'Context reranking with cross-encoders',
      'Query expansion, HyDE & multi-query retrieval',
      'RAG evaluation frameworks (Ragas, TruLens)',
      'End-to-end production RAG deployment'
    ],
    outcome: 'Build production-ready RAG systems that query enterprise documents with zero hallucination.',
    badge: 'Most Popular'
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent AI Systems',
    subtitle: 'Collaborative agent swarms, role-playing agent teams, and workflow orchestration',
    category: 'ai-coding',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Multi-agent architectures & delegation patterns',
      'CrewAI framework: Agents, Tasks & Crews',
      'LangGraph: State graphs, cycles & persistence',
      'AutoGen & collaborative conversation patterns',
      'Human-in-the-loop approvals & error recovery',
      'Building an end-to-end multi-agent enterprise team'
    ],
    outcome: 'Build autonomous multi-agent teams that collaborate to solve complex enterprise tasks.',
    badge: 'Next Gen'
  },
  {
    id: 'multimodal-genai',
    title: 'Multimodal Generative AI',
    subtitle: 'Harness vision, audio, speech, and video models to build next-generation experiences',
    category: 'ai-coding',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Vision-language models: GPT-4o, Gemini 2.5 Flash',
      'Image understanding, OCR & visual document analysis',
      'Audio transcription with Whisper & speech synthesis',
      'Image & asset generation pipelines',
      'Real-time streaming multimodal interactions',
      'Building a voice-enabled multimodal AI assistant'
    ],
    outcome: 'Create applications that see, hear, speak, and synthesize rich multimedia content.',
    badge: 'Creative AI'
  },
  {
    id: 'llm-deployment-mlops',
    title: 'LLM Deployment, Fine-Tuning & MLOps',
    subtitle: 'Serve, optimize, fine-tune with LoRA, and monitor production AI models reliably',
    category: 'ai-coding',
    duration: '36 Hours',
    fees: '₹8,000',
    topics: [
      'Quantization techniques: GGUF, AWQ, bitsandbytes',
      'Local inference with Ollama & vLLM',
      'PEFT & LoRA parameter-efficient fine-tuning',
      'Model evaluation, safety guardrails & latency tuning',
      'LLM observability & monitoring (LangSmith, Phoenix)',
      'Deploying LLM APIs with Docker & cloud endpoints'
    ],
    outcome: 'Deploy, fine-tune, monitor, and scale production LLM backends with high throughput.',
    badge: 'Production Ready'
  }
];

export const CYBERSECURITY_COURSES: CourseItem[] = [
  {
    id: 'data-security-governance',
    title: 'Data Security & Governance',
    subtitle: 'Enterprise data protection frameworks, encryption standards, and compliance regulations',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'Data classification & lifecycle management',
      'Encryption in transit and at rest (AES, RSA, TLS)',
      'Data loss prevention (DLP) strategies',
      'Privacy compliance: GDPR, DPDP, ISO 27001',
      'Data masking, tokenization & anonymization',
      'Enterprise security auditing & risk assessments'
    ],
    outcome: 'Establish secure data governance policies and safeguard confidential organizational assets.',
    badge: 'Compliance'
  },
  {
    id: 'cybersecurity-ai-fundamentals',
    title: 'Cybersecurity & AI Fundamentals',
    subtitle: 'Core security principles combined with AI-driven threat modeling and modern defense',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'CIA triad, defense-in-depth & threat landscape',
      'Adversarial attacks on AI & prompt injection threats',
      'AI-powered anomaly detection & behavioral analytics',
      'Identity & access management (IAM) and zero-trust',
      'Securing API endpoints and microservices',
      'Security architectures for AI-integrated systems'
    ],
    outcome: 'Protect modern hybrid and AI-enabled infrastructure against emerging digital threats.',
    badge: 'Foundational'
  },
  {
    id: 'network-infra-linux-security',
    title: 'Network Infrastructure & Linux Security',
    subtitle: 'Hardening Linux servers, configuring firewalls, and securing core network protocols',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'TCP/IP suite, DNS, routing & subnetting fundamentals',
      'Linux system administration & file permissions',
      'Hardening Linux kernels, SSH & system daemons',
      'Firewall configuration (iptables, UFW, pfSense)',
      'Network packet analysis with Wireshark & tcpdump',
      'VPN architectures and secure tunnel configuration'
    ],
    outcome: 'Configure, audit, and harden resilient Linux operating systems and enterprise network topologies.',
    badge: 'Infrastructure'
  },
  {
    id: 'python-cybersecurity-automation',
    title: 'Python for Cybersecurity & Automation',
    subtitle: 'Build custom security tools, port scanners, automated audit scripts, and exploit payloads',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'Python socket programming & banner grabbing',
      'Automated network scanning with Scapy & Nmap bindings',
      'Web scraping & automated credential audit tools',
      'Log parsing, regex filtering & alerting scripts',
      'Brute force and authentication testing scripts',
      'Integrating security tools with automation pipelines'
    ],
    outcome: 'Develop custom Python scripts and automation frameworks to test and defend networks.',
    badge: 'Hands-on Tooling'
  },
  {
    id: 'ethical-hacking-recon',
    title: 'Ethical Hacking & Reconnaissance',
    subtitle: 'Offensive security methodologies, open-source intelligence (OSINT), and vulnerability discovery',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'Ethical hacking ethics, laws & rules of engagement',
      'OSINT gathering, DNS enumeration & Shodan queries',
      'Active & passive scanning techniques with Nmap',
      'Vulnerability scanning with Nessus & OpenVAS',
      'Exploitation frameworks: Metasploit fundamentals',
      'Post-exploitation, privilege escalation & reporting'
    ],
    outcome: 'Conduct comprehensive security audits and penetration tests using industry standard tools.',
    badge: 'Offensive Security'
  },
  {
    id: 'webapp-security-vapt',
    title: 'Web Application Security & VAPT',
    subtitle: 'OWASP Top 10 vulnerabilities, web exploitation techniques, and application remediation',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'OWASP Top 10 vulnerabilities deep dive',
      'SQL injection, XSS, CSRF & SSRF exploits',
      'Broken authentication and authorization flaws',
      'Hands-on web proxy auditing with Burp Suite',
      'API security testing and JWT exploitation',
      'VAPT reporting, remediation guidance & verification'
    ],
    outcome: 'Identify, exploit, and remediate critical vulnerabilities in modern web applications and APIs.',
    badge: 'Industry Essential'
  },
  {
    id: 'soc-monitoring-incident-response',
    title: 'SOC Monitoring & Incident Response',
    subtitle: 'Security operations center workflows, SIEM analytics, threat triage, and incident containment',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'SOC roles, tiering & operational workflows',
      'SIEM deployment, log ingestion & rule tuning (Splunk/ELK)',
      'MITRE ATT&CK framework mapping & threat intel',
      'Alert triage, false positive reduction & incident playbooks',
      'Containment, eradication & recovery strategies',
      'Post-incident reporting & root cause analysis'
    ],
    outcome: 'Operate inside a SOC environment, analyze security incidents, and execute structured incident responses.',
    badge: 'SOC Analyst'
  },
  {
    id: 'digital-forensics-threat-hunting',
    title: 'Digital Forensics & Threat Hunting',
    subtitle: 'Evidence preservation, memory analysis, disk forensics, and proactive adversary hunting',
    category: 'cybersecurity',
    duration: '36 Hours',
    fees: '₹7,000 per student',
    topics: [
      'Chain of custody & forensic imaging principles',
      'Windows & Linux artifact analysis (Registry, Event Logs)',
      'Memory forensics with Volatility framework',
      'Network forensics & PCAP traffic reconstruction',
      'Proactive threat hunting methodologies (YARA rules)',
      'Compiling expert forensic investigation reports'
    ],
    outcome: 'Collect tamper-proof forensic evidence, dissect breach artifacts, and track advanced threats.',
    badge: 'Advanced Defense'
  }
];

export const DATA_SCIENCE_ML_COURSES: CourseItem[] = [
  {
    id: 'machine-learning-algorithms',
    title: 'Machine Learning Algorithms & Foundations',
    subtitle: 'Supervised, unsupervised, and reinforcement learning algorithms with Scikit-Learn',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Regression models: Linear, Polynomial, Ridge, Lasso',
      'Classification: Logistic regression, Decision Trees, SVM',
      'Ensemble techniques: Random Forest, XGBoost, LightGBM',
      'Clustering algorithms: K-Means, DBSCAN, Hierarchical',
      'Dimensionality reduction with PCA & t-SNE',
      'Hyperparameter tuning (GridSearchCV) & model validation'
    ],
    outcome: 'Train, evaluate, and tune production predictive models using industry-standard ML algorithms.',
    badge: 'Core ML'
  },
  {
    id: 'neural-networks-deep-learning',
    title: 'Neural Networks & Deep Learning Architectures',
    subtitle: 'Foundations of artificial neural networks, backpropagation, and PyTorch / TensorFlow',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Perceptrons, multi-layer perceptrons (MLP) & activation functions',
      'Gradient descent, backpropagation & loss functions',
      'Optimizers: Adam, RMSprop, SGD with momentum',
      'Overfitting prevention: Dropout, Batch Normalization, Regularization',
      'Building deep neural networks in PyTorch',
      'Model checkpoints, learning rate schedules & validation'
    ],
    outcome: 'Construct and train deep neural networks from scratch using modern deep learning frameworks.',
    badge: 'Deep Learning'
  },
  {
    id: 'deep-learning-cnns-rnns',
    title: 'Deep Learning with CNNs & RNNs',
    subtitle: 'Specialized architectures for spatial image recognition and temporal sequence modeling',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Convolutional layers, pooling & feature maps',
      'Standard architectures: ResNet, VGG, MobileNet',
      'Transfer learning and fine-tuning pretrained vision models',
      'Recurrent Neural Networks (RNN) and vanishing gradients',
      'LSTM & GRU networks for sequence data',
      'Time-series forecasting with sequential architectures'
    ],
    outcome: 'Build cutting-edge computer vision classifiers and sequential prediction models.',
    badge: 'Specialized'
  },
  {
    id: 'nlp-text-analytics',
    title: 'Natural Language Processing (NLP) & Text Analytics',
    subtitle: 'Text preprocessing, semantic embeddings, sentiment classification, and topic modeling',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Tokenization, lemmatization, stop words & regex',
      'TF-IDF, Bag-of-Words & N-gram language models',
      'Word embeddings: Word2Vec, GloVe & FastText',
      'Sentiment analysis, intent detection & text categorization',
      'Named Entity Recognition (NER) with spaCy',
      'Topic modeling with LDA and transformer tokenizers'
    ],
    outcome: 'Extract actionable insights, sentiment, and structured intelligence from unstructured text.',
    badge: 'NLP Focus'
  },
  {
    id: 'computer-vision-image-processing',
    title: 'Computer Vision & Image Processing',
    subtitle: 'Visual data manipulation, object detection, segmentation, and OpenCV pipelines',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'OpenCV fundamentals: filters, color spaces, transformations',
      'Edge detection, contours & thresholding',
      'Real-time object detection with YOLO',
      'Image segmentation and bounding box regression',
      'Facial recognition, landmark detection & pose estimation',
      'Video stream processing and real-time inference'
    ],
    outcome: 'Develop real-time computer vision applications for security, automation, and inspection.',
    badge: 'Visual AI'
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science & Numerical Computing',
    subtitle: 'High-performance computing with NumPy, data wrangling with Pandas, and EDA visualization',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹6,000',
    topics: [
      'NumPy arrays, broadcasting, vectorization & linear algebra',
      'Pandas DataFrames, series, indexing & filtering',
      'Handling missing data, outliers & duplicates',
      'Data grouping, pivot tables & merging datasets',
      'Exploratory Data Analysis (EDA) methodologies',
      'Data visualization with Matplotlib and Seaborn'
    ],
    outcome: 'Wrangle, clean, and visualize messy real-world datasets with speed and precision.',
    badge: 'Essential'
  },
  {
    id: 'data-analysis-excel',
    title: 'Data Analysis with Advanced Excel',
    subtitle: 'Formulas, dynamic arrays, Power Query, pivot reporting, and dashboard creation',
    category: 'data-science',
    duration: '30 Hours',
    fees: '₹5,000',
    topics: [
      'Advanced functions: XLOOKUP, INDEX/MATCH, SUMIFS',
      'Dynamic array formulas (FILTER, UNIQUE, SORT)',
      'Power Query: ETL data cleaning and transformation',
      'Advanced Pivot Tables, Slicers & Timelines',
      'Financial and statistical modeling in spreadsheets',
      'Building interactive executive KPI dashboards'
    ],
    outcome: 'Automate business reporting and generate executive insights with modern Excel analytics.',
    badge: 'Business Analytics'
  },
  {
    id: 'sql-data-science',
    title: 'SQL for Data Science & Relational Databases',
    subtitle: 'Complex queries, window functions, CTEs, schema optimization, and analytics',
    category: 'data-science',
    duration: '30 Hours',
    fees: '₹5,000',
    topics: [
      'Relational database design and normalization',
      'Complex multi-table JOINs and set operations',
      'Aggregations, GROUP BY and HAVING clauses',
      'Window functions (ROW_NUMBER, RANK, LEAD, LAG)',
      'Common Table Expressions (CTEs) & subqueries',
      'Query indexing, performance tuning and profiling'
    ],
    outcome: 'Query, aggregate, and manipulate enterprise databases with high-performance SQL.',
    badge: 'Database Core'
  },
  {
    id: 'power-bi-business-intelligence',
    title: 'Power BI & Business Intelligence Dashboards',
    subtitle: 'Data modeling, DAX measures, interactive visuals, and enterprise report publishing',
    category: 'data-science',
    duration: '30 Hours',
    fees: '₹6,000',
    topics: [
      'Connecting to diverse data sources & Power Query ETL',
      'Star schema & snowflake data modeling best practices',
      'DAX basics: CALCULATE, RELATED, time intelligence',
      'Interactive visual storytelling and custom charts',
      'Row-level security (RLS) & workspace management',
      'Publishing and scheduling automated cloud refreshes'
    ],
    outcome: 'Create stunning, automated business intelligence dashboards that drive data-informed decisions.',
    badge: 'Visual BI'
  },
  {
    id: 'data-science-predictive-analytics',
    title: 'Data Science & Predictive Analytics Capstone',
    subtitle: 'End-to-end data pipeline from raw data to statistical modeling and business forecasting',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹8,000',
    topics: [
      'Hypothesis testing, A/B testing & statistical significance',
      'Feature engineering & selection strategies',
      'Churn prediction & customer lifetime value (CLV) modeling',
      'Time series forecasting (ARIMA, Prophet)',
      'Model interpretability and business ROI quantification',
      'End-to-end project presentation and portfolio delivery'
    ],
    outcome: 'Solve real enterprise predictive challenges from raw data ingestion to business impact.',
    badge: 'Capstone'
  },
  {
    id: 'cloud-aws-foundations-data-ai',
    title: 'Cloud & AWS Foundations for Data & AI',
    subtitle: 'AWS cloud storage, compute instances, IAM security, and managed AI/data services',
    category: 'data-science',
    duration: '36 Hours',
    fees: '₹7,000',
    topics: [
      'Cloud computing models: IaaS, PaaS, SaaS',
      'AWS core services: S3, EC2, RDS & IAM policies',
      'AWS Lambda & serverless event-driven architectures',
      'Data warehousing with Amazon Redshift & Athena',
      'Introduction to Amazon SageMaker and Bedrock',
      'Cloud security, cost optimization & best practices'
    ],
    outcome: 'Architect, host, and operate scalable data and AI pipelines in the AWS cloud ecosystem.',
    badge: 'Cloud Ready'
  }
];

export const MORE_PATHWAYS_TRACKS: CourseItem[] = [
  {
    id: 'pathway-investment-banking',
    title: 'A. Investment Banking & Financial Markets',
    subtitle: 'Comprehensive financial mechanics, capital markets, valuation models, and institutional trading',
    category: 'pathways',
    topics: [
      'Global capital markets, debt and equity instruments',
      'Financial statement analysis and accounting standards',
      'Discounted Cash Flow (DCF) and comparative valuation',
      'Mergers and Acquisitions (M&A) deal mechanics',
      'LBO modeling and private equity investment criteria',
      'Financial pitch books and transaction structuring'
    ],
    outcome: 'Understand the end-to-end mechanisms of investment banking, corporate finance, and capital valuation.',
    badge: 'High Finance'
  },
  {
    id: 'pathway-share-market-banking',
    title: 'B. Share Market & Modern Banking Operations',
    subtitle: 'Stock market fundamentals, technical & fundamental analysis, and banking operations',
    category: 'pathways',
    topics: [
      'Stock exchange structure, order types and settlement',
      'Fundamental analysis: P/E, EPS, balance sheet metrics',
      'Technical analysis: Candlestick patterns, RSI, MACD',
      'Risk management, position sizing & stop loss strategies',
      'Retail and commercial banking products and credit',
      'Digital banking, payment gateways and fintech rails'
    ],
    outcome: 'Develop disciplined trading analysis, market acumen, and modern banking operational knowledge.',
    badge: 'Markets'
  },
  {
    id: 'pathway-taxation-commerce',
    title: 'C. Taxation & Business Commerce',
    subtitle: 'Direct and indirect taxation, corporate compliance, GST filing, and financial accounting',
    category: 'pathways',
    topics: [
      'Principles of direct taxation and income tax computation',
      'GST framework: CGST, SGST, IGST and input tax credits',
      'GST returns filing (GSTR-1, GSTR-3B) and reconciliation',
      'Corporate tax planning and statutory compliance',
      'Payroll accounting, TDS compliance and PF/ESIC laws',
      'Auditing procedures and financial reporting standards'
    ],
    outcome: 'Master practical corporate taxation, regulatory compliance, and commercial accounting workflows.',
    badge: 'Commerce'
  },
  {
    id: 'pathway-marketing-business',
    title: 'D. Marketing & Business Development',
    subtitle: 'Go-to-market strategies, B2B sales pipelines, digital acquisition, and client retention',
    category: 'pathways',
    topics: [
      'Market research, buyer personas and value proposition',
      'Inbound and outbound marketing channel architecture',
      'Performance marketing, search and social acquisition',
      'B2B sales funnels, lead qualification and CRM mastery',
      'Customer lifetime value (CLV) and churn reduction',
      'Strategic partnership development and deal closing'
    ],
    outcome: 'Drive sustainable revenue growth through structured marketing pipelines and business development.',
    badge: 'Growth'
  },
  {
    id: 'pathway-career-guidance',
    title: 'E. Career Guidance & Placement Acceleration',
    subtitle: 'Strategic resume positioning, technical interview preparation, and career trajectory mapping',
    category: 'pathways',
    topics: [
      'High-impact resume engineering and ATS optimization',
      'LinkedIn profile branding and networking strategies',
      'Behavioral interview frameworks (STAR methodology)',
      'Technical interview problem solving and case studies',
      'Salary negotiation tactics and compensation analysis',
      'Long-term career roadmap and continuous upskilling'
    ],
    outcome: 'Position yourself ahead of the competition and accelerate placement across top industry opportunities.',
    badge: 'Career Success'
  },
  {
    id: 'pathway-professional-communication',
    title: 'F. Professional Communication & Soft Skills',
    subtitle: 'Executive presence, cross-cultural workplace communication, persuasion, and leadership',
    category: 'pathways',
    topics: [
      'Structured business writing (emails, proposals, memos)',
      'High-stakes presentation design and public speaking',
      'Active listening, conflict resolution and empathy',
      'Executive presence and body language mastery',
      'Leading meetings and collaborative problem solving',
      'Cross-functional communication in global organizations'
    ],
    outcome: 'Communicate with executive confidence, clarity, and authority across all professional arenas.',
    badge: 'Leadership'
  }
];

export const BUSINESS_MANAGEMENT_COURSES: CourseItem[] = [
  {
    id: 'biz-mgmt-essentials',
    title: 'Business Management Essentials',
    subtitle: 'Master operational frameworks, strategic decision-making, and financial leadership for modern enterprises',
    category: 'business-management',
    duration: '40 Hours',
    fees: '₹8,000',
    topics: [
      'Strategic Planning & Business Model Innovation',
      'Financial Fundamentals: Budgeting, P&L & Cash Flow',
      'People Leadership & Cross-Functional Team Dynamics',
      'Operations Management & Process Optimization',
      'Risk Assessment, Agile Project Delivery & KPI Governance'
    ],
    outcome: 'Lead business initiatives with commercial clarity, manage budgets with precision, and scale organizational productivity.',
    badge: 'High Impact'
  },
  {
    id: 'digital-mktg-analytics',
    title: 'Digital Marketing & Analytics',
    subtitle: 'Architect high-converting acquisition funnels, scale performance campaigns, and analyze customer lifetime value',
    category: 'business-management',
    duration: '35 Hours',
    fees: '₹7,000',
    topics: [
      'Full-Funnel Omnichannel Marketing Architecture',
      'Search Engine Optimization (SEO) & High-Intent Content',
      'Performance Marketing: Meta & Google Ads Mastery',
      'Google Analytics 4 (GA4), Attribution & Conversion Auditing',
      'Marketing Automation, Email Sequences & CRM Retention'
    ],
    outcome: 'Plan, execute, and scale multi-channel acquisition campaigns backed by rigorous data tracking and quantifiable ROI.',
    badge: 'Growth & ROI'
  },
  {
    id: 'startup-entrepreneurship',
    title: 'Entrepreneurship & Startup Strategy',
    subtitle: 'From concept to market launch: product validation, MVP development, unit economics, and fundraising',
    category: 'business-management',
    duration: '36 Hours',
    fees: '₹7,500',
    topics: [
      'Market Validation, Customer Discovery & Problem-Solution Fit',
      'Lean Canvas Modeling & Product-Market Fit Testing',
      'Unit Economics, Pricing Strategies & Cash Runway Planning',
      'Investor Deck Engineering & Venture Capital Deal Mechanics'
    ],
    outcome: 'Build and validate scalable business models, structure investor pitch decks, and execute early go-to-market strategies.',
    badge: 'Startup Scale'
  }
];

export const DESIGN_CREATIVE_COURSES: CourseItem[] = [
  {
    id: 'uiux-figma',
    title: 'UI/UX Design with Figma',
    subtitle: 'Design user-centric web and mobile interfaces with modern design systems, auto layout, and responsive prototyping',
    category: 'design-creative',
    duration: '36 Hours',
    fees: '₹7,500',
    topics: [
      'User Research, Information Architecture & User Journeys',
      'Wireframing & Low-Fidelity Layouts in Figma',
      'Design Systems: Auto Layout, Tokens, Variants & Components',
      'High-Fidelity Interactive Prototyping & Micro-Interactions',
      'Usability Testing, Developer Hand-off & Portfolio Presentation'
    ],
    outcome: 'Build production-ready Figma design systems and interactive prototypes for web and mobile products.',
    badge: 'Industry Standard'
  },
  {
    id: 'motion-graphics-video',
    title: 'Motion Graphics & Video Editing',
    subtitle: 'Craft captivating video stories, kinetic typography, visual effects, and professional social media content',
    category: 'design-creative',
    duration: '32 Hours',
    fees: '₹6,500',
    topics: [
      'Video Editing Fundamentals: Timeline, Cuts & Pace',
      'Kinetic Typography & Motion Design in Premiere & After Effects',
      'Color Grading, Audio Sync & Dynamic Sound Design',
      'AI-Powered Video Enhancers & Automated Subtitling',
      'High-Converting Social Reels & Commercial Formats'
    ],
    outcome: 'Produce commercial-grade video edits, animated social campaigns, and engaging motion assets.',
    badge: 'High Engagement'
  },
  {
    id: 'blender-generative-3d',
    title: '3D Modeling & Generative Creative Tools',
    subtitle: 'Build 3D models in Blender and integrate modern AI image and texture generation tools into creative pipelines',
    category: 'design-creative',
    duration: '30 Hours',
    fees: '₹7,000',
    topics: [
      'Blender Interface, Mesh Modeling & Modifiers',
      'Materials, Shaders, Lighting & Photorealistic Rendering',
      'Generative AI for Conceptualization (Midjourney, Stable Diffusion)',
      'AI Texturing, Style Transfers & Image-to-3D Workflows',
      'Exporting 3D Assets for Web, AR & Interactive Environments'
    ],
    outcome: 'Model 3D assets in Blender and accelerate visual production using modern generative creative AI pipelines.',
    badge: 'Creative Frontier'
  }
];

export const ENGINEERING_ROBOTICS_COURSES: CourseItem[] = [
  {
    id: 'arduino-robotics',
    title: 'Robotics with Arduino & Sensors',
    subtitle: 'Hands-on embedded systems: program microcontrollers, interface hardware sensors, and build autonomous robotics',
    category: 'engineering-robotics',
    duration: '45 Hours',
    fees: '₹9,000',
    topics: [
      'Microcontroller Architecture & Embedded C/C++ Programming',
      'Sensor Interfacing: Ultrasonic, IR, Temperature & Accelerometers',
      'Actuator & Motor Control: DC Motors, Servos & Steppers with H-Bridges',
      'Autonomous Navigation: Line Following & Obstacle Avoidance',
      'Wireless Connectivity: Bluetooth & RF Remote Control'
    ],
    outcome: 'Design, wire, and program autonomous robotic platforms from ground up using real microcontrollers and sensors.',
    badge: 'Hands-on Lab'
  },
  {
    id: 'iot-cad-engineering',
    title: 'IoT & CAD for Engineers',
    subtitle: 'Design 3D mechanical enclosures in CAD and connect smart devices to cloud dashboards via IoT protocols',
    category: 'engineering-robotics',
    duration: '40 Hours',
    fees: '₹8,500',
    topics: [
      '3D Mechanical Design in Autodesk Fusion 360 & CAD Modeling',
      '3D Printing Constraints & Enclosure Prototyping',
      'ESP32 / ESP8266 Microcontrollers & Cloud IoT Architecture',
      'MQTT Protocol, HTTP REST APIs & Sensor Telemetry',
      'Live Cloud Dashboards & Remote Device Monitoring'
    ],
    outcome: 'Create precision 3D CAD models and deploy cloud-connected IoT devices with live sensor dashboards.',
    badge: 'Engineering & IoT'
  },
  {
    id: 'drone-embedded-flight',
    title: 'Drone Technology & Embedded Flight Control',
    subtitle: 'Understand quadcopter aerodynamics, configure flight controllers, calibrate sensors, and assemble multirotor UAVs',
    category: 'engineering-robotics',
    duration: '36 Hours',
    fees: '₹8,000',
    topics: [
      'Quadcopter Aerodynamics & Multirotor Physics',
      'Flight Controller Architecture, Gyroscopes & Accelerometers',
      'Electronic Speed Controllers (ESCs), Brushless Motors & Propeller Matching',
      'Firmware Configuration (Betaflight / ArduPilot)',
      'Telemetry, Failsafe Mechanisms & Flight Safety Regulations'
    ],
    outcome: 'Assemble, calibrate, and safely pilot multirotor UAVs while understanding embedded flight control logic.',
    badge: 'Autonomous Tech'
  }
];

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'school',
    name: 'School Students',
    shortName: 'School',
    path: '/courses/school',
    iconName: 'BookOpen',
    badge: 'Class 5th–12th',
    description: 'Build safe, practical AI literacy, prompt engineering, homework workflows, and 24/7 personal study partner capabilities.',
    targetAudience: 'Grades 5th to 12th school students',
    courses: SCHOOL_COURSES
  },
  {
    id: 'college',
    name: 'College Students',
    shortName: 'College',
    path: '/courses/college',
    iconName: 'GraduationCap',
    badge: 'Degree & Engg',
    description: 'Essential GenAI foundations, modern prompt engineering, AI + Excel & Power BI, and placement-ready portfolio building.',
    targetAudience: 'Undergraduate and postgraduate students (Engineering, BCA, MCA, B.Sc, Commerce)',
    courses: COLLEGE_COURSES
  },
  {
    id: 'ai-coding',
    name: 'AI, Coding & GenAI',
    shortName: 'AI & Coding',
    path: '/courses/ai-coding',
    iconName: 'Code2',
    badge: 'Developer Track',
    description: 'Python foundations, OOPs, MongoDB, prompt engineering, agentic AI, RAG, vector databases, LangChain, and open-source LLM fine-tuning.',
    targetAudience: 'Aspiring AI developers, software engineers, and programmers',
    courses: AI_CODING_GENAI_COURSES
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    shortName: 'Cybersecurity',
    path: '/courses/cybersecurity',
    iconName: 'ShieldCheck',
    badge: 'Security & VAPT',
    description: 'Networking infrastructure, Linux for hackers, Python security scripting, CEH reconnaissance, OWASP Top 10 pentesting, VAPT, and SOC monitoring.',
    targetAudience: 'Security enthusiasts, ethical hackers, sysadmins, and IT professionals',
    courses: CYBERSECURITY_COURSES
  },
  {
    id: 'data-science',
    name: 'Data Science, ML & NLP',
    shortName: 'Data Science',
    path: '/courses/data-science',
    iconName: 'Database',
    badge: 'AI & Analytics',
    description: 'Python for Data Science, SQL, Power BI, Statistics, Scikit-Learn, PyTorch neural networks, NLP transformers, Computer Vision, and Apache Spark.',
    targetAudience: 'Data analysts, aspiring data scientists, and ML engineers',
    courses: DATA_SCIENCE_ML_COURSES
  },
  {
    id: 'pathways',
    name: 'More Pathways to Success',
    shortName: 'Career Pathways',
    path: '/courses/pathways',
    iconName: 'Compass',
    badge: 'Finance & Growth',
    description: 'Comprehensive financial mechanics, investment banking, share markets, GST & corporate tax compliance, marketing pipelines, and executive leadership.',
    targetAudience: 'Commerce, finance, marketing aspirants, and career switchers',
    courses: MORE_PATHWAYS_TRACKS
  },
  {
    id: 'professional',
    name: 'Working Professionals',
    shortName: 'Professionals',
    path: '/professionals',
    iconName: 'Briefcase',
    badge: 'Executive Bootcamp',
    description: 'Save 10+ hours of repetitive work weekly: automated emails, advanced Excel formulas with AI, instant PowerPoint decks, and smart task automation.',
    targetAudience: 'Corporate executives, managers, freelancers, and business owners',
    courses: [PROFESSIONAL_COURSE]
  },
  {
    id: 'spoken',
    name: 'Spoken Skills (Eng / Hindi)',
    shortName: 'Spoken Skills',
    path: '/spoken-skills',
    iconName: 'Languages',
    badge: 'Communication',
    description: 'Overcome speaking hesitation, master corporate interview fluency in Spoken English, and gain daily conversational confidence in Spoken Hindi.',
    targetAudience: 'Job seekers, non-native speakers, and students preparing for interviews',
    courses: SPOKEN_COURSES
  },
  {
    id: 'business-management',
    name: 'Business Management',
    shortName: 'Business',
    path: '/courses/business-management',
    iconName: 'Briefcase',
    badge: 'Strategy & Growth',
    description: 'Master operational frameworks, digital marketing analytics, performance funnels, and scalable startup strategies.',
    targetAudience: 'Entrepreneurs, managers, career switchers, and business leaders',
    courses: BUSINESS_MANAGEMENT_COURSES
  },
  {
    id: 'design-creative',
    name: 'Design & Creative Technology',
    shortName: 'Design & Creative',
    path: '/courses/design-creative',
    iconName: 'Palette',
    badge: 'Creative Tech',
    description: 'UI/UX design with Figma, motion graphics video editing, 3D modeling in Blender, and generative creative AI pipelines.',
    targetAudience: 'Designers, content creators, animators, and multimedia professionals',
    courses: DESIGN_CREATIVE_COURSES
  },
  {
    id: 'engineering-robotics',
    name: 'Engineering & Robotics',
    shortName: 'Robotics & Hardware',
    path: '/courses/engineering-robotics',
    iconName: 'Cpu',
    badge: 'Hardware & AI',
    description: 'Embedded systems with Arduino, sensor integration, autonomous navigation, IoT cloud telemetry, and drone flight control.',
    targetAudience: 'Engineering students, hardware enthusiasts, robotics builders, and makers',
    courses: ENGINEERING_ROBOTICS_COURSES
  }
];

// Helper to look up a category and its courses by query string
export function getCoursesByCategory(query: string): CourseCategory | undefined {
  const q = query.toLowerCase().trim();
  return COURSE_CATEGORIES.find((cat) => {
    const nameMatch = cat.name.toLowerCase().includes(q) || q.includes(cat.name.toLowerCase());
    const shortMatch = cat.shortName ? cat.shortName.toLowerCase().includes(q) || q.includes(cat.shortName.toLowerCase()) : false;
    const idMatch = cat.id.toLowerCase() === q;
    return nameMatch || shortMatch || idMatch;
  });
}

