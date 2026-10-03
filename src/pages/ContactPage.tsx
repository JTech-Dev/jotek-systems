import { siteConfig } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function ContactPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const content =
    language === "en"
      ? {
          eyebrow: "Contact",
          title: "Let’s build something meaningful.",
          description:
            "Have a question about Jotek Systems, one of our products, or just want to get in touch? We’d be happy to hear from you.",
          emailLabel: "Email",
          emailTitle: "Get in touch directly",
          emailDescription:
            "For general questions, product inquiries, or anything related to Jotek Systems, send us an email.",
          button: "Send an email",
          response: "We’ll get back to you as soon as possible.",
        }
      : {
          eyebrow: "Contacto",
          title: "Construyamos algo con propósito.",
          description:
            "¿Tienes alguna pregunta sobre Jotek Systems, alguno de nuestros productos o simplemente quieres comunicarte con nosotros? Nos encantaría saber de ti.",
          emailLabel: "Correo electrónico",
          emailTitle: "Comunícate directamente",
          emailDescription:
            "Para preguntas generales, consultas sobre nuestros productos o cualquier tema relacionado con Jotek Systems, envíanos un correo electrónico.",
          button: "Enviar correo",
          response: "Responderemos tan pronto como sea posible.",
        };

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
        <div className="mx-auto max-w-7xl text-center 2xl:max-w-[1600px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-400">
            {content.eyebrow}
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
            {content.title}
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg 2xl:max-w-3xl 2xl:text-xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {content.description}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl 2xl:max-w-5xl">
          <div
            className={`rounded-3xl border p-8 sm:p-10 lg:p-12 2xl:p-14 ${
              isDark
                ? "border-slate-800 bg-slate-900/50"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500 dark:text-blue-400">
              {content.emailLabel}
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {content.emailTitle}
            </h2>

            <p
              className={`mt-4 max-w-2xl leading-7 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {content.emailDescription}
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              {content.button}
            </a>

            <div className="mt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className={`text-base font-medium transition hover:text-blue-500 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {siteConfig.email}
              </a>

              <p className="mt-2 text-sm text-slate-500">{content.response}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
