import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_INFO } from '@/lib/mockData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://apexglobal.com'),
  title: {
    default: 'Apex Global Industries | Precision Manufacturing & Sustainable Engineering',
    template: '%s | Apex Global'
  },
  description: COMPANY_INFO.description,
  keywords: [
    'Industrial Manufacturing',
    'Precision Engineering',
    'OEM ODM Solutions',
    'Sustainable Supply Chain',
    'ISO 9001 Certified Factory',
    'Corporate Manufacturing Partner'
  ],
  authors: [{ name: 'Apex Global Industries' }],
  creator: 'Apex Global Industries',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apexglobal.com',
    siteName: 'Apex Global Industries',
    title: 'Apex Global Industries | Precision Manufacturing',
    description: COMPANY_INFO.description,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Apex Global Manufacturing Facility'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Global Industries',
    description: COMPANY_INFO.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
