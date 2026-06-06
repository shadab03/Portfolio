// ─────────────────────────────────────────────────────────
//  SHADAB SYED — PORTFOLIO DATA
//  Edit this file only to update everything on the site.
// ─────────────────────────────────────────────────────────

export interface Stat       { value: string; unit: string; label: string }
export interface KPI        { value: string; label: string; sub: string }
export interface StackItem  { icon: string; category: string; name: string; tags: string[] }
export interface Experience { role: string; company: string; location: string; period: string; year: string; bullets: string[]; tags: string[] }
export interface Cert       { badge: string; code: string; name: string; issuer: string; accent: string }

export const personal = {
  name:             'Shadab Syed',
  title:            'Senior Technical Lead',
  subtitle:         'Solution Architect',
  tagline:          'I build platforms that scale to millions and teams that ship without breaking.',
  description:      '8+ years turning complex backend systems into clean, maintainable architecture — on Azure, NestJS, Next.js, and everything in between.',
  location:         'Riyadh, Saudi Arabia',
  email:            'SyedShadab03@gmail.com',
  phone:            '+966-556796242',
  linkedin:         'https://www.linkedin.com/in/iamshadab/',
  github:           'https://github.com/shadab03',
  available:        true,
  availabilityText: 'Open to Senior Technical Lead & Solution Architect roles · Riyadh, KSA',
}

export const stats: Stat[] = [
  { value: '8+',   unit: 'YRS',       label: 'Engineering Experience' },
  { value: '8+',   unit: 'ENGINEERS', label: 'Team Size Led'          },
  { value: '~40%', unit: '↓ LATENCY', label: 'Paymerang Pipeline'     },
  { value: '3',    unit: 'CERTS',     label: 'Azure + AWS'            },
]

export const aboutParagraphs: string[] = [
  "I started as a developer who wanted to understand <strong>why</strong> systems fail — and spent 8 years building the instinct to stop them before they do. Today, as <em>Engineering Team Lead at LOGISTI</em> in Riyadh, I own the full picture: architecture, delivery, team health, and production stability.",
  "My edge isn't just technical depth — it's knowing when <strong>not</strong> to use Kubernetes. When a monolith is the right call. When the team needs unblocking more than a new framework. I've led squads through 2am War Rooms, legacy migrations that couldn't touch uptime, and AI integrations that actually shipped.",
  "I believe the best architecture is the <em>simplest one that solves the business problem</em>. And the best engineering team is built on trust, not just talent.",
]

export const kpis: KPI[] = [
  { value: '8+',    label: 'Years of Production Engineering',    sub: 'fintech · logistics · e-commerce · OTT'         },
  { value: '~40%',  label: 'Latency Reduced at Paymerang',       sub: 'RabbitMQ async pipeline redesign'               },
  { value: '60%',   label: 'Fewer Recurring P1/P2 Incidents',    sub: 'via War Room protocols & RCA discipline'        },
  { value: '3×',    label: 'Legacy Systems Migrated',            sub: '.NET Framework → cloud-native, zero downtime'   },
  { value: '99.9%', label: 'Platform Uptime Target',             sub: 'LOGISTI logistics platform (current)'           },
]

export const stack: StackItem[] = [
  { icon:'⚙️',  category:'Backend',         name:'Server & APIs',        tags:['.NET Core 8','NestJS','C#','Node.js','REST','Microservices','TypeScript'] },
  { icon:'🖥️',  category:'Frontend',        name:'Web & Mobile',         tags:['Next.js','React','TypeScript','React Native','Flutter','Tailwind CSS']   },
  { icon:'☁️',  category:'Cloud',           name:'Azure Platform',       tags:['Container Apps','Service Bus','Function Apps','Front Door','ACR','AWS']  },
  { icon:'🗄️',  category:'Data',            name:'Databases & Cache',    tags:['PostgreSQL','SQL Server','Redis','Sequelize ORM','EF Core','Cosmos DB']  },
  { icon:'📨',  category:'Async',           name:'Event-Driven',         tags:['RabbitMQ','Kafka','Azure Service Bus','BullMQ']                          },
  { icon:'🤖',  category:'AI & Search',     name:'Intelligent Systems',  tags:['Azure OpenAI','Embeddings','Azure AI Search','Structured Output']        },
  { icon:'🔄',  category:'DevOps',          name:'CI/CD & Infra',        tags:['Azure DevOps','Docker','Kubernetes','Jenkins','GitLab CI']               },
  { icon:'📊',  category:'Observability',   name:'Monitoring & Alerts',  tags:['ELK Stack','Azure Monitor','Datadog','New Relic','Postman']              },
  { icon:'👥',  category:'Leadership',      name:'Team & Process',       tags:['Agile/Scrum','PR Reviews','1:1s & OKRs','Incident Mgmt','RCA']          },
]

