import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WHY_US_ITEMS, COACH_PROFILE, CONTACT_INFO } from '../data/coursesData';
import brandStoryImg from '../assets/images/brand_story_studio_1793944839452.jpg';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Briefcase, 
  Cpu, 
  Building2, 
  GraduationCap, 
  Users, 
  Wrench, 
  Rocket, 
  Play, 
  Layers, 
  Lightbulb, 
  BookOpen, 
  Target, 
  Award, 
  Laptop, 
  ShieldCheck, 
  Check, 
  ChevronRight,
  TrendingUp,
  Compass,
  X,
  ExternalLink,
  Landmark
} from 'lucide-react';

export default function AboutPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Founder's Three Ventures
  const ventures = [
    {
      id: 'easyshare',
      num: '01',
      name: 'Easy Share Services',
      url: 'https://easyshareservices.com/',
      isExternal: true,
      positioning: 'Corporate & Financial Services',
      description: 'A leading specialized firm delivering trusted IEPF share recovery, dematerialization of physical shares, and complete corporate shareholder solutions across India.',
      icon: Briefcase,
      tag: 'Financial & Share Services',
      highlightColor: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-200/90 hover:border-emerald-500',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      buttonText: 'Visit easyshareservices.com'
    },
    {
      id: 'easyspace',
      num: '02',
      name: 'Easy Space Realty',
      url: 'https://easyspacerealty.com/',
      isExternal: true,
      positioning: 'Real Estate & Properties',
      description: 'A premier real estate advisory firm specializing in strategic corporate workspace acquisition, commercial leasing, residential property investments, and asset consulting.',
      icon: Building2,
      tag: 'Real Estate & Properties',
      highlightColor: 'from-amber-500/20 to-emerald-500/10',
      borderColor: 'border-amber-200/90 hover:border-amber-500',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-300',
      buttonText: 'Visit easyspacerealty.com'
    },
    {
      id: 'easyai',
      num: '03',
      name: 'EasyAI Academia',
      url: 'https://easycoaching.in/',
      isExternal: false,
      positioning: 'AI Education & Practical Technology',
      description: 'A pioneering practical AI education academy dedicated to making artificial intelligence, prompt engineering, and automation approachable and career-transformative for all.',
      icon: GraduationCap,
      tag: 'Flagship AI Academy',
      isFlagship: true,
      highlightColor: 'from-emerald-500/30 to-green-500/15',
      borderColor: 'border-emerald-500 hover:border-emerald-600 ring-2 ring-emerald-500/20',
      badgeColor: 'text-emerald-900 bg-emerald-100 border-emerald-400',
      buttonText: 'Explore EasyAI Academia'
    }
  ];

  // Visual Statistics for Founder's Career & Achievements
  const founderStats = [
    {
      value: '14 Years',
      label: 'IT Management Experience',
      highlight: 'At UCO Bank',
      icon: Landmark,
      description: 'Over a decade leading core banking technology, secure financial systems & IT infrastructure.'
    },
    {
      value: '₹20 Crore',
      label: 'Annual Business Turnover',
      highlight: 'Approximately',
      icon: TrendingUp,
      description: 'Combined annual revenue generated across established commercial and technology enterprises.'
    },
    {
      value: 'Around 300',
      label: 'Employees & Team Members',
      highlight: 'Workforce',
      icon: Users,
      description: 'Talented corporate professionals, managers, and mentors employed across all founded businesses.'
    },
    {
      value: '3 Businesses',
      label: 'Founded Enterprises',
      highlight: 'Multi-Sector Portfolio',
      icon: Building2,
      description: 'Successful ventures established in Financial Share Services, Real Estate, and AI Education.'
    }
  ];

  // Core Values
  const coreValues = [
    {
      title: 'People First',
      tagline: 'Making AI learning accessible and understandable for everyone.',
      desc: 'We remove intimidation and barrier-to-entry from modern AI. By prioritizing clear language over complex math, we empower learners of all age groups and disciplines to embrace artificial intelligence with clarity and self-belief.',
      icon: Users
    },
    {
      title: 'Practical Learning',
      tagline: 'Focusing on real tools, hands-on exercises, and practical applications.',
      desc: 'Real learning happens through doing. Every session is grounded in live interfaces—ChatGPT, Gemini, Claude, prompt architectures, and real-world projects that produce immediate productivity and demonstrable portfolios.',
      icon: Wrench
    },
    {
      title: 'Future Ready',
      tagline: 'Preparing students and professionals for an AI-driven world.',
      desc: 'The technological landscape is accelerating rapidly. We continuously adapt our curriculum to frontier workflows, giving our learners an enduring career advantage and the cognitive tools to lead in an automated economy.',
      icon: Rocket
    }
  ];

  // Four-Step Methodology
  const steps = [
    { 
      num: '01', 
      title: 'LEARN', 
      desc: 'Clear, jargon-free foundations of AI, prompting, and tools.',
      details: 'Understand how modern LLMs work, token concepts, and safe usage without overwhelming mathematical jargon.'
    },
    { 
      num: '02', 
      title: 'PRACTICE', 
      desc: 'Daily guided hands-on exercises on real ChatGPT, Gemini, and Claude interfaces.',
      details: 'Work through structured daily prompts, document drafting, logic structuring, and iterative refinements.'
    },
    { 
      num: '03', 
      title: 'BUILD', 
      desc: 'Working projects, automated sheets, and capstone applications.',
      details: 'Create real portfolio assets: academic research companions, automated Excel sheets, and capstone demonstrations.'
    },
    { 
      num: '04', 
      title: 'GROW', 
      desc: 'Deploy skills into school academics, college placements, or workplace promotions.',
      details: 'Translate newfound capability into tangible outcomes—higher academic marks, placement readiness, or job promotions.'
    },
  ];

  // Domain icon map for why-us items
  const whyUsIcons = [
    Laptop,
    Sparkles,
    Wrench,
    Target,
    Users,
    GraduationCap,
    Award,
    Compass
  ];

  const scrollToVentures = () => {
    const el = document.getElementById('ventures-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fcfdfd] text-slate-900 min-h-screen">
      
      {/* =========================================================================
          SECTION 1: PREMIUM HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#021810] via-[#042418] to-[#021911] text-white pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-emerald-900/60">
        {/* Subtle background ambient gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">
                  ABOUT US
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                Empowering People and Businesses Through Artificial Intelligence
              </h1>

              <p className="mt-6 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                Mumbai AI Academia is built on the belief that AI education should be practical, accessible, and relevant to the real world. We help students, professionals, and businesses understand AI, develop practical skills, and turn knowledge into meaningful opportunities.
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToVentures}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-4 h-4 text-emerald-950" />
                </button>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-600/50 rounded-xl shadow transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                >
                  Connect With Us
                </Link>
              </div>

              {/* Key Trust Signals Strip */}
              <div className="mt-12 pt-8 border-t border-emerald-900/70 grid grid-cols-3 gap-4 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">2,500+</div>
                  <div className="text-xs text-emerald-300/80 font-medium mt-0.5">Learners Mentored</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">3</div>
                  <div className="text-xs text-emerald-300/80 font-medium mt-0.5">Founded Businesses</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-emerald-300/80 font-medium mt-0.5">Hands-On Practice</div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Highlight Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-br from-[#052c1e]/90 via-[#031d14]/90 to-[#02130d]/95 p-6 sm:p-8 rounded-3xl border border-emerald-700/40 shadow-2xl backdrop-blur-sm relative">
                {/* Visual Glow Accent */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex flex-col items-center text-center">
                  {/* Founder Photo in Circular Container */}
                  <div className="relative mb-5">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-emerald-400 via-green-300 to-teal-200 p-1.5 shadow-2xl">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#021810]">
                        <img 
                          src="/assets/aistudio/image_5f52967d.png" 
                          alt="Mr. Rajeshwara Pandian - Founder"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-2 rounded-full shadow-lg border-2 border-[#021810]">
                      <Sparkles className="w-4 h-4 fill-slate-950" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full mb-2">
                    FOUNDER & VISIONARY
                  </span>

                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {COACH_PROFILE.name}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-200/90 mt-1">
                    {COACH_PROFILE.role}
                  </p>

                  <p className="text-xs sm:text-sm text-emerald-100/90 italic mt-4 bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-800/80 leading-relaxed">
                    "{COACH_PROFILE.bio}"
                  </p>

                  <div className="mt-5 w-full flex items-center justify-between text-[11px] text-emerald-300/80 border-t border-emerald-900/80 pt-4">
                    <span>Offline · Online · Hybrid</span>
                    <span className="font-semibold text-emerald-300">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: MEET OUR FOUNDER
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Executive Leadership & Vision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight text-balance">
              Meet Our Founder
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A leadership journey forged through 14 years of enterprise banking technology, multifaceted entrepreneurship, and a transformative mission to democratize artificial intelligence.
            </p>
          </div>

          {/* Master Founder Profile Card (Two-Column Layout) */}
          <div className="bg-gradient-to-br from-[#021810] via-[#04261a] to-[#02140d] rounded-3xl text-white p-7 sm:p-10 lg:p-14 shadow-2xl border border-emerald-800/70 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Founder Portrait Card (Identifiable Portrait Placeholder & Image) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm bg-gradient-to-b from-[#063323]/90 to-[#021810]/95 rounded-3xl p-5 sm:p-6 border border-emerald-700/60 shadow-2xl backdrop-blur-sm relative">
                  
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#02160e] ring-2 ring-emerald-500/40 shadow-inner group">
                    <img 
                      src="/assets/aistudio/image_5f52967d.png" 
                      alt="Mr. Rajeshwara Pandian - Founder"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                    {/* Top Status Tag */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950/90 text-emerald-300 border border-emerald-700/80 backdrop-blur-md shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Founder & Visionary
                      </span>
                    </div>

                    {/* Bottom Identifiable Photo Caption */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-center">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-800/80 text-[11px] font-semibold text-emerald-200 shadow-md">
                        Founder Portrait • Mr. Rajeshwara Pandian
                      </div>
                    </div>
                  </div>

                  {/* Identity Box Under Portrait */}
                  <div className="mt-5 text-center">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      Mr. Rajeshwara Pandian
                    </h3>
                    <p className="text-xs font-semibold text-emerald-300 mt-1 uppercase tracking-wider">
                      AI Literacy Coach | Business Strategist | Entrepreneur
                    </p>

                    {/* Trust Indicators */}
                    <div className="mt-4 pt-4 border-t border-emerald-800/70 flex flex-wrap items-center justify-center gap-2 text-[11px] text-emerald-200">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-900/60 border border-emerald-800">
                        14 Yrs Banking IT
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-900/60 border border-emerald-800">
                        ₹20 Cr Group Turnover
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-900/60 border border-emerald-800">
                        3 Founded Ventures
                      </span>
                    </div>

                    {/* Quick Action CTAs */}
                    <div className="mt-5 space-y-2.5">
                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>ENROLL NOW WITH US</span>
                        <ArrowRight className="w-4 h-4 text-emerald-800" />
                      </Link>

                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Mr.%20Rajeshwara%20Pandian%2C%20I%20would%20like%20to%20connect%20regarding%20AI%20training%20and%20consulting.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-600/50 text-emerald-100 text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Connect on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Professional Biography & Career Journey */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
                    <Award className="w-3.5 h-3.5 text-emerald-300" />
                    <span>FOUNDER OF MUMBAI AI ACADEMY</span>
                  </div>

                  {/* Prominent Name */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                    Mr. Rajeshwara Pandian
                  </h3>

                  {/* Professional Titles */}
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-emerald-400 mt-2 tracking-wide">
                    AI Literacy Coach | Business Strategist | Entrepreneur
                  </div>

                  {/* Executive Bio Narrative */}
                  <div className="mt-6 space-y-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
                    <p>
                      <strong>Mr. Rajeshwara Pandian</strong> is an established technology leader and business strategist with a distinguished <strong>14-year career in enterprise IT management at UCO Bank</strong>. During his tenure with one of India's premier public sector banks, he spearheaded mission-critical banking architectures, database systems, digital financial infrastructure, and enterprise technology operations. This solid foundation instilled deep expertise in systems reliability, technological discipline, and executive-level governance.
                    </p>
                    <p>
                      Channeling his corporate leadership into entrepreneurship, Mr. Pandian built and scaled a diversified commercial enterprise ecosystem. Today, his businesses generate <strong>approximately ₹20 Crore in annual business turnover</strong> and employ <strong>around 300 professionals</strong> across corporate share services, real estate advisory, and artificial intelligence education.
                    </p>
                    <p>
                      As an <strong>AI Literacy Coach</strong> and founder of <strong>EasyAI Academia (Mumbai AI Academia)</strong>, his mission is clear and urgent: eliminate the unnecessary mathematical gatekeeping of artificial intelligence, and equip students, engineers, and corporate executives with the actionable prompt engineering, Generative AI models, and automated workflows required to lead in an AI-driven economy.
                    </p>
                  </div>

                  {/* Executive Quote Callout */}
                  <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#063323]/80 border border-emerald-700/70 shadow-lg backdrop-blur-sm">
                    <p className="text-sm sm:text-base font-medium italic text-emerald-100 leading-relaxed">
                      "AI is not a privilege reserved for computer scientists. It is the single most transformative practical tool of our lifetime. My goal is to guide every student, professional, and business owner to shift from passive consumers into empowered creators and strategic innovators."
                    </p>
                    <div className="mt-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      — Mr. Rajeshwara Pandian
                    </div>
                  </div>

                  {/* Core Professional Pillars */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-emerald-900/80">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>14 Years Enterprise Banking IT Management (UCO Bank)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Approx. ₹20 Crore Annual Business Turnover Portfolio</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Around 300 Corporate Employees Led & Mentored</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Founder of 3 High-Trust Business Ventures</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Important Achievements: Visually Attractive Statistics (4 Cards) */}
          <div className="mt-10 sm:mt-12">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Key Accomplishments & Scale
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {founderStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-200">
                          <StatIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          {stat.highlight}
                        </span>
                      </div>

                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {stat.value}
                      </div>

                      <h4 className="text-sm font-bold text-slate-800 mt-1">
                        {stat.label}
                      </h4>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Career Milestone</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THREE FOUNDED VENTURES (DEDICATED SECTION WITH DIRECT LINKS)
          ========================================================================= */}
      <section id="ventures-section" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
              DIVERSIFIED ENTREPRENEURIAL PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
              Three Founded Ventures. One Enduring Vision.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Under the visionary leadership of Mr. Rajeshwara Pandian, three distinct commercial enterprises create lasting value across corporate share services, real estate advisory, and artificial intelligence education. Click on any venture to visit its official website.
            </p>
          </div>

          {/* 3 Venture Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ventures.map((venture) => {
              const IconComp = venture.icon;
              return (
                <div
                  key={venture.id}
                  className={`bg-white rounded-3xl p-7 sm:p-8 border ${venture.borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  {/* Subtle top gradient accent on card */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${venture.highlightColor}`} />

                  <div>
                    {/* Top Row: Index number & Category tag */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-700 transition-colors">
                        {venture.num}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${venture.badgeColor}`}>
                        {venture.tag}
                      </span>
                    </div>

                    {/* Venture Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 text-emerald-700">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Venture Name */}
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-emerald-800 transition-colors">
                      {venture.name}
                    </h3>

                    {/* Positioning / Category */}
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                      {venture.positioning}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {venture.description}
                    </p>
                  </div>

                  {/* Card Action Link to Website */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    {venture.isExternal ? (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] group/btn"
                      >
                        <span>{venture.buttonText}</span>
                        <ExternalLink className="w-4 h-4 text-emerald-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href={venture.url}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] group/btn"
                      >
                        <span>{venture.buttonText}</span>
                        <ExternalLink className="w-4 h-4 text-emerald-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Under-Card Context Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Collaborative Ecosystem</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Interested in learning more about our ecosystem or corporate training partnerships?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Reach out to discuss institutional collaborations, corporate AI workshops, or enterprise dialogues.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-sm hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: OUR BRAND STORY
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Story Prose */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
                THE STORY BEHIND MUMBAI AI ACADEMIA
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                From Vision to Real-World Impact
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  The world of artificial intelligence is moving faster than any previous technological revolution. Yet, traditional university curriculums and conventional courses often remain trapped in heavy mathematical abstractions and outdated slides that leave students unprepared for modern workflows.
                </p>
                <p>
                  <strong>Mumbai AI Academia was born from a simple realization:</strong> AI is not something you only study in academic journals—it is a superpower you can use right now to accelerate homework, prepare for engineering campus placements, automate business spreadsheets, or advance your career.
                </p>
                <p>
                  We strip away the gatekeeping and jargon. Whether teaching a 12-year-old school student how to make ChatGPT a thoughtful study partner, guiding an engineering graduate through their capstone project, or training corporate executives in actionable prompt engineering, our commitment remains unwavering: <span className="text-emerald-800 font-semibold">accessible, practical, and mentor-led education that delivers measurable real-world outcomes.</span>
                </p>
              </div>

              {/* Story Highlights Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Our Mission</div>
                  <div className="text-xs text-slate-700 font-medium">Demystifying AI for every background and skill level.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Our Focus</div>
                  <div className="text-xs text-slate-700 font-medium">Hands-on practice on real ChatGPT, Gemini & Claude tools.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Our Promise</div>
                  <div className="text-xs text-slate-700 font-medium">Clear outcomes: grades, portfolios, and career growth.</div>
                </div>
              </div>

            </div>

            {/* Right Column: Studio Media Card with Video-style Thumbnail */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={brandStoryImg}
                    alt="Mumbai AI Academia Interactive Workshop & Learning Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <button 
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center group/play cursor-pointer focus:outline-none"
                    aria-label="View learning studio video preview"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover/play:scale-110 group-hover/play:bg-emerald-400 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                    </div>
                  </button>

                  {/* Caption badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-300 text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>Interactive Learning Environment</span>
                    </div>
                    <p className="text-slate-200 text-xs mt-1">
                      Real workstations, mentored prompts & immediate collaborative feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: OUR VISION AND CORE VALUES
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
              PURPOSE & PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Building a Future Powered by AI
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We envision a future where everyone can understand, access, and confidently use artificial intelligence to create meaningful opportunities.
            </p>
          </div>

          {/* Three Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-emerald-700" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 mb-4 leading-snug">
                      {val.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Core Pillar #{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: OUR LEARNING METHODOLOGY
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
              PROVEN METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learn. Practice. Build. Grow.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every course at Mumbai AI Academia follows this structured 4-step progression to transform raw curiosity into proven real-world mastery:
            </p>
          </div>

          {/* 4 Connected Stages Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/80 hover:bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Large Background Step Number */}
                <div className="text-5xl font-black text-slate-200/70 group-hover:text-emerald-100 transition-colors absolute right-4 top-4 select-none">
                  {step.num}
                </div>

                <div>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 rounded-full mb-4">
                    Stage {step.num}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 leading-snug">
                    {step.desc}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: WHY CHOOSE MUMBAI AI ACADEMIA?
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Why Students & Professionals Choose Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We remove the math-heavy jargon and focus exclusively on tools and workflows that make an immediate impact on your career, academics, and projects.
            </p>
          </div>

          {/* Checklist Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US_ITEMS.map((item, idx) => {
              const ItemIcon = whyUsIcons[idx % whyUsIcons.length];
              return (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <ItemIcon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Designed for immediate real-world retention and confidence.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Three Learning Modes Strip */}
          <div className="mt-14 bg-gradient-to-r from-emerald-900 via-emerald-950 to-[#031d14] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-emerald-800">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300 block mb-1">
                Flexible Batch Formats
              </span>
              <h3 className="text-2xl font-black text-white">
                Learn Your Way: Offline, Online, or Hybrid
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
                Choose the training mode that harmonizes with your academic or professional timetable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-900/60 p-5 rounded-2xl border border-emerald-700/50 text-center">
                <div className="text-emerald-300 font-bold text-base mb-1">Offline Centers</div>
                <div className="text-xs text-emerald-100/90 leading-relaxed">
                  Interactive classroom batches in Mumbai with dedicated workstations, live mentor debugging, and group exercises.
                </div>
              </div>

              <div className="bg-emerald-900/60 p-5 rounded-2xl border border-emerald-700/50 text-center">
                <div className="text-emerald-300 font-bold text-base mb-1">Online Interactive</div>
                <div className="text-xs text-emerald-100/90 leading-relaxed">
                  Live cohort video sessions with real-time screen sharing, interactive prompt labs, and full session recordings.
                </div>
              </div>

              <div className="bg-emerald-900/60 p-5 rounded-2xl border border-emerald-700/50 text-center">
                <div className="text-emerald-300 font-bold text-base mb-1">Hybrid Training</div>
                <div className="text-xs text-emerald-100/90 leading-relaxed">
                  Combine the best of both: attend online concept lectures and visit our centers for hands-on project reviews.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: FINAL CTA SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#021810] via-[#042418] to-[#02160e] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 block mb-3">
            YOUR AI JOURNEY STARTS HERE
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight text-balance">
            Ready to Build Your Future with AI?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Whether you are a student, working professional, or business owner, take your first step towards understanding and using artificial intelligence.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/courses/college"
              className="px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore Our Courses</span>
              <ArrowRight className="w-4 h-4 text-emerald-950" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Contact Our Team
            </Link>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20courses%20at%20Mumbai%20AI%20Academia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 font-semibold text-xs sm:text-sm rounded-xl border border-emerald-600/40 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <p className="text-xs text-emerald-400/80 mt-8 font-medium">
            Offline batches in Mumbai · Live Online batches across India · Hybrid options available
          </p>

        </div>
      </section>

      {/* Interactive Video Preview Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="bg-[#031d14] border border-emerald-700/80 rounded-3xl max-w-2xl w-full p-6 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-emerald-300 hover:text-white rounded-full bg-emerald-900/60"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-2">
              Inside Mumbai AI Academia
            </h3>
            <p className="text-xs text-emerald-200/90 mb-4">
              Our interactive lab environments are built for live experimentation, collaborative prompting, and personal guidance.
            </p>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 relative">
              <img
                src={brandStoryImg}
                alt="Inside Mumbai AI Academia Learning Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mb-3 shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                <span className="text-base font-bold text-white">Live Classroom Preview</span>
                <span className="text-xs text-emerald-200 mt-1 max-w-sm">
                  Visit our center in Mumbai for a free 1-on-1 counseling demo and live AI lab tour!
                </span>
                <Link
                  to="/contact"
                  onClick={() => setVideoModalOpen(false)}
                  className="mt-4 px-5 py-2.5 bg-emerald-400 text-emerald-950 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-300"
                >
                  Book a Center Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
