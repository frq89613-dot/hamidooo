import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

type PortfolioSectionProps = {
  showHeader?: boolean;
  limit?: number;
};

export function PortfolioSection({
  showHeader = true,
  limit,
}: PortfolioSectionProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {showHeader && (
          <div className="mb-16 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              Concept Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Case studies &amp; technical proof
            </h2>
            <p className="text-lg text-muted-foreground">
              Three concept projects showcasing automation, high-performance web
              builds, and internal efficiency systems—each with a full technical
              breakdown.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Link href={`/projects/${project.id}`}>
                <Card className="group h-full overflow-hidden border-border/80 bg-card/60 backdrop-blur-md hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                          {project.category}
                        </p>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioSection;
