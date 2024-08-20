import { test, expect } from '@playwright/test';

//DRAFT

test('test', async ({ page }) => {
  await page.goto('https://tstheerastour.taylorswift.com/');
  await page.getByRole('button', { name: 'Playlist' }).click();
  await page.getByRole('button', { name: 'Let\'s Go' }).click();
  await page.getByPlaceholder('Enter Your First Name').click();
  await page.getByPlaceholder('Enter Your First Name').fill('test');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'View all songs' }).click();
  await page.locator('.SelectSongs_checkbox__QZcVk').first().click();
  await page.locator('div:nth-child(2) > .SelectSongs_allTracks__hLEs3 > div > .SelectSongs_checkbox__QZcVk').first().click();
  await page.locator('div:nth-child(3) > .SelectSongs_allTracks__hLEs3 > div > .SelectSongs_checkbox__QZcVk').first().click();
  await page.locator('div:nth-child(6) > .SelectSongs_allTracks__hLEs3 > div:nth-child(7) > .SelectSongs_checkbox__QZcVk').click();
  await page.locator('div:nth-child(4) > .SelectSongs_allTracks__hLEs3 > div:nth-child(16) > .SelectSongs_checkbox__QZcVk').click();
  await page.locator('div:nth-child(16) > .SelectSongs_checkbox__QZcVk > svg').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText('Step 3 – Save & Share')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Try Again' })).toBeVisible();
});