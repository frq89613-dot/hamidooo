import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";

const servicePlans = [
  {
    name: "Starter Website",
    price: "$299",
    period: "",
    description: "A fast, polished website with lead capture, responsive layout, and launch-ready SEO.",
    features: [
      "Up to 5 custom pages",
      "Responsive mobile-first design",
      "Contact form and lead capture",
      "Basic on-page SEO",
    ],
    cta: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "$599",
    period: "",
    description: "A scalable website with blog, analytics, conversion-focused pages, and stronger SEO performance.",
    features: [
      "Up to 15 pages",
      "Blog or resource section",
      "Advanced SEO and analytics",
      "Conversion-focused page structure",
    ],
    cta: "Choose Business",
    highlighted: true,
  },
  {
    name: "Enterprise Website",
    price: "Custom Quote",
    period: "",
    description: "Custom website systems, API integrations, and dedicated product support for complex brands.",
    features: [
      "Unlimited pages and content models",
      "Custom integrations and features",
      "Enterprise security and performance",
      "Dedicated support and launch planning",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
];

const automationPlans = [
  {
    name: "Automation Starter",
    price: "$299",
    description: "Start automating lead capture, follow-up, and routine operations with a reliable first workflow.",
    features: [
      "Lead capture and routing",
      "Email follow-up sequences",
      "Basic CRM integration",
    ],
    cta: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Business Automation",
    price: "$799",
    description: "Deploy AI-assisted workflows that qualify leads, route tasks, and reduce manual operations.",
    features: [
      "Conversational intake and routing",
      "CRM and support system sync",
      "Multi-step automation journeys",
    ],
    cta: "Choose Business",
    highlighted: true,
  },
  {
    name: "Enterprise Automation",
    price: "Custom Quote",
    description: "Full automation programs, AI agents, and enterprise-grade integration for highly connected operations.",
    features: [
      "Custom AI workflows",
      "Enterprise system integrations",
      "Dedicated automation strategy",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
];

const saasPlans = [
  {
    name: "MVP SaaS",
    price: "$500",
    description: "Launch a lightweight, validated SaaS product with core features, auth, and user onboarding.",
    features: [
      "Basic subscription flow",
      "User authentication",
      "Dashboard and admin access",
    ],
    cta: "Choose MVP",
    highlighted: false,
  },
  {
    name: "Growth SaaS",
    price: "$2500",
    description: "Build a scalable SaaS product with advanced UX, analytics, and retention-focused automation.",
    features: [
      "Subscription tiers and billing",
      "Analytics and reporting",
      "AI-enabled onboarding flows",
      "Growth optimization features",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise SaaS",
    price: "Custom Quote",
    description: "Enterprise SaaS architecture with security, API connectivity, and custom product experiences.",
    features: [
      "Scalable platform architecture",
      "AI-enabled product capabilities",
      "Enterprise security and compliance",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
];

const maintenancePlans = [
  {
    name: "Starter Care",
    price: "$99/month",
    description: "Basic updates, monitoring, and monthly performance checks.",
  },
  {
    name: "Growth Care",
    price: "$149/month",
    description: "Routine optimizations, analytics review, and prioritized support.",
  },
  {
    name: "Business Care",
    price: "$399/month",
    description: "Dedicated maintenance, feature support, and growth planning.",
  },
];

function actionUrl(label: string) {
  return `/signup?redirect=/pricing&intent=plan&plan=${encodeURIComponent(label)}`;
}

export default function PricingPage() {
  return (
    <SiteLayout>
      <Seo
        title="Pricing for AI Automation, SaaS Development, and Web Services"
        description="Explore transparent pricing for website development, AI automation, SaaS product builds, and maintenance plans from an international AI agency."
        canonical="https://sweb.tools/pricing"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Transparent agency pricing
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Pricing built for growth and clarity
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the right package for your website, automation, or SaaS product and see how we support fast launches and scalable systems.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Website Development</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {servicePlans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`flex flex-col border-border/80 bg-card/60 backdrop-blur-md ${
                      plan.highlighted ? "border-primary/50 ring-1 ring-primary/30" : ""
                    }`}
                  >
                    <CardHeader>
                      {plan.highlighted && (
                        <Badge className="w-fit mb-2">Most popular</Badge>
                      )}
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-3xl font-bold font-mono">{plan.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={actionUrl(plan.name)} className="w-full">
                        <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">AI Automation</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {automationPlans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`flex flex-col border-border/80 bg-card/60 backdrop-blur-md ${
                      plan.highlighted ? "border-primary/50 ring-1 ring-primary/30" : ""
                    }`}
                  >
                    <CardHeader>
                      {plan.highlighted && (
                        <Badge className="w-fit mb-2">Most popular</Badge>
                      )}
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-3xl font-bold font-mono">{plan.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={actionUrl(plan.name)} className="w-full">
                        <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">SaaS Development</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {saasPlans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`flex flex-col border-border/80 bg-card/60 backdrop-blur-md ${
                      plan.highlighted ? "border-primary/50 ring-1 ring-primary/30" : ""
                    }`}
                  >
                    <CardHeader>
                      {plan.highlighted && (
                        <Badge className="w-fit mb-2">Most popular</Badge>
                      )}
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-3xl font-bold font-mono">{plan.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={actionUrl(plan.name)} className="w-full">
                        <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-10 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Package comparison</h2>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Compare how our starter, business, and enterprise offerings differ across website, automation, and SaaS programs.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-left">
                <thead>
                  <tr>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Feature</th>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Starter</th>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Business</th>
                    <th className="border-b border-border px-4 py-4 text-sm font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Launch timeline</td>
                    <td className="border-b border-border px-4 py-4">2-4 weeks</td>
                    <td className="border-b border-border px-4 py-4">4-8 weeks</td>
                    <td className="border-b border-border px-4 py-4">Custom pace</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Scope</td>
                    <td className="border-b border-border px-4 py-4">Core functionality</td>
                    <td className="border-b border-border px-4 py-4">Expanded features</td>
                    <td className="border-b border-border px-4 py-4">Custom systems</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Integrations</td>
                    <td className="border-b border-border px-4 py-4">Standard APIs</td>
                    <td className="border-b border-border px-4 py-4">Advanced systems</td>
                    <td className="border-b border-border px-4 py-4">Enterprise-grade</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="border-b border-border px-4 py-4">Support</td>
                    <td className="border-b border-border px-4 py-4">Standard launch support</td>
                    <td className="border-b border-border px-4 py-4">Priority delivery</td>
                    <td className="border-b border-border px-4 py-4">Dedicated team</td>
                  </tr>
                  <tr className="even:bg-muted/10">
                    <td className="px-4 py-4">Ideal for</td>
                    <td className="px-4 py-4">New launches and small teams</td>
                    <td className="px-4 py-4">Growth-stage brands</td>
                    <td className="px-4 py-4">Complex enterprise programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-10 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Monthly Maintenance Plans</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {maintenancePlans.map((plan) => (
                <div key={plan.name} className="rounded-3xl border border-border bg-background/80 p-6">
                  <p className="text-xl font-semibold mb-3">{plan.name}</p>
                  <p className="text-3xl font-bold mb-3">{plan.price}</p>
                  <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
