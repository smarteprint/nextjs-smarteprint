export const metadata = {
  title: 'Blogs & Insights',
  description: 'Read the latest blogs, guides, printer maintenance tips, and industry insights from the printer experts at Smart ePrint.',
  alternates: {
    canonical: 'https://www.smarteprint.com/blogs',
  },
  openGraph: {
    title: 'Blogs & Insights | Smart ePrint',
    description: 'Read the latest blogs, guides, printer maintenance tips, and industry insights from the printer experts at Smart ePrint.',
    url: 'https://www.smarteprint.com/blogs',
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
      'name': 'Blogs',
      'item': 'https://www.smarteprint.com/blogs'
    }
  ]
};

export default function BlogsLayout({ children }) {
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
