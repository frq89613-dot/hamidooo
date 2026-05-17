import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Clock, Lock, ArrowRight, Mail, Phone } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const WEBHOOK_URL = (import.meta.env as Record<string, string | undefined>)['VITE_N8N_WEBHOOK_URL'];

const services = [
  'AI Automation & n8n Workflows',
  'AI Agents & Chatbots',
  'High-Performance Web Development',
  'AI-Enhanced SEO',
  'Full Autonomous System Build',
  'Strategy Consultation Only',
];

const budgets = ['< $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+', 'Not sure yet'];

const inputClass =
  'w-full bg-white/4 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-white/6 transition-all duration-200';

const CheckmarkAnimation = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
    className="flex flex-col items-center justify-center h-full py-12 text-center"
  >
    <div className="relative mb-8">
      <svg viewBox="0 0 80 80" className="w-24 h-24">
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#00ff88"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <motion.path
          d="M 24 40 L 36 52 L 58 28"
          fill="none"
          stroke="#00ff88"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.6, 1.8] }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ background: 'radial-gradient(circle, #00ff8840, transparent 70%)' }}
      />
    </div>
    <h3 className="text-2xl font-bold mb-3">Request Received</h3>
    <p className="text-muted-foreground mb-2 max-w-xs leading-relaxed">
      Your AI consultation has been submitted. We're analyzing your challenge now.
    </p>
    <div className="mt-6 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5 text-sm font-mono text-primary">
      <span className="opacity-70">status:</span> analyzing
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.1 }}
      >_</motion.span>
    </div>
    <p className="text-xs text-muted-foreground mt-5">Expect our personalized roadmap within 24 hours.</p>
  </motion.div>
);

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setFormState('submitting');
    setErrorMsg('');

    try {
      if (!WEBHOOK_URL) {
        await new Promise((r) => setTimeout(r, 1800));
        setFormState('success');
        return;
      }

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'Sweb.Tools Website',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMsg('Could not send your request. Please email us directly at hello@sweb.tools');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">AI Consultation</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Start Your Automation Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Tell us about your biggest operational challenge. Our AI pre-analyzes your workflow before our first call — so we arrive with a strategy, not questions.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Clock, title: 'Response within 24 hours', desc: 'We review every submission personally.' },
                { icon: Bot, title: 'AI pre-analysis included', desc: 'We map your automation potential before we connect.' },
                { icon: Lock, title: 'Fully confidential', desc: 'Your business details stay private.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{title}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@sweb.tools</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 000-0000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 0% 0%, #00ff8812, transparent 60%), radial-gradient(ellipse at 100% 100%, #00e5ff0c, transparent 60%)',
                }}
              />

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative p-8 md:p-10"
                  >
                    <CheckmarkAnimation />
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="relative p-8 md:p-10 flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Company <span className="text-muted-foreground/50">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company or project name"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Service
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Describe your challenge <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="What manual processes are slowing your team down? What would you automate if you could?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!isValid || formState === 'submitting'}
                      className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: isValid ? '#00ff88' : undefined,
                        color: isValid ? '#000' : undefined,
                        boxShadow: isValid ? '0 0 24px #00ff8840' : undefined,
                      }}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            Initializing consultation
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.9 }}
                          >
                            ...
                          </motion.span>
                        </>
                      ) : (
                        <>
                          Launch Consultation Request
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground/60">
                      By submitting, you agree to our Privacy Policy. No spam — ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
