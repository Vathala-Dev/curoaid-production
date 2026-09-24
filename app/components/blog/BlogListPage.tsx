"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

import type { Blog } from "@/lib/blogs";
import { blogBanner, blogCTA } from "@/lib/assets";
import GradientButton from "../ui/GradientButton";
import FAQSection from "../home/FAQSection";

/* =========================================================
   PAGINATION
========================================================= */

const BLOGS_PER_PAGE = 15;
const faqs = [
    {
        question:
            "Is home healthcare better than visiting a hospital?",
        answer:
            "For many non-emergency medical needs, home healthcare provides a comfortable and convenient alternative while maintaining professional care standards.",
    },
    {
        question:
            "When should I consider home healthcare?",
        answer:
            "Home healthcare can provide convenient medical support in a familiar environment for suitable healthcare needs.",
    },
    {
        question:
            "Can elderly people receive healthcare at home?",
        answer:
            "Depending on the patient's needs, healthcare professionals can provide several services at home.",
    },
    {
        question:
            "What services can CuroAid provide at home?",
        answer:
            "CuroAid provides professional healthcare services designed around the patient's comfort and convenience.",
    },
    {
        question:
            "When should I visit a hospital?",
        answer:
            "Emergency conditions should always be handled through appropriate emergency medical services.",
    },
]

/* =========================================================
   HELPERS
========================================================= */

function stripHtml(html: string) {
    if (!html) return "";

    return html
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function getExcerpt(
    content: string,
    maxLength = 145
) {
    const text = stripHtml(content);

    if (!text) {
        return "";
    }

    if (text.length <= maxLength) {
        return text;
    }

    return `${text.substring(0, maxLength).trim()}...`;
}

function formatDate(date: string) {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return parsedDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );
}

/* =========================================================
   PROPS
========================================================= */

type BlogListPageProps = {
    blogs: Blog[];
};

/* =========================================================
   PAGE
========================================================= */

