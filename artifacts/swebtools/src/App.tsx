import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkflowBrain from "./components/WorkflowBrain";
import TechStack from "./components/TechStack";
import Performance from "./components/Performance";
import Portfolio from "./components/Portfolio";
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
        <Portfolio />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
    </ThemeProvider>
  );
}

export default App;
