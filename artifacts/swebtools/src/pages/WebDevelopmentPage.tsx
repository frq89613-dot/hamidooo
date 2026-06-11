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

const pageUrl = "https://sweb.tools/web-development";
const pageTitle = "Web Development Services";
const pageDescription =
  "Web development services for AI-first brands, delivering fast, accessible, SEO-ready pages and conversion-focused landing experiences.";

const features = [
  {
    title: "Performance-First Frontends",
    description:
      "We build Vite-powered sites with fast page loads, modern semantics, and high Core Web Vitals scores for better search ranking.",
    bullets: [
      "Optimized bundle loading and lazy assets",
      "SEO-friendly HTML structure and metadata",
      "Responsive, accessible design for desktop and mobile",
    ],
  },
  {
    title: "Conversion-Optimized Landing Pages",
    description:
      "Each landing page is designed to convert with priority CTAs, trust signals, lead capture, and clear product positioning.",
    bullets: [
      "Strategic sections for social proof and service clarity",
      "Action-oriented CTAs and internal linking",
      "Fast interaction times and low bounce risk",
    ],
  },
  {
    title: "AI and SaaS Web Experiences",
    description:
      "We deliver modern websites built for AI solutions, customer support workflows, and business automation service brands.",
    bullets: [
      "Custom websites for startups and enterprise teams",
      "Landing pages for AI automation, chatbots, and workflows",
      "Clean code designed for long-term growth",
    ],
  },
];

const faqs = [
  {
    question: "Do you build websites for AI and software service businesses?",
    answer:
      "Yes. We specialize in modern web solutions for AI automation, SaaS, and business services that need fast, conversion-driven pages.",
  },
  {
    question: "Can you improve an existing site’s SEO and speed?",
    answer:
      "Our work often includes performance tuning, metadata refinement, and page structure improvements to better support search and conversions.",
  },
];

const timeline = [
  {
    title: "Research and UX strategy",
    description: "Define your customer journey, keyword targeting, and conversion paths before any code is written.",
  },
  {
    title: "Build and optimize",
    description: "Create fast, accessible web pages that load quickly and present your AI or SaaS value clearly.",
  },
  {
    title: "Launch and refine",
    description: "Measure performance, improve UX, and iterate based on user behavior and conversion data.",
  },
];

const testimonials = [
  {
    quote: "Our new site launched with a cleaner funnel and better SEO, and the first campaign saw 40% more qualified leads.",
    name: "Yara Mansour",
    role: "Growth Marketing Lead",
    company: "Flux Digital",
  },
  {
    quote: "The web experience feels premium, fast, and aligned with our SaaS positioning.",
    name: "Omar Nasser",
    role: "Product Director",
    company: "CloudOps",
  },
];

export default function WebDevelopmentPage() {
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
            { position: 2, name: "Web Development", item: pageUrl },
          ]),
          createServiceSchema({
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            serviceType: "Web Development",
          }),
          createFaqPage(faqs),
        ]}
      />
      <ServicePageTemplate
        headline="Web development services for AI-first brands"
        subtitle="Build faster, smarter websites that support AI automation, chatbot UX, and workflow-led lead generation."
        overview="From landing pages to service platforms, we create polished experiences that improve conversions and support growth."
        features={features}
        timeline={timeline}
        testimonials={testimonials}
        faqs={faqs}
        ctaText="Launch a website"
        ctaHref="/#contact"
        relatedPages={[
          { label: "AI Automation", href: "/ai-automation" },
          { label: "Workflow Automation", href: "/workflow-automation" },
        ]}
      />
    </SiteLayout>
  );
}
