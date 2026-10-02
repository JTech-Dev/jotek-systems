import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function AboutSection() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`overflow-hidden rounded-[2rem] border ${
            isDark
              ? "border-slate-800 bg-slate-900/50"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            <div
              className={`relative flex min-h-[280px] items-center justify-center border-b sm:min-h-[340px] md:min-h-[480px] md:border-b-0 md:border-r lg:min-h-[560px] ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              <div className="px-6 text-center sm:px-8">
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border sm:h-24 sm:w-24 ${
                    isDark
                      ? "border-slate-700 bg-slate-800"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={
                      isDark
                        ? "h-8 w-8 text-slate-500 sm:h-10 sm:w-10"
                        : "h-8 w-8 text-slate-400 sm:h-10 sm:w-10"
                    }
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                </div>

                <p
                  className={`mt-6 text-sm font-medium ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {language === "en"
                    ? "Founder photo coming soon"
                    : "Foto del fundador próximamente"}
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 sm:p-10 md:p-8 lg:p-16">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                  {t.about.eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.about.title}
                </h2>

                <p
                  className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {t.about.description}
                </p>

                <div
                  className={`mt-8 border-t pt-7 sm:mt-10 sm:pt-8 ${
                    isDark ? "border-slate-800" : "border-slate-200"
                  }`}
                >
                  <p className="text-lg font-semibold">jTech</p>

                  <p className="mt-1 text-sm font-semibold text-blue-500 dark:text-blue-400">
                    {language === "en"
                      ? "Founder & Software Developer"
                      : "Fundador y Desarrollador de Software"}
                  </p>

                  <p
                    className={`mt-5 text-sm leading-6 sm:text-base sm:leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {language === "en"
                      ? "Building focused digital products across mobile, web, SaaS, and new software experiences."
                      : "Creando productos digitales enfocados en aplicaciones móviles, web, SaaS y nuevas experiencias de software."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
