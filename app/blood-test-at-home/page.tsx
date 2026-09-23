import type { Metadata } from "next";
import BloodTestContent from "@/app/components/services/BloodTestContent";

export const metadata: Metadata = {
    title: "Blood Test at Home | CuroAid",

    description:
        "Book convenient blood test and diagnostic sample collection at home with CuroAid. Get professional sample collection at your doorstep.",

    keywords: [
        "blood test at home",
        "home blood test",
        "blood sample collection at home",
        "blood test home service",
        "diagnostic test at home",
        "lab test at home",
        "CuroAid",
    ],

    openGraph: {
        title: "Blood Test at Home | CuroAid",

        description:
            "Convenient blood sample collection and diagnostic testing support delivered to your doorstep.",

        images: [
            {
                url: "/images/services/blood-test/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Blood Test at Home",
            },
        ],
    },
};

export default function BloodTestPage() {
    return <BloodTestContent />;
}