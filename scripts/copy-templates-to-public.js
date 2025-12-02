/**
 * Script to copy template files to public folder for preview functionality
 * Run this script before starting the development server
 * 
 * Usage: node scripts/copy-templates-to-public.js
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/templets');
const targetDir = path.join(__dirname, '../public/templates-preview');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log('Created public/templates-preview directory');
}

// Function to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy each template category
const categories = ['Restaurant', 'Photography', 'Digital_Agency'];

categories.forEach(category => {
  const srcPath = path.join(sourceDir, category, category);
  const destPath = path.join(targetDir, category, category);

  if (fs.existsSync(srcPath)) {
    console.log(`Copying ${category} templates...`);
    copyDirectory(srcPath, destPath);
    console.log(`✓ Copied ${category} templates to public folder`);
  } else {
    console.log(`⚠ Warning: ${srcPath} not found`);
  }
});

// Create .htaccess file for proper routing (if needed)
const htaccessPath = path.join(targetDir, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  const htaccessContent = `# Allow access to template preview files
Options -Indexes
DirectoryIndex index.html

# Enable CORS for iframe embedding
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, OPTIONS"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>

# Handle relative paths correctly
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /templates-preview/
  
  # If file exists, serve it
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]
  
  # If directory exists, serve index.html
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^(.*)$ $1/index.html [L]
</IfModule>
`;
  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('Created .htaccess file for template routing');
}

console.log('\n✓ Template preview setup complete!');
console.log('You can now start your development server and preview templates will be available.');
console.log('\nNote: Make sure all template folders contain an index.html file.');

