const archiver = require('archiver');
const path = require('path');
const fs = require('fs');
const Order = require('../models/orderModel');

/**
 * Verify if user has purchased a template
 */
const verifyPurchase = async (templateId, customerEmail) => {
  try {
    const order = await Order.findOne({
      templateId: templateId,
      customerEmail: customerEmail,
      status: 'paid'
    });

    return !!order;
  } catch (error) {
    console.error('Error verifying purchase:', error);
    return false;
  }
};

/**
 * Get template folder path
 */
const getTemplatePath = (templateId) => {
  // Templates are stored in public/templates-preview/
  // Map template IDs to actual folder names
  const templateMap = {
    // Full collections
    'restaurant-template-full': 'Restaurant',
    'photography-template-full': 'Photography',
    'digital-agency-template-full': 'Digital_Agency',
    'education-template-full': 'Education',
    'fashion-designer-template-full': 'Fashion-designer',
    'law-firm-template-full': 'Law-firm',
    'medical-doctor-template-full': 'Medical-Doctor',
    'music-concert-template-full': 'Music-Concert',
    'ngo-template-full': 'NGo',
    'pet-template-full': 'Pet',
    'real-estate-template-full': 'RReal-estate',
    'tour-travels-template-full': 'Tour Travels',
    'webapp-app-template-full': 'Webapp-APp',
    'yoga-template-full': 'Yoga',
    'e-book-template-full': 'e-book',
    // Individual templates - extract industry from ID
    'restaurant-individual': 'Restaurant',
    'photography-individual': 'Photography',
    'agency-individual': 'Digital_Agency',
    'education-individual': 'Education',
    'fashion-designer-individual': 'Fashion-designer',
    'law-firm-individual': 'Law-firm',
    'medical-doctor-individual': 'Medical-Doctor',
    'music-concert-individual': 'Music-Concert',
    'ngo-individual': 'NGo',
    'pet-individual': 'Pet',
    'real-estate-individual': 'RReal-estate',
    'tour-travels-individual': 'Tour Travels',
    'webapp-app-individual': 'Webapp-APp',
    'yoga-individual': 'Yoga',
    'e-book-individual': 'e-book',
  };

  // Extract base template ID (for individual templates like "restaurant-individual-1")
  let baseTemplateId = templateId;
  if (templateId.includes('-individual-')) {
    baseTemplateId = templateId.split('-individual-')[0] + '-individual';
  }

  const templateFolder = templateMap[baseTemplateId] || templateMap[templateId] || templateId;
  const templatePath = path.join(__dirname, '..', '..', 'public', 'templates-preview', templateFolder);

  // Check if the folder exists (some templates might have nested structure)
  if (fs.existsSync(templatePath)) {
    // Check for nested structure (e.g., Digital_Agency/Digital_Agency)
    const nestedPath = path.join(templatePath, templateFolder);
    if (fs.existsSync(nestedPath)) {
      return nestedPath;
    }
    return templatePath;
  }

  // Try direct templateId as folder name
  const directPath = path.join(__dirname, '..', '..', 'public', 'templates-preview', templateId);
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  return null;
};

/**
 * Download template as ZIP
 */
exports.downloadTemplate = async (req, res) => {
  try {
    const { templateId } = req.params;
    const { customerEmail } = req.query;

    if (!templateId) {
      return res.status(400).json({ error: 'Template ID is required' });
    }

    if (!customerEmail) {
      return res.status(400).json({ error: 'Customer email is required for verification' });
    }

    // Verify purchase
    const hasPurchased = await verifyPurchase(templateId, customerEmail);
    if (!hasPurchased) {
      return res.status(403).json({ 
        error: 'Template not purchased or payment not verified. Please complete your purchase first.' 
      });
    }

    // Get template path
    const templatePath = getTemplatePath(templateId);
    if (!templatePath || !fs.existsSync(templatePath)) {
      return res.status(404).json({ error: 'Template not found' });
    }

    // Get template name for zip file
    const order = await Order.findOne({
      templateId: templateId,
      customerEmail: customerEmail,
      status: 'paid'
    });

    const templateName = order?.templateName || templateId;
    const zipFileName = `${templateName.replace(/\s+/g, '_')}_${Date.now()}.zip`;

    // Set response headers
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${zipFileName}"`);

    // Create zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    // Handle archive errors
    archive.on('error', (err) => {
      console.error('Archive error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to create archive' });
      }
    });

    // Pipe archive data to response
    archive.pipe(res);

    // Add template directory to archive
    archive.directory(templatePath, false);

    // Finalize the archive
    await archive.finalize();

  } catch (error) {
    console.error('Download error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to download template' });
    }
  }
};

/**
 * Check if user has purchased a template
 */
exports.checkPurchase = async (req, res) => {
  try {
    const { templateId } = req.params;
    const { customerEmail } = req.query;

    if (!templateId || !customerEmail) {
      return res.status(400).json({ error: 'Template ID and customer email are required' });
    }

    const hasPurchased = await verifyPurchase(templateId, customerEmail);
    
    if (hasPurchased) {
      const order = await Order.findOne({
        templateId: templateId,
        customerEmail: customerEmail,
        status: 'paid'
      }).sort({ createdAt: -1 });

      res.json({
        purchased: true,
        order: {
          orderId: order?.orderId,
          templateId: order?.templateId,
          templateName: order?.templateName,
          purchasedAt: order?.createdAt
        }
      });
    } else {
      res.json({ purchased: false });
    }
  } catch (error) {
    console.error('Check purchase error:', error);
    res.status(500).json({ error: 'Failed to check purchase status' });
  }
};

