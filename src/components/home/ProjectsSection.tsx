import { Link } from "react-router-dom";

import { ArrowRight, ExternalLink } from "lucide-react";
import { ProjectStatusBadge } from "../projects/ProjectStatusBadge";
import { ProjectLogo } from "../projects/ProjectLogo";

import { projects } from "../../data/projects";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
            {t.projects.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.projects.title}
          </h2>

          <p
            className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.projects.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group flex min-h-[330px] flex-col rounded-3xl border p-6 transition-all duration-300 sm:min-h-[360px] sm:p-7 lg:hover:-translate-y-1 ${
                isDark
                  ? "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl"
              }`}
            >
              <ProjectLogo src={project.logo} name={project.name} />

              <div className="mt-6 sm:mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.name}
                  </h3>

                  <ProjectStatusBadge status={project.status} />
                </div>

                <p className="mt-3 font-medium text-blue-500 dark:text-blue-400">
                  {project.shortDescription[language]}
                </p>

                <p
                  className={`mt-4 text-sm leading-6 sm:text-base sm:leading-7 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description[language]}
                </p>
              </div>

              <div className="mt-auto flex flex-col items-start gap-3 pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-8">
                <Link
                  to={`/projects/${project.id}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    isDark
                      ? "text-slate-200 hover:text-white"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {t.projects.viewProject}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                >
                  {t.projects.visitWebsite}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
