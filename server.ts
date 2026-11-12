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
You are the official AI Counselor and virtual assistant for "Mumbai Ai Academia" (also known as Mumbai AI Academy) - a premier AI training institute and technology innovation center in Mumbai, India.
Your goal is to guide students, job-seekers, working professionals, and parents with accurate, encouraging, and clear information about courses, fees, durations, syllabus, delivery modes, and admissions.

CRITICAL INSTRUCTION - RESPONDING TO COURSES BY CATEGORY:
Whenever a user asks about courses by category name (or asks "what courses are in [category]?" or "list courses by category"), you MUST:
1. Clearly state the category name and its target audience.
2. List ALL courses belonging to that category with duration, fees, and key topics.
3. Suggest the direct website page URL for that category so the user can easily view the track (e.g., /courses/ai-coding, /courses/cybersecurity, /courses/data-science, /courses/pathways, /courses/school, /courses/college, /professionals, /spoken-skills, /projects, /combos).
4. Provide immediate contact/enrollment guidance (Call: +91 9326278398, WhatsApp: +91 8828481500).

Tone: Warm, encouraging, beginner-friendly, structured, highly professional, using clear bullet points and bolding. Always emphasize practical learning over dry theory.

Institute Details:
- Name: Mumbai Ai Academia (Mumbai AI Academy)
- Tagline: "Learn • Build • Grow"
- Core Philosophy: LEARN → PRACTICE → BUILD → GROW. No complex math prerequisites; 100% focused on real tools, live coding, and practical workflows.
- Modes: Offline (classroom lab in Mumbai), Online (live interactive virtual), and Hybrid (classroom + remote).
- Direct Call Helpline: +91 9326278398 (Call: 9326278398)
- WhatsApp Support: +91 8828481500 (wa.me/918828481500)
- Founder & Lead Coach: Mr. Rajeshwara Pandian (Founder of Mumbai AI Academy & EasyAI Academia, AI Literacy Coach | Business Strategist | Entrepreneur). Background: 14 Years of Enterprise IT Management Experience at UCO Bank, approximately ₹20 Crore annual business turnover ecosystem, around 300 employees across 3 founded businesses (Easy Share Services, Easy Space Realty, EasyAI Academia).

COMPLETE LIST OF COURSES BY CATEGORY:

Category 1: School Students (Route: /courses/school | Grades 5th–12th)
1. "1. AI Basics for School Students": 5 Days, ₹2,500. Topics: What is AI, GenAI & chatbots, ChatGPT & Gemini basics, AI for homework & study, Creative image generation, Prompt writing, AI safety & ethics. Outcome: Smart, safe study habits.
2. "2. AI Study Partner": 7 Days, ₹10,000. Topics: AI study techniques, Smart notes & summaries, Research, Presentations, Exam prep with AI, Question & quiz generation, English improvement, Productivity tools, Mini AI project. Outcome: Turn AI into a 24/7 personal tutor.

Category 2: College Students (Route: /courses/college | Degree & Engineering Students)
1. "3. AI & Generative AI Foundation": 7 Days, ₹2,999. Topics: AI & GenAI basics, ChatGPT/Gemini/Claude, Prompt engineering, Research & literature survey, Presentations & documentation, Image & content generation, Productivity tools, Resume & career applications. Outcome: Practical fluency in top AI models.
2. "4. AI Career & Project Mentor": 10 Days, ₹7,999. Topics: Industry AI tools, AI + Excel, AI + Data Analysis, AI + Power BI, AI automation, AI APIs, Building AI apps, Portfolio & project presentation support. Outcome: Placement-ready with a live portfolio.