export default function BlogListPage({
    blogs,
}: BlogListPageProps) {

    const [activeCategory, setActiveCategory] =
        useState("All");

    const [currentPage, setCurrentPage] =
        useState(1);

    /* =====================================================
       CATEGORIES
    ===================================================== */

    const categories = useMemo(() => {

        const uniqueCategories =
            Array.from(
                new Set(
                    blogs
                        .map(
                            (blog) =>
                                blog.category?.trim()
                        )
                        .filter(Boolean)
                )
            );

        return [
            "All",
            ...uniqueCategories,
        ];

    }, [blogs]);

    /* =====================================================
       FILTER
    ===================================================== */

    const filteredBlogs = useMemo(() => {

        if (activeCategory === "All") {
            return blogs;
        }

        return blogs.filter(
            (blog) =>
                blog.category?.toLowerCase() ===
                activeCategory.toLowerCase()
        );

    }, [
        blogs,
        activeCategory,
    ]);

    /* =====================================================
       TOTAL PAGES
    ===================================================== */

    const totalPages = Math.ceil(
        filteredBlogs.length /
        BLOGS_PER_PAGE
    );

    /* =====================================================
       CURRENT PAGE BLOGS
    ===================================================== */

    const paginatedBlogs = useMemo(() => {

        const startIndex =
            (currentPage - 1) *
            BLOGS_PER_PAGE;

        return filteredBlogs.slice(
            startIndex,
            startIndex + BLOGS_PER_PAGE
        );

    }, [
        filteredBlogs,
        currentPage,
    ]);

    /* =====================================================
       RESET PAGE WHEN CATEGORY CHANGES
    ===================================================== */

    const handleCategoryChange = (
        category: string
    ) => {

        setActiveCategory(category);
        setCurrentPage(1);

    };

    /* =====================================================
       PAGE VALIDATION
    ===================================================== */

    useEffect(() => {

        if (
            totalPages > 0 &&
            currentPage > totalPages
        ) {
            setCurrentPage(totalPages);
        }

        if (
            totalPages === 0 &&
            currentPage !== 1
        ) {
            setCurrentPage(1);
        }

    }, [
        totalPages,
        currentPage,
    ]);

    /* =====================================================
       PAGINATION
    ===================================================== */

    const goToPage = (
        page: number
    ) => {

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const goToPreviousPage = () => {

        if (currentPage <= 1) {
            return;
        }

        goToPage(currentPage - 1);

    };

    const goToNextPage = () => {

        if (
            currentPage >= totalPages
        ) {
            return;
        }

        goToPage(currentPage + 1);

    };

    const pageNumbers = Array.from(
        {
            length: totalPages,
        },
        (_, index) => index + 1
    );

    return (
        <main className="min-h-screen bg-white text-[#111111]">

            {/* =================================================
                NAVBAR
            ================================================= */}

            <Navbar />

            {/* =================================================
                HERO
            ================================================= */}

            <section className="px-4 sm:px-6 lg:px-8">

                <div className="relative mx-auto h-[240px] max-w-[1600px] overflow-hidden rounded-[14px] sm:h-[280px] lg:h-[400px]">

                    <Image
                        src={blogBanner}
                        alt="CuroAid healthcare blogs"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/55" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">

                        <h1 className="text-[30px] font-bold leading-tight sm:text-[38px] lg:text-[48px]">
                            Blogs
                        </h1>

                        <p className="mt-3 max-w-[680px] text-[11px] leading-[1.7] text-white/90 sm:text-[13px]">
                            Expert guides on home healthcare,
                            elder care, nursing,
                            physiotherapy, veterinary visits,
                            and wellness from the CuroAid team.
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
                                                "label="Book Now" />


                            {/* Google Play */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.vathala.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get CuroAid on Google Play"
                                className="flex
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

            </section>

            {/* =================================================
                CATEGORY FILTER
            ================================================= */}

            <section className="px-4 pt-7 sm:px-6 lg:px-8 lg:pt-12">

                <div className="mx-auto flex max-w-[1130px] flex-wrap justify-center gap-3">

                    {categories.map(
                        (category) => {

                            const active =
                                activeCategory ===
                                category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        handleCategoryChange(
                                            category
                                        )
                                    }
                                    className={[
                                        "rounded-full border px-5 py-2 text-[11px] font-medium transition",
                                        active
                                            ? "border-[#4cc6f0] bg-[#4cc6f0] text-white"
                                            : "border-[#dddddd] bg-white text-[#222] hover:border-[#4cc6f0] hover:text-[#4cc6f0]",
                                    ].join(" ")}
                                >
                                    {category}
                                </button>
                            );

                        }
                    )}

                </div>

            </section>

            {/* =================================================
                BLOG GRID
            ================================================= */}

            <section className="px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">

                <div className="mx-auto grid max-w-[1130px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {paginatedBlogs.map(
                        (blog) => (

                            <article
                                key={blog._id}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-[13px]
                                    border
                                    border-[#e0e0e0]
                                    bg-[#f6f6f6]
                                    p-[10px]
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:-translate-y-1
                                    hover:border-[#4cc6f0]
                                    hover:bg-[#f0fcff]
                                    hover:shadow-[0_10px_30px_rgba(76,198,240,0.15)]
                                "
                            >

                                {/* IMAGE */}

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="relative block h-[185px] overflow-hidden rounded-[10px]"
                                >

                                    <Image
                                        src={blog.imageUrl}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />

                                </Link>

                                {/* CONTENT */}

                                <div className="px-1 pb-2 pt-3">

                                    <div className="flex items-center justify-between gap-2">

                                        <span className="bg-[#73e0de] px-2 py-1 text-[9px] font-semibold text-[#111]">
                                            {blog.category}
                                        </span>

                                        <span className="text-[8px] text-[#666]">
                                            {formatDate(
                                                blog.date
                                            )}
                                        </span>

                                    </div>

                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                    >

                                        <h2 className="mt-3 line-clamp-2 text-[12px] font-bold leading-[1.4] text-[#111]">
                                            {blog.title}
                                        </h2>

                                    </Link>

                                    <p className="mt-2 line-clamp-3 text-[10px] leading-[1.55] text-[#666]">
                                        {getExcerpt(
                                            blog.content
                                        )}
                                    </p>

                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#43c4e3]"
                                    >
                                        Read More

                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </article>

                        )
                    )}

                </div>

                {/* =================================================
                    NO BLOGS
                ================================================= */}

                {filteredBlogs.length === 0 && (

                    <div className="mx-auto max-w-[700px] py-20 text-center">

                        <h2 className="text-lg font-semibold">
                            No blogs found
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            There are no blogs available in this category.
                        </p>

                    </div>

                )}

                {/* =================================================
                    PAGINATION
                ================================================= */}

                {totalPages > 1 && (

                    <div className="mx-auto mt-10 flex max-w-[1130px] flex-col items-center gap-4">

                        <p className="text-[10px] text-[#777]">

                            Showing{" "}

                            {Math.min(
                                (currentPage - 1) *
                                BLOGS_PER_PAGE +
                                1,
                                filteredBlogs.length
                            )}

                            {" - "}

                            {Math.min(
                                currentPage *
                                BLOGS_PER_PAGE,
                                filteredBlogs.length
                            )}

                            {" of "}

                            {filteredBlogs.length}

                            {" blogs"}

                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2">

                            <button
                                type="button"
                                onClick={
                                    goToPreviousPage
                                }
                                disabled={
                                    currentPage === 1
                                }
                                className="
                                    flex h-9 min-w-9
                                    items-center justify-center
                                    rounded-md border
                                    px-3
                                    text-[11px]
                                    font-medium
                                    transition
                                    disabled:cursor-not-allowed
                                    disabled:border-[#eeeeee]
                                    disabled:bg-[#f7f7f7]
                                    disabled:text-[#bbbbbb]
                                    hover:border-[#4cc6f0]
                                    hover:bg-[#4cc6f0]
                                    hover:text-white
                                "
                            >
                                ←
                            </button>

                            {pageNumbers.map(
                                (page) => (

                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() =>
                                            goToPage(
                                                page
                                            )
                                        }
                                        className={[
                                            "flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-[11px] font-medium transition",
                                            currentPage ===
                                                page
                                                ? "border-[#4cc6f0] bg-[#4cc6f0] text-white"
                                                : "border-[#dddddd] bg-white text-[#333] hover:border-[#4cc6f0] hover:text-[#4cc6f0]",
                                        ].join(" ")}
                                    >
                                        {page}
                                    </button>

                                )
                            )}

                            <button
                                type="button"
                                onClick={
                                    goToNextPage
                                }
                                disabled={
                                    currentPage ===
                                    totalPages
                                }
                                className="
                                    flex h-9 min-w-9
                                    items-center justify-center
                                    rounded-md border
                                    px-3
                                    text-[11px]
                                    font-medium
                                    transition
                                    disabled:cursor-not-allowed
                                    disabled:border-[#eeeeee]
                                    disabled:bg-[#f7f7f7]
                                    disabled:text-[#bbbbbb]
                                    hover:border-[#4cc6f0]
                                    hover:bg-[#4cc6f0]
                                    hover:text-white
                                "
                            >
                                →
                            </button>

                        </div>

                    </div>

                )}

            </section>

            {/* =================================================
                CTA
            ================================================= */}

            <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

                <div className="relative mx-auto max-w-[1130px] overflow-hidden rounded-[13px]">

                    <Image
                        src={blogCTA}
                        alt="Medical care at home"
                        fill
                        sizes="(max-width: 1130px) 100vw, 1130px"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[#08799c]/70" />

                    <div className="relative z-10 flex min-h-[175px] flex-col items-center justify-center px-5 text-center text-white sm:min-h-[210px]">

                        <h2 className="text-[21px] font-bold sm:text-[27px]">
                            Need Medical Care at Home?
                        </h2>

                        <h3 className="mt-2 text-[11px] font-bold sm:text-[13px]">
                            Curoaid brings trusted healthcare to your doorstep.
                        </h3>

                        <p className="mt-2 max-w-[530px] text-[9px] leading-[1.6] text-white/90 sm:text-[10px]">
                            Book a convenient home doctor visit and take
                            the next step towards better, more accessible
                            healthcare.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-4 flex items-center gap-2 rounded-md bg-[#55c5ed] px-5 py-2.5 text-[9px] font-semibold text-white shadow-md transition hover:bg-[#43b7df]"
                        >
                            Book Free Consultation
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

                {/* <div className="mx-auto max-w-[920px]">

                    <span className="inline-flex rounded-full bg-[#dff8ff] px-3 py-1 text-[9px] font-semibold tracking-wide text-[#42c4e6]">
                        FAQ
                    </span>

                    <h2 className="mt-2 text-[23px] font-bold tracking-[-0.5px] sm:text-[27px]">
                        Frequently asked questions
                    </h2>

                    <div className="mt-6">

                        {[
                            {
                                question:
                                    "Is home healthcare better than visiting a hospital?",
                                answer:
                                    "For many non-emergency medical needs, home healthcare provides a comfortable and convenient alternative while maintaining professional care standards.",
                            },
                            {
                                question:
                                    "When should I consider home healthcare?",
                                answer:
                                    "Home healthcare can provide convenient medical support in a familiar environment for suitable healthcare needs.",
                            },
                            {
                                question:
                                    "Can elderly people receive healthcare at home?",
                                answer:
                                    "Depending on the patient's needs, healthcare professionals can provide several services at home.",
                            },
                            {
                                question:
                                    "What services can CuroAid provide at home?",
                                answer:
                                    "CuroAid provides professional healthcare services designed around the patient's comfort and convenience.",
                            },
                            {
                                question:
                                    "When should I visit a hospital?",
                                answer:
                                    "Emergency conditions should always be handled through appropriate emergency medical services.",
                            },
                        ].map(
                            (faq, index) => {

                                const isOpen =
                                    false;

                                return (
                                    <div
                                        key={index}
                                        className="border-b border-[#dedede]"
                                    >
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between py-4 text-left"
                                        >
                                            <span className="pr-5 text-[10px] font-semibold text-[#111] sm:text-[11px]">
                                                {
                                                    faq.question
                                                }
                                            </span>

                                            <span className="text-[15px]">
                                                {isOpen
                                                    ? "⌃"
                                                    : "⌄"}
                                            </span>
                                        </button>
                                    </div>
                                );
                            }
                        )}

                    </div>

                </div> */}

                <FAQSection
                    badge="FAQ"
                    title="Frequently asked questions"
                    items={faqs}
                />

            </section>

            <Footer />

        </main>
    );
}