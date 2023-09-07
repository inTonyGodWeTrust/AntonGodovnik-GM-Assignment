import { Page } from "@playwright/test";
import { PracticeFormPage } from "./practiceFormPage";

export class FormsPage{
    constructor(private page: Page) {}
    readonly practiceForm = this.page.getByText('Practice Form');

    async goToPracticeFormPage() : Promise<PracticeFormPage> {
        await this.practiceForm.click()
        return new PracticeFormPage(this.page);
    }
}