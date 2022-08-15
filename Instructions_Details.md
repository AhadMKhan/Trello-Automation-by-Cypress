### Trello Automation Task by Unzer 
        Ahad Muhammad Khan


#### Tech, Tools, Technique & Structure

    - Language: Javascript
    - Automation Tool: Cypress
    - Structure: Page Object Model
    - Technique: Data-driven
    - Report: Cypress Mochawesome Reporter for reporting.
    - Editor: Visual Studio Code

#### Instructions for starting test----

   * First : Clone repo by "git clone http://unzer-migxus@git.codesubmit.io/unzer/trello-api-ui-test-automation-ltglct"
   * Second: Open the repo in VS Code.
   * Third: Open terminal in VS Code by upper terminal option or press crtl+shift+` or for split terminal press ctrl+shift+5
   * Fourth: run command "npm install"
   * Fifth: run command "npx cypress run" for running all test spec "headless" and report would generated also by this command.
                -- OR --
         if you want don't want to run it headles type command "npx cypress open" and run but please make sure run spec file according to number assigned in spec file like 
            -- first run "01.createBoard.spec.js" in cypress GUI.
            -- then run "02.createList.spec.js" in cypress GUI.
            -- then run "03.createCard.spec.js" in cypress GUI.
            -- then run "04.dragDrop.spec.js" in cypress GUI.
            -- then run "05.editCard.spec.js" in cypress GUI.
            -- then run "06.deleteBoard.spec.js" in cypress GUI.

   * Please go to "cypress/fixtures/mixData.js" for your credentials like email, password, name, key and token.

   * These are the instruction for running test sucessfully.

##### Note: This sequence is only necessary if you're running from cypress UI.


#### How to run with Cypress GUI
* run command "npx cypress open"
* The cypress GUI will open.
* Select your spec file according to defined sequence above.
* When run complete close chrome window of test runner and the run next file.

#### Test Case----
   * Login application by UI. Assert also.
   * Create board by UI and API both. Assert also from both.
   * Create list by UI and API both. Assert also from both.
   * Add card by UI and API both. Assert also from both.
   * Drag and drop card from on list to another.
   * Edit card information by UI and API both. Assert also from both
   * Delete board by API. Assert from API response.


#### Details what I have done in this project

   * I have created this framework using javascript framework namely as cypress.
   * I have follow page object model structure and you can easily found pages in "cypress/pages/" where all my created methods, api and locators can be found.
   * Pages have been divide according to module like board, list, cards, login screen and trello mix locators.
   * You can find authentication data in "cypress/fixtures/Authentication.js" where you can change your data accordingly.
   * You can find data like card name, board name, etc. in "cypress/fixtures/mixData.js" where you can change your data accordingly.
   * You can configure test by "cypress/cypress.json" which is already set so don't need to edit.
   * I use cypress mochawesome report for reporting of test case result and this can only be done when you run test case by "npx cypress run".
   * When run test by "npx cypress run" the report should be generated in "cypress/report" where all spec report has been combined in one and just route to this folder and open ".html" file in folder and test report will open in chrome.