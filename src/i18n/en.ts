export const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Independent software studio",
    title: "Software built with purpose.",
    description:
      "We design and build focused digital products that solve real problems with simple, thoughtful experiences.",
    exploreProjects: "Explore our projects",
    learnMore: "About us",
  },

  projects: {
    eyebrow: "Our work",
    title: "Products built to be useful.",
    description:
      "Explore the software and digital products developed by Jotek Systems.",
    viewProject: "View project",
    visitWebsite: "Visit website",
    comingSoon: "Coming soon",
  },

  about: {
    eyebrow: "About us",
    title: "Thoughtful software. Focused experiences.",
    description:
      "Jotek Systems is an independent software studio focused on creating practical, well-designed digital products.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let’s talk.",
    description:
      "Have a question about one of our products or want to get in touch with Jotek Systems?",
    emailUs: "Email us",
  },

  footer: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    rights: "All rights reserved.",
  },

  common: {
    backHome: "Back to home",
    changeLanguage: "Change language",
    changeTheme: "Change theme",
    darkMode: "Dark mode",
    lightMode: "Light mode",
  },
} as const;

export type EnglishTranslations = typeof en;
