import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FrontDesk AI - AI-Powered Real Estate Agent Platform',
  description: 'The world\'s most advanced AI platform for real estate agents. Automate lead management, transaction workflows, and marketing with cutting-edge AI technology.',
  keywords: 'real estate, AI agent, lead management, transaction automation, marketing suite',
  openGraph: {
    title: 'FrontDesk AI',
    description: 'AI-Powered Real Estate Agent Platform',
    url: 'https://www.frontdeskagents.com',
    siteName: 'FrontDesk AI',
    images: [
      {
        url: 'https://www.frontdeskagents.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrontDesk AI',
    description: 'AI-Powered Real Estate Agent Platform',
    images: ['https://www.frontdeskagents.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}