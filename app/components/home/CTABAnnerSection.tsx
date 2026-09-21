import Image from "next/image";

import {
  imgCtaBanner,
  imgVectorWhite,
} from "@/lib/assets";

export default function CTABannerSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative mx-4 my-12 overflow-hidden rounded-2xl py-20 lg:mx-12"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={imgCtaBanner}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, calc(100vw - 6rem)"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(0,101,135,0.66)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <h2
          id="cta-title"
          className="mx-auto mb-4 max-w-2xl text-3xl leading-tight font-bold text-white lg:text-[40px]"
        >
          Your Health Deserves Care That Comes Home
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90">
          It&apos;s emotional without being overly dramatic, and it naturally
          reinforces CuroAid&apos;s{" "}
          <strong className="font-bold">home healthcare</strong> positioning.
        </p>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-[#4cc6f0] px-10 py-4 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Book Free Consultation

          <Image
            src={imgVectorWhite}
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}