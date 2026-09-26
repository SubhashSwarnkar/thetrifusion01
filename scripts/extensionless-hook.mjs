import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ALIASES = {
  "config/site": "src/config/site.js",
};

export async function resolve(specifier, context, nextResolve) {
  if (ALIASES[specifier]) {
    const abs = path.resolve(ALIASES[specifier]);
    return nextResolve(pathToFileURL(abs).href, context);
  }

  const relative = specifier.startsWith("./") || specifier.startsWith("../");
  if (relative && !path.extname(specifier) && context.parentURL) {
    const parent = fileURLToPath(context.parentURL);
    const base = path.resolve(path.dirname(parent), specifier);
    const candidates = [`${base}.js`, `${base}.mjs`, path.join(base, "index.js")];
    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        return nextResolve(pathToFileURL(candidate).href, context);
      }
    }
  }

  return nextResolve(specifier, context);
}
