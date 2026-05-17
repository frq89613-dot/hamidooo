import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const ParticleNetwork = lazy(() => import('./ParticleNetwork'));

const GlitchText = ({ text, as: Component = 'h1', className = '' }: { text: string, as?: any, className?: string }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <Component className="relative z-10 text-foreground">{text}</Component>
      
      {/* Glitch layers */}
      <Component 
        className="absolute top-0 left-[2px] -z-10 text-cyan-400 opacity-70 mix-blend-screen"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          animation: 'glitch-anim-1 5s infinite linear alternate-reverse'
        }}
        aria-hidden="true"
      >
        {text}
      </Component>
      <Component 
        className="absolute top-0 -left-[2px] -z-10 text-green-500 opacity-70 mix-blend-screen"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          animation: 'glitch-anim-2 5s infinite linear alternate-reverse'
        }}
        aria-hidden="true"
      >
        {text}
      </Component>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch-anim-1 {
          0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
          2% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); transform: translate(-2px, 2px); }
          4% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); transform: translate(2px, -2px); }
          6% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); transform: translate(0); }
          8%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); transform: translate(0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); transform: translate(0); }
          2% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); transform: translate(2px, -2px); }
          4% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); transform: translate(-2px, 2px); }
          6% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); transform: translate(0); }
          8%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); transform: translate(0); }
        }
      `}} />
    </div>
  );
};

const RobotVisual = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Glowing Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[250px] h-[250px] rounded-full bg-primary/20 blur-[60px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[200px] h-[200px] rounded-full bg-secondary/20 blur-[50px]"
      />

      {/* Circuit Board SVG */}
      <svg className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        
        {/* Static Paths */}
        <path d="M200,50 L200,150 L250,200 L350,200" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        <path d="M200,350 L200,250 L150,200 L50,200" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        <path d="M50,100 L150,100 L200,150" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        <path d="M350,300 L250,300 L200,250" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        
        {/* Animated Paths */}
        <motion.path 
          d="M200,50 L200,150 L250,200 L350,200" 
          fill="none" 
          stroke="url(#neonGradient)" 
          strokeWidth="3"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: -400 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M200,350 L200,250 L150,200 L50,200" 
          fill="none" 
          stroke="url(#neonGradient)" 
          strokeWidth="3"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: -400 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        {/* Nodes */}
        <circle cx="200" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="350" cy="200" r="6" fill="hsl(var(--secondary))" />
        <circle cx="200" cy="350" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="200" r="6" fill="hsl(var(--secondary))" />
        
        {/* Center Eye */}
        <motion.circle 
          cx="200" cy="200" r="20" 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="4" 
          animate={{ r: [18, 22, 18], strokeWidth: [3, 5, 3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="200" cy="200" r="10" fill="hsl(var(--secondary))" />
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <Suspense fallback={null}>
        <ParticleNetwork />
      </Suspense>

      <div className="container relative z-10 px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary font-medium tracking-wide uppercase">Systems Online</span>
          </div>
          
          <GlitchText 
            text="Next-Gen AI Automation" 
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight" 
          />
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            We design, build, and deploy intelligent automation systems that run your business 24/7. Replace manual operations with precision AI agents.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] transition-shadow text-center"
            >
              Start Automating
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#portfolio"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-foreground font-semibold rounded-md hover:bg-white/10 transition-colors text-center"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RobotVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;