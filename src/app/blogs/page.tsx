import { Metadata } from "next";
import Link from "next/link";
import { formatDate, getBlogs, getSlug } from "@/util/blogs";
import { SITE_URL } from "@/data/site";
import { MatrixSphere } from "@/components/models/lazy";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blogs | Eswar Dudi",
  description:
    "Articles by Eswar Dudi on backend systems, system design, concurrency, and building things from scratch.",
  alternates: {
    canonical: `${SITE_URL}/blogs`,
    types: { "application/rss+xml": `${SITE_URL}/blogs/rss.xml` },
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <>
      <main className="min-h-screen py-24 px-4 sm:px-10" role="main">
        <div className="max-w-5xl mx-auto space-y-16 pt-12">
          <header className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 flex-1">
              <h1 className="text-4xl sm:text-7xl font-bold tracking-tight">
                My{" "}
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                  Blogs
                </span>
              </h1>
              <p className="text-foreground/60 font-body text-xl leading-relaxed">
                Notes on backend systems, system design, and whatever I&apos;m
                building or learning right now.
              </p>
            </div>

            <div className="w-full lg:w-[360px] aspect-square relative hidden min-[850px]:flex items-center justify-center group shrink-0">
              <MatrixSphere />
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
            </div>
          </header>

          <ul className="space-y-6 max-w-3xl">
            {blogs.map((blog) => (
              <li key={blog.file}>
                <Link
                  href={`/blogs/${getSlug(blog)}`}
                  className="block p-6 rounded-2xl border border-accent/10 bg-foreground/[0.02] hover-accent-border transition-all group"
                >
                  <time
                    dateTime={blog.date}
                    className="font-mono text-sm text-secondary/80"
                  >
                    {formatDate(blog.date)}
                  </time>
                  <h2 className="mt-2 text-2xl font-bold group-hover:text-accent transition-colors">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-foreground/60 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {blog.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full text-xs font-mono text-secondary/75 bg-secondary/5 border border-secondary/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
