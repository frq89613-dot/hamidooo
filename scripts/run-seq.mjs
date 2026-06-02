/**
 * Run multiple commands in sequence (cross-platform).
 * Usage: node scripts/run-seq.mjs <command> [args...] -- <command> [args...]
 */
import { spawnSync } from "node:child_process";

const steps = [];
let current = [];

for (const arg of process.argv.slice(2)) {
  if (arg === "--") {
    if (current.length > 0) {
      steps.push(current);
      current = [];
    }
    continue;
  }
  current.push(arg);
}

if (current.length > 0) {
  steps.push(current);
}

if (steps.length === 0) {
  console.error("Usage: node scripts/run-seq.mjs <cmd> [args...] -- <cmd> [args...]");
  process.exit(1);
}

for (const [command, ...args] of steps) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
