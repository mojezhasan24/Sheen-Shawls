import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#F5F0E8',
};

export const metadata: Metadata = {
  title: 'Sheen Shawls by Shawls Darners | Heritage House of Antique Pashmina, Delhi',
  description:
    'A family heritage house devoted since 1990 to antique Pashmina, Sozni embroidery, Kani shawls, invisible darning, and heritage textile conservation. By appointment, Delhi, India.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sheen Shawls',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body className="antialiased selection:bg-[#9E8060]/20">{children}</body>
    </html>
  );
}

