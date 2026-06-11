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

const pageUrl = "https://sweb.tools/ai-chatbots";
const pageTitle = "AI Chatbot Development";
const pageDescription =
  "AI chatbot development for sales, customer support, and lead qualification with natural language workflows and conversion-optimized responses.";

const features = [
  {
    title: "Conversational Lead Capture",
    description:
      "Build bots that qualify prospects, book meetings, and hand off warm leads to your sales team without manual intervention.",
    bullets: [
      "Collect contact details and qualifying info automatically",
      "Trigger CRM updates and follow-up workflows",
      "Maintain natural, brand-safe chat tone across channels",
    ],
  },
  {
    title: "Support Automation with AI",
    description:
      "Launch intelligent support assistants that answer FAQs, route tickets, and escalate complex requests only when needed.",
    bullets: [
      "Reduce response times and support load",
      "Provide consistent answers across web and messaging channels",
      "Keep knowledge bases synced with product updates",
    ],
  },
  {
    title: "Omnichannel Chat Experience",
    description:
      "Integrate chatbots into your website, help center, and messaging stack while maintaining seamless handoffs to live agents.",
    bullets: [
      "Deploy across web, WhatsApp, and social messaging platforms",
      "Preserve context across conversations",
      "Capture leads and support requests in one dashboard",
    ],
  },
];

const faqs = [
  {
    question: "Can the chatbot integrate with my current support system?",
    answer:
      "Absolutely. We connect chatbots to ticketing systems, CRMs, and internal knowledge bases to preserve context and route requests correctly.",
  },
  {
    question: "Will the chatbot understand technical or product-specific questions?",
    answer:
      "Yes, we train each bot on your product content, documentation, FAQs, and customer scenarios to deliver accurate responses.",
  },
];

const timeline = [
  {
    title: "Audience and intent mapping",
    description: "We define the chatbot flow around your ideal customer intents, support needs, and lead qualification signals.",
  },
  {
    title: "Bot design and integration",
    description: "Build conversational logic, connect systems, and integrate the chatbot with your website or messaging channels.",
  },
  {
    title: "Training and optimization",
    description: "Train the chatbot on real user examples, monitor performance, and adjust responses for better conversion and support accuracy.",
  },
];

const testimonials = [
  {
    quote: "The AI chatbot we launched with Sweb.Tools converted more leads than any previous landing page campaign.",
    name: "Huda Sharif",
    role: "Marketing Director",
    company: "FreshDesk Plus",
  },
  {
    quote: "Our support requests dropped significantly while response quality improved. The bot feels natural and helpful.",
    name: "Noah Carter",
    role: "Head of Customer Success",
    company: "RetailFlow",
  },
];

export default function AiChatbotsPage() {
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
            { position: 2, name: "AI Chatbots", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "AI Chatbot Development",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="AI Chatbot Development for smarter customer journeys"
        subtitle="Create AI chat experiences that generate leads, resolve customer requests, and improve retention with fewer live agents."
        overview="Our bots are built to drive action and reduce friction throughout the customer lifecycle, from first contact to post-sale support."
        features={features}
        timeline={timeline}
        testimonials={testimonials}
        faqs={faqs}
        ctaText="Build a chatbot"
        ctaHref="/#contact"
        relatedPages={[
          { label: "AI Automation", href: "/ai-automation" },
          { label: "AI Customer Support", href: "/business-automation" },
        ]}
      />
    </SiteLayout>
  );
}
