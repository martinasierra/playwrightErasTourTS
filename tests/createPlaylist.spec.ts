import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PlaylistPage } from '../pages/playlist.page';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage;
let playlistPage: PlaylistPage;

const shuffleAndReturnName = (array: string[]): string => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray[Math.floor(Math.random() * shuffledArray.length)];
  };
  
  const names = ["Samantha", "Charlotte", "Carrie", "Miranda"]; 
  const randomName = shuffleAndReturnName(names);

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    playlistPage = new PlaylistPage(page);
    await page.goto(URL);
});

test.describe('Playlist - ', () => {
    
test('Should create valid playlist', async ({ page }) => {
    await test.step('Go to Playlist section', async () => {
        await homePage.clickPlaylistButton();
        await expect(playlistPage.playlistHeading).toBeInViewport();
    });

    await test.step('Click on Lets go button', async () => {
        await playlistPage.clickLetsGoButton();
        await expect(playlistPage.stepTitle).toHaveText('Step 1 – Your Info');
    });

    await test.step('Complete name', async () => {
        await playlistPage.fillEnterNameInput(randomName);
        await playlistPage.clickContinueButton();
        await expect(playlistPage.stepTitle).toHaveText('Step 2 – Select Songs')
    })
    
    
});





})
