import { expect } from "@playwright/test";

export class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.orderSummaryHeader = this.page.getByRole('heading', { name: 'Order Summary' });
        this.productTitle = this.page.locator('.product-title');
    };

async completeShippingDetails(firstName, lastName, address, state, postalCode) {
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Ganesh');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Kanna');
    await page.getByRole('textbox', { name: 'Address' }).click();
    await page.getByRole('textbox', { name: 'Address' }).fill('11th cross avenue');
    await page.getByRole('textbox', { name: 'State/Province' }).click();
    await page.getByRole('textbox', { name: 'State/Province' }).fill('Puducherry');
    await page.getByRole('textbox', { name: 'Postal Code' }).click();
    await page.getByRole('textbox', { name: 'Postal Code' }).fill('605014');

    await page.getByRole('button', { name: 'Submit' }).click({delay: 2000});
  
}

};
