export interface Service {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  iconName: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
  features: string[];
  status: 'published' | 'draft';
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image: string;
  author: string;
  published_at: string;
  readTime: string;
  meta_title: string;
  meta_description: string;
  status: 'published' | 'draft';
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CompanyStat {
  label: string;
  value: string;
  description: string;
}
