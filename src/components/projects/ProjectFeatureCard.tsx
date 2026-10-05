import {
  BarChart3,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  Cloud,
  Code2,
  HeartPulse,
  Image,
  LayoutDashboard,
  MessageSquareText,
  Share2,
  Sparkles,
  Trophy,
  Utensils,
  Watch,
  type LucideIcon,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export type ProjectFeatureIcon =
  | "analytics"
  | "calendar"
  | "cloud"
  | "code"
  | "dashboard"
  | "health"
  | "image"
  | "macros"
  | "message"
  | "share"
  | "sparkles"
  | "trophy"
  | "utensils"
  | "watch";

const featureIcons: Record<ProjectFeatureIcon, LucideIcon> = {
  analytics: BarChart3,
  calendar: CalendarClock,
  cloud: Cloud,
  code: Code2,
  dashboard: LayoutDashboard,
  health: HeartPulse,
  image: Image,
  macros: ChartNoAxesColumnIncreasing,
  message: MessageSquareText,
  share: Share2,
  sparkles: Sparkles,
  trophy: Trophy,
  utensils: Utensils,
  watch: Watch,
};

type ProjectFeatureCardProps = {
  title: string;
  description: string;
  icon: ProjectFeatureIcon;
};

export function ProjectFeatureCard({
  title,
  description,
  icon,
}: ProjectFeatureCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const Icon = featureIcons[icon];

  return (
    <article
      className={`rounded-2xl border p-6 ${
        isDark
          ? "border-slate-800 bg-slate-900/60"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
            isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
          }`}
        >
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </div>

        <h3 className="font-semibold">{title}</h3>
      </div>

      <p
        className={`mt-4 text-sm leading-6 ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
