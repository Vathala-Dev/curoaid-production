import Image from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";

import {
  imgStars,
  imgGroup43,
} from "@/lib/assets";

const testimonials = [
  {
    name: "Suresh",
    location: "Chennai",
    text: "I booked a veterinary doctor through CuroAid when my dog was unwell. Excellent check-up and treatment at home. Highly recommend!",
  },
  {
    name: "Priya Rajesh",
    location: "Chennai",
    text: "The home nursing service from CuroAid was exceptional. The nurse was professional, caring, and always on time.",
  },
  {
    name: "Ramesh Kumar",
    location: "Chennai",
    text: "Outstanding physiotherapy sessions at home. The therapist helped my father recover quickly after surgery. Great service!",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header */}
        <SectionBadge label="Testimonial" />

        <div className="mt-4 mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row">
          <h2
            id="testimonials-title"
            className="text-3xl leading-tight font-bold text-black lg:text-[40px]"
          >
            Testimonials
          </h2>

          <p className="text-base leading-relaxed text-[#454646] lg:max-w-lg lg:text-right">
            Real experiences from patients and families who have trusted
            CuroAid for their home healthcare needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-xl border border-black/5 bg-[rgba(207,244,255,0.26)] p-6 shadow-md"
            >
              {/* Stars */}
              <Image
                src={imgStars}
                alt="5 star rating"
                width={100}
                height={20}
                className="mb-4 h-5 w-auto object-contain"
              />

              {/* User */}
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={imgGroup43}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-contain"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-base font-semibold text-black">
                    {testimonial.name}
                  </p>

                  <p className="text-xs font-bold text-[#4cc6f0]">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="text-sm leading-relaxed text-[#454646]">
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>

        {/* Pagination indicators */}
        <div
          className="mt-8 flex justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-3.5 w-3.5 rounded-full bg-[#4cc6f0]" />
          <span className="h-3.5 w-3.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}