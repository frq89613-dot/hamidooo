import { SiteLayout } from "@/components/layout/SiteLayout";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <PortfolioSection showHeader />
    </SiteLayout>
  );
}
