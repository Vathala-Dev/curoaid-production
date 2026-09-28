import type { Metadata } from "next";
import ElderCareContent from "@/app/components/services/ElderCareContent";

export const metadata: Metadata = {
    title: "Elder Care Services at Home | CuroAid",

    description:
        "Compassionate and reliable elder care services at home for senior citizens, including daily assistance, companionship, mobility support and healthcare coordination with CuroAid.",

    keywords: [
        "elder care",
        "elder care services",
        "elderly care at home",
        "senior citizen care",
        "elderly care services",
        "old age care",
        "parents care at home",
        "CuroAid",
    ],

    openGraph: {
        title: "Elder Care Services at Home | CuroAid",

        description:
            "Compassionate elderly care and support delivered to your doorstep.",

        images: [
            {
                url: "/images/services/elder-care/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Elder Care Services",
            },
        ],
    },
};

export default function ElderCarePage() {
    return <ElderCareContent />;
}