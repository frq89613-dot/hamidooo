export interface SupabasePublicConfig {
  url: string;
  anonKey: string;
}

let activeConfig: SupabasePublicConfig | null = null;

export function setSupabasePublicConfig(config: SupabasePublicConfig | null): void {
  activeConfig = config;
}

export function getSupabasePublicConfig(): SupabasePublicConfig | null {
  return activeConfig;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(activeConfig?.url && activeConfig?.anonKey);
}

/** Project URL only — never include /rest/v1 or other API paths. */
export function normalizeSupabaseUrl(url: string): string {
  return url
    .trim()
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/, "");
}

function normalizeConfig(
  config: SupabasePublicConfig,
): SupabasePublicConfig {
  return {
    url: normalizeSupabaseUrl(config.url),
    anonKey: config.anonKey.trim(),
  };
}

function resolveFromEnv(): SupabasePublicConfig | null {
  const url = import.meta.env.VITE_SUPABASE_URL?.trim();
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) return null;
  return normalizeConfig({ url, anonKey });
}

function isValidPublicConfig(
  value: unknown,
): value is SupabasePublicConfig {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.url === "string" &&
    typeof record.anonKey === "string" &&
    record.url.length > 0 &&
    record.anonKey.length > 0 &&
    !record.url.includes("YOUR_") &&
    !record.anonKey.includes("YOUR_")
  );
}

export async function loadSupabasePublicConfig(): Promise<SupabasePublicConfig | null> {
  const fromEnv = resolveFromEnv();
  if (fromEnv) {
    return fromEnv;
  }

  try {
    const base = import.meta.env.BASE_URL ?? "/";
    const configUrl = new URL(
      "config/supabase.json",
      window.location.origin + base,
    ).href;
    const response = await fetch(configUrl, { cache: "no-store" });
    if (response.ok) {
      const json: unknown = await response.json();
      if (isValidPublicConfig(json)) {
        return normalizeConfig(json);
      }
    }
  } catch {
    // No runtime config available.
  }

  return null;
}
