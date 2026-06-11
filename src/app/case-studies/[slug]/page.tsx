import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CaseStudyDetailClient from "./CaseStudyDetailClient";
import { mockCaseStudies } from "@/data/mockData";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const study = mockCaseStudies.find(s => s.slug === params.slug);
  
  if (!study) {
    return { title: "Case Study Not Found | Dpulseai" };
  }

  return {
    title: `${study.title} | Dpulseai Case Studies`,
    description: study.impact,
    openGraph: {
      title: study.title,
      description: study.impact,
      type: "article",
      images: [study.image],
    }
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = mockCaseStudies.find(s => s.slug === params.slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-serif text-2xl">Case Study Not Found</h1>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "image": [study.image],
    "author": [{
        "@type": "Organization",
        "name": "Dpulseai",
    }]
  };

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <CaseStudyDetailClient slug={params.slug} />
      <Footer />
    </main>
  );
}
