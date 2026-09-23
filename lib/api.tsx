export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.vathala.com";

export const API_ENDPOINTS = {
  blogs: `${API_BASE_URL}/users/getAllBlogs`,
};