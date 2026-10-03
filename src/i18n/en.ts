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
    founderRole: "Founder & Software Developer",
    founderDescription:
      "Building focused digital products across mobile, web, SaaS, and new software experiences.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let’s talk.",
    description:
      "Have a question about one of our products or want to get in touch with Jotek Systems?",
    emailUs: "Email us",
  },

  contactPage: {
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
  },

  aboutPage: {
    eyebrow: "About Jotek Systems",
    title: "Independent software, built with purpose.",
    description:
      "Jotek Systems is an independent software studio focused on creating practical, well-designed digital products.",

    whatWeDo: {
      eyebrow: "What we do",
      title: "Focused products for real needs.",
      description:
        "We build software with a clear purpose: solving useful problems without unnecessary complexity.",
    },

    philosophy: {
      eyebrow: "How we build",
      title: "Simple principles behind every project.",

      purpose: {
        title: "Purpose before complexity",
        description:
          "Every feature should solve a real problem or make the product meaningfully better.",
      },

      thoughtful: {
        title: "Thoughtful experiences",
        description:
          "We care about the details that make software feel clear, intuitive, and enjoyable to use.",
      },

      evolve: {
        title: "Built to evolve",
        description:
          "Our products are designed with room to improve, expand, and adapt as their users and needs grow.",
      },
    },

    founder: {
      eyebrow: "Founder & developer",
      title: "Built independently by Joel Santos.",
      description:
        "Jotek Systems is an independent software studio created and developed by Joel Santos, with a focus on building useful products across mobile, web, and emerging platforms.",
      exploreProjects: "Explore our projects",
    },
  },

  projectPage: {
    notFound: "Project not found.",
    backToProjects: "Back to projects",
    aboutProject: "About the project",
    aboutName: "About {name}",
    availableOn: "Available on",
    keyFeatures: "Key features",
  },

  screenshotModal: {
    previewLabel: "{name} screenshot preview",
    closePreview: "Close preview",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    screenshotLabel: "{name} screenshot {number}",
  },

  projectCarousel: {
    comingSoon: "Project screenshots coming soon",
    comingSoonDescription: "Screenshots and product previews will appear here.",
    openFullscreen: "Open {name} screenshot {number} in full screen",
    navigation: "Screenshot navigation",
    showScreenshot: "Show screenshot {number}",
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
    companyHome: "home",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    footerNavigation: "Footer navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
} as const;

export type EnglishTranslations = typeof en;
