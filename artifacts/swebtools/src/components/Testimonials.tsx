const testimonials = [
  {
    name: 'Sara K.',
    role: 'Head of E-commerce, FashionForward GmbH',
    quote: '"We were drowning in manual processes. SwebTools built us an AI system that now handles 85% of our customer interactions automatically. Our revenue grew by EUR 2.3M in the first year. The ROI was immediate."',
    industry: 'E-commerce'
  },
  {
    name: 'Dr. Ahmad Nasser',
    role: 'Operations Director, LifeCare Clinics',
    quote: '"Patient scheduling used to take half our staff\'s day. Now our AI agent handles it perfectly. No-shows dropped by 58%. Our team can finally focus on actual patient care."',
    industry: 'Healthcare'
  },
  {
    name: 'Marcus Webb',
    role: 'VP Customer Success, BuilderSaaS',
    quote: '"Going from 18-hour response times to 47 seconds was transformative. Our CSAT jumped from 3.2 to 4.8. Game changer."',
    industry: 'SaaS'
  },
  {
    name: 'Layla Al-Mansouri',
    role: 'Founder, PropEdge Real Estate',
    quote: '"EstateIQ transformed how we qualify leads. What used to take 3 days now happens instantly. Our agents are 89% more productive."',
    industry: 'Real Estate'
  },
  {
    name: 'Tom Reinholt',
    role: 'Head of Growth, NexaMarketing',
    quote: '"LeadForge took our email reply rate from 0.3% to 4.7%. That is not a typo. We generated EUR 1.8M in pipeline in 90 days."',
    industry: 'Marketing'
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, FlowStack',
    quote: '"The trial-to-paid improvement from 2.1% to 8.7% directly translates to hundreds of thousands in additional revenue. They rebuilt our entire growth engine."',
    industry: 'SaaS'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Builders Who Move Fast</h2>
          <p className="text-xl text-muted-foreground">Hear from the teams scaling with SwebTools.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="break-inside-avoid bg-background border-l-4 border-l-primary border-y border-r border-border p-6 rounded-r-2xl">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground mb-2">{t.role}</div>
                <div className="inline-block px-2 py-1 bg-muted rounded text-xs font-mono text-foreground">
                  {t.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
