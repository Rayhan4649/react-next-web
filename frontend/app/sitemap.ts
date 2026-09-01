import { MetadataRoute } from 'next';
import { getServices, getBlogPosts } from '@/lib/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://apexglobal.com';

  const services = await getServices();
  const blogPosts = await getBlogPosts();

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/manufacturing',
    '/design',
    '/sustainability',
    '/blog',
    '/contact'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
