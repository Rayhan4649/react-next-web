import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import Breadcrumb from '@/components/Breadcrumb';
import { getServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Industrial Services & Capabilities | Apex Global',
  description: 'Discover Apex Global corporate services: precision industrial manufacturing, OEM/ODM R&D design, sustainable green supply chain, and international logistics.'
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Services' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>Our Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Industrial Capabilities & Services
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          Comprehensive manufacturing, engineering, and logistics infrastructure tailored for international enterprise clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </div>
  );
}
