import {  Page } from "@playwright/test";
import { WebTablePage } from "./webTablesPage";
import { BrokenLinksPage } from "./brokenLinksPage";

export class ElementsPage{
    constructor(private page: Page) {}
    readonly webTables = this.page.getByRole('listitem').filter({ hasText: 'Web Tables' });
    readonly brokenLinksImg = this.page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' });

    async goToWebTablesPage() : Promise<WebTablePage> {
        await this.webTables.click()
        return new WebTablePage(this.page);
    }
    async goToBrokenLinksPage() : Promise<BrokenLinksPage> {
        await this.brokenLinksImg.click()
        return new BrokenLinksPage(this.page);
    }

}