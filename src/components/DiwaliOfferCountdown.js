"use client";

import { useEffect, useState } from "react";
import {
  DIWALI_OFFER_LABEL,
  padUnit,
  remainingMs,
  splitRemaining,
} from "lib/diwaliOffer";

const PLACEHOLDER = { days: "00", hours: "00", minutes: "00", seconds: "00" };

function unitsFromRemaining(ms) {
  if (ms == null) return PLACEHOLDER;
  const parts = splitRemaining(ms);
  return {
    days: padUnit(parts.days),
    hours: padUnit(parts.hours),
    minutes: padUnit(parts.minutes),
    seconds: padUnit(parts.seconds),
  };
}

function DigitCell({ value, label }) {
  return (
    <div className="flex min-w-[3.15rem] flex-1 flex-col items-center sm:min-w-[3.5rem]">
      <span className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-theme-blue text-lg font-black tabular-nums tracking-tight text-white sm:h-12 sm:text-xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-theme-purple sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function TimerGrid({ units, compact }) {
  const cells = [
    [units.days, "Days"],
    [units.hours, "Hrs"],
    [units.minutes, "Min"],
    [units.seconds, "Sec"],
  ];
  if (compact) {
    return (
      <div
        className="flex items-center gap-1.5"
        role="timer"
        aria-live="off"
        aria-label={DIWALI_OFFER_LABEL}
      >
        {cells.map(([value, label], idx) => (
          <span key={label} className="inline-flex items-center gap-1">
            <span className="inline-flex min-w-[1.75rem] items-center justify-center rounded-md bg-theme-blue px-1.5 py-1 text-[11px] font-black tabular-nums text-white">
              {value}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-theme-purple">
              {label}
            </span>
            {idx < cells.length - 1 ? (
              <span className="text-[10px] font-black text-theme-blue/40" aria-hidden="true">
                :
              </span>
            ) : null}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div
      className="flex w-full max-w-sm gap-2"
      role="timer"
      aria-live="off"
      aria-label={DIWALI_OFFER_LABEL}
    >
      {cells.map(([value, label]) => (
        <DigitCell key={label} value={value} label={label} />
      ))}
    </div>
  );
}

/**
 * Client countdown to Diwali. SSR and the first client paint use a static
 * 00:00:00:00 placeholder so hydration matches. After mount the timer ticks.
 * When the deadline has passed, the offer and timer are not rendered.
 */
export default function DiwaliOfferCountdown({
  children,
  compact = false,
  className = "",
  showLabel = true,
  timerFirst = false,
  id,
}) {
  const [ms, setMs] = useState(null);

  useEffect(() => {
    const tick = () => setMs(remainingMs());
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (ms === 0) return null;

  const units = unitsFromRemaining(ms);
  const timer = (
    <div className={compact ? (children ? "mt-2" : "") : children && !timerFirst ? "mt-4" : children ? "mb-4" : ""}>
      {showLabel ? (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-theme-purple sm:text-xs">
          {DIWALI_OFFER_LABEL}
        </p>
      ) : null}
      <TimerGrid units={units} compact={compact} />
    </div>
  );

  return (
    <div id={id} className={className}>
      {timerFirst ? timer : null}
      {children}
      {timerFirst ? null : timer}
    </div>
  );
}

/** Renders `before` until the deadline, then `after` (or nothing). */
export function DiwaliRefundLabel({ before, after = null }) {
  const [ms, setMs] = useState(null);

  useEffect(() => {
    const tick = () => setMs(remainingMs());
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (ms === 0) return after;
  return before;
}
