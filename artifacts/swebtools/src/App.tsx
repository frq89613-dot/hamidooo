import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";

import { GuestLayout } from "./components/auth/GuestLayout";
import { ProtectedLayout } from "./components/auth/ProtectedLayout";
import { PortfolioSection } from "./components/PortfolioSection";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { AuthProvider } from "./providers/AuthProvider";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/not-found";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ServicesPage from "./pages/ServicesPage";
import SignUpPage from "./pages/SignUpPage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Services = lazy(() => import("./components/Services"));
const WorkflowBrain = lazy(() => import("./components/WorkflowBrain"));
const TechStack = lazy(() => import("./components/TechStack"));
const Performance = lazy(() => import("./components/Performance"));
const Stats = lazy(() => import("./components/Stats"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const WorkflowShowcase = lazy(() => import("./components/WorkflowShowcase"));
const AgentsShowcase = lazy(() => import("./components/AgentsShowcase"));
const MetricsSection = lazy(() => import("./components/MetricsSection"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
          <PortfolioSection showHeader limit={3} />
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <LocaleProvider>
          <AuthProvider>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/pricing" component={PricingPage} />
              <Route path="/projects/:id" component={ProjectDetailPage} />
              <Route path="/login">
                <GuestLayout>
                  <LoginPage />
                </GuestLayout>
              </Route>
              <Route path="/signup">
                <GuestLayout>
                  <SignUpPage />
                </GuestLayout>
              </Route>
              <Route path="/auth/callback" component={AuthCallbackPage} />
              <Route path="/dashboard">
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              </Route>
              <Route component={NotFound} />
            </Switch>
          </AuthProvider>
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
