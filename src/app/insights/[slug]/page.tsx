import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import InsightDetailClient from "./InsightDetailClient";
import { mockArticles } from "@/data/mockData";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const article = mockArticles.find(a => a.slug === params.slug);
  
  if (!article) {
    return { title: "Article Not Found | Dpulseai" };
  }

  return {
    title: `${article.title} | Dpulseai Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [article.image],
    }
  };
}

export default function InsightDetailPage({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-serif text-2xl">Article Not Found</h1>
      </div>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <InsightDetailClient article={article} />
      <Footer />
    </main>
  );
}
