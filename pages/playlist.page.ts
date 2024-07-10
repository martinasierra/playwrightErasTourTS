import { type Locator, type Page } from "@playwright/test";


export class PlaylistPage{
readonly page: Page;
readonly playlistHeading: Locator;


constructor (page:Page) {
    this.page = page;
    this.playlistHeading = page.getByRole('heading', { name: 'Create a Taylor Swift | The Eras Tour' });

}

    
}  

export default PlaylistPage;