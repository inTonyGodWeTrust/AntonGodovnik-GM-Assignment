import { Page } from "@playwright/test";
import sensetiveData from '../fixtures/sensetiveData.json';

export class WebTablePageModal{
    constructor(private page: Page) {}
    readonly firstNameField = this.page.getByPlaceholder('First Name');
    readonly lastNameField = this.page.getByPlaceholder('Last Name');
    readonly emailField = this.page.getByPlaceholder('name@example.com');
    readonly ageField = this.page.getByPlaceholder('Age');
    readonly salaryField = this.page.getByPlaceholder('Salary');
    readonly departmentField = this.page.getByPlaceholder('Department');
    readonly submitButton = this.page.getByRole('button', { name: 'Submit' });

    async fillAndSubmitForm({
      firstName = sensetiveData.user.firstName,
      lastName = sensetiveData.user.lastName,
      age = sensetiveData.user.age,
      email = sensetiveData.user.email,
      salary = sensetiveData.user.salary,
      department = sensetiveData.user.department,
      }) {
        await this.firstNameField.type(firstName);
        await this.lastNameField.type(lastName);
        await this.emailField.type(email);
        await this.ageField.type(age.toString());
        await this.salaryField.type(salary.toString());
        await this.departmentField.type(department);
        await this.submitButton.click();
    }

    async fillAndSubmitEditedForm({
     firstName = sensetiveData.user2.firstName,
     lastName = sensetiveData.user2.lastName,
     }) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.submitButton.click();
    }

}