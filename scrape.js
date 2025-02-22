const puppeteer = require('puppeteer');

(async () => {
  // Get URL from environment variable or default to example.com
  const url = process.env.SCRAPE_URL || 'https://example.com';

  // Launch Puppeteer with appropriate flags
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract the page title
  const title = await page.title();

  // Attempt to extract the first <h1> text; if none found, use a fallback message
  let firstHeading;
  try {
    firstHeading = await page.$eval('h1', el => el.innerText.trim());
  } catch (error) {
    firstHeading = "No <h1> element found";
  }

  const data = { url, title, firstHeading };

  // Write the scraped data to a JSON file
  const fs = require('fs');
  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));

  await browser.close();
})();

