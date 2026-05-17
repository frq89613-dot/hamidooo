import { Zap, Target, Clock, TrendingUp, ArrowDown, GitBranch, Shield, BarChart2 } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SiNextdotjs, SiSupabase, SiN8N, SiPython, SiDocker, SiHubspot, SiStripe, SiTwilio } from 'react-icons/si';

const CountUp = ({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(start + (to - start) * easeProgress);
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(to);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

const MetricsSection = () => {
  const metrics = [
    { val: 4.7, suf: 'M+', label: 'Tasks/month', icon: Zap, dec: 1 },
    { val: 94, suf: '%', label: 'Accuracy rate', icon: Target, dec: 0 },
    { val: 12, suf: 's', label: 'AI response time', icon: Clock, dec: 0 },
    { val: 3.2, suf: 'M+', label: 'Revenue generated', icon: TrendingUp, dec: 1 },
    { val: 67, suf: '%', label: 'Cost reduction', icon: ArrowDown, dec: 0 },
    { val: 500, suf: '+', label: 'Workflows deployed', icon: GitBranch, dec: 0 },
    { val: 24, suf: '/7', label: 'System uptime', icon: Shield, dec: 0 },
    { val: 340, suf: '%', label: 'Average ROI', icon: BarChart2, dec: 0 }
  ];

  const logos = [SiNextdotjs, SiSupabase, SiN8N, SiPython, SiDocker, SiHubspot, SiStripe, SiTwilio];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Impact at Scale</h2>
          <p className="text-xl text-muted-foreground">Across 500+ automation projects, the numbers tell the story.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <Icon className="w-8 h-8 text-primary mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-2">
                  <CountUp to={m.val} suffix={m.suf} decimals={m.dec} />
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{m.label}</div>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden relative w-full border-y border-border py-8 bg-card/30">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-[200%] animate-marquee">
            {[...logos, ...logos].map((Logo, i) => (
              <div key={i} className="flex-1 flex justify-center items-center opacity-40 hover:opacity-100 transition-opacity">
                <Logo className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MetricsSection;
