export const metadata = {
  title: 'Disclaimer',
  description: 'Read the disclaimer and legal policy for Smart ePrint. Learn about our independent retailer status and website usage terms.',
  alternates: {
    canonical: 'https://www.smarteprint.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Smart ePrint',
    description: 'Read the disclaimer and legal policy for Smart ePrint. Learn about our independent retailer status and website usage terms.',
    url: 'https://www.smarteprint.com/disclaimer',
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
      'name': 'Disclaimer',
      'item': 'https://www.smarteprint.com/disclaimer'
    }
  ]
};

export default function DisclaimerLayout({ children }) {
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
