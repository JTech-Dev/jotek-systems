import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function AboutPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const principles = [
    {
      title:
        language === "en"
          ? "Purpose before complexity"
          : "Propósito antes que complejidad",
      description:
        language === "en"
          ? "We focus on solving real problems without adding complexity simply for the sake of it."
          : "Nos enfocamos en resolver problemas reales sin añadir complejidad simplemente por añadirla.",
    },
    {
      title:
        language === "en"
          ? "Thoughtful experiences"
          : "Experiencias bien pensadas",
      description:
        language === "en"
          ? "Every product is shaped around clear interactions, useful features, and an experience that feels intentional."
          : "Cada producto se desarrolla alrededor de interacciones claras, funciones útiles y una experiencia que se sienta intencional.",
    },
    {
      title: language === "en" ? "Built to evolve" : "Creado para evolucionar",
      description:
        language === "en"
          ? "Our products are built with room to improve, adapt, and grow as their users and ideas evolve."
          : "Nuestros productos se crean con espacio para mejorar, adaptarse y crecer a medida que evolucionan sus usuarios y sus ideas.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className={`px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${
          isDark
            ? "bg-gradient-to-b from-slate-900/70 to-slate-950"
            : "bg-gradient-to-b from-white to-slate-100/80"
        }`}
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
            {language === "en" ? "About Jotek Systems" : "Sobre Jotek Systems"}
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl">
            {language === "en"
              ? "Independent software, built with purpose."
              : "Software independiente, creado con propósito."}
          </h1>

          <p
            className={`mt-8 max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {language === "en"
              ? "Jotek Systems is an independent software studio focused on designing and developing practical digital products with thoughtful, focused experiences."
              : "Jotek Systems es un estudio de software independiente enfocado en diseñar y desarrollar productos digitales prácticos con experiencias bien pensadas y enfocadas."}
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 2xl:max-w-[1600px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 2xl:gap-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
              {language === "en" ? "What we do" : "Qué hacemos"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {language === "en"
                ? "From an idea to a real product."
                : "De una idea a un producto real."}
            </h2>
          </div>

          <div
            className={`space-y-6 text-base leading-7 sm:text-lg sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <p>
              {language === "en"
                ? "We build software around focused ideas: identifying a problem, designing a useful experience, developing the product, and continuing to improve it after launch."
                : "Creamos software alrededor de ideas enfocadas: identificamos un problema, diseñamos una experiencia útil, desarrollamos el producto y continuamos mejorándolo después de su lanzamiento."}
            </p>

            <p>
              {language === "en"
                ? "Our work spans mobile applications and web software, with each project developed as its own product while sharing the same emphasis on usability, clarity, and purposeful design."
                : "Nuestro trabajo incluye aplicaciones móviles y software web, con cada proyecto desarrollado como su propio producto mientras comparte el mismo enfoque en usabilidad, claridad y diseño con propósito."}
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        className={`px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${
          isDark ? "bg-slate-900/40" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
              {language === "en" ? "How we build" : "Cómo desarrollamos"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {language === "en"
                ? "A simple philosophy behind every project."
                : "Una filosofía simple detrás de cada proyecto."}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 2xl:gap-8">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`rounded-3xl border p-6 sm:p-8 2xl:p-10 ${
                  isDark
                    ? "border-slate-800 bg-slate-950/60"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                  {principle.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 2xl:max-w-[1600px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 2xl:gap-28">
          <div
            className={`aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border lg:max-w-none ${
              isDark
                ? "border-slate-800 bg-slate-900"
                : "border-slate-200 bg-slate-100"
            }`}
          >
            <img
              src="/images/brand/founder.jpg"
              alt="jTech"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm sm:tracking-[0.25em] dark:text-blue-400">
              {language === "en"
                ? "Founder & developer"
                : "Fundador y desarrollador"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              jTech
            </h2>

            <p
              className={`mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {language === "en"
                ? "Jotek Systems is independently developed by jTech, with a hands-on approach that spans product ideas, software development, interface design, testing, and the continuous improvement of each project."
                : "Jotek Systems es desarrollado de forma independiente por jTech, con un enfoque práctico que abarca ideas de producto, desarrollo de software, diseño de interfaces, pruebas y la mejora continua de cada proyecto."}
            </p>

            <Link
              to="/#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              {language === "en"
                ? "Explore our projects"
                : "Explorar nuestros proyectos"}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
