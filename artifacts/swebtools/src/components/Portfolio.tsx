import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Data Visualization",
    image: "/project-1.png"
  },
  {
    title: "Aura Commerce",
    category: "AI E-commerce",
    image: "/project-2.png"
  },
  {
    title: "OpsFlow Network",
    category: "Automation Pipeline",
    image: "/project-3.png"
  },
  {
    title: "RankAI",
    category: "SEO Analytics",
    image: "/project-4.png"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-muted-foreground text-lg">
              We don't just talk about the future. We build it. Explore our recent deployments for forward-thinking brands.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-semibold hover:underline">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border aspect-[4/3] block"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-mono text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/50 backdrop-blur-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;