import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  const items = t('stats.items', { returnObjects: true }) as Array<{
    value: number;
    suffix: string;
    label: string;
    isText?: boolean;
  }>;

  return (
    <section id="stats" className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="text-center"
              data-testid={`stat-item-${i}`}
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
