import React from "react";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col w-full h-screen justify-center bg-white dark:bg-gray-900 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-theme-blue dark:text-white text-4xl font-bold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              We're sorry for the inconvenience. Please try refreshing the page or contact us if the problem persists.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-theme-purple dark:bg-purple-600 text-white rounded-full hover:bg-dark-theme-purple dark:hover:bg-purple-700 transition duration-200"
              >
                Refresh Page
              </Button>
              <Button
                href="/"
                type="link"
                className="px-6 py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-200"
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

