import Image from "next/image";

import SectionBadge from "../ui/SectionBadge";
import { imgDoctorAtHome, imgDoctorIcon, imgHomeNursing, imgGroup38, imgPhysiotherapy, imgPhysioIcon, woundCareImage, bloodTestImage, nriElderCareImage, elderCareImage, veterinaryImage, yogaImage, medicalEquipmentImage } from "@/lib/assets";





const services = [
    {
        title: "Doctor at Home",
        subtitle:
            "Professional medical consultation and care at your doorstep.",
        image: imgDoctorAtHome,
        icon: imgPhysioIcon,
    },
    {
        title: "Home Nursing Services",
        subtitle:
            "Professional nursing care and medical support delivered conveniently at your doorstep.",
        image: imgHomeNursing,
        icon: imgPhysioIcon,
    },
    {
        title: "Physiotherapy at Home",
        subtitle:
            "Professional rehabilitation and physiotherapy services at home.",
        image: imgPhysiotherapy,
        icon: imgPhysioIcon,
    },
    {
        title: "Wound Care Services",
        subtitle:
            "Expert wound care and dressing services to support safe and effective healing at home.",
        image: woundCareImage,
        icon: imgPhysioIcon,
    },
    {
        title: "Elder Care",
        subtitle:
            "Compassionate and personalized care services to support the comfort and well-being of seniors at home.",
        image: elderCareImage,
        icon: imgPhysioIcon,
    },
    {
        title: "Veterinary Services",
        subtitle:
            "Convenient veterinary consultation and healthcare services for your pets at home.",
        image: veterinaryImage,
        icon: imgPhysioIcon,
    },
    {
        title: "Yoga at Home",
        subtitle:
            "Personalized yoga sessions at home to support flexibility, relaxation, fitness, and overall well-being.",
        image: yogaImage,
        icon: imgPhysioIcon,
    },
    {
        title: "NRI Patient Care",
        subtitle:
            "Reliable healthcare support for your loved ones in India, with personalized assistance and regular care.",
        image: nriElderCareImage,
        icon: imgPhysioIcon,
    },
    {
        title: "Hospital Equipment",
        subtitle:
            "Quality medical equipment available for rental or purchase to support comfortable care at home.",
        image: medicalEquipmentImage,
        icon: imgPhysioIcon,
    },
    {
        title: "Blood Test at Home",
        subtitle:
            "Convenient blood sample collection at home for renal health monitoring and diagnostic testing.",
        image: bloodTestImage,
        icon: imgPhysioIcon,
    },
];


export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">

                    <div>
                        <SectionBadge label="Services" />

                        <h2 className="text-3xl lg:text-[40px] leading-tight font-bold text-black mt-4">
                            Our Home Healthcare
                            <br />
                            Services
                        </h2>
                    </div>

                    <div className="lg:max-w-sm lg:pt-4 lg:text-right">
                        <p className="text-black text-[18px] leading-relaxed mb-2 font-semibold">
                            Complete Care, Designed Around Your Needs
                        </p>

                        <p className="text-[#454646] text-sm leading-relaxed">
                            Explore CuroAid&apos;s comprehensive range of home healthcare
                            services designed to meet different patient and family needs
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="
                        relative
                        h-[380px]
                        rounded-2xl
                        overflow-hidden
                        shadow-md
                        group
                        cursor-pointer
                    "
                        >
                            {/* Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1024px) 50vw,
                            33vw
                        "
                                className="
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-105
                        "
                            />

                            {/* Hover Content */}
                            <div
                                className="
                            absolute
                            left-4
                            right-4
                            bottom-4

                            h-[68px]
                            group-hover:h-[150px]

                            rounded-2xl
                            overflow-hidden

                            bg-black/55
                            backdrop-blur-sm

                            border
                            border-white/20

                            transition-all
                            duration-500
                            ease-out
                        "
                            >

                                {/* Title */}
                                <div className="h-[68px] flex items-center gap-3 px-4">

                                    <div
                                        className="
                                    w-10
                                    h-10
                                    flex-shrink-0
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/10

                                    transition-all
                                    duration-500

                                    group-hover:bg-white/20
                                    group-hover:scale-105
                                "
                                    >
                                        <Image
                                            src={service.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-contain"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span
                                        className="
                                    text-white
                                    text-base
                                    font-bold

                                    transition-transform
                                    duration-500

                                    group-hover:translate-x-1
                                "
                                    >
                                        {service.title}
                                    </span>

                                </div>

                                {/* Description */}
                                <div
                                    className="
                                px-4
                                opacity-0
                                translate-y-3

                                transition-all
                                duration-500
                                ease-out

                                group-hover:opacity-100
                                group-hover:translate-y-0
                            "
                                >
                                    <p
                                        className="
                                    text-white/90
                                    text-sm
                                    leading-relaxed
                                    line-clamp-3
                                "
                                    >
                                        {service.subtitle}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
