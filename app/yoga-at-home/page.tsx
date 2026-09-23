import type { Metadata } from "next";
import YogaAtHomeContent from "@/app/components/services/YogaAtHomeContent";

export const metadata: Metadata = {
  title: "Yoga Classes at Home | CuroAid",

  description:
    "Join personalised yoga classes at home with professional guidance from CuroAid. Convenient yoga sessions for beginners, seniors and wellness-focused individuals.",

  keywords: [
    "yoga classes at home",
    "yoga at home",
    "home yoga classes",
    "yoga instructor at home",
    "personal yoga classes",
    "yoga teacher at home",
    "senior citizen yoga",
    "CuroAid",
  ],

  openGraph: {
    title: "Yoga Classes at Home | CuroAid",

    description:
      "Personalised yoga sessions with professional guidance delivered conveniently at your home.",

    images: [
      {
        url: "/images/services/yoga-at-home/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid Yoga Classes at Home",
      },
    ],
  },
};

export default function YogaAtHomePage() {
  return <YogaAtHomeContent />;
}