import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ARQAYAA Intelligence",
  description: "ARQAYAA Privacy Policy. GDPR-aligned data handling for enterprise AI systems.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[150px] pb-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-p:font-sans prose-p:text-text-dark">
          <h1 className="text-4xl md:text-[56px] text-text-black mb-12 border-b border-gray-200 pb-8">Privacy Policy</h1>
          
          <p className="text-[18px] text-text-mid mb-8">
            Last Updated: May 2026
          </p>

          <h2 className="text-[32px] mt-12 mb-6">1. Enterprise Data Handling</h2>
          <p>
            ARQAYAA Intelligence operates on a fundamentally different privacy model than consumer AI companies. We do not use customer data to train our foundational models unless explicitly contracted via a dedicated fine-tuning agreement in an isolated tenant environment.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">2. TEXFLOW Auto-Purge Protocol</h2>
          <p>
            For users of the TEXFLOW academic typesetting platform, all uploaded manuscripts, XML parses, and compiled PDFs are subjected to an automated cryptographic purge exactly 48 hours after processing. No documents are retained in cold storage, ensuring compliance with pre-publication embargo rules set by major journals (Nature, Science, IEEE).
          </p>

          <h2 className="text-[32px] mt-12 mb-6">3. GDPR & Global Compliance</h2>
          <p>
            Our data processing agreements are fully aligned with the General Data Protection Regulation (GDPR) and the Digital Personal Data Protection Act (DPDP), India. Customers retain complete ownership of all inputs and generated outputs.
          </p>

          <div className="mt-16 p-8 bg-cream border border-gold/30 rounded-xl">
            <h3 className="font-serif text-[24px] mb-4 mt-0">Contact the DPO</h3>
            <p className="font-sans text-[15px] m-0">
              For privacy-related inquiries or to exercise your data rights, please contact our Data Protection Officer at <a href="mailto:privacy@arqaya.com" className="text-gold font-bold hover:underline">privacy@arqaya.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
