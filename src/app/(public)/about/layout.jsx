export const metadata = {
  title: 'About Us',
  description: 'Learn about Smart ePrint, a registered independent online retailer based in Blaine, Minnesota, specializing in professional printing solutions.',
  alternates: {
    canonical: 'https://www.smarteprint.com/about',
  },
  openGraph: {
    title: 'About Us | Smart ePrint',
    description: 'Learn about Smart ePrint, a registered independent online retailer based in Blaine, Minnesota, specializing in professional printing solutions.',
    url: 'https://www.smarteprint.com/about',
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
      'name': 'About Us',
      'item': 'https://www.smarteprint.com/about'
    }
  ]
};

export default function AboutLayout({ children }) {
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
