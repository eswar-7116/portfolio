import Link from "next/link";
import { formatDate, getBlogs, getSlug } from "@/util/blogs";

export default function Blogs() {
  const latest = getBlogs().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="space-y-6">
        <h2
          className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
          id="blogs-heading"
        >
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            04.
          </span>{" "}
          Blogs
        </h2>
        <p className="text-foreground/60 max-w-xl font-body">
          Notes on backend systems, system design, and whatever I&apos;m
          building or learning right now.
        </p>
        <Link
          href="/blogs"
          className="inline-block text-accent text-sm font-mono hover:underline underline-offset-4"
        >
          read_all_blogs()
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latest.map((blog) => (
          <Link
            key={blog.file}
            href={`/blogs/${getSlug(blog)}`}
            className="flex flex-col p-6 rounded-2xl border border-accent/10 bg-foreground/[0.02] glow-on-hover transition-all group"
          >
            <time
              dateTime={blog.date}
              className="font-mono text-xs text-foreground/50"
            >
              {formatDate(blog.date)}
            </time>
            <h3 className="mt-2 text-lg font-bold group-hover:text-accent transition-colors">
              {blog.title}
            </h3>
            <p className="mt-3 text-sm text-foreground/60 leading-relaxed flex-1">
              {blog.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono text-accent bg-accent/10 border border-accent/20"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
