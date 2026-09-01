import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPosts } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Smart Industry & Sustainability Blog | Apex Global',
  description: 'Read the latest technical articles, smart manufacturing insights, supply chain strategies, and ESG news from Apex Global engineers.'
};

export default async function BlogListingPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>Engineering News & Insights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Industry Insights & Engineering Reports
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          In-depth analysis on smart industry 4.0 trends, green manufacturing protocols, and resilient supply chain logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
}
