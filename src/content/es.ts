import type { Content } from "./types";

const es: Content = {
  meta: {
    title: "Enrique Travesí — Ingeniero de IA aplicada y ML",
    description:
      "Ingeniero de software en Madrid que construye IA capaz de explicar sus decisiones. Ingeniería Informática y ADE, backend bancario en BBVA, TFG de IA explicable con un 9,7. Abierto a puestos junior de IA aplicada y ML.",
  },
  nav: { work: "Proyectos", experience: "Experiencia", contact: "Contacto", theme: "Cambiar tema de color", language: "View in English", home: "Inicio" },
  hero: {
    first: "Enrique",
    last: "Travesí",
    sentence:
      "Ingeniero de software que construye IA capaz de explicar sus decisiones. Informática y ADE, backend bancario en BBVA, un TFG de IA explicable con un 9,7. Abierto a puestos junior de IA aplicada y ML.",
    action: "Escríbeme",
    picture: {
      src: "/images/madrid-070.jpg",
      width: 1920,
      height: 1221,
      alt: "La Gran Vía de Madrid vista desde la calle de Alcalá, con la cúpula del Metrópolis a la izquierda, en una postal antigua",
      caption: "Gran Vía, Madrid, h. 1915",
    },
  },
  about: {
    heading: "Sobre mí",
    paragraph:
      "Estudié Ingeniería Informática y Administración de Empresas a la vez, y eso marca cómo construyo: un modelo solo sirve cuando quien actúa con él entiende por qué dijo lo que dijo. He programado backend para la custodia de activos digitales de BBVA, he hecho pruebas de auditoría orientadas a fraude en BDO y he enseñado C++ a universitarios hasta que aprobaron todos. Ahora me estoy metiendo a fondo en LLMs, recuperación y agentes.",
    facts: [
      { label: "Ubicación", value: "Madrid, España" },
      { label: "Idiomas", value: "Español, nativo · Inglés, C1" },
      { label: "Situación", value: "Disponible, desde ya" },
    ],
    records: [
      {
        label: "Herramientas",
        items: [
          { name: "Python", note: "a diario" },
          { name: "SHAP, scikit-learn", note: "TFG" },
          { name: "Pandas, NumPy, Jupyter", note: "TFG, BDO" },
          { name: "FastAPI, Flask, REST", note: "TFG, BBVA" },
          { name: "SQL, MySQL, Supabase", note: "TFG" },
          { name: "Next.js, TypeScript", note: "TFG" },
          { name: "C, C++, Java", note: "42, UCM" },
          { name: "Git, Linux", note: "a diario" },
        ],
      },
      {
        label: "Dominio",
        items: [
          { name: "Backend bancario, APX y ASO", note: "BBVA" },
          { name: "Custodia de activos digitales", note: "BBVA" },
          { name: "Conciliaciones y pruebas de fraude", note: "BDO" },
          { name: "Valoración de activos", note: "matrícula" },
          { name: "Arquitectura de computadores", note: "matrícula" },
          { name: "Enseñar a programar", note: "2 años" },
        ],
      },
    ],
  },
  explain: {
    heading: "Por qué contratarme, explicado",
    intro:
      "Mi TFG explicaba con SHAP las recomendaciones de comprar, mantener o vender de una red neuronal: cada variable empuja la predicción arriba o abajo desde una base. Aquí está la misma imagen apuntando a mí. Elige un puesto y mira qué empuja el encaje.",
    note: "Los pesos son mi autoevaluación honesta, no la salida de un modelo entrenado. La barra que tira en contra también es real.",
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
  work: {
    heading: "Proyectos",
    remark: "Todo lo que sigue se hace en abierto: el repositorio desde el primer día, los resultados cuando sean reales.",
    readCase: "Leer el caso de estudio",
    projects: [
      {
        slug: "xai-financial-decision-support",
        title: "IA explicable en finanzas",
        status: "Trabajo de fin de grado · 2026 · 9,7 / 10",
        summary:
          "La capa de explicación de un sistema que recomienda comprar, mantener o vender: valores SHAP para un MLP, cacheados, coherentes en el tiempo y legibles por una persona.",
        picture: {
          src: "/images/interior-del-palacio-de-la-bolsa-madrid.jpg",
          width: 1920,
          height: 1440,
          alt: "Paneles de cotizaciones y una pantalla de precios dentro de la Bolsa de Madrid",
          caption: "Palacio de la Bolsa, Madrid",
        },
      },
      {
        title: "Informes que responden",
        status: "Planificado · diciembre 2026",
        summary:
          "Preguntas y respuestas sobre los informes que las cotizadas españolas presentan a la CNMV, con citas a la página y una batería de evaluaciones de fidelidad y recuperación.",
        picture: {
          src: "/images/bolsa-de-madrid.jpg",
          width: 1920,
          height: 1536,
          alt: "La fachada con columnas de la Bolsa de Madrid tras plátanos de sombra en otoño",
          caption: "Bolsa de Madrid, plaza de la Lealtad",
        },
      },
      {
        title: "Un agente que audita el libro mayor",
        status: "Planificado · enero 2027",
        summary:
          "Un agente con herramientas, servido por MCP, que ejecuta las pruebas que hacía a mano en BDO: conciliaciones, asientos en fines de semana y festivos, importes que no encajan.",
        picture: {
          src: "/images/pittsboro-merchant-business-ledger.jpg",
          width: 1920,
          height: 2881,
          alt: "Una página manuscrita del libro de cuentas de un comerciante de 1833 con columnas de importes",
          caption: "Libro de cuentas de un comerciante, 1833",
        },
      },
      {
        title: "Decisiones de crédito en palabras",
        status: "En curso · noviembre 2026",
        summary:
          "Un modelo de riesgo de crédito cuyos valores SHAP un LLM convierte en una carta para el solicitante, contrastada después con los números para que no pueda inventar motivos.",
      },
    ],
    earlier:
      "Antes, en 42 Madrid: libft, get_next_line, ft_printf, push_swap y Born2BeRoot. C desde cero, con revisión entre pares.",
    fragment: {
      title: "Solicitud 2291 · denegada",
      letter:
        "Su solicitud se ha denegado principalmente porque su deuda actual es alta en relación con sus ingresos y dos pagos recientes llegaron tarde.",
      reasons: [
        { label: "Deuda sobre ingresos 46%", value: -0.21 },
        { label: "2 impagos, 12 meses", value: -0.14 },
        { label: "6 años en su empleo", value: 0.08 },
        { label: "Sin incumplimientos", value: 0.05 },
      ],
      check: "Cada motivo de la carta coincide con un valor SHAP principal",
    },
  },
  experience: {
    heading: "Experiencia",
    groups: [
      {
        label: "Empresa",
        rows: [
          { role: "Junior Software Engineer", org: "Softtek, para BBVA", focus: "Backend de custodia de activos digitales", dates: "ene–ago 2026" },
          { role: "IT Audit Intern", org: "BDO España", focus: "Conciliaciones y pruebas de fraude", dates: "ene–jul 2025" },
        ],
      },
      {
        label: "Docencia",
        rows: [
          { role: "Profesor de programación", org: "Proxus Academy", focus: "Fundamentos de C++, 100% aprobados", dates: "2023–2024" },
        ],
      },
      {
        label: "Formación",
        rows: [
          { role: "Bootcamp AI Engineering", org: "Ironhack", focus: "ML, NLP, RAG, agentes, MLOps", dates: "2026–2027" },
          { role: "Doble grado ADE e Informática", org: "Complutense de Madrid", focus: "TFG de IA explicable, 9,7", dates: "2020–2026" },
          { role: "Ingeniería de software", org: "42 Madrid", focus: "C, algoritmia, Unix", dates: "2024–2025" },
        ],
      },
    ],
    cv: "Descargar el CV completo",
  },
  now: {
    heading: "Ahora",
    paragraphs: [
      "De noviembre de 2026 a febrero de 2027 estoy en el bootcamp de AI Engineering de Ironhack: 400 horas de machine learning, deep learning, NLP, RAG, agentes, MLOps y despliegue en la nube.",
      "Lo estoy usando para sacar en abierto los proyectos de arriba, uno a uno, cada uno con su evaluación escrita antes que su demo.",
      "Lo que busco: un puesto junior de IA aplicada o ML en un equipo que entregue modelos de los que la gente depende, idealmente donde las finanzas, el riesgo o la confianza formen parte del problema.",
    ],
    link: "Cómo expliqué las operaciones de un MLP",
    picture: {
      src: "/images/1931-10-18-madrid-granvia.jpg",
      width: 1709,
      height: 1121,
      alt: "La avenida del Conde de Peñalver, hoy Gran Vía, llena de coches y tranvías en una postal fotográfica de 1931",
      caption: "Gran Vía, Madrid, 1931",
    },
  },
  contact: {
    heading: "Contacto",
    place: "Madrid, España · CET",
    languages: "Español · Inglés C1",
    greeting: "Hola",
    greetingLabel: "Escríbeme un correo",
  },
  footer: {
    invitation: ["¿Un puesto", "en mente?"],
    action: "Escríbeme",
    rights: "© 2026 Enrique Travesí Ortega",
    credits: "Imágenes",
  },
  caseStudy: {
    back: "Todos los proyectos",
    facts: [
      { label: "Contexto", value: "Trabajo de fin de grado, Universidad Complutense de Madrid" },
      { label: "Mi parte", value: "Capa de explicabilidad, primera capa de datos, integración del modelo" },
      { label: "Resultado", value: "Calificado con un 9,7 sobre 10" },
      { label: "Stack", value: "Python, SHAP, scikit-learn, FastAPI, Supabase, Next.js, TypeScript" },
    ],
  },
};

export default es;
