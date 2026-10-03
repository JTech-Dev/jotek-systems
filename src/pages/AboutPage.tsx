import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { SectionSurface } from "../components/ui/SectionSurface";
import { PageHero } from "../components/ui/PageHero";

import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function AboutPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const principles = [
    t.aboutPage.philosophy.purpose,
    t.aboutPage.philosophy.thoughtful,
    t.aboutPage.philosophy.evolve,
  ];

  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        description={t.aboutPage.description}
      />

      {/* What we do */}
      <SectionSurface variant="raised">
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 2xl:max-w-[1600px] 2xl:gap-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                {t.aboutPage.whatWeDo.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t.aboutPage.whatWeDo.title}
              </h2>
            </div>

            <div
              className={`text-base leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <p>{t.aboutPage.whatWeDo.description}</p>
            </div>
          </div>
        </section>
      </SectionSurface>

      {/* Principles */}
      <SectionSurface>
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                {t.aboutPage.philosophy.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t.aboutPage.philosophy.title}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 2xl:gap-8">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className={`rounded-3xl border p-6 sm:p-8 2xl:p-10 ${
                    isDark
                      ? "border-slate-800 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p
                    className={`mt-4 leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionSurface>

      {/* Founder */}
      <SectionSurface variant="raised">
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 2xl:max-w-[1600px] 2xl:gap-28">
            <div
              className={`aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border lg:max-w-none ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              <img
                src={siteConfig.founderImage}
                alt={siteConfig.founderName}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                {t.aboutPage.founder.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {siteConfig.founderName}
              </h2>

              <p
                className={`mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {t.aboutPage.founder.description}
              </p>

              <Link
                to="/#projects"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                {t.aboutPage.founder.exploreProjects}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </SectionSurface>
    </main>
  );
}
