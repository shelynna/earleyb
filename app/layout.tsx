import type {Metadata} from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'EarleyBird Technology Solutions',
  description: 'Simplifying today\'s technology',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-page-bg text-text selection:bg-black selection:text-white" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
