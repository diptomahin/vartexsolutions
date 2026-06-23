export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vartex Solutions",
      url: "https://vartexsolutions.com",
      logo: "https://vartexsolutions.com/V-artex-final-logo-removebg-preview.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@vartexsolutions.com",
        telephone: "+8801700000000",
      },
      sameAs: ["https://www.linkedin.com/company/vartex-solutions"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Vartex Solutions",
      url: "https://vartexsolutions.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://vartexsolutions.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://vartexsolutions.com",
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
