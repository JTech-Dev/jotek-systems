import type { ProjectFeatureIcon } from "../components/projects/ProjectFeatureCard";

export type LocalizedText = {
  en: string;
  es: string;
};

export type ProjectFeature = {
  title: LocalizedText;
  description: LocalizedText;
  icon: ProjectFeatureIcon;
};

export type ProjectStatus = "available" | "beta" | "development" | "comingSoon";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  shortDescription: LocalizedText;
  description: LocalizedText;
  about: LocalizedText;
  website: string;
  logo: string;
  platforms: string[];
  features: ProjectFeature[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    id: "macroit",
    name: "MacroIt",
    status: "available",
    shortDescription: {
      en: "Track macros. Eat smarter.",
      es: "Registra tus macros. Come más inteligente.",
    },
    description: {
      en: "A nutrition and wellness app for tracking macros, food, water, health insights, and daily progress across iPhone and Apple Watch.",
      es: "Una app de nutrición y bienestar para registrar macros, alimentos, agua, datos de salud y progreso diario desde iPhone y Apple Watch.",
    },
    about: {
      en: "MacroIt brings nutrition tracking, wellness insights, and everyday progress into one focused experience designed for iPhone and Apple Watch.",
      es: "MacroIt reúne el seguimiento nutricional, datos de bienestar y el progreso diario en una experiencia enfocada diseñada para iPhone y Apple Watch.",
    },
    website: "https://macroit.fit",
    logo: "/images/projects/macroit/macroit-logo.png",
    platforms: ["iPhone", "Apple Watch"],
    features: [
      {
        icon: "macros",
        title: {
          en: "Macro tracking",
          es: "Seguimiento de macros",
        },
        description: {
          en: "Track calories, protein, carbohydrates, fat, and daily nutrition progress.",
          es: "Registra calorías, proteínas, carbohidratos, grasas y tu progreso nutricional diario.",
        },
      },
      {
        icon: "utensils",
        title: {
          en: "Food & water logging",
          es: "Registro de alimentos y agua",
        },
        description: {
          en: "Keep food and hydration tracking together as part of your daily routine.",
          es: "Mantén el registro de alimentos e hidratación juntos como parte de tu rutina diaria.",
        },
      },
      {
        icon: "sparkles",
        title: {
          en: "AI food analysis",
          es: "Análisis de alimentos con IA",
        },
        description: {
          en: "Analyze food with AI to help make nutrition logging faster and easier.",
          es: "Analiza alimentos con IA para hacer el registro nutricional más rápido y sencillo.",
        },
      },
      {
        icon: "health",
        title: {
          en: "Health insights",
          es: "Datos de salud",
        },
        description: {
          en: "Bring supported health and activity information into your nutrition experience.",
          es: "Integra información compatible de salud y actividad en tu experiencia nutricional.",
        },
      },
      {
        icon: "watch",
        title: {
          en: "Apple Watch experience",
          es: "Experiencia en Apple Watch",
        },
        description: {
          en: "Access key tracking features and progress directly from Apple Watch.",
          es: "Accede a funciones clave de seguimiento y progreso directamente desde Apple Watch.",
        },
      },
      {
        icon: "trophy",
        title: {
          en: "Achievements & progress",
          es: "Logros y progreso",
        },
        description: {
          en: "Stay engaged with achievements and progress built around consistent daily habits.",
          es: "Mantente motivado con logros y progreso basados en hábitos diarios consistentes.",
        },
      },
    ],
    screenshots: [
      "/images/projects/macroit/screenshots/dashboard.png",
      "/images/projects/macroit/screenshots/ai-scan.png",
      "/images/projects/macroit/screenshots/health.png",
      "/images/projects/macroit/screenshots/apple-watch-dashboard.png",
    ],
  },

  {
    id: "teccio",
    name: "Teccio",
    status: "available",
    shortDescription: {
      en: "Plan once. Publish all week.",
      es: "Planifica una vez. Publica toda la semana.",
    },
    description: {
      en: "A social media workspace for planning, reviewing, scheduling, and publishing content across multiple social platforms from one place.",
      es: "Un espacio de trabajo para planificar, revisar, programar y publicar contenido en múltiples plataformas sociales desde un solo lugar.",
    },
    about: {
      en: "Teccio is designed to reduce the daily rush of managing social media by bringing planning, review, scheduling, and publishing into one workspace.",
      es: "Teccio está diseñado para reducir la improvisación diaria al manejar redes sociales, reuniendo planificación, revisión, programación y publicación en un solo espacio de trabajo.",
    },
    website: "https://teccio.app",
    logo: "/images/projects/teccio/teccio-logo.png",
    platforms: ["Web"],
    features: [
      {
        icon: "calendar",
        title: {
          en: "Content planning",
          es: "Planificación de contenido",
        },
        description: {
          en: "Organize upcoming social content from a focused planning workspace.",
          es: "Organiza el contenido próximo para redes sociales desde un espacio de planificación enfocado.",
        },
      },
      {
        icon: "calendar",
        title: {
          en: "Post scheduling",
          es: "Programación de publicaciones",
        },
        description: {
          en: "Prepare content ahead of time and schedule posts for supported social platforms.",
          es: "Prepara contenido con anticipación y programa publicaciones para plataformas sociales compatibles.",
        },
      },
      {
        icon: "share",
        title: {
          en: "Multi-platform workflow",
          es: "Flujo multiplataforma",
        },
        description: {
          en: "Manage social publishing workflows across multiple platforms from one place.",
          es: "Administra flujos de publicación para múltiples plataformas desde un solo lugar.",
        },
      },
      {
        icon: "sparkles",
        title: {
          en: "AI-assisted content",
          es: "Contenido asistido por IA",
        },
        description: {
          en: "Use AI tools to help create and refine social media content.",
          es: "Utiliza herramientas de IA para ayudar a crear y mejorar contenido para redes sociales.",
        },
      },
      {
        icon: "image",
        title: {
          en: "AI image generation",
          es: "Generación de imágenes con IA",
        },
        description: {
          en: "Generate original images with AI to complement your social media content without leaving Teccio.",
          es: "Genera imágenes originales con IA para complementar tu contenido de redes sociales sin salir de Teccio.",
        },
      },
      {
        icon: "sparkles",
        title: {
          en: "Generate My Week",
          es: "Genera Mi Semana",
        },
        description: {
          en: "Generate a complete week of social content to turn weekly planning into a faster, more focused workflow.",
          es: "Genera una semana completa de contenido para convertir la planificación semanal en un flujo de trabajo más rápido y enfocado.",
        },
      },
    ],
    screenshots: [
      "/images/projects/teccio/screenshots/teccio-dashboard.png",
      "/images/projects/teccio/screenshots/teccio-create-post.png",
      "/images/projects/teccio/screenshots/teccio-generate-my-week.png",
      "/images/projects/teccio/screenshots/teccio-generate-image.png",
      "/images/projects/teccio/screenshots/teccio-posts.png",
      "/images/projects/teccio/screenshots/teccio-analytics.png",
      "/images/projects/teccio/screenshots/teccio-website-analytics.png",
    ],
  },

  {
    id: "dinage",
    name: "Dinage",
    status: "development",
    shortDescription: {
      en: "A new Jotek Systems project in development.",
      es: "Un nuevo proyecto de Jotek Systems en desarrollo.",
    },
    description: {
      en: "Dinage is currently in development. More details will be shared as the project evolves.",
      es: "Dinage se encuentra actualmente en desarrollo. Compartiremos más detalles a medida que el proyecto evolucione.",
    },
    about: {
      en: "Dinage is an upcoming Jotek Systems project. Its product details will be shared as development progresses.",
      es: "Dinage es un próximo proyecto de Jotek Systems. Sus detalles se compartirán a medida que avance el desarrollo.",
    },
    website: "https://dinage.app",
    logo: "/images/projects/dinage/dinage-logo.png",
    platforms: [],
    features: [],
    screenshots: [],
  },
];
