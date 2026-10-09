import type { Metadata } from "next";
import BlogListPage from "../components/blog/BlogListPage";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Healthcare Blogs | CuroAid",
    description:
        "Explore expert healthcare guides, elder care tips, nursing advice, physiotherapy insights, home healthcare information, and wellness tips from CuroAid.",

    keywords: [
        "CuroAid blogs",
        "healthcare blogs",
        "home healthcare",
        "elder care",
        "home nursing",
        "physiotherapy",
        "healthcare tips",
        "senior care",
        "home care services",
    ],

    alternates: {
        canonical: "https://curoaid.com/blogs",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        title: "Healthcare Blogs | CuroAid",
        description:
            "Expert healthcare guides, elder care tips, nursing advice, physiotherapy insights, and home healthcare information from CuroAid.",
        url: "https://curoaid.com/blogs",
        siteName: "CuroAid",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://curoaid.com/images/blog-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CuroAid Healthcare Blogs",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Healthcare Blogs | CuroAid",
        description:
            "Expert healthcare guides, elder care tips, nursing advice, physiotherapy and home healthcare information from CuroAid.",
        images: ["https://curoaid.com/images/blog-og-image.jpg"],
    },
};

export default async function BlogPage() {
    try {
        const blogs = await getBlogs();

        return <BlogListPage blogs={blogs} />;
    } catch (error) {
        console.error("Failed to load blogs:", error);

        return <BlogListPage blogs={[]} />;
    }
}