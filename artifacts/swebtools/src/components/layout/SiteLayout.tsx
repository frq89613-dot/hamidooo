import type { ReactNode } from "react";
import { lazy, Suspense } from "react";

import Navbar from "@/components/Navbar";

const Footer = lazy(() => import("@/components/Footer"));

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
