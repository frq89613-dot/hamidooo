import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const projects = [
  {
    name: 'ShopMind AI',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=75',
    problem: '34% cart abandonment, 2,000+ manual tickets per day, disconnected sales pipeline.',
    metrics: ['Cart abandonment −41%', 'Revenue +€2.3M / yr', 'Support costs −67%'],
    systems: 7,
    accent: '#00ff88',
    tags: ['n8n', 'Supabase', 'Groq'],
  },
  {
    name: 'MediFlow',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=75',
    problem: '4h / day on scheduling, 23% missed follow-ups, 2-day insurance prep cycle.',
    metrics: ['No-show rate −58%', '240h saved / month', 'Insurance: 2 days → 15 min'],
    systems: 12,
    accent: '#38bdf8',
    tags: ['n8n', 'Python', 'Twilio'],
  },
  {
    name: 'SupportOS',
    category: 'Customer Support',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=75',
    problem: '18h average response time, 40% simple FAQ tickets, rising agent burnout.',
    metrics: ['Response 18h → 47 sec', 'CSAT 3.2 → 4.8', 'Ticket deflection +62%'],
    systems: 8,
    accent: '#a78bfa',
    tags: ['n8n', 'Intercom', 'Notion'],
  },
  {
    name: 'LeadForge',
    category: 'Marketing Automation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75',
    problem: '0.3% email reply rate, zero lead scoring, 40h per campaign build.',
    metrics: ['Reply rate 0.3% → 4.7%', 'Qualified leads +340%', 'Campaign time −92%'],
    systems: 6,
    accent: '#fb923c',
    tags: ['n8n', 'HubSpot', 'GPT-4o'],
  },
  {
    name: 'EstateIQ',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=75',
    problem: '60% of agent time on lead qualification, zero automated follow-up sequence.',
    metrics: ['Lead qualify: instant', 'Agent productivity +89%', 'Lead-to-showing +156%'],
    systems: 9,
    accent: '#2dd4bf',
    tags: ['n8n', 'Python', 'Supabase'],
  },
  {
    name: 'ScaleOS',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75',
    problem: '2.1% trial-to-paid conversion, 3-week manual onboarding, high early churn.',
    metrics: ['Trial-to-paid 2.1% → 8.7%', 'Churn −44%', 'MRR +€340K / yr'],
    systems: 11,
    accent: '#f472b6',
    tags: ['n8n', 'Stripe', 'Mixpanel'],
  },
];

const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Case Portfolio</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transformation Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real businesses. Real automations. Measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 70% 50%, ${project.accent}40, transparent 70%)` }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm"
                    style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}15` }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm text-white/70">
                    <Zap className="w-3 h-3 inline mr-1" style={{ color: project.accent }} />
                    {project.systems} systems
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.problem}</p>

                <div className="space-y-2 mb-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: project.accent }}
                  >
                    Details <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
