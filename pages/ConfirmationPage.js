import { expect } from "@playwright/test";

export class ConfirmationPage {

    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = this.page.locator('[data-test="shipping-address-heading"]');
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping »' });
        this.downloadReceiptButton = this.page.locator('a#downloadpdf');
    };

    async validateOrderConfirmationMessage() {
        await expect(this.orderConfirmationMessage).toBeVisible();
        console.log('Order confirmation message is visible'); 
    }

};
