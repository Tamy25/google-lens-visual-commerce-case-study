export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  url: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management, payment processing, and admin dashboards.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    url: "#",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization tool for tracking KPIs, user engagement, and revenue metrics in real time.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js"],
    category: "Frontend",
    url: "#",
    featured: true,
  },
  {
    id: "microservices-api",
    title: "Microservices API Gateway",
    description:
      "High-throughput API gateway handling 50k+ req/s with rate limiting, authentication, and circuit breaking.",
    techStack: ["Java", "Spring Cloud", "Kafka", "Kubernetes"],
    category: "Backend",
    url: "#",
    featured: true,
  },
  {
    id: "ml-pipeline",
    title: "ML Data Pipeline",
    description:
      "Automated ETL pipeline for processing and transforming large datasets for machine learning model training.",
    techStack: ["Python", "Apache Spark", "Airflow", "AWS S3"],
    category: "Data",
    url: "#",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric auth, real-time transactions, and push notifications.",
    techStack: ["Kotlin", "Spring Boot", "MongoDB", "Firebase"],
    category: "Mobile",
    url: "#",
  },
  {
    id: "devops-toolkit",
    title: "DevOps Automation Toolkit",
    description:
      "Infrastructure-as-code toolkit for automated deployments, monitoring, and scaling across cloud providers.",
    techStack: ["Go", "Terraform", "Docker", "Prometheus"],
    category: "DevOps",
    url: "#",
  },
  {
    id: "social-platform",
    title: "Social Media Platform",
    description:
      "Real-time social networking app with feeds, messaging, notifications, and content moderation.",
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    category: "Full Stack",
    url: "#",
  },
  {
    id: "cms-headless",
    title: "Headless CMS",
    description:
      "Custom content management system with a flexible API, role-based access, and multi-tenant support.",
    techStack: ["Java", "Spring Boot", "Elasticsearch", "React"],
    category: "Backend",
    url: "#",
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
