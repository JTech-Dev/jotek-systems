import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FolderKanban, Mail, UserRound } from "lucide-react";

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
          ? "border-slate-900 bg-[#020617]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="self-start">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label={`${siteConfig.companyName} ${t.common.companyHome}`}
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

            <p
              className={`mt-3 max-w-xs text-sm ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-3"
            aria-label={t.common.footerNavigation}
          >
            <Link
              to="/#projects"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <FolderKanban className="h-4 w-4" aria-hidden="true" />
              {t.footer.projects}
            </Link>

            <Link
              to="/about"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <UserRound className="h-4 w-4" aria-hidden="true" />
              {t.footer.about}
            </Link>

            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.footer.contact}
            </Link>
          </nav>

          {/* Social */}
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
              <FaFacebookF className="h-4 w-4" aria-hidden="true" />
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
              <FaInstagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-8 flex flex-col gap-2 border-t pt-6 text-xs sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-sm ${
            isDark
              ? "border-slate-900 text-slate-500"
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
