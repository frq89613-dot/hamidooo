import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CountUp = ({ to, suffix = "", prefix = "", decimals = 0 }: { to: number, suffix?: string, prefix?: string, decimals?: number }) => {
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
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(start + (to - start) * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const stats = [
  { value: 500, suffix: "+", label: "Projects Automated" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "x", label: "Average ROI" },
  { value: 24, suffix: "/7", label: "AI Uptime", isText: true }
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-foreground mb-4">
                {stat.isText ? (
                  <span>{stat.value}{stat.suffix}</span>
                ) : (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;