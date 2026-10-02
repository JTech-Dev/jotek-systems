import { siteConfig } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function ContactSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[2rem] border px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 ${
            isDark
              ? "border-slate-800 bg-slate-900/50"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
              {t.contact.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t.contact.title}
            </h2>

            <p
              className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t.contact.description}
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                {t.contact.emailUs}
              </a>
            </div>

            <p
              className={`mt-6 break-all text-sm sm:break-normal ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              {siteConfig.email}
            </p>
          </div>

          <div
            className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
