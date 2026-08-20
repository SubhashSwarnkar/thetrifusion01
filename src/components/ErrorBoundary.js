"use client";

import React from "react";
import Link from "next/link";
import Button from "elements/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col w-full h-screen justify-center bg-white px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-theme-blue text-4xl font-bold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We're sorry for the inconvenience. Please try refreshing the page or contact us if the problem persists.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200"
              >
                Refresh Page
              </Button>
              <Button
                href="/"
                type="link"
                className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-200"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

