import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function NotFoundPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <main className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            404
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
            {t.notFound.title}
          </h1>

          <p
            className={`mt-8 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.notFound.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              {t.notFound.home}
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition sm:w-auto ${
                isDark
                  ? "border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
                  : "border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-950"
              }`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t.notFound.goBack}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
