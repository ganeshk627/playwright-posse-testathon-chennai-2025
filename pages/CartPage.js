import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.page = page;
    };

    async openCartTray() {
        const bag = this.page.locator('.float-cart > .bag');
        await expect(bag).toBeVisible({timeout: 10000});
        await expect(bag).toContainClass('open', {timeout: 10000}).catch(async () => { 
            // await expect(bag).toContainClass('closed', {timeout: 5000});
            await bag.click();
            console.log('Cart tray opened by clicking the bag icon');
        });
        await expect(bag).toContainClass('open', {timeout: 5000});
        console.log('Cart tray is now open');
    }

    async checkoutCartItems() {
        await this.page.getByText('Checkout').click();
        console.log('Checkout button clicked');
    }

};
