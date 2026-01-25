import { socialLinks } from "./socialLinks";

export const siteConfig = {
  name: "Sadhana Tracker",
  description: `Простой трекер сна и привычек. Наблюдение за сном улучшает его качество — утро начинается раньше, а времени на важные дела становится больше.`,
  shortDescription: "Простой трекер сна и привычек",
  keywords: ["mobile app", "landing page"],
  logo: "/assets/favicon.png",
  storeLinks: {
    apple: "https://app.sadhana-tracker.com",
    google: "#",
  },
  socialLinks,
} as const;
