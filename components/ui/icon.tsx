"use client";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  Megaphone,
  MessageCircle,
  Moon,
  Network,
  PenTool,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "badge-check": BadgeCheck,
  boxes: Boxes,
  briefcase: BriefcaseBusiness,
  "chevron-down": ChevronDown,
  cloud: Cloud,
  "code-2": Code2,
  cpu: Cpu,
  database: Database,
  github: Code2,
  globe: Globe2,
  layers: Layers3,
  megaphone: Megaphone,
  message: MessageCircle,
  moon: Moon,
  network: Network,
  "pen-tool": PenTool,
  rocket: Rocket,
  search: Search,
  server: Server,
  "shield-check": ShieldCheck,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  trend: TrendingUp,
  users: Users,
  workflow: Workflow,
  wordpress: Globe2,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = icons[name] ?? Sparkles;
  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
