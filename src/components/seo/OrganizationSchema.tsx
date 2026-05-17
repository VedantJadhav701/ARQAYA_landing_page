import React from "react";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ARQAYAA INTELLIGENCE PVT LTD",
    "url": "https://arqaya.com",
    "logo": "https://arqaya.com/logo.png",
    "email": "info@arqaya.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://linkedin.com/company/arqaya",
      "https://twitter.com/arqaya"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
