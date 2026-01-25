import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
  {
    title: "Ручной трекинг сна",
    description: "Отмечайте отбой, подъём и дневной сон. Осознанно, без автоматических датчиков и «магии».",
    icon: FiStar,
  },
  {
    title: "Всё на одном экране",
    description: "Данные и статистика в табличном виде. Как в Excel, только удобнее и всегда под рукой.",
    icon: FiZap,
  },
  {
    title: "Без давления",
    description: "Без оценок. Просто наблюдайте, и со временем режим начнет улучшаться.",
    icon: FiBox,
  },
];
