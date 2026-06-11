import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { organizationSchema, websiteSchema, localBusinessSchema, createBreadcrumbList } from "@/lib/seo";

const pageUrl = "https://sweb.tools/tools";
const pageTitle = "Free AI Automation Tools";
const pageDescription =
  "Explore free tools for ROI calculation, SEO title generation, meta description creation, and AI prompt building designed to help modern SaaS and automation businesses.";

const tools = [
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    description: "Estimate savings, revenue impact, and ROI for automation projects.",
  },
  {
    slug: "seo-title-generator",
    title: "SEO Title Generator",
    description: "Create high-performing page titles optimized for AI automation and SaaS keywords.",
  },
  {
    slug: "meta-description-generator",
    title: "Meta Description Generator",
    description: "Generate conversion-focused meta descriptions for service pages, blog posts, and landing pages.",
  },
  {
    slug: "ai-prompt-generator",
    title: "AI Prompt Generator",
    description: "Build prompt templates for chatbot responses, automation workflows, and content creation.",
  },
];

export default function ToolsPage() {
  return (
    <SiteLayout>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        image="/opengraph.jpg"
        structuredData={[
          organizationSchema,
          websiteSchema,
          localBusinessSchema,
          createBreadcrumbList([
            { position: 1, name: "Home", item: "https://sweb.tools/" },
            { position: 2, name: "Free Tools", item: pageUrl },
          ]),
        ]}
      />
      <section className="bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Free tools</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Traffic-generating tools for AI and SaaS teams</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use these free calculators and generators to improve site performance, improve conversion copy, and estimate automation ROI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:border-primary/50 hover:bg-primary/5"
              >
                <h2 className="text-2xl font-semibold mb-3">{tool.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                <span className="mt-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Open tool
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
