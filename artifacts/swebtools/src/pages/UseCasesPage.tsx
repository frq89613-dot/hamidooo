import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { organizationSchema, websiteSchema, localBusinessSchema, createBreadcrumbList } from "@/lib/seo";

const pageUrl = "https://sweb.tools/use-cases";
const pageTitle = "AI Automation Use Cases";
const pageDescription =
  "Explore industry use cases for AI automation, workflow orchestration, SaaS development, and business operations across restaurants, clinics, real estate, e-commerce, and professional services.";

const useCases = [
  {
    industry: "Restaurants",
    problem: "Reservations, orders, and customer service rely on manual handoffs and slow guest communication.",
    opportunity: "Implement AI booking assistants, menu automation, and operational workflows that keep kitchen and front-of-house aligned.",
    outcome: "Faster table turns, stronger guest follow-up, and smoother order fulfillment.",
  },
  {
    industry: "Clinics",
    problem: "Patient intake, appointment reminders, and follow-up care are scattered across systems.",
    opportunity: "Build automated appointment workflows, intelligent triage, and secure clinical data handoffs.",
    outcome: "Lower no-shows, improved patient communication, and reduced administrative burden.",
  },
  {
    industry: "Real Estate",
    problem: "Leads arrive from multiple channels and require rapid qualification and follow-up.",
    opportunity: "Use AI lead triage, chatbot tours, and automatic CRM updates to accelerate property matching.",
    outcome: "Higher lead conversion, faster response times, and more qualified showings.",
  },
  {
    industry: "E-commerce",
    problem: "Support requests, inventory alerts, and sales opportunities are handled manually.",
    opportunity: "Deploy chatbots for product guidance, inventory-aware automation, and conversion-focused checkout experiences.",
    outcome: "Higher average order value, fewer support tickets, and faster campaign launches.",
  },
  {
    industry: "Professional Services",
    problem: "Client onboarding and project intake depend on manual forms and email follow-ups.",
    opportunity: "Automate qualification, billing setup, and AI-assisted proposal flow for service teams.",
    outcome: "More predictable revenue, shorter sales cycles, and a better client experience.",
  },
];

export default function UseCasesPage() {
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
            { position: 2, name: "Use Cases", item: pageUrl },
          ]),
        ]}
      />
      <section className="bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Industry applications</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Use cases for AI automation and modern SaaS delivery</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real business challenges solved with AI workflows, chatbots, automation systems, and web development that powers revenue and efficiency.
            </p>
          </div>

          <div className="grid gap-8">
            {useCases.map((item) => (
              <article key={item.industry} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">{item.industry}</p>
                    <h2 className="text-2xl font-semibold">{item.industry} automation made practical</h2>
                  </div>
                  <span className="rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">Expected impact</span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Automation opportunity</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.opportunity}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Expected outcomes</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-border bg-slate-950/90 p-10 text-white shadow-sm">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">Industry automation</p>
                <h2 className="text-3xl font-bold mb-4">See how your industry can move faster with AI and automation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  From restaurants to professional services, we create systems that reduce manual work, improve conversion, and unlock consistent operational value.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                >
                  Book your industry review
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore our services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
