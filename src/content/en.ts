import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Enrique Travesí — Applied AI & ML Engineer",
    description:
      "Software engineer in Madrid building AI that explains its decisions. Computer engineering and business, banking backend at BBVA, a 9.7 thesis on explainable AI. Open to junior Applied AI & ML roles.",
  },
  nav: { work: "Work", experience: "Experience", contact: "Contact", theme: "Switch colour theme", language: "Ver en español", home: "Home" },
  hero: {
    first: "Enrique",
    last: "Travesí",
    sentence:
      "Software engineer building AI that explains its decisions. Computer engineering and business, banking backend at BBVA, a 9.7 thesis on explainable AI. Open to junior Applied AI & ML roles.",
    action: "Email me",
    picture: {
      src: "/images/madrid-070.jpg",
      width: 1920,
      height: 1221,
      alt: "Gran Vía in Madrid seen from Calle de Alcalá, with the Metrópolis dome on the left, in an old postcard",
      caption: "Gran Vía, Madrid, c. 1915",
    },
  },
  about: {
    heading: "About",
    paragraph:
      "I studied computer engineering and business administration at the same time, and it shaped how I build: a model is only useful when the people acting on it understand why it said what it said. I have written backend for BBVA's digital-asset custody, run fraud-oriented audit tests at BDO, and taught C++ to university students until every one of them passed. Now I am going deep on LLMs, retrieval and agents.",
    facts: [
      { label: "Based in", value: "Madrid, Spain" },
      { label: "Languages", value: "Spanish, native · English, C1" },
      { label: "Status", value: "Open to work, available now" },
    ],
    records: [
      {
        label: "Toolkit",
        items: [
          { name: "Python", note: "daily" },
          { name: "SHAP, scikit-learn", note: "thesis" },
          { name: "Pandas, NumPy, Jupyter", note: "thesis, BDO" },
          { name: "FastAPI, Flask, REST", note: "thesis, BBVA" },
          { name: "SQL, MySQL, Supabase", note: "thesis" },
          { name: "Next.js, TypeScript", note: "thesis" },
          { name: "C, C++, Java", note: "42, UCM" },
          { name: "Git, Linux", note: "daily" },
        ],
      },
      {
        label: "Domain",
        items: [
          { name: "Banking backend, APX and ASO", note: "BBVA" },
          { name: "Digital-asset custody", note: "BBVA" },
          { name: "Reconciliation and fraud tests", note: "BDO" },
          { name: "Asset valuation", note: "honours" },
          { name: "Computer architecture", note: "honours" },
          { name: "Teaching programming", note: "2 years" },
        ],
      },
    ],
  },
  explain: {
    heading: "Why hire me, explained",
    intro:
      "My thesis explained a neural network's buy, hold and sell calls with SHAP: each feature pushes the prediction up or down from a baseline. Here is the same picture pointed at me. Pick a role and see what pushes the fit.",
    note: "The weights are my honest self-assessment, not the output of a trained model. The bar pulling the other way is real too.",
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
      experience: { label: "Less than a year in industry", evidence: "Eight months at Softtek, six at BDO. I learn fast; I am still junior." },
    },
  },
  work: {
    heading: "Work",
    remark: "Everything below goes up in public: the repository on day one, the results when they are real.",
    readCase: "Read the case study",
    projects: [
      {
        slug: "xai-financial-decision-support",
        title: "Explainable AI for financial decisions",
        status: "Final degree project · 2026 · 9.7 / 10",
        summary:
          "The explanation layer of a system that recommends buy, hold or sell: SHAP values for an MLP, cached, temporally consistent and readable by a person.",
        picture: {
          src: "/images/interior-del-palacio-de-la-bolsa-madrid.jpg",
          width: 1920,
          height: 1440,
          alt: "Quote boards and a live price screen inside the Madrid Stock Exchange",
          caption: "Palacio de la Bolsa, Madrid",
        },
      },
      {
        title: "Filings that answer back",
        status: "Planned · December 2026",
        summary:
          "Question answering over the reports Spanish listed companies file with the CNMV, with citations to the page and an evaluation suite for faithfulness and retrieval.",
        picture: {
          src: "/images/bolsa-de-madrid.jpg",
          width: 1920,
          height: 1536,
          alt: "The columned facade of the Madrid Stock Exchange behind autumn plane trees",
          caption: "Bolsa de Madrid, Plaza de la Lealtad",
        },
      },
      {
        title: "An agent that audits the ledger",
        status: "Planned · January 2027",
        summary:
          "An agent with tool use, served over MCP, that runs the tests I did by hand at BDO: reconciliations, postings on weekends and holidays, amounts that do not belong.",
        picture: {
          src: "/images/pittsboro-merchant-business-ledger.jpg",
          width: 1920,
          height: 2881,
          alt: "A handwritten merchant's ledger page from 1833 with columns of amounts",
          caption: "A merchant's ledger, 1833",
        },
      },
      {
        title: "Credit decisions in plain words",
        status: "In progress · November 2026",
        summary:
          "A credit-risk model whose SHAP values an LLM turns into a letter for the applicant, then checked against the numbers so it cannot invent a reason.",
      },
    ],
    earlier:
      "Earlier, at 42 Madrid: libft, get_next_line, ft_printf, push_swap and Born2BeRoot. C from scratch, peer-reviewed.",
    fragment: {
      title: "Application 2291 · declined",
      letter:
        "Your application was declined mainly because your current debt is high compared with your income, and two recent payments were late.",
      reasons: [
        { label: "Debt to income 46%", value: -0.21 },
        { label: "2 late payments, 12 months", value: -0.14 },
        { label: "Employed 6 years", value: 0.08 },
        { label: "No defaults", value: 0.05 },
      ],
      check: "Every reason in the letter matches a top SHAP value",
    },
  },
  experience: {
    heading: "Experience",
    groups: [
      {
        label: "Industry",
        rows: [
          { role: "Junior Software Engineer", org: "Softtek, for BBVA", focus: "Digital-asset custody backend", dates: "Jan–Aug 2026" },
          { role: "IT Audit Intern", org: "BDO Spain", focus: "Reconciliation and fraud tests", dates: "Jan–Jul 2025" },
        ],
      },
      {
        label: "Teaching",
        rows: [
          { role: "Programming Instructor", org: "Proxus Academy", focus: "C++ fundamentals, 100% pass", dates: "2023–2024" },
        ],
      },
      {
        label: "Study",
        rows: [
          { role: "AI Engineering Bootcamp", org: "Ironhack", focus: "ML, NLP, RAG, agents, MLOps", dates: "2026–2027" },
          { role: "Business and Computer Eng.", org: "Complutense, Madrid", focus: "Thesis on explainable AI, 9.7", dates: "2020–2026" },
          { role: "Software Engineering", org: "42 Madrid", focus: "C, algorithms, Unix", dates: "2024–2025" },
        ],
      },
    ],
    cv: "Download the full CV",
  },
  now: {
    heading: "Now",
    paragraphs: [
      "From November 2026 to February 2027 I am in Ironhack's AI Engineering bootcamp: 400 hours of machine learning, deep learning, NLP, RAG, agents, MLOps and cloud deployment.",
      "I am using it to ship the projects above in the open, one at a time, each with its evaluation written before its demo.",
      "What I am looking for: a junior Applied AI or ML role in a team that ships models people rely on, ideally where finance, risk or trust are part of the problem.",
    ],
    link: "How I explained an MLP's trades",
    picture: {
      src: "/images/1931-10-18-madrid-granvia.jpg",
      width: 1709,
      height: 1121,
      alt: "Avenida Conde de Peñalver, today Gran Vía, crowded with cars and trams in a 1931 photo postcard",
      caption: "Gran Vía, Madrid, 1931",
    },
  },
  contact: {
    heading: "Contact",
    place: "Madrid, Spain · CET",
    languages: "Spanish · English C1",
    greeting: "Hello",
    greetingLabel: "Write me an email",
  },
  footer: {
    invitation: ["Got a role", "in mind?"],
    action: "Write to me",
    rights: "© 2026 Enrique Travesí Ortega",
    credits: "Pictures",
  },
  caseStudy: {
    back: "All work",
    facts: [
      { label: "Context", value: "Final degree project, Universidad Complutense de Madrid" },
      { label: "My part", value: "Explainability layer, first data layer, model integration" },
      { label: "Result", value: "Graded 9.7 out of 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default en;
