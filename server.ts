import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

function getPort(): number {
  const portArgIdx = process.argv.indexOf('--port');
  if (portArgIdx !== -1 && process.argv[portArgIdx + 1]) {
    const val = parseInt(process.argv[portArgIdx + 1], 10);
    if (!isNaN(val)) return val;
  }
  return Number(process.env.PORT) || 3000;
}

const PORT = getPort();

// Knowledge base text for Gemini context
const ACADEMIA_SYSTEM_PROMPT = `
You are the official AI Counselor and virtual assistant for "Easy AI Academia" - an AI training institute.
Your goal is to guide students, job-seekers, working professionals, and parents with accurate, encouraging, and clear information about courses, fees, durations, syllabus, delivery modes, and admissions.

Tone: Warm, encouraging, beginner-friendly, concise, highly professional, using clear bullet points and emojis. Always emphasize practical learning over dry theory.

Institute Details:
- Name: Easy AI Academia
- Tagline: "Learn AI. Build Skills. Create Your Future."
- Sub-tagline: "Practical AI Education & Career Skills for Students, Graduates & Working Professionals."
- Philosophy & Methodology: LEARN → PRACTICE → BUILD → GROW. No complex math prerequisites; focus is 100% on real tools like ChatGPT, Claude, Google Gemini, Midjourney, Canva AI, automation agents, and Python AI.
- Modes: Offline (classroom lab hands-on), Online (live interactive virtual), and Hybrid (classroom + remote).
- Direct Call Helpline: +91 9326278398 (Call: 9326278398)
- WhatsApp Support: +91 8828481500 (wa.me/918828481500)
- Email: easyaiadmin@gmail.com
- Lead Coach: Rajeshwara Pandian (Founder & Lead Mentor, AI Literacy Coach, Career Coach, Business AI Trainer with 15+ years experience).

Courses & Offerings (All Fees & Durations):

1. School Students (Grades 6–12):
   - "AI Basics for School Students": 5–7 Days, ₹2,500. Topics: What is AI, Safe prompting, AI for homework research, Creative image generation, Ethics & digital safety. Outcome: Smart, safe, productive AI habits for school.
   - "AI Study Partner & Creative Skills": 1 Month, ₹10,000. Topics: Custom AI study plan, Math & Science problem solving with AI, Presentation creation, Storytelling & digital art, Mini coding with AI. Outcome: Turn AI into a 24/7 personal tutor.

2. College Students & Job Seekers (BE, B.Tech, BCA, MCA, B.Sc, Commerce, Arts):
   - "Generative AI Foundations & Productivity": 7–10 Days, ₹2,999. Topics: Prompt engineering mastery, Research & literature survey with AI, AI tools for resume & LinkedIn, Presentation deck automation, Excel & data analysis with AI. Outcome: AI skills that make you 5x faster than peers.
   - "AI Career & Project Mentor Program": 1 Month, ₹7,999. Topics: Full GenAI workflow, End-to-end AI mini-project, Resume & portfolio optimization, Mock interviews with AI, Git & deployment basics. Outcome: Placement-ready with a portfolio project.

3. Final-Year Academic Project Assistance (BE, B.Tech, MCA, BCA, M.Sc):
   - 7–15 Days, ₹15,000 onwards.
   - 9-step full lifecycle: Idea selection, Problem statement formulation, AI tool selection, Architecture planning, Implementation & code debugging, Complete IEEE/University report documentation, PPT deck preparation, Live project demo setup, Mock viva voice coaching.
   - Domains supported: Healthcare AI, Education AI, Smart Agriculture, Retail & E-commerce, Cybersecurity & Finance AI.

4. Spoken Communication Skills:
   - "Spoken English Mastery": 15 Days, ₹3,000. Topics: Hesitation removal, Daily conversation drills, Interview answering techniques, Email & corporate vocabulary, AI conversation partner practice. Outcome: Speak English with natural fluency and confidence.
   - "Spoken Hindi Fluency": 15 Days, ₹2,500. Topics: Conversational Hindi for non-native speakers, Workplace communication, Travel & daily life dialogues, Confidence building. Outcome: Clear, effortless Hindi communication.

5. Working Professionals:
   - "AI for Working Professionals": Weekend Intensive / 4 Days, ₹2,499. Topics: Automated executive emails & reports, Advanced Excel formulas & data analysis with AI, Instant PowerPoint presentations, Meeting summaries & task automation. Outcome: Save 10+ hours of busywork every week. Custom corporate team bootcamps also available.

6. Best-Value Combo Bundles (Dual Certification):
   - "AI Basics + Spoken English Fluency": ₹3,999 (Duration: 3 Weeks) - Dual skill upgrade.
   - "GenAI Foundation + Placement & Career Prep": ₹4,999 (Duration: 3–4 Weeks) - Most popular for college students.
   - "AI Mastery + Final-Year Capstone Project": ₹6,999 onwards (Duration: 4–6 Weeks) - Technical mastery plus academic project.

Guidance Rules:
- If asked which course to take, ask about their background (School student, College grad, Job seeker, or Working professional) and recommend the matching program.
- If asked about fees or pricing, provide the exact numbers above without making up figures.
- Provide direct action suggestions: "You can call us directly at 9326278398 or WhatsApp at 8828481500 to reserve an upcoming batch seat."
- Keep replies crisp, structured, and pleasant. If recommending a page, suggest "/courses/school", "/courses/college", "/projects", "/spoken-skills", "/professionals", "/combos", or "/contact".
`;