export const experience: Experience[] = [
  {
    role: 'Engineering Team Lead', company: 'LOGISTI', location: 'Riyadh, Saudi Arabia',
    period: 'Oct 2024 – Present', year: '2024',
    bullets: [
      'Lead a cross-functional squad of <strong>8+ engineers</strong> (backend, frontend, mobile) — sprint planning, design reviews, 1:1s, performance management, and SLA compliance.',
      'Architected event-driven platform on Azure handling <strong>millions of daily transactions</strong> at 99.9%+ uptime; led full migration from .NET Framework to .NET Core 8.',
      'Established War Room protocols and RCA discipline — reduced P1/P2 incidents by <strong>60%+</strong> within 6 months.',
      'Integrated <strong>Azure OpenAI</strong> (chat, embeddings, structured JSON) into core product features with retry/fallback patterns.',
    ],
    tags: ['.NET 8','NestJS','Azure','RabbitMQ','PostgreSQL','Azure OpenAI'],
  },
  {
    role: 'Sr. Software Engineer / Team Lead', company: 'Paymerang', location: '',
    period: 'Dec 2023 – Sep 2024', year: '2023',
    bullets: [
      'Co-led a squad of <strong>5 engineers</strong> delivering secure banking transaction systems — zero missed SLA commitments.',
      'Redesigned async payment pipeline using RabbitMQ — cut latency by <strong>~40%</strong> under 5× peak load.',
      'Optimised SQL Server queries and indexing — delivered <strong>35% throughput improvement</strong> without schema changes.',
    ],
    tags: ['RabbitMQ','SQL Server','Azure DevOps','C#','CI/CD'],
  },
  {
    role: 'Software Developer', company: 'Kakatiya Solutions', location: '',
    period: 'Jan 2023 – Oct 2023', year: '2023',
    bullets: [
      'Built e-commerce microservices handling peak traffic spikes with <strong>Kafka & RabbitMQ</strong> for zero-loss order processing.',
      'Led monolith → containerised .NET Core migration on Docker — cut deployment time by <strong>50%</strong>.',
    ],
    tags: ['Kafka','RabbitMQ','.NET Core','Docker'],
  },
  {
    role: 'Sr. Software Developer', company: 'Monaqsat', location: 'MENA Region',
    period: 'May 2020 – Apr 2022', year: '2020',
    bullets: [
      'Delivered CRM and Digital Wallet REST APIs at <strong>99.8% uptime</strong> across 2 years.',
      'Led Azure cloud migration — reduced infra costs by <strong>~30%</strong>, improved availability from 98.5% → 99.8%.',
    ],
    tags: ['Azure','OAuth 2.0','REST APIs','JWT'],
  },
  {
    role: 'Software Developer', company: 'Fana International', location: '',
    period: 'Jun 2018 – Apr 2020', year: '2018',
    bullets: [
      'Modernised <strong>40,000+ lines</strong> of legacy VB.NET to .NET — reduced bug reports by <strong>45%</strong> post-migration.',
      'Built RBAC and audit logging achieving full enterprise security compliance.',
    ],
    tags: ['.NET','ERP','RBAC','VB.NET migration'],
  },
]

export const certifications: Cert[] = [
  { badge:'🏅', code:'AZ-305', name:'Microsoft Certified: Azure Solutions Architect Expert', issuer:'Microsoft',          accent:'#0078d4' },
  { badge:'🏅', code:'AZ-204', name:'Microsoft Certified: Azure Developer Associate',        issuer:'Microsoft',          accent:'#0078d4' },
  { badge:'🏅', code:'AWS CCP',name:'AWS Certified Cloud Practitioner',                      issuer:'Amazon Web Services', accent:'#ff9900' },
]

export const ticker: string[] = [
  'Engineering Team Lead','Solution Architect','Azure AZ-305','NestJS & Next.js',
  'Microservices','PostgreSQL','Azure OpenAI','Riyadh KSA','CI/CD & DevOps','Event-Driven Systems',
]
