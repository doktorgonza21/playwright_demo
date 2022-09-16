## Automation example tests for "redmine.org" web-site.

### This tests showing the automation of user registration, user log in and changing some user account information.

##### **Tests running on:**

##### **Language:** JavaScript
##### **Framework:** Playwright
##### **Reporter:** Allure
##### **For clear trash before run test:** Rimraf

##### **For use this tests:**

1. Download and install Visual Studio Code from "https://code.visualstudio.com/download"
2. Download and install Node.JS from "https://nodejs.org/en/download/"
3. Using Visual Studio Code install and configure your workspace:<br>
    3.1. Create a new folder wherever you want<br>
    3.2. Open this folder via VS code<br>
    3.3. In the VS code terminal run the command "**npm init playwright@latest**" for Playwright installation<br>
    3.4. In the VS code terminal run the command "**npm i -D @playwright/test allure-playwright**" for Allure report installation<br>
    3.5. In the VS code terminal run the command "**npm i allure-commandline**" for adding Allure commands to command line<br>
    3.6. In the VS code terminal run the command "**npm install --save-dev rimraf**" for Rimraf cleaner installation (removes Reports folders to avoid file exists conflict)<br>
    3.7. Go to playwright.config.js file and replace the "Reporter" line for this code:
            
            reporter: [
                ['html'],
                ['allure-playwright', { outputFolder: 'allure-results'}],
            ],

    3.8. Go to package.json file and replace the "Scripts:" line for this code:

            "scripts": {
                "clean": "rimraf allure-results && rimraf allure-report/",
                "test:reporter": "npm run clean && playwright test --headed --reporter=allure-playwright,line",
                "allure-report": "npx allure generate allure-results && allure open"
            },

    3.9. Copy this project "pages" and "tests" folders to the root of your created on the 3.1. step folder
4. To run tests and create allure report:
    4.1. Run the "**npm run test:reporter**" command for run test
    4.2. Run the "**npm run allure-report**" command for create and open allure report 

---------------------------------------------------------------------------------------
##### **To see reports remotely without installation and files download**

Go to this link: https://doktorgonza21.github.io/playwright_demo/
