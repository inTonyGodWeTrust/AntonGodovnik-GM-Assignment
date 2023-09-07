import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ElementsPage } from '../../pages/elementsPage';
import { WebTablePage } from '../../pages/webTablesPage';
import { WebTablePageModal } from '../../pages/webTablesPageModal';
import { WidgetsPage } from '../../pages/widgetsPage';
import { FormsPage } from '../../pages/formsPage';
import { PracticeFormPage } from '../../pages/practiceFormPage';
import { InteractionsPage } from '../../pages/interactionsPage';
import sensetiveData from '../../fixtures/sensetiveData.json';

test.describe("Assignment for Automating UI", () => {

  let homePage: HomePage;
  let elementsPage: ElementsPage;
  let webTablesPage: WebTablePage;
  let webTablesPageModal: WebTablePageModal;
  let widgetsPage: WidgetsPage;
  let interactionsPage: InteractionsPage;
  let practiceFormPage: PracticeFormPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });
  test('TC01- Scenario A - Verify user can enter new data into the table', async ({ page }) => {
    elementsPage = await homePage.goToElementsPage();
    webTablesPage = await elementsPage.goToWebTablesPage();
    webTablesPageModal = await webTablesPage.clickAdd();
    await webTablesPageModal.fillAndSubmitForm({});
    webTablesPage = new WebTablePage(page);
    await webTablesPage.verifyUser(sensetiveData.user);
  });

  test("TC01- Scenario B - Verify user can edit the row in the table", async ({ page }) => {
    elementsPage = await homePage.goToElementsPage();
    webTablesPage = await elementsPage.goToWebTablesPage();
    webTablesPage = new WebTablePage(page)
    webTablesPageModal = await webTablesPage.clickEdit();
    await webTablesPageModal.fillAndSubmitEditedForm({});
    await webTablesPage.verifyEditedFirstName("Gerimedica");
    await webTablesPage.verifyEditedLastName("BV")

  })

  test('TC02 - Verify broken image', async ({  }) => {
    elementsPage = await homePage.goToElementsPage();
    const brokenLinksPage = await elementsPage.goToBrokenLinksPage();
    await brokenLinksPage.verifyBrokenImage()
  })

  test("TC03 - Verify user can submit the form.", async ({  }) => {
    formsPage = await homePage.goToFormsPage();
    practiceFormPage = await formsPage.goToPracticeFormPage();
    await practiceFormPage.fillForm({});
    await practiceFormPage.assertForm({
      firstName: sensetiveData.practiceData.firstName,
      userEmail: sensetiveData.practiceData.email,
      mobileNumber: sensetiveData.practiceData.mobile
    } )
  });

  test('TC04 - Verify the progress bar', async ({  }) => {
    widgetsPage = await homePage.goToWidgetsPage();
    const progressBarPage = await widgetsPage.goToProgressBarPage();
    await progressBarPage.clickStart();
    await progressBarPage.waitForProgressBarComplete();
  })

  test('TC05 - Verify the tooltip', async ({  }) => {
    widgetsPage = await homePage.goToWidgetsPage()
    const tooltipPage = await widgetsPage.goToTooltipPage();
    await tooltipPage.hoverTooltipsButton();
    await tooltipPage.waitForTooltipsToShow();
    await tooltipPage.verifyTooltipsText("You hovered over the Button");
  })

  test('TC06 - Verify user can drag and drop', async ({  }) => {
    interactionsPage = await homePage.goToInteractionsPage();
    const droppablePage = await interactionsPage.goToDroppablePage();
    await droppablePage.dragToPlace();
    await droppablePage.verifyDropped();
  })
});

