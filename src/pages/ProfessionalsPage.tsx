import { Link } from 'react-router-dom';
import { PROFESSIONAL_COURSE, CONTACT_INFO } from '../data/coursesData';
import { 
  Briefcase, 
  Clock, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  Sparkles, 
  Calendar, 
  Check, 
  FileSpreadsheet, 
  Mail, 
  Presentation, 
  Bot
} from 'lucide-react';

export default function ProfessionalsPage() {
  const encodedCourseTitle = encodeURIComponent(PROFESSIONAL_COURSE.title);

  const keyWorkflows = [
    { title: 'Email & Docs', icon: Mail, desc: 'Draft executive emails, proposals and SOPs in seconds' },
    { title: 'Excel & Data', icon: FileSpreadsheet, desc: 'Automate complex formulas, pivot analysis & data summaries' },
    { title: 'PowerPoint & Decks', icon: Presentation, desc: 'Generate complete slide outlines and visual graphics rapidly' },
    { title: 'Task Automation', icon: Bot, desc: 'Streamline repetitive daily work using intelligent AI agents' },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
            <span>Corporate & Career Upskilling</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            🤖 AI for Working Professionals
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Eliminate mundane busywork. Master high-impact generative AI tools to accelerate daily documentation, spreadsheet analysis, customer responses, and strategic presentations.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Offline Executive Sessions</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Live Virtual Evening Batches</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Mode</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40 font-semibold">
              Weekend Batches Designed for Busy Schedules
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Main Course Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {PROFESSIONAL_COURSE.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {PROFESSIONAL_COURSE.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1 max-w-xl">
                  {PROFESSIONAL_COURSE.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 shrink-0">
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Duration:</span>
                  </div>
                  <div className="text-slate-900 font-extrabold text-sm sm:text-base">
                    {PROFESSIONAL_COURSE.duration}
                  </div>
                </div>
                <span className="text-emerald-300">|</span>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>Fees:</span>
                  </div>
                  <div className="text-emerald-800 font-extrabold text-sm sm:text-base">
                    {PROFESSIONAL_COURSE.fees}
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Preview Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {keyWorkflows.map((flow, idx) => {
                const Icon = flow.icon;
                return (
                  <div key={idx} className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <Icon className="w-5 h-5 text-emerald-700 mb-1" />
                    <h4 className="text-xs font-bold text-slate-900">{flow.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{flow.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Topics: Learn to use AI for */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center justify-between">
                <span>Learn to use AI for (Hands-on Modules):</span>
                <span className="text-slate-400 font-normal">10 practical industry modules</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROFESSIONAL_COURSE.topics.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Goal Callout */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Primary Goal
              </span>
              <p className="text-lg font-extrabold text-emerald-950">
                "{PROFESSIONAL_COURSE.outcome}"
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Flexible Timings: <strong>Weekend Intensive</strong> or <strong>Weekday Evening Batches</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/contact?course=${encodedCourseTitle}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20a%20working%20professional%20interested%20in%20the%20AI%20Productivity%20Bootcamp.%20Please%20share%20batch%20timings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate / Team Training Inquiries */}
        <div className="mt-12 p-6 sm:p-8 bg-[#042116] text-white rounded-3xl border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
              Custom Group Training
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Corporate Training for Your Team?
            </h3>
            <p className="text-sm text-emerald-200/80 mt-1 max-w-xl">
              We deliver customized in-house and virtual bootcamps for companies, startups, and department teams.
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20inquiring%20about%20Corporate%20AI%20Training%20for%20my%20company%20team.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire for Corporate Team</span>
          </a>
        </div>
      </div>
    </div>
  );
}
