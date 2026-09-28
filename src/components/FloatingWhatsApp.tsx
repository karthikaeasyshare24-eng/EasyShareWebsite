import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 print:hidden">
      {/* Speech bubble tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-slate-900 shadow-2xl rounded-2xl p-3 max-w-xs border border-slate-100 hidden sm:block animate-bounce duration-1000">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full flex items-center justify-center text-xs shadow"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-900">Need Guidance?</span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 leading-snug">
            Chat with our AI Coach on WhatsApp for fees, batches & syllabus details!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Easy AI Academia on WhatsApp"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
