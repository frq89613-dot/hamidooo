import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiN8N, SiPython, SiDocker, SiLangchain } from 'react-icons/si';

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, darkColor: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, darkColor: '#06B6D4' },
  { name: 'Supabase', icon: SiSupabase, darkColor: '#3ECF8E' },
  { name: 'n8n', icon: SiN8N, darkColor: '#FF6D5A' },
  { name: 'Python', icon: SiPython, darkColor: '#3776AB' },
  { name: 'Docker', icon: SiDocker, darkColor: '#2496ED' },
  { name: 'LangChain', icon: SiLangchain, darkColor: '#FFFFFF' },
  { name: 'Groq', icon: () => <span className="font-bold text-lg leading-none">G</span>, darkColor: '#F55036' },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('techStack.sectionTitle')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('techStack.sectionSubtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors shadow-lg"
              >
                <tech.icon className="w-8 h-8" style={{ color: tech.darkColor }} />
                <span className="font-semibold text-lg">{tech.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
