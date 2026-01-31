import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Real-time Sinhala update for simple daily sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const inputField = page.locator('textarea');
  const outputField = page.locator('div.whitespace-pre-wrap').first();

  // Start typing
  await inputField.type('mama paandhara');

  // Partial output should appear
  await expect(outputField).toContainText('මම');

  // Continue typing
  await inputField.type(' kaema kaevaa.');

  // Final Sinhala output check
  await expect(outputField).toContainText('මම පාන්දර කැම කෑවා');

});

