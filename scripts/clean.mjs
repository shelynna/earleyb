import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const removeNext = process.argv.includes("--all");
const baseTargets = ["out", "coverage", ".turbo", "tsconfig.tsbuildinfo"];
const targets = removeNext ? [".next", ...baseTargets] : baseTargets;
const devServerLogNames = new Set(["dev-server.log", "dev-server.err.log"]);
const removableLogNames = new Set([
  "npm-debug.log",
  "yarn-debug.log",
  "yarn-error.log",
  "pnpm-debug.log",
]);

await Promise.all(
  targets.map((target) =>
    rm(join(process.cwd(), target), { recursive: true, force: true }),
  ),
);

const entries = await readdir(process.cwd(), { withFileTypes: true });
const logFiles = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter(
    (name) =>
      removableLogNames.has(name) ||
      (removeNext && devServerLogNames.has(name)) ||
      /^npm-debug\.log\./.test(name) ||
      /^yarn-debug\.log\./.test(name) ||
      /^yarn-error\.log\./.test(name) ||
      /^pnpm-debug\.log\./.test(name),
  );

await Promise.all(
  logFiles.map((file) => rm(join(process.cwd(), file), { force: true })),
);

console.log(
  [
    `Removed ${[...targets, ...logFiles].join(", ")} if present.`,
    removeNext
      ? ""
      : "Skipped .next and dev-server logs. Stop the dev server and run npm run clean:all to remove them.",
  ]
    .filter(Boolean)
    .join(" "),
);
