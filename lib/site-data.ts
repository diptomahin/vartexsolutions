import type {
  BlogPost,
  PortfolioProject,
  Service,
  Stat,
  Testimonial,
} from "@/types/site";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Projects", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
];

export const services: Service[] = [
  {
    icon: "wordpress",
    title: "WordPress Development",
    description:
      "Custom WordPress platforms engineered for speed, editorial control, and long-term maintainability.",
    points: [
      "Custom websites",
      "Theme development",
      "Plugin development",
      "Speed optimization",
      "Maintenance",
    ],
  },
  {
    icon: "shopping-cart",
    title: "WooCommerce Development",
    description:
      "Revenue-focused commerce experiences with optimized checkout flows and reliable integrations.",
    points: [
      "Custom stores",
      "Checkout optimization",
      "Payment integration",
      "Inventory management",
      "Subscription systems",
    ],
  },
  {
    icon: "code-2",
    title: "Custom Web Development",
    description:
      "High-performance apps, SaaS platforms, dashboards, portals, CRMs, and ERPs using modern stacks.",
    points: ["MERN Stack", "Next.js", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: "cpu",
    title: "Software Development",
    description:
      "Business software that automates operations and connects teams, workflows, and data.",
    points: [
      "Desktop software",
      "Business automation",
      "Inventory systems",
      "POS systems",
      "ERP solutions",
    ],
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design",
    description:
      "Elegant product interfaces built from research, wireframes, prototypes, and scalable design systems.",
    points: ["Wireframes", "Figma", "Prototypes", "Design systems", "User experience"],
  },
  {
    icon: "megaphone",
    title: "Digital Marketing",
    description:
      "Full-funnel growth strategy for search, paid media, social, email, and content programs.",
    points: ["SEO", "Google Ads", "Facebook Ads", "Social media", "Email marketing"],
  },
  {
    icon: "network",
    title: "IT Consulting",
    description:
      "Technology planning, cloud architecture, automation, and digital transformation guidance.",
    points: ["Technology planning", "Cloud solutions", "Automation", "Transformation"],
  },
];

export const reasons = [
  ["Expert Team", "Senior product thinkers, engineers, designers, and growth strategists."],
  ["Transparent Communication", "Clear scopes, weekly progress, and practical decision records."],
  ["Fast Delivery", "Lean delivery cycles that prioritize launch momentum and measurable outcomes."],
  ["Scalable Solutions", "Architecture that supports traffic, teams, integrations, and future product lines."],
  ["Affordable Pricing", "Premium execution with pragmatic engagement models for growing companies."],
  ["Ongoing Support", "Maintenance, monitoring, optimization, and growth support after launch."],
];

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "WordPress",
  "WooCommerce",
  "PHP",
  "MySQL",
  "Tailwind",
  "Docker",
  "GitHub",
  "Firebase",
  "AWS",
  "Vercel",
  "Cloudflare",
];

export const processSteps = [
  ["Discovery", "We map goals, audience, requirements, risk, and measurable business outcomes."],
  ["Planning", "We shape scope, architecture, delivery milestones, and success metrics."],
  ["UI/UX Design", "We design refined flows, interfaces, prototypes, and design systems."],
  ["Development", "We build with clean architecture, type safety, and performance in mind."],
  ["Testing", "We validate usability, responsiveness, SEO, speed, and functional reliability."],
  ["Deployment", "We ship through stable hosting, analytics, monitoring, and launch checklists."],
  ["Support", "We improve continuously with maintenance, reporting, and roadmap support."],
];

