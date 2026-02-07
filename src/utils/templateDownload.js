// Template Download Utility

/**
 * Store purchase information in localStorage
 */
export const storePurchase = (templateId, paymentData) => {
  const purchases = getPurchases();
  purchases[templateId] = {
    ...paymentData,
    purchasedAt: new Date().toISOString(),
    downloadCount: 0
  };
  localStorage.setItem('templatePurchases', JSON.stringify(purchases));
};

/**
 * Get all purchases from localStorage
 */
export const getPurchases = () => {
  try {
    const purchases = localStorage.getItem('templatePurchases');
    return purchases ? JSON.parse(purchases) : {};
  } catch (error) {
    console.error('Error reading purchases:', error);
    return {};
  }
};

/**
 * Check if a template has been purchased
 */
export const isTemplatePurchased = (templateId) => {
  const purchases = getPurchases();
  return !!purchases[templateId];
};

/**
 * Get purchase information for a template
 */
export const getTemplatePurchase = (templateId) => {
  const purchases = getPurchases();
  return purchases[templateId] || null;
};

/**
 * Download template files directly from public folder
 */
export const downloadTemplate = async (templateId, templatePath, templateName) => {
  try {
    // Check if template is purchased locally (for UI state)
    if (!isTemplatePurchased(templateId)) {
      throw new Error('Template not purchased. Please complete the purchase first.');
    }

    // Get purchase info
    const purchases = getPurchases();
    const purchase = purchases[templateId];
    
    if (!purchase) {
      throw new Error('Purchase information not found. Please contact support.');
    }

    // Download zip file directly from public folder
    // Zip files should be stored in public/templates-zip/{templateId}.zip
    const zipFileName = `${templateId}.zip`;
    const zipFileUrl = `/templates-zip/${zipFileName}`;
    
    try {
      // Fetch the zip file from public folder
      const response = await fetch(zipFileUrl, {
        method: 'GET',
        cache: 'no-cache'
      });

      if (response.status === 404) {
        throw new Error(`Template zip file not found. Please ensure ${zipFileName} exists in the public/templates-zip folder.`);
      }

      if (!response.ok) {
        throw new Error(`Failed to download template. Status: ${response.status}`);
      }

      // Get the zip file as blob
      const blob = await response.blob();
      
      // Check if blob is valid
      if (blob.size === 0) {
        throw new Error('Downloaded file is empty. Please check the zip file.');
      }

      // Create download link and trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${templateName.replace(/\s+/g, '_')}_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);

      // Update download count
      if (purchases[templateId]) {
        purchases[templateId].downloadCount = (purchases[templateId].downloadCount || 0) + 1;
        purchases[templateId].lastDownloadedAt = new Date().toISOString();
        localStorage.setItem('templatePurchases', JSON.stringify(purchases));
      }
      
      return {
        success: true,
        message: 'Download started successfully!'
      };
    } catch (fetchError) {
      console.error('Download fetch error:', fetchError);
      throw fetchError;
    }
  } catch (error) {
    console.error('Download error:', error);
    throw error;
  }
};

/**
 * Check purchase status from backend
 */
export const checkPurchaseStatus = async (templateId, customerEmail) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://43.204.211.69:5000';
    const response = await fetch(
      `${apiUrl}/api/templates/${templateId}/check-purchase`,
      {
        method: 'GET',
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'omit', // Don't send credentials for cross-origin requests
        headers: {
          'accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { 
        purchased: false, 
        error: errorData.error || errorData.message || 'Failed to check purchase status' 
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Check purchase error:', error);
    return { purchased: false, error: error.message };
  }
};

