import "./i18n/i18n";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  loadSupabasePublicConfig,
  setSupabasePublicConfig,
} from "./lib/supabase-config";
import "./index.css";

async function bootstrap() {
  const config = await loadSupabasePublicConfig();
  setSupabasePublicConfig(config);

  if (import.meta.env.DEV && config) {
    console.info("[supabase] Connected to", config.url);
  }

  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element #root not found");
  }

  createRoot(root).render(<App />);
}

bootstrap();
