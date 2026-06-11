"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookCallPage() {
  const router = useRouter();

  useEffect(() => {
    window.open("https://dpulseai.vercel.app/book-call", "_blank");
    router.back();
  }, [router]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="font-serif text-[24px] text-text-black mb-4">Redirecting to Booking Page...</div>
        <div className="w-16 h-[2px] bg-gold mx-auto animate-pulse" />
      </div>
    </div>
  );
}
