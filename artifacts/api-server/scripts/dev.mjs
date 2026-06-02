import { spawnSync } from "node:child_process";

process.env.NODE_ENV = "development";

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("pnpm", ["run", "build"]);
run("pnpm", ["run", "start"]);
