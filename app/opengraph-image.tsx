import { ImageResponse } from "next/og";

export const alt = "Sabien Douven – Front-end Developer met een passie voor UX&UI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 90,
          background: "#f1f4fb",
          color: "#1c1a3b",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 14,
            borderRadius: 7,
            background: "#7a5af0",
            marginBottom: 40,
          }}
        />
        <div style={{ display: "flex", fontSize: 150, fontWeight: 800, lineHeight: 1 }}>
          Sabien Douven
        </div>
        <div style={{ display: "flex", fontSize: 58, color: "#7a5af0", marginTop: 36 }}>
          Front-end Developer
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#4a4866", marginTop: 12 }}>
          {"met een passie voor UX&UI"}
        </div>
      </div>
    ),
    { ...size },
  );
}
