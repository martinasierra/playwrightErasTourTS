import { type Locator, type Page } from "@playwright/test";


export class MerchPage{
// variables (read onlies) 
readonly page: Page;
readonly merchHeading: Locator;

// constructor
constructor (page:Page) {
    this.page = page;
    this.merchHeading = page.getByRole('heading', { name: 'Taylor Swift | The Eras Tour' });

}


// methods (or functions)

//async clickExploreButton(){
  //  await this.exploreButton.click();
//}
    
}  

export default MerchPage;