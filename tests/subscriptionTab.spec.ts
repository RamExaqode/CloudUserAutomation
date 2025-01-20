import { test, expect } from "@playwright/test";
import { subscriptionsPage } from "../pages/subscriptionsPage";  

test.beforeEach(async ({ page }) => {
  
  const orgTab = new subscriptionsPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await orgTab.doLogin('rammarshivane@biosero.com', 'Ram@7670'); 
});

test.skip('Verify user can Click on the Subscriptions tab', async ({ page }) => {
  const subscTab = new subscriptionsPage(page);

  await subscTab.clickOnSubscriptionTab();

  const SubscriptionText = page.locator('xpath=//h2[contains(text(), "Subscriptions")]');

  await expect(SubscriptionText).toHaveText('Subscriptions');
});

test('Verify total number of Active subcriptions on the Subscriptions tab', async ({ page }) => {
    const subscTab = new subscriptionsPage(page);
    await subscTab.clickOnSubscriptionTab();
    await subscTab.totalSubscriptions();

  const listItems = page.locator('li.w-full');

  const count = await listItems.count();
  console.log(`Found ${count} list items:`);

  // Iterate through each item and print its text content
  for (let i = 0; i < count; i++) {
    const text = await listItems.nth(i).textContent();
    console.log(`Item ${i + 1}: ${text?.trim()}`);
  }
  
  
  });
