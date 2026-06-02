import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

for (const file of ["package-lock.json", "yarn.lock"]) {
  const filePath = path.join(root, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

const userAgent = process.env.npm_config_user_agent ?? "";
if (!userAgent.includes("pnpm")) {
  console.error("Use pnpm instead of npm or yarn for this workspace.");
  process.exit(1);
}
