#!/usr/bin/env node
/**
 * Build + start Next, then run seo-audit against localhost.
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = process.env.PORT || "3000";
const BASE_URL = `http://127.0.0.1:${PORT}`;

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      shell: process.platform === "win32",
      ...opts,
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited ${code}`));
    });
  });
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {
      // retry
    }
    await sleep(1000);
  }
  throw new Error(`Server did not become ready at ${url}`);
}

async function main() {
  await run("npm", ["run", "build"]);

  const server = spawn("npx", ["next", "start", "-p", PORT], {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: { ...process.env, PORT },
  });

  try {
    await waitForServer(BASE_URL);
    await run("node", ["scripts/seo-audit.mjs"], {
      env: { ...process.env, BASE_URL },
    });
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
