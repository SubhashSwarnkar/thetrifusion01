"use client";

import React from "react";
import Button from "../elements/Button";

export default function BrandIcon({ compact = false, light = false }) {
  return (
    <Button className="flex" type="link" href="/">
      <p
        className={[
          "font-bold leading-none whitespace-nowrap",
          compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-theme-blue",
        ].join(" ")}
      >
        TheTri<span className="text-theme-purple">Fusion</span>
      </p>
    </Button>
  );
}
