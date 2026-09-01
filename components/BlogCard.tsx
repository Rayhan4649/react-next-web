import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md dark:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
      
      {/* Article Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500 text-slate-950 shadow-md">
          {post.category}
        </span>
      </div>

      {/* Article Details */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        
        {/* Meta Header */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{post.published_at}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        {/* Author Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.author}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </article>
  );
}
