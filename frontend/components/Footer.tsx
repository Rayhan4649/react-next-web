import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/mockData';
import ApexLogo from '@/components/ApexLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/">
              <ApexLogo />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Award className="w-4 h-4 text-teal-400" />
                <span>OEKO-TEX Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/manufacturing" className="hover:text-teal-400 transition-colors">Manufacturing</Link></li>
              <li><Link href="/design" className="hover:text-teal-400 transition-colors">Design & R&D</Link></li>
              <li><Link href="/sustainability" className="hover:text-teal-400 transition-colors">Sustainability</Link></li>
              <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Industry News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/industrial-manufacturing" className="hover:text-teal-400 transition-colors">Precision Manufacturing</Link></li>
              <li><Link href="/services/custom-product-design" className="hover:text-teal-400 transition-colors">OEM / ODM Engineering</Link></li>
              <li><Link href="/services/sustainable-supply-chain" className="hover:text-teal-400 transition-colors">Green Supply Chain</Link></li>
              <li><Link href="/services/global-logistics" className="hover:text-teal-400 transition-colors">Global Logistics</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Custom Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Global HQ
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span className="text-slate-400">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Apex Global Industries Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
