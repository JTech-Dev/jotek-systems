import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const skillGroups = [
  {
    key: "mobile" as const,
    technologies: ["Swift", "SwiftUI", "iOS", "watchOS", "HealthKit"],
  },
  {
    key: "web" as const,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    key: "backend" as const,
    technologies: [
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Authentication",
      "Cloud Services",
    ],
  },
  {
    key: "ai" as const,
    technologies: [
      "OpenAI APIs",
      "AI Integrations",
      "Image Analysis",
      "Automation",
      "Platform APIs",
    ],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
            {t.skills.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.skills.title}
          </h2>

          <p
            className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.skills.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-lg font-semibold">
                {t.skills.groups[group.key]}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      isDark
                        ? "border-slate-800 bg-slate-900/60 text-slate-300"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
