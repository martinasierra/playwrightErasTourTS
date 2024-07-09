import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { MerchPage } from '../pages/merch.page';
import { ExplorePage } from '../pages/explore.page';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage; // Create new variable
//let merchPage: MerchPage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page); //New instance of the homePage variable
    await page.goto(URL);
})

test.describe('Home Page', () => {
    
test('Should load correctly', async ({ page }) => {
    await expect(homePage.desktopLogo).toBeVisible();
    await expect(homePage.erasImagesContainer).toBeVisible();
});

test('Shoud go to Merch page', async ({ page }) => {
    const merchPage = new MerchPage(page); 
    await homePage.clickMerchButton();
    await expect(merchPage.merchHeading).toBeVisible();
});

test('Shoud go to Explore page', async ({ page }) => {
    const explorePage = new ExplorePage(page); 
    await homePage.clickExploreButton();
    await expect(explorePage.exploreContainer).toBeVisible();
});

test('Shoud go to Tour website', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page');
    await homePage.clickTourButton();
    const newPage = await pagePromise;
    expect(newPage).toHaveURL('https://www.taylorswift.com/tour/');
    //console.log('URL', await newPage.url());
});

//test('Shoud go to Tour page', async ({ page }) => {
   
//});

});
