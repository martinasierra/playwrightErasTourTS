import { type Locator, type Page } from "@playwright/test";


export class TourPage{
// variables (read onlies) 
readonly page: Page;
readonly tourHeading: Locator;

// constructor
constructor (page:Page) {
    this.page = page;
    this.tourHeading = page.getByRole('heading', { name: 'Select your show' });

}


}  

export default TourPage;