import type { Metadata } from "next";
import VeterinaryCareContent from "@/app/components/services/VeterinaryCareContent";

export const metadata: Metadata = {
  title: "Veterinary Care at Home | CuroAid",

  description:
    "Get professional veterinary consultation and pet healthcare support at home with CuroAid. Convenient veterinary care for your pets at your doorstep.",

  keywords: [
    "veterinary care at home",
    "veterinary doctor at home",
    "vet at home",
    "pet doctor at home",
    "pet healthcare",
    "veterinary services",
    "pet consultation at home",
    "CuroAid",
  ],

  openGraph: {
    title: "Veterinary Care at Home | CuroAid",

    description:
      "Professional veterinary consultation and pet healthcare support delivered to your doorstep.",

    images: [
      {
        url: "/images/services/veterinary-care/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid Veterinary Care at Home",
      },
    ],
  },
};

export default function VeterinaryCarePage() {
  return <VeterinaryCareContent />;
}