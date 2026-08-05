import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const ROUTES = ["/", "/legal"];

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`vite preview injoignable sur ${url}`);
}

const server = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--strictPort"],
  { stdio: "ignore", shell: process.platform === "win32" }
);

let exitCode = 0;
try {
  await waitForServer(BASE);
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  // PHASE 1 : tout capturer AVANT d'ecrire quoi que ce soit.
  const captures = [];
  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle0" });
    await page.waitForSelector("#root > *", { timeout: 10000 });
    const html =
      "<!doctype html>\n" +
      (await page.evaluate(() => document.documentElement.outerHTML));
    captures.push({ route, html });
  }
  await browser.close();

  // PHASE 2 : ecrire tous les fichiers.
  for (const { route, html } of captures) {
    const outDir = path.join("dist", route === "/" ? "" : route.slice(1));
    await mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    await writeFile(outFile, html, "utf8");
    console.log(`OK prerendu ${route} -> ${outFile} (${html.length} octets)`);
  }
} catch (err) {
  console.error("ECHEC prerender :", err.message);
  exitCode = 1;
} finally {
  server.kill();
  process.exit(exitCode);
}