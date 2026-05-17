import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const duration = 2000;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * to);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(to);
    };
    requestAnimationFrame(animate);
  }, [isInView, to]);

  return <span ref={ref}>{Number.isInteger(to) ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
};

const studies = [
  {
    industry: 'E-commerce',
    name: 'ShopMind AI',
    headline: 'How AI Recovered €2.3M in Abandoned Carts',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=75',
    accent: '#00ff88',
    problems: [
      '34% cart abandonment rate',
      '2,000+ manual tickets daily',
      'Disconnected sales and support data',
    ],
    solutions: [
      'n8n real-time cart activity listener',
      'Groq-powered personalized recovery emails',
      'Supabase unified customer state management',
    ],
    results: [
      { val: 41, suf: '%', label: 'Less Abandonment' },
      { val: 2.3, suf: 'M', label: 'Revenue Added' },
    ],
    quote: '"The ROI was immediate. We stopped bleeding sales overnight."',
    author: 'Head of Growth, ShopMind',
  },
  {
    industry: 'Healthcare',
    name: 'MediFlow',
    headline: 'Eliminating the 4-Hour Daily Scheduling Drain',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=75',
    accent: '#38bdf8',
    problems: [
      '4h / day manual scheduling drain',
      '23% missed patient follow-ups',
      'Insurance prep taking 2 full days',
    ],
    solutions: [
      'Automated Twilio SMS appointment reminders',
      'n8n deep integration with clinic CRM',
      'Python AI insurance document parsing',
    ],
    results: [
      { val: 58, suf: '%', label: 'Fewer No-shows' },
      { val: 240, suf: 'h', label: 'Saved Monthly' },
    ],
    quote: '"Our staff finally has time to focus on actual patient care."',
    author: 'Practice Manager, MediFlow',
  },
  {
    industry: 'Customer Support',
    name: 'SupportOS',
    headline: 'From 18 Hours to 47 Seconds: The Support Revolution',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75',
    accent: '#a78bfa',
    problems: [
      '18h average first response time',
      '40% of tickets were simple FAQs',
      'Agent burnout driving high turnover',
    ],
    solutions: [
      'Groq semantic ticket classification and routing',
      'Intercom AI auto-replies for FAQ deflection',
      'Notion knowledge base real-time sync',
    ],
    results: [
      { val: 47, suf: 's', label: 'Avg Response' },
      { val: 62, suf: '%', label: 'Ticket Deflection' },
    ],
    quote: '"Our CSAT jumped to 4.8. Customers think we hired 50 new agents."',
    author: 'VP Support, SupportOS',
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Deep Dives</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Behind the Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The exact systems we built and the results they produced.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col rounded-2xl overflow-hidden border border-border bg-background"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, ${study.accent}50, transparent 70%)` }}
                />
                <div className="absolute bottom-4 left-5">
                  <div className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: study.accent }}>
                    {study.industry}
                  </div>
                  <h3 className="text-lg font-bold text-white">{study.name}</h3>
                </div>
              </div>

              <div className="flex flex-col gap-5 p-6 flex-1">
                <p className="text-base font-semibold text-foreground leading-snug">{study.headline}</p>

                <div className="bg-red-500/8 border border-red-500/20 p-4 rounded-xl">
                  <ul className="space-y-2.5">
                    {study.problems.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-red-400">
                        <X className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0 text-muted-foreground" />
                </div>

                <div className="bg-green-500/8 border border-green-500/20 p-4 rounded-xl">
                  <ul className="space-y-2.5">
                    {study.solutions.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-green-400">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-end pt-2">
                  {study.results.map((r, i) => (
                    <div key={i}>
                      <div className="text-3xl font-mono font-bold" style={{ color: study.accent }}>
                        <CountUp to={r.val} suffix={r.suf} />
                      </div>
                      <div className="text-xs text-muted-foreground uppercase mt-0.5">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-border">
                  <p className="text-sm italic text-muted-foreground mb-2">{study.quote}</p>
                  <p className="text-xs text-muted-foreground/60">— {study.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
