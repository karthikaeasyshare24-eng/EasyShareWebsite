import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Languages, 
  FolderGit2, 
  Layers, 
  Users, 
  Mail,
  Code2,
  ShieldCheck,
  Database,
  Compass,
  TrendingUp,
  Palette,
  Cpu
} from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const courseSublinks = [
    { name: 'School Students', path: '/courses/school', icon: BookOpen, desc: 'Class 5th - 12th AI literacy & study partner' },
    { name: 'College Students', path: '/courses/college', icon: GraduationCap, desc: 'GenAI foundation & career project mentorship' },
    { name: 'Working Professionals', path: '/professionals', icon: Briefcase, desc: 'AI productivity bootcamp & task automation' },
    { name: 'AI, Coding & GenAI', path: '/courses/ai-coding', icon: Code2, desc: 'Python foundations, agentic AI, RAG & LLMs' },
    { name: 'Cybersecurity & Ethical Hacking', path: '/courses/cybersecurity', icon: ShieldCheck, desc: 'VAPT, SOC monitoring, network & cloud security' },
    { name: 'Data Science, ML & NLP', path: '/courses/data-science', icon: Database, desc: 'Machine learning, deep learning, NLP, CV & analytics' },
    { name: 'Business Management', path: '/courses/business-management', icon: TrendingUp, desc: 'Operations, digital marketing & startup strategy' },
    { name: 'Design & Creative Technology', path: '/courses/design-creative', icon: Palette, desc: 'UI/UX Figma, motion graphics & 3D creative tools' },
    { name: 'Engineering & Robotics', path: '/courses/engineering-robotics', icon: Cpu, desc: 'Arduino robotics, IoT & CAD, drone flight control' },
    { name: 'More Pathways to Success', path: '/courses/pathways', icon: Compass, desc: 'Investment banking, markets, tax & business' },
    { name: 'Spoken Skills (Eng / Hindi)', path: '/spoken-skills', icon: Languages, desc: 'Spoken English & everyday Hindi fluency' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-emerald-950 text-white shadow-xl border-b border-emerald-900">
      {/* Top micro-bar for modes & quick call */}
      <div className="bg-[#052117] text-xs text-emerald-100/90 py-1.5 px-4 border-b border-emerald-900/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Modes:
            </span>
            <span className="text-emerald-100 font-medium">Offline | Online | Hybrid Training</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.callPhone}`}
              className="flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {CONTACT_INFO.displayCallPhone}</span>
            </a>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <a 
              href={CONTACT_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/30" />
              <span>WhatsApp: +{CONTACT_INFO.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-2xl bg-white p-1 shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="/easy-ai-academia-logo.svg" 
                alt="Mumbai Ai Academia Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                <span>Mumbai</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Ai</span>
                <span>Academia</span>
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-emerald-300/90 -mt-0.5 tracking-wider uppercase text-[10px]">
                Learn • Build • Grow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname.startsWith('/courses') || location.pathname === '/professionals' || location.pathname === '/spoken-skills'
                    ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                    : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
                }`}
                aria-expanded={coursesDropdownOpen}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-emerald-300' : 'text-emerald-400'}`} />
              </button>

              {coursesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1 w-80 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto"
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-300/80 border-b border-emerald-800/80">
                    All Training Programs
                  </div>
                  <div className="py-1 space-y-1">
                    {courseSublinks.map((sub) => {
                      const Icon = sub.icon;
                      const isSubActive = location.pathname === sub.path;
                      return (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                            isSubActive 
                              ? 'bg-emerald-900 text-white border border-emerald-600/50' 
                              : 'text-emerald-100 hover:bg-emerald-900/60 hover:text-white'
                          }`}
                        >
                          <div className={`p-2 rounded-md ${isSubActive ? 'bg-white text-emerald-900' : 'bg-emerald-900 text-emerald-300'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm leading-snug">{sub.name}</div>
                            <div className="text-xs text-emerald-300/80 leading-tight mt-0.5">{sub.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/projects')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/spoken-skills"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/spoken-skills')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              Spoken Skills
            </Link>

            <Link
              to="/professionals"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/professionals')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              For Professionals
            </Link>

            <Link
              to="/combos"
              className={`px-3 py-2 rounded-lg transition-colors relative ${
                isActive('/combos')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              Combos
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] font-bold bg-white text-emerald-950 rounded-full shadow-sm">
                HOT
              </span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/about')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'bg-emerald-900 text-white font-bold shadow-inner border border-emerald-700/60'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-800/80 border border-emerald-600/40 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-white hover:bg-emerald-50 rounded-lg shadow-md shadow-emerald-950/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-bold text-emerald-950 bg-white rounded-lg shadow-sm"
            >
              Enroll
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-100 hover:text-white hover:bg-emerald-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950/98 border-t border-emerald-900 px-4 pt-3 pb-6 space-y-1 shadow-2xl max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-lg text-base font-medium ${
              location.pathname === '/' ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            Home
          </Link>

          <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-emerald-300">
            Courses by Category
          </div>

          {courseSublinks.map((sub) => {
            const Icon = sub.icon;
            const isSubActive = location.pathname === sub.path;
            return (
              <Link
                key={sub.path}
                to={sub.path}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
                  isSubActive ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>{sub.name}</span>
              </Link>
            );
          })}

          <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-emerald-300">
            Guidance & Offers
          </div>

          <Link
            to="/projects"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
              location.pathname === '/projects' ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <FolderGit2 className="w-4 h-4 text-emerald-300" />
            <span>Final-Year Project Assistance</span>
          </Link>

          <Link
            to="/combos"
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
              location.pathname === '/combos' ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-emerald-300" />
              <span>Combo Programs</span>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-white text-emerald-950 rounded-full">Save More</span>
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
              location.pathname === '/about' ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-300" />
            <span>About / Why Us / Coach</span>
          </Link>

          <Link
            to="/contact"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
              location.pathname === '/contact' ? 'bg-emerald-800 text-white font-semibold' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <Mail className="w-4 h-4 text-emerald-300" />
            <span>Contact & Enroll</span>
          </Link>

          <div className="pt-4 border-t border-emerald-900 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.callPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-900/80 hover:bg-emerald-900 text-white font-semibold text-sm transition-colors border border-emerald-700/60"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call: {CONTACT_INFO.displayCallPhone}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (+91 {CONTACT_INFO.whatsappNumber})</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-sm tracking-wide uppercase transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
