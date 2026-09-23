

import HomeDoctorContent from "@/app/components/services/HomeDoctorContent";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor at Home | CuroAid",

  description:
    "Get professional doctor consultations and medical care at home with CuroAid. Convenient healthcare from qualified doctors at your doorstep.",

  keywords: [
    "doctor at home",
    "doctor home visit",
    "doctor consultation at home",
    "home doctor",
    "doctor home service",
    "medical care at home",
    "CuroAid",
  ],

  openGraph: {
    title: "Doctor at Home | CuroAid",

    description:
      "Professional doctor consultation and medical care delivered to your doorstep.",

    images: [
      {
        url: "/images/services/doctor-at-home/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CuroAid Doctor at Home Services",
      },
    ],
  },
};
export default function DoctorAtHomePage() {
  return (
    <HomeDoctorContent />
  );
}