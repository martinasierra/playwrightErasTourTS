import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { MerchPage } from '../pages/merch.page';
import { ExplorePage } from '../pages/explore.page';
import { PlaylistPage } from '../pages/playlist.page';
import TourPage from '../pages/tour.page';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage; // Create new variable
//let merchPage: MerchPage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page); //New instance of the homePage variable
    await page.goto(URL);
})

test.describe('Home Page - Navbar left', () => {
    
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
    await expect(explorePage.exploreContainer).toBeInViewport();
});

test('Shoud go to Tour website', async ({ page, context }) => {
    const [newPage] = await Promise.all([ 
        context.waitForEvent('page'), 
        await homePage.clickTourButton()
    ]);
    // Wait for Page Load
    await newPage.waitForLoadState();
    //console.log('URL', newPage.url());
    expect(newPage.url()).toBe('https://www.taylorswift.com/tour/');
    await (newPage).close();
});

test('Shoud go to Tour page', async ({ page }) => {
    const tourPage = new TourPage(page); 
    await page.mouse.wheel(0, 2480);
    await expect(tourPage.tourHeading).toBeInViewport();
    await expect(homePage.tourButton).toHaveClass('Desktop_activeLink__Q9Ulg');
});

test('Should go to Playlist page', async ({ page }) => {
    const playlistPage = new PlaylistPage(page); 
   await homePage.clickPlaylistButton();
   await expect(playlistPage.playlistHeading).toBeInViewport(); 
});

test('Shoud go to Film website', async ({ page, context }) => {
    const [newPage2] = await Promise.all([ 
        context.waitForEvent('page'), 
        await homePage.clickFilmButton()
    ]);
    await newPage2.waitForLoadState();
    console.log('URL', newPage2.url());
   await (newPage2).close();

});

});

test.describe('Eras pictures and color schemes', () => {

    test('Should display 1898 era as main picture', async ({ page }) => {
        await homePage.useColorScheme1989();
        await expect(homePage.colorScheme1989).toHaveAttribute('style', 'opacity: 1; width: 35%;');
    })
    
})
