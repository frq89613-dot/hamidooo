const en = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    techStack: "Tech Stack",
    stats: "Stats",
    contact: "Contact Us",
  },
  hero: {
    badge: "Systems Online",
    headline: "Next-Gen AI Automation",
    subheadline:
      "We design, build, and deploy intelligent automation systems that run your business 24/7. Replace manual operations with precision AI agents.",
    ctaPrimary: "Start Automating",
    ctaSecondary: "View Our Work",
  },
  services: {
    sectionTitle: "Autonomous Solutions",
    sectionSubtitle:
      "We build specialized tools to handle the heavy lifting. Scalable, reliable, and perfectly integrated into your stack.",
    items: [
      {
        title: "AI E-commerce Agents",
        description:
          "Intelligent customer service and dynamic recommendations that increase conversion rates without human intervention.",
      },
      {
        title: "Workflow Automation (n8n)",
        description:
          "Complex pipeline architectures connecting all your business tools into a unified, autonomous system.",
      },
      {
        title: "High-Performance Web Dev",
        description:
          "Next.js & Tailwind applications optimized for absolute maximum speed and seamless user experience.",
      },
      {
        title: "AI-Enhanced SEO",
        description:
          "AI-driven data analysis to identify ranking opportunities and programmatically optimize content.",
      },
    ],
  },
  workflow: {
    sectionTitle: "Workflow Brain",
    sectionSubtitle:
      "See how data flows autonomously through our integrated systems.",
    nodes: {
      store: "Store",
      aiAgent: "AI Agent",
      engine: "Engine",
      database: "Database",
      customer: "Customer",
    },
    badges: {
      new: "new",
      processing: "processing",
      done: "done",
    },
  },
  techStack: {
    sectionTitle: "Powered by Elite Tech",
    sectionSubtitle:
      "We leverage the most advanced frameworks and models to ensure absolute reliability.",
  },
  performance: {
    sectionTitle: "Uncompromising Speed",
    sectionSubtitle:
      "We don't just build functional apps. We build lightning-fast experiences. Every millisecond counts when it comes to user retention and SEO ranking.",
    metrics: [
      { label: "First Contentful Paint", value: "< 0.8s" },
      { label: "Time to Interactive", value: "< 2.0s" },
      { label: "Cumulative Layout Shift", value: "0.00" },
    ],
    gaugeLabel: "Performance",
    gaugeCaption: "Google PageSpeed Insights Score — Our Standard",
  },
  portfolio: {
    sectionTitle: "Featured Work",
    sectionSubtitle:
      "We don't just talk about the future. We build it. Explore our recent deployments for forward-thinking brands.",
    viewAll: "View All Projects",
    projects: [
      { title: "FinTech Dashboard", category: "Data Visualization" },
      { title: "Aura Commerce", category: "AI E-commerce" },
      { title: "OpsFlow Network", category: "Automation Pipeline" },
      { title: "RankAI", category: "SEO Analytics" },
    ],
  },
  stats: {
    items: [
      { value: 500, suffix: "+", label: "Projects Automated" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
      { value: 10, suffix: "x", label: "Average ROI" },
      { value: 24, suffix: "/7", label: "AI Uptime", isText: true },
    ],
  },
  footer: {
    tagline:
      "Next-generation AI Automation & Digital Solutions agency. We build autonomous business systems powered by AI Agents.",
    nav: "Navigation",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "All rights reserved.",
  },
  langSwitcher: {
    label: "Language",
  },
} as const;

export default en;
