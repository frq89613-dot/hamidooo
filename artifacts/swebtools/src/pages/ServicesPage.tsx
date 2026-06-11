import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";

const services = [
  {
    title: "AI Automation",
    description: "Automate complex business operations with AI-driven workflows, CRM sync, and outcome-based process orchestration.",
    href: "/services/ai-automation",
  },
  {
    title: "AI Chatbots",
    description: "Deploy conversational assistants that capture leads, resolve support questions, and scale customer engagement across channels.",
    href: "/services/ai-chatbots",
  },
  {
    title: "Workflow Automation",
    description: "Connect systems and teams with intelligent workflows that eliminate manual handoffs and accelerate business velocity.",
    href: "/services/workflow-automation",
  },
  {
    title: "Web Development",
    description: "Build fast, SEO-ready websites and landing pages designed to support AI and SaaS services with modern UX.",
    href: "/services/web-development",
  },
  {
    title: "SaaS Development",
    description: "Launch subscription-ready SaaS products with analytics, authentication, and scalable architecture.",
    href: "/services/saas-development",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <Seo
        title="Services & AI Automation Solutions"
        description="Explore Sweb.Tools services for AI automation, workflow orchestration, SaaS development, and web development built to drive growth and reduce operational cost."
        canonical="https://sweb.tools/services"
      />
      <section className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Our expertise</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI automation, SaaS development, and growth-focused digital services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sweb.Tools designs products, workflows, and experiences for companies that need faster delivery, smarter automation, and higher conversion. Explore each service and choose the right path for your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-primary/70 transition">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-border bg-slate-950/90 p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">Need help choosing a service?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Book a free strategy review and we’ll recommend the best mix of automation, SaaS, and web development for your business goals.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Schedule a strategy session
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
