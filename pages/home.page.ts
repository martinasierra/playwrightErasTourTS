import { type Locator, type Page } from "@playwright/test";

/* 
export class HomePage{
-- variables
-- constructor
-- methods (or functions)
}  
*/

export class HomePage {
// variables (read onlies) 
readonly page: Page;
readonly desktopLogo: Locator;
readonly erasImagesContainer: Locator;
readonly merchButton: Locator;
readonly exploreButton: Locator;
readonly tourButton: Locator;
readonly playlistButton: Locator;
readonly filmButton: Locator;
readonly colorScheme1989: Locator;

// constructor
constructor (page:Page) {
    this.page = page;
    this.desktopLogo = page.getByRole('banner').getByRole('img', { name: 'Taylor Swift Logo' });
    this.erasImagesContainer = page.locator('.Hero_container__IcDcp');
    this.merchButton = page.getByRole('button', { name: 'Merch' });
    this.exploreButton = page.getByRole('button', { name: 'Explore' });
    this.tourButton = page.getByRole('button', { name: 'Tour' });
    this.playlistButton = page.getByRole('button', { name: 'Playlist' });
    this.filmButton = page.getByRole('button', { name: 'Film' });
    this.colorScheme1989 = page.getByLabel('Use 1989 color scheme');
}

// methods (or functions)
async clickMerchButton(){
   await this.merchButton.click();
};

async clickExploreButton(){
    await this.exploreButton.click();
};

async clickTourButton(){
    await this.tourButton.click();
};

async clickPlaylistButton(){
    await this.playlistButton.click();
};

async clickFilmButton(){
    await this.filmButton.click();
};

async useColorScheme1989(){
    await this.colorScheme1989.click();
}
    
}  

export default HomePage;