# Quick Fix for Template Preview 404 Error

## Problem
The preview shows a 404 error instead of the template.

## Solution

### Step 1: Templates are Already Copied ✅
The templates have been copied to `public/templates-preview/` folder.

### Step 2: Restart Development Server
**IMPORTANT**: You must restart your development server for the new files to be accessible.

1. Stop the current server (Ctrl+C in terminal)
2. Start it again: `npm start`
3. Wait for the server to fully start
4. Try the preview again

### Step 3: Clear Browser Cache (if needed)
If restarting doesn't work:
1. Open browser DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. Or use Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Step 4: Verify File Exists
Check if the file exists at:
```
public/templates-preview/Digital_Agency/Digital_Agency/2/index.html
```

If it doesn't exist, run:
```bash
npm run setup-previews
```

## Why This Happens
React's development server needs to be restarted to pick up new files in the `public` folder. The server scans the public folder when it starts, so new files added while it's running won't be accessible until you restart.

## Testing
After restarting:
1. Go to Templates page
2. Click "Preview" on any template
3. The template should load correctly

## Still Not Working?
1. Check browser console for errors (F12)
2. Verify the preview URL matches the file path
3. Try accessing the file directly: `http://localhost:3000/templates-preview/Digital_Agency/Digital_Agency/2/index.html`
4. If direct access works but preview doesn't, it's an iframe issue
5. If direct access doesn't work, the server needs to be restarted

