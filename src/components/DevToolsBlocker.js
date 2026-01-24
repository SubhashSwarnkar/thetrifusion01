import { useEffect } from 'react';
import { initDevToolsBlocker, cleanupDevToolsBlocker } from 'utils/devToolsBlocker';

/**
 * Component to block developer tools and inspect element
 * This makes it significantly harder for users to access DevTools,
 * though determined users can still find ways around it.
 */
export default function DevToolsBlocker() {
  useEffect(() => {
    // Initialize DevTools blocking when component mounts
    initDevToolsBlocker();

    // Cleanup when component unmounts
    return () => {
      cleanupDevToolsBlocker();
    };
  }, []);

  // This component doesn't render anything
  return null;
}

