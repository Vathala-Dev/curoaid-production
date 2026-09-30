"use client";

import Image from "next/image";
import Link from "next/link";

export interface TeamMember {
    name: string;
    role: string;
    description?: string;
    image: string;
    imageAlt: string;
}

export interface OurTeamPageData {
    hero: {
        badge?: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        button?: string;
    };

    introduction: {
        title: string;
        description: string[];
        highlight?: string;
        image: string;
        imageAlt: string;
    };

    team: {
        badge?: string;
        title: string;
        description?: string;
        members: TeamMember[];
    };

    cta?: {
        title: string;
        description: string;
        button: string;
    };
}

interface OurTeamPageProps {
    data: OurTeamPageData;
}

export default function OurTeamPage({
    data,
}: OurTeamPageProps) {
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

                    <div className="absolute inset-0 bg-black/55" />

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

            {/* ================= INTRODUCTION ================= */}
            <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[380px]">
                        <Image
                            src={data.introduction.image}
                            alt={data.introduction.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>

                        <h2 className="text-3xl font-bold text-black md:text-4xl">
                            {data.introduction.title}
                        </h2>

                        <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                            {data.introduction.description.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )}
                        </div>

                        {data.introduction.highlight && (
                            <p className="mt-5 font-semibold text-gray-800">
                                {data.introduction.highlight}
                            </p>
                        )}

                    </div>
                </div>
            </section>

            {/* ================= OUR TEAM ================= */}
            <section className="mx-auto max-w-6xl px-6 pb-20">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    {data.team.badge && (
                        <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-600">
                            • {data.team.badge}
                        </span>
                    )}

                    <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                        {data.team.title}
                    </h2>

                    {data.team.description && (
                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            {data.team.description}
                        </p>
                    )}

                </div>

                {/* Team members */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {data.team.members.map((member, index) => (
                        <div
                            key={`${member.name}-${index}`}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Member image */}
                            <div className="relative aspect-[4/4.5] overflow-hidden bg-gray-100">

                                <Image
                                    src={member.image}
                                    alt={member.imageAlt}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                            </div>

                            {/* Member information */}
                            <div className="p-6">

                                <h3 className="text-xl font-bold text-black">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-[#4cc6f0]">
                                    {member.role}
                                </p>

                                {member.description && (
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {member.description}
                                    </p>
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            {/* ================= CTA ================= */}
            {data.cta && (
                <section className="mx-auto mb-20 w-[94%] overflow-hidden rounded-2xl bg-gradient-to-r from-[#4cc6f0] to-[#74c067]">
                    <div className="px-6 py-12 text-center md:px-10">

                        <h2 className="text-3xl font-bold text-white">
                            {data.cta.title}
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90">
                            {data.cta.description}
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-semibold text-gray-800 transition hover:scale-105"
                        >
                            {data.cta.button} →
                        </Link>

                    </div>
                </section>
            )}

        </main>
    );
}