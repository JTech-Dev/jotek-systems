import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { ProjectCarousel } from "../components/projects/ProjectCarousel";

export function ProjectPage() {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-400">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            {language === "en"
              ? "Project not found."
              : "Proyecto no encontrado."}
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
          >
            ← {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/#projects"
            className={`inline-flex items-center text-sm font-semibold transition-colors ${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-950"
            }`}
          >
            ← {language === "en" ? "Back to projects" : "Volver a proyectos"}
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24"
              />

              <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>

              <p className="mt-5 text-lg font-semibold text-blue-500 sm:text-xl dark:text-blue-400">
                {project.shortDescription[language]}
              </p>

              <p
                className={`mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description[language]}
              </p>
            </div>

            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
            >
              {t.projects.visitWebsite}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <ProjectCarousel
            projectName={project.name}
            screenshots={project.screenshots}
          />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                {language === "en" ? "About the project" : "Sobre el proyecto"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "en"
                  ? `About ${project.name}`
                  : `Sobre ${project.name}`}
              </h2>

              <p
                className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.about[language]}
              </p>

              {project.platforms.length > 0 && (
                <div className="mt-8">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {language === "en" ? "Available on" : "Disponible en"}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                          isDark
                            ? "border-slate-700 bg-slate-900 text-slate-300"
                            : "border-slate-200 bg-white text-slate-700"
                        }`}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.features.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                  {language === "en" ? "Key features" : "Funciones principales"}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <article
                      key={feature.title.en}
                      className={`rounded-2xl border p-5 sm:p-6 ${
                        isDark
                          ? "border-slate-800 bg-slate-900/50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <h3 className="font-semibold">
                        {feature.title[language]}
                      </h3>

                      <p
                        className={`mt-2 text-sm leading-6 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {feature.description[language]}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
