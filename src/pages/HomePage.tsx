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
  PhoneCall
} from 'lucide-react';
import { CONTACT_INFO, WHY_US_ITEMS } from '../data/coursesData';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  const whatWeOfferItems = [
    { title: 'AI & Generative AI Training', link: '/courses/college', icon: Brain, desc: 'Master foundational models & LLM capabilities' },
    { title: 'AI Tools & Prompt Engineering', link: '/professionals', icon: Sparkles, desc: 'Actionable prompting for ChatGPT, Claude & Gemini' },
    { title: 'AI Literacy for School Students', link: '/courses/school', icon: BookOpen, desc: 'Fun, safe AI concepts & study partner methods' },
    { title: 'AI Skills for College Students', link: '/courses/college', icon: GraduationCap, desc: 'Excel, Power BI, Python & portfolio applications' },
    { title: 'Final-Year AI Project Assistance', link: '/projects', icon: FolderGit2, desc: 'Concept, architecture, code, documentation & viva' },
    { title: 'Spoken English', link: '/spoken-skills', icon: Languages, desc: 'Workplace, interview & everyday conversational confidence' },
    { title: 'Spoken Hindi', link: '/spoken-skills', icon: Languages, desc: 'Everyday communication, vocabulary & travel fluency' },
    { title: 'Career & Interview Skills', link: '/combos', icon: Briefcase, desc: 'AI resume building, mock interviews & corporate readiness' },
    { title: 'Practical AI Projects', link: '/projects', icon: Code2, desc: 'Build working AI applications across real industries' },
    { title: 'Certificates & Mentorship', link: '/about', icon: Award, desc: 'Personal coaching by Coach Rajeshwara Pandian' },
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
                alt="Easy AI Academia Logo" 
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

      {/* Preview Strip: Short Teaser Cards */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Explore Our Programs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Programs Tailored For Every Learner
              </h2>
            </div>
            <Link
              to="/combos"
              className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>View All Combos & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {/* School card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  School Students
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mt-2.5">
                  AI Basics & Study Partner
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Turn AI into your homework and exam study partner. 5 to 7 days hands-on bootcamp.
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  From <strong className="text-emerald-800 text-sm">₹2,500</strong>
                </div>
              </div>
              <Link
                to="/courses/school"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
              >
                <span>Learn More →</span>
              </Link>
            </div>

            {/* College card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  College Students
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mt-2.5">
                  GenAI Foundation & Career
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Prompt engineering, AI + Excel, Power BI, APIs, and real resume portfolio building.
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  From <strong className="text-emerald-800 text-sm">₹2,999</strong>
                </div>
              </div>
              <Link
                to="/courses/college"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
              >
                <span>Learn More →</span>
              </Link>
            </div>

            {/* Final-Year Projects */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Final Year
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mt-2.5">
                  AI Project Assistance
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Idea to code, report, PPT, and viva preparation across 7 major engineering industries.
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  From <strong className="text-emerald-800 text-sm">₹15,000</strong>
                </div>
              </div>
              <Link
                to="/projects"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
              >
                <span>Learn More →</span>
              </Link>
            </div>

            {/* Professionals card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Working Pros
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mt-2.5">
                  Productivity Bootcamp
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Save hours daily: automate emails, Excel data analysis, slides, and meeting notes.
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  Only <strong className="text-emerald-800 text-sm">₹2,499</strong>
                </div>
              </div>
              <Link
                to="/professionals"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
              >
                <span>Learn More →</span>
              </Link>
            </div>

            {/* Combos card */}
            <div className="p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-600 text-white">
                  Value Combo
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mt-2.5">
                  AI + Career / English
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Dual skill mastery: Tech AI capabilities combined with spoken fluency and placement prep.
                </p>
                <div className="mt-3 text-xs font-semibold text-slate-900">
                  From <strong className="text-emerald-800 text-sm">₹3,999</strong>
                </div>
              </div>
              <Link
                to="/combos"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950"
              >
                <span>Learn More →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Easy AI Academia? (Short version) */}
      <section className="py-16 bg-[#042116] text-white px-4 sm:px-6 lg:px-8 border-t border-emerald-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-extrabold tracking-widest text-emerald-300 uppercase mb-2">
              LEARN → PRACTICE → BUILD → GROW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Easy AI Academia?
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
