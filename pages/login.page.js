const { expect } = require("@playwright/test");
const { RandomPage } = require("./random_generator.page");
const randomPage = new RandomPage();
const randomEmail = randomPage.validEmailGenerator();                                   // Generates the password for fill the form with the same data
const randomPass = randomPage.validPasswordGenerator();                                 // Generates the email for check it in validation message
const registeredUsername = 'lqtesting1409';                                             // Registered username
const registeredUserPassword = 'Yhnbgt321';                                             // Registered user password              

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.userameFieldLocator = page.locator(`input#username`);                          // "Username" field locator
    this.passwordFieldLocator = page.locator(`#password`);                              // "Password" field locator
    this.autologinCheckboxLocator = page.locator(`#autologin`);                         // "Auto log in" check-box locator
    this.forgotPasswordLinkLocator = page.locator(`[href="/account/lost_password"]`);   // "Forgot password" link locator
    this.continueButtonLocator = page.locator(`input[name="login"]`);                   // "Continue" button locator
    this.validationErrorMessage = page.locator(`#flash_error`);                         // Validation error message locator
  }

  async fillFormWithValidData() {                                                       // Fills the registration form with a valid data and click the "continue" button
    await this.userameFieldLocator.fill(registeredUsername);
    await this.passwordFieldLocator.fill(registeredUserPassword);
    await this.continueButtonLocator.click();
  }

  async fillFormWithInvalidData() {                                                     // Fills the registration form with invalid data and click the "continue" button
    await this.userameFieldLocator.fill(randomPage.validUsernameGenerator());
    await this.passwordFieldLocator.fill(randomPage.validPasswordGenerator());
    await this.continueButtonLocator.click();
  }

  async checkErrorMessages() {                                                          // Checks the error validation message
    await expect(this.validationErrorMessage).toHaveText('Invalid user or password')
  }

};
