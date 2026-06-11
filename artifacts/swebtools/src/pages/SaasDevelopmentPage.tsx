import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  organizationSchema,
  websiteSchema,
  createBreadcrumbList,
  createFaqPage,
  createServiceSchema,
} from "@/lib/seo";

const pageUrl = "https://sweb.tools/services/saas-development";
const pageTitle = "SaaS Development Services";
const pageDescription =
  "Saas development services for AI and automation companies. Build scalable MVPs, subscription platforms, and enterprise-grade SaaS products.";

const features = [
  {
    title: "MVP & Product Strategy",
    description:
      "We shape your SaaS concept into a launch-ready MVP that validates product-market fit with lean engineering and rapid iteration.",
    bullets: [
      "Auth, dashboard, and user journeys built for growth",
      "Data model design with customer retention in mind",
      "Fast feedback loops and release-ready milestones",
    ],
  },
  {
    title: "Subscription & API-Ready Architecture",
    description:
      "Our SaaS builds include secure payment, subscription management, connected APIs, and analytics so your product scales without compromise.",
    bullets: [
      "Recurring billing, trial flows, and access tiers",
      "API-first architecture for integrations and partners",
      "Enterprise-ready performance and security practices",
    ],
  },
  {
    title: "AI-Powered Product Experiences",
    description:
      "We combine product growth with automation by embedding AI agents, data workflows, and intelligent insights into your SaaS offering.",
    bullets: [
      "AI onboarding assistants, smart recommendations, and reporting",
      "Automated operations for user activation and retention",
      "Custom integrations that turn data into value",
    ],
  },
];

const faqs = [
  {
    question: "Can you build both MVPs and enterprise SaaS products?",
    answer:
      "Yes. We deliver lean MVPs to validate ideas quickly, and we also architect scalable SaaS products with security, analytics, and growth systems built-in.",
  },
  {
    question: "Do you support subscription systems and API integrations?",
    answer:
      "Absolutely. Our SaaS development includes billing, user roles, APIs, analytics, and automated workflows for customer lifecycle management.",
  },
];

const timeline = [
  {
    title: "Product discovery and roadmap",
    description: "Shape your SaaS idea into a validated product with clear user journeys and minimum lovable features.",
  },
  {
    title: "MVP build and launch",
    description: "Develop secure user flows, subscription logic, and scalable architecture for a fast market launch.",
  },
  {
    title: "Growth and automation",
    description: "Add AI workflows, retention loops, and analytics to turn your SaaS into a growth engine.",
  },
];

const testimonials = [
  {
    quote: "Our first SaaS launch happened faster than expected, and the platform felt ready for enterprise buyers.",
    name: "Sara Ley",
    role: "Founder",
    company: "TrackPulse",
  },
  {
    quote: "The product architecture made our future feature road map much easier to execute.",
    name: "Daniel Kim",
    role: "CTO",
    company: "Pulse AI",
  },
];

export default function SaasDevelopmentPage() {
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
          createBreadcrumbList([
            { position: 1, name: "Home", item: "https://sweb.tools/" },
            { position: 2, name: "SaaS Development", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "SaaS Development",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="SaaS development built for scale and revenue"
        subtitle="Launch subscription products, marketplaces, and AI platforms with engineering that supports fast growth and reliable scaling."
        overview="From MVP to enterprise stage, we build SaaS products that connect customers, analytics, and automation into a repeatable business engine."
        features={features}
        timeline={timeline}
        testimonials={testimonials}
        faqs={faqs}
        ctaText="Start SaaS development"
        ctaHref="/#contact"
        relatedPages={[
          { label: "Workflow Automation", href: "/workflow-automation" },
          { label: "Web Development", href: "/web-development" },
        ]}
      />
    </SiteLayout>
  );
}
