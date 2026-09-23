


import {
    doctorBanner,
    imgStepIcon1,
    imgStepIcon2,
    imgStepIcon3,
    imgStepIcon4, tick, doctorImage, doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7
} from "@/lib/assets";
import ServiceDesign, { ServiceData } from "./ServiceDesign";


const doctorAtHomeData: ServiceData = {
    hero: {
        badge: "Expert Medical Care at Your Doorstep",
        title: "Doctor at Home",
        description:
            "Get professional medical consultation and care from qualified doctors in the comfort of your home.",
        image: doctorBanner,
        imageAlt: "Doctor providing healthcare at home",
        button: "Book Now",
    },

    introduction: {
        title: "Trusted Doctor Consultation at Home",
        description:
            "CuroAid connects patients with qualified doctors for convenient medical consultations at home. Our service is designed for elderly patients, individuals with mobility difficulties, recovering patients, and families looking for convenient healthcare.",
        image: doctorImage,
        imageAlt: "Doctor consultation at home",
        button: "Book Doctor",
    },

    services: {
        badge: "SERVICES",
        title: "Our Doctor at Home Services",
        description: "Professional medical care delivered to your doorstep.",
        items: [
            {
                title: "General Physician Consultation",
                description:
                    "Get medical consultation for common illnesses and health concerns at home.",
                image: doctor1,
                imageAlt: "General physician consultation",
            },
            {
                title: "Elderly Medical Care",
                description:
                    "Convenient medical support for senior citizens who need regular attention.",
                image: doctor2,
                imageAlt: "Doctor caring for elderly patient",
            },
            {
                title: "Post-Hospitalisation Consultation",
                description:
                    "Continue your recovery with professional medical follow-up at home.",
                image: doctor3,
                imageAlt: "Post hospitalisation doctor consultation",
            },
            {
                title: "Chronic Condition Support",
                description:
                    "Regular medical guidance for patients managing long-term health conditions.",
                image: doctor4,
                imageAlt: "Chronic condition medical care",
            },
            {
                title: "Elderly Medical Care",
                description:
                    "Convenient medical support for senior citizens who need regular attention.",
                image: doctor5,
                imageAlt: "Doctor caring for elderly patient",
            },
            {
                title: "Post-Hospitalisation Consultation",
                description:
                    "Continue your recovery with professional medical follow-up at home.",
                image: doctor6,
                imageAlt: "Post hospitalisation doctor consultation",
            },
            {
                title: "Chronic Condition Support",
                description:
                    "Regular medical guidance for patients managing long-term health conditions.",
                image: doctor7,
                imageAlt: "Chronic condition medical care",
            },
        ],
    },

    whyChoose: {
        badge: "WHY CHOOSE",
        title: "Why Choose CuroAid Doctor at Home?",
        description: (
            <>
                CuroAid makes professional healthcare more convenient by bringing
                medical support directly to your home with{" "}
                <strong className="font-semibold text-black">
                    comfort, convenience, trust and personalised attention.
                </strong>
            </>
        ),
        image: "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790157754246/l2.webp",
        imageAlt: "CuroAid doctor at home",
        items: [
            {
                title: "Qualified Doctors",
                description: "Access professional medical consultation at home.",
                icon: tick,
            },
            {
                title: "Convenient Care",
                description: "Avoid unnecessary travel and waiting time.",
                icon: tick,
            },
            {
                title: "Personalised Attention",
                description: "Receive care based on your individual requirements.",
                icon: tick,
            },
            {
                title: "Home Comfort",
                description: "Get medical support in a familiar environment.",
                icon: tick,
            },
            {
                title: "Qualified Doctors",
                description: "Access professional medical consultation at home.",
                icon: tick,
            },
            {
                title: "Convenient Care",
                description: "Avoid unnecessary travel and waiting time.",
                icon: tick,
            },
            {
                title: "Personalised Attention",
                description: "Receive care based on your individual requirements.",
                icon: tick,
            },
            {
                title: "Home Comfort",
                description: "Get medical support in a familiar environment.",
                icon: tick,
            },
            {
                title: "Qualified Doctors",
                description: "Access professional medical consultation at home.",
                icon: tick,
            },
            {
                title: "Convenient Care",
                description: "Avoid unnecessary travel and waiting time.",
                icon: tick,
            },
           
        ],
    },

    booking: {
        badge: "HOW TO BOOK",
        title: "How to Book a Doctor at Home",
        description:
            "Booking a doctor at home with CuroAid is simple and convenient.",
        image: doctorBanner,
        imageAlt: "Book doctor at home",
        button: "Book Doctor",
        steps: [
            {
                num: "01",
                title: "Choose Doctor Service",
                description:
                    "Select the doctor consultation service you require.",
                icon: imgStepIcon1,
            },
            {
                num: "02",
                title: "Share Patient Details",
                description:
                    "Provide the patient's basic health and location details.",
                icon: imgStepIcon2,
            },
            {
                num: "03",
                title: "Speak With Our Team",
                description:
                    "Our team will understand your requirements and confirm the visit.",
                icon: imgStepIcon3,
            },
            {
                num: "04",
                title: "Doctor Visits Your Home",
                description:
                    "A qualified doctor provides consultation at your doorstep.",
                icon: imgStepIcon4,
            },

        ],
    },

    cta: {
        title: "Need a Doctor at Home?",
        description:
            "Get professional medical consultation without leaving your home.",
        image: doctorBanner,
        imageAlt: "Doctor at home",
        button: "Book a Doctor",
    },

    faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        items: [
            {
                question: "Can I book a doctor to visit my home?",
                answer:
                    "Yes, you can request a doctor consultation at home based on availability and your healthcare requirements.",
            },
            {
                question: "Who can use doctor at home services?",
                answer:
                    "Doctor-at-home services may be suitable for elderly patients, people with mobility difficulties, recovering patients and individuals who prefer home consultation.",
            },
            {
                question: "How do I book a doctor?",
                answer:
                    "You can contact CuroAid and provide the patient's requirements, preferred date, time and location.",
            },
        ],
    },
};


export default function HomeDoctor() {
    return <ServiceDesign data={doctorAtHomeData} />;
}