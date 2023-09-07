import { Locator, Page, expect } from "@playwright/test";
import { WebTablePageModal } from "./webTablesPageModal";
// @ts-ignore
import sensetiveData from '../fixtures/sensetiveData.json';


export class WebTablePage{
    constructor(private page: Page) {}
    readonly addButton = this.page.getByRole('button', { name: 'Add' });
    readonly firstNameEdited = this.page.locator(`div:nth-child(2) > .rt-tr > div`).first();
    readonly lastNameEdited = this.page.locator(`div:nth-child(2) > .rt-tr > div:nth-child(2)`);
    readonly firstName = this.page.locator(`div:nth-child(4) > .rt-tr > div`).first();
    readonly lastName = this.page.locator(`div:nth-child(4) > .rt-tr > div:nth-child(2)`);
    readonly age = this.page.locator(`div:nth-child(4) > .rt-tr > div:nth-child(3)`);
    readonly email = this.page.locator(`div:nth-child(4) > .rt-tr > div:nth-child(4)`);
    readonly salary = this.page.locator(`div:nth-child(4) > .rt-tr > div:nth-child(5)`);
    readonly department = this.page.locator(`div:nth-child(4) > .rt-tr > div:nth-child(6)`);
    readonly editButton = this.page.locator(`div:nth-child(2) > .rt-tr > div:nth-child(7)`).getByTitle('Edit').locator('svg');

    async clickAdd() : Promise<WebTablePageModal> {
        await this.addButton.click();
        return new WebTablePageModal(this.page)
    }
    async clickEdit() : Promise<WebTablePageModal> {
        await this.editButton.click();
        return new WebTablePageModal(this.page);
    }
    async verifyUser(user: {
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        salary: string;
        department: string
    }){
        await this.verifyFirstName(sensetiveData.user.firstName);
        await this.verifyLastName(sensetiveData.user.lastName);
        await this.verifyEmail(sensetiveData.user.email);
        await this.verifyAge(sensetiveData.user.age);
        await this.verifySalary( sensetiveData.user.salary);
        await this.verifyDepartment(sensetiveData.user.department);
    }
    async verifyFirstName( firstName: string){
        await expect(this.firstName).toHaveText(firstName);
    }
    async verifyLastName(lastName: string){
        await expect(this.lastName).toHaveText(lastName);
    }
    async verifyAge(age: string){
        await expect(this.age).toHaveText(age.toString());
    }
    async verifyEmail(email: string){
        await expect(this.email).toHaveText(email);
    }
    async verifySalary(salary: string){
        await expect(this.salary).toHaveText(salary.toString());
    }
    async verifyDepartment( department: string){
        await expect(this.department).toHaveText(department.toString());
    }
    async verifyEditedFirstName( firstName: string){
        await expect(this.firstNameEdited).toHaveText(firstName);
    }
    async verifyEditedLastName(lastName: string){
        await expect(this.lastNameEdited).toHaveText(lastName);
    }
}