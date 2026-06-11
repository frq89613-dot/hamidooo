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

const pageUrl = "https://sweb.tools/workflow-automation";
const pageTitle = "Workflow Automation Solutions";
const pageDescription =
  "Workflow automation solutions that connect systems, eliminate handoffs, and scale business operations with AI and smart orchestration.";

const features = [
  {
    title: "Cross-system Automation",
    description:
      "Link data, approvals, and customer events across marketing, sales, finance, and support systems without manual handoff.",
    bullets: [
      "Automate contract routing, billing, and onboarding sequences",
      "Sync customer data across platforms in real time",
      "Standardize multi-step business operations with reusable flows",
    ],
  },
  {
    title: "AI-Augmented Workflow Logic",
    description:
      "Use AI decisions to route cases, predict next actions, and personalize workflows based on customer intent and behavior.",
    bullets: [
      "Trigger actions from chatbot conversations and form submissions",
      "Use AI insights to prioritize high-value leads",
      "Reduce redundant tasks with smart automation rules",
    ],
  },
  {
    title: "Operational Visibility",
    description:
      "We build dashboards, logs, and alerts so your automation always runs reliably with data-driven insight into every step.",
    bullets: [
      "Track automation performance and recovery points",
      "Monitor lead flow and handoff efficiency",
      "Measure business outcomes for each workflow",
    ],
  },
];

const faqs = [
  {
    question: "What makes workflow automation different from regular process automation?",
    answer:
      "Workflow automation connects systems, decisions, and people into a single flow that can adapt to changing conditions, rather than isolated task automation.",
  },
  {
    question: "Can you support automation for both marketing and operations?",
    answer:
      "Yes. Our solution designs workflows that span customer acquisition, revenue operations, support, and backend process coordination.",
  },
];

const timeline = [
  {
    title: "Process discovery and mapping",
    description: "Document the current process and identify the fastest path to automation with the biggest impact.",
  },
  {
    title: "Workflow design and integration",
    description: "Build intelligent flows that connect systems and reduce manual handoffs across teams.",
  },
  {
    title: "Monitor and optimize",
    description: "Track business outcomes, resolve exceptions, and refine workflows for stronger results.",
  },
];

const testimonials = [
  {
    quote: "Sweb.Tools helped us automate the entire lead intake process across our CRM and support stack.",
    name: "Emilia Rossi",
    role: "COO",
    company: "HealthBridge",
  },
  {
    quote: "Their workflow architecture reduced our invoice processing cycle time by 60%.",
    name: "Samuel Kim",
    role: "Finance Director",
    company: "VeloTech",
  },
];

export default function WorkflowAutomationPage() {
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
            { position: 2, name: "Workflow Automation", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "Workflow Automation",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="Workflow automation built for growth and reliability"
        subtitle="Connect business systems and intelligent decision logic to remove friction and power consistent customer experiences."
        overview="Our workflow solutions are designed for complex operations, delivering faster cycles, fewer errors, and clearer ownership across teams."
        features={features}
        timeline={timeline}
        testimonials={testimonials}
        faqs={faqs}
        ctaText="Automate your workflow"
        ctaHref="/#contact"
        relatedPages={[
          { label: "AI Automation", href: "/ai-automation" },
          { label: "Business Automation", href: "/business-automation" },
        ]}
      />
    </SiteLayout>
  );
}
