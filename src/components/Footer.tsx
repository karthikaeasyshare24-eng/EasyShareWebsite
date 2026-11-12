import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MessageCircle, MapPin, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-100/90 border-t border-emerald-900">
      {/* Top Banner / Modes callout */}
      <div className="bg-[#06291e] border-b border-emerald-900/80 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-base">
                Offline | Online | Hybrid Training Modes Available
              </p>
              <p className="text-xs text-emerald-300/80">
                Flexible batch timings for school students, college attendees & working professionals.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Admission Desk</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shadow-lg shadow-emerald-950/40 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src="/easy-ai-academia-logo.svg" 
                  alt="Mumbai Ai Academia Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  Mumbai <span className="text-emerald-400">Ai</span> Academia
                </span>
                <span className="text-[10px] font-semibold text-emerald-300/90 tracking-wider uppercase -mt-0.5 block">
                  Learn • Build • Grow
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-200/90 leading-relaxed font-medium">
              Mumbai Ai Academia — Learn AI. Build Skills. Build Your Future.
            </p>
            <p className="text-xs text-emerald-300/70 leading-relaxed">
              Practical AI education & career skills for students, graduates & working professionals. Transform from an AI user into an AI creator.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-emerald-900 border border-emerald-800 rounded-full text-xs font-semibold text-emerald-300">
                Offline | Online | Hybrid
              </span>
            </div>
          </div>

          {/* Course Categories (All 8 Core Tracks) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-900 pb-2">
              Course Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/courses/school" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>School Students (5th–12th)</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/college" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>College Students & Degree</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/ai-coding" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>AI, Coding & GenAI</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/cybersecurity" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Cybersecurity & Ethical Hacking</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/data-science" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Data Science, ML & NLP</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/business-management" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Business Management</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/design-creative" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Design & Creative Technology</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/engineering-robotics" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Engineering & Robotics</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/pathways" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>More Pathways to Success</span>
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Working Professionals Bootcamp</span>
                </Link>
              </li>
              <li>
                <Link to="/spoken-skills" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Spoken Skills (Eng / Hindi)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Programs & About */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-900 pb-2">
              Specialized & Admissions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/projects" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Final-Year Project Assistance</span>
                </Link>
              </li>
              <li>
                <Link to="/combos" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Combo Programs (Save More)</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>About Mumbai Ai Academia</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">›</span>
                  <span>Enroll & Batch Counseling</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-900 pb-2">
              Admissions & Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.callPhone}`}
                  className="flex items-start gap-2.5 text-emerald-200/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white font-medium">{CONTACT_INFO.displayCallPhone}</span>
                    <span className="text-xs text-emerald-300/60">Call for Batch Timings & Syllabus</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-emerald-200/80 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white font-medium">WhatsApp Admission Desk</span>
                    <span className="text-xs text-emerald-300 font-mono">+{CONTACT_INFO.whatsappNumber}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2.5 text-emerald-200/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-white font-medium truncate">{CONTACT_INFO.email}</span>
                    <span className="text-xs text-emerald-300/60">Official Inquiries & Syllabus</span>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-emerald-300/70">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs text-emerald-300/70">
                  Classroom Centers & Live Interactive Virtual Studios
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p>
            © {currentYear} Mumbai Ai Academia. All rights reserved. "AI is not the future. AI is the skill you can start learning today."
          </p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400">Modes: Offline • Online • Hybrid</span>
            <Link to="/contact" className="hover:text-white transition-colors font-semibold">
              Admissions Open
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
