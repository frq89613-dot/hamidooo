import { useMemo, useState } from "react";
import { useRoute } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { organizationSchema, websiteSchema, localBusinessSchema, createBreadcrumbList } from "@/lib/seo";

const tools = {
  "roi-calculator": {
    title: "ROI Calculator",
    description: "Estimate monthly savings, annual value, and ROI for employee time lost to manual work.",
    fields: [
      { name: "employeeCount", label: "Employee Count", placeholder: "e.g. 10" },
      { name: "weeklyHours", label: "Weekly Hours Lost", placeholder: "e.g. 25" },
      { name: "hourlyCost", label: "Hourly Cost", placeholder: "e.g. 25" },
    ],
  },
  "seo-title-generator": {
    title: "SEO Title Generator",
    description: "Create optimized titles for AI automation, SaaS, and web development pages.",
    fields: [
      { name: "topic", label: "Page Topic", placeholder: "e.g. AI automation services" },
    ],
  },
  "meta-description-generator": {
    title: "Meta Description Generator",
    description: "Write compelling meta descriptions designed for conversions and search visibility.",
    fields: [
      { name: "service", label: "Service or Topic", placeholder: "e.g. Workflow automation" },
    ],
  },
  "ai-prompt-generator": {
    title: "AI Prompt Generator",
    description: "Generate prompts for chatbots, automation workflows, and content tools.",
    fields: [
      { name: "useCase", label: "Use Case", placeholder: "e.g. lead qualification chatbot" },
    ],
  },
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

export default function ToolPage() {
  const [, params] = useRoute("/tools/:slug");
  const slug = params?.slug ?? "";
  const tool = tools[slug as keyof typeof tools];
  const [values, setValues] = useState<Record<string, string>>({});

  const output = useMemo(() => {
    if (!tool) return "";
    if (slug === "roi-calculator") {
      const employeeCount = Number(values.employeeCount ?? 0);
      const weeklyHours = Number(values.weeklyHours ?? 0);
      const hourlyCost = Number(values.hourlyCost ?? 0);
      const monthlySavings = employeeCount * weeklyHours * hourlyCost * 4;
      const annualSavings = monthlySavings * 12;
      const roi = monthlySavings ? Math.round((annualSavings / Math.max(1, monthlySavings)) * 100) : 0;
      return {
        monthly: monthlySavings,
        annual: annualSavings,
        roi,
      };
    }
    if (slug === "seo-title-generator") {
      const topic = values.topic?.trim() ?? "AI automation services";
      return `AI Automation & SaaS Agency | ${topic}`;
    }
    if (slug === "meta-description-generator") {
      const service = values.service?.trim() ?? "automation services";
      return `Boost conversions with premium ${service} from Sweb.Tools. AI-powered workflows, web development, and SaaS solutions for growth-focused teams.`;
    }
    if (slug === "ai-prompt-generator") {
      const useCase = values.useCase?.trim() ?? "lead qualification chatbot";
      return `Create a high-converting AI prompt for ${useCase} that captures leads, understands intent, and routes requests to the right workflow.`;
    }
    return "";
  }, [slug, tool, values]);

  if (!tool) {
    return (
      <SiteLayout>
        <section className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Tool not found</h1>
            <p className="text-muted-foreground">Please select a valid tool from the tools hub.</p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <Seo
        title={`${tool.title} | Free Tool`}
        description={tool.description}
        canonical={`https://sweb.tools/tools/${slug}`}
        image="/opengraph.jpg"
        structuredData={[
          organizationSchema,
          websiteSchema,
          localBusinessSchema,
          createBreadcrumbList([
            { position: 1, name: "Home", item: "https://sweb.tools/" },
            { position: 2, name: "Tools", item: "https://sweb.tools/tools" },
            { position: 3, name: tool.title, item: `https://sweb.tools/tools/${slug}` },
          ]),
        ]}
      />
      <section className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Free tool</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{tool.description}</p>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm">
            <form className="grid gap-6">
              {tool.fields.map((field) => (
                <label key={field.name} className="space-y-2 text-sm text-foreground">
                  <span className="font-semibold">{field.label}</span>
                  <input
                    type="text"
                    name={field.name}
                    value={values[field.name] ?? ""}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        [field.name]: event.target.value,
                      }))
                    }
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                  />
                </label>
              ))}

              {slug === "roi-calculator" && (
                <div className="rounded-3xl border border-border bg-slate-950/90 p-6 text-white">
                  <p className="text-sm text-muted-foreground mb-4">Estimated automation value</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-background/80 p-4">
                      <p className="text-sm text-muted-foreground">Monthly Savings</p>
                      <p className="text-2xl font-bold">${formatNumber(Number((output as any)?.monthly ?? 0))}</p>
                    </div>
                    <div className="rounded-2xl bg-background/80 p-4">
                      <p className="text-sm text-muted-foreground">Annual Savings</p>
                      <p className="text-2xl font-bold">${formatNumber(Number((output as any)?.annual ?? 0))}</p>
                    </div>
                    <div className="rounded-2xl bg-background/80 p-4">
                      <p className="text-sm text-muted-foreground">Projected ROI</p>
                      <p className="text-2xl font-bold">{Number((output as any)?.roi ?? 0)}%</p>
                    </div>
                  </div>
                </div>
              )}

              {slug !== "roi-calculator" && output && (
                <div className="rounded-3xl border border-border bg-slate-950/90 p-6 text-white">
                  <p className="text-sm text-muted-foreground mb-4">Generated output</p>
                  <p className="leading-relaxed">{output as string}</p>
                </div>
              )}

              <button
                type="button"
                className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
              >
                Generate result
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
