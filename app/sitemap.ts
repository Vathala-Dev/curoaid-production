import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blogs";

const BASE_URL = "https://curoaid.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const blogs = await getBlogs();

        const staticPages: MetadataRoute.Sitemap = [
            {
                url: BASE_URL,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 1,
            },
            {
                url: `${BASE_URL}/about`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/contact`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/blogs`,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 0.9,
            },
        ];

        const blogPages: MetadataRoute.Sitemap = blogs
            .filter((blog) => blog?.slug)
            .map((blog) => ({
                url: `${BASE_URL}/blogs/${blog.slug}`,
                lastModified: blog.date
                    ? new Date(blog.date)
                    : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.7,
            }));

        return [...staticPages, ...blogPages];
    } catch (error) {
        console.error("Failed to generate sitemap:", error);

        return [
            {
                url: BASE_URL,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 1,
            },
            {
                url: `${BASE_URL}/blogs`,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 0.9,
            },
        ];
    }
}