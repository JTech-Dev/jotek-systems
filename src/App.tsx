import { Routes, Route } from "react-router-dom";

import { useTheme } from "./context/ThemeContext";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { RouteScrollManager } from "./components/ui/RouteScrollManager";

function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      id="top"
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <RouteScrollManager />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
