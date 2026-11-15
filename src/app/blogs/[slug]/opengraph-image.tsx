import { BACKGROUND, ACCENT } from "@/data/theme";
import { ImageResponse } from "next/og";
import blogs from "@/data/blogs";
import { formatDate, getBlog, getSlug } from "@/util/blogs";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Blog post by Eswar Dudi";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: getSlug(blog) }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = getBlog((await params).slug);

  return new ImageResponse(
    <div
      style={{
        background: BACKGROUND,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: ACCENT,
        }}
      />
      <div
        style={{
          color: ACCENT,
          fontSize: "22px",
          marginBottom: "20px",
          letterSpacing: "0.1em",
          fontFamily: "monospace",
        }}
      >
        eswardudi.vercel.app/blogs
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "28px",
          fontFamily: "sans-serif",
        }}
      >
        {blog?.title ?? "Blog"}
      </div>
      {blog && (
        <div
          style={{
            color: "#a3a3a3",
            fontSize: "28px",
            marginBottom: "40px",
            fontFamily: "sans-serif",
          }}
        >
          {`Eswar Dudi · ${formatDate(blog.date)}`}
        </div>
      )}
      <div style={{ display: "flex", gap: "16px" }}>
        {blog?.topics.map((topic) => (
          <div
            key={topic}
            style={{
              border: "1px solid #333",
              color: "#d4d4d4",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontFamily: "monospace",
              background: "#111",
            }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
