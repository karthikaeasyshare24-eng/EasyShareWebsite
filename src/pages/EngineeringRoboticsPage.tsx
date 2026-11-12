import { Link } from 'react-router-dom';
import { ENGINEERING_ROBOTICS_COURSES } from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import { Cpu, Sparkles, FolderGit2, ArrowRight, Bot, CheckCircle2 } from 'lucide-react';

export default function EngineeringRoboticsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Page Header Hero */}
      <div className="bg-gradient-to-b from-[#042116] to-[#062c1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-4">
            <Cpu className="w-3.5 h-3.5 text-emerald-300" />
            <span>Hardware, IoT & Robotics Track</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            🤖 Engineering & Robotics
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Gain real-world engineering mastery: program microcontrollers, build autonomous Arduino robotics, design precision CAD enclosures with IoT cloud telemetry, and pilot multirotor drones.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-emerald-200">
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hands-on Hardware Lab</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Online Interactive</span>
            <span className="px-3 py-1 bg-emerald-950 rounded-full border border-emerald-800">Hybrid Format</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40 font-semibold">
              Live Hardware Kits & Prototypes
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Industry Acceleration Highlight */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Autonomous Robotics & Practical Hardware Engineering
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Step beyond pure software: wire physical sensors, calibrate gyroscopes, design custom mechanical enclosures, and connect IoT devices to live cloud monitoring systems.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            <span>Ask Robotics Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ENGINEERING_ROBOTICS_COURSES.map((course, idx) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              highlight={idx === 0}
            />
          ))}
        </div>

        {/* Final Year / Engineering Project Mentorship Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#042116] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering & Capstone Assistance</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Building a College Final-Year Robotics or IoT Project?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              Get end-to-end support for component selection, schematic diagrams, working code, circuit assembly, and viva voce presentation.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Explore Project Support</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}
