import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Enrique Travesí Ortega — Applied AI & ML Engineer",
    description:
      "Software engineer with a business brain. Banking backend at BBVA, a 9.7/10 thesis on explainable AI, now going all-in on LLMs, RAG and agents. Open to junior Applied AI & ML roles.",
  },
  nav: {
    about: "About",
    work: "Work",
    journey: "Journey",
    contact: "Contact",
    cta: "Let's talk",
    theme: "Switch colour theme",
    language: "Ver en español",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    badge: "Open to work · Junior Applied AI / ML · Madrid",
    titleStart: "I build AI that",
    rotating: ["explains", "justifies", "defends"],
    titleEnd: "its decisions.",
    subtitle:
      "Software engineer with a business brain. I've shipped production backend for BBVA, built a neural network that explains its own trades, and I'm now going all-in on LLMs, RAG and agents.",
    ctaWork: "See my work",
    ctaEmail: "Email me",
    ctaCv: "Download CV",
    photoAlt: "Portrait of Enrique Travesí Ortega, arms crossed, wearing a white shirt",
    chips: ["XAI thesis · 9.7/10", "Shipped at BBVA"],
    stats: [
      { value: 9.7, decimals: 1, suffix: "/10", label: "Explainable-AI thesis grade" },
      { value: 100, suffix: "%", label: "Pass rate of the students I taught" },
      { value: 2, label: "Degrees in parallel: CS + Business" },
      { value: 400, suffix: "+", label: "Hours of AI engineering, in progress" },
    ],
  },
  credibility: {
    label: "Where I've built, audited and learned",
    items: ["BBVA · via Softtek", "BDO", "Universidad Complutense de Madrid", "42 Madrid", "Ironhack", "Proxus Academy"],
  },
  strengths: {
    kicker: "What I bring",
    title: "Code, models and business sense, in one hire.",
    intro: "Most juniors bring one of these. I've spent six years training all three.",
    items: [
      {
        title: "Explainable AI",
        body: "Accuracy isn't enough when people have to act on a prediction. I build models that can say why, and explanations people actually read.",
        proof: "Thesis graded 9.7/10",
      },
      {
        title: "End-to-end builder",
        body: "Data layer, model, API and interface: I've taken an ML system from raw data to a working product, not just a notebook.",
        proof: "Supabase · scikit-learn · FastAPI · Next.js",
      },
      {
        title: "Production engineering",
        body: "Shipped backend at enterprise scale with Softtek for BBVA: code reviews, integration environments and releases all the way to production.",
        proof: "8 months in production code",
      },
      {
        title: "Business fluency",
        body: "A full Business Administration degree alongside Computer Engineering. I talk to stakeholders in their language, not in tensors.",
        proof: "Double degree · UCM",
      },
      {
        title: "LLMs, RAG and agents",
        body: "Deep in a 400+ hour AI Engineering programme, shipping retrieval and agent projects in public, with evaluations from day one.",
        proof: "Ironhack · Nov 2026 – Feb 2027",
      },
      {
        title: "Explains the hard stuff",
        body: "Two years teaching C++ to university students: pointers, OOP, data structures. Every one of them passed.",
        proof: "9 out of 9 students passed",
      },
    ],
  },
  education: {
    kicker: "Education",
    title: "Two degrees at once: engineering and business.",
    intro: "Six years studying Computer Engineering and Business Administration side by side at Universidad Complutense de Madrid. It's why I can build the model and also explain what it means for the business.",
    degrees: [
      { name: "Computer Engineering", focus: "Programming, algorithms and data structures, computer systems, software engineering" },
      { name: "Business Administration", focus: "Finance, accounting, investment analysis, management and strategy" },
    ],
    facts: [
      { value: "2020 – 2026", label: "Universidad Complutense de Madrid" },
      { value: "9.7/10", label: "Final degree project on explainable AI" },
    ],
    honoursLabel: "Matrícula de Honor",
    honoursNote: "The highest distinction in Spanish universities, capped at 5% of each class.",
    honours: [
      { subject: "Fundamentals of Programming II", area: "Computer Engineering" },
      { subject: "Computer Structure", area: "Computer Engineering" },
      { subject: "Asset Valuation and Investment Analysis", area: "Business Administration" },
    ],
  },
  featured: {
    kicker: "Featured project",
    title: "When the model says sell, it has to say why.",
    slug: "xai-financial-decision-support",
    name: "Explainable AI for Financial Decision Support",
    tagline: "An end-to-end system where a neural network recommends buy, hold or sell, and explains every single call in plain terms.",
    highlights: [
      "Built the full pipeline: Supabase data layer, feature engineering, MLP classifier training and integration",
      "Led the explainability layer: local SHAP explanations with temporally consistent baselines, so no explanation peeks into the future",
      "Served predictions and explanations together through a FastAPI service with explainer caching",
      "Shipped a Next.js interface that shows each recommendation next to the features that drove it",
    ],
    stack: ["Python", "SHAP", "scikit-learn", "FastAPI", "Supabase", "Next.js", "TypeScript"],
    grade: "9.7",
    gradeLabel: "Final grade, out of 10",
    cta: "Read the case study",
    mockup: {
      title: "Explanation view",
      label: "Recommendation",
      recommendation: "SELL",
      rows: [
        { label: "20-day momentum", value: 0.18 },
        { label: "RSI, 14 days", value: 0.12 },
        { label: "Volatility, 10 days", value: -0.09 },
        { label: "Volume vs 30-day mean", value: -0.05 },
        { label: "Sector index return", value: 0.04 },
      ],
      note: "Illustrative values",
    },
  },
  building: {
    kicker: "Building now",
    title: "Shipping in public, one project at a time.",
    intro: "Each one starts with an evaluation suite, not a demo. Repositories go public on day one.",
    items: [
      {
        status: "now",
        statusLabel: "In progress",
        date: "Nov 2026",
        name: "Why, in words",
        pitch:
          "Turns any tabular model's SHAP values into a plain-language explanation with an LLM, then checks every claim against the numbers so it can't invent a reason.",
        stack: ["SHAP", "LLM", "Evals", "FastAPI"],
      },
      {
        status: "next",
        statusLabel: "Up next",
        date: "Dec 2026",
        name: "Paper copilot",
        pitch:
          "Ask questions across recent AI research papers. Every answer cites the exact passage, and an eval suite scores faithfulness and retrieval quality.",
        stack: ["RAG", "Embeddings", "Vector DB", "Evals"],
      },
      {
        status: "next",
        statusLabel: "Up next",
        date: "Jan 2027",
        name: "Job-match agent",
        pitch:
          "An agent that reads a job post, maps it against a CV and drafts a tailored application, using tools and asking a human before anything is sent.",
        stack: ["Agents", "Tool use", "MCP", "Python"],
      },
    ],
  },
  explain: {
    kicker: "Interactive",
    heading: "Why hire me? Let the model explain.",
    intro:
      "The same SHAP waterfall from my thesis, pointed at me. Pick a role and watch which parts of my background push the fit up, and which pull it down.",
    note: "Weights are my honest self-assessment, not a trained model. The negative bar is real too.",
    roleLabel: "Role",
    baseLabel: "Average junior candidate",
    outputLabel: "Fit for this role",
    roles: [
      { id: "applied-ai", label: "Applied AI engineer" },
      { id: "ml", label: "ML engineer" },
      { id: "product", label: "AI product engineer" },
      { id: "solutions", label: "Solutions engineer" },
    ],
    features: {
      xai: { label: "Explainable AI thesis", evidence: "SHAP over an MLP for buy, hold, sell. Graded 9.7 out of 10." },
      python: { label: "Python and the ML stack", evidence: "scikit-learn, SHAP, Pandas, FastAPI in a working system." },
      backend: { label: "Production backend, BBVA", evidence: "REST APIs, integration environments, releases through to production." },
      llm: { label: "LLMs, RAG and agents", evidence: "Ironhack AI Engineering, Nov 2026 to Feb 2027. In progress." },
      business: { label: "Business administration", evidence: "A full second degree: finance, valuation, how decisions get made." },
      teaching: { label: "Explaining hard things", evidence: "Taught C++ to 9 university students. All 9 passed." },
      fullstack: { label: "Built a system end to end", evidence: "Data layer, model, FastAPI and Next.js in the thesis project." },
      experience: { label: "Under a year in industry", evidence: "Eight months at Softtek, six at BDO. I learn fast; I'm still junior." },
    },
  },
  journey: {
    kicker: "Journey",
    title: "Where I've been building.",
    items: [
      {
        kind: "study",
        period: "Nov 2026 – Feb 2027",
        role: "AI Engineering Bootcamp",
        org: "Ironhack",
        tag: "Now",
        points: [
          "400+ hours of applied ML, deep learning, NLP, LLM apps, RAG, agents, MLOps and cloud deployment",
          "Building towards an end-to-end capstone",
        ],
      },
      {
        kind: "work",
        period: "Jan – Aug 2026",
        role: "Junior Software Engineer",
        org: "Softtek · BBVA account",
        points: [
          "Built backend features for BBVA's digital-asset custody platform: transactions, shared libraries and service components",
          "Debugged interdependent services with trace analysis across DEV and integration environments",
          "Drove validation across release environments, all the way to production",
        ],
      },
      {
        kind: "study",
        period: "2020 – 2026",
        role: "Double Degree: Computer Engineering + Business Administration",
        org: "Universidad Complutense de Madrid",
        points: [
          "Thesis on explainable AI for financial decisions, graded 9.7/10",
          "Matrícula de Honor in Fundamentals of Programming II, Computer Structure, and Asset Valuation and Investment Analysis",
        ],
      },
      {
        kind: "work",
        period: "Jan – Jul 2025",
        role: "IT Audit Intern",
        org: "BDO Spain",
        points: [
          "Processed and reconciled accounting datasets, including balance sheets and trial balances across consecutive financial periods",
          "Ran automated and manual fraud-oriented audit tests: reconciliations, transaction consistency and anomaly checks for postings on weekends and public holidays",
        ],
      },
      {
        kind: "study",
        period: "Aug 2024 – Jan 2025",
        role: "Software Engineering Programme",
        org: "42 Madrid · Fundación Telefónica",
        points: ["Peer-to-peer, project-based C and Unix: libft, ft_printf, get_next_line, push_swap, Born2BeRoot"],
      },
      {
        kind: "teaching",
        period: "2023 – 2024",
        role: "Programming Instructor",
        org: "Proxus Academy",
        points: ["Taught C++ fundamentals (OOP, pointers, data structures) to university students", "100% pass rate across 9 students"],
      },
    ],
  },
  stack: {
    kicker: "Toolbox",
    title: "What I work with.",
    groups: [
      { name: "AI & data", items: ["Python", "SHAP", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Explainable AI"] },
      { name: "Levelling up", items: ["LLMs", "RAG", "AI agents", "Deep learning", "NLP", "MLOps"] },
      { name: "Backend", items: ["FastAPI", "Flask", "REST APIs", "SQL", "MySQL", "Supabase", "Debugging"] },
      { name: "Languages & tools", items: ["C", "C++", "Java", "TypeScript", "Next.js", "Git", "Linux", "Testing"] },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's build AI people can trust.",
    body: "I'm looking for my next junior Applied AI, ML or AI engineering role. If your team ships models people rely on, I'd love to talk.",
    copy: "Copy email",
    copied: "Copied!",
    location: "Madrid, Spain",
    languages: "Spanish · English (C1)",
  },
  footer: { line: "Designed and built with Next.js.", rights: "© 2026 Enrique Travesí Ortega" },
  caseStudy: {
    back: "Back to all work",
    cta: "Like this? Let's talk",
    facts: [
      { label: "Context", value: "Final degree project, Universidad Complutense de Madrid" },
      { label: "My role", value: "Worked across data, model, API and UI; led explainability" },
      { label: "Result", value: "Graded 9.7 out of 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default en;
