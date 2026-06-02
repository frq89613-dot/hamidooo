import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getPostLoginPath } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase-config";

export default function AuthCallbackPage() {
  const [, setLocation] = useLocation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured.");
      return;
    }

    const supabase = getSupabase();
    let resolved = false;

    const finish = (path: string) => {
      if (resolved) return;
      resolved = true;
      setLocation(path);
    };

    const timeout = window.setTimeout(() => {
      if (!resolved) {
        setError("Authentication timed out. Please try signing in again.");
      }
    }, 15000);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (
        session &&
        (event === "SIGNED_IN" ||
          event === "TOKEN_REFRESHED" ||
          event === "INITIAL_SESSION")
      ) {
        window.clearTimeout(timeout);
        finish(getPostLoginPath());
      }
    });

    supabase.auth
      .getSession()
      .then(({ data: { session }, error: sessionError }) => {
        if (sessionError) {
          window.clearTimeout(timeout);
          setError(sessionError.message);
          return;
        }

        if (session) {
          window.clearTimeout(timeout);
          finish(getPostLoginPath());
        }
      })
      .catch((err) => {
        window.clearTimeout(timeout);
        setError(err instanceof Error ? err.message : "Authentication failed.");
      });

    return () => {
      window.clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, [setLocation]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-4 rounded-xl border border-border bg-card p-6">
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <Button className="w-full" onClick={() => setLocation("/login")}>
            Back to sign in
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-3">
      <Spinner className="h-8 w-8 text-primary" />
      <p className="text-sm text-muted-foreground">Completing sign in…</p>
    </div>
  );
}
