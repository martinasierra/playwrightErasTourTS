import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { MerchPage } from '../pages/merch.page';
import { ExplorePage } from '../pages/explore.page';
import { PlaylistPage } from '../pages/playlist.page';
import TourPage from '../pages/tour.page';
import { BrowserServer } from '@playwright/test';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage; // Create new variable
//let merchPage: MerchPage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page); //New instance of the homePage variable
});

test.describe('Home Page - Navbar left', () => {

    test.beforeEach(async ({page}) => {
    await page.goto(URL);
});
    
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
    await page.waitForTimeout(4000);
    await expect(explorePage.exploreContainer).toBeInViewport();
});

test('Shoud go to Tour website', async ({ page, context }) => {
    const [newPage] = await Promise.all([ 
        context.waitForEvent('page'), 
        await homePage.clickTourButton()
    ]);
    // Wait for Page Load
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://tstheerastour.taylorswift.com/');
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

test('Shoud go to Film page', async ({ page }) => {
    //const [newPage2] = await Promise.all([ 
    //    context.waitForEvent('page'), 
    await homePage.clickFilmButton();
    //]);
    //await newPage2.waitForLoadState();
    //console.log('URL', newPage2.url());
   //await (newPage2).close();
    //await expect()
});

});

test.describe('Eras pictures and color schemes', () => {
    

 test('Debut era is correctly displayed', async ({ page }) => {
  const homePage = new HomePage(page);

  await test.step('Go to home page', async () => {
    await page.goto(URL);
  });
    
   await test.step('Should display Debut era as main picture', async () => {
        await homePage.colorSchemeDebut.waitFor({state: 'visible'})
        await homePage.useColorSchemeDebut();
        await expect(homePage.colorSchemeDebut).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorScheme1989).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
        await expect(homePage.banner).toHaveCSS('background-color','rgb(169, 203, 170)'); 
    });

   await test.step('Should display Fearless era as main picture', async () => {
        await homePage.useColorSchemeFearless();
        await expect(homePage.colorSchemeFearless).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeDebut).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
        await expect(homePage.banner).toHaveCSS('background-color','rgb(253, 218, 166)'); 
    });

   await test.step('Should display Speak Now era as main picture', async () => {
        await homePage.useColorSchemeSpeakNow();
        await expect(homePage.colorSchemeSpeakNow).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeFearless).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
        await expect(homePage.banner).toHaveCSS('background-color','rgb(214, 186, 220)'); 
    });

   await test.step('Should display Red era as main picture', async () => {
        await homePage.useColorSchemeRed();
        await expect(homePage.colorSchemeRed).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeSpeakNow).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
        await expect(homePage.banner).toHaveCSS('background-color','rgb(114, 51, 60)'); 
    });

   await test.step('Should display 1989 era as main picture', async () => {
        await homePage.useColorScheme1989();
        await expect(homePage.colorScheme1989).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeRed).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display Reputation era as main picture', async () => {
        await homePage.useColorSchemeReputation();
        await expect(homePage.colorSchemeReputation).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorScheme1989).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display Lover era as main picture', async () => {
        await homePage.useColorSchemeLover();
        await expect(homePage.colorSchemeLover).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeReputation).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display Evermore era as main picture', async () => {
        await homePage.useColorSchemeEvermore();
        await expect(homePage.colorSchemeEvermore).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeLover).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display Folklore era as main picture', async () => {
        await homePage.useColorSchemeFolklore();
        await expect(homePage.colorSchemeFolklore).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeEvermore).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display Midnights era as main picture', async () => {
        await homePage.useColorSchemeMidnights();
        await expect(homePage.colorSchemeMidnights).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeFolklore).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

   await test.step('Should display TTPD era as main picture', async () => {
        await homePage.useColorSchemeTTPD();
        await expect(homePage.colorSchemeTTPD).toHaveAttribute('style', 'opacity: 1; width: 35%;');
        await expect(homePage.colorSchemeMidnights).toHaveAttribute('style', 'opacity: 1; width: 6.5%;');
    });

});

});
