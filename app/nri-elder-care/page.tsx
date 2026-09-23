import type { Metadata } from "next";
import NriElderCareContent from "@/app/components/services/NriElderCareContent";

export const metadata: Metadata = {
  title: "NRI Elder Care Services in India | CuroAid",

  description:
    "Reliable elder care and healthcare support in India for NRI families. Coordinate home care, nursing, doctor visits and healthcare services for your parents with CuroAid.",

  keywords: [
    "NRI elder care",
    "NRI parents care",
    "elder care for NRI parents",
    "parents care in India",
    "NRI healthcare services",
    "elderly care in India",
    "home care for NRI parents",
    "CuroAid",
  ],

  openGraph: {
    title: "NRI Elder Care Services in India | CuroAid",

    description:
      "Reliable elder care and healthcare support for NRI families and their parents in India.",

    images: [
      {
        url: "/images/services/nri-elder-care/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid NRI Elder Care Services in India",
      },
    ],
  },
};

export default function NriElderCarePage() {
  return <NriElderCareContent />;
}