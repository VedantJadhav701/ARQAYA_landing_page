export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Dpulseai",
    "alternateName": "Dpulseai",
    "url": "https://dpulseai.com",
    "logo": "https://dpulseai.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/dpulseai",
      "https://twitter.com/dpulseai"
    ],
    "description": "Dpulseai is an industrial-grade AI company building production-ready systems for highly regulated industries.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "info@dpulseai.com",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
