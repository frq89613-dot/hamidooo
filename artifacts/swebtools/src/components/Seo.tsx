import { useEffect } from "react";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "@/lib/seo";

type StructuredData = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  robots?: string;
  structuredData?: StructuredData[];
  pathname?: string;
};

function updateTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const firstMeta = document.head.querySelector("meta");
    document.head.insertBefore(element, firstMeta);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(rel: string, href: string, attributes: Record<string, string> = {}) {
  const selector = Object.entries(attributes).reduce(
    (current, [key, value]) => `${current}[${key}='${value}']`,
    `link[rel='${rel}']`,
  );
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setScriptJsonLd(id: string, data: StructuredData) {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("id", id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeScriptJsonLd(id: string) {
  const script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (script) script.remove();
}

export function Seo({
  title,
  description,
  canonical,
  image = "/opengraph.jpg",
  robots = "index, follow",
  structuredData,
  pathname,
}: SeoProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    updateTag("meta[name='description']", {
      name: "description",
      content: description,
    });
    updateTag("meta[name='robots']", {
      name: "robots",
      content: robots,
    });
    updateTag("meta[property='og:type']", {
      property: "og:type",
      content: "website",
    });
    updateTag("meta[property='og:title']", {
      property: "og:title",
      content: title,
    });
    updateTag("meta[property='og:description']", {
      property: "og:description",
      content: description,
    });
    updateTag("meta[property='og:image']", {
      property: "og:image",
      content: `${canonical ?? SITE_URL}${image}`,
    });
    updateTag("meta[name='twitter:card']", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    updateTag("meta[name='twitter:title']", {
      name: "twitter:title",
      content: title,
    });
    updateTag("meta[name='twitter:description']", {
      name: "twitter:description",
      content: description,
    });
    updateTag("meta[name='twitter:image']", {
      name: "twitter:image",
      content: `${canonical ?? SITE_URL}${image}`,
    });
    updateTag("meta[name='twitter:site']", {
      name: "twitter:site",
      content: TWITTER_HANDLE,
    });

    const canonicalUrl = canonical ?? `${SITE_URL}${pathname ?? window.location.pathname}`;
    upsertLink("canonical", canonicalUrl);
    upsertLink("alternate", `${SITE_URL}/en`, { hreflang: "en" });
    upsertLink("alternate", `${SITE_URL}/ar`, { hreflang: "ar" });
    upsertLink("alternate", `${SITE_URL}/tr`, { hreflang: "tr" });
    upsertLink("alternate", `${SITE_URL}/ru`, { hreflang: "ru" });
    upsertLink("alternate", `${SITE_URL}/`, { hreflang: "x-default" });

    if (structuredData?.length) {
      structuredData.forEach((data, index) => setScriptJsonLd(`seo-jsonld-${index}`, data));
    }

    return () => {
      if (structuredData?.length) {
        structuredData.forEach((_data, index) => removeScriptJsonLd(`seo-jsonld-${index}`));
      }
    };
  }, [title, description, canonical, image, robots, structuredData, pathname]);

  return null;
}
