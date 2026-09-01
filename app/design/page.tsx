import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { DraftingCompass, Layers, Sparkles, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'OEM / ODM Product Design & R&D Engineering | Apex Global',
  description: 'Custom industrial product development, 3D CAD prototyping within 5 days, material science innovation, and IP protection.'
};

export default function DesignPage() {
  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Design R&D' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>OEM / ODM Innovation Lab</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Custom Product R&D & Engineering
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          Partner with our mechanical, polymer, and industrial design engineers to transform raw concepts into certified market-ready products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: DraftingCompass,
            title: "3D CAD Modeling",
            desc: "Complex structural stress analysis and finite element modeling prior to tooling."
          },
          {
            icon: Layers,
            title: "5-Day Prototyping",
            desc: "Rapid additive manufacturing and sample prototyping delivered within 5 business days."
          },
          {
            icon: Sparkles,
            title: "Custom Material R&D",
            desc: "Proprietary alloy, composite, and recycled fabric formulation tailored to client specs."
          }
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