// Helper for local knowledge fallback when Gemini key is absent or fails
function getLocalFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('school') || q.includes('kid') || q.includes('child') || q.includes('class 6') || q.includes('grade')) {
    return `🏫 **Courses for School Students (Grades 6–12):**\n\n` +
      `1. **AI Basics for School Students** (₹2,500 | 5–7 Days)\n` +
      `   • Master safe prompting, homework research, and creative AI tools.\n\n` +
      `2. **AI Study Partner & Creative Skills** (₹10,000 | 1 Month)\n` +
      `   • Turn AI into a 24/7 personal tutor for Math, Science, and presentations.\n\n` +
      `📍 Available in **Offline**, **Online**, and **Hybrid** modes.\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** to enroll!`;
  }

  if (q.includes('college') || q.includes('engineering') || q.includes('placement') || q.includes('degree') || q.includes('graduate') || q.includes('bca') || q.includes('mca') || q.includes('b.tech') || q.includes('btech')) {
    return `🎓 **Courses for College Students & Job Seekers:**\n\n` +
      `1. **Generative AI Foundations & Productivity** (₹2,999 | 7–10 Days)\n` +
      `   • Prompt engineering, resume crafting, research, and Excel automation.\n\n` +
      `2. **AI Career & Project Mentor Program** (₹7,999 | 1 Month)\n` +
      `   • Hands-on portfolio project, placement prep, and mock interviews.\n\n` +
      `💡 **Recommended Combo:** GenAI Foundation + Placement Prep for just **₹4,999**!\n` +
      `📞 Call **9326278398** to check batch dates.`;
  }

  if (q.includes('project') || q.includes('final year') || q.includes('capstone') || q.includes('viva') || q.includes('ieee') || q.includes('synopsis')) {
    return `🚀 **Final-Year Project Assistance (7–15 Days | ₹15,000 onwards):**\n\n` +
      `We offer end-to-end guidance for Engineering, MCA, BCA & M.Sc students:\n` +
      `• Project concept & problem statement approval\n` +
      `• Working AI code & model implementation\n` +
      `• Complete university documentation & report\n` +
      `• Presentation deck (PPT) + Viva voice rehearsal\n\n` +
      `Domains: Healthcare, Education, E-commerce, Agriculture & Security.\n` +
      `📞 Call our Project Mentor directly at **9326278398**!`;
  }

  if (q.includes('professional') || q.includes('working') || q.includes('corporate') || q.includes('office') || q.includes('excel') || q.includes('job')) {
    return `💼 **AI for Working Professionals (₹2,499 | Weekend / 4 Days):**\n\n` +
      `Save 10+ hours every week with practical generative AI workflows:\n` +
      `• Automated executive emails, memos & documentation\n` +
      `• Excel formulas, pivot tables & data summaries with AI\n` +
      `• Instant PowerPoint presentation decks\n` +
      `• Task automation with AI agents\n\n` +
      `🕒 Flexible weekend and evening virtual batches available!\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500**.`;
  }

  if (q.includes('spoken') || q.includes('english') || q.includes('hindi') || q.includes('speaking') || q.includes('communication')) {
    return `🗣️ **Spoken Communication Programs (15 Days):**\n\n` +
      `1. **Spoken English Mastery** (₹3,000 | 15 Days)\n` +
      `   • Eliminate hesitation, master interview answers & daily fluent conversation.\n\n` +
      `2. **Spoken Hindi Fluency** (₹2,500 | 15 Days)\n` +
      `   • Natural conversational Hindi for non-native speakers in workplace & life.\n\n` +
      `💡 **Combo Offer:** AI Basics + Spoken English for just **₹3,999**!\n` +
      `📞 Call **9326278398** to book a counseling session.`;
  }

  if (q.includes('combo') || q.includes('discount') || q.includes('package') || q.includes('bundle') || q.includes('offer')) {
    return `⭐ **Popular Combo Programs (Dual Certification & Savings):**\n\n` +
      `1. **AI Basics + Spoken English Fluency**: ₹3,999 (3 Weeks)\n` +
      `2. **GenAI Foundation + Placement Prep**: ₹4,999 (3–4 Weeks) — *Most Popular*\n` +
      `3. **AI Mastery + Final-Year Capstone**: ₹6,999 onwards (4–6 Weeks)\n\n` +
      `Includes dual certificates and verified project credentials.\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** for admissions.`;
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('charge')) {
    return `💰 **Course Fee Summary:**\n\n` +
      `• **School AI Basics**: ₹2,500 (5–7 Days)\n` +
      `• **School AI Study Partner**: ₹10,000 (1 Month)\n` +
      `• **College GenAI Foundations**: ₹2,999 (7–10 Days)\n` +
      `• **College Career & Project Mentor**: ₹7,999 (1 Month)\n` +
      `• **AI for Working Professionals**: ₹2,499 (Weekend Bootcamp)\n` +
      `• **Spoken English Mastery**: ₹3,000 (15 Days)\n` +
      `• **Spoken Hindi Fluency**: ₹2,500 (15 Days)\n` +
      `• **Final-Year Project Assistance**: ₹15,000 onwards (7–15 Days)\n` +
      `• **Combos**: From ₹3,999 to ₹6,999\n\n` +
      `📞 Call **9326278398** for special group discounts!`;
  }

  if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('whatsapp') || q.includes('number') || q.includes('reach')) {
    return `📞 **Official Easy AI Academia Contact:**\n\n` +
      `• **Direct Calling Helpline:** +91 9326278398 (Call: 9326278398)\n` +
      `• **WhatsApp Support:** +91 8828481500 (wa.me/918828481500)\n` +
      `• **Email:** easyaiadmin@gmail.com\n` +
      `• **Lead Coach:** Rajeshwara Pandian (Founder & Lead Mentor)\n` +
      `• **Training Modes:** Offline Centers, Live Online Virtual & Hybrid\n\n` +
      `We respond within 15 minutes during academic working hours!`;
  }

  if (q.includes('coach') || q.includes('trainer') || q.includes('teacher') || q.includes('mentor') || q.includes('rajeshwara')) {
    return `👨‍🏫 **About Coach Rajeshwara Pandian:**\n\n` +
      `• **Role:** Lead Mentor & Founder at Easy AI Academia\n` +
      `• **Credentials:** AI Literacy Coach | Career Coach | Business AI Trainer\n` +
      `• **Experience:** 15+ years of industry & coaching experience\n` +
      `• **Philosophy:** "AI is not the future. AI is the skill you can start learning today."\n\n` +
      `Our method focuses on: LEARN → PRACTICE → BUILD → GROW without math-heavy jargon!`;
  }

  return `👋 Welcome to **Easy AI Academia**! I can help you with:\n\n` +
    `• 🎓 **College & Placements** (GenAI Foundations & Career Mentor from ₹2,999)\n` +
    `• 🏫 **School Students** (AI Basics & Study Partner from ₹2,500)\n` +
    `• 💼 **Working Professionals** (AI Productivity Bootcamp at ₹2,499)\n` +
    `• 🚀 **Final-Year Projects** (Guidance, Code, Report & Viva at ₹15,000+)\n` +
    `• 🗣️ **Spoken Skills** (English & Hindi fluency from ₹2,500)\n` +
    `• ⭐ **Value Combos** (Up to 40% savings from ₹3,999)\n\n` +
    `Feel free to ask any question, or call our counselor directly at **9326278398**!`;
}

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'),
      time: new Date().toISOString()
    });
  });

  // API Chat Endpoint
  app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    try {
      const client = getAIClient();

      if (client) {
        // Build conversation contents
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            if (item && item.text && (item.role === 'user' || item.role === 'model')) {
              contents.push({
                role: item.role,
                parts: [{ text: item.text }]
              });
            }
          }
        }

        // Add the latest user message
        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });

        const response = await client.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: ACADEMIA_SYSTEM_PROMPT,
            temperature: 0.6,
            maxOutputTokens: 600,
          }
        });

        const replyText = response.text || '';
        if (replyText.trim()) {
          res.json({ reply: replyText });
          return;
        }
      }

      // Fallback if client is null or returned empty
      const fallbackReply = getLocalFallbackResponse(message);
      res.json({ reply: fallbackReply });
    } catch (err: any) {
      console.warn('Gemini chat error, utilizing local knowledge engine:', err?.message || err);
      const fallbackReply = getLocalFallbackResponse(message);
      res.json({ reply: fallbackReply });
    }
  });

  // Health check endpoint for container orchestrators and dev monitors
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Easy AI Academia server listening on http://0.0.0.0:${PORT}`);
  });

  const shutdown = () => {
    server.close(() => {
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startServer();
