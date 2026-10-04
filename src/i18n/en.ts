export const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    services: "Services",
    about: "About",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Independent software studio",
    title: "Software built with purpose.",
    description:
      "Jotek Systems designs and builds focused digital products and custom software solutions that solve real problems with simple, thoughtful experiences.",
    exploreProjects: "Explore our projects",
    learnMore: "About Jotek",
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

  projectStatus: {
    available: "Available",
    beta: "Beta",
    development: "In development",
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

  skills: {
    eyebrow: "Skills & technologies",
    title: "Tools for building useful products.",
    description:
      "A focused set of technologies used to design, build, integrate, and evolve products across mobile and web.",
    groups: {
      mobile: "Mobile",
      web: "Web & SaaS",
      backend: "Backend & Cloud",
      ai: "AI & Integrations",
    },
  },

  services: {
    eyebrow: "Services",
    title: "Software built around your ideas.",
    description:
      "From an initial idea to a finished product, Jotek Systems builds custom digital solutions tailored to your goals and needs.",
    items: {
      customSoftware: {
        title: "Custom Software",
        description:
          "Purpose-built software and digital solutions designed around your business, workflow, or unique project requirements.",
      },
      webDevelopment: {
        title: "Web Development",
        description:
          "Modern, responsive websites and web applications built with a focus on performance, usability, and thoughtful design.",
      },
      mobileApps: {
        title: "Mobile Apps",
        description:
          "Custom mobile applications designed to deliver polished, intuitive experiences across phones and connected devices.",
      },
    },
    cta: {
      title: "Have a project in mind?",
      description:
        "Tell us what you’re looking to build and we’ll discuss the requirements, scope, and next steps.",
      button: "Start a project",
    },
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
    title: "Let’s build something together.",
    description:
      "Have a project in mind? Whether you need a website, mobile app, custom software solution, or have a question about one of our products, we’d be happy to hear from you.",
    emailLabel: "Email",
    emailTitle: "Tell us about your project.",
    emailDescription:
      "Share a little about what you’re looking to build, the problem you want to solve, or any questions you have. We’ll get back to you to discuss the next steps.",
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

  notFound: {
    title: "Page not found.",
    description:
      "The page you’re looking for doesn’t exist or may have been moved.",
    home: "Back to home",
    goBack: "Go back",
  },

  footer: {
    description: "Independent software studio.",
    projects: "Projects",
    services: "Services",
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
