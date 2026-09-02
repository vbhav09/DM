import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const heading = Barlow_Condensed({ variable: '--font-heading', subsets: ['latin'], weight: ['600', '700', '800'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Durga Motors | Auto Market in Mandla',
  description: 'Visit Durga Motors on Jabalpur Road, Muhgaon, Mandla. Call 096696 59070 for vehicle enquiries and friendly local service.',
  openGraph: {
    title: 'Durga Motors | Auto Market in Mandla',
    description: 'Drive forward with confidence. Visit Durga Motors in Muhgaon, Mandla.',
    images: [{ url: '/durga-motors-front.jpg', width: 1079, height: 789, alt: 'Durga Motors storefront in Mandla.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durga Motors | Auto Market in Mandla',
    description: 'Drive forward with confidence. Visit Durga Motors in Muhgaon, Mandla.',
    images: ['/durga-motors-front.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${heading.variable} ${body.variable}`}>{children}</body></html>;
}
