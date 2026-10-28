import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
} from "../src/data/indexnowKey.js";

const urls = process.argv.slice(2);
if (!urls.length) {
  console.error("Usage: node scripts/ping-indexnow.mjs <url> [url...]");
  process.exit(1);
}

const payload = {
  host: INDEXNOW_HOST,
  key: INDEXNOW_KEY,
  keyLocation: INDEXNOW_KEY_LOCATION,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
console.log(res.status, await res.text());
