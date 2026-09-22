import ServiceDesign, { ServiceData,} from "./ServiceDesign";
import { nursebanner } from "@/lib/assets";
const homeNursingData: ServiceData = {
  hero: {
    badge: "Professional Nursing Care, Right at Your Doorstep",
    title: "Home Nursing Services",
    description:
      "Get compassionate and professional nursing support at home, tailored to your healthcare needs.",
    image: nursebanner,
    imageAlt: "Home nursing service",
    button: "Book Now",
  },

  introduction: {
    title: "Curoaid Home Nursing Service",
    description:
      "At Curoaid, we provide reliable and compassionate nursing care at home for elderly patients, post-surgical recovery, chronic conditions and more.",
    image: nursebanner,
    imageAlt: "CuroAid home nursing",
    button: "Book Now",
  },

  services: {
    badge: "SERVICES",
    title: "Our Home Nursing Services",
    description:
      "Complete care, designed around your needs.",
    items: [
      {
        title: "Elderly Nursing Care",
        description:
          "Compassionate nursing support for seniors who need ongoing assistance.",
        image:
          nursebanner,
        imageAlt: "Elderly nursing care",
      },

      {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          nursebanner,
        imageAlt: "Post hospitalisation care",
        featured: true,
      },

      // Add remaining cards...
    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose Curoaid?",
    description:
      "Healthcare that comes to you.",
    image:
      nursebanner,
    imageAlt: "CuroAid healthcare team",
    items: [
      {
        title: "Nursing Support",
        description:
          "Experienced nursing professionals providing reliable home care.",
      },
      {
        title: "Professional Care",
        description:
          "Qualified professionals focused on safe and personalized care.",
      },
      {
        title: "Home Environment",
        description:
          "Receive healthcare support in the comfort of your own home.",
      },
      {
        title: "Support for Recovery",
        description:
          "Continuous support throughout your recovery journey.",
      },
      {
        title: "Care for Elderly",
        description:
          "Dedicated support for seniors requiring assistance.",
      },
      {
        title: "Convenient & Reliable",
        description:
          "Flexible home healthcare support around your needs.",
      },
    ],
  },

  booking: {
    badge: "HOW TO BOOK",
    title: "How to Book Our Home Nursing Service",
    description:
      "Getting professional healthcare at home is simple with CuroAid.",
    image:
      nursebanner,
    imageAlt: "CuroAid home healthcare booking",
    button: "Book a Service",
    steps: [
      {
        number: "01",
        title: "Sign Up",
        description:
          "Register your account and provide basic information.",
      },
      {
        number: "02",
        title: "Choose Your Service",
        description:
          "Select the home healthcare service you need.",
      },
      {
        number: "03",
        title: "Select Date & Time",
        description:
          "Choose your preferred date and time.",
      },
      {
        number: "04",
        title: "Confirm Booking",
        description:
          "Review and confirm your appointment.",
      },
    ],
  },

  cta: {
    title: "Need Medical Care at Home?",
    description:
      "CuroAid brings trusted healthcare to your doorstep.",
    image:
      nursebanner,
    imageAlt: "Healthcare at home",
    button: "Book Free Consultation",
  },

  faq: {
    badge: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question:
          "Is home healthcare better than visiting a hospital?",
        answer:
          "Home healthcare can provide convenient professional support for patients who are appropriate for care at home.",
      },
      {
        question:
          "What home nursing services are available?",
        answer:
          "Home nursing services can include elderly care, post-hospitalisation care, medication assistance, wound care and other appropriate support.",
      },
      {
        question:
          "Can I book nursing care for an elderly family member?",
        answer:
          "Yes, nursing support can be arranged based on the individual's care requirements.",
      },
    ],
  },
};

export default function HomeNursing() {
  return <ServiceDesign data={homeNursingData} />;
}