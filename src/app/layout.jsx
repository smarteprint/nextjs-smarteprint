import './globals.css';

import { Providers } from './providers';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://www.smarteprint.com'),
  title: {
    default: 'Smart ePrint | Premium Printers & Printing Solutions',
    template: '%s | Smart ePrint',
  },
  description: 'Shop premium home, office, inkjet, and laser printers at Smart ePrint. Your trusted independent retailer based in Blaine, Minnesota, providing top printing solutions.',
  keywords: ['Smart ePrint', 'independent printer retailer', 'home printers', 'office printers', 'laser printers', 'inkjet printers', 'printer supplies', 'Blaine Minnesota'],
  authors: [{ name: 'Smart ePrint' }],
  creator: 'Smart ePrint',
  publisher: 'Smart ePrint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.smarteprint.com',
  },
  openGraph: {
    title: 'Smart ePrint | Premium Printers & Printing Solutions',
    description: 'Shop premium home, office, inkjet, and laser printers at Smart ePrint. Your trusted independent retailer based in Blaine, Minnesota.',
    url: 'https://www.smarteprint.com',
    siteName: 'Smart ePrint',
    images: [
      {
        url: 'https://www.smarteprint.com/smart-e-print-logo.png',
        width: 1200,
        height: 630,
        alt: 'Smart ePrint Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart ePrint | Premium Printers & Printing Solutions',
    description: 'Shop premium home, office, inkjet, and laser printers at Smart ePrint. Your trusted independent retailer based in Blaine, Minnesota.',
    images: ['https://www.smarteprint.com/smart-e-print-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.png',
  },
};

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  'name': 'Smart ePrint',
  'description': 'Independent U.S. online retailer specializing in home printers, office printers, laser printers, inkjet printers, and ink & toner supplies.',
  'url': 'https://www.smarteprint.com',
  'logo': 'https://www.smarteprint.com/smart-e-print-logo.png',
  'telephone': '+1-651-815-4630',
  'email': 'support@smarteprint.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '11397 Quincy St NE',
    'addressLocality': 'Blaine',
    'addressRegion': 'MN',
    'postalCode': '55434',
    'addressCountry': 'US'
  },
  'areaServed': ['US', 'CA'],
  'currenciesAccepted': 'USD',
  'paymentAccepted': 'Credit Card, Debit Card',
  'priceRange': '$$',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Printers & Supplies',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Home Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Office Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Laser Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Inkjet Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Ink & Toner'
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
