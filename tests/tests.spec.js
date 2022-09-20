const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');                // Connects the Home page
const { RegisterPage } = require('../pages/register.page');        // Connects the "Registration form" page
const { LoginPage } = require('../pages/login.page');              // Connects the "Log In" page
const { UserAccountPage } = require('../pages/user_account.page'); // Connects the "User account" page


test.skip('Test case 01 - Should check the user registration with valid data', async ({page}) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    await homePage.openRegisterPage();                                                                  // Opens registration page
    await expect(page).toHaveURL('https://www.redmine.org/account/register');                           // Checks the URL for correct redirect
    await registerPage.fillFormWithValidData();                                                         // Fills the registration form
    await registerPage.checkSuccessMessage();                                                           // Checks the validation success message
});

test.skip('Test case 02 - Should check the user registration with invalid data', async ({page}) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    await homePage.openRegisterPage();                                                                  // Opens registration page
    await expect(page).toHaveURL('https://www.redmine.org/account/register');                           // Checks the URL for correct redirect
    await registerPage.fillFormWithInvalidData();                                                       // Fills the registration form
    await registerPage.checkErrorMessages();                                                            // Checks the validation error messages
});

test.skip('Test case 03 - Should check the user login with valid data', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.openLoginPage();                                                                     // Opens log in page
    await expect(page).toHaveURL('https://www.redmine.org/login');                                      // Checks the URL for correct redirect
    await loginPage.fillFormWithValidData();                                                            // Fills the log in form
    await homePage.checkActiveUsername();                                                               // Checks the logged username
});

test('Test case 04 - Should check the user login with invalid data', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.openLoginPage();                                                                     // Opens log in page
    await expect(page).toHaveURL('https://www.redmine.org/login');                                      // Checks the URL for correct redirect
    await loginPage.fillFormWithInvalidData();                                                          // Fills the log in form
    await loginPage.checkErrorMessages();                                                               // Checks the validation error messages
});

test('Test case 05 - Should check the First name for registered user', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const userAccountPage = new UserAccountPage(page);
    await homePage.openLoginPage();                                                                     // Opens log in page
    await expect(page).toHaveURL('https://www.redmine.org/login');                                      // Checks the URL for correct redirect
    await loginPage.fillFormWithValidData();                                                            // Fills the log in form
    await homePage.openMyAccountPage();                                                                 // Opens "My account" page
    await userAccountPage.changeFirstName();                                                            // Changes user First Name
    await userAccountPage.checkSuccessMessage();                                                        // Checks validation message
});