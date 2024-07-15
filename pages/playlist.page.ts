import { type Locator, type Page } from "@playwright/test";


export class PlaylistPage{
readonly page: Page;
readonly playlistHeading: Locator;
readonly letsGoButton: Locator; 
readonly enterNameInput: Locator;
readonly continueButton: Locator;
readonly searchSongsInput: Locator;
readonly createButton: Locator;
readonly goBackButton: Locator;


constructor (page:Page) {
    this.page = page;
    this.playlistHeading = page.getByRole('heading', { name: 'Create a Taylor Swift | The Eras Tour' });
    this.letsGoButton = page.getByRole('button', { name: 'Let\'s Go' });
    this.enterNameInput = page.getByPlaceholder('Enter Your First Name');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.searchSongsInput = page.getByPlaceholder('Search Songs');
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.goBackButton = page.getByRole('button', { name: 'Go Back' });
}

    
}  

export default PlaylistPage;