export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "ARQAYAA Intelligence",
    "alternateName": "ARQAYAA Intelligence Pvt Ltd",
    "url": "https://arqaya.com",
    "logo": "https://arqaya.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/arqaya-intelligence",
      "https://twitter.com/arqaya_ai"
    ],
    "description": "ARQAYAA Intelligence is an industrial-grade AI company building production-ready systems for highly regulated industries.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "info@arqaya.com",
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
