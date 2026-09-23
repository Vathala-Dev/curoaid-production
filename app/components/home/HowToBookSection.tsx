// import Image from "next/image";

// import SectionBadge from "@/app/components/ui/SectionBadge";
// import GradientButton from "@/app/components/ui/GradientButton";

// import {
//     imgHowToBook,
//     imgEllipseStep,
//     imgStepIcon1,
//     imgStepIcon2,
//     imgStepIcon3,
//     imgStepIcon4,
// } from "@/lib/assets";

// const steps = [
//     {
//         num: "01",
//         title: "Choose Your Service",
//         desc: "Select the home healthcare service you or your loved one needs.",
//         icon: imgStepIcon1,
//     },
//     {
//         num: "02",
//         title: "Share Your Details",
//         desc: "Tell us about your requirements, preferred date, time, and location.",
//         icon: imgStepIcon2,
//     },
//     {
//         num: "03",
//         title: "Speak With Our Team",
//         desc: "Our care team will connect with you, understand your needs, and guide you through the next steps.",
//         icon: imgStepIcon3,
//     },
//     {
//         num: "04",
//         title: "Get Care at Home",
//         desc: "We arrange the appropriate healthcare professional or service and deliver care at your doorstep.",
//         icon: imgStepIcon4,
//     },
// ];

// export default function HowToBookSection() {
//     return (
//         <section
//             aria-labelledby="how-to-book-title"
//             className="relative overflow-hidden py-20"
//         >
//             {/* Background */}
//             <div className="absolute inset-0">
//                 <Image
//                     src={imgHowToBook}
//                     alt=""
//                     fill
//                     sizes="100vw"
//                     className="object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/52" />
//             </div>

//             {/* Content */}
//             <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
//                 <SectionBadge label="How to Book" />

//                 <div className="mt-4 mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row">
//                     <h2
//                         id="how-to-book-title"
//                         className="max-w-xl text-3xl leading-tight font-bold text-white lg:text-[40px]"
//                     >
//                         Book Home Healthcare Services in Just a Few Simple Steps
//                     </h2>

//                     <p className="text-base leading-relaxed text-white/90 lg:max-w-sm lg:text-right">
//                         Whether you need a Doctor at Home, Home Nursing Services,
//                         Physiotherapy at Home, Elder Care at Home, or any of our other
//                         healthcare services, booking with CuroAid is simple and convenient.
//                     </p>
//                 </div>

//                 {/* Steps Card */}
//                 <div className="rounded-2xl bg-white p-8 shadow-xl">
//                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {steps.map((step, index) => (
//                             <div
//                                 key={step.num}
//                                 className="relative flex flex-col items-center text-center"
//                             >
//                                 {/* Connector */}
//                                 {index < steps.length - 1 && (
//                                     <div className="absolute top-8 right-0 left-[60%] hidden h-px bg-gray-200 lg:block" />
//                                 )}

//                                 {/* Icon */}
//                                 <div className="relative mb-4 h-[68px] w-[68px]">
//                                     <Image
//                                         src={imgEllipseStep}
//                                         alt=""
//                                         fill
//                                         sizes="68px"
//                                         aria-hidden="true"
//                                     />

//                                     <Image
//                                         src={step.icon}
//                                         alt=""
//                                         width={36}
//                                         height={36}
//                                         className="absolute inset-0 m-auto object-contain"
//                                         aria-hidden="true"
//                                     />
//                                 </div>

//                                 {/* Step Number */}
//                                 <span className="mb-3 rounded-full bg-[#4cc6f0] px-4 py-1 text-xs font-bold text-white">
//                                     Step {step.num}
//                                 </span>

//                                 {/* Title */}
//                                 <h3 className="mb-2 text-base font-semibold text-black">
//                                     {step.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p className="text-sm leading-relaxed text-[#454646]">
//                                     {step.desc}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Button */}
//                 <div className="mt-10 flex justify-end">
//                     <GradientButton label="Book a Service" />
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image, { type StaticImageData } from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";
import GradientButton from "@/app/components/ui/GradientButton";

import {
    imgHowToBook,
    imgEllipseStep,
} from "@/lib/assets";

type HowToBookStep = {
    num: string;
    title: string;
    description: string;
    icon: StaticImageData | string;
};

type HowToBookSectionProps = {
    badge: string;
    title: React.ReactNode;
    description: string;
    buttonLabel: string;
    backgroundImage?: StaticImageData | string;
    steps: HowToBookStep[];
};

