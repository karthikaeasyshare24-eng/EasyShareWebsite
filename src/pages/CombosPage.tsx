import { Link } from 'react-router-dom';
import { COMBO_PROGRAMS, CONTACT_INFO } from '../data/coursesData';
import { 
  Sparkles, 
  Clock, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Layers, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';

export default function CombosPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Flame className="w-3.5 h-3.5 text-emerald-300" />
            <span>Best Value Bundles</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ⭐ Popular Combo Programs
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Maximize your career impact and save up to 40% on tuition fees by bundling AI technical competence with spoken fluency, career preparation, or final-year project guidance.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Offline Centers</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Live Virtual Interactive</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Format</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40 font-semibold">
              Includes Dual Verification Certificates
            </span>
          </div>
        </div>
      </div>

      {/* 3-Column Comparison Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {COMBO_PROGRAMS.map((combo) => {
            const isPopular = combo.isPopular;
            const encodedTitle = encodeURIComponent(combo.title);

            return (
              <div
                key={combo.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-950/10 lg:-translate-y-3'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      Most Popular Choice
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="pt-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {combo.title}
                    </h3>
                    {combo.highlightText && (
                      <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                        {combo.highlightText}
                      </p>
                    )}
                  </div>

                  {/* Pricing Box */}
                  <div className="mt-6 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-900">
                        {combo.fees}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 mt-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Duration: {combo.duration}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included in this Combo:
                    </h4>
                    <ul className="space-y-3">
                      {combo.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-6 bg-slate-50/40 rounded-b-3xl">
                  <div className="pt-4 flex flex-col gap-2.5">
                    <Link
                      to={`/contact?course=${encodedTitle}`}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 ${
                        isPopular
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Enroll in {combo.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodedTitle}%20Combo%20Program.%20Please%20share%20the%20batch%20schedule.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Batch Inquiry</span>
                    </a>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-[11px] text-slate-400 font-medium">Modes: Offline • Online • Hybrid</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison Bottom Assurance */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-center">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Transparent Pricing & Flexible Rescheduling</h4>
              <p className="text-xs text-slate-500">No hidden examination fees. Missed classes can be backed up in online or hybrid sessions.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Custom Combination? Ask Us
          </Link>
        </div>
      </div>
    </div>
  );
}
