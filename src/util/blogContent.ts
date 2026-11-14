import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Blog } from "@/types/blog";

const BLOGS_DIR = path.join(process.cwd(), "src", "blogs");

export const getBlogContent = (blog: Blog) =>
  readFile(path.join(BLOGS_DIR, blog.file), "utf8");

export const getReadingTime = (markdown: string) => {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};
