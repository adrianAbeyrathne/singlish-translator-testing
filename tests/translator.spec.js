const { test, expect } = require('@playwright/test');

test('Read Sinhala output text', async ({ page }) => {

  // 1. Open website
  await page.goto('https://www.swifttranslator.com/');

  // 2. Type Singlish input
  await page.fill('textarea', 'kohomada oyata');

  // 3. Locate ONLY the output box that contains text
  const outputBox = page
    .locator('div.whitespace-pre-wrap')
    .filter({ hasText: /./ });

  // 4. Wait until translation appears (proper Playwright way)
  await expect(outputBox).toBeVisible();

  // 5. Read translated Sinhala text
  const output = await outputBox.innerText();

  console.log('Translated output:', output);

  // 6. Validate output
  expect(output.length).toBeGreaterThan(0);
});
