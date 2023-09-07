import { Page } from "@playwright/test";

export class ProgressBarPage{
    constructor(private page: Page) {}
    readonly startButton = this.page.getByRole('button', { name: 'Start' });
    readonly completeProgressBar = ".progress-bar.bg-success";

    async clickStart() {
        await this.startButton.click();
    }
    async waitForProgressBarComplete(){
        await this.page.waitForSelector(this.completeProgressBar);
    }
}