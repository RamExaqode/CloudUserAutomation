import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bioserob2cdev.b2clogin.com/bioserob2cdev.onmicrosoft.com/b2c_1a_signup_signin/oauth2/v2.0/authorize?client_id=0b878f9b-e2c2-433b-9229-fd285f1ef02b&scope=https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FInvitations.ReadWrite%20https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FOrganizations.ReadWrite%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fportal.dev.biosero.com%2Fauthentication%2Flogin-callback&client-request-id=4f647cbb-f7ff-48d7-a95d-8c0a3aa4011c&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.16.1&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=fX_gsYpL_dCy-nOiX97fy_6ltxHw7NQzcLlYpoXummk&code_challenge_method=S256&nonce=5c730bce-1ff1-4e1e-9035-5df38694b1a9&state=eyJpZCI6ImNiYzFlMGIzLTY1NTAtNDMxZi04MGFjLWNhZGQyNjEwMTRkZiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CkVsWG0uOocNwxf4BZEEnFOaOcwjt90sgaw0AkYRyOJs');
  await expect(page.getByRole('textbox', { name: 'Sign in name' })).toBeVisible();

  await page.locator("input#signInName").fill("rammarshivane@biosero.com");

  await page.locator("input#password").fill("Ram@7670");
  await page.getByRole('button', {name: 'Sign in'}).click();
  await page.getByRole('link', { name: 'corporate_fare Organization' }).waitFor({ state: 'visible' });
await page.getByRole('link', { name: 'corporate_fare Organization' }).click();






  //await page.getByRole('textbox', { name: 'Sign in name' }).click();
 // await page.getByRole('textbox', { name: 'Sign in name' }).fill('rammarshivane@biosero.com');
 // await page.getByRole('textbox', { name: 'Password' }).click();
 // await page.getByRole('textbox', { name: 'Password' }).fill('Ram@7670');
  //await page.getByRole('button', { name: 'Sign in' }).click();
 // await page.goto('https://portal.dev.biosero.com/dashboard');
  await page.getByRole('link', { name: 'corporate_fare Organization' }).click();
  await page.getByRole('link', { name: 'groups Members' }).click();
  await page.getByRole('link', { name: 'mail Invitations' }).click();
  await page.getByRole('link', { name: 'list_alt Subscriptions' }).click();
  await page.getByRole('link', { name: 'encrypted Scheduler Licenses' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'deployed_code Marketplace' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://marketplace.dev.biosero.com/marketplace');
  await page.getByRole('link', { name: 'manage_accounts Account' }).click();
  await page.getByRole('button', { name: 'rM' }).click();
  await page.getByRole('button', { name: 'logout Sign out' }).click();
  await page.goto('https://bioserob2cdev.b2clogin.com/bioserob2cdev.onmicrosoft.com/b2c_1a_signup_signin/oauth2/v2.0/authorize?client_id=0b878f9b-e2c2-433b-9229-fd285f1ef02b&scope=https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FInvitations.ReadWrite%20https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FOrganizations.ReadWrite%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fportal.dev.biosero.com%2Fauthentication%2Flogin-callback&client-request-id=c0c860ce-a097-43c1-9958-03ed9959fa72&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.16.1&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=aqmBPTHJqI7CbIAW7EiYD6wSxDbjefKS5PDf-MABblg&code_challenge_method=S256&nonce=d388f39e-939f-4edc-8e0c-4e91b85c8318&state=eyJpZCI6IjlmOTdjNzQ3LWEyMmEtNDIyNS1hMTMzLThmOWZhMmFkOWU3MCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CzJrp3_rV-1lVji1dowy5H4LwM-Xh8tQ6pJzkhE3he3k');
});