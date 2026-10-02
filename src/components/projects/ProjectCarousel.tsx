import { useEffect, useState } from "react";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { ScreenshotModal } from "./ScreenshotModal";

type ProjectCarouselProps = {
  projectName: string;
  screenshots: string[];
};

export function ProjectCarousel({
  projectName,
  screenshots,
}: ProjectCarouselProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [projectName, screenshots]);

  useEffect(() => {
    if (screenshots.length <= 1 || isPaused || isModalOpen) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) =>
        current === screenshots.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [screenshots, isPaused, isModalOpen]);

  if (screenshots.length === 0) {
    return (
      <div
        className={`flex min-h-[300px] items-center justify-center rounded-[2rem] border border-dashed px-6 text-center sm:min-h-[420px] ${
          isDark
            ? "border-slate-700 bg-slate-900/40"
            : "border-slate-300 bg-white"
        }`}
      >
        <div className="max-w-md">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`mx-auto h-10 w-10 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9" r="1.5" />
            <path d="m5 17 4.5-4.5 3 3 2-2L19 18" />
          </svg>

          <p className="mt-5 font-semibold">
            {language === "en"
              ? "Project screenshots coming soon"
              : "Capturas del proyecto próximamente"}
          </p>

          <p
            className={`mt-2 text-sm leading-6 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {language === "en"
              ? "Screenshots and product previews will appear here."
              : "Las capturas y vistas previas del producto aparecerán aquí."}
          </p>
        </div>
      </div>
    );
  }

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setCurrentIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div>
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setIsPaused(false);
          }
        }}
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
        onPointerCancel={() => setIsPaused(false)}
        className={`relative overflow-hidden rounded-[2rem] border ${
          isDark
            ? "border-slate-800 bg-slate-900/50"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex min-h-[300px] items-center justify-center p-4 sm:min-h-[420px] sm:p-8 lg:min-h-[560px] lg:p-12">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="cursor-zoom-in rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={
              language === "en"
                ? `Open ${projectName} screenshot ${currentIndex + 1} in full screen`
                : `Abrir captura ${currentIndex + 1} de ${projectName} en pantalla completa`
            }
          >
            <img
              src={screenshots[currentIndex]}
              alt={`${projectName} screenshot ${currentIndex + 1}`}
              className="max-h-[520px] max-w-full rounded-2xl object-contain 2xl:max-h-[640px]"
            />
          </button>
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={
                language === "en" ? "Previous screenshot" : "Captura anterior"
              }
              className={`absolute left-3 top-1/2 flex h-11 w-11 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition sm:left-5 ${
                isDark
                  ? "border-slate-700 bg-slate-950/80 text-white hover:bg-slate-800"
                  : "border-slate-200 bg-white/90 text-slate-950 hover:bg-slate-100"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label={
                language === "en" ? "Next screenshot" : "Siguiente captura"
              }
              className={`absolute right-3 top-1/2 flex h-11 w-11 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition sm:right-5 ${
                isDark
                  ? "border-slate-700 bg-slate-950/80 text-white hover:bg-slate-800"
                  : "border-slate-200 bg-white/90 text-slate-950 hover:bg-slate-100"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {screenshots.length > 1 && (
        <div
          className="mt-5 flex items-center justify-center gap-2"
          aria-label={
            language === "en"
              ? "Screenshot navigation"
              : "Navegación de capturas"
          }
        >
          {screenshots.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={
                language === "en"
                  ? `Show screenshot ${index + 1}`
                  : `Mostrar captura ${index + 1}`
              }
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-blue-500"
                  : isDark
                    ? "w-2.5 bg-slate-700 hover:bg-slate-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}

      <ScreenshotModal
        isOpen={isModalOpen}
        projectName={projectName}
        screenshots={screenshots}
        currentIndex={currentIndex}
        language={language}
        onClose={() => setIsModalOpen(false)}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </div>
  );
}
