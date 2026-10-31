import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getContent, isLocale } from "@/content";

export const alt = "Enrique Travesí Ortega — Applied AI & ML Engineer";
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
          background: "#0e0d0b",
          color: "#ece9e0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: photo ? 760 : 1200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#9b978c" }}>
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#ff6a2b" }} />
            {c.hero.badge}
          </div>
          <div style={{ marginTop: 28, fontSize: 64, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>Enrique Travesí Ortega</div>
          <div
            style={{
              marginTop: 18,
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#ff6a2b",
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
