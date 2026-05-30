#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const registryPath = join(packageRoot, "registry", "components.json");
const registry = JSON.parse(readFileSync(registryPath, "utf8"));

const args = process.argv.slice(2);
const command = args[0];

function usage() {
  console.log(`cads-ui CLI

Usage:
  cads-ui list [--free|--pro|--json]
  cads-ui info <slug>
  cads-ui add <slug> [--cwd <path>] [--dry-run] [--force] [--allow-pro]

Examples:
  npx cads-ui list
  npx cads-ui add button
  npx cads-ui info morph-modal
`);
}

function getFlag(name) {
  return args.includes(name);
}

function getOption(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

function findComponent(slug) {
  return registry.find((component) => component.slug === slug);
}

function formatTier(tier) {
  return tier === "Free" ? "free" : "pro";
}

function listComponents() {
  let components = registry;
  if (getFlag("--free")) components = components.filter((component) => component.tier === "Free");
  if (getFlag("--pro")) components = components.filter((component) => component.tier === "Pro");

  if (getFlag("--json")) {
    console.log(JSON.stringify(components, null, 2));
    return;
  }

  console.log("Available cads-ui components:\n");
  for (const component of components) {
    console.log(`- ${component.slug.padEnd(26)} ${formatTier(component.tier).padEnd(4)} ${component.description}`);
  }
  console.log("\nUse `cads-ui info <slug>` for details or `cads-ui add <slug>` to copy a free component.");
}

function showInfo(slug) {
  const component = findComponent(slug);
  if (!component) {
    console.error(`Component not found: ${slug}`);
    process.exit(1);
  }

  console.log(`${component.name} (${component.tier})`);
  console.log(`Slug: ${component.slug}`);
  console.log(`Status: ${component.status}`);
  console.log(`\n${component.description}\n`);
  console.log(`Dependencies: ${component.dependencies.length ? component.dependencies.join(", ") : "none"}`);
  console.log("Files:");
  for (const file of component.files) console.log(`- ${file}`);
  console.log("\nProps:");
  for (const prop of component.props) console.log(`- ${prop}`);
  console.log(`\nAccessibility: ${component.accessibility}`);
}

function ensureInsidePackage(file) {
  const absolute = resolve(packageRoot, file);
  const rel = relative(packageRoot, absolute);
  if (rel.startsWith("..") || rel === "") {
    throw new Error(`Invalid registry file path: ${file}`);
  }
  return absolute;
}

function addComponent(slug) {
  const component = findComponent(slug);
  if (!component) {
    console.error(`Component not found: ${slug}`);
    process.exit(1);
  }

  const allowPro = getFlag("--allow-pro");
  if (component.tier === "Pro" && !allowPro) {
    console.error(`${component.name} is a Pro component.`);
    console.error("For now, the CLI only installs Free Core components. Use --allow-pro for local development/testing.");
    process.exit(1);
  }

  const targetRoot = resolve(getOption("--cwd", process.cwd()));
  const dryRun = getFlag("--dry-run");
  const force = getFlag("--force");
  const copied = [];
  const skipped = [];

  for (const file of component.files) {
    const source = ensureInsidePackage(file);
    const destination = resolve(targetRoot, file);

    if (!existsSync(source) || !statSync(source).isFile()) {
      console.error(`Source file missing: ${file}`);
      process.exit(1);
    }

    if (source === destination) {
      skipped.push(`${file} (same project)`);
      continue;
    }

    if (existsSync(destination) && !force) {
      skipped.push(`${file} (already exists, use --force to overwrite)`);
      continue;
    }

    if (!dryRun) {
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, readFileSync(source, "utf8"));
    }
    copied.push(file);
  }

  console.log(`${dryRun ? "Dry run:" : "Added:"} ${component.name}`);
  if (copied.length) {
    console.log("\nFiles:");
    for (const file of copied) console.log(`+ ${file}`);
  }
  if (skipped.length) {
    console.log("\nSkipped:");
    for (const file of skipped) console.log(`- ${file}`);
  }
  if (component.dependencies.length) {
    console.log("\nInstall dependencies if missing:");
    console.log(`npm install ${component.dependencies.join(" ")}`);
  }
}

switch (command) {
  case "list":
    listComponents();
    break;
  case "info":
    showInfo(args[1]);
    break;
  case "add":
    addComponent(args[1]);
    break;
  case "help":
  case "--help":
  case "-h":
  case undefined:
    usage();
    break;
  default:
    console.error(`Unknown command: ${command}\n`);
    usage();
    process.exit(1);
}
