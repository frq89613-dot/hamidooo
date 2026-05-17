import { motion, useInView } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
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

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
};

const studies = [
  {
    industry: 'E-commerce',
    name: 'ShopMind AI',
    headline: 'How AI Rescued €2.3M in Abandoned Carts',
    problems: ['34% cart abandonment rate', '2000+ manual tickets daily', 'Disconnect between sales and support'],
    solutions: ['n8n cart activity listener', 'Groq-powered personalized recovery emails', 'Supabase state management'],
    results: [{ val: 41, suf: '%', label: 'Less Abandonment' }, { val: 2.3, suf: 'M', label: 'Added Revenue' }],
    quote: '"The ROI was immediate. We stopped bleeding sales overnight."',
  },
  {
    industry: 'Healthcare',
    name: 'MediFlow',
    headline: 'Eliminating the 4-Hour Daily Scheduling Drain',
    problems: ['4h/day manual scheduling', '23% missed follow-ups', 'Insurance prep taking 2 days'],
    solutions: ['Automated Twilio SMS reminders', 'n8n integration with clinic CRM', 'Python-based insurance document parsing'],
    results: [{ val: 58, suf: '%', label: 'Fewer No-shows' }, { val: 240, suf: 'h', label: 'Saved Monthly' }],
    quote: '"Our staff finally has time to focus on actual patient care instead of phones."',
  },
  {
    industry: 'Customer Support',
    name: 'SupportOS',
    headline: 'From 18 Hours to 47 Seconds: The Support Revolution',
    problems: ['18h average response time', '40% simple FAQ tickets', 'Agent burnout and high turnover'],
    solutions: ['Groq semantic ticket routing', 'Intercom auto-replies for FAQs', 'Notion knowledge base sync'],
    results: [{ val: 47, suf: 's', label: 'Avg Response Time' }, { val: 62, suf: '%', label: 'Ticket Deflection' }],
    quote: '"Our CSAT jumped to 4.8. Customers think we hired 50 new agents."',
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="text-xs font-mono text-primary mb-2 uppercase">{study.industry}</div>
                <h3 className="text-xl font-bold mb-1">{study.name}</h3>
                <p className="text-lg text-muted-foreground font-medium">{study.headline}</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-xl">
                <ul className="space-y-3">
                  {study.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-red-400">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center text-primary">
                <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
              </div>

              <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-xl">
                <ul className="space-y-3">
                  {study.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-green-400">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-end mt-4">
                {study.results.map((r, i) => (
                  <div key={i}>
                    <div className="text-4xl font-mono font-bold text-foreground">
                      <CountUp to={r.val} suffix={r.suf} />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm italic text-muted-foreground">{study.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
