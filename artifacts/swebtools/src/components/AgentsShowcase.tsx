import { Target, HeartPulse, Settings2, BarChart3, PenLine, Network } from 'lucide-react';

const agents = [
  {
    name: 'Sales Intelligence Agent',
    icon: Target,
    color: 'text-[#00FF88]',
    bg: 'bg-[#00FF88]/10',
    border: 'group-hover:border-[#00FF88]/50',
    projects: 23,
    capabilities: ['Prospect scoring', 'Personalized outreach', 'Pipeline forecasting'],
  },
  {
    name: 'Customer Success Agent',
    icon: HeartPulse,
    color: 'text-[#00E5FF]',
    bg: 'bg-[#00E5FF]/10',
    border: 'group-hover:border-[#00E5FF]/50',
    projects: 18,
    capabilities: ['Churn prediction', 'Health monitoring', 'Retention triggers'],
  },
  {
    name: 'Operations Agent',
    icon: Settings2,
    color: 'text-[#a855f7]',
    bg: 'bg-[#a855f7]/10',
    border: 'group-hover:border-[#a855f7]/50',
    projects: 31,
    capabilities: ['Task routing', 'SLA monitoring', 'Smart escalation'],
  },
  {
    name: 'Data Intelligence Agent',
    icon: BarChart3,
    color: 'text-[#f97316]',
    bg: 'bg-[#f97316]/10',
    border: 'group-hover:border-[#f97316]/50',
    projects: 12,
    capabilities: ['Real-time analytics', 'Anomaly detection', 'Automated reporting'],
  },
  {
    name: 'Content Engine Agent',
    icon: PenLine,
    color: 'text-[#ec4899]',
    bg: 'bg-[#ec4899]/10',
    border: 'group-hover:border-[#ec4899]/50',
    projects: 8,
    capabilities: ['SEO content', 'Social media', 'Email campaigns'],
  },
  {
    name: 'Integration Bridge Agent',
    icon: Network,
    color: 'text-[#14b8a6]',
    bg: 'bg-[#14b8a6]/10',
    border: 'group-hover:border-[#14b8a6]/50',
    projects: 27,
    capabilities: ['System sync', 'Data pipelines', 'API orchestration'],
  }
];

const AgentsShowcase = () => {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Your AI Workforce</h2>
          <p className="text-xl text-muted-foreground">Specialized agents that think, decide, and act.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, idx) => {
            const Icon = agent.icon;
            return (
              <div key={idx} className={`group bg-background p-6 rounded-2xl border border-border transition-all duration-300 hover:shadow-2xl ${agent.border}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${agent.bg} ${agent.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{agent.name}</h3>
                    <div className="text-xs font-mono text-muted-foreground mt-1">Active in {agent.projects} projects</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {agent.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-border group-hover:bg-current transition-colors" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentsShowcase;
