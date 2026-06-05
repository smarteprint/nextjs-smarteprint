import './globals.css';
import Script from 'next/script';
import { Providers } from './providers';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://www.smarteprint.com'),
  title: {
    default: 'Smart ePrint - Buy Affordable Printers, Ink & Toner Cartridges Online | Free Shipping | 2026',
    template: '%s | Smart ePrint',
  },
  description: 'Shop Smart ePrint for high-quality printers, ink cartridges, and toner at affordable prices. Inkjet, laser, and all-in-one printers for home and office. Free shipping across North America. Expert support & 30-day returns.',
  keywords: 'buy printers online, printer cartridges, toner cartridges, inkjet printers, laser printers, all-in-one printers, affordable printing supplies, printer ink, bulk ink cartridges, printer toner, HP ink, Canon ink, printing solutions, office printers, home printers, Smart ePrint',
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
    languages: {
      'en-US': 'https://www.smarteprint.com',
      'en-CA': 'https://www.smarteprint.com',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.smarteprint.com',
    siteName: 'Smart ePrint',
    title: 'Smart ePrint - Premium Printers & Printing Supplies | Best Prices',
    description: 'Discover affordable, high-quality printers and printing supplies. Shop inkjet, laser, and all-in-one printers with free shipping and expert customer support. 30-day guarantee.',
    images: [
      {
        url: 'https://www.smarteprint.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart ePrint',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartEprint',
    title: 'Smart ePrint - Premium Printers & Printing Supplies',
    description: 'Shop affordable, high-quality printers and printing supplies online. Inkjet, laser, all-in-one printers with free shipping across North America.',
    images: ['https://www.smarteprint.com/twitter-image.jpg'],
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
    apple: '/favicon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Smart ePrint',
  },
  other: {
    'msapplication-TileColor': '#f97316',
    'theme-color': '#f97316',
    'revisit-after': '7 days',
    'distribution': 'global',
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
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17673176797" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17673176797');
            `,
          }}
        />

        {/* Store Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body>
        {/* ClickCease Tracking */}
        <Script
          id="clickcease-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var script = document.createElement('script');
              script.async = true;
              script.type = 'text/javascript';
              var target = 'https://www.clickcease.com/monitor/stat.js';
              script.src = target;
              var elem = document.head;
              elem.appendChild(script);
            `,
          }}
        />
        <noscript>
          <a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com' alt='ClickCease'/></a>
        </noscript>

        {/* JivoChat - Deferred until page is interactive */}
        <Script
          id="jivochat-deferred"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                  var s = document.createElement('script');
                  s.src = '//code.jivosite.com/widget/jnhsn3P8fW';
                  s.async = true;
                  document.body.appendChild(s);
                });
              } else {
                setTimeout(function() {
                  var s = document.createElement('script');
                  s.src = '//code.jivosite.com/widget/jnhsn3P8fW';
                  s.async = true;
                  document.body.appendChild(s);
                }, 3000);
              }
            `,
          }}
        />

        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
