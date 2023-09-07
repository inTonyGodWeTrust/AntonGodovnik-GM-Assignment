import { Page, expect } from "@playwright/test";

export class TooltipPage{
    constructor(private page: Page) {}
    readonly tooltipsButton = this.page.getByRole('button', { name: 'Hover me to see' });
    readonly tooltipsSelector = ".tooltip"
    async hoverTooltipsButton() {
        await this.tooltipsButton.hover();
    }
    async waitForTooltipsToShow(){
        await this.page.waitForSelector(this.tooltipsSelector);
    }
    async verifyTooltipsText(text: string){
        const tooltip = this.page.locator(this.tooltipsSelector);
        await expect(tooltip).toHaveText(text);
    }
}