Category 3: AI, Coding & GenAI (Route: /courses/ai-coding | Developer & Tech Track)
1. "Python & AI Foundations": 30 Hours, ₹6,000. Topics: Python syntax, control flow, functions, data structures (lists, tuples, dicts), file handling, AI problem solving.
2. "GenAI-Assisted Coding & Developer Tools": 30 Hours, ₹6,000. Topics: Cursor, GitHub Copilot, modern AI IDEs, automated test generation, code refactoring, PR reviews with LLMs.
3. "Object-Oriented Programming (OOPs) in Python": 30 Hours, ₹6,000. Topics: Classes, objects, inheritance, encapsulation, polymorphism, dunder methods, enterprise design patterns.
4. "NoSQL & MongoDB for AI Systems": 30 Hours, ₹6,000. Topics: Document databases, CRUD, schema design for AI logs, aggregation pipelines, vector indexing, Python integration.
5. "Prompt Engineering Mastery": 30 Hours, ₹6,000. Topics: System prompts, zero-shot/few-shot/Chain-of-Thought (CoT), JSON mode, defensive prompt security, benchmark evaluations.
6. "Generative AI & Agentic AI Foundations": 36 Hours, ₹7,000. Topics: Transformer architectures, attention mechanisms, ReAct loops, tool invocation, long-term memory, autonomous agents.
7. "Explainable AI (XAI) & Model Interpretability": 30 Hours, ₹6,000. Topics: Black-box problem, SHAP, LIME, feature attribution, fairness auditing, compliance reporting.
8. "Retrieval-Augmented Generation (RAG) & Vector DBs": 36 Hours, ₹7,000. Topics: Document chunking, embeddings, Pinecone, ChromaDB, hybrid search, hallucination mitigation.
9. "LangChain & LlamaIndex for AI Applications": 36 Hours, ₹7,000. Topics: Chains, memory, LCEL, index structures, query engines, multi-document retrieval agents.
10. "Fine-Tuning & Customizing Open-Source LLMs": 40 Hours, ₹8,000. Topics: LoRA, QLoRA, dataset curation, PEFT, Hugging Face, quantization (GGUF), deployment.

Category 4: Cybersecurity & Ethical Hacking (Route: /courses/cybersecurity | Security & VAPT Track)
1. "Networking & Infrastructure Fundamentals for Security": 30 Hours, ₹6,000. Topics: OSI/TCP-IP, subnetting, DNS, DHCP, routing, packet flow, firewall architectures.
2. "Linux Mastery & Command Line for Hackers": 30 Hours, ₹6,000. Topics: Linux CLI, permissions, bash scripting, process management, cron jobs, user privileges.
3. "Python Scripting for Cybersecurity & Automation": 30 Hours, ₹6,000. Topics: Custom port scanners, banner grabbing, log parsing, automated credential checkers.
4. "Ethical Hacking & Reconnaissance (CEH Methodology)": 36 Hours, ₹7,000. Topics: Passive & active reconnaissance, OSINT, Nmap, Shodan, DNS enumeration, vulnerability scanning.
5. "Web Application Penetration Testing & OWASP Top 10": 36 Hours, ₹7,000. Topics: SQL Injection, XSS, CSRF, broken authentication, Burp Suite mastery, remediation reporting.
6. "Network Security, Traffic Analysis & Wireshark": 30 Hours, ₹6,000. Topics: Packet capturing, Wireshark filters, detecting MITM, malware traffic signatures.
7. "Vulnerability Assessment & Penetration Testing (VAPT)": 36 Hours, ₹7,000. Topics: Nessus scanning, Metasploit exploitation, privilege escalation, comprehensive VAPT audit reports.
8. "SOC Operations, SIEM & Incident Response": 36 Hours, ₹7,000. Topics: SIEM platforms, log ingestion, threat correlation, alert triage, incident response lifecycle.
9. "Cloud Security & DevSecOps Fundamentals": 30 Hours, ₹6,000. Topics: AWS/Azure security, IAM policies, container security (Docker/K8s), CI/CD security scanning.

