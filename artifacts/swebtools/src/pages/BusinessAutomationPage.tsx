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

const pageUrl = "https://sweb.tools/business-automation";
const pageTitle = "Business Process Automation";
const pageDescription =
  "Business process automation services that accelerate revenue operations, improve customer support, and reduce manual workload across the organization.";

const features = [
  {
    title: "Process Automation Strategy",
    description:
      "We map your core business workflows, prioritize automation opportunities, and build a delivery plan that supports revenue and service goals.",
    bullets: [
      "Align automation with customer experience and growth targets",
      "Deliver measurable ROI for each process step",
      "Maintain compliance and team visibility",
    ],
  },
  {
    title: "Platform-Agnostic Execution",
    description:
      "Our automation services connect your ERP, CRM, support, and data stack using APIs, webhooks, and intelligent orchestration layers.",
    bullets: [
      "Integrate with existing business systems without rip-and-replace",
      "Design reusable templates for repeated operations",
      "Automate approvals, notifications, and task routing",
    ],
  },
  {
    title: "Support for AI Customer Support",
    description:
      "We combine business automation with AI support workflows so your service team can serve more customers with fewer resources.",
    bullets: [
      "Automate ticket routing and knowledge-driven answers",
      "Enable proactive outreach and customer recovery",
      "Keep escalation paths simple and transparent",
    ],
  },
];

const faqs = [
  {
    question: "Can you automate existing business processes without replacing my current systems?",
    answer:
      "Yes. We build automation on top of your existing platforms, integrating them with minimal change and maximum reliability.",
  },
  {
    question: "How do you measure automation success?",
    answer:
      "We track workflow completion time, error reduction, employee time saved, and revenue uplift to demonstrate tangible improvements.",
  },
];

export default function BusinessAutomationPage() {
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
            { position: 2, name: "Business Automation", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "Business Process Automation",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="Business process automation for faster operations"
        subtitle="Automate the workflows that slow your team down and keep critical business systems synchronized for better customer outcomes."
        overview="This service combines automation strategy, integration engineering, and AI-enabled customer support to launch faster, more reliable processes." 
        features={features}
        faqs={faqs}
        ctaText="Scale process automation"
        ctaHref="/#contact"
        relatedPages={[
          { label: "Workflow Automation", href: "/workflow-automation" },
          { label: "AI Chatbots", href: "/ai-chatbots" },
        ]}
      />
    </SiteLayout>
  );
}
