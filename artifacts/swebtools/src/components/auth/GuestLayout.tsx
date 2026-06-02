import type { ReactNode } from "react";
import { Redirect } from "wouter";

import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/AuthProvider";
import { getPostLoginPath } from "@/lib/auth";

type GuestLayoutProps = {
  children: ReactNode;
};

/** Redirects authenticated users away from login/signup pages. */
export function GuestLayout({ children }: GuestLayoutProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Spinner className="h-8 w-8 text-primary" />
      </div>
    );
  }

  if (user) {
    return <Redirect to={getPostLoginPath()} />;
  }

  return <>{children}</>;
}
