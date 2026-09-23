import {
    imgStepIcon1,
    imgStepIcon2,
    imgStepIcon3,
    imgStepIcon4,
} from "@/lib/assets";

export const homeHowToBook = {
    badge: "How to Book",

    title: (
        <>
            Book Home Healthcare
            <br className="hidden sm:block" />
            Services in Just a Few
            <br className="hidden sm:block" />
            Simple Steps
        </>
    ),

    description:
        "Whether you need a Doctor at Home, Home Nursing Services, Physiotherapy at Home, Elder Care at Home, or any of our other healthcare services, booking with CuroAid is simple and convenient.",

    buttonLabel: "Book a Service",

    steps: [
        {
            num: "01",
            title: "Choose Your Service",
            description: "Select the home healthcare service you or your loved one needs.",
            icon: imgStepIcon1,
        },
        {
            num: "02",
            title: "Share Your Details",
            description: "Tell us about your requirements, preferred date, time, and location.",
            icon: imgStepIcon2,
        },
        {
            num: "03",
            title: "Speak With Our Team",
            description: "Our care team will connect with you, understand your needs, and guide you through the next steps.",
            icon: imgStepIcon3,
        },
        {
            num: "04",
            title: "Get Care at Home",
            description: "We arrange the appropriate healthcare professional or service and deliver care at your doorstep.",
            icon: imgStepIcon4,
        },
    ],
};


// data/home/whyChoose.ts

import {
    imgWhyChoose,
    imgGroup35,
    imgGroup37,
    imgGroup38,
    imgGroup39,
    imgGroup40,
    imgGroup41,
} from "@/lib/assets";

export const homeWhyChoose = {
    badge: "Why Choose",

    title: "Why Choose Curoaid?",

    description: (
        <>
            At CuroAid, we believe healthcare should be more than just a
            service — it should provide{" "}
            <strong className="font-semibold text-black">
                comfort, trust, dignity, and peace of mind.
            </strong>{" "}
            Our home healthcare services are designed to bring professional
            care closer to patients while making the experience easier for
            families.
        </>
    ),

    image: imgWhyChoose,

    imageAlt: "CuroAid home healthcare service",

    items: [
        {
            icon: imgGroup35,
            title: "Personalized Care",
            description:
                "Every patient is different. We provide care based on individual health needs, preferences, and requirements.",
        },
        {
            icon: imgGroup37,
            title: "Professional Healthcare Support",
            description:
                "Get access to trained healthcare professionals who are committed to providing dependable care at home.",
        },
        {
            icon: imgGroup38,
            title: "Complete Home Healthcare",
            description:
                "From Doctor at Home and nursing to physiotherapy, elder care, wound care, diagnostics, and more — access a wide range of services in one place.",
        },
        {
            icon: imgGroup40,
            title: "Comfort & Convenience",
            description:
                "Receive the care you need without the unnecessary stress of travelling to hospitals or clinics.",
        },
        {
            icon: imgGroup39,
            title: "Compassionate & Patient-Centered Care",
            description:
                "We treat every patient with empathy, respect, and dignity while keeping their comfort and wellbeing at the center of care.",
        },
        {
            icon: imgGroup41,
            title: "Support for Families",
            description:
                "We help families feel more confident knowing their loved ones have access to professional support at home.",
        },
    ],
};

// data/home/cta.ts

import { imgCtaBanner } from "@/lib/assets";

export const homeCTA = {
    ctabanner: imgCtaBanner,

    ctaTitle: "Your Health Deserves Care That Comes Home",

    ctasubtitle:
        "It's emotional without being overly dramatic, and it naturally reinforces CuroAid's",

    ctadescription: (
        <strong className="font-bold">
            home healthcare
        </strong>
    ),

    buttonlabel: "Book Free Consultation",
};

export const homeFAQ ={
  "badge": "FAQ",
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "What home healthcare services does CuroAid provide?",
      "answer": "CuroAid provides a wide range of home healthcare services, including Doctor at Home, Home Nursing, Physiotherapy, Elder Care, Wound Care, Yoga at Home, Veterinary Care, Blood Tests at Home, NRI Patient Care, and Hospital Equipment."
    },
    {
      "question": "How can I book a CuroAid home healthcare service?",
      "answer": "You can book a service through the CuroAid website or mobile app. Select the required service, choose a convenient date and time, provide the necessary details, and confirm your booking."
    },
    {
      "question": "Can I get a doctor consultation at home?",
      "answer": "Yes. CuroAid provides Doctor at Home services, allowing patients to receive professional medical consultations in the comfort of their home."
    },
    {
      "question": "Does CuroAid provide nursing care at home?",
      "answer": "Yes. CuroAid provides professional Home Nursing Services for patients who need assistance with medical care, recovery, elderly support, and ongoing healthcare needs at home."
    },
    {
      "question": "Does CuroAid provide physiotherapy at home?",
      "answer": "Yes. CuroAid offers Physiotherapy at Home, helping patients receive personalized physiotherapy support without the need to travel to a clinic or hospital."
    },
    {
      "question": "Is CuroAid home healthcare suitable for elderly patients?",
      "answer": "Yes. Home healthcare can provide elderly patients with convenient access to professional support while allowing them to receive care in a familiar and comfortable environment."
    },
    {
      "question": "Does CuroAid provide blood tests at home?",
      "answer": "Yes. CuroAid provides Blood Test at Home services, allowing patients to have samples collected from their home for convenient diagnostic testing."
    },
    {
      "question": "Can NRI families arrange healthcare for their parents in India?",
      "answer": "Yes. CuroAid provides NRI Patient Care services to help families coordinate healthcare and support for their parents and loved ones living in India."
    },
    {
      "question": "How do I know which CuroAid service is right for me?",
      "answer": "If you are unsure which service you need, you can contact the CuroAid team for guidance. Our team can help you understand the available services based on your healthcare requirements."
    },
    {
      "question": "How can I contact CuroAid for more information?",
      "answer": "You can contact CuroAid through the contact options provided on the website. Our team can assist you with service information, bookings, and other home healthcare requirements."
    }
  ]
}