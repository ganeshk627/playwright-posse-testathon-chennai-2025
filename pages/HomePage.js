import { expect } from "@playwright/test";
import { loginConfig } from "../configs/page-config";

// export class HomePage extends HeaderFooterPage {
export class HomePage {

    constructor(page) {
        // super(page);
        this.page = page;
    };

    async openLoginPage() {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page).toHaveURL(loginConfig.URL);
        console.info('Login page opened');
    }

    async openFacebookSocialLink(header = true) {
        const facebookLinkPromise = this.page.context().waitForEvent('page').catch((error)=> {
            console.error('facebook page not opened!');
            console.error(error);
            throw error}
            );
        await this.page.locator(header ? headerSocialLinks : footerSocialLinks).locator(facebookLink).click();
        console.info('facebook link clicked');
        const facebookPage = await facebookLinkPromise;
        await facebookPage.waitForLoadState();
        console.info('facebook link opened');
        return new FacebookPage(facebookPage);
    }

    async openTwitterSocialLink(header = true) {
        const twitterLinkPromise = this.page.context().waitForEvent('page').catch((error)=> {
            console.error('twitter page not opened!');
            console.error(error);
            throw error}
            );
        await this.page.locator(header ? headerSocialLinks : footerSocialLinks).locator(twitterLink).click();
        console.info('twitter link clicked');
        const twitterPage = await twitterLinkPromise;
        await twitterPage.waitForLoadState();
        console.info('twitter link opened');
        return new TwitterPage(twitterPage);
    }

    async openLinkedinSocialLink(header = true) {
        const linkedinPromise = this.page.context().waitForEvent('page').catch((error)=> {
            console.error('linkedin page not opened!');
            console.error(error);
            throw error}
            );
        await this.page.locator(header ? headerSocialLinks : footerSocialLinks).locator(linkedInLink).click();
        console.info('linkedin link clicked');
        const linkedinPage = await linkedinPromise;
        await linkedinPage.waitForLoadState();
        // await this.page.waitForLoadState();
        console.info('linkedin link opened');
        return this;
    }

};