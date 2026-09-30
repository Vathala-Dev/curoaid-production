import { aboutbanner, aboutusImage, bloodTestBanner, imgWhyChoose, mission, vision } from "@/lib/assets";
import { AboutPageData } from "./Aboutpage";

export const aboutData: AboutPageData = {
  hero: {
    badge: "",
    title: "About Us",
    description:
      "CuroAid is your healthcare concierge and one point of contact for all your medical needs.",
    image:
      aboutbanner,
    imageAlt: "CuroAid healthcare services",
    button: "Book Now",
  },

  about: {
    title: "About - CuroAid",

    description: [
      "We help individuals and families access and coordinate healthcare services through a simple, reliable, and convenient experience. From doctor consultations and nursing care to elderly care, physiotherapy, diagnostics, medicines, and specialised care, we bring different healthcare needs together under one roof.",

      "Whether you need care for yourself, your parents, or a loved one, CuroAid helps you find the right healthcare support without the hassle of managing multiple services and providers on your own.",
    ],

    highlight:
      "One platform. Multiple healthcare needs. One trusted point of contact.",

    image:
      aboutusImage,

    imageAlt: "CuroAid healthcare professionals",

    button: "Book Now",
  },

  mission: {
    title: "Our Mission",

    icon: mission,

    highlight:
      "To simplify access to healthcare by making the right care easier to find, arrange, and manage.",

    description:
      "We aim to connect individuals and families with dependable healthcare services and professionals while making every step of their healthcare journey more convenient.",
  },

  vision: {
    title: "Our Vision",

    icon: vision,

    highlight:
      "To become a trusted healthcare concierge for every individual and family.",

    description:
      "We envision a healthcare experience where people can turn to one trusted partner for their medical needs, with access to the right care, services, and support whenever they need them.",
  },

  whyChoose: {
    badge: "WHY CHOOSE",
    title: "Why Choose CuroAid?",
    subtitle: "Healthcare That Comes to You",

    image:
      imgWhyChoose,

    imageAlt: "CuroAid healthcare team",

    heading: "Medical Care Designed Around You",

    description:
      "Your healthcare should be convenient, comfortable, and personal. CuroAid Home Healthcare brings professional medical care to your doorstep, allowing you and your loved ones to receive attention without the inconvenience of travelling to a hospital or clinic.",

    items: [
      {
        title: "Comfortable Care at Home",
        description:
          "Receive medical attention in the familiar surroundings of your own home.",
      },
      {
        title: "Personalised Attention",
        description:
          "Every visit is focused on understanding your individual health concerns and needs.",
      },
      {
        title: "Convenient & Hassle-Free",
        description:
          "Skip unnecessary travel, waiting rooms, and the stress of arranging a clinic visit.",
      },
      {
        title: "Care for Every Stage",
        description:
          "From everyday health concerns to elderly care and follow-up support.",
      },
      {
        title: "Trusted Healthcare Support",
        description:
          "CuroAid is committed to making quality healthcare more accessible while keeping patient comfort at the centre.",
      },
    ],
  },
};
