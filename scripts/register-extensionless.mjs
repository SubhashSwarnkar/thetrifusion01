import { register } from "node:module";

const hookUrl = new URL("./extensionless-hook.mjs", import.meta.url);
register(hookUrl.href, import.meta.url);
