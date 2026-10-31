export type RoleId = "applied-ai" | "ml" | "product" | "solutions";

export type FeatureId =
  | "xai"
  | "python"
  | "backend"
  | "llm"
  | "business"
  | "teaching"
  | "fullstack"
  | "experience";

export type Stat = { value: number; decimals?: number; prefix?: string; suffix?: string; label: string };

export type ShapRow = { label: string; value: number };

export type Content = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    work: string;
    journey: string;
    contact: string;
    cta: string;
    theme: string;
    language: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    rotating: string[];
    titleEnd: string;
    subtitle: string;
    ctaWork: string;
    ctaEmail: string;
    ctaCv: string;
    photoAlt: string;
    chips: [string, string];
    stats: Stat[];
  };
  credibility: { label: string; items: string[] };
  strengths: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; body: string; proof: string }[];
  };
  education: {
    kicker: string;
    title: string;
    intro: string;
    degrees: { name: string; focus: string }[];
    facts: { value: string; label: string }[];
    honoursLabel: string;
    honoursNote: string;
    honours: { subject: string; area: string }[];
  };
  featured: {
    kicker: string;
    title: string;
    slug: string;
    name: string;
    tagline: string;
    highlights: string[];
    stack: string[];
    grade: string;
    gradeLabel: string;
    cta: string;
    mockup: { title: string; label: string; recommendation: string; rows: ShapRow[]; note: string };
  };
  building: {
    kicker: string;
    title: string;
    intro: string;
    items: { status: "now" | "next"; statusLabel: string; date: string; name: string; pitch: string; stack: string[] }[];
  };
  explain: {
    kicker: string;
    heading: string;
    intro: string;
    note: string;
    roleLabel: string;
    baseLabel: string;
    outputLabel: string;
    roles: { id: RoleId; label: string }[];
    features: Record<FeatureId, { label: string; evidence: string }>;
  };
  journey: {
    kicker: string;
    title: string;
    items: {
      kind: "work" | "study" | "teaching";
      period: string;
      role: string;
      org: string;
      points: string[];
      tag?: string;
    }[];
  };
  stack: { kicker: string; title: string; groups: { name: string; items: string[] }[] };
  contact: {
    kicker: string;
    title: string;
    body: string;
    copy: string;
    copied: string;
    location: string;
    languages: string;
  };
  footer: { line: string; rights: string };
  caseStudy: {
    back: string;
    cta: string;
    facts: { label: string; value: string }[];
  };
};
