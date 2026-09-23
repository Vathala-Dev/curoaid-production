import WoundCareContent from "@/app/components/services/WoundCareContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wound Care Services at Home | CuroAid",

  description:
    "Get professional wound dressing and wound care services at home with CuroAid. Convenient support for appropriate post-surgical, chronic and other wound care needs.",

  keywords: [
    "wound care at home",
    "wound dressing at home",
    "home wound care",
    "wound care services",
    "post surgical wound care",
    "chronic wound care",
    "wound dressing service",
    "CuroAid",
  ],

  openGraph: {
    title: "Wound Care Services at Home | CuroAid",

    description:
      "Professional wound dressing and wound care support delivered to your doorstep.",

    images: [
      {
        url: "/images/services/wound-care/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid Wound Care Services at Home",
      },
    ],
  },
};

export default function WoundCarePage() {
  return <WoundCareContent/>
}