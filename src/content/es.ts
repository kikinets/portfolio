import type { Content } from "./types";

const es: Content = {
  meta: {
    title: "Enrique Travesí Ortega — Ingeniero de IA aplicada y ML",
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
      "Ingeniero de software con cabeza de negocio. He desarrollado backend en producción para BBVA, he construido una red neuronal que explica sus propias operaciones y ahora voy a por todas con LLMs, RAG y agentes.",
    ctaWork: "Ver proyectos",
    ctaEmail: "Escríbeme",
    ctaCv: "Descargar CV",
    photoAlt: "Retrato de Enrique Travesí Ortega, de brazos cruzados y con camisa blanca",
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
        title: "IA explicable",
        body: "La precisión no basta cuando alguien tiene que actuar según una predicción. Construyo modelos que dicen por qué, con explicaciones que la gente lee de verdad.",
        proof: "TFG calificado con un 9,7",
      },
      {
        title: "De principio a fin",
        body: "Capa de datos, modelo, API e interfaz: he llevado un sistema de ML desde los datos en bruto hasta un producto que funciona, no solo un notebook.",
        proof: "Supabase · scikit-learn · FastAPI · Next.js",
      },
      {
        title: "Ingeniería en producción",
        body: "Desarrollé backend a escala empresarial con Softtek para BBVA: revisiones de código, entornos de integración y despliegues hasta producción.",
        proof: "8 meses en código de producción",
      },
      {
        title: "Visión de negocio",
        body: "Un grado completo de ADE a la vez que Ingeniería Informática. Hablo con negocio en su idioma, no en tensores.",
        proof: "Doble grado · UCM",
      },
      {
        title: "LLMs, RAG y agentes",
        body: "Metido en un programa de AI Engineering de más de 400 horas, publicando en abierto proyectos de recuperación y agentes, con evaluaciones desde el primer día.",
        proof: "Ironhack · nov 2026 – feb 2027",
      },
      {
        title: "Explico lo difícil",
        body: "Dos años enseñando C++ a universitarios: punteros, orientación a objetos, estructuras de datos. Aprobaron todos.",
        proof: "Aprobaron 9 de 9 alumnos",
      },
    ],
  },
  education: {
    kicker: "Formación",
    title: "Dos grados a la vez: ingeniería y empresa.",
    intro: "Seis años estudiando Ingeniería Informática y Administración y Dirección de Empresas en paralelo en la Universidad Complutense de Madrid. Por eso puedo construir el modelo y también explicar qué significa para el negocio.",
    degrees: [
      { name: "Ingeniería Informática", focus: "Programación, algoritmia y estructuras de datos, sistemas de computación, ingeniería del software" },
      { name: "Administración y Dirección de Empresas", focus: "Finanzas, contabilidad, análisis de inversiones, dirección y estrategia" },
    ],
    facts: [
      { value: "2020 – 2026", label: "Universidad Complutense de Madrid" },
      { value: "9,7/10", label: "TFG de IA explicable" },
    ],
    honoursLabel: "Matrículas de Honor",
    honoursNote: "La máxima distinción universitaria en España, limitada al 5 % de cada grupo.",
    honours: [
      { subject: "Fundamentos de la Programación II", area: "Ingeniería Informática" },
      { subject: "Estructura de Computadores", area: "Ingeniería Informática" },
      { subject: "Valoración de Activos y Análisis de Inversiones", area: "ADE" },
    ],
  },
  featured: {
    kicker: "Proyecto destacado",
    title: "Si el modelo dice vende, tiene que decir por qué.",
    slug: "xai-financial-decision-support",
    name: "IA explicable para decisiones financieras",
    tagline: "Un sistema completo en el que una red neuronal recomienda comprar, mantener o vender, y explica cada decisión en términos claros.",
    highlights: [
      "Construí el pipeline completo: capa de datos en Supabase, ingeniería de variables, entrenamiento e integración del clasificador MLP",
      "Lideré la capa de explicabilidad: explicaciones SHAP locales con referencias coherentes en el tiempo, para que ninguna explicación mire al futuro",
      "Serví predicciones y explicaciones juntas desde una API en FastAPI con caché del explicador",
      "Desarrollé una interfaz en Next.js que muestra cada recomendación junto a las variables que la provocaron",
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
        name: "El porqué, en palabras",
        pitch:
          "Convierte los valores SHAP de cualquier modelo tabular en una explicación clara escrita por un LLM y contrasta cada afirmación con los números para que no pueda inventar motivos.",
        stack: ["SHAP", "LLM", "Evals", "FastAPI"],
      },
      {
        status: "next",
        statusLabel: "Próximamente",
        date: "dic 2026",
        name: "Copiloto de papers",
        pitch:
          "Pregunta lo que quieras sobre papers recientes de IA. Cada respuesta cita el pasaje exacto y una batería de evaluaciones mide fidelidad y recuperación.",
        stack: ["RAG", "Embeddings", "Vector DB", "Evals"],
      },
      {
        status: "next",
        statusLabel: "Próximamente",
        date: "ene 2027",
        name: "Agente de candidaturas",
        pitch:
          "Un agente que lee una oferta, la compara con un CV y redacta una candidatura a medida, usando herramientas y pidiendo confirmación a una persona antes de enviar nada.",
        stack: ["Agentes", "Tool use", "MCP", "Python"],
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
      { id: "product", label: "Ingeniero de producto IA" },
      { id: "solutions", label: "Ingeniero de soluciones" },
    ],
    features: {
      xai: { label: "TFG de IA explicable", evidence: "SHAP sobre un MLP de comprar, mantener, vender. Nota: 9,7 sobre 10." },
      python: { label: "Python y el stack de ML", evidence: "scikit-learn, SHAP, Pandas y FastAPI en un sistema que funciona." },
      backend: { label: "Backend en producción, BBVA", evidence: "APIs REST, entornos de integración, despliegues hasta producción." },
      llm: { label: "LLMs, RAG y agentes", evidence: "AI Engineering en Ironhack, nov 2026 a feb 2027. En curso." },
      business: { label: "Administración de empresas", evidence: "Un segundo grado completo: finanzas, valoración, cómo se decide." },
      teaching: { label: "Explicar cosas difíciles", evidence: "Enseñé C++ a 9 universitarios. Aprobaron los 9." },
      fullstack: { label: "Un sistema de principio a fin", evidence: "Capa de datos, modelo, FastAPI y Next.js en el TFG." },
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
          "Desarrollé funcionalidades backend para la plataforma de custodia de activos digitales de BBVA: transacciones, librerías compartidas y componentes de servicio",
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
          "Matrículas de Honor en Fundamentos de la Programación II, Estructura de Computadores y Valoración de Activos y Análisis de Inversiones",
        ],
      },
      {
        kind: "work",
        period: "ene – jul 2025",
        role: "IT Audit Intern",
        org: "BDO España",
        points: [
          "Procesé y concilié datos contables, incluidos balances y balances de sumas y saldos de ejercicios consecutivos",
          "Realicé pruebas de auditoría automáticas y manuales orientadas a fraude: conciliaciones, consistencia de transacciones y detección de anomalías en asientos de fines de semana y festivos",
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
      { name: "Backend", items: ["FastAPI", "Flask", "APIs REST", "SQL", "MySQL", "Supabase", "Depuración"] },
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
      { label: "Mi papel", value: "Trabajé en datos, modelo, API e interfaz; lideré la explicabilidad" },
      { label: "Resultado", value: "Calificado con un 9,7 sobre 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default es;
