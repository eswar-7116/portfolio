import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#050505",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "#00ff88",
        }}
      />

      <div
        style={{
          color: "#00ff88",
          fontSize: "18px",
          marginBottom: "16px",
          letterSpacing: "0.1em",
          fontFamily: "monospace",
        }}
      >
        eswardudi.vercel.app
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: "72px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "24px",
          fontFamily: "sans-serif",
        }}
      >
        Eswar Dudi
      </div>
      <div
        style={{
          color: "#a3a3a3",
          fontSize: "32px",
          marginBottom: "40px",
          fontFamily: "sans-serif",
        }}
      >
        Backend Systems · AI Integrations · Full-Stack
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        {["Go", "Python", "TypeScript", "Docker", "React"].map((tag) => (
          <div
            key={tag}
            style={{
              border: "1px solid #00ff88",
              color: "#00ff88",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontFamily: "monospace",
              background: "rgba(0, 255, 136, 0.05)",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
