import type { MetadataRoute } from "next";
import { getBlogs, getBlogUrl } from "@/util/blogs";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogs();

  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: blogs[0]?.date,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogs.map((blog) => ({
      url: getBlogUrl(blog),
      lastModified: blog.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
