import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { getServiceBySlug, getServices } from '@/lib/services';
import { CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Apex Global' };

  return {
    title: `${service.meta_title}`,
    description: service.meta_description,
    openGraph: {
      title: service.meta_title,
      description: service.meta_description,
      images: [{ url: service.featured_image }]
    }
  };
}

// Pre-generate Static Params for SSG
export async function generateStaticParams() {
  const services = await getServices();
  return services.map(s => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]}
      />

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              {service.excerpt}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src={service.featured_image}
              alt={service.title}
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          {/* HTML Content Body */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-teal-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Feature Highlights Grid */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span>Key Standards & Operational Specs</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Consultation Box */}
        <div className="lg:col-span-4 space-y-6 sticky top-28">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Need Custom Specs or Pricing?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Connect directly with an industrial application specialist to review product blueprints, material sample runs, and batch timelines.
            </p>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-teal-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Specification Quote</span>
            </Link>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p>✔ ISO 9001:2015 Quality Assurance</p>
              <p>✔ NDA & IP Protection Guaranteed</p>
              <p>✔ Sample Prototyping Available</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
