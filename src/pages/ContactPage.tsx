import React, { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CONTACT_INFO, 
  ALL_COURSES_SELECT 
} from '../data/coursesData';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  User,
  BookOpen
} from 'lucide-react';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledCourse = searchParams.get('course') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    mode: 'Hybrid',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledCourse) {
      // Find matching course or set as custom text
      const matched = ALL_COURSES_SELECT.find(c => 
        c.toLowerCase().includes(prefilledCourse.toLowerCase()) || 
        prefilledCourse.toLowerCase().includes(c.split('(')[0].trim().toLowerCase())
      );
      if (matched) {
        setFormData(prev => ({ ...prev, course: matched }));
      } else {
        setFormData(prev => ({ ...prev, course: prefilledCourse }));
      }
    } else if (!formData.course && ALL_COURSES_SELECT.length > 0) {
      setFormData(prev => ({ ...prev, course: ALL_COURSES_SELECT[0] }));
    }
  }, [prefilledCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number so our counselor can reach you.');
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hi Mumbai Ai Academia,\nMy name is ${formData.name || '[My Name]'}.\nPhone: ${formData.phone || '[My Phone]'}.\nI am interested in: ${formData.course || 'AI Training'}.\nPreferred Mode: ${formData.mode}.\nMessage: ${formData.message || 'Please share details and batch timings.'}`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getMailtoUrl = () => {
    const subject = `Admission Inquiry: ${formData.course || 'Mumbai Ai Academia'}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nTraining Mode: ${formData.mode}\n\nMessage:\n${formData.message}`;
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/70 ring-4 ring-emerald-500/20 hover:scale-105 transition-transform duration-200 bg-white p-2 flex items-center justify-center">
              <img 
                src="/easy-ai-academia-logo.svg" 
                alt="Mumbai Ai Academia Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>Admissions & Counseling Open</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            📞 Enroll / Enquire Now
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward mastering real-world AI. Fill in your details below or connect directly on WhatsApp with Coach Rajeshwara Pandian.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Offline Centers</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Online Live Batches</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Training</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Direct Contact Information
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Get In Touch Directly
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Quick response within 15 minutes during academic working hours.
              </p>
            </div>

            {/* Call / WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Call Helpline & Admissions
                  </span>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {CONTACT_INFO.displayCallPhone}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    WhatsApp & Support: <span className="font-semibold text-emerald-800">{CONTACT_INFO.displayAlternatePhone}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Direct line for student counseling, batch schedules, fees & project guidance.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${CONTACT_INFO.callPhone}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Click to Call (9326278398)</span>
                    </a>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp (8828481500)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5 truncate">
                    {CONTACT_INFO.email}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Send university syllabus, corporate RFPs, or project documentation.
                  </p>

                  <div className="mt-4">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send an Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Modes Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Training Delivery Modes
                  </span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">
                    Offline | Online | Hybrid
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Offline:</strong> In-person classroom hands-on sessions.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Online:</strong> Live interactive screen-share bootcamps.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Hybrid:</strong> Flexible mix of lab practice & remote classes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your enquiry for <strong>{formData.course}</strong> has been received. Our counselor will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>

                  <div className="mt-8 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
                    <div><strong>Course:</strong> {formData.course}</div>
                    <div><strong>Training Mode:</strong> {formData.mode}</div>
                    {formData.message && <div><strong>Your Note:</strong> {formData.message}</div>}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      Quick Admission Form
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      Enroll or Inquire for Upcoming Batches
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      No commitment required. We will share the batch schedule, syllabus PDF, and fee breakdown.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                    />
                  </div>

                  {/* Phone & Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Training Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 bg-white transition-all"
                      >
                        <option value="Offline">Offline (Classroom)</option>
                        <option value="Online">Online (Live Virtual)</option>
                        <option value="Hybrid">Hybrid (Classroom + Online)</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 bg-white transition-all font-medium"
                    >
                      {ALL_COURSES_SELECT.map((c, idx) => (
                        <option key={idx} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batch timings, group discounts, university requirements, or custom assistance..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Direct WhatsApp Alternative */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </button>

                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                      title="Send this info straight to WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    We respect your privacy. No spam. You will only receive relevant batch information from Mumbai Ai Academia.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
