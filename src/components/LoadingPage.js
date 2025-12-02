import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  );
}

