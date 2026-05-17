import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./i18n/LocaleProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkflowBrain from "./components/WorkflowBrain";
import TechStack from "./components/TechStack";
import Performance from "./components/Performance";
import PortfolioShowcase from "./components/PortfolioShowcase";
import CaseStudies from "./components/CaseStudies";
import WorkflowShowcase from "./components/WorkflowShowcase";
import AgentsShowcase from "./components/AgentsShowcase";
import MetricsSection from "./components/MetricsSection";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
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
