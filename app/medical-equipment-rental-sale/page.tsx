import type { Metadata } from "next";
import MedicalEquipmentContent from "@/app/components/services/MedicalEquipmentContent";

export const metadata: Metadata = {
  title: "Medical Equipment Rental & Sale | CuroAid",

  description:
    "Rent or purchase medical equipment for home healthcare with CuroAid. Explore hospital beds, wheelchairs, mobility aids and other patient-care equipment.",

  keywords: [
    "medical equipment rental",
    "medical equipment sale",
    "medical equipment on rent",
    "medical equipment for sale",
    "hospital equipment rental",
    "hospital bed rental",
    "wheelchair rental",
    "home medical equipment",
    "medical equipment hire",
    "CuroAid",
  ],

  openGraph: {
    title: "Medical Equipment Rental & Sale | CuroAid",

    description:
      "Convenient medical equipment rental and purchase options for home healthcare.",

    images: [
      {
        url: "/images/services/medical-equipment/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid Medical Equipment Rental and Sale",
      },
    ],
  },
};

export default function MedicalEquipmentPage() {
  return <MedicalEquipmentContent />;
}