import { Link } from "react-router-dom";

import { siteConfig } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "border-slate-800 bg-slate-950"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 self-start"
            aria-label={`${siteConfig.companyName} home`}
          >
            <img
              src="/images/brand/logos/jotek-logo.png"
              alt=""
              className="h-9 w-9 object-contain"
              aria-hidden="true"
            />

            <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-400">
              {siteConfig.companyName}
            </span>
          </Link>

          <nav
            className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-3"
            aria-label="Footer navigation"
          >
            <a
              href="/#projects"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {t.footer.projects}
            </a>

            <a
              href="/#about"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {t.footer.about}
            </a>

            <a
              href="/#contact"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {t.footer.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              href={siteConfig.social.facebook || undefined}
              target={siteConfig.social.facebook ? "_blank" : undefined}
              rel={siteConfig.social.facebook ? "noreferrer" : undefined}
              aria-label="Facebook"
              aria-disabled={!siteConfig.social.facebook}
              onClick={(event) => {
                if (!siteConfig.social.facebook) event.preventDefault();
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                  : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M13.5 22v-9h3l.45-3.5H13.5V7.25c0-1.01.28-1.7 1.73-1.7H17V2.42c-.31-.04-1.37-.13-2.61-.13-2.58 0-4.35 1.58-4.35 4.48V9.5H7.12V13h2.92v9h3.46Z" />
              </svg>
            </a>

            <a
              href={siteConfig.social.instagram || undefined}
              target={siteConfig.social.instagram ? "_blank" : undefined}
              rel={siteConfig.social.instagram ? "noreferrer" : undefined}
              aria-label="Instagram"
              aria-disabled={!siteConfig.social.instagram}
              onClick={(event) => {
                if (!siteConfig.social.instagram) event.preventDefault();
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                  : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`mt-8 flex flex-col gap-2 border-t pt-6 text-xs sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-sm ${
            isDark
              ? "border-slate-800 text-slate-500"
              : "border-slate-200 text-slate-400"
          }`}
        >
          <p>
            © {currentYear} {siteConfig.companyName}. {t.footer.rights}
          </p>

          <p className="break-all sm:break-normal">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
