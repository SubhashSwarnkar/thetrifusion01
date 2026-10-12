/** Diwali 2026 offer deadline: 8 Nov 2026, 11:59:59 PM IST. */
export const DIWALI_OFFER_DEADLINE_ISO = "2026-11-08T23:59:59+05:30";
export const DIWALI_OFFER_DEADLINE_MS = Date.parse(DIWALI_OFFER_DEADLINE_ISO);
export const DIWALI_OFFER_LABEL = "Diwali offer ends 8 Nov 2026";

export function remainingMs(now = Date.now()) {
  return Math.max(0, DIWALI_OFFER_DEADLINE_MS - now);
}

export function isDiwaliOfferExpired(now = Date.now()) {
  return remainingMs(now) <= 0;
}

export function splitRemaining(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { totalMs: ms, days, hours, minutes, seconds };
}

export function padUnit(value) {
  return String(value).padStart(2, "0");
}
