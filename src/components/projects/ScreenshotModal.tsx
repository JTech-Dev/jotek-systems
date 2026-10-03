import { useEffect } from "react";
import { createPortal } from "react-dom";

import { useLanguage } from "../../context/LanguageContext";

type ScreenshotModalProps = {
  isOpen: boolean;
  projectName: string;
  screenshots: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ScreenshotModal({
  isOpen,
  projectName,
  screenshots,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: ScreenshotModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && screenshots.length > 1) {
        onPrevious();
      }

      if (event.key === "ArrowRight" && screenshots.length > 1) {
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious, screenshots.length]);

  if (!isOpen || screenshots.length === 0) {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.screenshotModal.previewLabel.replace("{name}", projectName)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.screenshotModal.closePreview}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition hover:bg-white/10 sm:right-6 sm:top-6"
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {screenshots.length > 1 && (
        <button
          type="button"
          onClick={onPrevious}
          aria-label={t.screenshotModal.previousScreenshot}
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition hover:bg-white/10 sm:left-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      <img
        src={screenshots[currentIndex]}
        alt={t.screenshotModal.screenshotLabel
          .replace("{name}", projectName)
          .replace("{number}", String(currentIndex + 1))}
        className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain sm:h-[calc(100%-3rem)] sm:w-[calc(100%-3rem)]"
      />

      {screenshots.length > 1 && (
        <button
          type="button"
          onClick={onNext}
          aria-label={t.screenshotModal.nextScreenshot}
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition hover:bg-white/10 sm:right-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
        {currentIndex + 1} / {screenshots.length}
      </div>
    </div>,
    document.body,
  );
}
