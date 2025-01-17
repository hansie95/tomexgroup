export interface Subsidiary {
  id: string;
  name: string;
  description: string;
  services: string[];
  image: string;
  route: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Language = 'en' | 'hu' | 'de';

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  content: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface SectorStats {
  value: string;
  label: string;
  description: string;
}