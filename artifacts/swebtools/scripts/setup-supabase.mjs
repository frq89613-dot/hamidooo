/**
 * Reads config/supabase.json, syncs public keys for the browser, initializes
 * the orders table, and seeds sample data when credentials are provided.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const configPath = path.join(root, "config", "supabase.json");
const examplePath = path.join(root, "config", "supabase.example.json");
const publicConfigDir = path.join(root, "public", "config");
const publicConfigPath = path.join(publicConfigDir, "supabase.json");
const schemaDir = path.join(root, "supabase");

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function isPlaceholder(value) {
  if (typeof value !== "string") return true;
  const v = value.trim();
  return (
    !v ||
    v.includes("YOUR_") ||
    v.includes("your-") ||
    v === "..." ||
    v === "paste-here"
  );
}

function getProjectRef(url) {
  const hostname = new URL(url).hostname;
  const ref = hostname.split(".")[0];
  if (!ref || ref === "supabase") {
    throw new Error(`Could not parse project ref from Supabase URL: ${url}`);
  }
  return ref;
}

function syncPublicConfig(config) {
  const publicConfig = {
    url: isPlaceholder(config?.url) ? "" : config.url.trim(),
    anonKey: isPlaceholder(config?.anonKey) ? "" : config.anonKey.trim(),
  };
  writeJson(publicConfigPath, publicConfig);
  return publicConfig;
}

function credentialsReady(config) {
  return (
    config &&
    !isPlaceholder(config.url) &&
    !isPlaceholder(config.anonKey) &&
    !isPlaceholder(config.serviceRoleKey) &&
    !isPlaceholder(config.databasePassword)
  );
}

async function initializeSchema(config) {
  const { default: postgres } = await import("postgres");
  const ref = getProjectRef(config.url);
  const connectionString = `postgresql://postgres:${encodeURIComponent(config.databasePassword)}@db.${ref}.supabase.co:5432/postgres`;
  const sql = postgres(connectionString, {
    ssl: "require",
    max: 1,
    connect_timeout: 30,
  });

  const schemaFiles = fs
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of schemaFiles) {
    const schemaSql = fs.readFileSync(path.join(schemaDir, file), "utf8");
    await sql.unsafe(schemaSql);
    console.log(`[setup-supabase] Applied ${file}`);
  }

  await sql.end();
}

const SAMPLE_ORDERS = [
  {
    customer_name: "Acme Corp",
    customer_email: "billing@acme.example",
    product: "Automation Starter",
    amount: 2499,
    status: "completed",
  },
  {
    customer_name: "Nova Labs",
    customer_email: "ops@novalabs.example",
    product: "Workflow Pro",
    amount: 4999,
    status: "processing",
  },
  {
    customer_name: "Bright Retail",
    customer_email: "hello@brightretail.example",
    product: "AI Agent Pack",
    amount: 1299,
    status: "pending",
  },
  {
    customer_name: "Helix Systems",
    customer_email: "finance@helix.example",
    product: "Enterprise Suite",
    amount: 9999,
    status: "completed",
  },
  {
    customer_name: "Orbit Media",
    customer_email: "team@orbit.example",
    product: "Content Pipeline",
    amount: 799,
    status: "cancelled",
  },
];

async function seedOrders(config) {
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(config.url, config.serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { count, error: countError } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });

  if (countError) {
    throw countError;
  }

  if ((count ?? 0) > 0) {
    console.log(`[setup-supabase] orders table already has ${count} row(s); skipping seed.`);
    return;
  }

  const { error } = await supabase.from("orders").insert(SAMPLE_ORDERS);
  if (error) {
    throw error;
  }

  console.log(`[setup-supabase] Seeded ${SAMPLE_ORDERS.length} sample orders.`);
}

async function main() {
  if (!fs.existsSync(configPath) && fs.existsSync(examplePath)) {
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.copyFileSync(examplePath, configPath);
    console.log(
      "[setup-supabase] Created config/supabase.json — paste your Supabase keys, then run again.",
    );
  }

  let config = readJson(configPath);

  if (!config) {
    config = { url: "", anonKey: "", serviceRoleKey: "", databasePassword: "" };
  }

  const publicConfig = syncPublicConfig(config);
  console.log(`[setup-supabase] Synced browser config → public/config/supabase.json`);

  if (!credentialsReady(config)) {
    console.log(
      "[setup-supabase] Paste your Supabase keys into config/supabase.json, then run: npm setup:supabase",
    );
    if (!publicConfig.url || !publicConfig.anonKey) {
      process.exit(0);
    }
    return;
  }

  try {
    console.log("[setup-supabase] Applying database schemas…");
    await initializeSchema(config);
    console.log("[setup-supabase] Database schema ready.");

    await seedOrders(config);
    console.log("[setup-supabase] Supabase is ready. Open /dashboard in the app.");
  } catch (error) {
    console.error("[setup-supabase] Setup failed:", error.message ?? error);
    process.exit(1);
  }
}

main();
