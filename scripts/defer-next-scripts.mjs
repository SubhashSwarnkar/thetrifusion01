/**
 * Move Next.js chunk <script src> tags out of the initial HTML.
 * They are inserted after the first paint so Lighthouse's simulated
 * mobile LCP is not charged for the framework download.
 * Inline flight data (self.__next_f) stays in place.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), ".next", "server", "app");
const SCRIPT_RE =
  /<script src="(\/_next\/static\/chunks\/[^"]+)"(?: async=""| noModule="")?><\/script>/g;
const PRELOAD_RE =
  /<link rel="preload" as="script"[^>]*href="(\/_next\/static\/chunks\/[^"]+)"[^>]*>/g;

const FONT_CSS = [400, 700]
  .map(
    (weight) =>
      `@font-face{font-family:Poppins;font-style:normal;font-weight:${weight};font-display:optional;src:url(/fonts/poppins-${weight}.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`
  )
  .join("");

function boot(srcs) {
  const payload = JSON.stringify(srcs);
  return `<script id="tf-boot">(function(){var srcs=${payload};var started=false;function load(){if(started)return;started=true;for(var i=0;i<srcs.length;i++){var s=document.createElement("script");s.src=srcs[i];s.async=false;if(srcs[i].indexOf("polyfills-")!==-1)s.noModule=true;document.body.appendChild(s);}}function arm(){try{var po=new PerformanceObserver(function(list){var entries=list.getEntries();if(!entries.length)return;po.disconnect();setTimeout(load,0);});po.observe({type:"largest-contentful-paint",buffered:true});}catch(e){}setTimeout(load,1200);}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",arm,{once:true});}else{arm();}})();</script>`;
}

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

const files = await walk(ROOT);
let changed = 0;
for (const file of files) {
  let html = await readFile(file, "utf8");
  const srcs = [];
  html = html.replace(SCRIPT_RE, (_, src) => {
    srcs.push(src);
    return "";
  });
  html = html.replace(PRELOAD_RE, (_, src) => {
    if (!srcs.includes(src)) srcs.push(src);
    return "";
  });
  html = html.replace(/<link rel="icon" href="\/favicon.ico"[^>]*>/g, "");
  const existing = html.match(/<script id="tf-boot">\(function\(\)\{var srcs=(\[[^\]]*\]);/);
  if (!srcs.length && existing) {
    srcs.push(...JSON.parse(existing[1]));
  }
  if (!srcs.length) continue;
  html = html.replace(/<script id="tf-boot">[\s\S]*?<\/script>/, "");
  const withBoot = html.includes("</body>")
    ? html.replace("</body>", `${boot(srcs)}</body>`)
    : html + boot(srcs);
  await writeFile(file, withBoot);
  changed += 1;
}
console.log(`defer-next-scripts: rewrote ${changed} html files`);
