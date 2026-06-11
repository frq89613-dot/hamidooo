import { SiteLayout } from "@/components/layout/SiteLayout";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Seo } from "@/components/Seo";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <Seo
        title="Portfolio of AI Automation & Web Projects"
        description="Browse Sweb.Tools case studies and project showcases for AI automation, chatbot development, and performance-first web development."
        canonical="https://sweb.tools/portfolio"
      />
      <PortfolioSection showHeader />
    </SiteLayout>
  );
}
