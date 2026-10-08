import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ALIASES = {
  "config/site": "src/config/site.js",
};

const IMAGE_EXT = /\.(?:png|jpe?g|gif|webp|avif|svg)$/i;

function isImageSpecifier(specifier) {
  return IMAGE_EXT.test(specifier.split("?")[0]);
}

function resolveImageUrl(specifier, context) {
  if (!context.parentURL) return pathToFileURL(path.resolve(specifier)).href;
  const parent = fileURLToPath(context.parentURL);
  const abs = path.resolve(path.dirname(parent), specifier.split("?")[0]);
  return pathToFileURL(abs).href;
}

export async function resolve(specifier, context, nextResolve) {
  if (isImageSpecifier(specifier)) {
    return {
      url: resolveImageUrl(specifier, context),
      shortCircuit: true,
    };
  }

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

  if (!relative && !specifier.startsWith("node:") && !path.isAbsolute(specifier)) {
    const base = path.resolve("src", specifier);
    const candidates = [
      `${base}.js`,
      `${base}.mjs`,
      `${base}.jsx`,
      path.join(base, "index.js"),
    ];
    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        return nextResolve(pathToFileURL(candidate).href, context);
      }
    }
  }

  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (isImageSpecifier(url)) {
    return {
      format: "module",
      source: "export default '';\n",
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
