export const metadata = {
  title: 'Shipping Policy',
  description: 'Read the Shipping Policy of Smart ePrint. Learn about shipping times, delivery rates, carriers, and how we deliver to the United States and Canada.',
  alternates: {
    canonical: 'https://www.smarteprint.com/shipping-policy',
  },
  openGraph: {
    title: 'Shipping Policy | Smart ePrint',
    description: 'Read the Shipping Policy of Smart ePrint. Learn about shipping times, delivery rates, carriers, and how we deliver to the United States and Canada.',
    url: 'https://www.smarteprint.com/shipping-policy',
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
      'name': 'Shipping Policy',
      'item': 'https://www.smarteprint.com/shipping-policy'
    }
  ]
};

export default function ShippingPolicyLayout({ children }) {
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
