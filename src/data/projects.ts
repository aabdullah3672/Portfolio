export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  thumbnail: string;
  featured?: boolean;
  role: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "sukuk",
    title: "Sukuk — Fintech Investment Platform",
    description:
      "A fintech platform connecting fundseekers with investors. Features include dynamic KPI tracking, flexible repayment modules, a secondary market for early exits, and real-time analytics dashboards.",
    longDescription:
      "Sukuk is a Shariah-compliant fintech investment platform that bridges fundseekers with investors through a transparent, regulated marketplace. The platform enables fundseekers to create investment opportunities while investors can participate, track returns, and manage their portfolios in real time. With features like dynamic KPI creation, flexible installment-based repayments, a secondary market for early position exits, and investment quota management for regulatory compliance, Sukuk delivers a comprehensive fintech experience. The platform also integrates with banking partners for automated fund transfers and payment reconciliation.",
    technologies: ["Laravel", "jQuery", "MySQL", "CI/CD", "BitBucket"],
    liveUrl: "#",
    thumbnail: "/images/projects/sukuk/1.png",
    featured: true,
    role: "Senior Software Engineer",
    highlights: [
      "Architected dynamic KPI creation system, improving profit tracking by 22%",
      "Developed flexible repayment module, increasing platform adoption by 15%",
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
      "The premier online destination for the art world — featuring artworks for sale, online auctions, top galleries, leading artists, and breaking art market news.",
    longDescription:
      "Artnet is the definitive online resource for the international art market. The platform serves as a hub for artworks for sale, online auctions, top galleries, leading artists, and breaking art market news from around the globe. As part of the WordPress development team, I built custom themes and plugins, created custom post types and taxonomies for art-related content management, implemented headless WordPress solutions with RESTful API integration, and managed ad systems across the platform. The site serves millions of art enthusiasts, collectors, and professionals worldwide.",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Elementor", "Gutenberg", "Git", "CloudFlare"],
    liveUrl: "https://www.news.artnet.com",
    thumbnail: "/images/projects/artnet/1.png",
    role: "Senior Software Engineer",
    highlights: [
      "Led WordPress development team with 5+ years of professional experience",
      "Developed custom themes and plugins using advanced PHP and MySQL",
      "Created custom post types and taxonomies for art-related content",
      "Implemented WordPress hooks and integrated Elementor & Gutenberg",
      "Built headless WordPress solutions with RESTful API integration",
      "Optimized performance and implemented SEO best practices",
      "Integrated and managed ad management systems",
    ],
  },
  {
    id: "brightline-eating",
    title: "Bright Line Eating",
    description:
      "A health and wellness platform with a custom WordPress theme, affiliate tracking, RESTful API endpoints for referrer analytics, and comprehensive affiliate payment reporting.",
    longDescription:
      "Bright Line Eating is a science-based weight loss program and community platform founded by Susan Peirce Thompson, Ph.D. The site features a custom WordPress theme built with the Elementor page builder, creating a highly customizable and extendable architecture. Key technical work included implementing affiliate tracking via custom WordPress hooks and filters, building RESTful API endpoints for referrer data analysis, designing plugins to track user conversion rates through affiliate links, and developing data analysis algorithms to generate comprehensive affiliate payment reports.",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Elementor", "Gutenberg", "Git", "CloudFlare"],
    liveUrl: "https://www.brightlineeating.com/",
    thumbnail: "/images/projects/brightline/1.png",
    role: "Senior Software Engineer",
    highlights: [
      "Developed custom WordPress theme with Elementor page builder",
      "Implemented custom hooks and filters for affiliate tracking",
      "Created custom post types and taxonomies for content organization",
      "Built RESTful API endpoints to analyze referrer data",
      "Designed plugins to track user conversion rates through affiliate links",
      "Developed data analysis algorithms for affiliate payment reports",
      "Optimized performance and implemented SEO best practices",
    ],
  },
  {
    id: "cafe-zupas",
    title: "Cafe Zupas — Restaurant Food Chain",
    description:
      "Full-stack platform for a restaurant chain — resolved 200+ React issues, redesigned the backend with microservices, and integrated a Google Maps dashboard for strategic planning.",
    longDescription:
      "Cafe Zupas is a fast-casual restaurant chain specializing in soups, salads, and sandwiches. As a full-stack engineer, I resolved over 200 ReactJS issues resulting in a 26% revenue increase. I redesigned the backend architecture using Laravel and Node.js for improved performance and scalability, developed RESTful APIs for React microservices, and led the development of an integrated restaurant management system handling kitchen operations, POS, and delivery services. A data visualization dashboard integrating Google Maps API enabled strategic location planning for new restaurant openings.",
    technologies: ["React JS", "PHP", "MySQL", "PgSQL", "Git", "Docker", "Laravel", "Node.js"],
    liveUrl: "https://cafezupas.com/",
    thumbnail: "/images/projects/cafezupas/1.png",
    role: "Full Stack Engineer",
    highlights: [
      "Resolved 200+ ReactJS issues, resulting in 26% revenue increase",
      "Redesigned backend architecture with Laravel and Node.js",
      "Developed RESTful APIs boosting client revenue by 29%",
      "Architected microservices for improved system modularity",
      "Led development of integrated restaurant management system",
      "Created Google Maps data visualization dashboard for location planning",
    ],
  },
  {
    id: "millergroup",
    title: "Millergroup (Swedish Match)",
    description:
      "Full-stack application built with React JS on the frontend and Laravel on the backend. Integrated new APIs and handled end-to-end feature delivery.",
    longDescription:
      "Millergroup is a digital project for Swedish Match, a leading tobacco and nicotine products company. I handled both the frontend (React JS) and backend (Laravel), integrating new APIs and delivering end-to-end features across the full stack.",
    technologies: ["React JS", "Laravel", "REST APIs"],
    liveUrl: "https://www.swedishmatch.com/",
    thumbnail: "/images/projects/millergroup/1.png",
    role: "Full Stack Engineer",
    highlights: [
      "Handled both frontend (React JS) and backend (Laravel)",
      "Integrated new APIs across the platform",
      "Delivered end-to-end features across the full stack",
    ],
  },
  {
    id: "stafftimer",
    title: "Stafftimer — Employee Time Tracking",
    description:
      "A payroll and time-tracking system that captures employee work progress with accurate reporting and data-driven salary calculations.",
    longDescription:
      "Stafftimer is a comprehensive payroll and time-tracking application designed to capture employees' systems and work progress. The platform provides accurate reports calculating total working hours while accounting for holidays and time off, and leverages data analysis tools to generate precise salary information based on hourly rates or other payment structures.",
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
      "An internal communication platform for organizations with multi-company support and individual/group channels for seamless collaboration.",
    longDescription:
      "Whistle It is an internal communication platform built for seamless organizational collaboration. As a backend engineer, I provided a platform for employees to communicate within and across organizations. Key features include multi-company support for employers and individual/group channels for flexible team communication.",
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
