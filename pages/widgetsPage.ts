import { Page } from "@playwright/test";
import { ProgressBarPage } from "./progressBarPage";
import { TooltipPage } from "./tooltipPage";

export class WidgetsPage{

    constructor(private page: Page) {}
    readonly progressBarItem = this.page.getByText('Progress Bar');
    readonly tooltipItem = this.page.getByRole('listitem').filter({ hasText: 'Tool Tips' });
    async goToProgressBarPage()  {
        await this.progressBarItem.click()
        return new ProgressBarPage(this.page);
    }
    async goToTooltipPage()  {
        await this.tooltipItem.click()
        return new TooltipPage(this.page);
    }
}