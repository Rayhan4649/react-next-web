import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { COMPANY_INFO, MOCK_STATS } from '@/lib/mockData';
import { Award, ShieldCheck, Globe, Factory, Target, Eye, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Global Corporate Manufacturing & Engineering',
  description: 'Learn about Apex Global Industries, our 25-year history of precision engineering, ISO certifications, and corporate mission.'
};

export default function AboutPage() {
  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>Corporate Profile</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Pioneering High-Precision Industrial Excellence
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-light">
          For over 25 years, Apex Global Industries has partnered with Fortune 500 enterprises to deliver precision automated manufacturing, green supply chain operations, and custom R&D design.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            To empower global industrial partners by engineering zero-defect manufacturing systems, maintaining strict ISO environmental standards, and delivering scalable custom product solutions with unmatched speed.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            To lead the transition toward 100% net-zero industrial production lines, setting the international benchmark for green energy integration, automated robotics, and resilient supply chain logistics.
          </p>
        </div>
      </div>

      {/* Timeline & Growth */}
      <div className="space-y-8 pt-6 border-t border-slate-800">
        <h2 className="text-3xl font-extrabold text-white">Our Corporate Evolution</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: "2001", title: "Foundation", desc: "Established first specialized textile manufacturing plant." },
            { year: "2010", title: "Global Expansion", desc: "Opened international distribution hubs in Europe and Asia." },
            { year: "2018", title: "Industry 4.0", desc: "Integrated AI computer vision and robotic assembly." },
            { year: "2026", title: "Net-Zero Goal", desc: "Achieved 85% renewable solar power across main plants." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-2xl font-extrabold text-teal-400">{item.year}</span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
