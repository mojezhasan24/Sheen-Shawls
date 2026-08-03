import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Sheen Shawls by Shawls Darners | Heritage House of Antique Pashmina, Delhi',
  description:
    'A family heritage house devoted since 1990 to antique Pashmina, Sozni embroidery, Kani shawls, invisible darning, and heritage textile conservation. By appointment, Delhi, India.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
