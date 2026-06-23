export type Service = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
};

export type Testimonial = {
  name: string;
  company: string;
  role: string;
  feedback: string;
  avatar: string;
};

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
};
