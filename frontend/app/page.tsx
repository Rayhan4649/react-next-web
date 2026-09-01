import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import { getServices, getBlogPosts } from '@/lib/services';
import { ArrowRight, Cpu, PhoneCall, CheckCircle2 } from 'lucide-react';

export default async function HomePage() {
  const services = await getServices();
  const blogPosts = await getBlogPosts();

  return (
    <div className="space-y-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Hero Banner Section */}
      <Hero />

      {/* 2. Core Capabilities & Services Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-400 text-xs font-semibold">
            <span>Corporate Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            End-to-End Industrial Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            From precision tooling and automated production lines to sustainable green supply chain management and international shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3. Manufacturing & R&D Feature Highlight */}
      <section className="bg-slate-100 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 py-20 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Smart Industry 4.0 Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Advanced Automated Facilities & R&D Excellence
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Our plant facilities leverage AI computer vision, IoT vibration sensors, and robotic assembly arms to maintain sub-millimeter manufacturing tolerances across 50M+ annual output.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "24/7 Continuous Automated Operating Capacity",
                  "Rapid Prototyping & CAD Design within 5 Business Days",
                  "Comprehensive Material Strain & Thermal Stress Testing",
                  "Dedicated Intellectual Property Protection Agreements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/manufacturing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
                >
                  <span>Plant Tour & Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/design"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                >
                  <span>Explore R&D Design</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-xl dark:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                  alt="Industrial R&D Engineering"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Latest News & Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-3">
              <span>Industry Insights</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Articles & Engineering Reports
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-800 via-slate-900 to-slate-950 border border-teal-500/30 p-8 sm:p-12 shadow-2xl text-white">
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your Corporate Manufacturing & Supply Chain?
            </h2>
            <p className="text-slate-200 text-base leading-relaxed">
              Consult with our industrial engineering team to get a detailed production plan, custom OEM sample timeline, and volume price quotation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-teal-500/20"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <span>Download Company Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
