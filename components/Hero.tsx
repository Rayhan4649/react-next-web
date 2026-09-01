import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, MOCK_STATS } from '@/lib/mockData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Dynamic Background Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-slate-50 to-slate-50 dark:from-teal-900/30 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold shadow-sm dark:shadow-inner">
              <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse" />
              <span>Next-Gen Smart Industrial Manufacturing</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Precision Engineering for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Global Enterprises
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              {COMPANY_INFO.description}
            </p>

            {/* Feature Bullets */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero-Defect Quality Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>85% Renewable Solar Energy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>ISO 9001 & ISO 14001</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-teal-500/25 hover:scale-[1.02]"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

          </div>

          {/* Right Hero Image / Visual Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3 shadow-xl dark:shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Apex Global Industrial Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-teal-400">Automated Plant #1</p>
                      <p className="text-sm font-bold text-white">50M+ Annual Production Capacity</p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center border border-teal-500/30 text-teal-300">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_STATS.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">{stat.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
