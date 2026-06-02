import type { ReactNode } from "react";
import { Link } from "wouter";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex items-center justify-center p-4">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold">
              S
            </span>
            <span className="font-semibold text-foreground">
              web<span className="text-primary">.Tools</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-6 shadow-sm">
          {children}
        </div>

        {footer && (
          <div className="text-center text-sm text-muted-foreground">{footer}</div>
        )}
      </div>
    </div>
  );
}
