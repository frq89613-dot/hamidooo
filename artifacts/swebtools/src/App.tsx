import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

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
import { Seo } from "./components/Seo";
import { organizationSchema, websiteSchema, localBusinessSchema } from "./lib/seo";

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

import AiAutomationPage from "./pages/AiAutomationPage";
import AiChatbotsPage from "./pages/AiChatbotsPage";
import WorkflowAutomationPage from "./pages/WorkflowAutomationPage";
import BusinessAutomationPage from "./pages/BusinessAutomationPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import SaasDevelopmentPage from "./pages/SaasDevelopmentPage";
import WhySwebPage from "./pages/WhySwebPage";
import UseCasesPage from "./pages/UseCasesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ToolsPage from "./pages/ToolsPage";
import ToolPage from "./pages/ToolPage";

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
      <Seo
        title="AI Automation & SaaS Development Agency"
        description="Sweb.Tools is an international AI automation and SaaS development agency that builds chatbots, workflow systems, and digital products for modern growth teams."
        canonical="https://sweb.tools/"
        image="/opengraph.jpg"
        structuredData={[organizationSchema, websiteSchema, localBusinessSchema]}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <section className="py-20 bg-slate-950/80 text-foreground">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-4">Who we help</p>
                  <h2 className="text-2xl font-semibold mb-3">Growth teams and SaaS leaders</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with founders, agencies, and operations teams who need smarter automation, faster product launches, and better customer journeys.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-4">Why we're different</p>
                  <h2 className="text-2xl font-semibold mb-3">Engineering meets conversion strategy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our projects are designed for measurable outcomes: faster lead capture, lower support cost, and automation that scales with your business.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.35em] text-primary mb-4">How to start</p>
                  <h2 className="text-2xl font-semibold mb-3">Plan, build, launch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We begin with a strategy session, then move into delivery sprints for automation, SaaS development, and web experiences with clear milestones.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
            <Router hook={useHashLocation}>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/why-sweb" component={WhySwebPage} />
                <Route path="/use-cases" component={UseCasesPage} />
                <Route path="/case-studies" component={CaseStudiesPage} />
                <Route path="/tools" component={ToolsPage} />
                <Route path="/tools/:slug" component={ToolPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/blog/:slug" component={BlogPostPage} />
                <Route path="/services/ai-automation" component={AiAutomationPage} />
                <Route path="/services/ai-chatbots" component={AiChatbotsPage} />
                <Route path="/services/workflow-automation" component={WorkflowAutomationPage} />
                <Route path="/services/business-automation" component={BusinessAutomationPage} />
                <Route path="/services/web-development" component={WebDevelopmentPage} />
                <Route path="/services/saas-development" component={SaasDevelopmentPage} />
                <Route path="/ai-automation" component={AiAutomationPage} />
                <Route path="/ai-chatbots" component={AiChatbotsPage} />
                <Route path="/workflow-automation" component={WorkflowAutomationPage} />
                <Route path="/business-automation" component={BusinessAutomationPage} />
                <Route path="/web-development" component={WebDevelopmentPage} />
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
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </AuthProvider>
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;