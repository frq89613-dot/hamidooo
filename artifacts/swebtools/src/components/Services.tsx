import { motion } from 'framer-motion';
import { Bot, GitMerge, Zap, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "AI E-commerce Agents",
    description: "Intelligent customer service and dynamic recommendations that increase conversion rates without human intervention."
  },
  {
    icon: GitMerge,
    title: "Workflow Automation (n8n)",
    description: "Complex pipeline architectures connecting all your business tools into a unified, autonomous system."
  },
  {
    icon: Zap,
    title: "High-Performance Web Dev",
    description: "Next.js & Tailwind applications optimized for absolute maximum speed and seamless user experience."
  },
  {
    icon: LineChart,
    title: "AI-Enhanced SEO",
    description: "AI-driven data analysis to identify ranking opportunities and programmatically optimize content."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Autonomous Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We build specialized tools to handle the heavy lifting. Scalable, reliable, and perfectly integrated into your stack.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 25px rgba(0, 229, 255, 0.15)"
              }}
              className="group relative p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Border glow */}
              <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/50 rounded-xl transition-colors duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;