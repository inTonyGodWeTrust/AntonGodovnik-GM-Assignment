import { Page, expect } from "@playwright/test";
import sensetiveData from '../fixtures/sensetiveData.json';

export class PracticeFormPage {

    constructor(private page: Page) {
    }

    readonly firstName = this.page.locator('[id="firstName"]');
    readonly lastName = this.page.locator('[id="lastName"]');
    readonly userEmail = this.page.locator('[id="userEmail"]');
    readonly mobileNumber = this.page.locator('[id="userNumber"]');
    readonly dateOfBirth = this.page.locator('[id="dateOfBirthInput"]');
    readonly subjects = this.page.locator('[id="subjectsContainer"] input');
    readonly address = this.page.locator('[id="currentAddress"]');
    readonly city = this.page.locator('[id="city"]');
    readonly state = this.page.locator('[id="state"]');
    readonly submit = this.page.locator('//*[@id="submit"]');
    readonly uploadPicture = this.page.locator('id="uploadPicture"');

    async setGender() {
        await this.page.locator('[for="gender-radio-1"]').click();
    }

    async setHobbies() {
        await this.page.locator('[for="hobbies-checkbox-1"]').click();
    }

    async uploadImage() {
        await this.page.setInputFiles(
            'input[id="uploadPicture"]',
            "fixtures/image.jpg"
        );
    }
    async fillForm({
                       firstName = sensetiveData.practiceData.firstName,
                       lastName = sensetiveData.practiceData.lastName,
                       userEmail = sensetiveData.practiceData.email,
                       mobileNumber = sensetiveData.practiceData.mobile,
                       address = sensetiveData.practiceData.address,
                   }) {
        await this.firstName.type(firstName);
        await this.lastName.type(lastName);
        await this.userEmail.type(userEmail);
        await this.mobileNumber.type(mobileNumber);
        await this.dateOfBirth.type("29 Jul 2000");
        await this.page.keyboard.press("Enter");
        await this.setHobbies()
        await this.setGender()
        await this.subjects.type("Ph");
        await this.page.keyboard.press("Enter");
        await this.uploadImage();
        await this.address.type(address);
        await this.state.click({force: true});
        await this.page.keyboard.press("Enter");
        await this.city.click({force: true});
        await this.page.keyboard.press("Enter");
        await this.clickSubmit();
    }


    async clickSubmit() {
        await this.submit.evaluate((node: HTMLElement) => {
            node?.click();
        });
    }
    async assertForm({firstName, userEmail, mobileNumber}: { firstName: any, userEmail: any, mobileNumber: any }) {
        await expect(
            await this.page.locator(`tr`).nth(1).locator("td").nth(1)
        ).toContainText(firstName);
        await expect(
            await this.page.locator(`tr`).nth(2).locator("td").nth(1)
        ).toContainText(userEmail);
        await expect(
            await this.page.locator(`tr`).nth(4).locator("td").nth(1)
        ).toContainText(mobileNumber);
    }
}