#!/usr/bin/env node
// Screenshot a page the way a person sees it, on macOS, Windows, or Linux.
//
//   node shoot.mjs <url> [outDir] [name]
//
// Writes, for desktop (1440x900) and mobile (390x844):
//   <name>-desktop-full.png / <name>-mobile-full.png
//     whole page with reduced motion, so scroll-reveal sections are visible
//   <name>-desktop-scroll-0..4.png / <name>-mobile-scroll-0..4.png
//     the viewport at 0/25/50/75/100% scroll with motion on, to judge animation
//
// Needs Playwright in the project folder (run once there):
//   npm i -D playwright && npx playwright install chromium

import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const [url, outDir = "shots", name = "page"] = process.argv.slice(2);
if (!url) {
  console.error("Usage: node shoot.mjs <url> [outDir] [name]");
  process.exit(1);
}

let chromium;
try {
  // Resolve Playwright from the project folder, not from this skill's folder.
  ({ chromium } = createRequire(resolve(process.cwd(), "noop.js"))("playwright"));
} catch {
  console.error("Playwright not found in this folder. Run: npm i -D playwright && npx playwright install chromium");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const sizes = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
const browser = await chromium.launch();
const written = [];

for (const [label, viewport] of Object.entries(sizes)) {
  // Full page, motion off: every section rendered in its final state.
  const still = await browser.newPage({ viewport, reducedMotion: "reduce", isMobile: label === "mobile" });
  await still.goto(url, { waitUntil: "networkidle" });
  const full = join(outDir, `${name}-${label}-full.png`);
  await still.screenshot({ path: full, fullPage: true });
  written.push(full);
  await still.close();

  // Viewport at five scroll positions, motion on.
  const live = await browser.newPage({ viewport, isMobile: label === "mobile" });
  await live.goto(url, { waitUntil: "networkidle" });
  const max = await live.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  for (let i = 0; i <= 4; i++) {
    await live.evaluate((y) => window.scrollTo(0, y), Math.round((max * i) / 4));
    await live.waitForTimeout(600);
    const shot = join(outDir, `${name}-${label}-scroll-${i}.png`);
    await live.screenshot({ path: shot });
    written.push(shot);
  }
  await live.close();
}

await browser.close();
console.log(written.join("\n"));
