import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

// Une entree par page a generer. Ajouter une route ici suffit.
const ROUTES = ["/", "/en", "/es", "/legal", "/en/legal", "/es/legal"];

// Langue deduite du prefixe d'URL, pour l'attribut <html lang="...">
const langOf = (route) =>
  route.startsWith("/en") ? "en" : route.startsWith("/es") ? "es" : "fr";

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
  // (Ecrire dist/index.html en cours de route contaminerait le repli SPA
  // des routes suivantes avec les metadonnees de la home.)
  const captures = [];
  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle0" });
    await page.waitForSelector("#root > *", { timeout: 10000 });
    let html =
      "<!doctype html>\n" +
      (await page.evaluate(() => document.documentElement.outerHTML));

    // <html lang> corrige par route : React ne peut pas hisser cet attribut
    html = html.replace(/<html lang="[a-z-]*"/i, `<html lang="${langOf(route)}"`);

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
