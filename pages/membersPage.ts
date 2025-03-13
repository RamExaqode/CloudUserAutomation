import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class membersPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnMembersTab() {
        try {
          const tabMembers = this.page.locator("xpath=//div[contains(text(),'Members')]");
          
          await tabMembers.waitFor({ state: 'visible', timeout: 10000 }); // Increased timeout

          await tabMembers.click();

     const elements = await this.page.locator("//span[@class='text-base !leading-normal truncate cursor-default text-gray-900']").all();

    for (const element of elements) {
        console.log("List of members: " + await element.textContent());
    }
          await this.page.waitForTimeout(5000);
        } catch (error) {
          throw new Error(`Unable to click on Members Tab: ${error.message}`);
        }

    }
      
}