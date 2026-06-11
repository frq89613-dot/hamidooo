import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  createBreadcrumbList,
  createFaqPage,
} from "@/lib/seo";

const pageUrl = "https://sweb.tools/why-sweb";
const pageTitle = "Why Choose Sweb.Tools";
const pageDescription =
  "Discover why Sweb.Tools is the premium AI automation and SaaS development agency for businesses that need faster growth, stronger automation, and modern digital products.";

const faqs = [
  {
    question: "Why should I choose Sweb.Tools over a traditional agency?",
    answer:
      "We combine AI automation, SaaS engineering, and conversion-driven digital strategy to deliver systems that do more than look good—they generate revenue and reduce operating costs.",
  },
  {
    question: "How do you ensure projects launch quickly?",
    answer:
      "Every project begins with a discovery sprint, a prioritized roadmap, and a minimum viable delivery plan that balances speed with quality.",
  },
];

export default function WhySwebPage() {
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
            { position: 2, name: "Why Sweb.Tools", item: pageUrl },
          ]),
          createFaqPage(faqs),
        ]}
      />
      <section className="bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Agency differentiation</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why AI automation agencies choose Sweb.Tools as the strategic partner</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help growth teams, SaaS founders, and enterprise operations unlock speed, automation, and measurable business outcomes with intelligent digital products.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Why AI Automation Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Automation replaces churn, human error, and wasted time with consistency, speed, and visibility. We turn manual processes into self-healing systems.
              </p>
              <ul className="space-y-3 text-foreground">
                <li>Faster lead capture and qualification</li>
                <li>Lower support costs with trained AI assistants</li>
                <li>Data-driven workflows that scale with demand</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Why traditional agencies fail</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most agencies stop at visuals and CRM integration. We build the actual automation, the AI logic, and the platform architecture that sustain long-term growth.
              </p>
              <ul className="space-y-3 text-foreground">
                <li>No automation strategy or platform ownership</li>
                <li>Design-led work without measurable operational impact</li>
                <li>Manual handoffs that create slow, fragile experiences</li>
              </ul>
            </article>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Why Sweb.Tools is different</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a hybrid engineering and strategy agency focused on AI automation, SaaS product delivery, and conversion optimization for modern brands.
              </p>
              <ul className="space-y-3 text-foreground">
                <li>AI-first solutions built with growth and automation in mind</li>
                <li>Performance, SEO, and UX aligned from day one</li>
                <li>Technical ownership with transparent delivery milestones</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">How our process works</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">1. Discover</p>
                  <p className="text-muted-foreground">Map your business challenge, define outcomes, and prioritize automation opportunities.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">2. Build</p>
                  <p className="text-muted-foreground">Ship a polished SaaS experience, workflow system, or AI chatbot with measurable business impact.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">3. Scale</p>
                  <p className="text-muted-foreground">Optimize performance, revenue, and automation with ongoing growth sprints and monitoring.</p>
                </div>
              </div>
            </article>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm mb-16">
            <h2 className="text-3xl font-bold mb-6">Performance, trust, and ROI-focused delivery</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-muted-foreground mt-2">Client satisfaction in automation and development projects.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground mt-2">Projects, landing pages, and workflows delivered globally.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-3xl font-bold text-primary">10x</p>
                <p className="text-muted-foreground mt-2">Average ROI from automation and SaaS optimization programs.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm mb-16">
            <h2 className="text-3xl font-bold mb-6">Traditional agency vs Sweb.Tools</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-left">
                <thead>
                  <tr>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Capability</th>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Traditional Agency</th>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Sweb.Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Primary focus</td>
                    <td className="border-b border-border px-4 py-4">Design or marketing deliverables</td>
                    <td className="border-b border-border px-4 py-4">Automation, SaaS product engineering, and ROI</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Speed to value</td>
                    <td className="border-b border-border px-4 py-4">Slow approvals and long handoffs</td>
                    <td className="border-b border-border px-4 py-4">Fast pilots, clear milestones, and measurable outcomes</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Automation ownership</td>
                    <td className="border-b border-border px-4 py-4">Limited delivery scope</td>
                    <td className="border-b border-border px-4 py-4">Full automation systems, AI logic, and platform delivery</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="px-4 py-4">Quality measurement</td>
                    <td className="px-4 py-4">Design metrics only</td>
                    <td className="px-4 py-4">Conversion, efficiency, and ROI metrics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm mb-16">
            <h2 className="text-3xl font-bold mb-6">Our methodology and process</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Strategy</p>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize automation value and product-market fit with outcome-driven planning.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Execution</p>
                <p className="text-muted-foreground leading-relaxed">
                  Delivery is split into focused sprints that launch working automation, web, or SaaS systems quickly.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Scale</p>
                <p className="text-muted-foreground leading-relaxed">
                  We measure performance, optimize continuously, and expand the system as business needs grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
