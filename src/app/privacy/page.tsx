import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Dpulseai",
  description: "Dpulseai Privacy Policy. GDPR-aligned data handling for enterprise AI systems.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="LEGAL"
        headline="Privacy Policy"
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
        alt="Secure data and privacy representation"
      />

      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <div className="section-label mb-12">DATA SOVEREIGNTY</div>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
            Dpulseai operates on a fundamentally different privacy model than consumer AI companies. We do not use customer data to train our foundational models unless explicitly contracted via a dedicated fine-tuning agreement in an isolated tenant environment.
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">1. Data Collection</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-6">
            We collect only the minimum necessary information required to provide our services. This includes account information, technical logs for system performance, and any data you explicitly provide for processing within our platforms.
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">2. Data Security</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-6">
            Our systems are designed for high-security environments. We offer on-premise, air-gapped deployment options where data never leaves your physical infrastructure. For cloud deployments, we utilize industry-standard AES-256 encryption at rest and TLS 1.3 in transit.
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">3. Contact Us</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed">
            For privacy-related inquiries or to exercise your data rights, please contact our Data Protection Officer at <a href="mailto:privacy@dpulseai.com" className="text-gold font-bold hover:underline">privacy@dpulseai.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
