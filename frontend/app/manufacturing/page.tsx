import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { Cpu, ShieldCheck, Factory, Zap, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Manufacturing Infrastructure & Production Specs | Apex Global',
  description: 'Explore Apex Global smart manufacturing capabilities, high-speed automated assembly lines, sub-millimeter tolerances, and ISO plant certifications.'
};

export default function ManufacturingPage() {
  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Manufacturing' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>Smart Production Facilities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Automated Smart Industry 4.0 Manufacturing
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          Apex Global operates 4 interconnected automated manufacturing plants equipped with real-time IoT sensor arrays, sub-millimeter AI vision scanners, and zero-defect quality control.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Factory,
            title: "50M+ Annual Capacity",
            desc: "High-speed 24/7 continuous assembly lines designed for large volume enterprise contracts."
          },
          {
            icon: Cpu,
            title: "AI Quality Vision Scanners",
            desc: "Sub-millimeter real-time flaw detection running at 60 FPS across all active conveyor belts."
          },
          {
            icon: Activity,
            title: "Predictive IoT Telemetry",
            desc: "Vibration and thermal sensors mounted on machinery preventing unplanned factory downtime."
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

      {/* Production Workflow */}
      <div className="space-y-8 pt-8 border-t border-slate-800">
        <h2 className="text-3xl font-extrabold text-white">4-Step Production Quality Assurance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Raw Material Audit", desc: "Material purity, tensile strength, and eco-certification verification before storage." },
            { step: "02", title: "Automated Assembly", desc: "Robotic precision machining guided by optical laser positioning systems." },
            { step: "03", title: "AI Vision Scan", desc: "100% surface and dimension inspection with zero defect tolerance." },
            { step: "04", title: "Climate Packaging", desc: "Vacuum-sealed eco-friendly packaging ready for global export logistics." }
          ].map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <span className="text-3xl font-extrabold text-teal-400">{s.step}</span>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
