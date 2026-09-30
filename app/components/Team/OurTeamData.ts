import { aboutbanner, aboutusImage, Hema, Naveed, Siraj, Taj } from "@/lib/assets";
import type { OurTeamPageData } from "./OurTeamPage";

export const ourTeamData: OurTeamPageData = {

    hero: {
        badge: "OUR TEAM",
        title: "Meet Our Team",
        description:
            "Meet the dedicated professionals working together to make quality healthcare more accessible, convenient, and comfortable for every family.",
        image:
            aboutbanner,
        imageAlt: "CuroAid healthcare team",
        button: "Contact Us",
    },

    introduction: {
        title: "People Behind CuroAid",

        description: [
            "At CuroAid, our team brings together healthcare professionals, care coordinators, and support specialists who work together to make healthcare easier to access.",

            "We focus on understanding the needs of every individual and family and helping coordinate the right healthcare services with convenience, care, and professionalism.",
        ],

        highlight:
            "One team working together to make your healthcare journey easier.",

        image:
            aboutusImage,

        imageAlt: "CuroAid healthcare professionals",
    },

    team: {
        badge: "OUR TEAM",
        title: "Our Expert Team",
        description:
            "Meet the experienced professionals behind our technology and healthcare services.",

        members: [
            {
                name: "Naveed M",
                role: "Co-Founder & CEO",
                description:
                    'Transitioned from a successful corporate sales career to socio-entrepreneurship driven by a strong will to make an impact in the healthcare sector. He founded SynerHeal, a pharmaceutical company, and successfully led it to become one of the fastest-growing companies in Advanced Wound Dressing. Taking the next step, Naveed ventured into healthcare services delivery through the creation of Muniah Technologies, a platform revolutionizing healthcare through the "Hyper Local On-Demand Healthcare Service Delivery" application software, Vathala.',
                image: Naveed,
                imageAlt: "Naveed M - Co-Founder and CEO",
            },

            {
                name: "Sirajudeen",
                role: "Co-Founder & Director",
                description:
                    "Sirajudeen, our Co-Founder and Director, is a technology leader with over two decades of experience in the digital solutions industry. With a proven track record of success, he has held senior strategic positions at Abu Dhabi Police and served as the CEO for various IT companies in the UAE, UK, and India. Currently leading Muniah Technologies, Sirajudeen is a visionary leader passionate about utilizing technology to address real-world healthcare challenges.",
                image: Siraj,
                imageAlt: "Sirajudeen - Co-Founder and Director",
            },

            {
                name: "Tajudeen",
                role: "CTO",
                description:
                    "Meet a seasoned IT professional with an extensive background of over 15 years in the banking and logistics sectors. As a technical lead, he possesses exceptional expertise in Oracle and PostgreSQL databases, enabling him to navigate complex technical landscapes with ease. In his current role as the CTO of Muniah Technologies, he has taken on the responsibility of delivering world-class on-demand healthcare solutions. By harnessing the potential of cutting-edge technology, he strives to unlock the full benefits for patients, service providers, and healthcare specialists alike.",
                image: Taj,
                imageAlt: "Tajudeen - CTO",
            },

            {
                name: "Hema S",
                role: "Head of Operations",
                description:
                    "Affectionately known as Hema, our Head of Operations is a true symbol of commitment and responsiveness. Customers love her for her prompt and effective communication. With a master's degree in Biotechnology from Periyar University and two decades of work experience, she brings a wealth of expertise to her role. Hema manages day-to-day operations and strategy at Muniah Technologies, and she is also part of Synerheal, where she oversees operations and logistics.",
                image: Hema,
                imageAlt: "Hema S - Head of Operations",
            },
        ],
    },

    cta: {
        title: "Need Help With Your Healthcare?",
        description:
            "Our team is here to help you find and coordinate the right healthcare service for yourself or your loved ones.",
        button: "Contact Us",
    },
};