import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { CourseItem } from '../types';
import { CONTACT_INFO } from '../data/coursesData';

interface CourseCardProps {
  course: CourseItem;
  highlight?: boolean;
  key?: string;
}

export default function CourseCard({ course, highlight = false }: CourseCardProps) {
  const encodedCourseTitle = encodeURIComponent(course.title);

  return (
    <div 
      className={`relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        highlight 
          ? 'border-emerald-500 shadow-emerald-100 shadow-lg ring-2 ring-emerald-500/20' 
          : 'border-slate-200/90 shadow-sm hover:border-emerald-300'
      }`}
    >
      {course.badge && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm">
            <Sparkles className="w-3 h-3 text-emerald-200" />
            {course.badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7">
        {/* Header: Title & Badges */}
        <div className="pt-2">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-medium">
              {course.subtitle}
            </p>
          )}
        </div>

        {/* Pricing & Duration Bar */}
        {(course.duration || course.fees) ? (
          <div className="mt-5 flex flex-wrap items-center gap-3 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/80">
            {course.duration && (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Duration: <strong className="text-slate-900">{course.duration}</strong></span>
              </div>
            )}
            {course.duration && course.fees && <span className="text-emerald-300">|</span>}
            {course.fees && (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span>Fees: <strong className="text-emerald-800 text-sm font-bold">{course.fees}</strong></span>
              </div>
            )}
          </div>
        ) : null}

        {/* Topics List */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
            <span>What You Will Learn</span>
            <span className="text-[11px] font-normal lowercase text-slate-400">({course.topics.length} core modules)</span>
          </h4>
          <ul className="space-y-2.5">
            {course.topics.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Includes / Bonus */}
        {course.includes && (
          <div className="mt-5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
            <span className="text-xs font-bold text-emerald-950 block">Includes:</span>
            <span className="text-xs text-emerald-800 font-medium">{course.includes}</span>
          </div>
        )}

        {/* Outcome / Goal Callout */}
        {course.outcome && (
          <div className="mt-5 p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-0.5">
              Target Outcome
            </span>
            <p className="text-xs text-emerald-900 font-medium leading-relaxed">
              {course.outcome}
            </p>
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl mt-4">
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-2.5">
          <Link
            to={`/contact?course=${encodedCourseTitle}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all hover:shadow hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20enrolling%20for%20${encodedCourseTitle}.%20Please%20share%20batch%20timings.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-200 rounded-xl transition-colors shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
        <div className="mt-2 text-center">
          <span className="text-[11px] text-slate-400 font-medium">Modes: Offline • Online • Hybrid</span>
        </div>
      </div>
    </div>
  );
}
