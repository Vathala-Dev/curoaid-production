import Image from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";
import GradientButton from "@/app/components/ui/GradientButton";

import {
    imgHowToBook,
    imgEllipseStep,
    imgStepIcon1,
    imgStepIcon2,
    imgStepIcon3,
    imgStepIcon4,
} from "@/lib/assets";

const steps = [
    {
        num: "01",
        title: "Choose Your Service",
        desc: "Select the home healthcare service you or your loved one needs.",
        icon: imgStepIcon1,
    },
    {
        num: "02",
        title: "Share Your Details",
        desc: "Tell us about your requirements, preferred date, time, and location.",
        icon: imgStepIcon2,
    },
    {
        num: "03",
        title: "Speak With Our Team",
        desc: "Our care team will connect with you, understand your needs, and guide you through the next steps.",
        icon: imgStepIcon3,
    },
    {
        num: "04",
        title: "Get Care at Home",
        desc: "We arrange the appropriate healthcare professional or service and deliver care at your doorstep.",
        icon: imgStepIcon4,
    },
];

export default function HowToBookSection() {
    return (
        <section
            aria-labelledby="how-to-book-title"
            className="relative overflow-hidden py-20"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={imgHowToBook}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/52" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
                <SectionBadge label="How to Book" />

                <div className="mt-4 mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row">
                    <h2
                        id="how-to-book-title"
                        className="max-w-xl text-3xl leading-tight font-bold text-white lg:text-[40px]"
                    >
                        Book Home Healthcare Services in Just a Few Simple Steps
                    </h2>

                    <p className="text-base leading-relaxed text-white/90 lg:max-w-sm lg:text-right">
                        Whether you need a Doctor at Home, Home Nursing Services,
                        Physiotherapy at Home, Elder Care at Home, or any of our other
                        healthcare services, booking with CuroAid is simple and convenient.
                    </p>
                </div>

                {/* Steps Card */}
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.num}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Connector */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-8 right-0 left-[60%] hidden h-px bg-gray-200 lg:block" />
                                )}

                                {/* Icon */}
                                <div className="relative mb-4 h-[68px] w-[68px]">
                                    <Image
                                        src={imgEllipseStep}
                                        alt=""
                                        fill
                                        sizes="68px"
                                        aria-hidden="true"
                                    />

                                    <Image
                                        src={step.icon}
                                        alt=""
                                        width={36}
                                        height={36}
                                        className="absolute inset-0 m-auto object-contain"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Step Number */}
                                <span className="mb-3 rounded-full bg-[#4cc6f0] px-4 py-1 text-xs font-bold text-white">
                                    Step {step.num}
                                </span>

                                {/* Title */}
                                <h3 className="mb-2 text-base font-semibold text-black">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-[#454646]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <div className="mt-10 flex justify-end">
                    <GradientButton label="Book a Service" />
                </div>
            </div>
        </section>
    );
}