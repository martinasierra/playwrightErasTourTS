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
readonly stepTitle: Locator;
readonly firstResult: Locator;
readonly selectedSongsNumber: Locator;


constructor (page: Page) {
    this.page = page;
    this.playlistHeading = page.getByRole('heading', { name: 'Create a Taylor Swift | The Eras Tour' });
    this.letsGoButton = page.getByRole('button', { name: 'Let\'s Go' });
    this.enterNameInput = page.getByPlaceholder('Enter Your First Name');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.searchSongsInput = page.getByPlaceholder('Search Songs');
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.goBackButton = page.getByRole('button', { name: 'Go Back' });
    this.stepTitle =  page.locator('.PlaylistCreator_title__L7q2S > span');
    this.firstResult = page.locator('.SearchList_container__9ARmD > button');
    this.selectedSongsNumber = page.locator('.Reorder_selectedCopy__Bq_NM');
};

// methods (or functions)
async clickLetsGoButton(){
    await this.letsGoButton.click();
 };

 async fillEnterNameInput(name: string){
    await this.enterNameInput.fill(name);
 };

 async clickContinueButton(){
    await this.continueButton.click();
 };

 async fillSearchSongsInput(song: string){
    await this.searchSongsInput.fill(song);
 };

 async clickCreateButton(){
    await this.createButton.click();
 };

 async clickGoBackButton(){
    await this.goBackButton.click();
 };

}  

export default PlaylistPage;