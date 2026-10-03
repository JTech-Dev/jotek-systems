import type { ProjectStatus } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

const projectStatusStyles: Record<
  ProjectStatus,
  { badge: string; dot: string }
> = {
  available: {
    badge: "border-blue-500/25 bg-blue-500/10 text-blue-600 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  beta: {
    badge:
      "border-purple-500/25 bg-purple-500/10 text-purple-600 dark:text-purple-300",
    dot: "bg-purple-500",
  },
  development: {
    badge:
      "border-orange-500/25 bg-orange-500/10 text-orange-600 dark:text-orange-300",
    dot: "bg-orange-500",
  },
  comingSoon: {
    badge:
      "border-slate-500/25 bg-slate-500/10 text-slate-600 dark:text-slate-300",
    dot: "bg-slate-500",
  },
};

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const { t } = useLanguage();
  const styles = projectStatusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${styles.badge}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
        aria-hidden="true"
      />
      {t.projectStatus[status]}
    </span>
  );
}
