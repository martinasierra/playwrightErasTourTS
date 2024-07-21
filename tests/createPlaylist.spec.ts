import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { PlaylistPage } from '../pages/playlist.page';

const URL = 'https://tstheerastour.taylorswift.com/';
let homePage: HomePage;
let playlistPage: PlaylistPage;

const shuffleAndReturnMultiple = (array: string[], count: number): string[] => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
};
  
  const names = ["Samantha", "Charlotte", "Carrie", "Miranda"]; 
  const songs = ["Fearless", "Mastermind", "Anti-Hero", "The man", "Miss Americana & The Heartbreak Prince", 
    "You're On Your Own, Kid", "right where you left me", "The Archer", "this is me trying"];
  const randomName = shuffleAndReturnMultiple(names,1);
  const randomSong = shuffleAndReturnMultiple(songs, 5);

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
        await playlistPage.fillEnterNameInput(randomName[0]);
        await playlistPage.clickContinueButton();
        await expect(playlistPage.stepTitle).toHaveText('Step 2 – Select Songs')
    });

    await test.step('Select songs by searching', async () => {
      for (let i = 0; i <= 4; i++) {
            await playlistPage.fillSearchSongsInput(randomSong[i]);
            await playlistPage.firstResult.click();            
        };
        await expect(playlistPage.selectedSongsNumber).toHaveText('Selected 5/50');
    });

    await test.step('Click on Continue', async () => {
      await playlistPage.clickCreateButton();
      await expect(playlistPage.stepTitle).toHaveText('Step 3 – Save & Share');
    });
    
    
    
});


})
