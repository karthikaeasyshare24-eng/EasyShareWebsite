import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Languages, 
  Quote, 
  Award, 
  Code2, 
  Brain,
  PhoneCall,
  ShieldCheck,
  Database,
  Compass,
  Clock,
  Tag,
  ChevronDown
} from 'lucide-react';
import { CONTACT_INFO, WHY_US_ITEMS } from '../data/coursesData';
import FAQSection from '../components/FAQSection';

// =========================================================================
// DATA STRUCTURE: COURSES ORGANIZED BY CATEGORY
// Easily editable courses data array at the top of the file.
// Each course contains: id, badge, title, tagline, duration, fees, mode, modules[], outcome.
// =========================================================================

export interface CategoryCourseItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  duration: string;
  fees: string;
  mode: string;
  modules: string[];
  outcome: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  path: string;
  courses: CategoryCourseItem[];
}

export const COURSES_BY_CATEGORY_DATA: CategoryGroup[] = [
  {
    id: 'business-management',
    name: 'Business Management',
    path: '/courses/business-management',
    courses: [
      {
        id: 'biz-mgmt-essentials',
        badge: 'High Impact',
        title: 'Business Management Essentials',
        tagline: 'Master operational frameworks, strategic decision-making, and financial leadership for modern enterprises.',
        duration: '40 Hours',
        fees: '₹8,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Strategic Planning & Business Model Innovation',
          'Financial Fundamentals: Budgeting, P&L & Cash Flow',
          'People Leadership & Cross-Functional Team Dynamics',
          'Operations Management & Process Optimization',
          'Risk Assessment, Agile Project Delivery & KPI Governance'
        ],
        outcome: 'Lead business initiatives with commercial clarity, manage budgets with precision, and scale organizational productivity.'
      },
      {
        id: 'digital-mktg-analytics',
        badge: 'Growth & ROI',
        title: 'Digital Marketing & Analytics',
        tagline: 'Architect high-converting acquisition funnels, scale performance campaigns, and analyze customer lifetime value.',
        duration: '35 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Full-Funnel Omnichannel Marketing Architecture',
          'Search Engine Optimization (SEO) & High-Intent Content',
          'Performance Marketing: Meta & Google Ads Mastery',
          'Google Analytics 4 (GA4), Attribution & Conversion Auditing',
          'Marketing Automation, Email Sequences & CRM Retention'
        ],
        outcome: 'Plan, execute, and scale multi-channel acquisition campaigns backed by rigorous data tracking and quantifiable ROI.'
      },
      {
        id: 'startup-entrepreneurship',
        badge: 'Startup Scale',
        title: 'Entrepreneurship & Startup Strategy',
        tagline: 'From concept to market launch: product validation, MVP development, unit economics, and fundraising.',
        duration: '36 Hours',
        fees: '₹7,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Market Validation, Customer Discovery & Problem-Solution Fit',
          'Lean Canvas Modeling & Product-Market Fit Testing',
          'Unit Economics, Pricing Strategies & Cash Runway Planning',
          'Investor Deck Engineering & Venture Capital Deal Mechanics'
        ],
        outcome: 'Build and validate scalable business models, structure investor pitch decks, and execute early go-to-market strategies.'
      }
    ]
  },
  {
    id: 'design-creative-tech',
    name: 'Design & Creative Technology',
    path: '/courses/design-creative',
    courses: [
      {
        id: 'uiux-figma',
        badge: 'Industry Standard',
        title: 'UI/UX Design with Figma',
        tagline: 'Design user-centric web and mobile interfaces with modern design systems, auto layout, and responsive prototyping.',
        duration: '36 Hours',
        fees: '₹7,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'User Research, Empathy Mapping & Information Architecture',
          'Wireframing & Visual Hierarchy Principles',
          'Figma Mastery: Auto Layout, Component Variants & Tokens',
          'Interactive Micro-Animations & High-Fidelity Prototyping',
          'Design Systems, Accessibility Standards (WCAG) & Dev Handoff'
        ],
        outcome: 'Create polished, accessible digital product interfaces and establish a complete end-to-end design portfolio.'
      },
      {
        id: 'motion-graphics-editing',
        badge: 'Creative Suite',
        title: 'Motion Graphics & Video Editing',
        tagline: 'Craft compelling brand narratives with video editing, kinetic typography, visual effects, and professional sound design.',
        duration: '32 Hours',
        fees: '₹6,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Non-Linear Video Editing with Premiere Pro & DaVinci Resolve',
          'Kinetic Typography, Shape Layers & Logo Reveals',
          'After Effects Keyframing, Motion Paths & Speed Easing',
          'Audio Balancing, Sound Effects & Professional Color Grading',
          'Short-Form Social Content Strategies (Reels/Shorts) & Exports'
        ],
        outcome: 'Produce commercial-grade video edits and dynamic motion graphics for digital agencies, brands, and content creators.'
      },
      {
        id: 'creative-ai-3d',
        badge: 'Emerging Tech',
        title: '3D Modeling & Generative Creative Tools',
        tagline: 'Create 3D digital assets, spatial product renders, and integrate generative AI into visual workflows.',
        duration: '30 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          '3D Mesh Modeling, Topology & Poly-Editing Fundamentals',
          'Procedural Materials, Shading & PBR Texturing',
          'Studio Lighting Setups & Spatial Photorealistic Rendering',
          'AI-Assisted Concept Ideation & Texture Map Generation'
        ],
        outcome: 'Model and render realistic 3D assets and accelerate commercial product visualizations using modern generative tools.'
      }
    ]
  },
  {
    id: 'engineering-robotics',
    name: 'Engineering & Robotics',
    path: '/courses/engineering-robotics',
    courses: [
      {
        id: 'robotics-arduino-sensors',
        badge: 'Hands-on Hardware',
        title: 'Robotics with Arduino & Sensors',
        tagline: 'Build autonomous machines, integrate electronic sensor arrays, and program microcontroller firmware.',
        duration: '45 Hours',
        fees: '₹9,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Electronics Foundations, Breadboards & Schematic Reading',
          'Embedded C/C++ Programming for Arduino Microcontrollers',
          'Sensor Interfacing: Ultrasonic, Infrared, Accelerometer & Temp',
          'Motor Control: DC Motors, H-Bridges, Steppers & Servos',
          'Building Autonomous Obstacle-Avoiding & Line-Following Bots'
        ],
        outcome: 'Design, solder, and program autonomous robotics systems from component schematics to working physical hardware.'
      },
      {
        id: 'iot-cad-engineers',
        badge: 'Industry 4.0',
        title: 'IoT & CAD for Engineers',
        tagline: 'Combine precision 3D CAD mechanical modeling with connected cloud IoT sensor networks.',
        duration: '40 Hours',
        fees: '₹8,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Parametric 3D CAD Modeling & Prototyping for 3D Printing',
          'ESP32 / NodeMCU Microcontroller IoT Architecture',
          'Network Protocols: MQTT, WebSockets & RESTful Sensor APIs',
          'Cloud IoT Dashboards & Remote Actuator Telemetry',
          'Hardware Enclosure Design, Tolerance & Physical Assembly'
        ],
        outcome: 'Engineer custom mechanical enclosures in CAD and deploy connected smart IoT telemetry devices to the cloud.'
      },
      {
        id: 'drone-embedded-flight',
        badge: 'UAV Engineering',
        title: 'Drone Technology & Embedded Flight Control',
        tagline: 'Explore multirotor flight dynamics, brushless motor ESCs, and autonomous GPS waypoint telemetry.',
        duration: '36 Hours',
        fees: '₹8,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Multirotor Aerodynamics, Lift-to-Weight & Thrust Ratios',
          'Flight Controller Firmware Configuration & PID Tuning',
          'Electronic Speed Controllers (ESCs) & Power Distribution',
          'Radio Telemetry, GPS Ground Station Integration & Safety'
        ],
        outcome: 'Understand the engineering architecture of UAVs and configure autonomous flight control and waypoint systems.'
      }
    ]
  },
  {
    id: 'ai-coding',
    name: 'AI, Coding & GenAI',
    path: '/courses/ai-coding',
    courses: [
      {
        id: 'genai-coding-tools',
        badge: 'High Productivity',
        title: 'GenAI-Assisted Coding & Developer Tools',
        tagline: 'Supercharge development productivity using Cursor, GitHub Copilot, and LLM coding assistants.',
        duration: '30 Hours',
        fees: '₹6,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Setting up Copilot, Cursor & modern AI IDEs',
          'Context management & system instructions',
          'AI-powered code generation & refactoring',
          'Test generation & automated bug hunting',
          'Codebase comprehension with AI chat',
          'Ethical & secure AI coding best practices'
        ],
        outcome: 'Code 3x faster with AI copilots while maintaining high code quality and security standards.'
      },
      {
        id: 'python-ai-foundations',
        badge: 'Core Foundation',
        title: 'Python & AI Foundations',
        tagline: 'Core programming syntax, algorithm design, data structures, and computational foundations for artificial intelligence.',
        duration: '30 Hours',
        fees: '₹6,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Python Syntax, Control Flow & Error Handling',
          'Functions, Modules & Virtual Environments',
          'Data Structures: Lists, Tuples, Dictionaries & Sets',
          'File I/O, JSON Data & API Requests',
          'Introduction to AI Problem Solving & OOP Principles'
        ],
        outcome: 'Write clean, modular, production-ready Python code tailored for AI architectures and developer workflows.'
      },
      {
        id: 'rag-vector-databases',
        badge: 'Cutting Edge',
        title: 'Retrieval-Augmented Generation (RAG) & Vector DBs',
        tagline: 'Connect private company knowledge to state-of-the-art LLMs with vector embeddings and semantic search.',
        duration: '36 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Document Parsing & Chunking Strategies',
          'High-Dimensional Vector Embeddings & Math',
          'Vector Databases: Pinecone, ChromaDB & FAISS',
          'Semantic Search, Hybrid Retrieval & Re-ranking',
          'End-to-End Enterprise RAG Pipeline Implementation'
        ],
        outcome: 'Architect enterprise search systems with accurate source citations and zero hallucination.'
      }
    ]
  },
  {
    id: 'college-students',
    name: 'College Students',
    path: '/courses/college',
    courses: [
      {
        id: 'college-genai-foundation',
        badge: 'Career Boost',
        title: 'AI & Generative AI Foundation',
        tagline: 'Comprehensive foundations in frontier LLMs, actionable prompt engineering, and academic productivity.',
        duration: '7 Days',
        fees: '₹2,999',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'AI & Generative AI Fundamentals & Model Comparison',
          'Prompt Engineering: Zero-Shot, Few-Shot & Chain-of-Thought',
          'Academic Literature Surveys & Research Paper Synthesis',
          'AI Tools for Presentation Decks, Visuals & Technical Reports',
          'Resume Engineering, LinkedIn Optimization & Placement Prep'
        ],
        outcome: 'Gain practical fluency with ChatGPT, Claude, and Gemini to accelerate coursework and campus placements.'
      },
      {
        id: 'college-career-mentor',
        badge: 'Placement Ready',
        title: 'AI Career & Project Mentor',
        tagline: 'Bridge college engineering to corporate careers with AI + Excel, Power BI dashboards, and live API applications.',
        duration: '10 Days',
        fees: '₹7,999',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Advanced AI Tools for Workplace Data & Automation',
          'AI + Advanced Excel: Formulas, Macros & Cleaning',
          'Power BI Interactive Dashboards & Business Analytics',
          'Calling AI Model APIs with Python & Webhooks',
          'Building and Deploying a Standout Portfolio Project'
        ],
        outcome: 'Graduate with an impressive live portfolio project and corporate-grade analytical skills that hiring managers seek.'
      }
    ]
  },
  {
    id: 'school-students',
    name: 'School Students',
    path: '/courses/school',
    courses: [
      {
        id: 'school-ai-basics',
        badge: 'Class 5th–12th',
        title: 'AI Basics for School Students',
        tagline: 'Fun, intuitive, and safe introduction to artificial intelligence, creative tools, and computational thinking.',
        duration: '5 Days',
        fees: '₹2,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'What is Artificial Intelligence? How Machines Learn',
          'Chatting with AI: Asking Smart Questions for Schoolwork',
          'Creative AI: Generating Artwork, Stories & Poems',
          'Safe AI Habits: Digital Privacy, Truth vs Hallucinations',
          'Building a Mini AI Science Quiz Companion'
        ],
        outcome: 'Understand AI safety, develop creative digital skills, and spark curiosity for modern technology.'
      },
      {
        id: 'school-study-partner',
        badge: 'Personal Tutor',
        title: 'AI Study Partner for School',
        tagline: 'Transform AI into a patient 24/7 personal tutor for homework, revision, notes, and exam prep.',
        duration: '7 Days',
        fees: '₹10,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Active Recall: Making AI Test You on Hard Topics',
          'Instant Concept Breakdown: Complex Math & Science Simplified',
          'Interactive Homework Explainer (No Copy-Paste Shortcuts)',
          'Generating Flashcards, Revision Outlines & Formula Sheets',
          'English Essay Drafting, Vocabulary & Grammar Coach'
        ],
        outcome: 'Study smarter, grasp difficult subjects with clarity, and build independent, lifelong study habits.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    path: '/courses/cybersecurity',
    courses: [
      {
        id: 'cyber-ceh',
        badge: 'Security Track',
        title: 'Ethical Hacking & Reconnaissance (CEH)',
        tagline: 'Master reconnaissance techniques, vulnerability scanning, and offensive security methodologies.',
        duration: '36 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'OSINT, Passive & Active Target Reconnaissance',
          'Port Scanning, Service Fingerprinting & Nmap',
          'Vulnerability Scanning with Nessus & OpenVAS',
          'Network Exploitation, Metasploit & Payload Generation',
          'Ethical Standards, Legal Frameworks & Reporting'
        ],
        outcome: 'Conduct structured ethical penetration testing assessments and deliver professional vulnerability reports.'
      },
      {
        id: 'cyber-web-pentest',
        badge: 'OWASP Top 10',
        title: 'Web Application Penetration Testing',
        tagline: 'Identify and exploit critical web application flaws using Burp Suite and industry security standards.',
        duration: '36 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'HTTP Protocol, Headers, Cookies & Authentication Flows',
          'Burp Suite Pro Configuration, Proxying & Intruder',
          'SQL Injection (SQLi) & Cross-Site Scripting (XSS)',
          'Broken Object Level Authorization (BOLA/IDOR)',
          'Remediation Strategies & DevSecOps Best Practices'
        ],
        outcome: 'Defend web applications by identifying and remediating OWASP Top 10 vulnerabilities before adversaries strike.'
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science, ML & NLP',
    path: '/courses/data-science',
    courses: [
      {
        id: 'ds-python-analytics',
        badge: 'Core Analytics',
        title: 'Python for Data Science & Analytics',
        tagline: 'Manipulate large datasets, extract statistical patterns, and build compelling interactive charts.',
        duration: '30 Hours',
        fees: '₹6,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'NumPy Multidimensional Arrays & Vectorized Computing',
          'Pandas DataFrames: Cleaning, Filtering & Grouping',
          'Data Visualization: Matplotlib, Seaborn & Plotly',
          'Exploratory Data Analysis (EDA) Best Practices',
          'SQL Query Integration & Data Extraction Pipelines'
        ],
        outcome: 'Transform messy raw business data into actionable visual insights and structured analytics.'
      },
      {
        id: 'ds-machine-learning',
        badge: 'Predictive ML',
        title: 'Machine Learning with Scikit-Learn',
        tagline: 'Train, evaluate, and fine-tune supervised and unsupervised machine learning algorithms.',
        duration: '36 Hours',
        fees: '₹7,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Regression, Classification & Decision Trees',
          'Feature Engineering, Scaling & Encoding',
          'Model Evaluation: Precision, Recall, ROC-AUC',
          'Cross-Validation, Grid Search & Hyperparameter Tuning',
          'Deploying Machine Learning Models via FastAPI'
        ],
        outcome: 'Build and deploy predictive machine learning pipelines that solve tangible classification and regression problems.'
      }
    ]
  },
  {
    id: 'working-professionals',
    name: 'Working Professionals',
    path: '/professionals',
    courses: [
      {
        id: 'pro-ai-bootcamp',
        badge: 'High Productivity',
        title: 'AI Productivity Bootcamp for Professionals',
        tagline: 'Automate repetitive daily tasks, draft executive emails, and save 10+ hours every single week.',
        duration: '5 Days',
        fees: '₹2,499',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Automating Executive Emails, Memos & Meeting Briefs',
          'AI + Excel: Instant Complex Formulas, Data Cleaning & Lookups',
          'Rapid PowerPoint Generation with Gamma, Beautiful.ai & LLMs',
          'Meeting Audio Transcription & Action Item Extraction',
          'Building Custom GPTs for Your Team and Department'
        ],
        outcome: 'Eliminate tedious manual work, reclaim 10+ hours every week, and stand out as the AI-empowered leader in your company.'
      }
    ]
  },
  {
    id: 'spoken-skills',
    name: 'Spoken Skills (Eng / Hindi)',
    path: '/spoken-skills',
    courses: [
      {
        id: 'spoken-english-mastery',
        badge: 'Fluency',
        title: 'Spoken English Mastery',
        tagline: 'Overcome hesitation, master corporate interview fluency, and speak English with calm authority.',
        duration: '10 Days',
        fees: '₹3,000',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Hesitation Elimination & Public Speaking Mindset',
          'Workplace English: Meetings, Small Talk & Pitching',
          'Interview Q&A Mastery (STAR Framework & Confident Delivery)',
          'AI Speech Partner: Daily Interactive Voice Practice Drills',
          'Pronunciation, Vocal Modulation & Body Language'
        ],
        outcome: 'Speak English fluently without searching for words and ace high-stakes job interviews with poise.'
      },
      {
        id: 'spoken-hindi-fluency',
        badge: 'Conversational',
        title: 'Spoken Hindi Fluency',
        tagline: 'Practical conversational Hindi for daily social interactions, travel, and commercial workplace communication.',
        duration: '10 Days',
        fees: '₹2,500',
        mode: 'Offline • Online • Hybrid',
        modules: [
          'Everyday Conversational Hindi Dialogues & Phrases',
          'Workplace & Client Communication Vocabulary',
          'Overcoming Pronunciation & Accent Hesitation',
          'Practical Travel, Shopping & Relocation Fluency',
          'Live Role-Playing & Real-Time Speaking Drills'
        ],
        outcome: 'Communicate naturally in Hindi across social, professional, and commercial settings in Mumbai and nationwide.'
      }
    ]
  }
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('business-management');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setExpandedCourseId(null); // Switching category closes all open cards
  };

  const toggleCourseExpand = (courseId: string) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId)); // Opening one closes any other open card
  };

  const currentCategoryData = COURSES_BY_CATEGORY_DATA.find((cat) => cat.id === selectedCategory) || COURSES_BY_CATEGORY_DATA[0];
  const whatWeOfferItems = [
    { title: 'School Students', link: '/courses/school', icon: BookOpen, desc: 'AI literacy & 24/7 personal study partner for grades 5th–12th' },
    { title: 'College Students', link: '/courses/college', icon: GraduationCap, desc: 'GenAI foundations, prompt engineering & career portfolios' },
    { title: 'AI, Coding & GenAI', link: '/courses/ai-coding', icon: Code2, desc: 'Python, agentic AI, RAG, vector DBs & LLM fine-tuning' },
    { title: 'Cybersecurity & Ethical Hacking', link: '/courses/cybersecurity', icon: ShieldCheck, desc: 'CEH reconnaissance, OWASP VAPT, SOC & cloud security' },
    { title: 'Data Science, ML & NLP', link: '/courses/data-science', icon: Database, desc: 'Python data stack, SQL, Power BI, PyTorch & transformers' },
    { title: 'More Pathways to Success', link: '/courses/pathways', icon: Compass, desc: 'Investment banking, share markets, tax & business' },
    { title: 'Working Professionals', link: '/professionals', icon: Briefcase, desc: 'Automate emails, Excel formulas & save 10+ hours weekly' },
    { title: 'Spoken Skills (Eng / Hindi)', link: '/spoken-skills', icon: Languages, desc: 'Overcome hesitation & build confident conversational fluency' },
    { title: 'Final-Year Project Assistance', link: '/projects', icon: FolderGit2, desc: 'Concept, code, IEEE documentation, PPT & mock viva' },
    { title: 'Value Combo Programs', link: '/combos', icon: Sparkles, desc: 'Dual certification packages combining AI with career skills' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#042116] via-[#062c1e] to-[#041a12] text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle emerald glow rings */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Official Brand Logo Showcase */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/70 ring-4 ring-emerald-500/20 hover:scale-105 transition-transform duration-300 bg-white p-2.5 flex items-center justify-center">
              <img 
                src="/easy-ai-academia-logo.svg" 
                alt="Mumbai Ai Academia Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Practical AI Education & Career Skills</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Learn AI. Build Skills.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-400">
              Create Your Future.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed">
            Practical AI Education & Career Skills for Students, Graduates & Professionals
          </p>

          {/* Quote Callout Box */}
          <div className="mt-8 mx-auto max-w-2xl bg-[#063323]/80 border border-emerald-800/80 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 text-emerald-300">
              <Quote className="w-5 h-5 shrink-0 rotate-180 text-emerald-400" />
              <p className="text-sm sm:text-base font-semibold italic text-white">
                "AI is not the future. AI is the skill you can start learning today."
              </p>
              <Quote className="w-5 h-5 shrink-0 text-emerald-400" />
            </div>
          </div>

          {/* Two CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/courses/school"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </Link>

            <a
              href={`tel:${CONTACT_INFO.callPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 text-emerald-100 border border-emerald-700/80 font-bold text-sm tracking-wide transition-all"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              <span>Call: {CONTACT_INFO.displayCallPhone}</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Badge Row Underneath */}
          <div className="mt-10 pt-6 border-t border-emerald-800/70 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-emerald-100">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Offline Training
            </span>
            <span className="text-emerald-700">•</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Online Live Classes
            </span>
            <span className="text-emerald-700">•</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Hybrid Flexible Mode
            </span>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Practical & Hands-on</div>
          </div>
          <div className="p-3 border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-black text-emerald-700">3 Modes</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Offline | Online | Hybrid</div>
          </div>
          <div className="p-3 border-l-0 sm:border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">1-on-1</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Mentor Guidance</div>
          </div>
          <div className="p-3 border-l border-slate-200">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">Verified</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Course Certificates</div>
          </div>
        </div>
      </section>

      {/* What We Offer (Icon grid, 10 items, each links to its relevant page) */}
      <section className="py-16 bg-emerald-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3 border border-emerald-200">
              Comprehensive Curriculum
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Offer
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Structured modules designed for immediate practical utility — from school fundamentals to corporate career automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whatWeOfferItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.link}
                  className="group flex flex-col justify-between p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all duration-200 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:text-emerald-600">
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses by Category Section */}
      <section id="categories" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Explore Our Programs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Courses by Category
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Browse our curriculum organized by specialized industry tracks. Select a category tab below to explore courses with transparent fees, durations, and module breakdowns.
              </p>
            </div>
            <Link
              to="/combos"
              className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
            >
              <span>View All Combos & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 1. Category Tabs / Chips */}
          <div className="mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {COURSES_BY_CATEGORY_DATA.map((cat) => {
                const isActive = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 border ${
                      isActive
                        ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                        isActive
                          ? 'bg-emerald-900 text-emerald-200'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {cat.courses.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Overview & Dedicated Page Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 mb-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block sm:inline">
                  Viewing Category:{' '}
                </span>
                <span className="text-sm font-extrabold text-slate-900 ml-0.5">
                  {currentCategoryData.name}
                </span>
                <span className="text-xs text-emerald-800 font-medium ml-2">
                  ({currentCategoryData.courses.length} courses)
                </span>
              </div>
            </div>

            {currentCategoryData.path && (
              <Link
                to={currentCategoryData.path}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 shadow-sm transition-all hover:scale-[1.01]"
              >
                <span>View Dedicated {currentCategoryData.name} Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </Link>
            )}
          </div>

          {/* 2 & 3. Responsive Course Cards Grid (items-start prevents adjacent cards from stretching) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {currentCategoryData.courses.map((course) => {
              const isExpanded = expandedCourseId === course.id;

              return (
                <div
                  key={course.id}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all duration-200 ${
                    isExpanded
                      ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                      : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300'
                  }`}
                >
                  {/* Collapsed Card Content (Always visible) */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {course.title}
                  </h3>

                  {/* The first 3 module titles with green check icons */}
                  <ul className="mt-3.5 space-y-2">
                    {course.modules.slice(0, 3).map((mod, mIdx) => (
                      <li
                        key={mIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read more / Show less link with arrow & aria-expanded */}
                  <button
                    type="button"
                    onClick={() => toggleCourseExpand(course.id)}
                    aria-expanded={isExpanded}
                    className="mt-3.5 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Card Content (Order: Tagline -> Duration/Fees -> What You Will Learn -> Target Outcome -> Enroll Button -> Modes text) */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 transition-all duration-300">
                      {/* Short tagline */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {course.tagline}
                      </p>

                      {/* Duration (clock icon) and Fees (tag icon) in a light green box */}
                      <div className="mt-3.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>
                            Duration: <strong className="text-slate-900">{course.duration}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>
                            Fees: <strong className="text-emerald-800 text-sm font-bold">{course.fees}</strong>
                          </span>
                        </div>
                      </div>

                      {/* WHAT YOU WILL LEARN (X core modules) with all modules as a check-icon list */}
                      <div className="mt-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                          WHAT YOU WILL LEARN ({course.modules.length} core modules)
                        </h4>
                        <ul className="space-y-2">
                          {course.modules.map((mod, fullIdx) => (
                            <li
                              key={fullIdx}
                              className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{mod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TARGET OUTCOME box with light green background and green border */}
                      <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-300/80">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block mb-1">
                          TARGET OUTCOME
                        </span>
                        <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                          {course.outcome}
                        </p>
                      </div>

                      {/* Full-width green rounded ENROLL NOW button */}
                      <Link
                        to="/contact"
                        className="mt-4 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <span>ENROLL NOW</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Small text: Modes: Offline • Online • Hybrid */}
                      <p className="mt-2 text-center text-[11px] text-slate-400 font-medium">
                        Modes: Offline • Online • Hybrid
                      </p>

                      {currentCategoryData.path && (
                        <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                          <Link
                            to={currentCategoryData.path}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                          >
                            <span>Explore dedicated {currentCategoryData.name} page</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Mumbai Ai Academia? (Short version) */}
      <section className="py-16 bg-[#042116] text-white px-4 sm:px-6 lg:px-8 border-t border-emerald-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-extrabold tracking-widest text-emerald-300 uppercase mb-2">
              LEARN → PRACTICE → BUILD → GROW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Mumbai Ai Academia?
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base mt-2">
              We make AI education approachable, practical, and directly applicable to your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {WHY_US_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center gap-3 text-emerald-100 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white underline underline-offset-4"
            >
              <span>Read more about our institute, coach & philosophy →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Component */}
      <FAQSection />

      {/* Bottom CTA Band */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-[#041a12] py-14 px-4 sm:px-6 lg:px-8 text-white border-t border-emerald-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to start learning AI?
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Join the next batch in your preferred mode: Offline classroom, live Online, or Hybrid.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-black/20 active:scale-95 transition-all"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </Link>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-sm border border-emerald-600 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
