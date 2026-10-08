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

// Busy sites (analytics, chat widgets, bot checks) never go network-idle, so wait for
// "load", then give fonts and animations a moment. A slow site still gets captured.
async function open(page) {
  try {
    await page.goto(url, { waitUntil: "load", timeout: 45000 });
  } catch (err) {
    console.error(`Warning: ${err.message.split("\n")[0]} (capturing what loaded)`);
  }
  await page.waitForTimeout(1500);
  // Dismiss cookie banners so they do not cover the design.
  const consent = page.getByRole("button", { name: /^(accept( all)?( cookies)?|agree|i agree|allow all|got it|required only|reject all|ok)$/i });
  if (await consent.first().isVisible().catch(() => false)) {
    await consent.first().click().catch(() => {});
    await page.waitForTimeout(500);
  }
  const title = await page.title().catch(() => "");
  if (/just a moment|access denied|attention required|are you a robot/i.test(title)) {
    console.error(`Warning: "${title}" looks like a bot check, not the real page.`);
  }
}
const sizes = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
const browser = await chromium.launch();
const written = [];

for (const [label, viewport] of Object.entries(sizes)) {
  // Full page, motion off: every section rendered in its final state.
  const still = await browser.newPage({ viewport, reducedMotion: "reduce", isMobile: label === "mobile" });
  await open(still);
  // Scroll through once so on-entry reveals fire, then return to the top.
  await still.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.5) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    scrollTo(0, 0);
  });
  await still.waitForTimeout(400);
  const full = join(outDir, `${name}-${label}-full.png`);
  await still.screenshot({ path: full, fullPage: true });
  written.push(full);
  await still.close();

  // Viewport at five scroll positions, motion on.
  const live = await browser.newPage({ viewport, isMobile: label === "mobile" });
  await open(live);
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
