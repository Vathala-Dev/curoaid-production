"use client";

import { useState } from "react";
import Image from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";
import { imgFAQArrow } from "@/lib/assets";

const faqs = [
  {
    q: "Is home healthcare better than visiting a hospital?",
    a: "For many non-emergency medical needs, home healthcare provides a comfortable and convenient alternative while maintaining professional care standards.",
  },
  {
    q: "What home healthcare services does CuroAid offer?",
    a: "CuroAid offers Doctor at Home, Home Nursing Services, Physiotherapy at Home, Elder Care at Home, Yoga at Home, Wound Care, Veterinary Doctor at Home, Blood Test at Home, NRI Elder Care, and Medical Equipment Rental.",
  },
  {
    q: "How quickly can I book a home healthcare appointment?",
    a: "You can book an appointment online or by phone, and our team will confirm your booking promptly. We strive to provide same-day or next-day service wherever possible.",
  },
  {
    q: "Is home healthcare safe for elderly patients?",
    a: "Yes. Home healthcare is often the preferred choice for elderly patients as it avoids hospital-acquired infections, reduces stress, and allows care in a familiar, comfortable environment.",
  },
  {
    q: "How does CuroAid ensure quality of care?",
    a: "All our healthcare professionals are thoroughly vetted, credentialed, and trained. We conduct regular quality checks and actively collect patient feedback to continually improve our services.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center">
          <SectionBadge label="FAQ" />
        </div>

        {/* Heading */}
        <h2
          id="faq-title"
          className="
            mt-4 mb-8 text-center
            text-[28px] leading-[1.2]
            font-bold text-black
            sm:mb-10 sm:text-[32px]
            md:text-[36px]
            lg:text-[40px]
          "
        >
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="mx-auto w-full max-w-[800px] divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.q} className="py-4 sm:py-5">
                {/* Question */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-4 text-left"
                >
                  <span
                    className="
                      pr-2 text-black
                      text-[14px] leading-6
                      font-semibold
                      sm:text-[15px]
                      md:text-[16px]
                    "
                  >
                    {faq.q}
                  </span>

                  <Image
                    src={imgFAQArrow}
                    alt=""
                    width={20}
                    height={20}
                    className={`
                      h-4 w-4 shrink-0
                      transition-transform duration-300
                      sm:h-5 sm:w-5
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <p
                    id={`faq-answer-${index}`}
                    className="
                      mt-3 pr-6
                      text-[13px] leading-6
                      text-[#454646]
                      sm:pr-10 sm:text-[14px]
                      md:text-[15px]
                    "
                  >
                    {faq.a}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}