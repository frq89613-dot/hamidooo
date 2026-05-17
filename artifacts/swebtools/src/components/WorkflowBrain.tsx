import { motion } from 'framer-motion';
import { ShoppingCart, Bot, Database, User } from 'lucide-react';

const WorkflowBrain = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Workflow Brain</h2>
          <p className="text-muted-foreground text-lg">
            See how data flows autonomously through our integrated systems.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
          {/* Connection Lines (SVG) — uses viewBox 0 0 100 100, coordinates are % equivalents */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* E-commerce Store → AI Agent */}
            <path id="path1" d="M18 50 L37 27" stroke="rgba(0,255,136,0.3)" strokeWidth="0.4" strokeDasharray="2,2" fill="none" filter="url(#glow)" />
            {/* AI Agent → n8n */}
            <path id="path2" d="M43 27 L57 50" stroke="rgba(0,229,255,0.3)" strokeWidth="0.4" strokeDasharray="2,2" fill="none" filter="url(#glow)" />
            {/* n8n → Database */}
            <path id="path3" d="M63 50 L79 27" stroke="rgba(0,255,136,0.3)" strokeWidth="0.4" strokeDasharray="2,2" fill="none" filter="url(#glow)" />
            {/* n8n → Customer */}
            <path id="path4" d="M63 50 L79 73" stroke="rgba(0,229,255,0.3)" strokeWidth="0.4" strokeDasharray="2,2" fill="none" filter="url(#glow)" />

            {/* Animated data packets — glowing dots traveling along paths */}
            <circle r="0.8" fill="#00FF88">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M18 50 L37 27" />
            </circle>
            <circle r="0.8" fill="#00E5FF">
              <animateMotion dur="2s" repeatCount="indefinite" begin="0.8s" path="M43 27 L57 50" />
            </circle>
            <circle r="0.8" fill="#00FF88">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.6s" path="M63 50 L79 27" />
            </circle>
            <circle r="0.8" fill="#00E5FF">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1s" path="M63 50 L79 73" />
            </circle>
          </svg>

          {/* Nodes */}
          <div className="w-full h-full relative">
            {/* E-commerce Store */}
            <motion.div 
              className="absolute left-[10%] top-[45%] md:left-[5%] md:top-[40%] flex flex-col items-center"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <ShoppingCart className="text-foreground" />
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-mono rounded-full border border-primary/30">new</div>
              </div>
              <span className="mt-2 text-sm font-medium">Store</span>
            </motion.div>

            {/* AI Agent */}
            <motion.div 
              className="absolute left-[35%] top-[20%] md:left-[30%] md:top-[40%] flex flex-col items-center"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 backdrop-blur-md border border-secondary/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                <Bot className="text-secondary" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 border-2 border-secondary rounded-xl"
                />
              </div>
              <span className="mt-2 text-sm font-medium">AI Agent</span>
            </motion.div>

            {/* n8n */}
            <motion.div 
              className="absolute left-[55%] top-[45%] md:left-[55%] md:top-[40%] flex flex-col items-center"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 backdrop-blur-md border border-primary/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                <span className="font-bold text-primary font-mono text-xl">n8n</span>
                <div className="absolute -bottom-2 -left-2 px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-mono rounded-full border border-primary/30">processing</div>
              </div>
              <span className="mt-2 text-sm font-medium">Engine</span>
            </motion.div>

            {/* DB */}
            <motion.div 
              className="absolute left-[75%] top-[20%] md:left-[80%] md:top-[20%] flex flex-col items-center"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Database className="text-foreground" />
              </div>
              <span className="mt-2 text-sm font-medium">Database</span>
            </motion.div>

            {/* Customer */}
            <motion.div 
              className="absolute left-[75%] top-[65%] md:left-[80%] md:top-[60%] flex flex-col items-center"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <User className="text-foreground" />
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-mono rounded-full border border-green-500/30">done</div>
              </div>
              <span className="mt-2 text-sm font-medium">Customer</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowBrain;