import { Page, expect } from "@playwright/test";
export class BrokenLinksPage {
    constructor(private page: Page) {}
    readonly brokenImg = this.page.getByRole('img').nth(3);
    async verifyBrokenImage() {
        await expect(this.brokenImg).toBeVisible();
        const fullSizeImg = await this.brokenImg.evaluate(e => (e as HTMLImageElement).naturalWidth);
        await expect(fullSizeImg).toBeUndefined();
    }
}

  
