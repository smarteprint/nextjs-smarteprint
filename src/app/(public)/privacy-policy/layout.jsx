export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the Smart ePrint Privacy Policy. Learn how we collect, use, and protect your personal data when you use our services.',
  alternates: {
    canonical: 'https://www.smarteprint.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Smart ePrint',
    description: 'Read the Smart ePrint Privacy Policy. Learn how we collect, use, and protect your personal data when you use our services.',
    url: 'https://www.smarteprint.com/privacy-policy',
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
      'name': 'Privacy Policy',
      'item': 'https://www.smarteprint.com/privacy-policy'
    }
  ]
};

export default function PrivacyPolicyLayout({ children }) {
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
