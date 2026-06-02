import { Link } from "wouter";
import { Check, Zap } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
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

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/ month",
    description: "Automation audit + one high-impact workflow.",
    features: [
      "Discovery call & process mapping",
      "1 production n8n workflow",
      "Documentation & handoff",
      "Email support",
    ],
    cta: "Subscribe",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/ month",
    description: "Full funnel automation and web integration support.",
    features: [
      "Everything in Starter",
      "Up to 4 connected systems",
      "Landing page or dashboard slice",
      "Priority Slack support",
      "Monthly optimization review",
    ],
    cta: "Purchase",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "Dedicated automation + product engineering partner.",
    features: [
      "Unlimited workflow scope (SOW-based)",
      "Dedicated solution architect",
      "SLA-backed response times",
      "Team training & playbooks",
    ],
    cta: "Purchase",
    highlighted: false,
  },
];

function subscribeHref(plan: string): string {
  return `/signup?redirect=${encodeURIComponent("/pricing")}&intent=subscribe&plan=${encodeURIComponent(plan)}`;
}

export default function PricingPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Public pricing
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Simple plans. Serious outcomes.
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse pricing freely—create an account only when you&apos;re ready
              to subscribe or purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col border-border/80 bg-card/60 backdrop-blur-md ${
                  plan.highlighted
                    ? "border-primary/50 ring-1 ring-primary/30"
                    : ""
                }`}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="w-fit mb-2">Most popular</Badge>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold font-mono">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={subscribeHref(plan.name)} className="w-full">
                    <Button
                      className="w-full gap-2"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Zap className="h-4 w-4" />
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Already have an account?{" "}
            <Link href="/login?redirect=/pricing" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
