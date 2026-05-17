import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const WorkflowShowcase = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, label: 'Webhook', x: 10, y: 10 },
    { id: 1, label: 'Filter', x: 50, y: 10 },
    { id: 2, label: 'AI Agent', x: 90, y: 10 },
    { id: 3, label: 'Database', x: 10, y: 50 },
    { id: 4, label: 'Email', x: 50, y: 50 },
    { id: 5, label: 'WhatsApp', x: 90, y: 50 },
    { id: 6, label: 'CRM', x: 10, y: 90 },
    { id: 7, label: 'Report', x: 50, y: 90 },
  ];

  const paths = [
    { start: 0, end: 1 }, { start: 1, end: 2 }, { start: 1, end: 3 },
    { start: 2, end: 4 }, { start: 3, end: 6 }, { start: 4, end: 5 },
    { start: 5, end: 7 }, { start: 6, end: 7 }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Automation Brain</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Watch your business run itself</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Powered by n8n orchestration, our central intelligence layer connects all your tools, applies AI logic, and executes workflows with zero human intervention.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Zero Downtime', 'Auto-Scaling', 'Real-time Logging', 'Smart Error Recovery'].map((f) => (
                <div key={f} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {f}
                </div>
              ))}
            </div>
            <button className="h-12 px-6 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
              See How It Works
            </button>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] bg-card/50 backdrop-blur-xl border border-border rounded-2xl overflow-hidden p-8 shadow-2xl">
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE
            </div>
            
            <div className="relative w-full h-[calc(100%-3rem)] mt-4">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                {paths.map((p, i) => {
                  const start = nodes[p.start];
                  const end = nodes[p.end];
                  return (
                    <g key={i}>
                      <path
                        id={`path-${i}`}
                        d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                      />
                      <circle r="1" fill="#00FF88">
                        <animateMotion dur={`${2 + i * 0.5}s`} repeatCount="indefinite" path={`M ${start.x} ${start.y} L ${end.x} ${end.y}`} />
                      </circle>
                    </g>
                  );
                })}
              </svg>
              
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    activeNode === node.id 
                      ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(0,255,136,0.4)] text-primary' 
                      : 'bg-background border-border text-muted-foreground'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <Play className="w-5 h-5" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full p-3 bg-muted/50 border-t border-border text-xs font-mono text-muted-foreground flex justify-between">
              <span>12 workflows running</span>
              <span>1,247 tasks/hr</span>
              <span className="text-primary">0 errors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
