import fs from "node:fs";
import path from "node:path";

// The retouched portrait, if it has been added to public/images. Build-time only.
const PHOTO = { src: "/images/enrique.webp", width: 1200, height: 1500 };

export function getPhoto() {
  return fs.existsSync(path.join(process.cwd(), "public", PHOTO.src)) ? PHOTO : null;
}