export default function HowToBookSection(
    data: HowToBookSectionProps
) {
    return (
        <section
            aria-labelledby="how-to-book-title"
            className="
                relative
                px-3
                py-6
                sm:px-5
                sm:py-10
                lg:px-6
                lg:py-14
            "
        >
            <div className="relative mx-auto w-full max-w-[1600px]">

                {/* Hero Background */}
                <div
                    className="
                        relative
                        min-h-[500px]
                        overflow-hidden
                        rounded-xl
                        sm:min-h-[380px]
                        md:min-h-[390px]
                        lg:h-[300px]
                        lg:min-h-0
                    "
                >
                    <Image
                        src={data.backgroundImage ?? imgHowToBook}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    {/* Hero Content */}
                    <div
                        className="
                            relative
                            z-10
                            px-5
                            py-7
                            sm:px-8
                            sm:py-8
                            md:px-10
                            lg:px-14
                            lg:py-6
                        "
                    >
                        <SectionBadge label={data.badge} />

                        <div
                            className="
                                mt-4
                                flex
                                flex-col
                                gap-6
                                sm:mt-8 gap-7
                                lg:flex-row
                                lg:items-start
                                lg:justify-between
                                lg:gap-10
                            "
                        >
                            {/* Title */}
                            <h2
                                id="how-to-book-title"
                                className="
                                    w-full
                                    max-w-[560px]
                                    text-[25px]
                                    font-bold
                                    leading-[1.2]
                                    text-white
                                    sm:text-3xl
                                    md:text-[34px]
                                    lg:text-[38px]
                                "
                            >
                                {data.title}
                            </h2>

                            {/* Description + Button */}
                            <div
                                className="
                                    flex
                                    w-full
                                    max-w-[440px]
                                    flex-col
                                    items-start
                                    gap-4
                                    sm:gap-5
                                    lg:items-end
                                    lg:pt-1
                                "
                            >
                                <p
                                    className="
                                        w-full
                                        max-w-[440px]
                                        text-[13px]
                                        leading-[1.6]
                                        text-white/90
                                        sm:text-sm
                                        lg:text-right
                                    "
                                >
                                    {data.description}
                                </p>

                                <div className="w-full sm:w-auto">
                                    <GradientButton
                                        label={data.buttonLabel}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Steps Card */}
                <div
                    className="
                        relative
                        z-20
                        mx-2
                        -mt-10
                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        px-4
                        py-6
                        shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                        sm:mx-6
                        sm:
                        sm:px-6
                        sm:py-7
                        md:mx-10
                        lg:mx-16
                        lg:-mt-12
                        lg:px-8
                        lg:py-5
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-8
                            sm:grid-cols-2
                            sm:gap-y-9
                            sm:gap-x-6
                            md:gap-x-8
                            lg:grid-cols-4
                            lg:gap-0
                        "
                    >
                        {data.steps.map((step, index) => (
                            <div
                                key={`${step.num}-${step.title}`}
                                className="
                                    relative
                                    flex
                                    min-w-0
                                    flex-col
                                    items-center
                                    px-3
                                    text-center
                                    sm:px-4
                                    lg:px-3
                                "
                            >
                                {/* Connector */}
                                {index < data.steps.length - 1 && (
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-7
                                            hidden
                                            h-px
                                            w-[55%]
                                            bg-gray-200
                                            lg:block
                                        "
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="
                                        relative
                                        mb-3
                                        h-12
                                        w-12
                                        shrink-0
                                        sm:h-14
                                        sm:w-14
                                    "
                                >
                                    <Image
                                        src={imgEllipseStep}
                                        alt=""
                                        fill
                                        sizes="56px"
                                        aria-hidden="true"
                                    />

                                    <Image
                                        src={step.icon}
                                        alt=""
                                        width={28}
                                        height={28}
                                        className="
                                            absolute
                                            inset-0
                                            m-auto
                                            object-contain
                                        "
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Step Number */}
                                <span
                                    className="
                                        mb-2
                                        rounded-full
                                        bg-[#4cc6f0]
                                        px-3
                                        py-1
                                        text-[9px]
                                        font-bold
                                        leading-none
                                        text-white
                                    "
                                >
                                    Step {step.num}
                                </span>

                                {/* Title */}
                                <h3
                                    className="
                                        mb-1
                                        max-w-[240px]
                                        text-sm
                                        font-semibold
                                        leading-tight
                                        text-black
                                    "
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        w-full
                                        max-w-[220px]
                                        text-[11px]
                                        leading-[1.5]
                                        text-[#555]
                                        sm:text-xs
                                    "
                                >
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

