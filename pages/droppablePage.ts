import { Page } from "@playwright/test";
export class DroppablePage{
    constructor(private page: Page) {}
    readonly dragMe = this.page.getByText('Drag me', { exact: true });
    readonly dragPanel = this.page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
    readonly droppedCaption = this.page.getByText('Dropped!');

    async dragToPlace() {
        await this.dragMe.dragTo(this.dragPanel);
    }
    async verifyDropped(){
        await this.droppedCaption.isVisible()
    }
}