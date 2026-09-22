import type { Metadata } from "next";
import HomeNursingContent from "@/app/components/services/HomeNursingContent";

export const metadata: Metadata = {
    title: "Home Nursing Services | CuroAid",

    description:
        "Professional home nursing services from experienced healthcare professionals with CuroAid.",

    keywords: [
        "home nursing",
        "home nursing services",
        "nurse at home",
        "elderly care",
        "CuroAid",
    ],

    openGraph: {
        title: "Home Nursing Services | CuroAid",

        description:
            "Professional nursing care delivered to your doorstep.",

        images: [
            {
                url: "/images/services/home-nursing/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Home Nursing Services",
            },
        ],
    },
};

export default function HomeNursingPage() {
    return <HomeNursingContent />;
}