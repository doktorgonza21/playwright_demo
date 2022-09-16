const { expect } = require("@playwright/test");
const { RandomPage } = require("./random_generator.page");
const randomPage = new RandomPage();
const randomEmail = randomPage.validEmailGenerator();                                   // Generates the password for fill the form with the same data
const randomPass = randomPage.validPasswordGenerator();                                 // Generates the email for check it in validation message

exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.usernameFieldLocator = page.locator(`#user_login`);                            // "Пользователь" field locator
    this.passwordFieldLocator = page.locator(`#user_password`);                         // "Пароль" field locator
    this.repeatPasswordFieldLocator = page.locator(`#user_password_confirmation`);      // "Подтверждение" field locator
    this.firstNameFieldLocator = page.locator(`#user_firstname`);                       // "Имя" field locator
    this.lastNameFieldLocator = page.locator(`#user_lastname`);                         // "Фамилия" field locator
    this.emailFieldLocator = page.locator(`#user_mail`);                                // "Email" field locator
    this.languageDropdownLocator = page.locator(`#user_language`);                      // "Язык" drop-down menu locator
    this.ircNickFieldLocator = page.locator(`#user_custom_field_values_3`);             // "IRC nick" field locator
    this.continueButtonLocator = page.locator(`[name="commit"]`);                       // "Принять" button locator
    this.successMessageLocator = page.locator(`#flash_notice`);                         // Validation success message locator
    this.firstErrorMessageLocator = page.locator(`//div[@id="errorExplanation"]/descendant::li[1]`);
    this.secondErrorMessageLocator = page.locator(`//div[@id="errorExplanation"]/descendant::li[2]`);
    this.thirdErrorMessageLocator = page.locator(`//div[@id="errorExplanation"]/descendant::li[3]`);
    this.fourthErrorMessageLocator = page.locator(`//div[@id="errorExplanation"]/descendant::li[4]`);
  }

  async fillFormWithValidData() {                                                       // Fills the registration form with a valid data and click the "continue" button
    await this.usernameFieldLocator.fill(randomPage.validUsernameGenerator());
    await this.passwordFieldLocator.fill(randomPass);
    await this.repeatPasswordFieldLocator.fill(randomPass);
    await this.firstNameFieldLocator.fill(randomPage.validNameSurnameGenerator());
    await this.lastNameFieldLocator.fill(randomPage.validNameSurnameGenerator());
    await this.emailFieldLocator.fill(randomEmail);
    await this.continueButtonLocator.click();
  }

  async checkSuccessMessage() {                                                         // Checks the success validation message
    await expect(this.successMessageLocator).toHaveText(
      `Account was successfully created. An email containing the instructions to activate your account was sent to ` 
      + randomEmail + `.`);
  }

  async fillFormWithInvalidData() {                                                     // Fills the registration form with invalid data and click the "continue" button
    await this.usernameFieldLocator.fill(randomPage.invalidUsernameGenerator());
    await this.passwordFieldLocator.fill(randomPage.invalidPasswordGenerator());
    await this.repeatPasswordFieldLocator.fill(randomPage.invalidPasswordGenerator());
    await this.firstNameFieldLocator.fill(randomPage.invalidNameSurnameGenerator());
    await this.lastNameFieldLocator.fill(randomPage.invalidNameSurnameGenerator());
    await this.emailFieldLocator.fill(randomPage.invalidEmailGenerator());
    await this.continueButtonLocator.click();
  }

  async checkErrorMessages() {                                                          // Checks the error validation messages
    await expect(this.firstErrorMessageLocator).toHaveText('Login is invalid')
    await expect(this.secondErrorMessageLocator).toHaveText('Email is invalid')
    await expect(this.thirdErrorMessageLocator).toHaveText(`Password doesn't match confirmation`)
    await expect(this.fourthErrorMessageLocator).toHaveText('Password is too short (minimum is 4 characters)')
  }

};
