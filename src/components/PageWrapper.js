import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function PageWrapper({ children }) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}

