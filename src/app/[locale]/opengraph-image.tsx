import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getContent, isLocale } from "@/content";

export const alt = "Enrique Travesí — Applied AI & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The social card uses the PNG cut-out of the portrait when it exists.
function portrait() {
  const file = path.join(process.cwd(), "public", "images", "enrique.png");
  return fs.existsSync(file) ? `data:image/png;base64,${fs.readFileSync(file).toString("base64")}` : null;
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getContent(isLocale(locale) ? locale : "en");
  const photo = portrait();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #24124a 0%, #07090f 50%, #062430 100%)",
          color: "#e8ecf4",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: photo ? 760 : 1200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#8b93a7" }}>
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#34d399" }} />
            {c.hero.badge}
          </div>
          <div style={{ marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>Enrique Travesí</div>
          <div
            style={{
              marginTop: 18,
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.1,
              backgroundImage: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {`${c.hero.titleStart} ${c.hero.rotating[0]} ${c.hero.titleEnd}`}
          </div>
        </div>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" width={440} height={550} style={{ position: "absolute", right: 0, bottom: -40, objectFit: "cover" }} />
        )}
      </div>
    ),
    size,
  );
}
