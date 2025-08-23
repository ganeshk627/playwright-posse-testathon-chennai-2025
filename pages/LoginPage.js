import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        this.page = page;
    };

    async login(username, password) {
        await this.page.locator('div').filter({ hasText: /^Select Username$/ }).nth(2).click();
        await this.page.getByText(username, { exact: true }).click();
        await this.page.getByText('Select Password').click();
        await this.page.getByText(password, { exact: true }).click();
        await this.page.getByRole('button', { name: 'Log In' }).click();
        await expect(this.page).toHaveURL(dashboardConfig.URL);
        logger.info('Successfully navigated to Dashboard page');
        return new DashboardPage(this.page);
    };

    async clickForgotPasswordLink() {
        await this.page.locator(forgotPasswordLink).click();
        await expect(this.page).toHaveURL(forgotpasswordConfig.URL);
        logger.info('Navigated to password reset page');
    }

    async clickForgotLoginLink() {
        await this.page.locator(forgotLoginLink).click();
        await expect(this.page).toHaveURL(forgotloginConfig.URL);
        logger.info('Navigated to login reset page');
    }





};
