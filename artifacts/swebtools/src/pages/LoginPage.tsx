import { useState, type FormEvent } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { SiGoogle } from "react-icons/si";
import { Loader2 } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getAuthRedirectUrl, getPostLoginPath } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase-config";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const isSubscribeFlow = params.get("intent") === "subscribe";
  const selectedPlan = params.get("plan");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  const configured = isSupabaseConfigured();

  async function handleEmailSignIn(e: FormEvent) {
    e.preventDefault();
    if (!configured) return;

    setError(null);
    setLoading(true);

    try {
      const supabase = getSupabase();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      setLocation(getPostLoginPath());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    if (!configured) return;

    setError(null);
    setOauthLoading(true);

    try {
      const supabase = getSupabase();
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: getAuthRedirectUrl(),
        },
      });

      if (oauthError) {
        setError(oauthError.message);
        setOauthLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign in failed.");
      setOauthLoading(false);
    }
  }

  return (
    <AuthLayout
      title={isSubscribeFlow ? "Sign in to continue" : "Welcome back"}
      subtitle={
        isSubscribeFlow
          ? `Create your account to ${selectedPlan ? `subscribe to ${selectedPlan}` : "complete your purchase"}.`
          : "Sign in to access your secure dashboard"
      }
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </>
      }
    >
      {!configured && (
        <Alert className="mb-4 border-primary/30">
          <AlertDescription>
            Supabase is not configured. Add your keys to{" "}
            <code className="text-xs bg-muted px-1 rounded">.env</code> and restart
            the dev server.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={!configured || loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={!configured || loading}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!configured || loading || oauthLoading}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <div className="relative my-6">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
          or
        </span>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full gap-2"
        onClick={handleGoogleSignIn}
        disabled={!configured || loading || oauthLoading}
      >
        {oauthLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <SiGoogle className="h-4 w-4" />
        )}
        Continue with Google
      </Button>
    </AuthLayout>
  );
}
