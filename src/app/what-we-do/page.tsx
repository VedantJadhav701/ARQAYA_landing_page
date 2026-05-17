import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";

const solutions = [
  {
    num: "01",
    title: "Agentic AI Systems",
    desc: "Autonomous agents for complex multi-step workflows.",
    accent: "bg-gold"
  },
  {
    num: "02",
    title: "Domain-Specific Models",
    desc: "Fine-tuned LLMs on your industry data.",
    accent: "bg-tenetx-primary"
  },
  {
    num: "03",
    title: "Intelligent Automation",
    desc: "End-to-end platforms with intelligent logic layers.",
    accent: "bg-texflow-primary"
  },
  {
    num: "04",
    title: "Production Monitoring",
    desc: "Real-time AI observability and reliability.",
    accent: "bg-text-black"
  }
];

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="WHAT WE DO"
        title="We Build AI That Actually Works in Production"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
      />

      {/* THE CHALLENGE */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="section-label mb-8">THE CHALLENGE</div>
            <h2 className="font-serif text-[42px] text-text-black leading-tight mb-8">
              "AI isn't just about models — it's about systems."
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Project Failure", desc: "80% of AI projects never make it to production." },
              { title: "Model Drift", desc: "Models that fail in real-world messy data conditions." },
              { title: "Data Silos", desc: "Intelligence trapped behind fragmented legacy stacks." },
              { title: "Fragmented Tools", desc: "Disconnected tools that don't talk to each other." }
            ].map((card, idx) => (
              <div key={idx} className="p-6 border border-border rounded-lg bg-cream">
                <h4 className="font-sans font-bold text-text-black mb-2">{card.title}</h4>
                <p className="font-sans text-[13px] text-text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6 md:px-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">OUR SOLUTIONS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl shadow-sm border border-border relative group overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-[3px] ${sol.accent}`} />
                <div className="absolute top-8 right-8 font-serif text-[100px] text-black/[0.05] leading-none select-none">
                  {sol.num}
                </div>
                <h3 className="font-serif text-[28px] text-text-black mb-4 relative z-10">{sol.title}</h3>
                <p className="font-sans text-text-mid text-[16px] mb-8 relative z-10 max-w-xs">{sol.desc}</p>
                <button className="text-gold font-rajdhani font-bold tracking-widest text-[12px] uppercase flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">OUR PROCESS</div>
          <div className="relative">
             <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-gold/30 border-t border-dashed" />
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {[
                 { step: "01", title: "Discovery & Strategy", desc: "Mapping the business landscape and identifying AI opportunities." },
                 { step: "02", title: "Development & Integration", desc: "Building and embedding intelligent logic into core workflows." },
                 { step: "03", title: "Deployment & Scale", desc: "Rigorous testing and global rollout with full observability." }
               ].map((p, idx) => (
                 <div key={idx} className="relative z-10">
                   <div className="w-14 h-14 rounded-full border border-gold bg-white flex items-center justify-center font-serif text-[20px] text-gold mb-8">
                     {p.step}
                   </div>
                   <h4 className="font-serif text-[24px] text-text-black mb-4">{p.title}</h4>
                   <p className="font-sans text-text-mid leading-relaxed">{p.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
