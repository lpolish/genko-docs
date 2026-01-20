/**
 * Example Playwright Script for Capturing Screenshots
 * 
 * This is an example script showing how to capture screenshots from getgenko.com
 * for documentation purposes. This focuses on PUBLIC pages only.
 * 
 * Install Playwright:
 *   npm install -D @playwright/test
 * 
 * Run this script:
 *   node screenshots/capture-screenshots.example.js
 * 
 * Note: This captures PUBLIC pages only. For admin pages, a separate authenticated
 * script would be needed with proper credentials and test data.
 */

const { chromium } = require('playwright');
const path = require('path');

async function capturePublicScreenshots() {
  console.log('Starting screenshot capture for public pages...');
  
  const browser = await chromium.launch({
    headless: true
  });
  
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2 // For higher quality screenshots
  });
  
  const page = await context.newPage();
  
  try {
    // Capture Homepage
    console.log('Capturing homepage...');
    await page.goto('https://getgenko.com', { waitUntil: 'networkidle' });
    await page.screenshot({
      path: path.join(__dirname, 'public-pages', 'homepage-cta.png'),
      fullPage: false
    });
    console.log('✓ Homepage screenshot saved');
    
    // Capture Pricing Page
    console.log('Capturing pricing page...');
    await page.goto('https://getgenko.com/pricing', { waitUntil: 'networkidle' });
    await page.screenshot({
      path: path.join(__dirname, 'public-pages', 'pricing-plans.png'),
      fullPage: true
    });
    console.log('✓ Pricing page screenshot saved');
    
    // Capture Features Page (if exists)
    console.log('Capturing features page...');
    try {
      await page.goto('https://getgenko.com/features', { waitUntil: 'networkidle', timeout: 10000 });
      await page.screenshot({
        path: path.join(__dirname, 'public-pages', 'features-overview.png'),
        fullPage: true
      });
      console.log('✓ Features page screenshot saved');
    } catch (e) {
      console.log('⚠ Features page not found or not accessible');
    }
    
    // Capture About Page (if exists)
    console.log('Capturing about page...');
    try {
      await page.goto('https://getgenko.com/about', { waitUntil: 'networkidle', timeout: 10000 });
      await page.screenshot({
        path: path.join(__dirname, 'public-pages', 'about-page.png'),
        fullPage: true
      });
      console.log('✓ About page screenshot saved');
    } catch (e) {
      console.log('⚠ About page not found or not accessible');
    }
    
    console.log('\n✅ Public page screenshots captured successfully!');
    console.log('Screenshots saved to:', path.join(__dirname, 'public-pages'));
    
  } catch (error) {
    console.error('❌ Error capturing screenshots:', error.message);
  } finally {
    await browser.close();
  }
}

/**
 * Note: Admin screenshots require authentication and should be captured separately.
 * 
 * Example structure for admin screenshots (NOT IMPLEMENTED HERE):
 * 
 * async function captureAdminScreenshots() {
 *   // 1. Navigate to login page
 *   // 2. Authenticate with test credentials
 *   // 3. Wait for dashboard to load
 *   // 4. Capture screenshots of each admin page
 *   // 5. Clean up test data if needed
 * }
 */

// Only run if this file is executed directly
if (require.main === module) {
  capturePublicScreenshots()
    .then(() => {
      console.log('\nScreenshot capture completed.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\nScreenshot capture failed:', error);
      process.exit(1);
    });
}

module.exports = { capturePublicScreenshots };
