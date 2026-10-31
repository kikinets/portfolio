import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Enrique Travesí — Applied AI & ML Engineer",
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
    rotating: ["explains", "justifies", "stands behind"],
    titleEnd: "its decisions.",
    subtitle:
      "Software engineer with a business brain. I've shipped backend for BBVA, made a neural network explain its trades to humans, and I'm now going all-in on LLMs, RAG and agents.",
    ctaWork: "See my work",
    ctaEmail: "Email me",
    ctaCv: "Download CV",
    photoAlt: "Portrait of Enrique Travesí, arms crossed, wearing a white shirt",
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
        icon: "sparkles",
        title: "Explainable AI",
        body: "Accuracy isn't enough when money is on the line. My thesis made a neural network justify every buy, hold or sell call with SHAP.",
        proof: "Thesis graded 9.7/10",
      },
      {
        icon: "server",
        title: "Production backend",
        body: "Built features for BBVA's digital-asset custody platform and took them from development through integration to production.",
        proof: "Banking · APX · REST APIs",
      },
      {
        icon: "briefcase",
        title: "Business fluency",
        body: "A full Business Administration degree alongside Computer Engineering. I talk to stakeholders in their language, not in tensors.",
        proof: "Double degree · UCM",
      },
      {
        icon: "messages",
        title: "Explains the hard stuff",
        body: "Two years teaching C++ to university students: pointers, OOP, data structures.",
        proof: "9 out of 9 students passed",
      },
      {
        icon: "bot",
        title: "LLMs, RAG and agents",
        body: "Deep in a 400+ hour AI Engineering programme, shipping retrieval and agent projects in public, with evaluations from day one.",
        proof: "Ironhack · Nov 2026 – Feb 2027",
      },
      {
        icon: "shield",
        title: "Fraud and risk instinct",
        body: "At BDO I ran automated and manual fraud tests on real accounting data: reconciliations, anomalies, postings on weekends and holidays.",
        proof: "IT Audit · BDO",
      },
    ],
  },
  featured: {
    kicker: "Featured project",
    title: "When the model says sell, it has to say why.",
    slug: "xai-financial-decision-support",
    name: "Explainable AI for Financial Decision Support",
    tagline: "A neural network recommends buy, hold or sell. The explainability layer I built makes every call readable by a human.",
    highlights: [
      "Built MLPShapExplainer: local SHAP explanations for every prediction of an MLP classifier",
      "Temporally consistent background data, so an explanation never peeks into the future",
      "Explainer caching plus ranked, human-readable feature contributions, served through FastAPI to a Next.js front end",
      "Designed the first Supabase data layer and helped shape the system architecture",
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
        name: "Credit, explained",
        pitch:
          "A credit-risk model whose SHAP values an LLM turns into a plain-language letter for the applicant, then fact-checked against the numbers so it can't invent a reason.",
        stack: ["scikit-learn", "SHAP", "LLM", "FastAPI"],
      },
      {
        status: "next",
        statusLabel: "Up next",
        date: "Dec 2026",
        name: "Filings copilot",
        pitch:
          "Ask anything about the reports Spanish listed companies file with the CNMV. Every answer cites its page, and an eval suite scores faithfulness and retrieval.",
        stack: ["RAG", "Embeddings", "Vector DB", "Evals"],
      },
      {
        status: "next",
        statusLabel: "Up next",
        date: "Jan 2027",
        name: "Ledger agent",
        pitch:
          "An AI auditor served over MCP that runs the fraud tests I used to do by hand at BDO: reconciliations, weekend postings, outliers.",
        stack: ["Agents", "MCP", "Tool use", "Python"],
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
      { id: "finance", label: "AI in finance" },
      { id: "solutions", label: "Solutions engineer" },
    ],
    features: {
      xai: { label: "Explainable AI thesis", evidence: "SHAP over an MLP for buy, hold, sell. Graded 9.7 out of 10." },
      python: { label: "Python and the ML stack", evidence: "scikit-learn, SHAP, Pandas, FastAPI in a working system." },
      backend: { label: "Production backend, BBVA", evidence: "APX transactions, REST APIs, releases through to production." },
      llm: { label: "LLMs, RAG and agents", evidence: "Ironhack AI Engineering, Nov 2026 to Feb 2027. In progress." },
      business: { label: "Business administration", evidence: "A full second degree: finance, valuation, how decisions get made." },
      teaching: { label: "Explaining hard things", evidence: "Taught C++ to 9 university students. All 9 passed." },
      audit: { label: "Fraud and anomaly tests", evidence: "Reconciliations and weekend-posting checks at BDO." },
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
          "Shipped backend for BBVA's digital-asset custody: APX transactions, libraries and ASO components for wallets, accounts, addresses and VASP accounts",
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
          "Honours in Programming II, Computer Architecture and Asset Valuation",
        ],
      },
      {
        kind: "work",
        period: "Jan – Jul 2025",
        role: "IT Audit Intern",
        org: "BDO Spain",
        points: [
          "Reconciled balance sheets and trial balances across consecutive financial periods",
          "Ran automated and manual fraud tests: transaction consistency, anomalies, postings on weekends and public holidays",
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
      { name: "Backend", items: ["FastAPI", "Flask", "REST APIs", "SQL", "MySQL", "Supabase", "APX", "ASO"] },
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
      { label: "My part", value: "Explainability layer, first data layer, model integration" },
      { label: "Result", value: "Graded 9.7 out of 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default en;
