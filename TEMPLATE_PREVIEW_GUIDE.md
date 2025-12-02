# Template Preview Guide

## Overview
The template preview system allows users to view each template's `index.html` file directly in a modal before purchasing.

## How It Works

### Preview URL Structure
Each template has a `previewUrl` that points to its `index.html` file:

- **Restaurant Templates**: `/templates-preview/Restaurant/Restaurant/{number}/index.html`
  - Example: `/templates-preview/Restaurant/Restaurant/1/index.html`
  
- **Photography Templates**: `/templates-preview/Photography/Photography/{number}/index.html`
  - Example: `/templates-preview/Photography/Photography/1/index.html`
  
- **Digital Agency Templates**: `/templates-preview/Digital_Agency/Digital_Agency/{number}/index.html`
  - Example: `/templates-preview/Digital_Agency/Digital_Agency/1/index.html`

### Template Data Structure
Each template in `templatesData.js` includes:
```javascript
{
  id: "restaurant-individual-1",
  name: "Restaurant Template #1",
  previewUrl: "/templates-preview/Restaurant/Restaurant/1/index.html",
  templatePath: "templets/Restaurant/Restaurant/1",
  // ... other properties
}
```

### Preview Component Features
- **Modal Display**: Opens in a full-screen modal overlay
- **Iframe Loading**: Loads the `index.html` file in a secure iframe
- **Loading States**: Shows loading spinner while template loads
- **Error Handling**: Displays helpful error messages if template can't be loaded
- **Responsive**: Works on all screen sizes
- **Dark Mode**: Supports dark mode theme

## Setup Instructions

### Step 1: Copy Templates to Public Folder
Run the setup script to copy all templates to the public folder:
```bash
npm run setup-previews
```

This will copy:
- `src/templets/Restaurant/Restaurant/*` → `public/templates-preview/Restaurant/Restaurant/*`
- `src/templets/Photography/Photography/*` → `public/templates-preview/Photography/Photography/*`
- `src/templets/Digital_Agency/Digital_Agency/*` → `public/templates-preview/Digital_Agency/Digital_Agency/*`

### Step 2: Verify Template Files
Each template folder should contain an `index.html` file:
```
public/templates-preview/
  ├── Restaurant/
  │   └── Restaurant/
  │       ├── 1/
  │       │   └── index.html  ✓
  │       ├── 2/
  │       │   └── index.html  ✓
  │       └── ...
  ├── Photography/
  │   └── Photography/
  │       ├── 1/
  │       │   └── index.html  ✓
  │       └── ...
  └── Digital_Agency/
      └── Digital_Agency/
          ├── 1/
          │   └── index.html  ✓
          └── ...
```

## Usage

### For Users
1. Navigate to the Templates page
2. Click "Preview" on any template card
3. The template's `index.html` will load in a modal
4. Browse the template preview
5. Click "Close" or "View Details" to proceed

### For Developers
The preview component automatically:
- Constructs the correct preview URL from template data
- Handles loading states
- Manages errors gracefully
- Resets when switching between templates

## Troubleshooting

### Preview Not Loading
1. **Check if templates are copied**: Verify files exist in `public/templates-preview/`
2. **Check file paths**: Ensure `index.html` exists in each template folder
3. **Check browser console**: Look for 404 errors or CORS issues
4. **Run setup script**: `npm run setup-previews`

### Common Issues

**Issue**: "Preview not available" error
- **Solution**: Run `npm run setup-previews` to copy templates to public folder

**Issue**: Blank preview
- **Solution**: Check if `index.html` exists in the template folder
- **Solution**: Verify the preview URL matches the actual file path

**Issue**: Preview loads but styles are broken
- **Solution**: Check if CSS files are referenced correctly in the template's `index.html`
- **Solution**: Ensure all assets (images, CSS, JS) are in the template folder

## Technical Details

### Preview URL Generation
Preview URLs are generated in `templatesData.js`:
```javascript
previewUrl: `/templates-preview/${basePath.replace("templets/", "")}/${num}/index.html`
```

### Iframe Configuration
The preview uses an iframe with:
- `sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation"`
- `allow="fullscreen"`
- Secure loading with error handling

### File Structure
```
src/
  ├── templets/              (Source templates)
  │   ├── Restaurant/
  │   ├── Photography/
  │   └── Digital_Agency/
  └── components/
      └── TemplatePreview.js (Preview component)

public/
  └── templates-preview/     (Copied templates for preview)
      ├── Restaurant/
      ├── Photography/
      └── Digital_Agency/
```

## Notes
- Templates must be in the `public` folder to be accessible via URL
- Each template folder must contain an `index.html` file
- The preview loads the actual template files, so all assets must be included
- Large template files may take time to load - the component shows a loading state

