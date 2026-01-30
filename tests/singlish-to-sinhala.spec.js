import { test, expect } from '@playwright/test';

test.describe('Functional Test Cases – Singlish to Sinhala', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  /* =========================
     POSITIVE TEST CASES (24)
     ========================= */

  test('Pos_01 - Interrogative sentence', async ({ page }) => {
    const input = 'oyaa ena sathiyee iridhaata palli enavadha?';
    const expected = 'ඔයා එන සතියේ ඉරිදාට පල්ලි එනවද?';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_02 - Compound sentence with mixed English', async ({ page }) => {
    const input = 'mama adha office ekata enna parakku venavaa, mama gedhara idhan meeting ekata log vennavaa. mama boss ta kalinma kivvaa.';
    const expected = 'මම අද office එකට එන්න පරක්කු වෙනවා, මම ගෙදර ඉදන් meeting එකට log වෙන්නවා. මම boss ට කලින්ම කිව්වා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_03 - Simple present tense', async ({ page }) => {
    const input = 'mama dhaen vaeda karanavaa.';
    const expected = 'මම දැන් වැඩ කරනවා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_04 - Future plan with place', async ({ page }) => {
    const input = 'api heta siiyaata thaeggak ganna koLaBata yamu.';
    const expected = 'අපි හෙට සීයාට තැග්ගක් ගන්න කොළඹට යමු.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_05 - Ongoing action', async ({ page }) => {
    const input = 'mama drive karana gaman inne, mama oyaata passee call karannan.';
    const expected = 'මම drive කරන ගමන් ඉන්නේ, මම ඔයාට පස්සේ call කරන්නන්.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_06 - Slang expression', async ({ page }) => {
    const input = 'ela machan, vaedee hari giyaa.';
    const expected = 'එල මචන්, වැඩේ හරි ගියා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_07 - Imperative with English term', async ({ page }) => {
    const input = 'oyage NIC copy eka email karalaa evanna.';
    const expected = 'ඔයගෙ NIC copy එක email කරලා එවන්න.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_08 - Repeated word emphasis', async ({ page }) => {
    const input = 'hari hari heta mama potha gennan.';
    const expected = 'හරි හරි හෙට මම පොත ගෙන්නන්.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_09 - Religious phrase', async ({ page }) => {
    const input = 'parissamin gihin enna, jeesu pihitayi!';
    const expected = 'පරිස්සමින් ගිහින් එන්න, ජේසු පිහිටයි!';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_10 - Informal command', async ({ page }) => {
    const input = 'ehema karapan, eka hari.';
    const expected = 'එහෙම කරපන්, එක හරි.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_11 - Polite conditional request', async ({ page }) => {
    const input = 'oyata puluvananam vitharak apee group ekata enna.';
    const expected = 'ඔයට පුලුවනනම් විතරක් අපේ group එකට එන්න.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_12 - Past negative understanding', async ({ page }) => {
    const input = 'iyee anthima gaana mata therunee naehae.';
    const expected = 'ඉයේ අන්තිම ගාන මට තෙරුනේ නැහැ.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_13 - Lecture timing sentence', async ({ page }) => {
    const input = 'heta lecture eka thiyennee 10.00 AM kiyalaa madam kivvaa.';
    const expected = 'හෙට lecture එක තියෙන්නේ 10.00 AM කියලා madam කිව්වා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_14 - Measurement unit', async ({ page }) => {
    const input = 'mama kadeeta gihin siini 1kg aran avaa.';
    const expected = 'මම කඩේට ගිහින් සීනි 1kg අරන් අවා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_15 - Platform name', async ({ page }) => {
    const input = 'api MS Teams eken meeting eka dhaamu.';
    const expected = 'අපි MS Teams එකෙන් meeting එක දාමු.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_16 - Future intent', async ({ page }) => {
    const input = 'api yanavaa eeka balanna heta.';
    const expected = 'අපි යනවා ඒක බලන්න හෙට.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_17 - Past completion', async ({ page }) => {
    const input = 'mama kalin oya prashNa paththaraya karaa';
    const expected = 'මම කලින් ඔය ප්‍රශ්ණ පත්තරය කරා';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_18 - Present continuous', async ({ page }) => {
    const input = 'ayyaa vaahanee elavanne.';
    const expected = 'අය්යා වාහනේ එලවන්නෙ.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_19 - Short informal phrase', async ({ page }) => {
    const input = 'gihin balamu.';
    const expected = 'ගිහින් බලමු.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_20 - Technical issue', async ({ page }) => {
    const input = 'lecture hall ekee projector eka vaeda nae.';
    const expected = 'lecture hall එකේ projector එක වැඩ නැ.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_21 - Polite question', async ({ page }) => {
    const input = 'mata mee prashNaya paehaedhili karanna puluvandha?';
    const expected = 'මට මේ ප්‍රශ්ණය පැහැදිලි කරන්න පුලුවන්ද?';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_22 - Imperative short', async ({ page }) => {
    const input = 'meeka geniyanna.';
    const expected = 'මේක ගෙනියන්න.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_23 - Message passing', async ({ page }) => {
    const input = 'hari, mama eyaata panividaya kiyannan.';
    const expected = 'හරි, මම එයාට පනිවිඩය කියන්නන්.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Pos_24 - Past with conjunction', async ({ page }) => {
    const input = 'mama kadeeta giyaa, eth eka vahala thibbee.';
    const expected = 'මම කඩේට ගියා, එත් එක වහල තිබ්බේ.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  /* =========================
     NEGATIVE TEST CASES (10)
     ========================= */

  test('Neg_01 - No spacing words', async ({ page }) => {
    const input = 'mamaraesvimatayanneheta.';
    const expected = 'මමරැස්විමටයන්නෙහෙට';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_02 - Excessive repetition', async ({ page }) => {
    const input = 'hari hari hari hari mama ennam.';
    const expected = 'හරි හරි හරි හරි මම එන්නම්.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_03 - Tense conflict', async ({ page }) => {
    const input = 'mama heta giyaa.';
    const expected = 'මම හෙට ගියා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_04 - Multiple spaces', async ({ page }) => {
    const input = 'mama  palliyata    yanavaa';
    const expected = 'මම  පල්ලියට    යනවා';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_05 - Heavy punctuation', async ({ page }) => {
    const input = 'oyaa adha enne naedhdha???!!!';
    const expected = 'ඔයා අද එන්නෙ නැද්ද???!!!';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_06 - Misspelled words', async ({ page }) => {
    const input = 'oyaa koheda giye ada ude?';
    const expected = 'ඔයා කොහෙඩ ගියෙ අඩ උඩෙ?';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_07 - Mixed English grammar', async ({ page }) => {
    const input = 'mama udhe work eka finish kara but still tired feeling eka thinavaa.';
    const expected = 'මම උදෙ work එක finish කර but still tired feeling එක තිනවා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_08 - Random English letters', async ({ page }) => {
    const input = 'eka nam hari hoda da nadda kiyala podi doubt eka thiyenavaa.';
    const expected = 'එක නම් හරි හොඩ ඩ නඩ්ඩ කියල පොඩි doubt එක තියෙනවා.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_09 - Slang + abbreviations', async ({ page }) => {
    const input = 'mama adha lecs yanne nae cuz weather eka hari nae.';
    const expected = 'මම අද ලෙcස් යන්නෙ නැ cඋz weather එක හරි නැ.';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

  test('Neg_10 - Emo-style spelling', async ({ page }) => {
    const input = 'mama thaama stuck in traffic meka   harima  annoyingggg';
    const expected = 'මම තාම stuck ඉන් traffic මෙක   හරිම  අන්නොයින්ග්ග්ග්ග්';

    await page.fill('textarea', input);
    await expect(page.locator('div.whitespace-pre-wrap').first()).toContainText(expected);
  });

});
