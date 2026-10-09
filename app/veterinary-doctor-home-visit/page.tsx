import type { Metadata } from "next";
import VeterinaryCareContent from "@/app/components/services/VeterinaryCareContent";
import { veterinaryImage } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Veterinary Care at Home | Home Visit Vet – CuroAid",

  description:
    "Get veterinary care at home with CuroAid. Book a home visit vet for your pets and receive convenient consultations, health check-ups and personalised veterinary care.",

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
        url: veterinaryImage,
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