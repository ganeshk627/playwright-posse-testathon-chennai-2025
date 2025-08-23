import { expect } from "@playwright/test";
import { dashboardConfig } from "../configs/page-config";

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
        console.log('Successfully navigated to Dashboard page');
        return new DashboardPage(this.page);
    };






};
