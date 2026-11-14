import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";
import blogs from "@/data/blogs";
import {
  formatDate,
  getBlog,
  getBlogUrl,
  getSlug,
} from "@/util/blogs";
import { SITE_URL } from "@/data/site";
import { getBlogContent, getReadingTime } from "@/util/blogContent";

type Props = { params: Promise<{ slug: string }> };

// Every post is a file in the repo, so build them all and 404 anything else.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: getSlug(blog) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlog((await params).slug);
  if (!blog) return {};

  const url = getBlogUrl(blog);
  return {
    title: `${blog.title} | Eswar Dudi`,
    description: blog.description,
    keywords: blog.topics,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.description,
      publishedTime: blog.date,
      authors: ["Eswar Dudi"],
      tags: blog.topics,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: "@EswarDudi",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const blog = getBlog((await params).slug);
  if (!blog) notFound();

  const content = await getBlogContent(blog);
  const url = getBlogUrl(blog);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.date,
    url,
    mainEntityOfPage: url,
    keywords: blog.topics.join(", "),
    author: { "@id": `${SITE_URL}/#person`, name: "Eswar Dudi", url: SITE_URL },
  };

  return (
    <>
      <main className="min-h-screen py-24 px-4 sm:px-10" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <article className="max-w-3xl mx-auto pt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground/60 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" /> All blogs
          </Link>

          <header className="mt-8 mb-12 space-y-5">
            <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-foreground/50">
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{getReadingTime(content)} min read</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/10 border border-accent/20"
                >
                  {topic}
                </span>
              ))}
            </div>
            {blog.originalUrl && (
              <p className="text-sm text-foreground/50">
                Originally published on{" "}
                <a
                  href={blog.originalUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-accent hover:underline"
                >
                  the GDG on Campus CVR blog
                </a>
                .
              </p>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:scroll-mt-32 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-accent/10 prose-img:rounded-xl prose-img:mx-auto">
            <MarkdownAsync
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[[rehypeShiki, { theme: "github-dark-default" }]]}
              components={{
                a: ({ href, children }) => {
                  const external = href?.startsWith("http");
                  return (
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {children}
                    </a>
                  );
                },
                // eslint-disable-next-line @next/next/no-img-element
                img: ({ src, alt }) => <img src={src} alt={alt ?? ""} loading="lazy" />,
              }}
            >
              {content}
            </MarkdownAsync>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
