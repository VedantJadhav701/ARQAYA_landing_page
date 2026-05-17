import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";

const pricing = [
  {
    tier: "Free Tier",
    price: "₹0",
    features: ["1 Free Compilation / Month", "Basic templates", "Standard support"],
    btn: "Get Started Free"
  },
  {
    tier: "Pay-Per-Paper",
    price: "₹299",
    features: ["30-Day Project Access", "All templates", "Priority compilation"],
    btn: "Buy Now"
  },
  {
    tier: "Scholar Pass",
    price: "₹1,499",
    features: ["1 Year Access", "Unlimited compilations", "Cloud sync"],
    btn: "Subscribe"
  },
  {
    tier: "Institutional",
    price: "Custom",
    features: ["University Department license", "Dedicated support", "API Access"],
    btn: "Contact Sales"
  }
];

export default function TexflowPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="TEXFLOW — RESEARCH PLATFORM"
        title="From Word to Publisher-Ready PDF. Instantly."
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1920"
        overlay="bg-texflow-primary/30"
      />

      {/* THE PROBLEM */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="section-label mb-8">THE CHALLENGE</div>
            <h2 className="font-serif text-[42px] text-text-black leading-tight mb-8">
              Why Researchers Waste 40+ Hours on Formatting
            </h2>
          </div>
          <p className="font-sans text-text-dark text-[18px] leading-relaxed">
            AI-based tools risk plagiarism detector flags and journal policy rejections. 
            Manual formatting agencies are slow and expensive. TEXFLOW provides a 
            100% deterministic, Zero-AI approach to document compliance.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">HOW IT WORKS</div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {[
              "Upload Word File",
              "Engine Extracts Structure",
              "Select Journal Template",
              "Cloud Compilation",
              "Download PDF"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-texflow-light text-texflow-primary flex items-center justify-center font-serif text-[20px] font-bold mb-6">
                  {idx + 1}
                </div>
                <h4 className="font-sans font-bold text-[14px] text-text-black tracking-tight">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 md:px-24 bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">PRICING</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl border border-border shadow-sm flex flex-col h-full">
                <h4 className="font-rajdhani font-bold text-[14px] text-text-muted tracking-widest uppercase mb-4">{p.tier}</h4>
                <div className="font-serif text-[42px] text-text-black mb-8">{p.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {p.features.map(f => (
                    <li key={f} className="text-[14px] font-sans text-text-mid border-b border-border pb-2">{f}</li>
                  ))}
                </ul>
                <button className="btn-primary bg-texflow-primary hover:bg-texflow-dark w-full">
                  {p.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
