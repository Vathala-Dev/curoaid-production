import type { Metadata } from "next";
import YogaAtHomeContent from "@/app/components/services/YogaAtHomeContent";
import { yogaImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Yoga at Home | Personalised Yoga Sessions – CuroAid",

  description:
  "Practise yoga at home with CuroAid. Enjoy personalised yoga sessions to improve flexibility, support relaxation, enhance mobility and promote overall well-being.",

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
        url: yogaImage,
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