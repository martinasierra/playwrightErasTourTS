import { test, expect } from '@playwright/test';
//import { HomePage } from '../pages/home.page.ts';
import { HomePage } from '../pages/home.page';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage; // Create new variable

test.beforeEach(async ({page}) => {
    await page.goto(URL);    
    homePage = new HomePage(page); //New instance of the homePage variable
})


test.describe('', () => {
    
test('Should load correctly', async ({ page }) => {
    await expect(homePage.desktopLogo).toBeVisible();
    await expect(homePage.erasImagesContainer).toBeVisible();
});

test('Shoud go to Merch page', async ({ page }) => {
    await homePage.clickMerchButton();
    await expect(homePage.merchHeading).toBeVisible();
})



})
