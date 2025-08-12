# Front Page Maker - Codebase Cleanup Plan

## Overview
This document outlines the cleanup steps taken to remove unnecessary dependencies and code from the Front Page Maker project to keep it lightweight and focused on its core functionality.

## Completed Cleanups

### 1. Firebase & Visitor Counter Removal
- **Reason**: Firebase was causing errors and visitor counter adds unnecessary complexity
- **Files Modified**:
  - Removed `src/firebase.js` entirely
  - Updated `src/components/Header.jsx` to remove visitor counter logic
  - Updated `src/App.jsx` to remove Firebase imports
  - Updated `package.json` to remove Firebase dependencies
  - Updated `.env.example` to remove Firebase environment variables

### 2. Dependencies Removed
- `firebase` - No longer needed after removing visitor counter
- `countapi-js` - Legacy counter API (if present)

## Potential Future Cleanups

### Dependencies to Review
- **`lucide-react`** - Check if all imported icons are actually used
- **`@tailwindcss/vite`** - Verify if this plugin is necessary with Tailwind 4.0
- **Development dependencies** - Review if all ESLint plugins are needed

### Code Optimizations
- **Component structure** - Consider if InputField component could be simplified
- **CSS classes** - Remove unused Tailwind classes
- **Image optimization** - Optimize the default logo size if needed
- **Bundle analysis** - Run bundle analyzer to identify large dependencies

### Performance Improvements
- **Lazy loading** - Consider lazy loading components if app grows
- **Image compression** - Compress the default logo image
- **Tree shaking** - Ensure unused code is properly tree-shaken

### File Structure
- **Public folder** - Review if all files in public are necessary
- **Asset optimization** - Optimize images and other static assets

## Maintenance Guidelines

### Before Adding New Dependencies
1. Check if the functionality can be implemented with existing dependencies
2. Consider the bundle size impact
3. Evaluate if the dependency is actively maintained
4. Look for lighter alternatives

### Regular Cleanup Tasks
- Review and remove unused imports
- Check for dead code using tools like `unimport` or `ts-prune`
- Analyze bundle size with `npm run build -- --analyze`
- Update dependencies regularly but test thoroughly

## Tools for Future Analysis
- `npm-check-updates` - Check for dependency updates
- `bundlephobia` - Analyze package sizes before adding
- `webpack-bundle-analyzer` - Analyze bundle composition
- `eslint-plugin-import` - Find unused imports

---
*Last updated: 2025-08-12*
*Created during Firebase removal cleanup*
