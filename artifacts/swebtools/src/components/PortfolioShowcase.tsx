import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SiN8N, SiPython, SiSupabase, SiTwilio, SiStripe, SiHubspot, SiNotion, SiIntercom, SiMixpanel } from 'react-icons/si';

const projects = [
  {
    name: 'ShopMind AI',
    category: 'E-commerce',
    problem: '34% cart abandon, 2000+ manual tickets/day.',
    metrics: ['Cart abandonment -41%', 'Revenue +2.3M EUR/yr', 'Support costs -67%'],
    systems: 7,
    accent: 'green',
    stack: [SiN8N, SiSupabase],
    nodes: [
      { x: 20, y: 50 }, { x: 80, y: 20 }, { x: 140, y: 80 }, { x: 200, y: 50 }
    ]
  },
  {
    name: 'MediFlow',
    category: 'Healthcare',
    problem: '4h/day scheduling, 23% missed follow-ups.',
    metrics: ['No-show -58%', '240h/month saved', 'Insurance 2 days to 15min'],
    systems: 12,
    accent: 'blue',
    stack: [SiN8N, SiPython, SiSupabase, SiTwilio],
    nodes: [
      { x: 20, y: 30 }, { x: 80, y: 80 }, { x: 140, y: 20 }, { x: 200, y: 60 }
    ]
  },
  {
    name: 'SupportOS',
    category: 'Customer Support',
    problem: '18h response time, 40% simple FAQ tickets.',
    metrics: ['First response 18h to 47sec', 'CSAT 3.2 to 4.8', '62% ticket deflection'],
    systems: 8,
    accent: 'purple',
    stack: [SiN8N, SiIntercom, SiNotion],
    nodes: [
      { x: 20, y: 80 }, { x: 80, y: 20 }, { x: 140, y: 80 }, { x: 200, y: 20 }
    ]
  },
  {
    name: 'LeadForge',
    category: 'Marketing Automation',
    problem: '0.3% email reply rate, no lead scoring.',
    metrics: ['Reply rate 0.3% to 4.7%', 'Qualified leads +340%', 'Campaign time 40h to 3h'],
    systems: 6,
    accent: 'orange',
    stack: [SiN8N, SiHubspot],
    nodes: [
      { x: 20, y: 50 }, { x: 80, y: 50 }, { x: 140, y: 20 }, { x: 200, y: 80 }
    ]
  },
  {
    name: 'EstateIQ',
    category: 'Real Estate',
    problem: '60% time on lead qual, zero automated follow-up.',
    metrics: ['Lead qualify instant', 'Agent productivity +89%', 'Lead-to-showing +156%'],
    systems: 9,
    accent: 'teal',
    stack: [SiN8N, SiPython, SiSupabase],
    nodes: [
      { x: 20, y: 20 }, { x: 80, y: 80 }, { x: 140, y: 50 }, { x: 200, y: 50 }
    ]
  },
  {
    name: 'ScaleOS',
    category: 'SaaS Platform',
    problem: '2.1% trial conversion, 3 week manual onboarding.',
    metrics: ['Trial-to-paid 2.1% to 8.7%', 'Churn -44%', 'MRR +340K EUR/yr'],
    systems: 11,
    accent: 'pink',
    stack: [SiN8N, SiStripe, SiMixpanel],
    nodes: [
      { x: 20, y: 60 }, { x: 80, y: 30 }, { x: 140, y: 70 }, { x: 200, y: 40 }
    ]
  }
];

const PortfolioShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transformation Stories</h2>
          <p className="text-xl text-muted-foreground">Real businesses. Real automations. Measurable results.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden relative group"
            >
              <div className="h-40 bg-muted/20 relative overflow-hidden border-b border-border p-6 flex items-center justify-center">
                <svg viewBox="0 0 220 100" className="w-full max-w-sm h-full" preserveAspectRatio="xMidYMid meet">
                  <path
                    d={`M ${project.nodes[0].x} ${project.nodes[0].y} L ${project.nodes[1].x} ${project.nodes[1].y} L ${project.nodes[2].x} ${project.nodes[2].y} L ${project.nodes[3].x} ${project.nodes[3].y}`}
                    fill="none"
                    stroke="currentColor"
                    className="text-muted-foreground opacity-20"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {project.nodes.map((n, i) => (
                    <circle key={i} cx={n.x} cy={n.y} r="6" className={`fill-${project.accent}-500`} opacity="0.5" />
                  ))}
                  {project.nodes.map((n, i) => (
                    <circle key={`inner-${i}`} cx={n.x} cy={n.y} r="3" className="fill-foreground" />
                  ))}
                </svg>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                  </div>
                  <div className="text-xs px-3 py-1 bg-muted rounded-full border border-border whitespace-nowrap">
                    {project.systems} Systems
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.problem}</p>
                <motion.div
                  variants={{
                    hover: { height: 'auto', opacity: 1, marginTop: '1rem' },
                  }}
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mb-6">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {m}
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
                <div className="absolute bottom-6 right-8 flex gap-2">
                  {project.stack.map((Icon, i) => (
                    <Icon key={i} className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  ))}
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
