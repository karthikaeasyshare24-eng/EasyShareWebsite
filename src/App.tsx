import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import SchoolCoursesPage from './pages/SchoolCoursesPage';
import CollegeCoursesPage from './pages/CollegeCoursesPage';
import ProjectsPage from './pages/ProjectsPage';
import SpokenSkillsPage from './pages/SpokenSkillsPage';
import ProfessionalsPage from './pages/ProfessionalsPage';
import CombosPage from './pages/CombosPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AiCodingPage from './pages/AiCodingPage';
import CybersecurityPage from './pages/CybersecurityPage';
import DataSciencePage from './pages/DataSciencePage';
import PathwaysPage from './pages/PathwaysPage';
import BusinessManagementPage from './pages/BusinessManagementPage';
import DesignCreativePage from './pages/DesignCreativePage';
import EngineeringRoboticsPage from './pages/EngineeringRoboticsPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
        <Navbar />
        
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses/school" element={<SchoolCoursesPage />} />
            <Route path="/courses/college" element={<CollegeCoursesPage />} />
            <Route path="/courses/ai-coding" element={<AiCodingPage />} />
            <Route path="/courses/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/courses/data-science" element={<DataSciencePage />} />
            <Route path="/courses/pathways" element={<PathwaysPage />} />
            <Route path="/courses/business-management" element={<BusinessManagementPage />} />
            <Route path="/courses/design-creative" element={<DesignCreativePage />} />
            <Route path="/courses/engineering-robotics" element={<EngineeringRoboticsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/spoken-skills" element={<SpokenSkillsPage />} />
            <Route path="/professionals" element={<ProfessionalsPage />} />
            <Route path="/combos" element={<CombosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingChatbot />
      </div>
    </Router>
  );
}
