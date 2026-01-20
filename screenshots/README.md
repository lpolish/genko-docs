# Screenshots Directory

This directory contains screenshots for the Genkō documentation.

## Directory Structure

```
screenshots/
├── public-pages/          # Screenshots from public-facing pages at getgenko.com
│   ├── homepage/
│   ├── features/
│   ├── pricing/
│   └── about/
│
└── admin-pages/           # Screenshots from authenticated admin portal
    ├── dashboard/
    ├── patients/
    ├── scheduling/
    ├── settings/
    └── ...
```

## Guidelines for Screenshots

### Public Pages (`public-pages/`)
- Capture screenshots from publicly accessible pages at https://getgenko.com
- No authentication required
- Focus on:
  - Homepage layout and features
  - Pricing page
  - Features overview
  - Public profile pages
  - Contact and about pages

### Admin Pages (`admin-pages/`)
- Capture screenshots from the authenticated admin portal
- Require login to access
- Focus on:
  - Dashboard views
  - Patient management screens
  - Scheduling/calendar views
  - Settings and configuration pages
  - Analytics and reporting screens

## Screenshot Specifications

- **Format**: PNG (preferred for UI screenshots)
- **Size**: Full viewport width, minimum 1280px wide
- **Quality**: High quality, no compression artifacts
- **Naming**: Descriptive names using kebab-case (e.g., `dashboard-overview.png`)
- **Privacy**: Ensure no real patient data or sensitive information is visible

## Tools for Capturing Screenshots

### Recommended: Playwright
```bash
# Install Playwright
npm install -D @playwright/test

# Install browser
npx playwright install chromium

# Run screenshot capture script (public pages only)
npm run capture:public
```

### Alternative: Manual Capture
- Use browser developer tools (F12) → Device toolbar
- Set viewport to 1280x800 or 1920x1080
- Use browser's native screenshot feature or tools like:
  - macOS: Cmd+Shift+4
  - Windows: Snipping Tool or Snip & Sketch
  - Chrome: DevTools → Capture screenshot

## Contributing Screenshots

1. Capture screenshots following the guidelines above
2. Place them in the appropriate directory
3. Update the relevant documentation file to reference the screenshot
4. Ensure no sensitive data is included
5. Submit a pull request with your changes

## Current Status

**⚠️ Placeholders Only**: Most documentation currently contains placeholder references for screenshots that need to be captured. Priority should be given to:

1. Public-facing pages (accessible without authentication)
2. Key admin features (dashboard, patient list, scheduling calendar)
3. Setup and onboarding flows (where possible without exposing sensitive flows)

---

*Last Updated: January 2026*
