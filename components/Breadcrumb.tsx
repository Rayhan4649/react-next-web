import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 py-3" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
          {item.href ? (
            <Link href={item.href} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-teal-700 dark:text-teal-300 font-semibold truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
