export interface Experience {
  id: string;
  role: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "sukuk-senior",
    role: "Senior Software Engineer",
    period: "Dec 2024 — Present",
    technologies: ["Laravel", "jQuery", "MySQL", "CI/CD", "BitBucket"],
    highlights: [
      "Architected dynamic KPI creation system, improving profit tracking by 22%",
      "Developed flexible repayment module, increasing platform adoption by 15%",
      "Created secondary market for early investor exits",
      "Engineered investment quota management for regulatory compliance",
      "Built real-time analytics dashboard and secure banking API integrations",
    ],
  },
  {
    id: "tkxel",
    role: "Senior Software Engineer",
    period: "Sep 2021 — Nov 2024",
    technologies: ["Laravel", "Vue JS", "React JS", "PostgreSQL", "MySQL", "WordPress", "jQuery", "Node JS"],
    highlights: [
      "Led WordPress development for Artnet with custom themes, plugins, and headless API solutions",
      "Built affiliate tracking and payment reporting system for Bright Line Eating",
      "Resolved 200+ ReactJS issues for Cafe Zupas, driving 26% revenue increase",
      "Architected microservices with Laravel and Node.js for restaurant management",
      "Integrated Google Maps API with React for data visualization dashboards",
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
