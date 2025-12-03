/**
 * Script to extract template images and project names from template folders
 * This script scans each template folder to find:
 * 1. Preview images (hero images, first image, or preview images)
 * 2. Project names from index.html title tags
 * 
 * Usage: node scripts/extract-template-info.js
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/templets');
const outputFile = path.join(__dirname, '../src/data/templateInfo.json');

// Category mappings
const categoryMappings = {
  'Restaurant': { folder: 'Restaurant', industry: 'restaurant' },
  'Photography': { folder: 'Photography', industry: 'photography' },
  'Digital_Agency': { folder: 'Digital_Agency', industry: 'agency' },
  'Education': { folder: 'Education', industry: 'education' },
  'Fashion-designer': { folder: 'Fashion-designer', industry: 'fashion-designer' },
  'Law-firm': { folder: 'Law-firm', industry: 'law-firm' },
  'Medical-Doctor': { folder: 'Medical-Doctor', industry: 'medical-doctor' },
  'Music-Concert': { folder: 'Music-Concert', industry: 'music-concert' },
  'NGo': { folder: 'NGo', industry: 'ngo' },
  'Pet': { folder: 'Pet', industry: 'pet' },
  'RReal-estate': { folder: 'RReal-estate', industry: 'real-estate' },
  'Titan-master': { folder: 'Titan-master', industry: 'titan-master' },
  'Tour Travels': { folder: 'Tour Travels', industry: 'tour-travels' },
  'Webapp-APp': { folder: 'Webapp-APp', industry: 'webapp-app' },
  'Yoga': { folder: 'Yoga', industry: 'yoga' },
  'e-book': { folder: 'e-book', industry: 'e-book' }
};

// Function to find images in a directory
function findImages(dir, maxDepth = 3, currentDepth = 0) {
  const images = [];
  if (currentDepth >= maxDepth || !fs.existsSync(dir)) return images;

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', 'Doc', 'docs', 'documentation'].includes(entry.name)) {
          images.push(...findImages(fullPath, maxDepth, currentDepth + 1));
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          // Prioritize hero, preview, banner, screenshot images
          const name = entry.name.toLowerCase();
          const priority = 
            name.includes('hero') || name.includes('preview') || 
            name.includes('banner') || name.includes('screenshot') ||
            name.includes('home') || name.includes('main') ? 1 :
            name.includes('logo') || name.includes('icon') ? 3 : 2;
          
          images.push({
            path: fullPath,
            relativePath: path.relative(dir, fullPath),
            priority,
            name: entry.name
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return images;
}

// Function to extract title from HTML file
function extractTitle(htmlPath) {
  try {
    if (!fs.existsSync(htmlPath)) return null;
    
    const content = fs.readFileSync(htmlPath, 'utf-8');
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    
    if (titleMatch) {
      let title = titleMatch[1].trim();
      // Clean up the title
      title = title.replace(/\s+/g, ' ').trim();
      return title || null;
    }
  } catch (error) {
    console.error(`Error reading ${htmlPath}:`, error.message);
  }
  return null;
}

// Function to get template info for a specific template
function getTemplateInfo(category, projectNum) {
  const categoryInfo = categoryMappings[category];
  if (!categoryInfo) return null;

  const templatePath = path.join(sourceDir, categoryInfo.folder, categoryInfo.folder, projectNum.toString());
  
  if (!fs.existsSync(templatePath)) {
    return null;
  }

  // Get project name from index.html
  const indexPath = path.join(templatePath, 'index.html');
  let projectName = extractTitle(indexPath);
  
  // If no title found, use a default name
  if (!projectName) {
    projectName = `${categoryInfo.folder} Template #${projectNum}`;
  }

  // Find images
  const allImages = findImages(templatePath);
  
  // Sort by priority and get the first one
  allImages.sort((a, b) => a.priority - b.priority);
  
  let imagePath = null;
  if (allImages.length > 0) {
    // Get the best image
    const bestImage = allImages[0];
    // Convert to relative path from src/templets
    const relativeFromSource = path.relative(sourceDir, bestImage.path);
    // Convert to public path (for preview)
    imagePath = `/templates-preview/${relativeFromSource.replace(/\\/g, '/')}`;
  }

  return {
    projectName,
    imagePath,
    templatePath: templatePath.replace(/\\/g, '/')
  };
}

// Main function to extract all template info
function extractAllTemplateInfo() {
  const templateInfo = {};
  
  console.log('Starting template info extraction...\n');

  for (const [category, categoryInfo] of Object.entries(categoryMappings)) {
    console.log(`Processing ${category}...`);
    const categoryPath = path.join(sourceDir, categoryInfo.folder, categoryInfo.folder);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(`  ⚠ Warning: ${categoryPath} not found`);
      continue;
    }

    // Get all project numbers
    const entries = fs.readdirSync(categoryPath, { withFileTypes: true });
    const projectNumbers = entries
      .filter(entry => entry.isDirectory() && !isNaN(parseInt(entry.name)))
      .map(entry => parseInt(entry.name))
      .sort((a, b) => a - b);

    console.log(`  Found ${projectNumbers.length} projects`);

    for (const projectNum of projectNumbers) {
      const info = getTemplateInfo(category, projectNum);
      if (info) {
        const templateId = `${categoryInfo.industry}-individual-${projectNum}`;
        templateInfo[templateId] = {
          name: info.projectName,
          image: info.imagePath,
          templatePath: info.templatePath
        };
        console.log(`    ✓ ${projectNum}: ${info.projectName.substring(0, 50)}`);
      }
    }
  }

  // Also handle collection templates
  for (const [category, categoryInfo] of Object.entries(categoryMappings)) {
    const collectionId = `${categoryInfo.industry}-template-full`;
    const firstProjectPath = path.join(sourceDir, categoryInfo.folder, categoryInfo.folder, '1');
    
    if (fs.existsSync(firstProjectPath)) {
      const info = getTemplateInfo(category, 1);
      if (info) {
        templateInfo[collectionId] = {
          name: `${categoryInfo.folder} Template Collection`,
          image: info.imagePath,
          templatePath: info.templatePath
        };
      }
    }
  }

  // Save to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(templateInfo, null, 2));
  console.log(`\n✓ Template info extracted successfully!`);
  console.log(`  Total templates: ${Object.keys(templateInfo).length}`);
  console.log(`  Output file: ${outputFile}`);
  
  return templateInfo;
}

// Run the extraction
if (require.main === module) {
  extractAllTemplateInfo();
}

module.exports = { extractAllTemplateInfo, getTemplateInfo };

