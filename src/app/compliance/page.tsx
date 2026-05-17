import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Compliance | ARQAYAA Intelligence",
  description: "Regulatory compliance and certifications.",
};

export default function CompliancePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[150px] pb-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-p:font-sans prose-p:text-text-dark">
          <h1 className="text-4xl md:text-[56px] text-text-black mb-12 border-b border-gray-200 pb-8">Compliance & Certifications</h1>
          
          <p className="text-[20px] leading-relaxed mb-10 text-text-black font-medium">
            We build systems that meet the stringent regulatory requirements of the energy, academic, and government sectors.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">Frameworks</h2>
          <ul className="space-y-4">
            <li><strong>SOC 2 Type II:</strong> In process. Independent auditing of our security, availability, and confidentiality controls.</li>
            <li><strong>ISO 27001:</strong> Information security management system standards applied to all internal operations.</li>
            <li><strong>HIPAA:</strong> Our healthcare-specific deployments can be configured for full HIPAA compliance via BAA agreements.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">Infrastructure Partners</h2>
          <p>
            When cloud deployment is required (non air-gapped), we partner exclusively with infrastructure providers that maintain FedRAMP High and DoD Impact Level 5 (IL5) authorizations.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
