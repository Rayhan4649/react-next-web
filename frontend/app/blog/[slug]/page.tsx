import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/services';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found | Apex Global' };

  return {
    title: `${post.meta_title}`,
    description: post.meta_description,
    openGraph: {
      title: post.meta_title,
      description: post.meta_description,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      images: [{ url: post.featured_image }]
    }
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-10 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]}
      />

      {/* Header Info */}
      <div className="space-y-6">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-2 border-y border-slate-800 py-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-teal-400" />
            <span className="text-slate-200 font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>{post.published_at}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-80 sm:h-[420px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-teal-300 leading-relaxed text-base"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back Link */}
      <div className="pt-8 border-t border-slate-800">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

    </article>
  );
}
