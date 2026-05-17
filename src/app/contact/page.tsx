"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { Mail, Globe } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="CONTACT"
        title="Get in Touch"
        image="https://images.unsplash.com/photo-1516387933630-3837910aa102?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Form */}
          <div>
            <h2 className="font-serif text-[42px] text-text-black leading-tight mb-8">
              Let's Start a Conversation
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input {...register("firstName", { required: true })} placeholder="First Name*" className="bg-white border border-border p-4 rounded-lg focus:outline-none focus:border-gold" />
                <input {...register("lastName", { required: true })} placeholder="Last Name*" className="bg-white border border-border p-4 rounded-lg focus:outline-none focus:border-gold" />
              </div>
              <input {...register("email", { required: true })} placeholder="Email Address*" className="w-full bg-white border border-border p-4 rounded-lg focus:outline-none focus:border-gold" />
              <select {...register("subject")} className="w-full bg-white border border-border p-4 rounded-lg focus:outline-none focus:border-gold appearance-none">
                <option>General Inquiry</option>
                <option>TENETX — Oil & Gas AI</option>
                <option>TEXFLOW — Research Platform</option>
                <option>Partnership</option>
                <option>Careers</option>
              </select>
              <textarea {...register("message", { required: true })} placeholder="Message*" rows={6} className="w-full bg-white border border-border p-4 rounded-lg focus:outline-none focus:border-gold" />
              <button type="submit" className="btn-primary w-full">Send Message →</button>
            </form>
          </div>

          {/* Right: Info */}
          <div>
            <h3 className="font-serif text-[28px] text-text-black mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold border border-border shadow-sm">
                   <Mail size={20} />
                 </div>
                 <div>
                   <div className="text-[11px] font-rajdhani text-text-muted uppercase tracking-widest">EMAIL US</div>
                   <a href="mailto:info@arqaya.com" className="text-[18px] font-serif text-text-black hover:text-gold transition-colors">info@arqaya.com</a>
                 </div>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold border border-border shadow-sm">
                   <Globe size={20} />
                 </div>
                 <div>
                   <div className="text-[11px] font-rajdhani text-text-muted uppercase tracking-widest">LOCATION</div>
                   <div className="text-[18px] font-serif text-text-black">India</div>
                 </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-white border border-border rounded-xl">
               <h4 className="font-rajdhani font-bold text-[14px] text-text-black tracking-widest uppercase mb-6">QUICK LINKS</h4>
               <div className="space-y-4">
                 <a href="/subsidiaries/tenetx" className="block text-text-mid hover:text-gold transition-colors">TENETX Inquiries →</a>
                 <a href="/subsidiaries/texflow" className="block text-text-mid hover:text-gold transition-colors">TEXFLOW Inquiries →</a>
                 <a href="/book-call" className="block text-gold font-bold">Book a Free Call →</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
