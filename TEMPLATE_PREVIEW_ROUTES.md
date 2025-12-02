# Template Preview Routes Configuration

## Overview
This document explains how template preview routes are configured to ensure all templates load correctly in the preview window with all their assets (CSS, JS, images).

## Route Structure

### Preview URLs
All template previews use the following URL pattern:
```
/templates-preview/{Category}/{Category}/{ProjectNumber}/index.html
```

Examples:
- Restaurant Template #1: `/templates-preview/Restaurant/Restaurant/1/index.html`
- Photography Template #5: `/templates-preview/Photography/Photography/5/index.html`
- Digital Agency Template #10: `/templates-preview/Digital_Agency/Digital_Agency/10/index.html`

### Base URL Calculation
The base URL for each template is automatically calculated as the directory containing `index.html`:
- For `/templates-preview/Restaurant/Restaurant/1/index.html`
- Base URL: `/templates-preview/Restaurant/Restaurant/1/`

This ensures all relative paths in templates resolve correctly.

## How It Works

### 1. Preview URL Generation
Preview URLs are generated in `src/data/templatesData.js`:
```javascript
previewUrl: `/templates-preview/${basePath.replace("templets/", "")}/${num}/index.html`
```

### 2. Base Path Fixing
When a template loads in the iframe, the `TemplatePreview` component:
1. Calculates the base URL from the preview URL
2. Checks if a `<base>` tag exists in the template's HTML
3. Adds or updates the `<base>` tag to ensure relative paths work
4. Fixes relative paths in `<link>`, `<script>`, and `<img>` tags if needed

### 3. File Structure
Templates are copied to the public folder with this structure:
```
public/
  └── templates-preview/
      ├── Restaurant/
      │   └── Restaurant/
      │       ├── 1/
      │       │   ├── index.html
      │       │   ├── css/
      │       │   ├── js/
      │       │   └── images/
      │       ├── 2/
      │       └── ...
      ├── Photography/
      │   └── Photography/
      │       └── ...
      └── Digital_Agency/
          └── Digital_Agency/
              └── ...
```

## Setup Instructions

### Step 1: Copy Templates
Run the setup script to copy all templates to the public folder:
```bash
npm run setup-previews
```

This will:
- Create `public/templates-preview/` directory
- Copy all template folders maintaining the structure
- Create `.htaccess` file for proper routing (if needed)

### Step 2: Verify Structure
Ensure each template folder contains:
- `index.html` - Main template file
- All assets (CSS, JS, images) in relative subdirectories

### Step 3: Test Preview
1. Start development server: `npm start`
2. Navigate to Templates page
3. Click "Preview" on any template
4. Verify the template loads with all styles and scripts

## Route Handling

### Development (React Dev Server)
- React's dev server automatically serves files from the `public` folder
- URLs like `/templates-preview/...` are served directly
- No additional configuration needed

### Production (Static Hosting)
For static hosting (Netlify, Vercel, etc.):

1. **Netlify**: The `_redirects` file handles routing:
   ```
   /templates-preview/*   200
   ```

2. **Vercel**: Create `vercel.json`:
   ```json
   {
     "rewrites": [
       {
         "source": "/templates-preview/:path*",
         "destination": "/templates-preview/:path*"
       }
     ]
   }
   ```

3. **Apache**: The `.htaccess` file in `public/templates-preview/` handles routing

## Troubleshooting

### Issue: Template loads but styles are broken
**Solution**: 
- Check if the template has a `<base>` tag
- Verify relative paths in CSS/JS files
- The preview component automatically fixes base paths, but some templates may need manual adjustment

### Issue: 404 errors for assets
**Solution**:
- Ensure all template files were copied to `public/templates-preview/`
- Check that the folder structure matches the preview URL
- Verify file paths are relative, not absolute

### Issue: Preview doesn't load
**Solution**:
- Run `npm run setup-previews` to copy templates
- Check browser console for errors
- Verify `index.html` exists in the template folder
- Check that the preview URL matches the actual file path

### Issue: CORS errors
**Solution**:
- Templates are served from the same origin, so CORS shouldn't be an issue
- If using a CDN, ensure CORS headers are configured
- Check `.htaccess` file for CORS settings

## Technical Details

### Base Tag Injection
The preview component automatically injects or updates a `<base>` tag:
```html
<base href="/templates-preview/Restaurant/Restaurant/1/">
```

This ensures:
- Relative CSS paths work: `css/style.css` → `/templates-preview/Restaurant/Restaurant/1/css/style.css`
- Relative JS paths work: `js/script.js` → `/templates-preview/Restaurant/Restaurant/1/js/script.js`
- Relative image paths work: `images/logo.png` → `/templates-preview/Restaurant/Restaurant/1/images/logo.png`

### Iframe Sandbox
The preview uses an iframe with these sandbox permissions:
- `allow-same-origin` - Allows access to same-origin content
- `allow-scripts` - Allows JavaScript execution
- `allow-forms` - Allows form submission
- `allow-popups` - Allows popups
- `allow-modals` - Allows modal dialogs
- `allow-top-navigation` - Allows top-level navigation

### Path Resolution
Relative paths are resolved using the base URL:
```javascript
// Example: Template has <link href="css/style.css">
// Base URL: /templates-preview/Restaurant/Restaurant/1/
// Resolved: /templates-preview/Restaurant/Restaurant/1/css/style.css
```

## Best Practices

1. **Always use relative paths** in template HTML files
2. **Keep assets in subdirectories** (css/, js/, images/)
3. **Test each template** after copying to ensure it loads correctly
4. **Run setup script** before deploying to production
5. **Verify file structure** matches preview URLs exactly

## Notes

- Templates must be in the `public` folder to be accessible via URL
- The preview component handles base path fixing automatically
- Some templates may need manual adjustment if they use absolute paths
- Large template files may take time to load - loading states are shown
- All 153+ templates follow the same routing pattern

