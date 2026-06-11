import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { organizationSchema, websiteSchema, localBusinessSchema, createBreadcrumbList } from "@/lib/seo";

const pageUrl = "https://sweb.tools/case-studies";
const pageTitle = "AI Automation Case Studies";
const pageDescription =
  "Review case studies showcasing AI automation, workflow orchestration, SaaS growth, and web development successes for modern businesses.";

const caseStudies = [
  {
    title: "Fast-Tracking Restaurant Reservations",
    challenge: "A restaurant group lost bookings and support efficiency due to manual reservation and order management.",
    solution: "We deployed an AI reservation assistant, automated menu recommendations, and sync workflows for kitchen and guest communications.",
    technologies: ["AI booking assistant", "CRM workflows", "Automated notifications"],
    metrics: ["20% faster seating turnaround", "35% fewer no-shows", "2x improvement in satisfaction"],
  },
  {
    title: "SaaS Growth for a MedTech Startup",
    challenge: "A SaaS startup needed a secure subscription product with analytics and a fast onboarding flow.",
    solution: "We built an MVP with authentication, dashboard experiences, billing integration, and AI-powered user guidance.",
    technologies: ["Secure auth", "Subscription billing", "Onboarding AI"],
    metrics: ["Launched in 8 weeks", "40% lower onboarding friction", "3x demo-to-trial conversion"],
  },
  {
    title: "E-commerce Chatbot for Sales Support",
    challenge: "An online retailer missed revenue because customer questions were slow to answer and abandoned carts increased.",
    solution: "We created a conversational chatbot that answered product questions, recovered abandoned carts, and integrated with CRM follow-up.",
    technologies: ["Conversational AI", "CRM integration", "Cart recovery workflows"],
    metrics: ["22% uplift in cart conversion", "45% faster response", "Reduced support tickets significantly"],
  },
];

export default function CaseStudiesPage() {
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
            { position: 2, name: "Case Studies", item: pageUrl },
          ]),
        ]}
      />
      <section className="bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Real results</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case studies for AI automation and SaaS delivery</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore realistic success stories that highlight measurable improvements in speed, revenue, and customer satisfaction.
            </p>
          </div>

          <div className="grid gap-8">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
                <div className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        {item.metrics.map((metric) => (
                          <li key={metric} className="flex gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/80 p-6">
                      <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Technologies</p>
                      <ul className="space-y-3 text-muted-foreground">
                        {item.technologies.map((technology) => (
                          <li key={technology} className="flex gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                            <span>{technology}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-6">
                      <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Impact summary</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Our approach blends AI, automation, and conversion strategy to deliver outcomes that matter to business leaders.
                      </p>
                    </div>
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
