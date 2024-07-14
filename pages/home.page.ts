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
readonly colorSchemeDebut: Locator;
readonly colorSchemeFearless: Locator;
readonly colorSchemeSpeakNow: Locator;
readonly colorSchemeRed: Locator;
readonly colorScheme1989: Locator;
readonly colorSchemeReputation: Locator;
readonly colorSchemeLover: Locator;
readonly colorSchemeEvermore: Locator;
readonly colorSchemeFolklore: Locator;
readonly colorSchemeMidnights: Locator;
readonly colorSchemeTTPD: Locator;
readonly banner: Locator;

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
    this.colorSchemeDebut = page.getByLabel('Use Debut color scheme');
    this.colorSchemeFearless = page.getByLabel('Use Fearless color scheme');
    this.colorSchemeSpeakNow = page.getByLabel('Use Speak Now color scheme');
    this.colorSchemeRed = page.getByLabel('Use Red color scheme');
    this.colorScheme1989 = page.getByLabel('Use 1989 color scheme');
    this.colorSchemeReputation = page.getByLabel('Use Reputation color scheme');
    this.colorSchemeLover = page.getByLabel('Use Lover color scheme');
    this.colorSchemeEvermore = page.getByLabel('Use Evermore color scheme');
    this.colorSchemeFolklore = page.getByLabel('Use Folklore color scheme');
    this.colorSchemeMidnights = page.getByLabel('Use Midnights color scheme');
    this.colorSchemeTTPD = page.getByLabel('Use TTPD color scheme');
    this.banner = page.getByRole('banner');
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

async useColorSchemeTTPD(){
    await this.colorSchemeTTPD.click();
};

async useColorSchemeDebut() {
    await this.colorSchemeDebut.click();
}

async useColorSchemeFearless() {
    await this.colorSchemeFearless.click();
}

async useColorSchemeSpeakNow() {
    await this.colorSchemeSpeakNow.click();
}

async useColorSchemeRed() {
    await this.colorSchemeRed.click();
}

async useColorScheme1989() {
    await this.colorScheme1989.click();
}

async useColorSchemeReputation() {
    await this.colorSchemeReputation.click();
}

async useColorSchemeLover() {
    await this.colorSchemeLover.click();
}

async useColorSchemeEvermore() {
    await this.colorSchemeEvermore.click();
}

async useColorSchemeFolklore() {
    await this.colorSchemeFolklore.click();
}

async useColorSchemeMidnights() {
    await this.colorSchemeMidnights.click();
}
    
}  

export default HomePage;