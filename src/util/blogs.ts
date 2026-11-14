import blogs from "@/data/blogs";
import { Blog } from "@/types/blog";
import { SITE_URL } from "@/data/site";

export const getSlug = (blog: Blog) => blog.file.replace(/\.md$/, "");

export const getBlogUrl = (blog: Blog) => `${SITE_URL}/blogs/${getSlug(blog)}`;

// Newest first
export const getBlogs = () =>
  [...blogs].sort((a, b) => b.date.localeCompare(a.date));

export const getBlog = (slug: string) =>
  blogs.find((blog) => getSlug(blog) === slug);

// Dates are "YYYY-MM-DD" strings (IST)
export const formatDate = (date: string) =>
  `${new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })} IST`;
