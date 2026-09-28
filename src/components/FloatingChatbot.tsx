import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  PhoneCall, 
  MessageCircle, 
  RotateCcw, 
  ChevronRight,
  GraduationCap,
  Briefcase,
  FolderGit2,
  BookOpen,
  Layers,
  Phone
} from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';
import botAvatarImg from '../assets/images/counselor-bot.png';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  actions?: Array<{
    label: string;
    type: 'link' | 'tel' | 'whatsapp';
    url: string;
  }>;
  time: string;
}

const QUICK_PROMPTS = [
  { label: '🎓 College & Placements', query: 'What courses are available for college students and graduates?' },
  { label: '🏫 School Students', query: 'Tell me about AI courses for school kids (grades 6-12).' },
  { label: '💼 Working Professionals', query: 'What AI tools will I learn in the Professionals bootcamp?' },
  { label: '🚀 Final-Year Projects', query: 'How do you assist with final-year academic projects?' },
  { label: '🗣️ Spoken English & Hindi', query: 'What are the fees and duration for spoken communication?' },
  { label: '⭐ Combo Bundles & Fees', query: 'Show me all course fees and combo bundle discounts.' },
  { label: '📞 Call or WhatsApp Helpline', query: 'How can I contact admissions or Coach Rajeshwara Pandian?' }
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Hello! I am your **Easy AI Academia Counselor**.\n\nI can assist you with:\n• Course details, syllabus & eligibility\n• Tuition fees & combo discounts\n• Final-year project guidance & viva prep\n• Batch timings & training modes (Offline / Online / Hybrid)\n\nWhat would you like to explore today?",
      actions: [
        { label: 'View College Tracks', type: 'link', url: '/courses/college' },
        { label: 'Final-Year Projects', type: 'link', url: '/projects' },
        { label: `Call: ${CONTACT_INFO.callPhone}`, type: 'tel', url: `tel:${CONTACT_INFO.callPhone}` }
      ],
      time: 'Just now'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, messages, isLoading]);

  // Client-side knowledge engine fallback in case the API route is unreachable
  const getClientFallbackResponse = (query: string): { text: string; actions?: ChatMessage['actions'] } => {
    const q = query.toLowerCase();

    if (q.includes('school') || q.includes('kid') || q.includes('child') || q.includes('class 6') || q.includes('grade')) {
      return {
        text: "🏫 **Courses for School Students (Grades 6–12):**\n\n" +
          "1. **AI Basics for School Students**\n" +
          "   • Fee: ₹2,500 | Duration: 5–7 Days\n" +
          "   • Safe prompting, research habits, creative image generation, ethics.\n\n" +
          "2. **AI Study Partner & Creative Skills**\n" +
          "   • Fee: ₹10,000 | Duration: 1 Month\n" +
          "   • 24/7 personal tutor for Math, Science, presentations & mini coding.\n\n" +
          "Modes: Offline classroom lab, live virtual, or hybrid.",
        actions: [
          { label: 'Explore School Courses', type: 'link', url: '/courses/school' },
          { label: 'WhatsApp Admission', type: 'whatsapp', url: CONTACT_INFO.whatsappUrl }
        ]
      };
    }

    if (q.includes('college') || q.includes('engineering') || q.includes('placement') || q.includes('graduate') || q.includes('bca') || q.includes('mca') || q.includes('b.tech') || q.includes('btech')) {
      return {
        text: "🎓 **Programs for College Students & Job Seekers:**\n\n" +
          "1. **Generative AI Foundations & Productivity**\n" +
          "   • Fee: ₹2,999 | Duration: 7–10 Days\n" +
          "   • Prompt engineering, resume crafting, research, Excel data analysis.\n\n" +
          "2. **AI Career & Project Mentor Program**\n" +
          "   • Fee: ₹7,999 | Duration: 1 Month\n" +
          "   • Portfolio project, placement preparation, mock interviews & Git.\n\n" +
          "⭐ **Recommended Combo:** GenAI Foundation + Placement Prep for **₹4,999** (save 40%)!",
        actions: [
          { label: 'Explore College Courses', type: 'link', url: '/courses/college' },
          { label: 'View Combo Bundles', type: 'link', url: '/combos' }
        ]
      };
    }

    if (q.includes('project') || q.includes('final year') || q.includes('capstone') || q.includes('viva') || q.includes('ieee') || q.includes('synopsis')) {
      return {
        text: "🚀 **Final-Year Project Assistance (₹15,000 onwards | 7–15 Days):**\n\n" +
          "Complete end-to-end guidance for Engineering, MCA, BCA & M.Sc:\n" +
          "• Idea selection & problem statement formulation\n" +
          "• AI tool & architecture setup\n" +
          "• Working code & model implementation\n" +
          "• Complete university documentation & IEEE paper styling\n" +
          "• Presentation deck (PPT) + Mock viva voce practice\n\n" +
          "Domains: Healthcare, Education, E-commerce, Agriculture, Security & Finance.",
        actions: [
          { label: 'View Project Details', type: 'link', url: '/projects' },
          { label: `Call: ${CONTACT_INFO.callPhone}`, type: 'tel', url: `tel:${CONTACT_INFO.callPhone}` }
        ]
      };
    }

    if (q.includes('professional') || q.includes('working') || q.includes('corporate') || q.includes('excel') || q.includes('office') || q.includes('job')) {
      return {
        text: "💼 **AI for Working Professionals (₹2,499 | Weekend Intensive / 4 Days):**\n\n" +
          "Learn to automate daily documentation and analysis:\n" +
          "• Fast executive emails, memos & documentation\n" +
          "• Complex Excel formulas, pivot tables & analysis\n" +
          "• High-impact slide decks & presentations\n" +
          "• Task automation using intelligent AI agents\n\n" +
          "Designed specifically for working schedules (weekends or evening batches).",
        actions: [
          { label: 'Explore Professionals Track', type: 'link', url: '/professionals' },
          { label: 'Enroll Now', type: 'link', url: '/contact' }
        ]
      };
    }

    if (q.includes('spoken') || q.includes('english') || q.includes('hindi') || q.includes('communication') || q.includes('speaking')) {
      return {
        text: "🗣️ **Spoken Communication Programs (15 Days):**\n\n" +
          "1. **Spoken English Mastery** (₹3,000 | 15 Days)\n" +
          "   • Remove hesitation, master corporate vocabulary & interview Q&As.\n\n" +
          "2. **Spoken Hindi Fluency** (₹2,500 | 15 Days)\n" +
          "   • Conversational fluency for non-native speakers in daily life & workplace.\n\n" +
          "⭐ **Combo Deal:** AI Basics + Spoken English for just **₹3,999**!",
        actions: [
          { label: 'View Spoken Skills', type: 'link', url: '/spoken-skills' },
          { label: 'Enroll for ₹3,000', type: 'link', url: '/contact' }
        ]
      };
    }

    if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('combo') || q.includes('discount')) {
      return {
        text: "💰 **Tuition Fees & Best-Value Combos:**\n\n" +
          "• School AI Basics: **₹2,500** | Study Partner: **₹10,000**\n" +
          "• College GenAI Foundation: **₹2,999** | Career Mentor: **₹7,999**\n" +
          "• Working Professionals Bootcamp: **₹2,499**\n" +
          "• Spoken English: **₹3,000** | Spoken Hindi: **₹2,500**\n" +
          "• Final-Year Project Assistance: **₹15,000 onwards**\n\n" +
          "⭐ **Popular Combos:**\n" +
          "• AI + Spoken English: **₹3,999**\n" +
          "• AI + Placement Prep: **₹4,999**\n" +
          "• AI + Final Year Capstone: **₹6,999 onwards**",
        actions: [
          { label: 'View All Combos', type: 'link', url: '/combos' },
          { label: 'Contact Admissions', type: 'link', url: '/contact' }
        ]
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('whatsapp') || q.includes('number') || q.includes('helpline') || q.includes('reach')) {
      return {
        text: "📞 **Easy AI Academia Official Contact:**\n\n" +
          `• **Calling Helpline:** +91 ${CONTACT_INFO.callPhone} (Direct Line)\n` +
          `• **WhatsApp Admissions:** +91 ${CONTACT_INFO.whatsappNumber}\n` +
          `• **Email:** ${CONTACT_INFO.email}\n` +
          "• **Lead Coach:** Rajeshwara Pandian (Founder & Lead Mentor)\n\n" +
          "You can call right now or send a WhatsApp message to book a seat!",
        actions: [
          { label: `Call: ${CONTACT_INFO.callPhone}`, type: 'tel', url: `tel:${CONTACT_INFO.callPhone}` },
          { label: 'Chat on WhatsApp', type: 'whatsapp', url: CONTACT_INFO.whatsappUrl }
        ]
      };
    }

    if (q.includes('coach') || q.includes('teacher') || q.includes('trainer') || q.includes('rajeshwara')) {
      return {
        text: "👨‍🏫 **About Coach Rajeshwara Pandian:**\n\n" +
          "• **Lead Mentor & Founder**, Easy AI Academia\n" +
          "• **Credentials:** AI Literacy Coach | Career Coach | Business AI Trainer\n" +
          "• **Experience:** 15+ years of real-world coaching\n" +
          "• **Philosophy:** LEARN → PRACTICE → BUILD → GROW. Practical hands-on training with zero confusing jargon!",
        actions: [
          { label: 'Read Coach Bio', type: 'link', url: '/about' },
          { label: 'Talk to Coach', type: 'whatsapp', url: CONTACT_INFO.whatsappUrl }
        ]
      };
    }

    return {
      text: "Thank you for reaching out! At Easy AI Academia, we offer practical courses across:\n\n" +
        "• 🎓 **College Students** (GenAI Foundations ₹2,999 & Career Mentor ₹7,999)\n" +
        "• 🏫 **School Students** (AI Basics ₹2,500 & Study Partner ₹10,000)\n" +
        "• 💼 **Working Professionals** (AI Productivity Bootcamp ₹2,499)\n" +
        "• 🚀 **Final-Year Project Assistance** (₹15,000 onwards)\n" +
        "• 🗣️ **Spoken English & Hindi** (from ₹2,500)\n\n" +
        "Would you like details on a specific course or batch timings?",
      actions: [
        { label: 'Explore Courses', type: 'link', url: '/courses/college' },
        { label: `Call Helpline: ${CONTACT_INFO.callPhone}`, type: 'tel', url: `tel:${CONTACT_INFO.callPhone}` }
      ]
    };
  };

  const handleSend = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const newMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: trimmed,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for the server
      const history = messages.slice(-5).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history })
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          // Determine contextual quick action buttons based on content
          const lowerReply = data.reply.toLowerCase();
          const dynamicActions: ChatMessage['actions'] = [];

          if (lowerReply.includes('college')) {
            dynamicActions.push({ label: 'College Courses', type: 'link', url: '/courses/college' });
          }
          if (lowerReply.includes('school')) {
            dynamicActions.push({ label: 'School Courses', type: 'link', url: '/courses/school' });
          }
          if (lowerReply.includes('project')) {
            dynamicActions.push({ label: 'Project Assistance', type: 'link', url: '/projects' });
          }
          if (lowerReply.includes('combo')) {
            dynamicActions.push({ label: 'View Combos', type: 'link', url: '/combos' });
          }
          if (lowerReply.includes('professional')) {
            dynamicActions.push({ label: 'Professionals Bootcamp', type: 'link', url: '/professionals' });
          }
          if (lowerReply.includes('spoken') || lowerReply.includes('english')) {
            dynamicActions.push({ label: 'Spoken Skills', type: 'link', url: '/spoken-skills' });
          }

          dynamicActions.push({
            label: `Call: ${CONTACT_INFO.callPhone}`,
            type: 'tel',
            url: `tel:${CONTACT_INFO.callPhone}`
          });

          setMessages((prev) => [
            ...prev,
            {
              id: `bot-${Date.now()}`,
              sender: 'bot',
              text: data.reply,
              actions: dynamicActions.slice(0, 3),
              time: 'Just now'
            }
          ]);
          setIsLoading(false);
          return;
        }
      }

      // If server returned non-200 or empty, use fallback
      const fallback = getClientFallbackResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fallback.text,
          actions: fallback.actions,
          time: 'Just now'
        }
      ]);
    } catch {
      // Network or offline fallback
      const fallback = getClientFallbackResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fallback.text,
          actions: fallback.actions,
          time: 'Just now'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "👋 Chat reset! I am ready to help you with courses, fees, project guidance, or batch dates. What would you like to know?",
        actions: [
          { label: 'View College Tracks', type: 'link', url: '/courses/college' },
          { label: 'Final-Year Projects', type: 'link', url: '/projects' },
          { label: `Call: ${CONTACT_INFO.callPhone}`, type: 'tel', url: `tel:${CONTACT_INFO.callPhone}` }
        ],
        time: 'Just now'
      }
    ]);
  };

  const formatMessageText = (text: string) => {
    // Parse basic markdown: bold **text**, bullets, and linebreaks
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Check for bullet lines
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
      const cleanLine = isBullet ? line.trim().replace(/^[•-]\s*/, '') : line;

      // Simple parser for **bold** text
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const parsedContent = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-slate-950">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start gap-1.5 ml-1 my-0.5">
            <span className="text-emerald-700 font-bold">•</span>
            <span>{parsedContent}</span>
          </div>
        );
      }

      return (
        <div key={idx} className={line.trim() === '' ? 'h-2' : 'my-0.5'}>
          {parsedContent}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Chatbot Trigger Button (In place of Floating WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Subtle proactive hint bubble (shown initially until clicked) */}
        {!isOpen && !hasPrompted && (
          <div className="mb-3 hidden sm:flex items-center gap-2 bg-[#042116] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-800 animate-bounce">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">
              Have questions? Ask our <strong>AI Counselor</strong>!
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(true);
              }}
              className="text-emerald-300 hover:text-white p-0.5 ml-1"
              aria-label="Dismiss hint"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasPrompted(true);
          }}
          className={`relative group flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
            isOpen
              ? 'bg-slate-900 text-white rotate-90 hover:bg-slate-800 p-4'
              : 'bg-white hover:scale-105 active:scale-95 shadow-emerald-900/40 ring-4 ring-emerald-500/30 p-2'
          }`}
          aria-label={isOpen ? 'Close Chatbot' : 'Open AI Academia Chatbot'}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg ring-2 ring-emerald-400/50 bg-[#022819]">
                <img 
                  src={botAvatarImg} 
                  alt="Easy AI Counselor" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Online pulsing indicator positioned outside overflow-hidden */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 z-10 pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white shadow-xs"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[calc(100vh-120px)] flex flex-col bg-white rounded-3xl shadow-2xl border border-emerald-900/15 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          role="dialog"
          aria-label="Easy AI Academia Virtual Counselor"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#042116] to-[#062c1e] text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-900 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden shadow-md ring-2 ring-emerald-400/50 shrink-0 bg-[#022819]">
                  <img 
                    src={botAvatarImg} 
                    alt="Easy AI Counselor" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#042116] rounded-full z-10"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                    Easy AI Counselor
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200/80">
                  Online • Institute & Course Guide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-2 text-emerald-300 hover:text-white hover:bg-emerald-900/60 rounded-xl transition-colors"
                title="Reset Conversation"
                aria-label="Reset Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-emerald-300 hover:text-white hover:bg-emerald-900/60 rounded-xl transition-colors"
                title="Close Chat"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Pills Bar */}
          <div className="bg-emerald-50/80 border-b border-emerald-100 px-3 py-2 overflow-x-auto flex gap-1.5 scrollbar-none shrink-0">
            {QUICK_PROMPTS.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.query)}
                className="shrink-0 px-2.5 py-1 bg-white hover:bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-[11px] font-semibold rounded-full shadow-2xs transition-colors"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs sm:text-sm">
            {messages.map((m) => {
              const isUser = m.sender === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <img 
                      src={botAvatarImg} 
                      alt="AI Bot" 
                      className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 shadow-2xs ring-1 ring-emerald-300/40 bg-[#022819]" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[85%]`}>
                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed shadow-2xs ${
                        isUser
                          ? 'bg-emerald-600 text-white rounded-br-xs'
                          : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                      }`}
                    >
                      {isUser ? (
                        <div>{m.text}</div>
                      ) : (
                        formatMessageText(m.text)
                      )}
                    </div>

                  {/* Context Actions (if available for bot message) */}
                  {!isUser && m.actions && m.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.actions.map((act, aIdx) => {
                        if (act.type === 'link') {
                          return (
                            <Link
                              key={aIdx}
                              to={act.url}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
                            >
                              <span>{act.label}</span>
                              <ChevronRight className="w-3 h-3 text-emerald-600" />
                            </Link>
                          );
                        }

                        if (act.type === 'tel') {
                          return (
                            <a
                              key={aIdx}
                              href={act.url}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
                            >
                              <Phone className="w-3 h-3 text-emerald-400" />
                              <span>{act.label}</span>
                            </a>
                          );
                        }

                        if (act.type === 'whatsapp') {
                          return (
                            <a
                              key={aIdx}
                              href={act.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>{act.label}</span>
                            </a>
                          );
                        }

                        return null;
                      })}
                    </div>
                  )}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 p-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="flex gap-1 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Direct Connect Footnote */}
          <div className="bg-slate-100/90 border-t border-slate-200/80 px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-semibold text-slate-700">Instant Helpline:</span>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT_INFO.callPhone}`}
                className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold"
              >
                <PhoneCall className="w-3 h-3 text-emerald-600" />
                <span>Call {CONTACT_INFO.callPhone}</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold"
              >
                <MessageCircle className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about college courses, fees, viva..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 text-white disabled:text-slate-400 transition-all shadow-sm active:scale-95 shrink-0"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
