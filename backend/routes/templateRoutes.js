const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

router.get('/templates/:templateId/download', templateController.downloadTemplate);
router.get('/templates/:templateId/check-purchase', templateController.checkPurchase);

module.exports = router;