Category 5: Data Science, ML & NLP (Route: /courses/data-science | AI & Analytics Track)
1. "Python for Data Science (NumPy, Pandas & Matplotlib)": 30 Hours, ₹6,000. Topics: Vectorized computing, Pandas DataFrame manipulation, exploratory data analysis, visual storytelling.
2. "Advanced SQL & Database Analytics": 30 Hours, ₹6,000. Topics: Complex joins, subqueries, window functions, CTEs, query optimization, analytics pipelines.
3. "Business Intelligence with Power BI & Data Storytelling": 30 Hours, ₹6,000. Topics: Power Query, DAX formulas, interactive KPI dashboards, executive reporting.
4. "Mathematics & Statistics for Data Science": 30 Hours, ₹6,000. Topics: Linear algebra, calculus for gradients, probability distributions, hypothesis testing.
5. "Machine Learning Algorithms & Scikit-Learn": 36 Hours, ₹7,000. Topics: Regression, classification, decision trees, random forests, clustering, model evaluation metrics.
6. "Deep Learning & Neural Networks with PyTorch": 36 Hours, ₹7,000. Topics: Tensors, backpropagation, CNNs, image classification, transfer learning, GPU training.
7. "Natural Language Processing (NLP) & Transformer Models": 36 Hours, ₹7,000. Topics: Tokenization, TF-IDF, Word2Vec, BERT, sentiment analysis, text classification.
8. "Computer Vision & Image Processing with OpenCV": 36 Hours, ₹7,000. Topics: Image transformations, thresholding, edge detection, facial landmark detection, YOLO object tracking.
9. "Big Data Analytics with Apache Spark": 36 Hours, ₹7,000. Topics: Distributed computing, Spark DataFrames, PySpark, streaming analytics, large-scale ETL.
10. "Data Science & Predictive Analytics Capstone": 36 Hours, ₹8,000. Topics: End-to-end predictive pipeline, churn modeling, time series forecasting (ARIMA/Prophet), business ROI.
11. "Cloud & AWS Foundations for Data & AI": 36 Hours, ₹7,000. Topics: AWS S3, EC2, RDS, IAM, SageMaker, Bedrock, cloud architecture best practices.

Category 6: More Pathways to Success (Route: /courses/pathways | Finance, Commerce & Leadership Track)
1. "A. Investment Banking & Financial Markets": Global capital markets, DCF & comparative valuation, M&A deal mechanics, LBO modeling, pitch books.
2. "B. Share Market & Modern Banking Operations": Stock exchange structure, fundamental & technical analysis (candlesticks, RSI), risk management, retail/commercial banking, fintech.
3. "C. Taxation & Business Commerce": Direct taxation, GST framework (CGST/SGST/IGST), GSTR-1/3B filing, corporate tax planning, payroll TDS, statutory compliance.
4. "D. Marketing & Business Development": Go-to-market strategies, B2B sales funnels, performance marketing, lead qualification, CRM mastery, deal closing.
5. "E. Career Guidance & Placement Acceleration": High-impact resume engineering, ATS optimization, LinkedIn branding, behavioral interview STAR method, salary negotiation.
6. "F. Professional Communication & Soft Skills": Executive presence, high-stakes presentation design, cross-cultural workplace communication, active listening, conflict resolution.

Category 7: Working Professionals (Route: /professionals | Workplace Productivity)
- "AI Productivity Bootcamp": 5 Days, ₹2,499. Topics: Automated executive emails & memos, Excel formulas & data analysis with AI, PowerPoint deck automation, Meeting summaries & daily task automation. Outcome: Save 10+ hours of repetitive work every week.

Category 8: Spoken Skills (Eng / Hindi) (Route: /spoken-skills | Communication Fluency)
1. "1. Spoken English Mastery": 10–15 Days, ₹3,000. Topics: Hesitation removal, daily conversation drills, interview Q&A mastery, corporate email vocabulary, AI speaking partner practice.
2. "2. Spoken Hindi Fluency": 10–15 Days, ₹2,500. Topics: Conversational Hindi for non-native speakers, workplace & travel dialogues, vocabulary building, speaking confidence.

Category 9: Final-Year Project Assistance (Route: /projects | Academic Capstone Mentorship)
- Duration: 7–15 Days | Fees: ₹15,000 onwards.
- 9-step complete mentoring: Idea selection, problem statement, architecture, working code/model debugging, IEEE/university thesis report, PPT deck, and mock viva voce practice.
- Supported fields: Healthcare, Education, Finance, Agriculture, E-Commerce, and Cybersecurity.

