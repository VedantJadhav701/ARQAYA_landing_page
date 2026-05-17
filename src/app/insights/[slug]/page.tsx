import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import InsightDetailClient from "./InsightDetailClient";
import { mockArticles } from "../InsightsClient";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const article = mockArticles.find(a => a.slug === params.slug);
  
  if (!article) {
    return { title: "Article Not Found | ARQAYAA Intelligence" };
  }

  return {
    title: `${article.title} | ARQAYAA Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      authors: [article.author],
      publishedTime: article.date,
      images: [article.image]
    }
  };
}

export default function InsightDetailPage({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug);
  
  if (!article) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.date,
    "author": [{
        "@type": "Person",
        "name": article.author,
    }]
  };

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InsightDetailClient slug={params.slug} />
      <Footer />
    </main>
  );
}
