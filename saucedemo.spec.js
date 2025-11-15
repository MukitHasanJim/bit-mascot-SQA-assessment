const { test, expect } = require('@playwright/test');

test('SauceDemo - Add product to cart and verify', async ({ page }) => {

  // 1. Go to login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Add first product
  const productName = await page.locator('.inventory_item_name').first().textContent();
  await page.locator('.btn_inventory').first().click();

  // 4. Go to cart
  await page.click('.shopping_cart_link');

  // 5. Verify product name
  const cartProduct = await page.locator('.inventory_item_name').textContent();
  await expect(cartProduct).toContain(productName);

  // 6. Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});
