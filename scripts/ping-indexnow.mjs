const HOST = "www.thetrifusion.in";
const KEY = "trifusion-indexnow-2026a1b2c3d4e5";

const urls = process.argv.slice(2);
if (!urls.length) {
  console.error("Usage: node scripts/ping-indexnow.mjs <url> [url...]");
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
console.log(res.status, await res.text());
