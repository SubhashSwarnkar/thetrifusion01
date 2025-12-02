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
 * Download template files
 * Note: For large template folders, this should ideally be handled by a backend API
 * that serves pre-zipped files or provides a download link
 */
export const downloadTemplate = async (templateId, templatePath, templateName) => {
  try {
    // Check if template is purchased
    if (!isTemplatePurchased(templateId)) {
      throw new Error('Template not purchased. Please complete the purchase first.');
    }

    // Update download count
    const purchases = getPurchases();
    if (purchases[templateId]) {
      purchases[templateId].downloadCount = (purchases[templateId].downloadCount || 0) + 1;
      purchases[templateId].lastDownloadedAt = new Date().toISOString();
      localStorage.setItem('templatePurchases', JSON.stringify(purchases));
    }

    // Check if backend API is available
    const apiUrl = process.env.REACT_APP_API_URL;
    
    if (apiUrl) {
      // Option 1: Use backend API to download zipped template
      try {
        const response = await fetch(`${apiUrl}/api/templates/${templateId}/download`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
          }
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${templateName.replace(/\s+/g, '_')}.zip`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          
          return {
            success: true,
            message: 'Download started successfully!'
          };
        }
      } catch (apiError) {
        console.warn('Backend API not available, using alternative method:', apiError);
      }
    }

    // Option 2: For development/local setup, provide instructions
    // In production, you should always use a backend API
    const purchase = purchases[templateId];
    const downloadInfo = {
      templateId,
      templateName,
      templatePath,
      purchaseDate: purchase?.purchasedAt,
      customerEmail: purchase?.customerEmail
    };

    // Store download request info (for backend processing)
    localStorage.setItem(`downloadRequest_${templateId}`, JSON.stringify(downloadInfo));

    // Show instructions to user
    const message = `
      Template Download Request
      
      Template: ${templateName}
      Template ID: ${templateId}
      
      For large template collections, please contact our support team with your purchase details.
      We will provide you with a secure download link.
      
      Email: support@thetrifusion.com
      Include your purchase email: ${purchase?.customerEmail || 'N/A'}
    `;

    // Copy download info to clipboard if possible
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(downloadInfo, null, 2));
    }

    // Open email client or show instructions
    const emailSubject = encodeURIComponent(`Template Download Request - ${templateName}`);
    const emailBody = encodeURIComponent(
      `Hello,\n\nI would like to download the template I purchased:\n\n` +
      `Template: ${templateName}\n` +
      `Template ID: ${templateId}\n` +
      `Purchase Email: ${purchase?.customerEmail || 'N/A'}\n` +
      `Purchase Date: ${purchase?.purchasedAt || 'N/A'}\n\n` +
      `Please provide the download link.\n\nThank you!`
    );
    
    window.open(`mailto:support@thetrifusion.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    return {
      success: true,
      message: 'Download request processed. Please check your email or contact support.',
      requiresBackend: true
    };
  } catch (error) {
    console.error('Download error:', error);
    throw error;
  }
};

/**
 * Alternative: Direct file download using fetch (for smaller files)
 * For large template folders, use backend API instead
 */
export const downloadTemplateDirect = async (templateId, templatePath, templateName) => {
  // This is a placeholder for direct download
  // In production, implement backend API that:
  // 1. Zips the template folder
  // 2. Returns the zip file as a blob
  // 3. Triggers browser download
  
  const response = await fetch(`/api/templates/${templateId}/download`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}` // If using auth
    }
  });

  if (!response.ok) {
    throw new Error('Download failed');
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${templateName}.zip`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

