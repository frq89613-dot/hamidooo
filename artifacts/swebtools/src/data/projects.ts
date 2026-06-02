export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  approach: string[];
  stack: string[];
  results: string[];
  roi: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  category: string;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "crm-automation-pipeline",
    title: "ServiceFlow CRM Automation",
    category: "Automation",
    description:
      "End-to-end lead capture, qualification, and follow-up automation for a high-volume service business.",
    fullDescription:
      "ServiceFlow is a concept automation blueprint for service companies drowning in manual CRM work. The system connects web forms, WhatsApp inquiries, and calendar bookings into a single n8n orchestration layer—routing leads, enriching records, and triggering personalized follow-ups without human bottlenecks.",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    tags: ["n8n", "CRM", "WhatsApp", "HubSpot", "Automation"],
    caseStudy: {
      challenge:
        "A regional home-services operator was losing 30% of inbound leads because reps manually copied form data into spreadsheets, missed SLA windows, and sent inconsistent follow-up sequences. Dispatch scheduling lived in three disconnected tools, creating duplicate entries and no single source of truth for pipeline value.",
      solution:
        "I designed a custom n8n workflow hub that ingests every lead channel, normalizes contact data, scores intent with rule-based + AI classification, and syncs qualified opportunities to the CRM with owner assignment. Automated WhatsApp and email sequences fire within 60 seconds of submission, while high-intent leads trigger instant Slack alerts to closers.",
      approach: [
        "Mapped the full lead lifecycle from first touch to booked job—identifying 12 manual handoffs to eliminate.",
        "Built modular n8n sub-workflows for ingestion, enrichment, scoring, CRM sync, and notification layers.",
        "Added error queues and dead-letter handling so no lead is lost during API rate limits or third-party downtime.",
        "Delivered an operations dashboard spec for pipeline visibility and automation health monitoring.",
      ],
      stack: ["n8n", "HubSpot API", "Google Sheets", "WhatsApp Business API", "Slack", "OpenAI"],
      results: [
        "Lead response time: under 2 minutes (from 4+ hours).",
        "Manual data entry removed for 85% of inbound channels.",
        "Follow-up consistency: 100% of leads enter a defined nurture path.",
        "Dispatcher duplicate bookings projected to drop by 40%.",
      ],
      roi:
        "Projected annual savings of $48K in labor plus $120K recovered revenue from faster follow-up and reduced lead leakage—payback within 6 weeks of go-live for a 12-person sales team.",
    },
  },
  {
    id: "saas-conversion-landing",
    title: "PulseMetrics SaaS Landing System",
    category: "Web Development",
    description:
      "Conversion-optimized marketing site for a B2B analytics SaaS—with performance, SEO, and signup funnel integration.",
    fullDescription:
      "PulseMetrics is a concept high-performance landing experience built to turn cold traffic into qualified trials. The architecture prioritizes sub-second perceived load, persuasive narrative structure, and a Supabase-backed waitlist and demo-request pipeline wired for product-led growth experiments.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "CRO"],
    caseStudy: {
      challenge:
        "A pre-launch SaaS team needed a credible web presence that could rank for niche keywords, load instantly on mobile, and capture trial signups—without hiring a full marketing engineering squad. Their static page scored poorly on Core Web Vitals and had no integration with their product database or analytics stack.",
      solution:
        "I architected a React/Next.js landing system with server-rendered hero content, edge-cached assets, and a component library aligned to conversion best practices: social proof bands, feature comparison tables, pricing teasers, and friction-reduced signup modals. Supabase handles auth-ready waitlist storage, while event hooks feed experiment variants to the growth stack.",
      approach: [
        "Audited competitor landing pages and defined a narrative flow: problem → proof → product → CTA.",
        "Built a design system in Tailwind with reusable CRO sections and dark-mode brand consistency.",
        "Implemented Core Web Vitals optimizations: image CDN, font subsetting, route-level code splitting.",
        "Connected Supabase for lead capture, RLS-secured public inserts, and future trial activation.",
      ],
      stack: ["Next.js", "React", "Supabase", "Tailwind CSS", "Vercel", "Plausible Analytics"],
      results: [
        "LCP target: under 1.8s on 4G mobile profiles.",
        "Projected trial signup uplift of 35–50% vs. legacy single-page layout.",
        "SEO-ready structure with schema markup and programmatic meta templates.",
        "Single codebase extensible to pricing, docs, and changelog routes.",
      ],
      roi:
        "For a SaaS targeting $15K MRR in year one, a 2% absolute conversion lift on 10K monthly visitors can add ~$36K ARR—this build is designed to pay for itself in one successful launch cycle.",
    },
  },
  {
    id: "client-request-dashboard",
    title: "RequestHub Operations Dashboard",
    category: "Efficiency",
    description:
      "Internal command center to triage, assign, and resolve client requests with SLA tracking and team visibility.",
    fullDescription:
      "RequestHub is a concept internal operations dashboard that gives agencies and service firms one place to manage inbound client work—replacing scattered email threads and ad-hoc spreadsheets with structured queues, status workflows, and real-time workload balancing.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Dashboard", "Supabase", "React", "Workflow", "SLA"],
    caseStudy: {
      challenge:
        "A growing digital services studio handled 80+ client requests per week across email, Slack, and Notion—with no unified priority system. Managers couldn't see bottlenecks, SLAs were missed silently, and billable teams spent hours reconciling what was actually delivered vs. promised.",
      solution:
        "I designed a Supabase-powered request management dashboard with role-based views: intake queue for coordinators, kanban lanes for delivery teams, and executive summaries for leadership. Automated status transitions, SLA timers, and client-visible progress notes reduce coordination overhead while preserving audit history.",
      approach: [
        "Interviewed stakeholders to model request types, statuses, and escalation paths.",
        "Designed PostgreSQL schema with RLS policies per team role and client workspace.",
        "Built React dashboard UI with filters, bulk actions, and real-time subscription updates.",
        "Specified notification hooks (email/Slack) for SLA breaches and assignment changes.",
      ],
      stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Row Level Security"],
      results: [
        "Single source of truth for all open client work.",
        "SLA compliance visibility with automated breach warnings.",
        "Coordinator time on intake reduced by an estimated 6 hrs/week.",
        "Leadership reporting: live throughput and backlog aging metrics.",
      ],
      roi:
        "At $75/hr blended rate, recovering 6 hours weekly across coordinators yields ~$23K/year in capacity—plus fewer missed SLAs protecting client retention and upsell opportunities.",
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
