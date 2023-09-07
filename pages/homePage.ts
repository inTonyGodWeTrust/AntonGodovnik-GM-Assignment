import { Page } from "@playwright/test";
import { ElementsPage } from "./elementsPage";
import { WidgetsPage } from "./widgetsPage";
import { InteractionsPage } from "./interactionsPage";
import { FormsPage } from "./formsPage";

export class HomePage{

    constructor(private page: Page) {}
    readonly elementsPage = this.page.getByRole('heading', { name: 'Elements' });
    readonly widgetsPage = this.page.getByRole('heading', { name: 'Widgets' });
    readonly interactionsPage = this.page.getByRole('heading', { name: 'Interactions' });
    readonly formsPage = this.page.getByRole('heading', { name: 'Forms' });

    async open(route = '/') {
        await this.page.goto(route, { timeout: 30 * 1000 })
    }
    async goToElementsPage() : Promise<ElementsPage>{
        await this.elementsPage.click();
        return new ElementsPage(this.page);
    }
    async goToWidgetsPage() : Promise<WidgetsPage>{
        await this.widgetsPage.click();
        return new WidgetsPage(this.page);
    }
    async goToInteractionsPage() : Promise<InteractionsPage>{
        await this.interactionsPage.click();
        return new InteractionsPage(this.page);
    }
    async goToFormsPage() : Promise<FormsPage>{
        await this.formsPage.click();
        return new FormsPage(this.page);
    }
}