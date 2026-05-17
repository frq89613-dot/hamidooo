import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Performance = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [score, setScore] = useState(0);

  const metrics = t('performance.metrics', { returnObjects: true }) as Array<{ label: string; value: string }>;

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= 99) {
          setScore(99);
          clearInterval(interval);
        } else {
          setScore(current);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">{t('performance.sectionTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('performance.sectionSubtitle')}</p>

            <div className="flex flex-col gap-4 mt-6">
              {metrics.map((metric, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="font-medium">{metric.label}</span>
                  <span className="font-mono text-primary font-bold">{metric.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" />
                <motion.circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={isInView ? { strokeDashoffset: 283 - ((score / 100) * 213) } : { strokeDashoffset: 283 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary)))' }}
                />
              </svg>

              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold font-mono text-primary flex items-baseline justify-center">
                  {score}<span className="text-3xl text-primary/70">+</span>
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2 font-medium">
                  {t('performance.gaugeLabel')}
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-muted-foreground font-medium">
              {t('performance.gaugeCaption')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
