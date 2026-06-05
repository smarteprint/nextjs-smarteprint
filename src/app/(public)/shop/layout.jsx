export const metadata = {
  title: 'Shop Printers & Accessories',
  description: 'Browse and shop high-quality printers, ink, toner, and accessories at Smart ePrint. Competitive pricing, genuine brands, and free shipping.',
  alternates: {
    canonical: 'https://www.smarteprint.com/shop',
  },
  openGraph: {
    title: 'Shop Printers & Accessories | Smart ePrint',
    description: 'Browse and shop high-quality printers, ink, toner, and accessories at Smart ePrint. Competitive pricing, genuine brands, and free shipping.',
    url: 'https://www.smarteprint.com/shop',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.smarteprint.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Shop',
      'item': 'https://www.smarteprint.com/shop'
    }
  ]
};

export default function ShopLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
