import Link from 'next/link';
import { ArrowRight, Factory, DraftingCompass, Leaf, Truck, Check } from 'lucide-react';
import { Service } from '@/types';

const ICON_MAP: Record<string, any> = {
  Factory,
  DraftingCompass,
  Leaf,
  Truck
};

export default function ServiceCard({ service }: { service: Service }) {
  const IconComponent = ICON_MAP[service.iconName] || Factory;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md dark:shadow-xl hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
      
      {/* Featured Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={service.featured_image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        
        {/* Floating Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-slate-950/90 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-md backdrop-blur-md">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
          {service.excerpt}
        </p>

        {/* Feature Bullets */}
        <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
          {service.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Read More Link */}
        <div className="pt-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors"
          >
            <span>Learn More & Specs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
