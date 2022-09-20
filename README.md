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
3. Download and install java for Allure from "https://www.java.com/download/ie_manual.jsp"
4. Using Visual Studio Code install and configure your workspace<br>
    4.1. In the VS code terminal run the command "**npm init playwright@latest**" for Playwright installation<br>
    4.2. In the VS code terminal run the command "**npm i -D @playwright/test allure-playwright**" for Allure report installation<br>
    4.3. In the VS code terminal run the command "**npm i allure-commandline**" for adding Allure commands to command line<br>
    4.4. In the VS code terminal run the command "**npm install --save-dev rimraf**" for Rimraf cleaner installation (removes Reports folders to avoid file exists conflict)<br>
5. Clone this repository
6. To run tests and create allure report:<br>
    6.1. Run the "**npm run test:reporter**" command for run test<br>
    6.2. Run the "**npm run allure-report**" command for create and open allure report 

---------------------------------------------------------------------------------------
##### **To see reports remotely without installation and files download**
Go to this link: https://doktorgonza21.github.io/playwright_demo/


