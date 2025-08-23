// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';

test('Verify that user can see the favorites after likes the product under the favorites tab : TC-130', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/');
    console.log(`Navigated to ${await page.url()}`);
    await homePage.openLoginPage();

    await test.step('Opening Login Page', async () => {
    });
    await test.step('Enter username and password', async () => {
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        console.log('Entered username and password');
    });
    await homePage.addFavorite();
    await homePage.navigateToFavorites();
    const productCount = 6;
    await homePage.verifyFavorites(productCount);

})
test('Verify that user can remove the product from the favorite tab : TC-131', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/');
    console.log(`Navigated to ${await page.url()}`);
    await homePage.openLoginPage();

    await test.step('Opening Login Page', async () => {
    });
    await test.step('Enter username and password', async () => {
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        console.log('Entered username and password');
    });
    await homePage.addFavorite();
    await homePage.navigateToFavorites();
    await homePage.removeFavorite();
})
test('Verify that vendor filters (Apple, Samsung, Google, OnePlus) are working as expected : TC-132', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto('/');
    console.log(`Navigated to ${await page.url()}`);
    await homePage.openLoginPage();

    await test.step('Opening Login Page', async () => {
    });
    await test.step('Enter username and password', async () => {
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        console.log('Entered username and password');

    });
    await homePage.applyOnePlusFilter();
})


