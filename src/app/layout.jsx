import './globals.css';

import { Providers } from './providers';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'SmartEPrint - Smart Printer Solutions',
  description: 'Smart printing solutions for your business and home',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
