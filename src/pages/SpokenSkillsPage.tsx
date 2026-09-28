import { Link } from 'react-router-dom';
import { SPOKEN_COURSES, CONTACT_INFO } from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import { Languages, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpokenSkillsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Languages className="w-3.5 h-3.5 text-emerald-300" />
            <span>Communication & Fluency Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            🗣️ Spoken English & Spoken Hindi
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Technical brilliance deserves persuasive communication. Overcome hesitation, master conversational grammar, and speak with authority in academic interviews and workplace meetings.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Classroom Roleplays</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">1-on-1 Online Speaking Drills</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Format</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40 font-semibold">
              Live Mock Interviews
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Core Philosophy Callout */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Action-Oriented Conversational Training
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              "Learn to speak, not just study grammar." 80% of class time is dedicated to guided dialogues, impromptu speeches, situational roleplays, and vocabulary drills.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            <span>Book Free Demo Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Spoken Courses Grid: Side-by-side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SPOKEN_COURSES.map((course, idx) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              highlight={idx === 0}
            />
          ))}
        </div>

        {/* Combo Promo Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#042116] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
              Top Recommended Combination
            </span>
            <h3 className="text-xl font-bold text-white">
              Bundle AI + Spoken English For Just ₹3,999
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              15 Days intensive track covering AI Fundamentals + GenAI + Prompt Engineering + Spoken English.
            </p>
          </div>
          <Link
            to="/combos"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Explore Combo Bundles</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}
