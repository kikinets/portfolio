export type RoleId = "applied-ai" | "ml" | "finance" | "solutions";

export type FeatureId =
  | "xai"
  | "python"
  | "backend"
  | "llm"
  | "business"
  | "teaching"
  | "audit"
  | "experience";

export type Picture = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  slug?: string; // set when a case-study page exists
  title: string;
  status: string;
  summary: string;
  picture?: Picture; // a project without one shows its interface fragment
};

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; experience: string; contact: string; theme: string; language: string; home: string };
  hero: {
    first: string;
    last: string;
    sentence: string;
    action: string;
    picture: Picture;
  };
  about: {
    heading: string;
    paragraph: string;
    facts: { label: string; value: string }[];
    records: { label: string; items: { name: string; note: string }[] }[];
  };
  explain: {
    heading: string;
    intro: string;
    note: string;
    roleLabel: string;
    baseLabel: string;
    outputLabel: string;
    roles: { id: RoleId; label: string }[];
    features: Record<FeatureId, { label: string; evidence: string }>;
  };
  work: {
    heading: string;
    remark: string;
    readCase: string;
    projects: Project[];
    earlier: string;
    fragment: { title: string; letter: string; reasons: { label: string; value: number }[]; check: string };
  };
  experience: {
    heading: string;
    groups: { label: string; rows: { role: string; org: string; focus: string; dates: string }[] }[];
    cv: string;
  };
  now: {
    heading: string;
    paragraphs: string[];
    link: string;
    picture: Picture;
  };
  contact: {
    heading: string;
    place: string;
    languages: string;
    greeting: string;
    greetingLabel: string;
  };
  footer: {
    invitation: [string, string];
    action: string;
    rights: string;
    credits: string;
  };
  caseStudy: {
    back: string;
    facts: { label: string; value: string }[];
  };
};