export const portfolio: PortfolioProject[] = [
  {
    title: "Apex Corporate Platform",
    category: "Corporate",
    description: "A polished enterprise site with newsroom, lead routing, and analytics governance.",
    technologies: ["Next.js", "Tailwind", "Vercel"],
    image: "linear-gradient(135deg,#e9fbff,#efeaff 48%,#ffe7f8)",
  },
  {
    title: "NimbleCart Commerce",
    category: "E-commerce",
    description: "A WooCommerce storefront with subscription flows and conversion-focused checkout.",
    technologies: ["WooCommerce", "PHP", "Stripe"],
    image: "linear-gradient(135deg,#fff8e8,#e7fbff 52%,#f4e7ff)",
  },
  {
    title: "OrbitOps SaaS",
    category: "SaaS",
    description: "A multi-tenant SaaS dashboard with billing, roles, and product analytics.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "linear-gradient(135deg,#eef2ff,#e6fff6 50%,#ffe8fb)",
  },
  {
    title: "Command Desk",
    category: "Dashboard",
    description: "A real-time operations dashboard for sales, inventory, and service teams.",
    technologies: ["Next.js", "Express", "Firebase"],
    image: "linear-gradient(135deg,#eff6ff,#f7f7f8 45%,#ffeaf7)",
  },
  {
    title: "Editorial Engine",
    category: "WordPress",
    description: "A high-speed WordPress publishing system with custom blocks and workflow controls.",
    technologies: ["WordPress", "MySQL", "Cloudflare"],
    image: "linear-gradient(135deg,#e6faff,#f9f3ff 50%,#fff1fb)",
  },
  {
    title: "FieldSync Mobile",
    category: "Mobile",
    description: "A field service product experience spanning mobile workflows and admin portals.",
    technologies: ["React", "Node.js", "AWS"],
    image: "linear-gradient(135deg,#f3f8ff,#e9fff1 50%,#ffe6f8)",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Rahman",
    role: "Founder",
    company: "BrightLedger",
    feedback:
      "Vartex turned a messy product idea into a clean, scalable platform. The team felt strategic from day one.",
    avatar: "MR",
  },
  {
    name: "Daniel Foster",
    role: "Operations Director",
    company: "Northline Retail",
    feedback:
      "Our WooCommerce rebuild lifted conversions and made daily operations easier for every team involved.",
    avatar: "DF",
  },
  {
    name: "Aisha Karim",
    role: "CMO",
    company: "NovaCare",
    feedback:
      "The design quality, speed, and communication were exactly what we expect from an enterprise partner.",
    avatar: "AK",
  },
];

export const faqs = [
  ["How long does a project take?", "Most websites take 3-8 weeks. Custom software, SaaS, and ERP work depends on scope and usually starts with a discovery sprint."],
  ["How is pricing calculated?", "Pricing depends on strategy, complexity, integrations, content, timeline, and support needs. We quote after understanding the project properly."],
  ["Do you provide maintenance?", "Yes. We offer maintenance, monitoring, updates, security checks, performance optimization, and feature iterations."],
  ["Can you manage hosting?", "Yes. We can deploy and manage projects on Vercel, AWS, Cloudflare, managed WordPress hosting, or the right fit for your stack."],
  ["What support do you provide after launch?", "We provide bug fixes, content support, analytics review, roadmap planning, and ongoing optimization retainers."],
  ["Do you handle SEO?", "Yes. We build technical SEO foundations and can support keyword strategy, content planning, and ongoing organic growth."],
  ["Can you build WooCommerce subscriptions?", "Yes. We handle custom checkout, subscriptions, payment gateways, inventory, CRM integrations, and conversion optimization."],
  ["Do you build custom business software?", "Yes. We build portals, dashboards, POS, inventory systems, school management, hospital management, and ERP solutions."],
];

export const blogPosts: BlogPost[] = [
  {
    title: "How to Plan a Website That Actually Converts",
    category: "Strategy",
    date: "Jun 12, 2026",
    excerpt: "A practical framework for turning a redesign into a measurable growth asset.",
    slug: "website-conversion-plan",
  },
  {
    title: "WooCommerce Performance Patterns for Growing Stores",
    category: "Commerce",
    date: "May 28, 2026",
    excerpt: "The architecture and optimization choices that keep stores fast under pressure.",
    slug: "woocommerce-performance-patterns",
  },
  {
    title: "When to Choose Next.js for Your Product",
    category: "Engineering",
    date: "May 9, 2026",
    excerpt: "A clear decision guide for SaaS, dashboards, marketing sites, and portals.",
    slug: "when-to-choose-nextjs",
  },
];
