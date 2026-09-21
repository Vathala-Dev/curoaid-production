"use client";

import { useState } from "react";
import Image from "next/image";

import SectionBadge from "@/app/components/ui/SectionBadge";

import {
  imgBlog,
  imgVector,
  imgVectorWhite,
} from "@/lib/assets";

const blogPosts = [
  {
    id: 1,
    title: "The careful way to choose a caregiver",
    excerpt:
      "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.",
  },
  {
    id: 2,
    title: "The careful way to choose a caregiver",
    excerpt:
      "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.",
  },
  {
    id: 3,
    title: "The careful way to choose a caregiver",
    excerpt:
      "Hiring care for someone you love shouldn't feel like rolling the dice. We hand-vet every professional ourselves, including backgrounds, credentials, and the harder-to-measure things, like patience.",
  },
];

export default function BlogsSection() {
  const [activeBlog, setActiveBlog] = useState(1);

  return (
    <section
      aria-labelledby="blogs-title"
      className="bg-[#f0fafe] py-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionBadge label="Latest Blog" />

        <div className="mt-4 mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row">
          <h2
            id="blogs-title"
            className="text-3xl leading-tight font-bold text-black lg:text-[40px]"
          >
            Blogs | Home Healthcare
          </h2>

          <p className="text-base leading-relaxed text-[#454646] lg:max-w-lg lg:text-right">
            Stay updated with the latest news and insights in home healthcare.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:px-12">
        {blogPosts.map((post, index) => {
          const isActive = activeBlog === index;

          return (
            <article
              key={post.id}
              onMouseEnter={() => setActiveBlog(index)}
              onClick={() => setActiveBlog(index)}
              className={`
                flex cursor-pointer flex-col overflow-hidden rounded-xl
                shadow-md transition-all duration-300
                ${
                  isActive
                    ? "scale-[1.02] bg-[#74c067] shadow-lg"
                    : "bg-white hover:shadow-lg"
                }
              `}
            >
              {/* Blog Image */}
              <Image
                src={imgBlog}
                alt={post.title}
                width={600}
                height={220}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-[200px] w-full rounded-t-xl object-cover sm:h-[220px]"
              />

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3
                  className={`
                    mb-3 text-[15px] leading-snug font-semibold
                    sm:text-base
                    ${isActive ? "text-white" : "text-black"}
                  `}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                    mb-5 flex-1 text-[13px] leading-relaxed
                    sm:text-sm
                    ${isActive ? "text-white/95" : "text-[#454646]"}
                  `}
                >
                  {post.excerpt}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className={`
                    flex items-center gap-2 self-start
                    rounded-xl px-5 py-2.5 text-sm font-bold
                    shadow transition-all
                    ${
                      isActive
                        ? "bg-white text-black hover:shadow-md"
                        : "text-white hover:opacity-90"
                    }
                  `}
                  style={
                    isActive
                      ? undefined
                      : {
                          background:
                            "linear-gradient(130deg, #4cc6f0 12.67%, #74c067 85.05%)",
                        }
                  }
                >
                  Read More

                  <Image
                    src={isActive ? imgVector : imgVectorWhite}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}