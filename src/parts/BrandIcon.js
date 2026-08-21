"use client";

import React from "react";

import Button from "../elements/Button";

export default function BrandIcon() {
  return (
    <Button className="flex" type="link" href="/blog">
      <div className="flex flex-col text-center">
        <p className="text-theme-blue text-3xl sm:text-4xl md:text-5xl font-bold">
       TheTri<span className="text-theme-purple">Fusion</span>
        </p>
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-theme-purple mt-1">
          Infotech Pvt. Ltd.
        </p>
        
      </div>
    </Button>
  );
}
