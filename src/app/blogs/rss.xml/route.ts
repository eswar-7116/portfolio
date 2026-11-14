import { getBlogs, getBlogUrl } from "@/util/blogs";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!,
  );

export function GET() {
  const items = getBlogs()
    .map(
      (blog) => `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${getBlogUrl(blog)}</link>
      <guid isPermaLink="true">${getBlogUrl(blog)}</guid>
      <description>${escapeXml(blog.description)}</description>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
${blog.topics.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n")}
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Eswar Dudi's Blog</title>
    <link>${SITE_URL}/blogs</link>
    <description>Notes on backend systems, system design, and building things from scratch.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/blogs/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
