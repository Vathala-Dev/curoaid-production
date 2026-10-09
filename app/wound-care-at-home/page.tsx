import WoundCareContent from "@/app/components/services/WoundCareContent";
import { woundCareImage } from "@/lib/assets";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wound Care Services at Home | CuroAid",

    description:
        "Get professional wound dressing and wound care services at home with CuroAid. Convenient support for appropriate post-surgical, chronic and other wound care needs.",

    keywords: [
        "wound care at home",
        "wound dressing at home",
        "home wound care",
        "wound care services",
        "post surgical wound care",
        "chronic wound care",
        "wound dressing service",
        "CuroAid",
    ],

    openGraph: {
        title: "Wound Care at Home | Professional Wound Care – CuroAid",

        description:
            "Get professional wound care at home with CuroAid. Receive personalised wound dressing, post-surgical wound care and expert support to promote safe healing.",

        images: [
            {
                url: woundCareImage,
                width: 1200,
                height: 630,
                alt: "CuroAid Wound Care Services at Home",
            },
        ],
    },
};

export default function WoundCarePage() {
    return <WoundCareContent />
}