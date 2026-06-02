import { useState, type FormEvent } from "react";
import { Loader2, MessageCircle } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitProjectInquiry } from "@/lib/project-inquiries";
import { isSupabaseConfigured } from "@/lib/supabase-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type GetStartedFormProps = {
  projectId: string;
  projectTitle: string;
};

export function GetStartedForm({ projectId, projectTitle }: GetStartedFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSupabaseConfigured()) {
        await submitProjectInquiry({
          name,
          email,
          projectDetails,
          projectId,
        });
      }

      const message = [
        `Hi! I'm interested in a project like "${projectTitle}".`,
        ``,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        ``,
        `Details:`,
        projectDetails.trim(),
      ].join("\n");

      window.location.href = buildWhatsAppUrl(message);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not submit your request.",
      );
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-6">
      <div className="flex items-center gap-2 mb-1">
        <MessageCircle className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Get started on your project</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Share your goals—we&apos;ll save your details and open WhatsApp so we can
        continue the conversation right away.
      </p>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDetails">Project details</Label>
          <Textarea
            id="projectDetails"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder="Tell us about your business, timeline, and what you want to build..."
            rows={5}
            required
            disabled={loading}
          />
        </div>

        <Button type="submit" className="w-full gap-2" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <MessageCircle className="h-4 w-4" />
              Submit &amp; continue on WhatsApp
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
