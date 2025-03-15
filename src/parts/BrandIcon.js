import React from "react";

import Button from "../elements/Button";

export default function BrandIcon() {
  return (
    <Button className="flex" type="link" href="/">
      <div className="flex flex-col text-center">
        <p className="text-theme-blue text-3xl sm:text-4xl md:text-5xl font-bold">
          Atharv<span className="text-theme-purple">Narayna</span>
        </p>
        <p className="text-theme-blue text-sm sm:text-lg md:text-xl font-medium">
          TheTriFusion
        </p>
      </div>
    </Button>
  );
}
