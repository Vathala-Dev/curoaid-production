import ServiceDesign, { ServiceData, } from "./ServiceDesign";
import { l12, l10, l11, l2, l3, l4, l5, l6, l8, l9, nursebanner, r1, l1, imgWhyChoose, tick } from "@/lib/assets";
import {
  imgStepIcon1,
  imgStepIcon2,
  imgStepIcon3,
  imgStepIcon4,
} from "@/lib/assets";

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
    image: r1,
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
          l3,
        imageAlt: "Elderly nursing care",
      },

      {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l4,
        imageAlt: "Post hospitalisation care",
        featured: true,
      },
      {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l5,
        imageAlt: "Post hospitalisation care",
        featured: true,
      },
      {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l6,
        imageAlt: "Post hospitalisation care",
        featured: true,
      }, {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l8,
        imageAlt: "Post hospitalisation care",
        featured: true,
      }, {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l9,
        imageAlt: "Post hospitalisation care",
        featured: true,
      }, {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l10,
        imageAlt: "Post hospitalisation care",
        featured: true,
      }, {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l11,
        imageAlt: "Post hospitalisation care",
        featured: true,
      },
      {
        title: "Post-Hospitalisation Nursing Care",
        description:
          "Reliable professional nursing assistance during recovery.",
        image:
          l12,
        imageAlt: "Post hospitalisation care",
        featured: true,
      },

      // Add remaining cards...
    ],
  },

  whyChoose: {
    badge: "WHY CHOOSE",
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
    image: "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1790157754246/l2.webp",
    imageAlt: "CuroAid healthcare team",
    items: [
      {
        title: "Nursing Support",
        description:
          "Experienced nursing professionals providing reliable home care.",
        icon: tick
      },
      {
        title: "Professional Care",
        description:
          "Qualified professionals focused on safe and personalized care.",
        icon: tick

      },
      {
        title: "Home Environment",
        description:
          "Receive healthcare support in the comfort of your own home.",
        icon: tick

      },
      {
        title: "Support for Recovery",
        description:
          "Continuous support throughout your recovery journey.",
        icon: tick

      },
      {
        title: "Care for Elderly",
        description:
          "Dedicated support for seniors requiring assistance.",
        icon: tick

      },
      {
        title: "Convenient & Reliable",
        description:
          "Flexible home healthcare support around your needs.",
        icon: tick

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
        num: "01",
        title: "Choose Nursing Service",
        description: "Select the home nursing service that matches your patient's care requirements.",
        icon: imgStepIcon1,
      },
      {
        num: "02",
        title: "Share Patient Details",
        description: "Tell us about the patient's condition, care needs, preferred date, time, and location.",
        icon: imgStepIcon2,
      },
      {
        num: "03",
        title: "Speak With Our Team",
        description: "Our care team will contact you, understand your requirements, and guide you through the next steps.",
        icon: imgStepIcon3,
      },
      {
        num: "04",
        title: "Get Nursing Care at Home",
        description: "We arrange the appropriate nursing professional and provide care at your doorstep.",
        icon: imgStepIcon4,
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