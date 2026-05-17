import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";

export const metadata = {
  title: "Privacy Policy | ARQAYAA Intelligence",
  description: "Our institutional commitment to data privacy, GDPR compliance, and the right to intelligence sovereignty.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="LEGAL & ETHICS"
        title="Privacy Policy"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920"
      />
      <section className="py-24 px-6 md:px-24">
         <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[32px] text-text-black mb-8 border-b border-border pb-4">Institutional Privacy Commitment</h2>
            <div className="prose font-sans text-text-mid space-y-6">
               <p>At ARQAYAA INTELLIGENCE PVT LTD, privacy is not just a policy—it is a structural requirement of our architecture. We operate on the principle of <strong>Least-Privilege Access</strong> and <strong>Intelligence Sovereignty</strong>.</p>
               <h3 className="font-serif text-[24px] text-text-black pt-8">1. Data Ownership</h3>
               <p>ARQAYAA does not claim ownership of any data processed through our TENETX or TEXFLOW platforms. Your data remains your property at all times.</p>
               <h3 className="font-serif text-[24px] text-text-black pt-8">2. Retention & Purging</h3>
               <p>For research platforms like TEXFLOW, we implement a strict 48-hour automated purging policy. All processed documents are irreversibly deleted from our secure compilation nodes within 48 hours of processing.</p>
               <h3 className="font-serif text-[24px] text-text-black pt-8">3. AI Training</h3>
               <p>We do not use client-specific operational data or research manuscripts to train our base models. Any fine-tuning is performed on isolated, client-owned environments.</p>
            </div>
         </div>
      </section>
      <Footer />
    </main>
  );
}
