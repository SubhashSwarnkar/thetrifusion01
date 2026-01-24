// Developer Tools Blocker Utility
// Note: This cannot completely prevent determined users, but makes it significantly harder

let devToolsOpen = false;
let devToolsCheckInterval = null;

/**
 * Detect if DevTools is open using various methods
 */
let consoleDetector = null;
let devToolsDetected = false;

const detectDevTools = () => {
  if (devToolsDetected) return true;

  const widthThreshold = 160;
  const heightThreshold = 160;
  
  // Method 1: Window size detection
  if (
    window.outerHeight - window.innerHeight > heightThreshold ||
    window.outerWidth - window.innerWidth > widthThreshold
  ) {
    devToolsDetected = true;
    return true;
  }

  return false;
};

/**
 * Console-based DevTools detection
 */
const initConsoleDetection = () => {
  if (consoleDetector) return;
  
  let devtools = { open: false };
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      devtools.open = true;
      devToolsDetected = true;
      return 'devtools-detector';
    }
  });
  
  consoleDetector = setInterval(() => {
    devtools.open = false;
    // This will trigger the getter if console is open
    try {
      console.log(element);
      console.clear();
    } catch (e) {
      // Ignore errors
    }
    
    if (devtools.open) {
      devToolsDetected = true;
    }
  }, 1000);
};

/**
 * Block keyboard shortcuts for DevTools
 */
const blockKeyboardShortcuts = (e) => {
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

  // Ctrl+P (Print - can be used to view source)
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

  // Disable right-click context menu
  if (e.button === 2 || e.which === 3) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

/**
 * Block right-click context menu
 */
const blockContextMenu = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

/**
 * Block text selection (optional - can be annoying for users)
 */
const blockTextSelection = (e) => {
  if (e.ctrlKey || e.metaKey) {
    // Allow Ctrl+A for accessibility
    if (e.keyCode === 65) {
      return true;
    }
  }
  
  // Block common selection shortcuts
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 86)) {
    // Allow copy/paste for better UX, but you can block if needed
    return true;
  }
  
  return false;
};

/**
 * Clear console repeatedly
 */
const clearConsole = () => {
  if (typeof console !== 'undefined') {
    console.clear();
    console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');
    console.log('%cDo not enter any code here.', 'color: red; font-size: 16px;');
  }
};

/**
 * Detect and handle DevTools opening
 */
const checkDevTools = () => {
  if (detectDevTools() || devToolsDetected) {
    devToolsOpen = true;
    // Show warning message
    if (document.body) {
      document.body.innerHTML = '<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background: #000; color: #fff; text-align: center; padding: 20px;"><h1 style="font-size: 48px; margin-bottom: 20px;">⚠️ Developer Tools Detected</h1><p style="font-size: 18px; max-width: 600px;">This website does not allow developer tools. Please close the developer tools to continue.</p></div>';
    }
    // Optionally redirect
    // setTimeout(() => { window.location.href = 'about:blank'; }, 2000);
  }
};

/**
 * Initialize DevTools blocking
 */
export const initDevToolsBlocker = () => {
  // Initialize console detection
  initConsoleDetection();

  // Block keyboard shortcuts
  document.addEventListener('keydown', blockKeyboardShortcuts, true);
  document.addEventListener('keyup', blockKeyboardShortcuts, true);
  document.addEventListener('keypress', blockKeyboardShortcuts, true);

  // Block right-click
  document.addEventListener('contextmenu', blockContextMenu, true);
  document.addEventListener('mousedown', blockKeyboardShortcuts, true);

  // Block text selection (optional - comment out if you want users to select text)
  // document.addEventListener('selectstart', (e) => e.preventDefault(), true);
  // document.addEventListener('dragstart', (e) => e.preventDefault(), true);

  // Clear console periodically
  setInterval(clearConsole, 1000);

  // Check for DevTools periodically using window size detection
  devToolsCheckInterval = setInterval(checkDevTools, 500);

  // Add debugger statement to slow down DevTools
  setInterval(() => {
    if (!devToolsDetected) {
      try {
        // This will pause execution if DevTools is open
        eval('debugger');
      } catch (e) {
        // Ignore errors
      }
    }
  }, 1000);

  // Disable common DevTools methods
  try {
    Object.defineProperty(window, 'devtools', {
      get: () => {
        devToolsDetected = true;
        return { open: true };
      },
      set: () => {}
    });
  } catch (e) {
    // Ignore if already defined
  }

  // Override console methods (but keep some for our own use)
  const originalConsole = { ...console };
  const noop = () => {};
  const methods = ['debug', 'info', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
  methods.forEach(method => {
    try {
      if (console[method]) {
        console[method] = noop;
      }
    } catch (e) {
      // Ignore errors
    }
  });

  // Block common inspection methods
  try {
    Object.defineProperty(document, 'hidden', {
      get: () => false,
      configurable: false
    });
  } catch (e) {
    // Ignore if already defined
  }

  // Disable common debugging shortcuts
  document.addEventListener('keydown', (e) => {
    // Block Ctrl+Shift+J, Ctrl+Shift+I, F12, etc. (already handled in blockKeyboardShortcuts)
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase()))) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  }, true);
};

/**
 * Cleanup DevTools blocking
 */
export const cleanupDevToolsBlocker = () => {
  if (devToolsCheckInterval) {
    clearInterval(devToolsCheckInterval);
    devToolsCheckInterval = null;
  }
  if (consoleDetector) {
    clearInterval(consoleDetector);
    consoleDetector = null;
  }
  // Note: Event listeners are harder to remove, but this is typically not needed
  // as the page will be destroyed on navigation
};

