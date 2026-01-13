import { socialLinks } from "./socialLinks";

export const siteConfig = {
  name: "Sadhana Tracker",
  description: "Осознанный трекер сна и привычек. Без браслетов и датчиков. Добавь в свою жизнь продуктивности, высвободи время для действительно важных дел.",
  keywords: ["mobile app", "landing page"],
  logo: "/assets/favicon.png",
  storeLinks: {
    apple: "https://app.sadhana-tracker.com",
    google: "#",
  },
  socialLinks,
} as const;
