// Facts that are the same in every language. Edit here, not in the components.
export const site = {
  name: "Enrique Travesí Ortega",
  shortName: "Enrique Travesí",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://enriquetravesi.vercel.app",
  email: "quiqueto02@gmail.com",
  linkedin: "https://www.linkedin.com/in/enrique-travesi-ortega-b3323b273",
  // Leave empty until the profile is ready; the GitHub links hide themselves.
  github: "https://github.com/kikinets",
  // Put the PDF in /public with this name, then set cvAvailable to true.
  cvPath: "/Enrique_Travesi_Ortega_CV.pdf",
  cvAvailable: false,
  locales: ["en", "es"] as const,
  defaultLocale: "en" as const,
};

export type Locale = (typeof site.locales)[number];
