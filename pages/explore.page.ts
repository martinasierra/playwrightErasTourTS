import { type Locator, type Page } from "@playwright/test";


export class ExplorePage{
// variables (read onlies) 
readonly page: Page;
readonly exploreContainer: Locator;

// constructor
constructor (page:Page) {
    this.page = page;
    this.exploreContainer = page.locator('.Explore_container__SUuJF')

}


// methods (or functions)

//async clickExploreButton(){
  //  await this.exploreButton.click();
//}
    
}  

export default ExplorePage;