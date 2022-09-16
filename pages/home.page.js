const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLinkLocator = page.locator(`[class="login"]`);                                // Log in link locator
    this.registerLinkLocator = page.locator(`[class="register"]`);                          // Register link locator
    this.activeUsernameLocator = page.locator(`[class="user active"]`);                     // Active username locator
    this.myAccountLinkLocator = page.locator(`[class="my-account"]`);                       // My account link
  }

  async openHomePage() {                                                                    // Opens the home page
    await this.page.goto("https://www.redmine.org/");
  }

  async openRegisterPage() {                                                                // Clicks the "register" link
    await this.page.goto("https://www.redmine.org/");
    await this.registerLinkLocator.click();
  }

  async openLoginPage() {                                                                   // Clicks the "log in" link
    await this.page.goto("https://www.redmine.org/");
    await this.loginLinkLocator.click();
  }

  async checkActiveUsername() {                                                             // Checks the active user name
    await expect(this.activeUsernameLocator).toHaveText("lqtesting1409");
  }

  async openMyAccountPage() {                                                               // Clicks the "Моя учётная запись" link
    await this.myAccountLinkLocator.click();
  }
};
