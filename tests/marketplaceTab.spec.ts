import { test, expect } from "@playwright/test";
import { marketPlace } from "../pages/marketPlacePage";  

test.beforeEach(async ({ page }) => {
  const mplace = new marketPlace(page);  // Declare `mplace` here
  await page.goto('https://portal.dev.biosero.com');
  await mplace.doLogin('rammarshivane@biosero.com', 'Ram@7670');
  //await page.locator("//h2[contains(text(),'Sign in with your sign in name')]").waitFor({ state: "visible", timeout: 10000 });
  console.log("Landed on login page")
});

test.skip('Verify user can Click on the Marketplace tab', async ({ page }) => {
  test.setTimeout(60000);  // Set timeout to 60 seconds (60,000ms)
  const mplace = new marketPlace(page);  // Declare `mplace` inside test
  await mplace.clickMarketPlaceTab();
  await page.waitForLoadState('networkidle'); 
  console.log("Clicked on marketplace tab successfully")
 // const mplaceText = page.locator("//h2[contains(text(),'Marketplace')]");
  //await mplaceText.waitFor({ state: 'visible', timeout: 10000 });

  // await expect(mplaceText).toHaveText('Marketplace');
});
//------------------------------------------------------------------------------------------------------


test("Count total items in a paginated list", async ({ page }) => {
  const mplace = new marketPlace(page);
  await mplace.clickMarketPlaceTab();
  await page.waitForLoadState("networkidle");
  console.log("Clicked on marketplace tab successfully");
  test.setTimeout(60000); 
  /*let totalItems = 0;
  let hasNextPage = true;

  while (hasNextPage) {
    await page.waitForSelector("//li[@class='w-full']", { timeout: 30000 });
    const items = await page.$$("//li[@class='w-full']");
    totalItems += items.length;
    console.log(`Items found on current page: ${items.length}`);
    const nextButton = await page.$("//i[contains(text(),'navigate_next')]");
    
  }*/

 // console.log(`Total items across all pages: ${totalItems}`);
});

test.skip('Verify total number of drivers on the Drivers tab', async ({ page }) => {
  test.setTimeout(60000); 
  const mplace = new marketPlace(page);  
  await mplace.clickMarketPlaceTab();
  await page.waitForLoadState('networkidle'); 
  console.log("Clicked on marketplace tab successfully")
 // const mplaceText = page.locator("//h2[contains(text(),'Marketplace')]");
  //await mplaceText.waitFor({ state: 'visible', timeout: 10000 });

  // await expect(mplaceText).toHaveText('Marketplace');
});
