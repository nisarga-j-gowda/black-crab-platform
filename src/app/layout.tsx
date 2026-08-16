import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Black Crab | Academic & Project Development Support',
  description:
    'Black Crab provides academic support for assignments, handwritten work, engineering drawings, software projects, reports, presentations, major projects and digital or doorstep services for students.',
  metadataBase: new URL(SITE.siteUrl),
  openGraph: {
    title: 'Black Crab | Academic & Project Development Support',
    description:
      'Black Crab provides academic support for assignments, handwritten work, engineering drawings, software projects, reports, presentations, major projects and digital or doorstep services for students.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Crab | Academic & Project Development Support',
    description:
      'Black Crab provides academic support for assignments, handwritten work, engineering drawings, software projects, reports, presentations, major projects and digital or doorstep services for students.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
