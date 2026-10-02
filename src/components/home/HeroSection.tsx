import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function HeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:mb-5 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
          {t.hero.eyebrow}
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>

        <p
          className={`mt-6 max-w-2xl text-base leading-7 sm:mt-7 sm:text-xl sm:leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {t.hero.description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="w-full rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
          >
            {t.hero.exploreProjects}
          </a>

          <a
            href="#about"
            className={`w-full rounded-full border px-6 py-3 text-center text-sm font-semibold transition sm:w-auto ${
              isDark
                ? "border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
                : "border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-950"
            }`}
          >
            {t.hero.learnMore}
          </a>
        </div>
      </div>
    </section>
  );
}
