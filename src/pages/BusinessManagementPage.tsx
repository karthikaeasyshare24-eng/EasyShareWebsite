import { Link } from 'react-router-dom';
import { BUSINESS_MANAGEMENT_COURSES } from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import { Briefcase, Sparkles, TrendingUp, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function BusinessManagementPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header Hero */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
            <span>Executive & Strategy Track</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            💼 Business Management
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Master commercial strategy, operations, high-converting digital marketing funnels, and scalable startup execution designed for entrepreneurs, managers, and business leaders.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Offline Campus Center</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Online Interactive</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Format</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40 font-semibold">
              Live Business Case Studies
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Industry Acceleration Highlight */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Commercial Acumen & Data-Driven Growth
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Every course combines corporate financial discipline, measurable marketing attribution (GA4 & Meta/Google ads), and venture-tested startup frameworks.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            <span>Ask Business Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {BUSINESS_MANAGEMENT_COURSES.map((course, idx) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              highlight={idx === 0}
            />
          ))}
        </div>

        {/* Executive Mentorship Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#042116] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Executive Business Guidance</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Looking for 1-on-1 Business Strategy or Corporate Training?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              Connect directly with Coach Rajeshwara Pandian to formulate tailored corporate training, startup roadmap acceleration, and executive upskilling.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Connect with Founder</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}
