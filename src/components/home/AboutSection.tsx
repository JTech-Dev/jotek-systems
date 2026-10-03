import { siteConfig } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function AboutSection() {
  const { t } = useLanguage();
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
              className={`relative min-h-[280px] overflow-hidden border-b sm:min-h-[340px] md:min-h-[480px] md:border-b-0 md:border-r lg:min-h-[560px] ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <img
                src={siteConfig.founderImage}
                alt={siteConfig.founderName}
                className="absolute inset-0 h-full w-full object-cover"
              />
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
                  <p className="text-lg font-semibold">
                    {siteConfig.founderName}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-500 dark:text-blue-400">
                    {t.about.founderRole}
                  </p>

                  <p
                    className={`mt-5 text-sm leading-6 sm:text-base sm:leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {t.about.founderDescription}
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
