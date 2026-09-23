"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import GradientButton from "../ui/GradientButton";
import HowToBookSection from "../home/HowToBookSection";
import WhyChooseSection from "../home/WhyChooseSection";
import CTABannerSection from "../home/CTABAnnerSection";
import FAQSection from "../home/FAQSection";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

export type ServiceData = {
    hero: {
        badge: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        button: string;
        googlePlayImage?: string;
        appStoreImage?: string;
    };

    introduction: {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        button: string;
    };

    services: {
        badge: string;
        title: string;
        description?: string;
        items: {
            title: string;
            description: string;
            image: string;
            imageAlt: string;
            featured?: boolean;
        }[];
    };

    whyChoose: {
        badge: string;
        title: string;
        description?: React.ReactNode;
        image: string;
        imageAlt: string;
        items: {
            title: string;
            description: string;
            icon?: string;
        }[];
    };

    booking: {
        badge: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        button: string;
        steps: {
            num: string;
            title: string;
            description: string;
            icon: StaticImageData | string;
        }[];
    };

    cta: {
        title: string;
        subtitle?: string;
        description?: string;
        image: string;
        imageAlt: string;
        button: string;
    };

    faq: {
        badge: string;
        title: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
};

type ServiceDesignProps = {
    data: ServiceData;
};

export default function ServiceDesign({
    data,
}: ServiceDesignProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    console.log("ddddd", data.booking)
    console.log("ddddd", data.whyChoose)

    return (
        <main className="w-full overflow-hidden bg-white">
            <Navbar />

            {/* =====================================================
          HERO
      ====================================================== */}

            {/* <section className="px-3 sm:px-5 lg:px-10">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-xl sm:rounded-2xl"> */}
            <section className="px-2 sm:px-3 lg:px-5">
                <div className="relative mx-auto w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    {/* Hero Image */}
                    <Image
                        src={data.hero.image}
                        alt={data.hero.imageAlt}
                        width={1800}
                        height={650}
                        priority
                        className="h-[360px] w-full object-cover object-center sm:h-[400px] lg:h-[430px]"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Hero content */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 py-6 text-center sm:px-6">
                        <div className="w-full max-w-[760px] text-white">

                            {/* Badge */}
                            <span
                                className="
                        mb-2 inline-flex
                        rounded-full
                        bg-[#55d7ef]/90
                        px-3 py-1
                        text-[9px] font-medium
                        sm:mb-3 sm:px-4 sm:py-1.5 sm:text-xs
                    "
                            >
                                {data.hero.badge}
                            </span>

                            {/* Title */}
                            <h1
                                className="
                        mx-auto
                        max-w-[340px]
                        text-2xl
                        font-extrabold
                        leading-[1.15]
                        sm:max-w-[600px]
                        sm:text-4xl
                        lg:max-w-[760px]
                        lg:text-5xl
                    "
                            >
                                {data.hero.title}
                            </h1>

                            {/* Description */}
                            <p
                                className="
                        mx-auto
                        mt-2
                        max-w-[330px]
                        text-[11px]
                        leading-[1.5]
                        text-white
                        sm:mt-3
                        sm:max-w-[600px]
                        sm:text-sm
                        sm:leading-6
                    "
                            >
                                {data.hero.description}
                            </p>

                            {/* Buttons */}
                            <div
                                className="
                        mt-4
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-2
                        sm:mt-5
                        sm:gap-2.5
                    "
                            >
                                {/* Main CTA */}

                                <GradientButton className="
                            h-[40px]
                            rounded-lg
                            bg-[#63c85a]
                            px-4
                            text-[11px]
                            font-semibold
                            text-white
                            shadow-md
                            transition
                            hover:bg-[#54b94c]
                            sm:h-[42px]
                            sm:px-5
                            sm:text-xs
                        "label={data.hero.button} />


                                {/* Google Play */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.vathala.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Get CuroAid on Google Play"
                                    className="
                            flex
                            h-[40px]
                            w-[112px]
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-gray-200
                            bg-white
                            px-2.5
                            shadow-sm
                            transition
                            hover:border-gray-300
                            hover:shadow-md
                            sm:h-[42px]
                            sm:w-[120px]
                            sm:gap-2
                            sm:px-3
                        "
                                >
                                    {/* Google Play Icon */}
                                    <div className="flex shrink-0 items-center justify-center">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="sm:h-5 sm:w-5"
                                        >
                                            <path
                                                d="M3.5 2.8L13.8 13 3.5 23.2C3.18 22.7 3 22.1 3 21.4V4.6C3 3.9 3.18 3.3 3.5 2.8Z"
                                                fill="#00D7FF"
                                            />
                                            <path
                                                d="M17.2 9.65L5.1 2.9C4.65 2.65 4.08 2.58 3.6 2.85L13.8 13L17.2 9.65Z"
                                                fill="#00F076"
                                            />
                                            <path
                                                d="M13.8 13L3.6 23.15C4.08 23.42 4.65 23.35 5.1 23.1L17.2 16.35L13.8 13Z"
                                                fill="#FFCE00"
                                            />
                                            <path
                                                d="M21 11.75L17.2 9.65L13.8 13L17.2 16.35L21 14.25C22.15 13.62 22.15 12.38 21 11.75Z"
                                                fill="#FF3A44"
                                            />
                                        </svg>
                                    </div>

                                    {/* Store text */}
                                    <div className="flex min-w-0 flex-col text-left leading-none">
                                        <span className="text-[6px] font-normal text-gray-500 sm:text-[7px]">
                                            GET IT ON
                                        </span>

                                        <span className="mt-[3px] truncate text-[10px] font-semibold text-black sm:text-[11px]">
                                            Google Play
                                        </span>
                                    </div>
                                </a>

                                {/* App Store */}
                                <a
                                    href="https://apps.apple.com/us/app/vathala/id6474188887"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download CuroAid from the App Store"
                                    className="
                            flex
                            h-[40px]
                            w-[112px]
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-gray-200
                            bg-white
                            px-2.5
                            shadow-sm
                            transition
                            hover:border-gray-300
                            hover:shadow-md
                            sm:h-[42px]
                            sm:w-[120px]
                            sm:gap-2
                            sm:px-3
                        "
                                >
                                    {/* Apple Icon */}
                                    <div className="flex shrink-0 items-center justify-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                            fill="#000000"
                                            className="sm:h-5 sm:w-5"
                                        >
                                            <path
                                                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.66-.81 1.11-1.94.99-3.07-.96.04-2.13.65-2.82 1.45-.61.71-1.14 1.86-1 2.97 1.07.08 2.17-.55 2.83-1.35z"
                                            />
                                        </svg>
                                    </div>

                                    {/* Store text */}
                                    <div className="flex min-w-0 flex-col text-left leading-none">
                                        <span className="text-[6px] font-normal text-gray-500 sm:text-[7px]">
                                            Download on the
                                        </span>

                                        <span className="mt-[3px] truncate text-[10px] font-semibold text-black sm:text-[11px]">
                                            App Store
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
          INTRODUCTION
      ====================================================== */}

            <section className="px-5 py-12 sm:py-16 lg:px-10 lg:py-20">
                <div className="mx-auto grid max-w-[1000px] items-center gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={data.introduction.image}
                            alt={data.introduction.imageAlt}
                            width={700}
                            height={500}
                            className="h-[260px] w-full object-cover sm:h-[350px] lg:h-[400px]"
                        />
                    </div>

                    {/* Content */}
                    <div>

                        <h2 className="text-2xl font-extrabold leading-tight text-[#080808] sm:text-3xl">
                            {data.introduction.title}
                        </h2>

                        <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                            {data.introduction.description
                                .split("\n")
                                .map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                        </div>

                        {/* <button
                            type="button"
                            className="mt-5 rounded-lg bg-[#65c85c] px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#55b94d]"
                        >
                            {data.introduction.button}
                            <span className="ml-1">→</span>
                        </button> */}
                        <GradientButton label="Book Now" />

                    </div>
                </div>
            </section>


            {/* =====================================================
          SERVICES
      ====================================================== */}

            <section className="px-5 pb-14 sm:pb-20 lg:px-10">

                <div className="mx-auto max-w-[1000px]">

                    {/* Section heading */}
                    <div className="mb-7 grid items-end gap-5 md:grid-cols-2">

                        <div>
                            <span className="inline-flex rounded-full bg-[#dff8ff] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#36bddb]">
                                {data.services.badge}
                            </span>

                            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                                {data.services.title}
                            </h2>
                        </div>

                        {data.services.description && (
                            <p className="text-right text-xs leading-5 text-gray-500 md:max-w-[350px] md:justify-self-end">
                                {data.services.description}
                            </p>
                        )}
                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {data.services.items.map((item, index) => (
                            <article
                                key={`${item.title}-${index}`}
                                className="
                group
                overflow-hidden
                rounded-xl
                border border-gray-200
                bg-[#f7f7f7]
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-transparent
                hover:bg-gradient-to-b
                hover:from-[#4ccce3]
                hover:to-[#62bd72]
                hover:text-white
                hover:shadow-lg
            "
                            >
                                {/* Card image */}
                                <div className="p-2">
                                    <div className="overflow-hidden rounded-lg">
                                        <Image
                                            src={item.image}
                                            alt={item.imageAlt}
                                            width={500}
                                            height={300}
                                            className="
                            h-[175px]
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                            sm:h-[155px]
                        "
                                        />
                                    </div>
                                </div>

                                {/* Card content */}
                                <div className="px-3 pb-4">
                                    <h3
                                        className="
                        text-xs
                        font-extrabold
                        text-black
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-sm
                    "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                        mt-2
                        text-[10px]
                        leading-4
                        text-gray-600
                        transition-colors
                        duration-300
                        group-hover:text-white/90
                        sm:text-[11px]
                    "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* =====================================================
          WHY CHOOSE CUROAID
      ====================================================== */}
            <WhyChooseSection
                badge={data.whyChoose.badge}
                title={data.whyChoose.title}
                description={data.whyChoose.description}
                image={data.whyChoose.image}
                imageAlt={data.whyChoose.imageAlt}
                items={data.whyChoose.items} />



            {/* =====================================================
          HOW TO BOOK
      ====================================================== */}

            <HowToBookSection
                badge={data.booking.badge}
                title={data.booking.title}
                description={data.booking.description}
                buttonLabel={data.booking.button}
                backgroundImage={data.booking.image}
                steps={data.booking.steps}
            />
            {/* =====================================================
          CTA
      ====================================================== */}


            <CTABannerSection ctabanner={data.cta.image}
                ctaTitle={data.cta.title}
                ctasubtitle={data.cta.subtitle}
                ctadescription={data.cta.description}
                buttonlabel={data.cta.button} />
            {/* =====================================================
          FAQ
      ====================================================== */}


            <FAQSection badge={data.faq.badge}
                title={data.faq.title}
                items={data.faq.items} />

            <Footer />
        </main>
    );
}