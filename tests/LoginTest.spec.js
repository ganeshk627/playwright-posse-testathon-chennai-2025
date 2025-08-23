// @ts-check
import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';


test('Login Test @smoke', async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await test.step('Opening Login Page', async () => {
        await page.goto('/');
        console.log(`Navigated to ${await page.url()}`);
        await homePage.openLoginPage();
    });
    await test.step('Enter username and password', async () => {
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        console.log('Entered username and password');

    });

    await test.step('Validate dashboard', async () => {  
        await expect(page).toHaveURL(/.*account\/account/).catch((error)=> {console.error(error); throw error});      
        console.log('Successfully navigated to Dashboard page');
    });

})
