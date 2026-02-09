import React, { useState, useEffect } from "react";

export default function TemplatePreview({ template, isOpen, onClose }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // 'mobile', 'tablet', 'desktop'

  // Generate preview URL based on template path
  const getPreviewUrl = () => {
    if (!template) return null;
    
    // Use previewUrl if available (already constructed in template data)
    if (template.previewUrl) {
      return template.previewUrl;
    }
    
    // Fallback to demoUrl if it's a valid URL
    if (template.demoUrl && template.demoUrl !== "#" && template.demoUrl.startsWith("http")) {
      return template.demoUrl;
    }
    
    // For templates in the templets folder, construct the path
    // templatePath format: "templets/Restaurant/Restaurant/1"
    // We need: "/templates-preview/Restaurant/Restaurant/1/index.html"
    if (template.templatePath) {
      const previewPath = template.templatePath.replace("templets/", "");
      // Ensure we have index.html at the end
      const finalPath = previewPath.endsWith('/index.html') 
        ? previewPath 
        : `${previewPath}/index.html`;
      return `/templates-preview/${finalPath}`;
    }
    
    return null;
  };

  const previewUrl = getPreviewUrl();
  
  // Get base URL for the template (directory containing index.html)
  // This ensures relative paths in templates resolve correctly
  const getBaseUrl = () => {
    if (!previewUrl) return null;
    const lastSlashIndex = previewUrl.lastIndexOf('/');
    return lastSlashIndex > 0 ? previewUrl.substring(0, lastSlashIndex + 1) : previewUrl;
  };

  const baseUrl = getBaseUrl();
  
  // Reset loading state and view mode when template or preview URL changes
  useEffect(() => {
    if (isOpen && template) {
      setLoading(true);
      setError(null);
      setViewMode('desktop'); // Reset to desktop view when opening a new template
    }
  }, [isOpen, template?.id, previewUrl]);

  // Add timeout to detect if iframe fails to load
  useEffect(() => {
    if (isOpen && previewUrl && template) {
      const timeout = setTimeout(() => {
        setLoading(prevLoading => {
          if (prevLoading) {
            setError(`Preview is taking too long to load. Please check if the template file exists at: ${previewUrl}. Make sure you've restarted the development server after copying templates.`);
            return false;
          }
          return prevLoading;
        });
      }, 10000); // 10 second timeout

      return () => clearTimeout(timeout);
    }
  }, [isOpen, previewUrl, template]);

  const handleIframeLoad = () => {
    setLoading(false);
    setError(null);
    // Try to access iframe content to verify it loaded
    try {
      if (template) {
        const iframe = document.querySelector(`iframe[title="${template.name} Preview"]`);
        if (iframe && iframe.contentWindow) {
          // Iframe loaded successfully
          console.log('Template preview loaded:', previewUrl);
        }
      }
    } catch (e) {
      // Cross-origin restrictions might prevent access, but that's okay
      console.log('Template preview iframe loaded (cross-origin check skipped)');
    }
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(`Failed to load preview. The template file may not be available at: ${previewUrl}. Please ensure templates are copied to the public folder and the development server has been restarted.`);
  };

  // Dev Tools Protection - Disabled to allow dev mode
  useEffect(() => {
    if (!isOpen) {
      // Remove body class when preview closes
      document.body.classList.remove('template-preview-active');
      return;
    }

    // Add body class when preview opens
    document.body.classList.add('template-preview-active');

    // Cleanup function
    return () => {
      document.body.classList.remove('template-preview-active');
    };
  }, [isOpen]);

  // Don't render if not open or no template
  if (!isOpen || !template) return null;

  return (
    <>
      <style>{`
        /* Prevent text selection in preview container */
        body.template-preview-active {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        body.template-preview-active iframe {
          pointer-events: auto;
        }
      `}</style>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
        <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-theme-blue">
              {template.name} - Preview
            </h2>
            <p className="text-sm text-gray-600">
              {template.category}
            </p>
          </div>
          
          {/* View Mode Switcher - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'mobile'
                  ? 'bg-white text-theme-purple shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Mobile View"
            >
              <svg
                className="w-5 h-5 inline-block mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Mobile
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'tablet'
                  ? 'bg-white text-theme-purple shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Tablet View"
            >
              <svg
                className="w-5 h-5 inline-block mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Tablet
            </button>
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'desktop'
                  ? 'bg-white text-theme-purple shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Desktop View"
            >
              <svg
                className="w-5 h-5 inline-block mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Desktop
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close preview"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Preview Content */}
        <div 
          className="flex-1 relative overflow-auto bg-gray-200 flex items-center justify-center p-4"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          <div
            className={`relative bg-white shadow-2xl transition-all duration-300 ${
              viewMode === 'mobile'
                ? 'w-[375px] h-[667px]'
                : viewMode === 'tablet'
                ? 'w-[768px] h-[1024px]'
                : 'w-full h-full'
            }`}
            style={{
              maxWidth: viewMode === 'desktop' ? '100%' : undefined,
              maxHeight: viewMode === 'desktop' ? '100%' : undefined,
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
            }}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-purple mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading preview...</p>
                </div>
              </div>
            )}

            {error ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-8">
                  <svg
                    className="w-16 h-16 text-red-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-red-600 mb-4">{error}</p>
                  <p className="text-gray-600 text-sm">
                    The template preview is not available. Please contact support or purchase the template to access the files.
                  </p>
                </div>
              </div>
            ) : previewUrl ? (
              <>
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-purple mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading preview...</p>
                    </div>
                  </div>
                )}
                <iframe
                  key={`${template.id}-${previewUrl}`}
                  src={previewUrl}
                  className="w-full h-full border-0"
                  title={`${template.name} Preview`}
                  allowFullScreen
                  onLoad={(e) => {
                    handleIframeLoad();
                    // Fix base path for relative assets in the template
                    // This ensures CSS, JS, and image files load correctly
                    try {
                      const iframe = e.target;
                      if (iframe && iframe.contentDocument && baseUrl) {
                        const doc = iframe.contentDocument;
                        
                        // Inject comprehensive security script to prevent dev tools in iframe
                        const securityScript = `
                          (function() {
                            'use strict';
                            let devToolsDetected = false;
                            let detectionCount = 0;
                            let consoleDetectionCount = 0;
                            const REQUIRED_DETECTIONS = 5; // Require multiple detections to avoid false positives
                            const REQUIRED_CONSOLE_DETECTIONS = 8;
                            
                            // Block right-click context menu
                            document.addEventListener('contextmenu', function(e) {
                              e.preventDefault();
                              e.stopPropagation();
                              return false;
                            }, true);
                            
                            // Block text selection (allow for inputs)
                            document.addEventListener('selectstart', function(e) {
                              if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                                e.preventDefault();
                                return false;
                              }
                            }, true);
                            
                            // Block drag start
                            document.addEventListener('dragstart', function(e) {
                              if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                                e.preventDefault();
                                return false;
                              }
                            }, true);
                            
                            // Block keyboard shortcuts for DevTools
                            function blockKeyboardShortcuts(e) {
                              // F12
                              if (e.keyCode === 123) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+Shift+I
                              if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+Shift+J
                              if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+Shift+C
                              if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+U (View Source)
                              if (e.ctrlKey && e.keyCode === 85) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+S (Save Page)
                              if (e.ctrlKey && e.keyCode === 83) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+P (Print)
                              if (e.ctrlKey && e.keyCode === 80) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+Shift+K (Firefox DevTools)
                              if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                              // Ctrl+Shift+E (Chrome DevTools - Network)
                              if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                            }
                            
                            document.addEventListener('keydown', blockKeyboardShortcuts, true);
                            document.addEventListener('keyup', blockKeyboardShortcuts, true);
                            document.addEventListener('keypress', blockKeyboardShortcuts, true);
                            
                            // Detect DevTools using window size - more conservative
                            function detectDevTools() {
                              const widthThreshold = 250; // Higher threshold for iframes
                              const heightThreshold = 250;
                              const heightDiff = window.outerHeight - window.innerHeight;
                              const widthDiff = window.outerWidth - window.innerWidth;
                              
                              if (heightDiff > heightThreshold || widthDiff > widthThreshold) {
                                detectionCount++;
                                if (detectionCount >= REQUIRED_DETECTIONS) {
                                  devToolsDetected = true;
                                  return true;
                                }
                              } else {
                                detectionCount = Math.max(0, detectionCount - 1);
                              }
                              return false;
                            }
                            
                            // Console-based DevTools detection - more conservative
                            let devtools = { open: false };
                            const element = new Image();
                            Object.defineProperty(element, 'id', {
                              get: function() {
                                devtools.open = true;
                                return 'devtools-detector';
                              }
                            });
                            
                            setInterval(function() {
                              devtools.open = false;
                              try {
                                console.log(element);
                                console.clear();
                              } catch (e) {}
                              if (devtools.open) {
                                consoleDetectionCount++;
                                if (consoleDetectionCount >= REQUIRED_CONSOLE_DETECTIONS) {
                                  devToolsDetected = true;
                                }
                              } else {
                                consoleDetectionCount = Math.max(0, consoleDetectionCount - 1);
                              }
                            }, 1500);
                            
                            // Check for DevTools periodically - less frequent, more conservative
                            setInterval(function() {
                              // Only check if not already detected
                              if (!devToolsDetected && (detectDevTools() || devToolsDetected)) {
                                devToolsDetected = true;
                                // Don't replace body content - just block access
                                // The keyboard shortcuts already prevent opening DevTools
                              }
                            }, 2000);
                            
                            // Clear console repeatedly
                            setInterval(function() {
                              if (typeof console !== 'undefined') {
                                console.clear();
                                console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
                                console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');
                                console.log('%cDo not enter any code here.', 'color: red; font-size: 16px;');
                              }
                            }, 1000);
                            
                            // Add debugger statement to slow down DevTools - only if detected
                            setInterval(function() {
                              if (devToolsDetected) {
                                try {
                                  eval('debugger');
                                } catch (e) {}
                              }
                            }, 1000);
                            
                            // Disable console methods
                            const noop = function() {};
                            const methods = ['debug', 'info', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
                            methods.forEach(function(method) {
                              try {
                                if (console[method]) {
                                  console[method] = noop;
                                }
                              } catch (e) {}
                            });
                          })();
                        `;
                        const script = doc.createElement('script');
                        script.textContent = securityScript;
                        doc.head.appendChild(script);
                        
                        // Check if base tag exists, if not add it
                        let baseTag = doc.querySelector('base');
                        if (!baseTag) {
                          baseTag = doc.createElement('base');
                          baseTag.href = baseUrl;
                          const head = doc.head || doc.getElementsByTagName('head')[0];
                          if (head) {
                            head.insertBefore(baseTag, head.firstChild);
                          }
                        } else {
                          // Update existing base tag if needed
                          const currentBase = new URL(baseTag.href || '', window.location.origin);
                          const expectedBase = new URL(baseUrl, window.location.origin);
                          if (currentBase.pathname !== expectedBase.pathname) {
                            baseTag.href = baseUrl;
                          }
                        }
                        
                        // Also fix any relative paths in link, script, and img tags
                        const fixRelativePaths = (elements, attribute) => {
                          elements.forEach(el => {
                            const attrValue = el.getAttribute(attribute);
                            if (attrValue && !attrValue.startsWith('http') && !attrValue.startsWith('//') && !attrValue.startsWith('/')) {
                              // It's a relative path, ensure it resolves correctly
                              const newPath = new URL(attrValue, baseUrl).pathname;
                              el.setAttribute(attribute, newPath);
                            }
                          });
                        };
                        
                        fixRelativePaths(doc.querySelectorAll('link[href]'), 'href');
                        fixRelativePaths(doc.querySelectorAll('script[src]'), 'src');
                        fixRelativePaths(doc.querySelectorAll('img[src]'), 'src');
                      }
                    } catch (err) {
                      // Cross-origin restrictions might prevent access, that's okay
                      // Templates should have correct base paths in their HTML
                      console.log('Could not modify iframe content (may be cross-origin):', err.message);
                    }
                  }}
                  onError={handleIframeError}
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation"
                  allow="fullscreen"
                  style={{ 
                    display: loading ? 'none' : 'block',
                    minHeight: '100%',
                    width: '100%',
                    height: '100%'
                  }}
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-8">
                  <p className="text-gray-600">
                    Preview not available for this template.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-theme-purple">
              ₹{(template.price || 499).toLocaleString()}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <a
              href={`/templates/${template.id}`}
              className="px-4 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

