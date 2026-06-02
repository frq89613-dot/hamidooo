import { useState, type FormEvent } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { Loader2 } from "lucide-react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuthRedirectUrl, getPostLoginPath } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase-config";

export default function SignUpPage() {
  const [, setLocation] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const isSubscribeFlow = params.get("intent") === "subscribe";
  const selectedPlan = params.get("plan");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const configured = isSupabaseConfigured();

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    if (!configured) return;

    setError(null);
    setSuccess(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = getSupabase();
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: getAuthRedirectUrl(),
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.session) {
        setLocation(getPostLoginPath(search));
        return;
      }

      setSuccess(
        "Account created. Check your email to confirm your address, then sign in.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title={isSubscribeFlow ? "Create your account" : "Create an account"}
      subtitle={
        isSubscribeFlow
          ? `You're one step away from ${selectedPlan ? `the ${selectedPlan} plan` : "your subscription"}.`
          : "Sign up to access the secure orders dashboard"
      }
      footer={
        <>
          Already have an account?{" "}
          <Link
            href={isSubscribeFlow ? `/login${search}` : "/login"}
            className="text-primary hover:underline font-medium"
          >
            Sign in
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

      {success && (
        <Alert className="mb-4 border-primary/30">
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSignUp} className="space-y-4">
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
            autoComplete="new-password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={!configured || loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            disabled={!configured || loading}
          />
        </div>

        <Button type="submit" className="w-full" disabled={!configured || loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account…
            </>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}
