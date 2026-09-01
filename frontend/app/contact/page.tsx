'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { submitContactForm } from '@/lib/services';
import { COMPANY_INFO } from '@/lib/mockData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await submitContactForm(formData);
      setStatusMsg({ type: 'success', text: res.message || "Thank you! Message submitted successfully." });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatusMsg({ type: 'error', text: "Failed to submit message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
          <span>Global Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch with Our Engineering Team
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-light">
          Whether you need custom OEM sample manufacturing, technical documentation, or global distribution consultation, we are here to assist.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-white">Send Us a Direct Message</h2>

          {statusMsg && (
            <div className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
              statusMsg.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}>
              {statusMsg.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <span>{statusMsg.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="johndoe@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject / Inquiry Type *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="OEM Quotation / Sample Request"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Project Requirements *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your manufacturing volume requirements, target specs, or timeline..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
            </button>
          </form>
        </div>

        {/* Global HQ Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Global Headquarters</h2>
            
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              <p className="font-semibold text-slate-200 mb-1">Response Guarantee</p>
              <p>All corporate inquiries receive a technical response within 24 business hours.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
