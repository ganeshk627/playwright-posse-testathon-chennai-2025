import { expect } from "@playwright/test";
import { loginConfig } from "../configs/page-config";

export class HomePage {

    constructor(page) {
        this.page = page;
    };

    async openLoginPage() {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page).toHaveURL(loginConfig.URL);
        console.log('Login page opened');
    }

};