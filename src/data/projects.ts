export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  technologies: string[];
  liveUrl: string;
  thumbnail: string;
  featured?: boolean;
  role: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "comply-api",
    title: "Comply API — B2B Tax Compliance SaaS",
    description:
      "Production deadlocks were failing transactions under load in a multi-tenant architecture. Diagnosed root cause via SQL Server deadlock graphs and implemented RCSI isolation, eliminating lock contention and stabilizing the sync pipeline.",
    problem:
      "A multi-tenant tax compliance platform with per-client MSSQL schemas was hitting production deadlocks under concurrent load, causing failed transactions and data sync failures between the Vault and Comply systems. Queue envelopes carried mismatched crm_id/email pairs, breaking the sync pipeline silently.",
    approach:
      "Performed SQL Server deadlock graph analysis to identify the contending queries, then implemented Read Committed Snapshot Isolation (RCSI) to eliminate row-level lock contention without sacrificing consistency. For the sync pipeline, debugged the Vault-to-Comply queue envelope structure and resolved the crm_id/email mismatch that was causing records to silently fail reconciliation.",
    result:
      "Deadlock incidents dropped to near-zero under production load. The Vault-to-Comply sync pipeline achieved reliable end-to-end reconciliation, eliminating the silent data loss that had been affecting client onboarding flows.",
    technologies: ["PHP 8.4", "Laravel 13", "MSSQL", "DynamoDB", "Redis", "AWS SQS", "AWS S3", "AWS ECS"],
    liveUrl: "https://www.taxback.com/en/",
    thumbnail: "/images/projects/taxback/1.png",
    featured: true,
    role: "Senior Software Engineer",
    highlights: [
      "Diagnosed production deadlocks via SQL Server deadlock graph analysis",
      "Implemented RCSI (Read Committed Snapshot Isolation) to eliminate lock contention",
      "Debugged Vault-to-Comply sync pipeline — resolved crm_id/email mismatch in queue envelopes",
      "Reduced deadlock incidents to near-zero under concurrent production load",
      "Worked across multi-tenant per-client schema architecture on MSSQL",
      "Built and maintained services on AWS (SQS, S3, ECS) with Redis caching and DynamoDB",
    ],
  },
  {
    id: "sukuk",
    title: "Sukuk — Fintech Investment Platform",
    description:
      "Investors had no way to track performance or exit positions early. Built a dynamic KPI system and secondary market on Laravel, improving profit tracking by 22% and boosting platform adoption by 15%.",
    problem:
      "The platform lacked investor-facing analytics — fundseekers could create opportunities, but investors had no way to measure performance, manage repayments, or exit positions before maturity. Regulatory compliance for individual investment quotas was also handled manually.",
    approach:
      "Architected a dynamic KPI creation system so investors could define custom performance metrics per opportunity. Built a flexible installment-based repayment module and a secondary market allowing early position exits. Chose a service-oriented approach within Laravel to keep each domain (KPIs, repayments, quotas, banking) independently testable and deployable.",
    result:
      "Profit tracking improved by 22% through the KPI system. The repayment module increased platform adoption by 15%. Secondary market functionality and automated quota enforcement brought the platform into full regulatory compliance.",
    technologies: ["Laravel", "jQuery", "MySQL", "CI/CD", "BitBucket"],
    liveUrl: "#",
    thumbnail: "/images/projects/sukuk/1.png",
    role: "Senior Software Engineer",
    highlights: [
      "Architected dynamic KPI creation system — 22% improvement in profit tracking",
      "Developed flexible repayment module — 15% increase in platform adoption",
      "Created secondary market for early investor exits before maturity",
      "Engineered investment quota management for regulatory compliance",
      "Built real-time analytics dashboard for performance metrics",
      "Integrated secure banking APIs for automated fund transfers",
    ],
  },
  {
    id: "artnet",
    title: "Artnet — Art World Online",
    description:
      "A legacy WordPress codebase couldn't scale to serve millions of art market users. Led the rebuild with custom themes, headless REST APIs, and ad system integration, significantly improving page performance and SEO.",
    problem:
      "Artnet's WordPress site served millions of users across auctions, galleries, news, and price databases, but the existing theme and plugin architecture was rigid, slow, and couldn't support the content team's growing needs for custom art-related taxonomies and headless API consumers.",
    approach:
      "Led a full WordPress rebuild — developed custom themes and plugins with advanced PHP/MySQL, created custom post types and taxonomies specifically for art content, and implemented headless WordPress with RESTful API integration so frontends could consume content independently. Integrated Elementor and Gutenberg for content team flexibility.",
    result:
      "Delivered a scalable, high-performance WordPress architecture serving the global art market. SEO best practices and performance optimizations improved search ranking. Ad management integration provided a new revenue stream.",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Elementor", "Gutenberg", "Git", "CloudFlare"],
    liveUrl: "https://www.news.artnet.com",
    thumbnail: "/images/projects/artnet/1.png",
    role: "Senior Software Engineer",
    highlights: [
      "Led WordPress development team across a 5+ year engagement",
      "Developed custom themes and plugins using advanced PHP and MySQL",
      "Created custom post types and taxonomies for art-related content",
      "Built headless WordPress solutions with RESTful API integration",
      "Optimized performance and implemented SEO best practices",
      "Integrated and managed ad management systems for revenue growth",
    ],
  },
  {
    id: "brightline-eating",
    title: "Bright Line Eating",
    description:
      "The platform had no visibility into which affiliates drove conversions. Built custom WordPress plugins and REST endpoints for referrer tracking, enabling data-driven affiliate payment reporting.",
    problem:
      "Bright Line Eating's affiliate program had no reliable way to track which referrers drove actual conversions. Payment reports were generated manually, and the WordPress architecture didn't support the custom data flows needed for referrer analysis.",
    approach:
      "Implemented custom WordPress hooks and filters to intercept and tag affiliate referrer data at the point of entry. Built RESTful API endpoints to analyze referrer information and designed custom plugins to track conversion rates per affiliate link. Used MySQL queries to generate comprehensive payment reports automatically.",
    result:
      "Delivered end-to-end affiliate tracking with automated payment reporting. The platform gained full visibility into conversion attribution, replacing a manual process with real-time data analysis.",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Elementor", "Gutenberg", "Git", "CloudFlare"],
    liveUrl: "https://www.brightlineeating.com/",
    thumbnail: "/images/projects/brightline/1.png",
    role: "Senior Software Engineer",
    highlights: [
      "Developed custom WordPress theme with Elementor page builder",
      "Implemented custom hooks and filters for affiliate tracking",
      "Built RESTful API endpoints to analyze referrer data",
      "Designed plugins to track user conversion rates through affiliate links",
      "Developed data analysis algorithms for automated affiliate payment reports",
      "Optimized performance and implemented SEO best practices",
    ],
  },
  {
    id: "cafe-zupas",
    title: "Cafe Zupas — Restaurant Food Chain",
    description:
      "A legacy React app had 200+ unresolved issues blocking revenue. Resolved them all and redesigned the backend with Laravel/Node.js microservices — driving a 26% revenue increase and 29% API performance boost.",
    problem:
      "Cafe Zupas' major React application had accumulated 200+ unresolved issues, degrading user experience and directly impacting revenue. The monolithic backend couldn't scale to handle kitchen operations, POS, and delivery across a growing restaurant chain.",
    approach:
      "Triaged and resolved all 200+ React issues systematically. Redesigned the backend as Laravel and Node.js microservices for independent scaling of kitchen, POS, and delivery domains. Built a Google Maps API integration with React for a data visualization dashboard to inform strategic location planning.",
    result:
      "Resolving the React backlog drove a 26% revenue increase. The new RESTful API architecture boosted client revenue by an additional 29%. The location planning dashboard directly informed decisions on new restaurant openings.",
    technologies: ["React JS", "PHP", "MySQL", "PgSQL", "Git", "Docker", "Laravel", "Node.js"],
    liveUrl: "https://cafezupas.com/",
    thumbnail: "/images/projects/cafezupas/1.png",
    role: "Full Stack Engineer",
    highlights: [
      "Resolved 200+ ReactJS issues — 26% revenue increase",
      "Redesigned backend with Laravel and Node.js microservices",
      "Developed RESTful APIs — 29% client revenue boost",
      "Architected microservices for kitchen, POS, and delivery domains",
      "Led development of integrated restaurant management system",
      "Created Google Maps dashboard for strategic location planning",
    ],
  },
  {
    id: "millergroup",
    title: "Millergroup (Swedish Match)",
    description:
      "Needed full-stack feature delivery across a React/Laravel stack for a global tobacco brand. Handled both ends and integrated new APIs to extend platform capabilities.",
    problem:
      "Swedish Match needed new features delivered end-to-end across their digital platform, but the existing team lacked capacity to handle both the React frontend and Laravel backend simultaneously.",
    approach:
      "Took ownership of both the React JS frontend and Laravel backend, integrating new APIs and delivering features across the full stack. Ensured consistent data flow between frontend components and backend services.",
    result:
      "Delivered multiple features end-to-end on schedule, extending the platform's capabilities for a global brand without requiring additional hires.",
    technologies: ["React JS", "Laravel", "REST APIs"],
    liveUrl: "https://www.swedishmatch.com/",
    thumbnail: "/images/projects/millergroup/1.png",
    role: "Full Stack Engineer",
    highlights: [
      "Handled both frontend (React JS) and backend (Laravel)",
      "Integrated new APIs across the platform",
      "Delivered end-to-end features for a global brand",
    ],
  },
  {
    id: "stafftimer",
    title: "Stafftimer — Employee Time Tracking",
    description:
      "Payroll calculations were error-prone and manual. Built automated time-tracking reports that accounted for holidays and time off, enabling accurate salary generation from hourly rates.",
    problem:
      "The company needed a reliable time-tracking system, but payroll calculations were done manually — prone to errors when accounting for holidays, time off, and variable payment structures across employees.",
    approach:
      "Built automated reporting that calculated total working hours per employee while properly deducting holidays and time off. Developed data analysis algorithms to generate precise salary figures based on hourly rates and custom payment structures.",
    result:
      "Eliminated manual payroll calculation errors. Managers gained accurate, exportable reports for every pay period without manual intervention.",
    technologies: ["Laravel", "PostgreSQL", "MySQL", "REST API"],
    liveUrl: "https://stafftimerapp.com/",
    thumbnail: "/images/projects/stafftimer/1.png",
    role: "Junior Software Engineer",
    highlights: [
      "Contributed to time tracking and payroll system development",
      "Built accurate reports for working hours, holidays, and time off",
      "Developed data analysis algorithms for precise salary calculations",
    ],
  },
  {
    id: "whistleit",
    title: "Whistle It — Internal Communication",
    description:
      "Teams across multiple companies had no unified communication tool. Built the backend for a multi-company messaging platform with individual and group channels.",
    problem:
      "The organization needed an internal communication tool, but off-the-shelf solutions didn't support the multi-company structure where employers managed multiple entities and employees needed to communicate across organizational boundaries.",
    approach:
      "Designed the backend architecture to support multi-company tenancy from day one. Built individual and group channel systems so users could communicate within and across company boundaries, with proper access controls per employer.",
    result:
      "Delivered a working internal communication platform adopted across the organization. Multi-company support eliminated the need for separate tools per entity.",
    technologies: ["Laravel", "MongoDB", "REST API"],
    liveUrl: "https://whistleit.io/",
    thumbnail: "/images/projects/whistleit/1.png",
    role: "Backend Engineer",
    highlights: [
      "Built backend platform for organizational communication",
      "Added multi-company feature for employers",
      "Created channels for individual users and groups",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
