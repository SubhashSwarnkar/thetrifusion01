import React, { useState, useEffect } from "react";

export default function TemplatePreview({ template, isOpen, onClose }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  
  // Reset loading state when template or preview URL changes
  useEffect(() => {
    if (isOpen && template) {
      setLoading(true);
      setError(null);
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

  // Don't render if not open or no template
  if (!isOpen || !template) return null;

  return (
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
        <div className="flex-1 relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
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

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-theme-purple">
              ₹{template.price.toLocaleString()}
            </span>
            {template.originalPrice && (
              <span className="line-through ml-2">
                ₹{template.originalPrice.toLocaleString()}
              </span>
            )}
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
  );
}

