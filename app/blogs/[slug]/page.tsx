import { notFound } from "next/navigation";

import { getBlogs } from "@/lib/blogs";
import BlogDetailsPage from "@/app/components/blog/BlogDetailsPage";

export const dynamic = "force-dynamic";

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {

    const { slug } = await params;

    const blogs = await getBlogs();

    const blog = blogs.find(
        (item) =>
            item.slug === slug
    );

    if (!blog) {
        return {
            title: "Blog | CuroAid",
            description:
                "Healthcare information and expert guidance from CuroAid.",
        };
    }

    return {
        title:
            blog.metaTitle ||
            `${blog.title} | CuroAid`,

        description:
            blog.metaDescription ||
            "Healthcare information and expert guidance from CuroAid.",

        keywords:
            blog.metaKeywords
                ?.split(",")
                .map(
                    (keyword) =>
                        keyword.trim()
                )
                .filter(Boolean),

        alternates: {
            canonical:
                `https://curoaid.com/blogs/${blog.slug}`,
        },

        openGraph: {
            title:
                blog.metaTitle ||
                blog.title,

            description:
                blog.metaDescription ||
                "Healthcare information and expert guidance from CuroAid.",

            images: [
                {
                    url: blog.imageUrl,
                },
            ],

            type: "article",
        },
    };
}

/* =========================================================
   PAGE
========================================================= */

export default async function BlogDetailsRoute({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {

    const { slug } = await params;

    const blogs = await getBlogs();

    /* =====================================================
       CURRENT BLOG
    ===================================================== */

    const blog = blogs.find(
        (item) =>
            item.slug === slug
    );
    console.log("route",slug)

    if (!blog) {
        notFound();
    }

    /* =====================================================
       RELATED BLOGS
    ===================================================== */

    let relatedBlogs = blogs.filter(
        (item) =>
            item._id !== blog._id &&
            item.category?.toLowerCase() ===
            blog.category?.toLowerCase()
    );

    /* =====================================================
       FALLBACK RELATED BLOGS
    ===================================================== */

    if (relatedBlogs.length < 2) {

        const fallbackBlogs =
            blogs.filter(
                (item) =>
                    item._id !== blog._id &&
                    !relatedBlogs.some(
                        (related) =>
                            related._id ===
                            item._id
                    )
            );

        relatedBlogs = [
            ...relatedBlogs,
            ...fallbackBlogs,
        ];
    }

    return (


        <BlogDetailsPage
            blog={blog}
            relatedBlogs={
                relatedBlogs.slice(0, 2)
            }
        />
    );
}