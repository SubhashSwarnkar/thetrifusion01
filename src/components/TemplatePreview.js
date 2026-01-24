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

  // Dev Tools Protection - Comprehensive security measures
  useEffect(() => {
    if (!isOpen) {
      // Remove body class when preview closes
      document.body.classList.remove('template-preview-active');
      return;
    }

    // Add body class when preview opens
    document.body.classList.add('template-preview-active');

    // Security script to inject into iframe
    const securityScript = `
      (function() {
        'use strict';
        
        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }, true);
        
        // Disable text selection
        document.addEventListener('selectstart', function(e) {
          e.preventDefault();
          return false;
        }, true);
        
        // Disable drag
        document.addEventListener('dragstart', function(e) {
          e.preventDefault();
          return false;
        }, true);
        
        // Block keyboard shortcuts for dev tools
        document.addEventListener('keydown', function(e) {
          // F12
          if (e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          // Ctrl+Shift+I (DevTools)
          if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          // Ctrl+Shift+J (Console)
          if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          // Ctrl+Shift+C (Inspect Element)
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
          // Ctrl+Shift+P (Command Palette)
          if (e.ctrlKey && e.shiftKey && e.keyCode === 80) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          // Ctrl+Shift+K (Console in Firefox)
          if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }, true);
        
        // Disable console (quietly, without detection)
        const noop = function() {};
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
        methods.forEach(function(method) {
          if (window.console && window.console[method]) {
            window.console[method] = noop;
          }
        });
        
        // Disable common debugging functions
        try {
          Object.defineProperty(window, 'console', {
            get: function() {
              return {};
            },
            set: function() {}
          });
        } catch(ex) {
          // Ignore if can't override
        }
      })();
    `;

    // Block keyboard shortcuts on parent window
    const handleKeyDown = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+U
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+S
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+P
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+Shift+P
      if (e.ctrlKey && e.shiftKey && e.keyCode === 80) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      // Ctrl+Shift+K
      if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    // Disable right-click on parent
    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection on parent
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag on parent
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners with capture phase
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('dragstart', handleDragStart, true);

    // Try to inject security script into iframe
    const injectSecurityScript = () => {
      try {
        const iframe = document.querySelector(`iframe[title="${template.name} Preview"]`);
        if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
          const script = iframe.contentDocument.createElement('script');
          script.textContent = securityScript;
          iframe.contentDocument.head.appendChild(script);
        }
      } catch (err) {
        // Cross-origin restrictions - that's okay, we'll rely on parent protection
      }
    };

    // Try to inject after a delay to ensure iframe is loaded
    const injectTimeout = setTimeout(injectSecurityScript, 1000);

    // Detect dev tools on parent window - more accurate detection
    let devtoolsDetector = null;
    let detectionTimeout = null;
    
    const detectDevTools = () => {
      const threshold = 200; // Increased threshold to reduce false positives
      const requiredChecks = 3; // Require multiple consecutive detections
      let checkCount = 0;
      let baselineHeight = window.outerHeight - window.innerHeight;
      let baselineWidth = window.outerWidth - window.innerWidth;
      
      // Set baseline after a short delay to account for modal opening
      setTimeout(() => {
        baselineHeight = window.outerHeight - window.innerHeight;
        baselineWidth = window.outerWidth - window.innerWidth;
      }, 1000);
      
      const checkInterval = setInterval(() => {
        const heightDiff = window.outerHeight - window.innerHeight;
        const widthDiff = window.outerWidth - window.innerWidth;
        
        // Only check if difference is significant AND sustained
        if ((heightDiff > threshold || widthDiff > threshold) && 
            (Math.abs(heightDiff - baselineHeight) > 100 || Math.abs(widthDiff - baselineWidth) > 100)) {
          checkCount++;
          // Only close if detected multiple times consecutively
          if (checkCount >= requiredChecks) {
            // Dev tools detected - close preview
            onClose();
            clearInterval(checkInterval);
          }
        } else {
          checkCount = 0; // Reset counter if not detected
        }
      }, 500);
      devtoolsDetector = checkInterval;
    };

    // Start detection after a delay to avoid false positives from modal opening
    detectionTimeout = setTimeout(detectDevTools, 1500);

    // Cleanup function
    return () => {
      document.body.classList.remove('template-preview-active');
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('dragstart', handleDragStart, true);
      clearTimeout(injectTimeout);
      clearTimeout(detectionTimeout);
      if (devtoolsDetector) {
        clearInterval(devtoolsDetector);
      }
    };
  }, [isOpen, template, onClose]);

  // Don't render if not open or no template
  if (!isOpen || !template) return null;

  return (
    <>
      <style>{`
        /* Prevent text selection and dev tools on preview */
        body.template-preview-active {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }
        body.template-preview-active * {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
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
                        
                        // Inject security script to prevent dev tools in iframe
                        const securityScript = `
                          (function() {
                            'use strict';
                            document.addEventListener('contextmenu', function(e) {
                              e.preventDefault();
                              e.stopPropagation();
                              return false;
                            }, true);
                            document.addEventListener('selectstart', function(e) {
                              e.preventDefault();
                              return false;
                            }, true);
                            document.addEventListener('dragstart', function(e) {
                              e.preventDefault();
                              return false;
                            }, true);
                            document.addEventListener('keydown', function(e) {
                              if (e.keyCode === 123 || 
                                  (e.ctrlKey && e.shiftKey && [73, 74, 67, 80, 75].includes(e.keyCode)) ||
                                  (e.ctrlKey && [85, 83, 80].includes(e.keyCode))) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                              }
                            }, true);
                            // Removed aggressive dev tools detection from iframe
                            // Rely on parent window detection and keyboard blocking only
                            const noop = function() {};
                            const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
                            methods.forEach(function(method) {
                              if (window.console && window.console[method]) {
                                window.console[method] = noop;
                              }
                            });
                            try {
                              Object.defineProperty(window, 'console', {
                                get: function() { return {}; },
                                set: function() {}
                              });
                            } catch(ex) {}
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

