import React from "react";

interface LegalPageProps {
  title: string;
  updatedDate?: string;
  intro?: string;
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  updatedDate,
  intro,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header / Title Card */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#f5f5f5] px-5 py-6 sm:px-8 sm:py-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>

          {updatedDate && (
            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Last Updated: {updatedDate}
            </p>
          )}

          {intro && (
            <p className="mt-4 max-w-4xl text-sm leading-6 text-gray-700 sm:text-base">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-[1100px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <article
          className="
            prose
            prose-sm
            max-w-none
            text-gray-700
            sm:prose-base

            prose-headings:font-semibold
            prose-headings:text-gray-900

            prose-h2:mb-3
            prose-h2:mt-8
            prose-h2:text-xl

            prose-h3:mb-2
            prose-h3:mt-6
            prose-h3:text-lg

            prose-p:mb-4
            prose-p:leading-7

            prose-li:leading-7

            prose-a:text-blue-600
            prose-a:no-underline
            hover:prose-a:underline
          "
        >
          {children}
        </article>
      </section>
    </main>
  );
}