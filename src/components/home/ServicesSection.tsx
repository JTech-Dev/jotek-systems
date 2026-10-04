import { ArrowRight, Code2, Globe2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const services = [
  {
    key: "customSoftware" as const,
    icon: Code2,
  },
  {
    key: "webDevelopment" as const,
    icon: Globe2,
  },
  {
    key: "mobileApps" as const,
    icon: Smartphone,
  },
];

export function ServicesSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="services"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
            {t.services.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>

          <p
            className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.services.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const content = t.services.items[service.key];

            return (
              <article
                key={service.key}
                className={`rounded-3xl border p-6 sm:p-7 ${
                  isDark
                    ? "border-slate-700/70 bg-slate-950/55 shadow-lg shadow-black/10"
                    : "border-slate-200 bg-white shadow-sm shadow-slate-900/5"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{content.title}</h3>

                <p
                  className={`mt-3 text-sm leading-6 sm:text-base sm:leading-7 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {content.description}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className={`mt-6 flex flex-col gap-6 rounded-3xl border p-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${
            isDark
              ? "border-slate-700/70 bg-slate-950/55"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold sm:text-2xl">
              {t.services.cta.title}
            </h3>

            <p
              className={`mt-2 text-sm leading-6 sm:text-base ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {t.services.cta.description}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {t.services.cta.button}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
