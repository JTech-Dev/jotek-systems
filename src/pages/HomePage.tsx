import { HeroSection } from "../components/home/HeroSection";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { AboutSection } from "../components/home/AboutSection";
import { ContactSection } from "../components/home/ContactSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { SectionSurface } from "../components/ui/SectionSurface";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <SectionSurface variant="raised">
        <ProjectsSection />
      </SectionSurface>

      <SectionSurface>
        <AboutSection />
      </SectionSurface>

      <SectionSurface variant="raised">
        <SkillsSection />
      </SectionSurface>

      <SectionSurface>
        <ContactSection />
      </SectionSurface>
    </main>
  );
}
