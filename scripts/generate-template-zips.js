/**
 * Script to generate zip files for templates from the templates-preview folder
 * Run this script to create zip files in public/templates-zip/ folder
 * 
 * Usage: 
 *   1. Install archiver: npm install archiver --save-dev
 *   2. Run: node scripts/generate-template-zips.js
 */

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const templatesPreviewDir = path.join(__dirname, '../public/templates-preview');
const templatesZipDir = path.join(__dirname, '../public/templates-zip');

// Create templates-zip directory if it doesn't exist
if (!fs.existsSync(templatesZipDir)) {
  fs.mkdirSync(templatesZipDir, { recursive: true });
  console.log('Created public/templates-zip directory');
}

// Template ID mapping function
// This maps template paths to template IDs based on the templatesData.js structure
function getTemplateId(category, projectNum) {
  const categoryMap = {
    'Restaurant': 'restaurant',
    'Photography': 'photography',
    'Digital_Agency': 'digital-agency',
    'Education': 'education',
    'Fashion-designer': 'fashion-designer',
    'Law-firm': 'law-firm',
    'Medical-Doctor': 'medical-doctor',
    'Music-Concert': 'music-concert',
    'NGo': 'ngo',
    'Pet': 'pet',
    'RReal-estate': 'real-estate',
    'Titan-master': 'titan-master',
    'Tour Travels': 'tour-travels',
    'Webapp-APp': 'webapp-app',
    'Yoga': 'yoga',
    'e-book': 'e-book'
  };

  const categoryKey = categoryMap[category] || category.toLowerCase().replace(/\s+/g, '-');
  return `${categoryKey}-individual-${projectNum}`;
}

// Function to create a zip file from a directory
function createZip(sourceDir, outputPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => {
      console.log(`✓ Created: ${path.basename(outputPath)} (${archive.pointer()} bytes)`);
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

// Main function to generate all zip files
async function generateAllZips() {
  console.log('Starting zip file generation...\n');

  if (!fs.existsSync(templatesPreviewDir)) {
    console.error(`Error: Templates preview directory not found: ${templatesPreviewDir}`);
    console.log('Please run "npm run setup-previews" first to copy templates to public folder.');
    process.exit(1);
  }

  const categories = fs.readdirSync(templatesPreviewDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalZips = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const category of categories) {
    const categoryPath = path.join(templatesPreviewDir, category);
    
    // Check if there's a nested category folder (e.g., Restaurant/Restaurant)
    const nestedFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    if (nestedFolders.includes(category)) {
      // Has nested structure: Category/Category/ProjectNum
      const nestedCategoryPath = path.join(categoryPath, category);
      const projects = fs.readdirSync(nestedCategoryPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => !isNaN(parseInt(name))); // Only numeric folders

      for (const projectNum of projects) {
        const projectPath = path.join(nestedCategoryPath, projectNum);
        const templateId = getTemplateId(category, projectNum);
        const zipFileName = `${templateId}.zip`;
        const zipFilePath = path.join(templatesZipDir, zipFileName);

        totalZips++;
        try {
          await createZip(projectPath, zipFilePath);
          successCount++;
        } catch (error) {
          console.error(`✗ Error creating zip for ${templateId}:`, error.message);
          errorCount++;
        }
      }
    } else {
      // Direct structure: Category/ProjectNum (if any)
      const projects = fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => !isNaN(parseInt(name)));

      for (const projectNum of projects) {
        const projectPath = path.join(categoryPath, projectNum);
        const templateId = getTemplateId(category, projectNum);
        const zipFileName = `${templateId}.zip`;
        const zipFilePath = path.join(templatesZipDir, zipFileName);

        totalZips++;
        try {
          await createZip(projectPath, zipFilePath);
          successCount++;
        } catch (error) {
          console.error(`✗ Error creating zip for ${templateId}:`, error.message);
          errorCount++;
        }
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Generation complete!`);
  console.log(`Total: ${totalZips} | Success: ${successCount} | Errors: ${errorCount}`);
  console.log(`\nZip files are available in: ${templatesZipDir}`);
  console.log('You can now use the download functionality in your app.');
}

// Check if archiver is available
try {
  require.resolve('archiver');
  generateAllZips().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
} catch (e) {
  console.error('Error: "archiver" package is not installed.');
  console.log('\nPlease install it first:');
  console.log('  npm install archiver --save-dev');
  console.log('\nThen run this script again:');
  console.log('  node scripts/generate-template-zips.js');
  process.exit(1);
}

