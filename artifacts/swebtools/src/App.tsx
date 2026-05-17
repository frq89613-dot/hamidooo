import { lazy, Suspense } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { LocaleProvider } from './i18n/LocaleProvider';

// Above-fold — eager
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-fold — lazy (code-split for faster initial load)
const Services = lazy(() => import('./components/Services'));
const WorkflowBrain = lazy(() => import('./components/WorkflowBrain'));
const TechStack = lazy(() => import('./components/TechStack'));
const Performance = lazy(() => import('./components/Performance'));
const Stats = lazy(() => import('./components/Stats'));
const PortfolioShowcase = lazy(() => import('./components/PortfolioShowcase'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const WorkflowShowcase = lazy(() => import('./components/WorkflowShowcase'));
const AgentsShowcase = lazy(() => import('./components/AgentsShowcase'));
const MetricsSection = lazy(() => import('./components/MetricsSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <WorkflowBrain />
          <TechStack />
          <Performance />
          <Stats />
          <PortfolioShowcase />
          <CaseStudies />
          <WorkflowShowcase />
          <AgentsShowcase />
          <MetricsSection />
          <Testimonials />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LocaleProvider>
        <Home />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
