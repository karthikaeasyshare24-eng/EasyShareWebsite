import { Link } from 'react-router-dom';
import { WHY_US_ITEMS, COACH_PROFILE, CONTACT_INFO } from '../data/coursesData';
import { 
  Trophy, 
  CheckCircle2, 
  User, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Target, 
  Lightbulb, 
  ShieldCheck 
} from 'lucide-react';

export default function AboutPage() {
  const steps = [
    { num: '01', title: 'LEARN', desc: 'Clear, jargon-free foundations of AI, prompting, and tools.' },
    { num: '02', title: 'PRACTICE', desc: 'Daily guided hands-on exercises on real ChatGPT, Gemini, and Claude interfaces.' },
    { num: '03', title: 'BUILD', desc: 'Working projects, automated sheets, and capstone applications.' },
    { num: '04', title: 'GROW', desc: 'Deploy skills into school academics, college placements, or workplace promotions.' },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/70 ring-4 ring-emerald-500/20 hover:scale-105 transition-transform duration-200 bg-white p-2 flex items-center justify-center">
              <img 
                src="/easy-ai-academia-logo.svg" 
                alt="Easy AI Academia Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Trophy className="w-3.5 h-3.5 text-emerald-300" />
            <span>Our Mission & Guidance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            🏆 Why Easy AI Academia?
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            "AI is not the future. AI is the skill you can start learning today." We bridge the gap between academic theory and real-world AI applications.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Offline Centers</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Online Interactive</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Training</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* The 4-Step Methodology */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase">
              Our Proven Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              LEARN → PRACTICE → BUILD → GROW
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Every course at Easy AI Academia follows this structured 4-step progression:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors"
              >
                <div className="text-3xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors absolute -right-2 -top-2">
                  {step.num}
                </div>
                <div className="relative">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    Step {step.num}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Full Checklist Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Core Benefits & Values
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Why Students & Professionals Choose Us
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              We remove the math-heavy jargon and focus exclusively on tools that make an immediate impact on your work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {WHY_US_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Coach (Profile Card) */}
        <div className="bg-gradient-to-br from-[#042116] via-[#062c1e] to-[#041a12] rounded-3xl text-white p-8 sm:p-12 shadow-2xl border border-emerald-900 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Placeholder Circular Avatar / Icon */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-emerald-500 via-green-400 to-teal-300 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#042116] flex flex-col items-center justify-center text-center p-4">
                  <User className="w-16 h-16 text-emerald-300" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 mt-1">
                    Coach
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-1 bg-emerald-500 text-slate-950 p-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 fill-slate-950" />
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
                Lead Mentor & Founder
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {COACH_PROFILE.name}
              </h3>

              <div className="text-sm font-semibold text-emerald-300 mt-1">
                {COACH_PROFILE.role}
              </div>

              <p className="text-sm sm:text-base text-emerald-100 mt-4 leading-relaxed font-normal italic bg-emerald-950/70 p-4 rounded-xl border border-emerald-800">
                "{COACH_PROFILE.bio}"
              </p>

              <div className="mt-6 space-y-2 text-xs sm:text-sm text-emerald-200">
                {COACH_PROFILE.experienceHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 justify-center md:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
                >
                  <span>Enroll Now With Coach</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </Link>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Rajeshwara%20Sir%2C%20I%20would%20like%20to%20know%20more%20about%20your%20upcoming%20batches.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-emerald-200 bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/80 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="text-center">
          <h4 className="text-xl font-bold text-slate-900">
            Have Questions or Need Direct Batch Timings?
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            We are here to help you pick the right track.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all active:scale-95"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
