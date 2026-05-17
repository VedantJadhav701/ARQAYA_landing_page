"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Placeholder for GA4 / PostHog / Plausible
      console.log(`[Institutional Analytics] Page View: ${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}

/**
 * Global tracking utility for manual events (CTA clicks, etc.)
 */
export const trackEvent = (name: string, properties?: Record<string, any>) => {
  console.log(`[Institutional Analytics] Event: ${name}`, properties);
};
