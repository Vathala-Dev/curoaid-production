// import Image from "next/image";

// import SectionBadge from "@/app/components/ui/SectionBadge";

// import {
//     imgWhyChoose,
//     imgGroup35,
//     imgGroup37,
//     imgGroup38,
//     imgGroup39,
//     imgGroup40,
//     imgGroup41,
// } from "@/lib/assets";

// const features = [
//     {
//         icon: imgGroup35,
//         title: "Personalized Care",
//         desc: "Every patient is different. We provide care based on individual health needs, preferences, and requirements.",
//     },
//     {
//         icon: imgGroup37,
//         title: "Professional Healthcare Support",
//         desc: "Get access to trained healthcare professionals who are committed to providing dependable care at home.",
//     },
//     {
//         icon: imgGroup38,
//         title: "Complete Home Healthcare",
//         desc: "From Doctor at Home and nursing to physiotherapy, elder care, wound care, diagnostics, and more — access a wide range of services in one place.",
//     },
//     {
//         icon: imgGroup40,
//         title: "Comfort & Convenience",
//         desc: "Receive the care you need without the unnecessary stress of travelling to hospitals or clinics.",
//     },
//     {
//         icon: imgGroup39,
//         title: "Compassionate & Patient-Centered Care",
//         desc: "We treat every patient with empathy, respect, and dignity while keeping their comfort and wellbeing at the center of care.",
//     },
//     {
//         icon: imgGroup41,
//         title: "Support for Families",
//         desc: "We help families feel more confident knowing their loved ones have access to professional support at home.",
//     },
// ];

// export default function WhyChooseSection() {
//     return (
//         <section
//             aria-labelledby="why-choose-title"
//             className="bg-white py-20"
//         >
//             <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
//                 <div className="grid grid-cols-1 gap-16 lg:grid-cols-[500px_1fr]">
//                     {/* Left Content */}
//                     <div className="w-full">
//                         <SectionBadge label="Why Choose" />

//                         <h2
//                             id="why-choose-title"
//                             className="mt-7 mb-4 text-3xl leading-[1.15] font-bold text-black lg:text-[40px]"
//                         >
//                             Why Choose Curoaid?
//                         </h2>

//                         <p className="mb-6 text-[18px] leading-[1.4] font-semibold text-black">
//                             Care You Can Trust, Right at Home
//                         </p>

//                         <Image
//                             src={imgWhyChoose}
//                             alt="CuroAid home healthcare service"
//                             width={500}
//                             height={448}
//                             sizes="(max-width: 1024px) 100vw, 500px"
//                             className="h-[448px] w-full rounded-xl object-cover shadow-md"
//                         />
//                     </div>

//                     {/* Right Content */}
//                     <div className="w-full pt-3">
//                         <p className="mb-7 max-w-[720px] text-base leading-[1.6] text-[#454646]">
//                             At CuroAid, we believe healthcare should be more than just a
//                             service — it should provide{" "}
//                             <strong className="font-semibold text-black">
//                                 comfort, trust, dignity, and peace of mind.
//                             </strong>{" "}
//                             Our home healthcare services are designed to bring professional
//                             care closer to patients while making the experience easier for
//                             families.
//                         </p>

//                         <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
//                             {features.map((feature) => (
//                                 <article
//                                     key={feature.title}
//                                     className="flex items-start gap-4"
//                                 >
//                                     <Image
//                                         src={feature.icon}
//                                         alt=""
//                                         width={24}
//                                         height={24}
//                                         className="mt-1 h-6 w-6 shrink-0 object-contain"
//                                         aria-hidden="true"
//                                     />

//                                     <div className="min-w-0">
//                                         <h3 className="mb-1 text-[16px] leading-[1.35] font-semibold text-black">
//                                             {feature.title}
//                                         </h3>

//                                         <p className="text-[15px] leading-[1.55] text-[#454646]">
//                                             {feature.desc}
//                                         </p>
//                                     </div>
//                                 </article>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image, { StaticImageData } from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";

type WhyChooseItem = {
    title: string;
    description: string;
    icon?: string;
};

type WhyChooseSectionProps = {
    badge: string;
    title: string;
    description?: React.ReactNode;
    image: StaticImageData | string;
    imageAlt: string;
    items: WhyChooseItem[];
};

export default function WhyChooseSection({
    badge,
    title,
    description,
    image,
    imageAlt,
    items,
}: WhyChooseSectionProps) {
    return (
        <section
            aria-labelledby="why-choose-title"
            className="bg-white py-20"
        >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[500px_1fr]">

                    {/* Left Content */}
                    <div className="w-full">
                        <SectionBadge label={badge} />

                        <h2
                            id="why-choose-title"
                            className="mt-7 mb-4 text-3xl leading-[1.15] font-bold text-black lg:text-[40px]"
                        >
                            {title}
                        </h2>

                        <div className="relative w-full overflow-hidden rounded-xl aspect-[500/448]">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full pt-3">

                        {description && (
                            <p className="mb-7 max-w-[720px] text-base leading-[1.6] text-[#454646]">
                                {description}
                            </p>
                        )}

                        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                            {items.map((item, index) => (
                                <article
                                    key={`${item.title}-${index}`}
                                    className="flex items-start gap-4"
                                >
                                    {item.icon && (
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="mt-1 h-6 w-6 shrink-0 object-contain"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <div className="min-w-0">
                                        <h3 className="mb-1 text-[16px] leading-[1.35] font-semibold text-black">
                                            {item.title}
                                        </h3>

                                        <p className="text-[15px] leading-[1.55] text-[#454646]">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}