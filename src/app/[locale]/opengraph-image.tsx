import { ImageResponse } from "next/og";
import { getContent, isLocale } from "@/content";

export const alt = "Enrique Travesí — Applied AI & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getContent(isLocale(locale) ? locale : "en");
  const role = locale === "es" ? "Ingeniero de IA aplicada y ML · Madrid" : "Applied AI & ML Engineer · Madrid";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#ffffff",
          color: "#1f2b4d",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>{role}</span>
          <span style={{ background: "#f7941d", padding: "6px 16px" }}>Open to work</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 190, fontWeight: 800, lineHeight: 0.88, letterSpacing: -8 }}>
          <span>{c.hero.first}</span>
          <span style={{ paddingLeft: 260 }}>{c.hero.last}</span>
        </div>
      </div>
    ),
    size,
  );
}
