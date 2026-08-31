export interface Experience {
  id: string;
  role: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "tkxel-current",
    role: "Senior Software Engineer",
    period: "Sep 2021 — Present",
    technologies: ["PHP 8.4", "Laravel 13", "MSSQL", "DynamoDB", "Redis", "AWS", "React JS", "Vue JS", "WordPress", "Node JS"],
    highlights: [
      "Diagnosed and resolved production deadlocks on Comply API via SQL Server RCSI optimization",
      "Debugged Vault-to-Comply sync pipeline — resolved crm_id/email mismatch in queue envelopes",
      "Architected dynamic KPI system for Sukuk fintech platform — 22% profit tracking improvement",
      "Led WordPress development for Artnet with custom themes and headless API solutions",
      "Resolved 200+ ReactJS issues for Cafe Zupas — 26% revenue increase",
      "Built affiliate tracking and payment reporting system for Bright Line Eating",
    ],
  },
  {
    id: "programmers-force",
    role: "Junior Software Engineer",
    period: "Sep 2020 — Jun 2021",
    technologies: ["Laravel", "PostgreSQL", "MySQL", "REST API", "MongoDB"],
    highlights: [
      "Contributed to Stafftimer time-tracking and payroll systems",
      "Built accurate reporting for working hours, holidays, and time off",
      "Developed Whistle It internal communication platform with multi-company support",
      "Created individual and group channels for organizational communication",
    ],
  },
];
