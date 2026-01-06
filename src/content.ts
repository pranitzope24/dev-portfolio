export type SkillGroup = {
  title: string
  subtitle: string
  accent: 'blue' | 'teal' | 'purple' | 'green'
  items: Array<{ name: string; usage: string }>
}

export type ExperienceLog = {
  timestamp: string
  title: string
  org: string
  location?: string
  summary: string
  highlights: string[]
  stack: string[]
  learnings: string[]
}

export type ProjectService = {
  name: string
  purpose: string
  snapshot: string
  challenges: string[]
  stack: string[]
  reliability: string[]
  href?: string
  repo?: string
}

export const profile = {
  name: 'Pranit',
  role: 'Backend Engineer (1.5 yrs) — TypeScript • Python • Agentic AI',
  positioning:
    'I build backend services that stay predictable under load, and agentic systems that stay observable under failure.',
  stats: [
    { label: 'Experience', value: '1.5 yrs' },
    { label: 'Deployed Services', value: '6+' },
    { label: 'Core Tech', value: 'TS • Python • Postgres • Agentic AI' },
  ],
  links: {
    github: 'https://github.com/pranitzope24',
    linkedin: 'https://www.linkedin.com/in/pranitzope/',
    email: 'mailto:pranit.t.zope@gmail.com',
  },
}

export const overview = {
  summary:
    'Backend-focused engineer with production exposure across API design, data modeling, and infrastructure fundamentals. I enjoy treating systems like living organisms: instrument them, constrain failure modes, and iterate based on signals.',
  bullets: [
    'TypeScript + Python backend services with clean boundaries and pragmatic reliability.',
    'Agentic AI systems: orchestration, tool safety, and state/memory management.',
    'Obsessed with traceability: logs, metrics, structured errors, and operational ergonomics.',
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Runtime',
    subtitle: 'Primary execution environments',
    accent: 'blue',
    items: [
      { name: 'TypeScript', usage: 'API services, background workers, integrations' },
      { name: 'Python', usage: 'FastAPI services, agent backends, data tooling' },
      { name: 'Node.js', usage: 'Job orchestration, webhooks, queues' },
      { name: 'FastAPI', usage: 'Typed REST APIs with auth, validation, and docs' },
    ],
  },
  {
    title: 'Data & Infrastructure',
    subtitle: 'State, storage, shipping',
    accent: 'teal',
    items: [
      { name: 'Postgres', usage: 'Relational modeling, migrations, query tuning basics' },
      { name: 'MongoDB', usage: 'Document storage for evolving schemas' },
      { name: 'Redis', usage: 'Caching, rate limiting primitives, ephemeral state' },
      { name: 'Docker', usage: 'Dev/prod parity and repeatable deployments' },
    ],
  },
  {
    title: 'AI & Agents',
    subtitle: 'Autonomous workflows, safely',
    accent: 'purple',
    items: [
      { name: 'Tool Calling', usage: 'Constrained actions with typed inputs/outputs' },
      { name: 'LangChain', usage: 'Composable chains with retrieval + tools' },
      { name: 'LangGraph', usage: 'Graph orchestration with state + retries' },
      { name: 'Vector DBs', usage: 'Semantic retrieval and grounded responses' },
    ],
  },
  {
    title: 'Engineering Practices',
    subtitle: 'How the system stays healthy',
    accent: 'green',
    items: [
      { name: 'API Design', usage: 'Versioning, contracts, idempotency patterns' },
      { name: 'Observability', usage: 'Structured logs + traces-first debugging' },
      { name: 'Security Basics', usage: 'AuthZ, secrets hygiene, input validation' },
      { name: 'Reliability', usage: 'Timeouts, retries, backoff, fallbacks' },
    ],
  },
]

export const experienceLogs: ExperienceLog[] = [
  {
    timestamp: '2024-07-01T09:10:00Z',
    title: 'Backend Engineer',
    org: 'Air India Limited',
    location: 'On-Site',
    summary:
      'Maintained and extended backend services powering internal tooling and customer-facing workflows.',
    highlights: [
      'Shipped endpoints with strict validation, predictable error models, and audit-ready logs.',
      'Improved operational clarity by standardizing request IDs and log fields.',
      'Supported incident triage with reproducible runbooks and targeted fixes.',
    ],
    stack: ['TypeScript', 'Node.js', 'Postgres', 'Redis', 'Docker'],
    learnings: [
      'Designing for debuggability is as important as correctness.',
      'Small latency regressions compound quickly in chained systems.',
    ],
  },
  {
    timestamp: '2023-10-10T09:10:00Z',
    title: 'SDE Intern - Backend, Payments',
    org: 'Nobroker Technologies Solutions Pvt Ltd',
    location: 'On-site',
    summary:
      'Built service features under supervision and learned production discipline from real incidents.',
    highlights: [
      'Implemented API changes with migration-safe rollouts.',
      'Wrote integration tests for critical flows to prevent regressions.',
    ],
    stack: ['Python', 'FastAPI', 'Postgres', 'Docker'],
    learnings: [
      'A good deploy plan beats a clever implementation.',
      'Make failure explicit: timeouts, limits, and clear status reporting.',
    ],
  },
]

export const projects: ProjectService[] = [
  {
    name: 'Event Ingestion Gateway',
    purpose:
      'Receives high-volume events, validates payloads, and writes normalized records for downstream processing.',
    snapshot:
      'client → ingress API → validation → queue → worker → Postgres + metrics',
    challenges: [
      'Idempotency and de-duplication under retries',
      'Schema evolution without breaking producers',
      'Backpressure to protect downstream systems',
    ],
    stack: ['TypeScript', 'Node.js', 'Postgres', 'Redis', 'Docker'],
    reliability: [
      'Request timeouts and bounded retries',
      'Structured logs with correlation IDs',
      'Dead-letter strategy for poison events',
    ],
  },
  {
    name: 'Autonomous Support Triage Agent',
    purpose:
      'Routes support tickets using an orchestrated agent that can read context, call tools, and propose next actions.',
    snapshot:
      'supervisor → (classify, retrieve, act) → tools → human checkpoint',
    challenges: [
      'Tool safety and least-privilege design',
      'State tracking across multi-step runs',
      'Making failures observable and recoverable',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'Vector DB'],
    reliability: [
      'Timeouts per tool and per run',
      'Retries with backoff for flaky dependencies',
      'Human-in-the-loop for high-risk actions',
    ],
  },
]

export const education = {
  degree: 'B.Tech (Aerospace Engineering) + Minor in Comp Sci',
  institution: 'Indian Institute of Technology Madras',
  years: '2020 — 2024',
  focus: ['Distributed systems basics', 'Databases', 'Operating systems', 'Networks'],
}

export const achievements = [
  { label: 'Certification', value: 'AWS / Cloud Fundamentals (example)' },
  { label: 'Recognition', value: 'On-call incident resolution contribution (example)' },
  { label: 'Open Source', value: 'Small tooling contributions (example)' },
]

export const hobbies = [
  { label: "Robotics", hint: "Physical systems & control loops" },
  { label: "Swimming", hint: "Maintains system stability" },
  { label: "Travelling", hint: "Explores new environments" },
  { label: "Music", hint: "Non-blocking background process" },
];
