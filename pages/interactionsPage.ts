import { Page } from "@playwright/test";
import { DroppablePage } from "./droppablePage";

export class InteractionsPage{
    constructor(private page: Page) {}
    readonly droppablePage = this.page.getByText('Droppable');

    async goToDroppablePage() : Promise<DroppablePage> {
        await this.droppablePage.click()
        return new DroppablePage(this.page);
    }
}