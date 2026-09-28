import PhysiotherapyContent from "../components/services/PhysiotheraphyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Physiotherapy at Home | CuroAid",

    description:
        "Get professional physiotherapy and rehabilitation support at home from qualified physiotherapists with CuroAid.",

    keywords: [
        "physiotherapy at home",
        "home physiotherapy",
        "physiotherapist at home",
        "physiotherapy services",
        "physical therapy at home",
        "rehabilitation at home",
        "CuroAid",
    ],

    openGraph: {
        title: "Physiotherapy at Home | CuroAid",

        description:
            "Professional physiotherapy and rehabilitation care delivered to your doorstep.",

        images: [
            {
                url: "/images/services/physiotherapy/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Physiotherapy at Home Services",
            },
        ],
    },
};
export default function Physio() {
    return (
        <>
            <PhysiotherapyContent />
        </>

    );
}