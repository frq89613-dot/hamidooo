export const SITE_URL = "https://sweb.tools";
export const SITE_NAME = "Sweb.Tools";
export const SITE_DESCRIPTION =
  "Sweb.Tools builds AI automation, chatbot development, workflow automation, and high-performance web development for modern businesses.";
export const DEFAULT_IMAGE = "/opengraph.jpg";
export const TWITTER_HANDLE = "@swebtools";

export type BreadcrumbItem = {
  position: number;
  name: string;
  item: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceSchemaOptions = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export function createBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };
}

export function createFaqPage(items: FAQItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createServiceSchema(options: ServiceSchemaOptions) {
  return {
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: options.url,
    serviceType: options.serviceType ?? "Professional Service",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export const organizationSchema = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@sweb.tools",
    },
  ],
  sameAs: ["https://twitter.com/swebtools"],
};

export const websiteSchema = {
  "@type": "WebSite",
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: "+963988366684",
  email: "hello@sweb.tools",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SY",
    addressRegion: "Damascus",
  },
};
