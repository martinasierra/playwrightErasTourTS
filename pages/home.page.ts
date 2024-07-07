import { test, expect } from '@playwright/test';

import { type Locator, type Page } from "@playwright/test";

/* 
export class HomePage{
-- variables
-- constructor
-- methods (or functions)
}  
*/

export class HomePage{
// variables (read onlies) 
readonly page: Page;
readonly desktopLogo: Locator;
readonly erasImagesContainer: Locator;
readonly merchButton: Locator;
readonly merchHeading: Locator;

// constructor
constructor (page:Page) {
    this.page = page;
    this.desktopLogo = page.getByRole('banner').getByRole('img', { name: 'Taylor Swift Logo' })
    this.erasImagesContainer = page.locator('.Hero_container__IcDcp');
    this.merchButton = page.getByRole('button', { name: 'Merch' });
    this.merchHeading = page.getByRole('heading', { name: 'Taylor Swift | The Eras Tour' });
}

// methods (or functions)
async clickMerchButton(){
   await this.merchButton.click();
}
    
}  

export default HomePage;