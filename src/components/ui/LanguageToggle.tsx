import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-1 transition-colors sm:gap-1 ${
        isDark
          ? "border-slate-700 bg-slate-900/70"
          : "border-slate-300 bg-white/70"
      }`}
      aria-label={t.common.changeLanguage}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
          language === "en"
            ? "bg-blue-500 text-white"
            : isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-950"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`rounded-full px-2 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
          language === "es"
            ? "bg-blue-500 text-white"
            : isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-950"
        }`}
        aria-pressed={language === "es"}
      >
        ES
      </button>
    </div>
  );
}
