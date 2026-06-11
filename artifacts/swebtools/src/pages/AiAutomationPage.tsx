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

const pageUrl = "https://sweb.tools/ai-automation";
const pageTitle = "AI Automation Services";
const pageDescription =
  "AI Automation Services that eliminate manual work, accelerate business processes, and deliver predictable lead generation with intelligent systems.";

const features = [
  {
    title: "Intelligent Process Orchestration",
    description:
      "Connect your CRM, support tools, finance stack, and marketing workflows into one automated system that runs without manual overhead.",
    bullets: [
      "Automate approvals, notifications, and document workflows",
      "Trigger actions from sales, support, or operations events",
      "Create resilient end-to-end automation with monitoring and rollback",
    ],
  },
  {
    title: "AI-Driven Task Automation",
    description:
      "Deploy task agents that sort leads, route support requests, and launch follow-up sequences with personalized speed.",
    bullets: [
      "Automate repetitive tasks and reduce operational cost",
      "Manage recurring customer interactions with predictive responses",
      "Free your team for strategy and revenue-driving work",
    ],
  },
  {
    title: "Conversion-Focused Automation",
    description:
      "We build automation that supports growth: faster lead capture, smoother sales qualification, and A/B testable customer journeys.",
    bullets: [
      "Reduce time-to-value for new campaigns",
      "Improve pipeline accuracy and conversion rate",
      "Launch workflows that support both marketing and service teams",
    ],
  },
];

const faqs = [
  {
    question: "How quickly can AI automation launch for my business?",
    answer:
      "We typically deliver a first automation pilot within 3-6 weeks, depending on the complexity of your workflows and data integrations.",
  },
  {
    question: "Do you integrate with existing CRM and support platforms?",
    answer:
      "Yes. Our automation architecture is built to connect with popular CRMs, chat tools, databases, and marketing platforms through APIs and webhooks.",
  },
];

const timeline = [
  {
    title: "Discovery & Automation Audit",
    description: "Map your current operations, identify automation opportunities, and define measurable outcomes for your first pilot.",
  },
  {
    title: "Develop & Integrate",
    description: "Build intelligent workflows, connect systems, and launch AI-driven routing with the right data model and checks.",
  },
  {
    title: "Measure & Scale",
    description: "Monitor performance, tune automation thresholds, and expand successful flows across your business.",
  },
];

const testimonials = [
  {
    quote: "Sweb.Tools helped us automate lead qualification and customer support in one sprint. The results were visible in the first month.",
    name: "Maya Al-Hassan",
    role: "Operations Lead",
    company: "ScaleLabs",
  },
  {
    quote: "Their automation architecture eliminated the manual handoff between sales and support, saving our team over 25 hours per week.",
    name: "Luca Bennett",
    role: "Head of Revenue",
    company: "Nova Health",
  },
];

export default function AiAutomationPage() {
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
            { position: 2, name: "AI Automation", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "AI Automation",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="AI Automation Services for high-growth teams"
        subtitle="Turn manual business operations into intelligent systems that reduce costs, accelerate decision-making, and improve customer satisfaction."
        overview={
          "Sweb.Tools designs AI automation blueprints and implements the full stack from workflow orchestration to intelligent agent execution."}
        features={features}
        timeline={timeline}
        testimonials={testimonials}
        faqs={faqs}
        ctaText="Start AI automation"
        ctaHref="/#contact"
        relatedPages={[
          { label: "AI Chatbots", href: "/ai-chatbots" },
          { label: "Workflow Automation", href: "/workflow-automation" },
        ]}
      />
    </SiteLayout>
  );
}
