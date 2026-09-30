"use client";

import Image from "next/image";
import Link from "next/link";

export interface AboutPageData {
    hero: {
        badge?: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        button?: string;
    };

    about: {
        title: string;
        description: string[];
        highlight?: string;
        image: string;
        imageAlt: string;
        button?: string;
    };

    mission: {
        title: string;
        icon?: string;
        highlight: string;
        description: string;
    };

    vision: {
        title: string;
        icon?: string;
        highlight: string;
        description: string;
    };

    whyChoose: {
        badge?: string;
        title: string;
        subtitle?: string;
        image: string;
        imageAlt: string;
        heading: string;
        description: string;
        items: {
            title: string;
            description: string;
        }[];
    };
}

interface AboutPageProps {
    data: AboutPageData;
}

export default function AboutPage1({ data }: AboutPageProps) {
    return (
        <main className="w-full bg-white">

            {/* ================= HERO ================= */}
            <section className="relative mx-auto mt-5 w-[96%] overflow-hidden rounded-2xl">
                <div className="relative min-h-[280px] md:min-h-[360px]">

                    <Image
                        src={data.hero.image}
                        alt={data.hero.imageAlt}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* Content */}
                    <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-6 text-center md:min-h-[360px]">

                        {data.hero.badge && (
                            <span className="mb-3 text-sm font-medium text-white/90">
                                {data.hero.badge}
                            </span>
                        )}

                        <h1 className="text-4xl font-bold text-white md:text-6xl">
                            {data.hero.title}
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
                            {data.hero.description}
                        </p>

                        {data.hero.button && (
                            <Link
                                href="/contact"
                                className="mt-6 rounded-lg bg-[#74c067] px-7 py-3 text-sm font-semibold text-white transition hover:scale-105"
                            >
                                {data.hero.button} →
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[380px]">
                        <Image
                            src={data.about.image}
                            alt={data.about.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-black md:text-4xl">
                            {data.about.title}
                        </h2>

                        <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                            {data.about.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {data.about.highlight && (
                            <p className="mt-4 font-semibold text-gray-800">
                                {data.about.highlight}
                            </p>
                        )}

                        {data.about.button && (
                            <Link
                                href="/contact"
                                className="mt-6 inline-block rounded-lg bg-gradient-to-r from-[#4cc6f0] to-[#74c067] px-6 py-3 text-sm font-semibold text-white"
                            >
                                {data.about.button} →
                            </Link>
                        )}
                    </div>

                </div>
            </section>

            {/* ================= MISSION / VISION ================= */}
            <section className="mx-auto max-w-6xl px-6 pb-16">
                <div className="grid gap-10 md:grid-cols-2">

                    {/* Mission */}
                    <div className="md:border-r md:border-gray-200 md:pr-10">
                        <h2 className="text-3xl font-bold text-black">
                            {data.mission.title}
                        </h2>

                        {data.mission.icon && (
                            <div className="mt-5">
                                <Image
                                    src={data.mission.icon}
                                    alt=""
                                    width={55}
                                    height={55}
                                />
                            </div>
                        )}

                        <h3 className="mt-5 text-sm font-bold text-black">
                            {data.mission.highlight}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            {data.mission.description}
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <h2 className="text-3xl font-bold text-black">
                            {data.vision.title}
                        </h2>

                        {data.vision.icon && (
                            <div className="mt-5">
                                <Image
                                    src={data.vision.icon}
                                    alt=""
                                    width={55}
                                    height={55}
                                />
                            </div>
                        )}

                        <h3 className="mt-5 text-sm font-bold text-black">
                            {data.vision.highlight}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            {data.vision.description}
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= WHY CHOOSE ================= */}
            <section className="mx-auto max-w-6xl px-6 pb-20">

                {data.whyChoose.badge && (
                    <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-600">
                        • {data.whyChoose.badge}
                    </span>
                )}

                <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                    {data.whyChoose.title}
                </h2>

                {data.whyChoose.subtitle && (
                    <p className="mt-2 font-semibold text-gray-700">
                        {data.whyChoose.subtitle}
                    </p>
                )}

                <div className="mt-8 grid gap-10 md:grid-cols-2">

                    {/* Image */}
                    <div className="relative min-h-[400px] overflow-hidden rounded-2xl">
                        <Image
                            src={data.whyChoose.image}
                            alt={data.whyChoose.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-xl font-bold text-black">
                            {data.whyChoose.heading}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            {data.whyChoose.description}
                        </p>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            {data.whyChoose.items.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5ecb8b] text-xs text-white">
                                        ✓
                                    </span>

                                    <div>
                                        <h4 className="text-sm font-bold text-black">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1 text-xs leading-5 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}