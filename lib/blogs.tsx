import { API_BASE_URL } from "@/lib/api";

export type BlogFAQ = {
    _id?: string;
    question: string;
    answer: string;
};

export type Blog = {
    _id: string;
    title: string;
    imageUrl: string;
    content: string;
    slug: string;
    date: string;
    category: string;

    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;

    faqList?: BlogFAQ[];

    isActive?: boolean;
};

/* =========================================================
   GET ALL BLOGS
========================================================= */

export async function getBlogs(): Promise<Blog[]> {
    const response = await fetch(
        `${API_BASE_URL}/users/getAllBlogs`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error(
            `Blog API request failed: ${response.status}`
        );
    }

    const result = await response.json();

    if (!Array.isArray(result?.data)) {
        return [];
    }

    return result.data.filter(
        (blog: Blog) =>
            blog.isActive !== false
    );
}