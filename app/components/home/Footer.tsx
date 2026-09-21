import Image from "next/image";
import Link from "next/link";

import {
  imgFinalisedLogo1,
  imgPhoneContact,
  imgEmail,
  imgLocation,
  imgFacebook,
  imgInstagram,
  imgLinkedin,
} from "@/lib/assets";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Doctor at Home", href: "/doctor-visit-athome" },
  { label: "Home Nursing Services", href: "/nursing" },
  { label: "Physiotherapy at Home", href: "/physiotherapy" },
  { label: "Elder Care at Home", href: "/elder-care" },
  { label: "Yoga at Home", href: "/yoga" },
  { label: "Wound Care at Home", href: "/wound-care" },
  { label: "Blood Test at Home", href: "/renal-blood-test" },
];

const contactDetails = [
  {
    icon: imgPhoneContact,
    label: "+91 9150064364",
    href: "tel:+919150064364",
  },
  {
    icon: imgEmail,
    label: "support@vathala.com",
    href: "mailto:support@vathala.com",
  },
  {
    icon: imgLocation,
    label: "Chennai, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: imgFacebook,
    label: "Facebook",
    href: "#",
  },
  {
    icon: imgInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: imgLinkedin,
    label: "LinkedIn",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 pt-14 pb-6">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Main Footer */}
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="CuroAid Home">
              <Image
                src={imgFinalisedLogo1}
                alt="CuroAid"
                width={160}
                height={56}
                className="mb-4 h-14 w-auto object-contain"
              />
            </Link>

            <p className="mb-2 text-base font-semibold text-black">
              Better Care Starts at Home
            </p>

            <p className="text-sm leading-relaxed text-[#454646]">
              Professional, personalized, and compassionate healthcare
              services delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-1 text-base font-semibold text-black">
              Quick Links
            </h2>

            <div className="mb-4 h-0.5 w-20 bg-[#3fbebc]" />

            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#454646] transition-colors hover:text-[#4cc6f0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-1 text-base font-semibold text-black">
              Services
            </h2>

            <div className="mb-4 h-0.5 w-20 bg-[#3fbebc]" />

            <nav aria-label="Healthcare services">
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-sm text-[#454646] transition-colors hover:text-[#4cc6f0]"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-1 text-base font-semibold text-black">
              Contact
            </h2>

            <div className="mb-4 h-0.5 w-20 bg-[#3fbebc]" />

            <ul className="space-y-3">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 shrink-0 object-contain"
                      aria-hidden="true"
                    />

                    <span className="text-sm text-[#454646] transition-colors hover:text-[#4cc6f0]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-5 sm:flex-row">
          {/* Copyright */}
          <p className="text-center text-sm text-[#454646] sm:text-left">
            © {new Date().getFullYear()} CuroAid. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-[#454646] transition-colors hover:text-[#4cc6f0]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-[#454646] transition-colors hover:text-[#4cc6f0]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}