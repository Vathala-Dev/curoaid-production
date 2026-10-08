import type { Metadata } from "next";
import Contact from "../components/contact/contact";


export const metadata: Metadata = {
  title: "Contact CuroAid | Home Healthcare Services",

  description:
    "Contact CuroAid for trusted home healthcare services, appointment support, and patient assistance. Our healthcare team is here to help you with your care needs.",

  keywords: [
    "Contact CuroAid",
    "CuroAid contact",
    "CuroAid healthcare",
    "home healthcare services",
    "healthcare at home",
    "CuroAid appointment",
    "home healthcare Chennai",
    "healthcare services Chennai",
  ],

  alternates: {
    canonical: "https://curoaid.com/contact",
  },

  openGraph: {
    title: "Contact CuroAid | Home Healthcare Services",
    description:
      "Get in touch with CuroAid for trusted home healthcare services, appointment support, and patient assistance.",
    url: "https://curoaid.com/contact",
    siteName: "CuroAid",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://curoaid.com/assets/contact-banner.webp",
        width: 1800,
        height: 650,
        alt: "Contact CuroAid for home healthcare services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CuroAid | Home Healthcare Services",
    description:
      "Contact CuroAid for trusted home healthcare services and patient support.",
    images: ["https://curoaid.com/assets/contact-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <Contact/>;
}