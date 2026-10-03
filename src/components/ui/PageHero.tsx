import { useTheme } from "../../context/ThemeContext";
import { SectionSurface } from "./SectionSurface";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SectionSurface variant="hero">
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
            {title}
          </h1>

          <p
            className={`mt-8 max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>
      </section>
    </SectionSurface>
  );
}
