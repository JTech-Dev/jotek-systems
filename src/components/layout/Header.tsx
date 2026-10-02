import { useState } from "react";
import { Link } from "react-router-dom";

import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

import { siteConfig } from "../../config/siteConfig";

export function Header() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? "border-slate-800/80 bg-slate-950/80"
          : "border-slate-200/80 bg-slate-50/80"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.companyName} home`}
        >
          <img
            src="/images/brand/logos/jotek-logo.png"
            alt=""
            className="h-9 w-9 object-contain"
            aria-hidden="true"
          />

          <span className="hidden text-sm font-bold uppercase tracking-[0.22em] text-blue-500 sm:inline dark:text-blue-400">
            {siteConfig.companyName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          <a
            href="/#projects"
            className={`text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            {t.nav.projects}
          </a>

          <a
            href="/#about"
            className={`text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            {t.nav.about}
          </a>

          <a
            href="/#contact"
            className={`text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors md:hidden ${
              isDark
                ? "border-slate-700 bg-slate-900/70 text-slate-300 hover:text-white"
                : "border-slate-300 bg-white/70 text-slate-600 hover:text-slate-950"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`mx-4 mb-4 flex flex-col rounded-2xl border p-2 sm:mx-6 sm:mb-6 ${
            isDark
              ? "border-slate-800 bg-slate-900/95"
              : "border-slate-200 bg-white/95"
          }`}
          aria-label="Mobile navigation"
        >
          <a
            href="/#projects"
            onClick={closeMenu}
            className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {t.nav.projects}
          </a>

          <a
            href="/#about"
            onClick={closeMenu}
            className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {t.nav.about}
          </a>

          <a
            href="/#contact"
            onClick={closeMenu}
            className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {t.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
