import type { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

type SectionSurfaceProps = {
  children: ReactNode;
  variant?: "base" | "raised" | "hero";
  className?: string;
};

export function SectionSurface({
  children,
  variant = "base",
  className = "",
}: SectionSurfaceProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const background =
    variant === "hero"
      ? isDark
        ? "bg-gradient-to-b from-slate-900/70 to-slate-950"
        : "bg-gradient-to-b from-white to-slate-100/80"
      : variant === "raised"
        ? isDark
          ? "bg-slate-900/55"
          : "bg-slate-100/80"
        : isDark
          ? "bg-slate-950"
          : "bg-white";

  return <div className={`${background} ${className}`}>{children}</div>;
}
