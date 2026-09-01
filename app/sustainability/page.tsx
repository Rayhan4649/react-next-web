import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { Leaf, Sun, Droplets, Recycle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Environmental Sustainability & Net-Zero ESG Commitment | Apex Global',
  description: 'Learn about Apex Global zero-landfill policies, 85% rooftop solar plant power, closed-loop water treatment, and OEKO-TEX eco-certifications.'
};

export default function SustainabilityPage() {
  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Sustainability' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span>ESG & Environmental Stewardship</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Pioneering Net-Zero Industrial Production
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          We combine solar microgrids, closed-loop water purification systems, and zero-landfill protocols to help corporate partners fulfill global sustainability targets.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Sun,
            title: "85% Solar Power Microgrid",
            desc: "12 Megawatts of rooftop solar arrays powering daily assembly and machinery lines."
          },
          {
            icon: Droplets,
            title: "92% Closed-Loop Water Recovery",
            desc: "Multi-stage reverse osmosis and biological filtration re-purifying process water indefinitely."
          },
          {
            icon: Recycle,
            title: "Zero-Landfill Certification",
            desc: "Complete scrap fabric, polymer, and packaging recycling protocols across all hubs."
          }
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
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
