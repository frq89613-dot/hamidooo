import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import {
  getSupabasePublicConfig,
  isSupabaseConfigured,
} from "@/lib/supabase-config";
import type { Order } from "@/types/order";

export { isSupabaseConfigured };

let client: SupabaseClient | null = null;
let clientFingerprint: string | null = null;

export function getSupabase(): SupabaseClient {
  const config = getSupabasePublicConfig();
  if (!config) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env, then restart the dev server.",
    );
  }

  const fingerprint = `${config.url}::${config.anonKey}`;
  if (client && clientFingerprint !== fingerprint) {
    resetSupabaseClient();
  }

  if (!client) {
    clientFingerprint = fingerprint;
    client = createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    });
  }

  return client;
}

export function resetSupabaseClient(): void {
  client = null;
  clientFingerprint = null;
}

export async function fetchOrders(): Promise<Order[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as Order[];
}
