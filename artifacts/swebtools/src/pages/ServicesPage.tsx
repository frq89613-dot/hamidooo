import { lazy, Suspense } from "react";

import { SiteLayout } from "@/components/layout/SiteLayout";

const Services = lazy(() => import("@/components/Services"));

export default function ServicesPage() {
  return (
    <SiteLayout>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
    </SiteLayout>
  );
}
