import type { ReactNode } from "react";
import { Redirect, useLocation } from "wouter";

import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/AuthProvider";
import { isSupabaseConfigured } from "@/lib/supabase-config";

type ProtectedLayoutProps = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { user, loading } = useAuth();
  const [location] = useLocation();

  if (!isSupabaseConfigured()) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Spinner className="h-8 w-8 text-primary" />
      </div>
    );
  }

  if (!user) {
    const redirect = encodeURIComponent(location || "/dashboard");
    return <Redirect to={`/login?redirect=${redirect}`} />;
  }

  return <>{children}</>;
}
