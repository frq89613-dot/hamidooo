import { getSupabase } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase-config";

export interface ProjectInquiryInput {
  name: string;
  email: string;
  projectDetails: string;
  projectId?: string;
}

export async function submitProjectInquiry(
  input: ProjectInquiryInput,
): Promise<void> {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured.");
  }

  const supabase = getSupabase();
  const { error } = await supabase.from("project_inquiries").insert({
    name: input.name.trim(),
    email: input.email.trim(),
    project_details: input.projectDetails.trim(),
    project_id: input.projectId ?? null,
  });

  if (error) {
    throw error;
  }
}
