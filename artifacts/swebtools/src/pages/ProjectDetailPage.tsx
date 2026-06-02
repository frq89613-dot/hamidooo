import { Link, useRoute } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { GetStartedForm } from "@/components/GetStartedForm";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import NotFound from "@/pages/not-found";

export default function ProjectDetailPage() {
  const [, params] = useRoute("/projects/:id");
  const project = params?.id ? getProjectById(params.id) : undefined;

  if (!project) {
    return <NotFound />;
  }

  const { caseStudy } = project;

  return (
    <SiteLayout>
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/portfolio">
            <Button variant="outline" size="sm" className="gap-2 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <header className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-primary">
                  {project.category} · Case Study
                </p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              <div className="rounded-xl overflow-hidden border border-border/80">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">The challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">The solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Approach</h2>
                <ul className="space-y-3">
                  {caseStudy.approach.map((step) => (
                    <li key={step} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Technical stack</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Expected results</h2>
                <ul className="space-y-2">
                  {caseStudy.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-2 text-muted-foreground before:content-['•'] before:text-primary"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-2">Expected ROI</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.roi}
                </p>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <GetStartedForm
                  projectId={project.id}
                  projectTitle={project.title}
                />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
