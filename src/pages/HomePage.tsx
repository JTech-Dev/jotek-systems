import { HeroSection } from "../components/home/HeroSection";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { AboutSection } from "../components/home/AboutSection";
import { ContactSection } from "../components/home/ContactSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
