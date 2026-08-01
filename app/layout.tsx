import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SHEEN SHAWLS | Preserving Heritage. One Stitch at a Time.',
  description:
    'A luxury heritage house built upon the trusted craftsmanship of Shawls Darners, specialists in antique Pashmina restoration and textile preservation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
