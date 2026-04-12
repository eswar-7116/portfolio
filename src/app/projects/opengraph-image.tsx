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
        eswardudi.vercel.app/projects
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "24px",
          fontFamily: "sans-serif",
        }}
      >
        Explore Eswar's Projects
      </div>
      <div
        style={{
          color: "#a3a3a3",
          fontSize: "28px",
          marginBottom: "40px",
          fontFamily: "sans-serif",
        }}
      >
        Container runtimes · Real-time systems · AI platforms
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        {["Glambdar", "Guntainer", "NexusChat", "SynapseLearn"].map((p) => (
          <div
            key={p}
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
            {p}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
