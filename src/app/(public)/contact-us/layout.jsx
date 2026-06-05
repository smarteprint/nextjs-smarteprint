export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Smart ePrint support team. Call +1-651-815-4630, email support@smarteprint.com, or visit us in Blaine, MN.',
  alternates: {
    canonical: 'https://www.smarteprint.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Smart ePrint',
    description: 'Get in touch with the Smart ePrint support team. Call +1-651-815-4630, email support@smarteprint.com, or visit us in Blaine, MN.',
    url: 'https://www.smarteprint.com/contact-us',
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
      'name': 'Contact Us',
      'item': 'https://www.smarteprint.com/contact-us'
    }
  ]
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact Smart ePrint',
  'description': 'Contact page for Smart ePrint customer service and technical support.',
  'url': 'https://www.smarteprint.com/contact-us',
  'mainEntity': {
    '@type': 'Store',
    'name': 'Smart ePrint',
    'telephone': '+1-651-815-4630',
    'email': 'support@smarteprint.com',
    'image': 'https://www.smarteprint.com/smart-e-print-logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '11397 Quincy St NE',
      'addressLocality': 'Blaine',
      'addressRegion': 'MN',
      'postalCode': '55434',
      'addressCountry': 'US'
    }
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
