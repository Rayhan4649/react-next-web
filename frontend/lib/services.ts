import { MOCK_SERVICES, MOCK_BLOG_POSTS, COMPANY_INFO } from './mockData';
import { Service, BlogPost } from '@/types';

// API configuration flag (currently using static mock scripts, set USE_API=true when Laravel API is connected)
const USE_API = process.env.NEXT_PUBLIC_USE_API === 'true';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Fetch all published corporate services
 */
export async function getServices(): Promise<Service[]> {
  if (USE_API) {
    try {
      const res = await fetch(`${API_BASE_URL}/services`, { next: { revalidate: 3600 } });
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      return data.data || data;
    } catch (err) {
      console.warn("API Error, falling back to static mock data:", err);
    }
  }
  // Return static mock data
  return MOCK_SERVICES.filter(s => s.status === 'published');
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  if (USE_API) {
    try {
      const res = await fetch(`${API_BASE_URL}/services/${slug}`, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        return data.data || data;
      }
    } catch (err) {
      console.warn(`API Error fetching service '${slug}', falling back to mock:`, err);
    }
  }
  return MOCK_SERVICES.find(s => s.slug === slug);
}

/**
 * Fetch all published blog articles
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (USE_API) {
    try {
      const res = await fetch(`${API_BASE_URL}/blog`, { next: { revalidate: 3600 } });
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      const data = await res.json();
      return data.data || data;
    } catch (err) {
      console.warn("API Error, falling back to static mock data:", err);
    }
  }
  return MOCK_BLOG_POSTS.filter(b => b.status === 'published');
}

/**
 * Fetch a single blog article by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (USE_API) {
    try {
      const res = await fetch(`${API_BASE_URL}/blog/${slug}`, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        return data.data || data;
      }
    } catch (err) {
      console.warn(`API Error fetching post '${slug}', falling back to mock:`, err);
    }
  }
  return MOCK_BLOG_POSTS.find(b => b.slug === slug);
}

/**
 * Helper to submit contact form messages
 */
export async function submitContactForm(payload: { name: string; email: string; phone?: string; subject: string; message: string }) {
  if (USE_API) {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Submission failed");
    return res.json();
  }

  // Mock submission delay
  await new Promise(r => setTimeout(r, 800));
  return { success: true, message: "Thank you for reaching out! Our team will get back to you within 24 hours." };
}