Category 10: Value Combo Programs (Route: /combos | Dual Certification & Cost Savings)
1. "AI Basics + Spoken English": ₹3,999 (15 Days) - Tech + communication.
2. "AI + Career Skills": ₹4,999 (15 Days) - Most popular college student package.
3. "AI + Project Assistance": ₹6,999 onwards (10–15 Days) - Project execution + guidance.
`;

// Helper for local knowledge fallback when Gemini key is absent or fails
function getLocalFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  // Category check: AI, Coding & GenAI
  if (
    q.includes('ai, coding') ||
    q.includes('ai coding') ||
    q.includes('coding') ||
    q.includes('genai') ||
    q.includes('python') ||
    q.includes('agentic') ||
    q.includes('rag') ||
    q.includes('langchain') ||
    q.includes('prompt engineering') ||
    q.includes('fine-tuning')
  ) {
    return `💻 **Category: AI, Coding & GenAI (Developer & Engineering Track)**\n\n` +
      `Here is the complete course list in this category:\n\n` +
      `1. **Python & AI Foundations** (30 Hrs | ₹6,000)\n` +
      `   • Core programming, data structures, algorithm design & AI basics.\n` +
      `2. **GenAI-Assisted Coding & Developer Tools** (30 Hrs | ₹6,000)\n` +
      `   • Supercharge productivity with Cursor, GitHub Copilot & LLM tools.\n` +
      `3. **Object-Oriented Programming (OOPs) in Python** (30 Hrs | ₹6,000)\n` +
      `   • Classes, inheritance, polymorphism & enterprise design patterns.\n` +
      `4. **NoSQL & MongoDB for AI Systems** (30 Hrs | ₹6,000)\n` +
      `   • Document schemas, aggregation pipelines & vector indexing.\n` +
      `5. **Prompt Engineering Mastery** (30 Hrs | ₹6,000)\n` +
      `   • System prompts, CoT, JSON mode, few-shot prompting & defense.\n` +
      `6. **Generative AI & Agentic AI Foundations** (36 Hrs | ₹7,000)\n` +
      `   • Transformers, attention, ReAct loops & autonomous multi-agent systems.\n` +
      `7. **Explainable AI (XAI) & Model Interpretability** (30 Hrs | ₹6,000)\n` +
      `   • SHAP, LIME, feature attribution & AI auditing for compliance.\n` +
      `8. **Retrieval-Augmented Generation (RAG) & Vector DBs** (36 Hrs | ₹7,000)\n` +
      `   • Document chunking, embeddings, Pinecone, ChromaDB & hybrid search.\n` +
      `9. **LangChain & LlamaIndex for AI Applications** (36 Hrs | ₹7,000)\n` +
      `   • Multi-agent workflows, LCEL chains, query engines & tool binding.\n` +
      `10. **Fine-Tuning & Customizing Open-Source LLMs** (40 Hrs | ₹8,000)\n` +
      `    • LoRA, QLoRA, PEFT, Hugging Face dataset curation & quantization.\n\n` +
      `🌐 **Explore full syllabus:** /courses/ai-coding\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** for admissions!`;
  }

  // Category check: Cybersecurity & Ethical Hacking
  if (
    q.includes('cybersecurity') ||
    q.includes('ethical hacking') ||
    q.includes('hacking') ||
    q.includes('vapt') ||
    q.includes('pentesting') ||
    q.includes('soc') ||
    q.includes('wireshark') ||
    q.includes('security')
  ) {
    return `🛡️ **Category: Cybersecurity & Ethical Hacking (Security & VAPT Track)**\n\n` +
      `Here is the complete course list in this category:\n\n` +
      `1. **Networking & Infrastructure Fundamentals for Security** (30 Hrs | ₹6,000)\n` +
      `   • OSI, TCP/IP, subnetting, routing, DNS, firewall architecture.\n` +
      `2. **Linux Mastery & Command Line for Hackers** (30 Hrs | ₹6,000)\n` +
      `   • Linux administration, bash scripting, permission auditing.\n` +
      `3. **Python Scripting for Cybersecurity & Automation** (30 Hrs | ₹6,000)\n` +
      `   • Custom port scanners, banner grabbers, automated security scripts.\n` +
      `4. **Ethical Hacking & Reconnaissance (CEH Methodology)** (36 Hrs | ₹7,000)\n` +
      `   • Active/passive OSINT, Nmap discovery, vulnerability analysis.\n` +
      `5. **Web Application Penetration Testing & OWASP Top 10** (36 Hrs | ₹7,000)\n` +
      `   • SQLi, XSS, CSRF, broken auth, Burp Suite hands-on exploitation.\n` +
      `6. **Network Security, Traffic Analysis & Wireshark** (30 Hrs | ₹6,000)\n` +
      `   • Deep packet inspection, detecting MITM, malware traffic analysis.\n` +
      `7. **Vulnerability Assessment & Penetration Testing (VAPT)** (36 Hrs | ₹7,000)\n` +
      `   • Nessus scanning, Metasploit, privilege escalation & audit reporting.\n` +
      `8. **SOC Operations, SIEM & Incident Response** (36 Hrs | ₹7,000)\n` +
      `   • SIEM monitoring, threat detection, alert triage & containment.\n` +
      `9. **Cloud Security & DevSecOps Fundamentals** (30 Hrs | ₹6,000)\n` +
      `   • AWS/Azure cloud security, IAM, Docker/K8s security auditing.\n\n` +
      `🌐 **Explore full syllabus:** /courses/cybersecurity\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** for batch enrollment!`;
  }

  // Category check: Data Science, ML & NLP
  if (
    q.includes('data science') ||
    q.includes('machine learning') ||
    q.includes('ml') ||
    q.includes('nlp') ||
    q.includes('deep learning') ||
    q.includes('computer vision') ||
    q.includes('power bi') ||
    q.includes('statistics')
  ) {
    return `📊 **Category: Data Science, ML & NLP (AI & Analytics Track)**\n\n` +
      `Here is the complete course list in this category:\n\n` +
      `1. **Python for Data Science (NumPy, Pandas & Matplotlib)** (30 Hrs | ₹6,000)\n` +
      `2. **Advanced SQL & Database Analytics** (30 Hrs | ₹6,000)\n` +
      `3. **Business Intelligence with Power BI & Data Storytelling** (30 Hrs | ₹6,000)\n` +
      `4. **Mathematics & Statistics for Data Science** (30 Hrs | ₹6,000)\n` +
      `5. **Machine Learning Algorithms & Scikit-Learn** (36 Hrs | ₹7,000)\n` +
      `6. **Deep Learning & Neural Networks with PyTorch** (36 Hrs | ₹7,000)\n` +
      `7. **Natural Language Processing (NLP) & Transformer Models** (36 Hrs | ₹7,000)\n` +
      `8. **Computer Vision & Image Processing with OpenCV** (36 Hrs | ₹7,000)\n` +
      `9. **Big Data Analytics with Apache Spark** (36 Hrs | ₹7,000)\n` +
      `10. **Data Science & Predictive Analytics Capstone** (36 Hrs | ₹8,000)\n` +
      `11. **Cloud & AWS Foundations for Data & AI** (36 Hrs | ₹7,000)\n\n` +
      `🌐 **Explore full syllabus:** /courses/data-science\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500**!`;
  }

  // Category check: More Pathways to Success
  if (
    q.includes('pathway') ||
    q.includes('pathways') ||
    q.includes('investment banking') ||
    q.includes('share market') ||
    q.includes('banking') ||
    q.includes('taxation') ||
    q.includes('tax') ||
    q.includes('commerce') ||
    q.includes('marketing')
  ) {
    return `🧭 **Category: More Pathways to Success (Finance, Commerce & Growth)**\n\n` +
      `Here are the specialized tracks available in this category:\n\n` +
      `1. **Track A: Investment Banking & Financial Markets**\n` +
      `   • Capital markets, DCF valuation, M&A deal mechanics & pitch books.\n` +
      `2. **Track B: Share Market & Modern Banking Operations**\n` +
      `   • Candlestick analysis, risk management, trading psychology & digital banking.\n` +
      `3. **Track C: Taxation & Business Commerce**\n` +
      `   • Direct taxes, GST framework (GSTR-1, 3B), payroll, TDS & audit standards.\n` +
      `4. **Track D: Marketing & Business Development**\n` +
      `   • GTM strategies, B2B sales pipelines, CRM systems & conversion funnels.\n` +
      `5. **Track E: Career Guidance & Placement Acceleration**\n` +
      `   • High-impact ATS resumes, LinkedIn branding, STAR interview framework.\n` +
      `6. **Track F: Professional Communication & Soft Skills**\n` +
      `   • Executive presence, high-stakes presentations & corporate negotiations.\n\n` +
      `🌐 **Explore all tracks:** /courses/pathways\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500**!`;
  }

  // Category check: School Students
  if (q.includes('school') || q.includes('kid') || q.includes('child') || q.includes('class 5') || q.includes('class 6') || q.includes('grade')) {
    return `🏫 **Category: School Students (Grades 5th–12th)**\n\n` +
      `Here are the courses in the School Students category:\n\n` +
      `1. **1. AI Basics for School Students** (₹2,500 | 5–7 Days)\n` +
      `   • What is AI, GenAI & chatbots, safe prompting, homework research & creative tools.\n` +
      `2. **2. AI Study Partner** (₹10,000 | 1 Month / 7 Days)\n` +
      `   • Turn AI into a 24/7 personal tutor for Math, Science, presentations & quizzes.\n\n` +
      `📍 Available in **Offline**, **Online**, and **Hybrid** modes.\n` +
      `🌐 **View page:** /courses/school\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** to enroll!`;
  }

  // Category check: College Students
  if (q.includes('college') || q.includes('engineering') || q.includes('placement') || q.includes('degree') || q.includes('graduate') || q.includes('bca') || q.includes('mca') || q.includes('b.tech') || q.includes('btech')) {
    return `🎓 **Category: College Students & Job Seekers**\n\n` +
      `Here are the courses in the College Students category:\n\n` +
      `1. **3. AI & Generative AI Foundation** (₹2,999 | 7–10 Days)\n` +
      `   • Prompt engineering, ChatGPT/Gemini/Claude, resume crafting & Excel automation.\n` +
      `2. **4. AI Career & Project Mentor** (₹7,999 | 10 Days / 1 Month)\n` +
      `   • End-to-end AI applications, Power BI, Excel automation & portfolio mentorship.\n\n` +
      `💡 **Recommended Combo:** GenAI Foundation + Career Prep for just **₹4,999**!\n` +
      `🌐 **View page:** /courses/college\n` +
      `📞 Call **9326278398** to check batch dates.`;
  }

  // Category check: Working Professionals
  if (q.includes('professional') || q.includes('working') || q.includes('corporate') || q.includes('office') || q.includes('excel') || q.includes('job')) {
    return `💼 **Category: Working Professionals**\n\n` +
      `• **AI Productivity Bootcamp** (₹2,499 | 5 Days / Weekend Intensive)\n` +
      `  Save 10+ hours every week with practical generative AI workflows:\n` +
      `  - Automated executive emails, memos & documentation\n` +
      `  - Excel formulas, pivot tables & data summaries with AI\n` +
      `  - Instant PowerPoint presentation decks\n` +
      `  - Smart task automation with AI agents\n\n` +
      `🕒 Flexible weekend and evening virtual batches available!\n` +
      `🌐 **View page:** /professionals\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500**.`;
  }

  // Category check: Spoken Skills
  if (q.includes('spoken') || q.includes('english') || q.includes('hindi') || q.includes('speaking') || q.includes('communication') || q.includes('language')) {
    return `🗣️ **Category: Spoken Skills (English & Hindi Fluency)**\n\n` +
      `Here are the courses in this category:\n\n` +
      `1. **1. Spoken English Mastery** (₹3,000 | 10–15 Days)\n` +
      `   • Eliminate hesitation, master interview answers & daily fluent corporate conversation.\n` +
      `2. **2. Spoken Hindi Fluency** (₹2,500 | 10–15 Days)\n` +
      `   • Natural conversational Hindi for non-native speakers in workplace & life.\n\n` +
      `💡 **Combo Offer:** AI Basics + Spoken English for just **₹3,999**!\n` +
      `🌐 **View page:** /spoken-skills\n` +
      `📞 Call **9326278398** to book a counseling session.`;
  }

  // Category check: Final-Year Projects
  if (q.includes('project') || q.includes('final year') || q.includes('capstone') || q.includes('viva') || q.includes('ieee') || q.includes('synopsis')) {
    return `🚀 **Category: Final-Year Project Assistance (7–15 Days | ₹15,000 onwards)**\n\n` +
      `We offer end-to-end guidance for Engineering, MCA, BCA & M.Sc students:\n` +
      `• Project concept & problem statement approval\n` +
      `• Working AI code & model implementation\n` +
      `• Complete university documentation & report\n` +
      `• Presentation deck (PPT) + Viva voice rehearsal\n\n` +
      `Domains: Healthcare, Education, E-commerce, Agriculture, Security & Finance.\n` +
      `🌐 **View page:** /projects\n` +
      `📞 Call our Project Mentor directly at **9326278398**!`;
  }

  // Category check: Combo Programs
  if (q.includes('combo') || q.includes('discount') || q.includes('package') || q.includes('bundle') || q.includes('offer')) {
    return `⭐ **Category: Value Combo Programs (Dual Certification & Savings):**\n\n` +
      `1. **AI Basics + Spoken English Fluency**: ₹3,999 (15 Days) — Tech + speaking confidence.\n` +
      `2. **GenAI Foundation + Placement Prep**: ₹4,999 (15 Days) — *Most Popular for College*.\n` +
      `3. **AI Mastery + Final-Year Capstone**: ₹6,999 onwards (10–15 Days) — Code + project.\n\n` +
      `Includes dual certificates and verified project credentials.\n` +
      `🌐 **View page:** /combos\n` +
      `📞 Call **9326278398** or WhatsApp **8828481500** for admissions.`;
  }

  // Query asking for list of categories / all courses
  if (q.includes('category') || q.includes('categories') || q.includes('all courses') || q.includes('list of courses') || q.includes('what courses')) {
    return `📚 **Mumbai Ai Academia — Course Categories & Tracks:**\n\n` +
      `Here are all our course categories. You can ask me about any category to see its full course list:\n\n` +
      `1. 🏫 **School Students** (AI Basics, AI Study Partner)\n` +
      `2. 🎓 **College Students** (GenAI Foundation, Career & Project Mentor)\n` +
      `3. 💻 **AI, Coding & GenAI** (10 courses: Python, OOPs, MongoDB, Prompt Engineering, Agentic AI, RAG, LangChain, Fine-Tuning)\n` +
      `4. 🛡️ **Cybersecurity & Ethical Hacking** (9 courses: Networking, Linux, Python Security, CEH, Web Pentesting, Wireshark, VAPT, SOC)\n` +
      `5. 📊 **Data Science, ML & NLP** (11 courses: Python, SQL, Power BI, Statistics, Scikit-Learn, PyTorch, NLP, CV, Spark)\n` +
      `6. 🧭 **More Pathways to Success** (6 tracks: Investment Banking, Share Market, Taxation, Marketing, Career Guidance, Leadership)\n` +
      `7. 💼 **Working Professionals** (AI Productivity Bootcamp)\n` +
      `8. 🗣️ **Spoken Skills (Eng / Hindi)** (Spoken English, Spoken Hindi)\n` +
      `9. 🚀 **Final-Year Project Assistance** (Complete code, documentation & viva)\n` +
      `10. ⭐ **Combo Bundles** (Dual certification packages from ₹3,999)\n\n` +
      `💬 *Which category would you like to explore? Ask me anytime!*`;
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('charge')) {
    return `💰 **Mumbai Ai Academia — Course Fee Overview:**\n\n` +
      `• **School AI Basics**: ₹2,500 (5 Days) | **Study Partner**: ₹10,000 (7 Days)\n` +
      `• **College GenAI Foundations**: ₹2,999 (7 Days) | **Career Mentor**: ₹7,999 (10 Days)\n` +
      `• **AI, Coding & GenAI Tracks**: ₹6,000 – ₹8,000 (30–40 Hours)\n` +
      `• **Cybersecurity & Ethical Hacking Tracks**: ₹6,000 – ₹7,000 (30–36 Hours)\n` +
      `• **Data Science, ML & NLP Tracks**: ₹6,000 – ₹8,000 (30–36 Hours)\n` +
      `• **Working Professionals Bootcamp**: ₹2,499 (5 Days)\n` +
      `• **Spoken English / Hindi**: ₹3,000 / ₹2,500 (10 Days)\n` +
      `• **Final-Year Project Assistance**: ₹15,000 onwards\n` +
      `• **Best-Value Combos**: ₹3,999 – ₹6,999\n\n` +
      `📞 Call **9326278398** for installment options and group enrollment!`;
  }

  if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('whatsapp') || q.includes('number') || q.includes('reach')) {
    return `📞 **Official Mumbai Ai Academia Contact Details:**\n\n` +
      `• **Direct Calling Helpline:** +91 9326278398 (Call: 9326278398)\n` +
      `• **WhatsApp Support:** +91 8828481500 (wa.me/918828481500)\n` +
      `• **Email:** easyaiadmin@gmail.com\n` +
      `• **Lead Coach:** Rajeshwara Pandian (Founder of Mumbai AI Academy)\n` +
      `• **Training Modes:** Offline Centers (Mumbai), Live Online Virtual & Hybrid\n\n` +
      `We respond promptly during academic hours!`;
  }

  if (q.includes('coach') || q.includes('trainer') || q.includes('teacher') || q.includes('mentor') || q.includes('rajeshwara')) {
    return `👨‍🏫 **About Coach Rajeshwara Pandian:**\n\n` +
      `• **Role:** Founder of Mumbai AI Academy & Lead Mentor\n` +
      `• **Credentials:** AI Literacy Coach | Career Coach | Business AI Trainer\n` +
      `• **Experience:** 15+ years of practical industry & student mentorship\n` +
      `• **Philosophy:** "AI is not the future. AI is the skill you can start learning today."\n\n` +
      `Methodology: LEARN → PRACTICE → BUILD → GROW without math-heavy jargon!`;
  }

  return `👋 Welcome to **Mumbai Ai Academia**! I can list courses for any of our categories:\n\n` +
    `• 💻 **AI, Coding & GenAI** (Python, Agents, RAG, LangChain, Fine-Tuning)\n` +
    `• 🛡️ **Cybersecurity & Ethical Hacking** (Linux, CEH, Pentesting, VAPT, SOC)\n` +
    `• 📊 **Data Science, ML & NLP** (Python, Power BI, PyTorch, CV, Transformers)\n` +
    `• 🧭 **More Pathways to Success** (Investment Banking, Share Market, Tax, Marketing)\n` +
    `• 🎓 **College Students** (GenAI Foundations & Career Mentor)\n` +
    `• 🏫 **School Students** (AI Basics & AI Study Partner)\n` +
    `• 💼 **Working Professionals** (Productivity Bootcamp)\n` +
    `• 🗣️ **Spoken Skills** (English & Hindi)\n` +
    `• 🚀 **Final-Year Projects** & ⭐ **Value Combos**\n\n` +
    `Ask me about any category name, or call our counselor at **9326278398**!`;
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
