import type { Metadata } from "next";
import { 
  Cormorant_Garamond, 
  Rajdhani, 
  Plus_Jakarta_Sans, 
  Bebas_Neue 
} from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import { Suspense } from "react";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARQAYAA Intelligence Pvt Ltd | AI Solutions for Enterprise",
  description: "We build agentic AI systems, domain-specific models, and intelligent automation platforms. Subsidiaries: TENETX (Oil & Gas AI) and TEXFLOW (Research Typesetting).",
  keywords: ["AI", "machine learning", "oil and gas", "research", "typesetting", "ARQAYAA", "TENETX", "TEXFLOW"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${cormorant.variable} ${rajdhani.variable} ${bebasNeue.variable} antialiased`}
      >
        <OrganizationSchema />
        <Suspense fallback={null}>
          <AnalyticsProvider>
            {/* Skip to main content — accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded">
              Skip to main content
            </a>
            {children}
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
