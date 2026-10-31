import type { Content } from "./types";

const es: Content = {
  meta: {
    title: "Enrique Travesí — Ingeniero de IA aplicada y ML",
    description:
      "Ingeniero de software con cabeza de negocio. Backend bancario en BBVA, TFG de IA explicable con un 9,7 y ahora a fondo con LLMs, RAG y agentes. Abierto a puestos junior de IA aplicada y ML.",
  },
  nav: {
    about: "Sobre mí",
    work: "Proyectos",
    journey: "Trayectoria",
    contact: "Contacto",
    cta: "Hablemos",
    theme: "Cambiar tema de color",
    language: "View in English",
    menu: "Abrir menú",
    close: "Cerrar menú",
  },
  hero: {
    badge: "Disponible · Junior IA aplicada / ML · Madrid",
    titleStart: "Construyo IA que",
    rotating: ["explica", "justifica", "defiende"],
    titleEnd: "sus decisiones.",
    subtitle:
      "Ingeniero de software con cabeza de negocio. He construido backend para BBVA, he hecho que una red neuronal explique sus operaciones a personas y ahora voy a por todas con LLMs, RAG y agentes.",
    ctaWork: "Ver proyectos",
    ctaEmail: "Escríbeme",
    ctaCv: "Descargar CV",
    photoAlt: "Retrato de Enrique Travesí, de brazos cruzados y con camisa blanca",
    chips: ["TFG de XAI · 9,7/10", "Backend en BBVA"],
    stats: [
      { value: 9.7, decimals: 1, suffix: "/10", label: "Nota del TFG de IA explicable" },
      { value: 100, suffix: "%", label: "Aprobados entre mis alumnos" },
      { value: 2, label: "Grados a la vez: Informática + ADE" },
      { value: 400, suffix: "+", label: "Horas de AI Engineering, en curso" },
    ],
  },
  credibility: {
    label: "Donde he construido, auditado y aprendido",
    items: ["BBVA · vía Softtek", "BDO", "Universidad Complutense de Madrid", "42 Madrid", "Ironhack", "Proxus Academy"],
  },
  strengths: {
    kicker: "Qué aporto",
    title: "Código, modelos y visión de negocio en una sola persona.",
    intro: "La mayoría de juniors trae una de las tres. Yo llevo seis años entrenando las tres.",
    items: [
      {
        icon: "sparkles",
        title: "IA explicable",
        body: "La precisión no basta cuando hay dinero en juego. Mi TFG hizo que una red neuronal justificara con SHAP cada recomendación de comprar, mantener o vender.",
        proof: "TFG calificado con un 9,7",
      },
      {
        icon: "server",
        title: "Backend en producción",
        body: "Desarrollé funcionalidades para la plataforma de custodia de activos digitales de BBVA y las llevé de desarrollo a integración y a producción.",
        proof: "Banca · APX · APIs REST",
      },
      {
        icon: "briefcase",
        title: "Visión de negocio",
        body: "Un grado completo de ADE a la vez que Ingeniería Informática. Hablo con negocio en su idioma, no en tensores.",
        proof: "Doble grado · UCM",
      },
      {
        icon: "messages",
        title: "Explico lo difícil",
        body: "Dos años enseñando C++ a universitarios: punteros, orientación a objetos, estructuras de datos.",
        proof: "Aprobaron 9 de 9 alumnos",
      },
      {
        icon: "bot",
        title: "LLMs, RAG y agentes",
        body: "Metido en un programa de AI Engineering de más de 400 horas, publicando en abierto proyectos de recuperación y agentes, con evaluaciones desde el primer día.",
        proof: "Ironhack · nov 2026 – feb 2027",
      },
      {
        icon: "shield",
        title: "Olfato para el fraude y el riesgo",
        body: "En BDO hice pruebas de fraude automáticas y manuales sobre datos contables reales: conciliaciones, anomalías, asientos en fines de semana y festivos.",
        proof: "Auditoría IT · BDO",
      },
    ],
  },
  featured: {
    kicker: "Proyecto destacado",
    title: "Si el modelo dice vende, tiene que decir por qué.",
    slug: "xai-financial-decision-support",
    name: "IA explicable para decisiones financieras",
    tagline: "Una red neuronal recomienda comprar, mantener o vender. La capa de explicabilidad que construí hace que cada decisión se entienda.",
    highlights: [
      "Desarrollé MLPShapExplainer: explicaciones SHAP locales para cada predicción de un clasificador MLP",
      "Datos de referencia coherentes en el tiempo, para que una explicación nunca mire al futuro",
      "Caché del explicador y contribuciones ordenadas y legibles, servidas con FastAPI a un frontend en Next.js",
      "Diseñé la primera capa de datos en Supabase y participé en la arquitectura del sistema",
    ],
    stack: ["Python", "SHAP", "scikit-learn", "FastAPI", "Supabase", "Next.js", "TypeScript"],
    grade: "9,7",
    gradeLabel: "Nota final, sobre 10",
    cta: "Leer el caso de estudio",
    mockup: {
      title: "Vista de explicación",
      label: "Recomendación",
      recommendation: "VENDER",
      rows: [
        { label: "Momento a 20 días", value: 0.18 },
        { label: "RSI, 14 días", value: 0.12 },
        { label: "Volatilidad, 10 días", value: -0.09 },
        { label: "Volumen vs media 30 días", value: -0.05 },
        { label: "Rentabilidad del sector", value: 0.04 },
      ],
      note: "Valores ilustrativos",
    },
  },
  building: {
    kicker: "En construcción",
    title: "Publicando en abierto, proyecto a proyecto.",
    intro: "Cada uno empieza con su batería de evaluaciones, no con una demo. Los repositorios son públicos desde el primer día.",
    items: [
      {
        status: "now",
        statusLabel: "En curso",
        date: "nov 2026",
        name: "Crédito, explicado",
        pitch:
          "Un modelo de riesgo de crédito cuyos valores SHAP convierte un LLM en una carta clara para el solicitante, contrastada después con los números para que no pueda inventar motivos.",
        stack: ["scikit-learn", "SHAP", "LLM", "FastAPI"],
      },
      {
        status: "next",
        statusLabel: "Próximamente",
        date: "dic 2026",
        name: "Copiloto de informes",
        pitch:
          "Pregunta lo que quieras sobre los informes que las cotizadas españolas presentan a la CNMV. Cada respuesta cita su página y una batería de evaluaciones mide fidelidad y recuperación.",
        stack: ["RAG", "Embeddings", "Vector DB", "Evals"],
      },
      {
        status: "next",
        statusLabel: "Próximamente",
        date: "ene 2027",
        name: "Agente auditor",
        pitch:
          "Un auditor con IA servido por MCP que ejecuta las pruebas de fraude que hacía a mano en BDO: conciliaciones, asientos en fin de semana, valores atípicos.",
        stack: ["Agentes", "MCP", "Tool use", "Python"],
      },
    ],
  },
  explain: {
    kicker: "Interactivo",
    heading: "¿Por qué contratarme? Que lo explique el modelo.",
    intro:
      "La misma cascada SHAP de mi TFG, apuntando a mí. Elige un puesto y mira qué partes de mi perfil suben el encaje y cuáles lo bajan.",
    note: "Los pesos son mi autoevaluación honesta, no un modelo entrenado. La barra en contra también es real.",
    roleLabel: "Puesto",
    baseLabel: "Candidato junior medio",
    outputLabel: "Encaje para el puesto",
    roles: [
      { id: "applied-ai", label: "Ingeniero de IA aplicada" },
      { id: "ml", label: "Ingeniero de ML" },
      { id: "finance", label: "IA en finanzas" },
      { id: "solutions", label: "Ingeniero de soluciones" },
    ],
    features: {
      xai: { label: "TFG de IA explicable", evidence: "SHAP sobre un MLP de comprar, mantener, vender. Nota: 9,7 sobre 10." },
      python: { label: "Python y el stack de ML", evidence: "scikit-learn, SHAP, Pandas y FastAPI en un sistema que funciona." },
      backend: { label: "Backend en producción, BBVA", evidence: "Transacciones APX, APIs REST, despliegues hasta producción." },
      llm: { label: "LLMs, RAG y agentes", evidence: "AI Engineering en Ironhack, nov 2026 a feb 2027. En curso." },
      business: { label: "Administración de empresas", evidence: "Un segundo grado completo: finanzas, valoración, cómo se decide." },
      teaching: { label: "Explicar cosas difíciles", evidence: "Enseñé C++ a 9 universitarios. Aprobaron los 9." },
      audit: { label: "Pruebas de fraude y anomalías", evidence: "Conciliaciones y asientos en fin de semana en BDO." },
      experience: { label: "Menos de un año en empresa", evidence: "Ocho meses en Softtek y seis en BDO. Aprendo rápido; sigo siendo junior." },
    },
  },
  journey: {
    kicker: "Trayectoria",
    title: "Dónde he estado construyendo.",
    items: [
      {
        kind: "study",
        period: "nov 2026 – feb 2027",
        role: "Bootcamp de AI Engineering",
        org: "Ironhack",
        tag: "Ahora",
        points: [
          "Más de 400 horas de ML aplicado, deep learning, NLP, apps con LLMs, RAG, agentes, MLOps y despliegue en la nube",
          "Rumbo a un proyecto final de principio a fin",
        ],
      },
      {
        kind: "work",
        period: "ene – ago 2026",
        role: "Junior Software Engineer",
        org: "Softtek · cuenta BBVA",
        points: [
          "Desarrollé backend para la custodia de activos digitales de BBVA: transacciones APX, librerías y componentes ASO para wallets, cuentas, direcciones y cuentas VASP",
          "Depuré servicios interdependientes con análisis de trazas en entornos DEV e integración",
          "Impulsé la validación por los entornos de release hasta llegar a producción",
        ],
      },
      {
        kind: "study",
        period: "2020 – 2026",
        role: "Doble grado: Ingeniería Informática + ADE",
        org: "Universidad Complutense de Madrid",
        points: [
          "TFG de IA explicable para decisiones financieras, calificado con un 9,7",
          "Matrículas de honor en Fundamentos de la Programación II, Arquitectura de Computadores y Valoración de Activos",
        ],
      },
      {
        kind: "work",
        period: "ene – jul 2025",
        role: "IT Audit Intern",
        org: "BDO España",
        points: [
          "Concilié balances y balances de sumas y saldos de ejercicios consecutivos",
          "Hice pruebas de fraude automáticas y manuales: consistencia de transacciones, anomalías, asientos en fines de semana y festivos",
        ],
      },
      {
        kind: "study",
        period: "ago 2024 – ene 2025",
        role: "Programa de ingeniería de software",
        org: "42 Madrid · Fundación Telefónica",
        points: ["C y Unix por proyectos y entre pares: libft, ft_printf, get_next_line, push_swap, Born2BeRoot"],
      },
      {
        kind: "teaching",
        period: "2023 – 2024",
        role: "Profesor de programación",
        org: "Proxus Academy",
        points: ["Enseñé fundamentos de C++ (orientación a objetos, punteros, estructuras de datos) a universitarios", "100% de aprobados entre 9 alumnos"],
      },
    ],
  },
  stack: {
    kicker: "Herramientas",
    title: "Con qué trabajo.",
    groups: [
      { name: "IA y datos", items: ["Python", "SHAP", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "IA explicable"] },
      { name: "Subiendo de nivel", items: ["LLMs", "RAG", "Agentes de IA", "Deep learning", "NLP", "MLOps"] },
      { name: "Backend", items: ["FastAPI", "Flask", "APIs REST", "SQL", "MySQL", "Supabase", "APX", "ASO"] },
      { name: "Lenguajes y herramientas", items: ["C", "C++", "Java", "TypeScript", "Next.js", "Git", "Linux", "Testing"] },
    ],
  },
  contact: {
    kicker: "Contacto",
    title: "Construyamos IA en la que se pueda confiar.",
    body: "Busco mi próximo puesto junior de IA aplicada, ML o AI engineering. Si tu equipo entrega modelos de los que la gente depende, me encantaría hablar.",
    copy: "Copiar email",
    copied: "¡Copiado!",
    location: "Madrid, España",
    languages: "Español · Inglés (C1)",
  },
  footer: { line: "Diseñado y construido con Next.js.", rights: "© 2026 Enrique Travesí Ortega" },
  caseStudy: {
    back: "Volver a proyectos",
    cta: "¿Te encaja? Hablemos",
    facts: [
      { label: "Contexto", value: "Trabajo de fin de grado, Universidad Complutense de Madrid" },
      { label: "Mi parte", value: "Capa de explicabilidad, primera capa de datos, integración del modelo" },
      { label: "Resultado", value: "Calificado con un 9,7 sobre 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default es;
