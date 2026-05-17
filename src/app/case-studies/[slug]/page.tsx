import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CaseStudyDetailClient from "./CaseStudyDetailClient";
import { mockCaseStudies } from "@/data/mockData";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const study = mockCaseStudies.find(s => s.slug === params.slug);
  
  if (!study) {
    return { title: "Case Study Not Found | ARQAYAA Intelligence" };
  }

  return {
    title: `${study.title} | ARQAYAA Case Studies`,
    description: study.impact,
    openGraph: {
      title: study.title,
      description: study.impact,
      type: "article",
      images: [study.image]
    }
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = mockCaseStudies.find(s => s.slug === params.slug);
  
  if (!study) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "image": [study.image],
    "author": [{
        "@type": "Organization",
        "name": "ARQAYAA Intelligence",
    }]
  };

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyDetailClient slug={params.slug} />
      <Footer />
    </main>
  );
}
