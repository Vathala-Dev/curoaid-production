import Image from "next/image";

import SectionBadge from "../ui/SectionBadge";
import { imgDoctorAtHome,imgDoctorIcon,imgHomeNursing,imgGroup38,imgPhysiotherapy,imgPhysioIcon } from "@/lib/assets";





const services = [
    {
        title: "Doctor at Home",
        subtitle:
            "Professional medical consultation and care at your doorstep.",
        image: imgDoctorAtHome,
        icon: imgDoctorIcon,
    },
    {
        title: "Home Nursing Services",
        subtitle:
            "Professional medical consultation and care delivered conveniently at your doorstep.",
        image: imgHomeNursing,
        icon: imgGroup38,
    },
    {
        title: "Physiotherapy at Home",
        subtitle:
            "Professional rehabilitation and physiotherapy services at home.",
        image: imgPhysiotherapy,
        icon: imgPhysioIcon,
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">

                    {/* Left Content */}
                    <div>
                        <SectionBadge label="Services" />

                        <h2 className="text-3xl lg:text-[40px] leading-tight font-bold text-black mt-4">
                            Our Home Healthcare
                            <br />
                            Services
                        </h2>
                    </div>

                    {/* Right Content */}
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

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="relative rounded-2xl overflow-hidden shadow-md h-[380px] group"
                        >
                            {/* Service Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Bottom Service Info */}
                            <div
                                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-full
                "
                                style={{
                                    background: "rgba(68, 68, 68, 0.66)",
                                    backdropFilter: "blur(5px)",
                                    border: "1px solid rgba(226, 216, 216, 0.24)",
                                }}
                            >
                                {/* Service Icon */}
                                <Image
                                    src={service.icon}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 flex-shrink-0 object-contain"
                                    aria-hidden="true"
                                />

                                {/* Service Title */}
                                <span className="text-white text-base font-bold">
                                    {service.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
