"use client";

import { imgFinalisedLogo1 } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const services = [
    {
        name: "Home Doctor Services",
        href: "/doctor-visit-athome",
    },
    {
        name: "Nursing Services",
        href: "/nursing",
    },
    {
        name: "Wound Care Services",
        href: "/wound-care",
    },
    {
        name: "Elder Care",
        href: "/elder-care",
    },
    {
        name: "Veterinary Services",
        href: "/veterinary",
    },
    {
        name: "Physiotherapy",
        href: "/physiotherapy",
    },
    {
        name: "Yoga",
        href: "/yoga",
    },
    {
        name: "NRI Patient Care",
        href: "/nri-patient-care",
    },
    {
        name: "Hospital Equipment",
        href: "/hospital-equipment",
    },
    {
        name: "Renal Blood Test",
        href: "/renal-blood-test",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">

                {/* Logo + Brand */}
                <Link href="/" className="flex items-center gap-4">

                    <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0">
                        <Image
                            src={imgFinalisedLogo1}
                            alt="CuroAid Logo"
                            width={80}
                            height={80}
                            priority
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="text-[30px] leading-[32px] font-bold text-black">
                            CuroAid
                        </span>

                        <span className="text-[14px] leading-[18px] font-semibold text-black">
                            Healthcare at Home
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">

                    {/* <Link
                        href="/"
                        className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
                    >
                        Home
                    </Link> */}

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="flex items-center gap-2 text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
                        >
                            Services

                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {servicesOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                                <div className="w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 py-2">

                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="
                        block
                        px-5
                        py-3
                        text-[14px]
                        font-medium
                        text-[#1b355a]
                        hover:bg-[#f4fbfd]
                        hover:text-[#4cc6f0]
                        transition-colors
                      "
                                        >
                                            {service.name}
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/blogs"
                        className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
                    >
                        Blogs
                    </Link>

                    <Link
                        href="/about"
                        className="text-[#1b355a] text-[15px] font-medium hover:text-[#4cc6f0] transition-colors"
                    >
                        About Us
                    </Link>
                </nav>

                {/* Contact */}
                <Link
                    href="/contact"
                    className="
            hidden md:flex
            items-center
            justify-center
            px-8
            py-3
            rounded-lg
            text-white
            text-[15px]
            font-semibold
            hover:opacity-90
            transition-opacity
            shadow-md
          "
                    style={{
                        backgroundImage:
                            "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
                    }}
                >
                    Contact Us
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
                    <div className="w-6 h-0.5 bg-[#1b355a] mb-1.5" />
                    <div className="w-6 h-0.5 bg-[#1b355a]" />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t px-6 py-4">

                    <div className="flex flex-col gap-4">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-[#1b355a] text-[15px] font-medium"
                        >
                            Home
                        </Link>

                        {/* Mobile Services */}
                        <button
                            type="button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center justify-between text-[#1b355a] text-[15px] font-medium"
                        >
                            <span>Services</span>

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`transition-transform ${servicesOpen ? "rotate-180" : ""
                                    }`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {servicesOpen && (
                            <div className="ml-4 flex flex-col gap-3 border-l-2 border-[#4cc6f0] pl-4">

                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-[#1b355a] text-[14px] font-medium hover:text-[#4cc6f0]"
                                    >
                                        {service.name}
                                    </Link>
                                ))}

                            </div>
                        )}

                        <Link
                            href="/blogs"
                            onClick={() => setMenuOpen(false)}
                            className="text-[#1b355a] text-[15px] font-medium"
                        >
                            Blogs
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setMenuOpen(false)}
                            className="text-[#1b355a] text-[15px] font-medium"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="
                self-start
                px-6
                py-2.5
                rounded-lg
                text-white
                text-sm
                font-semibold
              "
                            style={{
                                backgroundImage:
                                    "linear-gradient(124deg, #4cc6f0 12.67%, #74c067 85.05%)",
                            }}
                        >
                            Contact Us
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}