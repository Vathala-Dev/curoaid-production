import type { Metadata } from "next";
import HomeMedicineDeliveryContent from "@/app/components/services/HomeMedicineDeliveryContent";

export const metadata: Metadata = {
    title: "Home Medicine Delivery | CuroAid",

    description:
        "Order medicines conveniently from CuroAid and get them delivered to your doorstep with reliable home medicine delivery services.",

    keywords: [
        "home medicine delivery",
        "medicine delivery at home",
        "online medicine delivery",
        "medicine delivery service",
        "prescription medicine delivery",
        "medicine home delivery",
        "CuroAid",
    ],

    openGraph: {
        title: "Home Medicine Delivery | CuroAid",

        description:
            "Get your medicines delivered conveniently to your doorstep with CuroAid Home Medicine Delivery.",

        images: [
            {
                url: "/images/services/home-medicine-delivery/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Home Medicine Delivery",
            },
        ],
    },
};

export default function HomeMedicineDeliveryPage() {
    return <HomeMedicineDeliveryContent />;
}