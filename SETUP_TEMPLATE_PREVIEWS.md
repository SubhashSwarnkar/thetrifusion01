# Template Preview Setup Guide

## Overview
The template preview functionality allows users to preview templates before purchasing. The templates are located in `src/templets/` folder.

## Setup Options

### Option 1: Copy Templates to Public Folder (Recommended for Development)

To make templates accessible for preview, you need to copy them to the `public` folder:

1. Create a `public/templates-preview` directory
2. Copy the template folders:
   - `src/templets/Restaurant/Restaurant` → `public/templates-preview/Restaurant/Restaurant`
   - `src/templets/Photography/Photography` → `public/templates-preview/Photography/Photography`
   - `src/templets/Digital_Agency/Digital_Agency` → `public/templates-preview/Digital_Agency/Digital_Agency`

### Option 2: Use Backend API (Recommended for Production)

For production, set up a backend API endpoint that serves the template files:

1. Create an API endpoint: `/api/templates/preview/:category/:projectNumber`
2. The endpoint should serve the `index.html` file from the corresponding template folder
3. Update `REACT_APP_API_URL` in your `.env` file
4. Update the preview URL generation in `src/data/templatesData.js` to use the API endpoint

### Option 3: Use CDN/Cloud Storage

1. Upload templates to a CDN or cloud storage (AWS S3, Cloudflare, etc.)
2. Update preview URLs in `src/data/templatesData.js` to point to CDN URLs

## Current Preview URL Structure

Templates use the following URL pattern:
- Restaurant: `/templates-preview/Restaurant/Restaurant/{number}/index.html`
- Photography: `/templates-preview/Photography/Photography/{number}/index.html`
- Digital Agency: `/templates-preview/Digital_Agency/Digital_Agency/{number}/index.html`

## Testing

1. Start your development server: `npm start`
2. Navigate to the Templates page
3. Click "Preview" on any template
4. The preview should load in a modal

## Troubleshooting

- If preview doesn't load, check browser console for errors
- Ensure template files are accessible at the expected paths
- Check that `index.html` exists in each template folder
- Verify CORS settings if using a backend API

