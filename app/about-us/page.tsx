import type { Metadata } from "next";

import { aboutData } from "../components/about/about-us";
import AboutPage1 from "../components/about/Aboutpage";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

export const metadata: Metadata = {
    title: "About CuroAid | Trusted Home Healthcare Services",

    description:
        "Learn about CuroAid and our mission to provide trusted, compassionate, and professional healthcare services at home for individuals and families.",

    keywords: [
        "About CuroAid",
        "CuroAid healthcare",
        "CuroAid home healthcare",
        "home healthcare services",
        "healthcare at home",
        "CuroAid mission",
        "CuroAid healthcare team",
    ],

    alternates: {
        canonical: "https://curoaid.com/about",
    },

    openGraph: {
        title: "About CuroAid | Trusted Home Healthcare Services",
        description:
            "Discover CuroAid's mission to make quality healthcare accessible through trusted and compassionate healthcare services at home.",
        url: "https://curoaid.com/about",
        siteName: "CuroAid",
        type: "website",
        locale: "en_IN",
    },

    twitter: {
        card: "summary_large_image",
        title: "About CuroAid | Trusted Home Healthcare Services",
        description:
            "Learn about CuroAid and our mission to provide trusted healthcare services at home.",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutPage1 data={aboutData} />
            <Footer />
        </>
    );
}