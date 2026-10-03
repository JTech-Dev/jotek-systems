import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { projects } from "../data/projects";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

import { ProjectCarousel } from "../components/projects/ProjectCarousel";
import { ProjectStatusBadge } from "../components/projects/ProjectStatusBadge";
import { SectionSurface } from "../components/ui/SectionSurface";

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
            {t.projectPage.notFound}
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <SectionSurface variant="hero">
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
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              {t.projectPage.backToProjects}
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24"
                />

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    {project.name}
                  </h1>

                  <ProjectStatusBadge status={project.status} />
                </div>

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
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </SectionSurface>

      {/* Screenshots */}
      <SectionSurface variant="raised">
        <section className="px-4 pt-10 pb-20 sm:px-6 sm:pt-12 sm:pb-24 lg:px-8 lg:pt-14 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <ProjectCarousel
              projectName={project.name}
              screenshots={project.screenshots}
            />
          </div>
        </section>
      </SectionSurface>

      {/* Project details */}
      <SectionSurface>
        <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
                  {t.projectPage.aboutProject}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.projectPage.aboutName.replace("{name}", project.name)}
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
                      {t.projectPage.availableOn}
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
                    {t.projectPage.keyFeatures}
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
      </SectionSurface>
    </main>
  );
}
