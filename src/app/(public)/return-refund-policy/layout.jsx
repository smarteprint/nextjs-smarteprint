export const metadata = {
  title: 'Return & Refund Policy',
  description: 'Learn about the Return & Refund Policy of Smart ePrint. Find out how to return products, request refunds or exchanges within 7 days of delivery.',
  alternates: {
    canonical: 'https://www.smarteprint.com/return-refund-policy',
  },
  openGraph: {
    title: 'Return & Refund Policy | Smart ePrint',
    description: 'Learn about the Return & Refund Policy of Smart ePrint. Find out how to return products, request refunds or exchanges within 7 days of delivery.',
    url: 'https://www.smarteprint.com/return-refund-policy',
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
      'name': 'Return & Refund Policy',
      'item': 'https://www.smarteprint.com/return-refund-policy'
    }
  ]
};

export default function ReturnRefundPolicyLayout({ children }) {
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
