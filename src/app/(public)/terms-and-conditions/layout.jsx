export const metadata = {
  title: 'Terms & Conditions',
  description: 'Read the Terms & Conditions of Smart ePrint. Understand the rules, guidelines, and legal agreements governing the use of our website and services.',
  alternates: {
    canonical: 'https://www.smarteprint.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Smart ePrint',
    description: 'Read the Terms & Conditions of Smart ePrint. Understand the rules, guidelines, and legal agreements governing the use of our website and services.',
    url: 'https://www.smarteprint.com/terms-and-conditions',
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
      'name': 'Terms & Conditions',
      'item': 'https://www.smarteprint.com/terms-and-conditions'
    }
  ]
};

export default function TermsAndConditionsLayout({ children }) {
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
