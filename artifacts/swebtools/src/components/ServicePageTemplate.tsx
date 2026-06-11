import { motion } from "framer-motion";
import { Link } from "wouter";

type SectionItem = {
  title: string;
  description: string;
  bullets?: string[];
};

type TimelineItem = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type ServicePageTemplateProps = {
  headline: string;
  subtitle: string;
  overview: string;
  features: SectionItem[];
  timeline?: TimelineItem[];
  testimonials?: Testimonial[];
  faqs: FAQItem[];
  ctaText: string;
  ctaHref: string;
  relatedPages?: { label: string; href: string }[];
};

export function ServicePageTemplate({
  headline,
  subtitle,
  overview,
  features,
  faqs,
  ctaText,
  ctaHref,
  relatedPages = [],
}: ServicePageTemplateProps) {
  return (
    <section className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.35em] text-primary mb-4">
              Strategic AI & Workflow Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{headline}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {subtitle}
            </p>
            <p className="text-base md:text-lg text-foreground max-w-3xl leading-relaxed mb-10">
              {overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                {ctaText}
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Book a free consultation
              </a>
            </div>

            <div className="mt-16 grid gap-6">
              {features.map((item) => (
                <article key={item.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  {item.bullets?.length ? (
                    <ul className="space-y-3 text-sm text-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Fast outcomes</p>
              <h2 className="text-3xl font-bold">Conversion-first delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every page, chatbot and automation is designed for measurable leads, lower costs, and faster buyer journeys.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick wins</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li>Reduce manual handoffs with intelligent workflows</li>
                <li>Launch chatbots for sales, support and lead qualification</li>
                <li>Improve page speed with modern frontend performance</li>
              </ul>
            </div>
            {relatedPages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Explore related solutions</h3>
                <div className="flex flex-col gap-3">
                  {relatedPages.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-2xl border border-border px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {timeline && timeline.length > 0 && (
          <section className="mt-20">
            <div className="grid gap-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Delivery process</p>
                <h2 className="text-3xl md:text-4xl font-bold">How we deliver this service</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {timeline.map((step, index) => (
                  <article key={step.title} className="rounded-3xl border border-border bg-card p-6">
                    <div className="text-primary font-mono font-semibold mb-3">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {testimonials && testimonials.length > 0 && (
          <section className="mt-20">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Client success</p>
              <h2 className="text-3xl md:text-4xl font-bold">What clients say about our work</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.quote} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <p className="text-foreground leading-relaxed mb-6">“{testimonial.quote}”</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                    {testimonial.company ? <p className="mt-1">{testimonial.company}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="mt-20">
            <div className="grid gap-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Common questions</p>
                <h2 className="text-3xl md:text-4xl font-bold">FAQ for this service</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {faqs.map((faq) => (
                  <article key={faq.question} className="rounded-3xl border border-border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
