import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  createBreadcrumbList,
} from "@/lib/seo";

const pageUrl = "https://sweb.tools/blog";
const pageTitle = "AI Automation Blog & Insights";
const pageDescription =
  "Expert insights on AI automation, chatbots, workflow automation, SaaS development, and business automation strategy.";

const posts = [
  {
    slug: "ai-automation-guide",
    category: "AI Strategy",
    title: "The Ultimate Guide to AI Automation for Modern Businesses",
    description: "How AI automation transforms operations, improves efficiency, and creates scalable outcomes.",
    tags: ["AI Automation", "Workflow", "Strategy"],
  },
  {
    slug: "chatbots-for-business",
    category: "Chatbots",
    title: "How AI Chatbots Add Revenue and Support Efficiency",
    description: "Design chatbots that capture leads, answer customers, and reduce support workload.",
    tags: ["AI Chatbots", "Customer Support"],
  },
  {
    slug: "website-vs-saas",
    category: "Product Strategy",
    title: "Website vs SaaS: Which Solution Fits Your Business?",
    description: "Discover whether a website or SaaS product is the best investment for your growth goals.",
    tags: ["SaaS Development", "Web Development"],
  },
  {
    slug: "how-ai-saves-business-time",
    category: "Business Automation",
    title: "How AI Saves Business Time and Reduces Operational Cost",
    description: "Learn the automation patterns that remove friction and free teams for high-value work.",
    tags: ["Business Automation", "ROI"],
  },
  {
    slug: "workflow-automation-explained",
    category: "Workflow",
    title: "Workflow Automation Explained: From Lead Capture to Revenue",
    description: "Understand how workflow automation connects systems, people, and AI for consistent outcomes.",
    tags: ["Workflow Automation", "Business Operations"],
  },
];

export default function BlogPage() {
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
            { position: 2, name: "Blog", item: pageUrl },
          ]),
        ]}
      />
      <section className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Insights & strategy</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thought leadership for AI automation and SaaS teams</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read practical articles that explore automation strategy, chatbot design, SaaS development, and business systems that scale.
            </p>
          </div>

          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Browse by category</p>
            <div className="inline-flex flex-wrap justify-center gap-3">
              {Array.from(new Set(posts.map((post) => post.category))).map((category) => (
                <span key={category} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">{post.category}</p>
                    <h2 className="text-2xl font-semibold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-3 py-2 bg-background/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
