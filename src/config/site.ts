import { socialLinks } from "./socialLinks";

export const siteConfig = {
  name: "Sadhana Tracker",
  description: "Простой трекер сна и привычек. Без браслетов и датчиков. Добавь в свою жизнь осознанности и высвободи время для действительно важных дел.",
  shortDescription: "Простой трекер сна и привычек.",
  keywords: ["mobile app", "landing page"],
  logo: "/assets/favicon.png",
  storeLinks: {
    apple: "https://app.sadhana-tracker.com",
    google: "#",
  },
  socialLinks,
} as const;
