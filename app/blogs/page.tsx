// import BlogListPage from "../components/blog/BlogListPage";
// import { getBlogs } from "@/lib/blogs";


// export const dynamic = "force-dynamic";

// export const metadata = {
//     title: "Blogs | CuroAid",
//     description:
//         "Expert healthcare guides, elder care tips, nursing advice, physiotherapy and home healthcare information from CuroAid.",
// };

// export default async function BlogPage() {
//     try {
//         const blogs = await getBlogs();

//         return (
//             <BlogListPage  blogs={blogs}
//             />
//         );

//     } catch (error) {
//         console.error("Failed to load blogs:", error);

//         return <BlogListPage blogs={[]} />;
//     }
// }

// type Blog = {
//     _id: string;
//     title: string;
//     imageUrl: string;
//     content: string;
//     slug: string;
//     date: string;
//     category: string;
//     metaTitle?: string;
//     metaDescription?: string;
//     metaKeywords?: string;
//     isActive?: boolean;
// };
import BlogListPage from "../components/blog/BlogListPage";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 300;

export const metadata = {
    title: "Blogs | CuroAid",
    description:
        "Expert healthcare guides, elder care tips, nursing advice, physiotherapy and home healthcare information from CuroAid.",
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