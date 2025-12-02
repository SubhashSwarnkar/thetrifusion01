import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";
import SearchBar from "../components/SearchBar";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header bg-white border-gray-100">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button
          className="block text-theme-blue lg:hidden focus:outline-none focus:ring-2 focus:ring-theme-purple rounded p-1"
          onClick={() => setIsCollapse(!isCollapse)}
          aria-label="Toggle navigation menu"
          aria-expanded={isCollapse}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav className="hidden lg:flex items-center space-x-1">
        <Button
          className={`${
            path.startsWith("/blog") ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/blog"
        >
          Blogs
        </Button>
        <Button
          className={`${
            path === "/" ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/"
        >
          Home
        </Button>
        <Button
          className={`${
            path.startsWith("/services") ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/services"
        >
          Services
        </Button>
        <Button
          className={`${
            path.startsWith("/portfolio") || path.startsWith("/project") ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/portfolio"
        >
          Portfolio
        </Button>
        <Button
          className={`${
            path.startsWith("/pricing") ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/pricing"
        >
          Pricing
        </Button>
        <div className="relative group">
          <button
            className={`${
              path.startsWith("/estimate") || 
              path.startsWith("/planner") || 
              path.startsWith("/timeline") || 
              path.startsWith("/pricing/calculator") ||
              path.startsWith("/templates/selector")
                ? "text-theme-purple"
                : "text-theme-blue"
            } font-medium text-base px-4 py-2 hover:text-theme-purple transition-colors duration-200 flex items-center`}
            onMouseEnter={() => setIsToolsOpen(true)}
            onMouseLeave={() => setIsToolsOpen(false)}
          >
            Tools
            <svg
              className="ml-1 w-4 h-4 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Transition
            show={isToolsOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div
              className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <Button
                type="link"
                href="/pricing/calculator"
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-light-theme-purple hover:text-theme-purple transition-colors duration-200 text-sm"
              >
                <span className="mr-2">💰</span>Price Calculator
              </Button>
              <Button
                type="link"
                href="/timeline"
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-light-theme-purple hover:text-theme-purple transition-colors duration-200 text-sm"
              >
                <span className="mr-2">⏱️</span>Timeline Calculator
              </Button>
              <Button
                type="link"
                href="/planner"
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-light-theme-purple hover:text-theme-purple transition-colors duration-200 text-sm"
              >
                <span className="mr-2">📋</span>Page Planner
              </Button>
              <Button
                type="link"
                href="/estimate"
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-light-theme-purple hover:text-theme-purple transition-colors duration-200 text-sm"
              >
                <span className="mr-2">🤖</span>AI Estimator
              </Button>
              <Button
                type="link"
                href="/templates/selector"
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-light-theme-purple hover:text-theme-purple transition-colors duration-200 text-sm"
              >
                <span className="mr-2">🎨</span>Template Selector
              </Button>
            </div>
          </Transition>
        </div>
        <Button
          className={`${
            path.startsWith("/templates") && !path.startsWith("/templates/selector") ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/templates"
        >
          Templates
        </Button>
        <Button
          className={`${
            path === "/about" ? "active-link" : ""
          } font-medium text-base px-4 py-2 text-theme-blue hover:text-theme-purple transition-colors duration-200`}
          type="link"
          href="/about"
        >
          About
        </Button>
        <Button
          className="font-semibold text-base px-6 py-2.5 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition-all duration-200 shadow-md hover:shadow-lg"
          type="link"
          href="/contact"
        >
          Get Started
        </Button>
      </nav>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <nav className="z-50 flex flex-col text-theme-blue my-6 absolute bg-white w-full border-b-2 border-gray-200 lg:hidden shadow-lg">
            <Button
              className={`${
                path.startsWith("/blog") ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/blog"
            >
              Blogs
            </Button>
            <Button
              className={`${
                path === "/" ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/"
            >
              Home
            </Button>
            <Button
              className={`${
                path.startsWith("/services") ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/services"
            >
              Services
            </Button>
            <Button
              className={`${
                path.startsWith("/portfolio") || path.startsWith("/project") ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/portfolio"
            >
              Portfolio
            </Button>
            <Button
              className={`${
                path.startsWith("/pricing") ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/pricing"
            >
              Pricing
            </Button>
            <button
              className={`${
                path.startsWith("/estimate") || 
                path.startsWith("/planner") || 
                path.startsWith("/timeline") || 
                path.startsWith("/pricing/calculator") ||
                path.startsWith("/templates/selector")
                  ? "active-link"
                  : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 w-full flex items-center justify-between`}
              onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
            >
              <span>Tools</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isMobileToolsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Transition
              show={isMobileToolsOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-96"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 max-h-96"
              leaveTo="opacity-0 max-h-0"
            >
              <div className="overflow-hidden bg-gray-50">
                <Button
                  type="link"
                  href="/pricing/calculator"
                  className="block w-full text-left px-10 py-2.5 text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">💰</span>Price Calculator
                </Button>
                <Button
                  type="link"
                  href="/timeline"
                  className="block w-full text-left px-10 py-2.5 text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">⏱️</span>Timeline Calculator
                </Button>
                <Button
                  type="link"
                  href="/planner"
                  className="block w-full text-left px-10 py-2.5 text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">📋</span>Page Planner
                </Button>
                <Button
                  type="link"
                  href="/estimate"
                  className="block w-full text-left px-10 py-2.5 text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">🤖</span>AI Estimator
                </Button>
                <Button
                  type="link"
                  href="/templates/selector"
                  className="block w-full text-left px-10 py-2.5 text-gray-700 hover:text-theme-purple hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">🎨</span>Template Selector
                </Button>
              </div>
            </Transition>
            <Button
              className={`${
                path.startsWith("/templates") && !path.startsWith("/templates/selector") ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/templates"
            >
              Templates
            </Button>
            <Button
              className={`${
                path === "/about" ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/about"
            >
              About
            </Button>
            <Button
              className={`${
                path === "/contact" ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/contact"
            >
              Contact
            </Button>
            <Button
              className={`${
                path === "/team" ? "active-link" : ""
              } font-medium px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200`}
              type="link"
              href="/team"
            >
              Team
            </Button>
            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                className="font-semibold w-full text-center px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition-all duration-200 shadow-md"
                type="link"
                href="/contact"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
