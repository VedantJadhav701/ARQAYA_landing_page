import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { getAllPosts } from "@/lib/mdx";
import InsightsClient from "./InsightsClient";

export const metadata = {
  title: "Insights & Analysis | ARQAYAA Intelligence",
  description: "Thought leadership on industrial AI, physics-native modeling, and autonomous enterprise systems.",
};

export default function InsightsPage() {
  const posts = getAllPosts("insights");

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="THOUGHT LEADERSHIP"
        title="Insights & Analysis"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
      />
      
      <InsightsClient initialPosts={posts} />

      <Footer />
    </main>
  );
}
