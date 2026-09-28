import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PROJECT_ASSISTANCE_PROGRAM, 
  PROJECT_INDUSTRIES, 
  CONTACT_INFO 
} from '../data/coursesData';
import { 
  FolderGit2, 
  Clock, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Layers, 
  Info,
  Check
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const encodedTitle = encodeURIComponent(PROJECT_ASSISTANCE_PROGRAM.title);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>Academic Capstone & Final-Year Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            🚀 Final-Year Project Assistance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Turn your final-year project into the crowning achievement of your degree. Comprehensive assistance from concept approval and dataset curation to working code, report formatting, and viva rehearsal.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">In-Person Lab Sessions</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Remote Code Reviews</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Guided Delivery</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Main Program Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-14">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Capstone Mentorship
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {PROJECT_ASSISTANCE_PROGRAM.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1 max-w-xl">
                  {PROJECT_ASSISTANCE_PROGRAM.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 shrink-0">
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Duration:</span>
                  </div>
                  <div className="text-slate-900 font-extrabold text-sm sm:text-base">
                    {PROJECT_ASSISTANCE_PROGRAM.duration}
                  </div>
                </div>
                <span className="text-emerald-300">|</span>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>Fees:</span>
                  </div>
                  <div className="text-emerald-800 font-extrabold text-sm sm:text-base">
                    {PROJECT_ASSISTANCE_PROGRAM.fees}
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist / What is included */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
                <span>Complete Project Lifecycle Support:</span>
                <span className="text-slate-400 font-normal">9 Critical Checkpoints</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {PROJECT_ASSISTANCE_PROGRAM.checklist.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Action Row */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Custom stream mapping for CS, IT, ECE, Data Science, AI & MBA</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/contact?course=${encodedTitle}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
                >
                  <span>Get Project Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20looking%20for%20Final-Year%20AI%20Project%20Assistance.%20My%20department%20is%3A%20`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                  title="WhatsApp Project Query"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Projects Showcase (7 Industries, 3 Projects each) */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Cross-Disciplinary AI Domain Implementations
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sample Projects Across 7 Major Industries
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Explore our vetted project themes. We adapt the complexity to meet your university guidelines.
            </p>
          </div>

          {/* Industry Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6 max-w-4xl mx-auto">
            {PROJECT_INDUSTRIES.map((ind, idx) => (
              <button
                key={ind.name}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Selected Domain
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  {PROJECT_INDUSTRIES[activeTab].name} AI Capstones
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                3 Standard Prototypes Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROJECT_INDUSTRIES[activeTab].projects.map((proj, pIdx) => (
                <div 
                  key={pIdx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-200"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center mb-3">
                      0{pIdx + 1}
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm leading-snug">
                      {proj}
                    </h5>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Complete end-to-end dataset pipeline, ML model tuning, and responsive UI frontend.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>Includes Viva QA Deck</span>
                    <span className="text-emerald-700 font-bold">Ready to Adapt</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explicit Prompt Note */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3 text-emerald-950">
            <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              <strong>Important Note:</strong> Projects are selected according to the student's stream, departmental preferences, and university academic requirements. Custom problem statements are warmly welcomed.
            </p>
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#042116] text-white text-center border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold">
                Have an IEEE Paper or Custom Problem Statement?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                Share your base paper with our mentors for feasibility review within 24 hours.
              </p>
            </div>

            <Link
              to="/contact?course=AI%20Project%20Guidance%20Program"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Submit Project Requirement</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
