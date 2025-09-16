#!/usr/bin/env bun

/**
 * Lint script that handles both the top-level directory and the docs directory
 * with their respective linter configurations, ensuring we always return to
 * the original directory even if linting fails.
 */

import { resolve } from "node:path";
import { spawn } from "bun";

const originalDir = process.cwd();
let exitCode = 0;

async function runCommand(
  command: string,
  args: string[],
  cwd: string,
): Promise<boolean> {
  console.log(`Running: ${command} ${args.join(" ")} in ${cwd}`);

  try {
    const proc = spawn({
      cmd: [command, ...args],
      cwd,
      stdio: ["inherit", "inherit", "inherit"],
    });

    const result = await proc.exited;
    return result === 0;
  } catch (error) {
    console.error(`Failed to run command: ${error}`);
    return false;
  }
}

async function main() {
  try {
    console.log("🔍 Starting lint process for all directories...\n");

    // Lint top-level directory
    console.log("📁 Linting top-level directory...");
    const topLevelSuccess = await runCommand(
      "bunx",
      ["biome", "check", "--write"],
      originalDir,
    );

    if (!topLevelSuccess) {
      console.error("❌ Top-level linting failed");
      exitCode = 1;
    } else {
      console.log("✅ Top-level linting completed successfully");
    }

    console.log();

    // Lint docs directory
    console.log("📁 Linting docs directory...");
    const docsDir = resolve(originalDir, "docs");
    const docsSuccess = await runCommand(
      "bunx",
      ["biome", "check", "--write"],
      docsDir,
    );

    if (!docsSuccess) {
      console.error("❌ Docs linting failed");
      exitCode = 1;
    } else {
      console.log("✅ Docs linting completed successfully");
    }

    console.log();

    if (exitCode === 0) {
      console.log("🎉 All linting completed successfully!");
    } else {
      console.log(
        "⚠️  Linting completed with errors. Please fix the issues above.",
      );
    }
  } catch (error) {
    console.error("💥 Unexpected error during linting:", error);
    exitCode = 1;
  } finally {
    // Always ensure we return to the original directory
    try {
      process.chdir(originalDir);
      console.log(`📍 Returned to original directory: ${originalDir}`);
    } catch (error) {
      console.error("Failed to return to original directory:", error);
      exitCode = 1;
    }
  }

  process.exit(exitCode);
}

// Run the main function
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
