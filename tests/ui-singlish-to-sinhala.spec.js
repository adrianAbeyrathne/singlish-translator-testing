import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Sinhala output updates in real time while typing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const inputField = page.locator('textarea');
  const outputField = page.locator('div.whitespace-pre-wrap').first();

  // Step 1: Type initial text
  await inputField.type('mama gedhara');

  // Step 2: Check partial output appears
  await expect(outputField).toContainText('මම');

  // Step 3: Continue typing
  await inputField.type(' yanavaa');

  // Step 4: Check updated output
  await expect(outputField).toContainText('මම ගෙදර යනවා');

});
