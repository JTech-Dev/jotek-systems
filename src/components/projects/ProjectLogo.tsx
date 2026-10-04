type ProjectLogoProps = {
  src: string;
  name: string;
  size?: "default" | "large";
};

export function ProjectLogo({ src, name, size = "default" }: ProjectLogoProps) {
  const sizeClasses =
    size === "large" ? "h-24 w-24 sm:h-28 sm:w-28" : "h-20 w-20";

  return (
    <div className={`relative shrink-0 ${sizeClasses}`}>
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-contain opacity-30 blur-xl"
        aria-hidden="true"
      />

      <img
        src={src}
        alt={`${name} logo`}
        className="relative h-full w-full object-contain"
      />
    </div>
  );
}
