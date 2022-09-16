const { expect } = require("@playwright/test");
const { RandomPage } = require("./random_generator.page");
const randomPage = new RandomPage();

exports.UserAccountPage = class UserAccountPage {
  constructor(page) {
    this.page = page;
    this.userFirstNameLocator = page.locator(`#user_firstname`);                                    // First name locator
    this.successMessageLocator = page.locator(`#flash_notice`);                                     // Validation success message locator
    this.saveButtonLocator = page.locator(`input[type="submit"]`);                                  // Save button locator
  }

  async changeFirstName() {                                                                         // Changes first name and clicks save button
    await this.userFirstNameLocator.fill(randomPage.validNameSurnameGenerator());
    await this.saveButtonLocator.click();
  }

  async checkSuccessMessage() {                                                                     // Checks validation success message
    await expect(this.successMessageLocator).toHaveText('Account was successfully updated.');
  }
};
