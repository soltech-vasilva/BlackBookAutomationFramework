var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('zgr3zfZKIc8JyUNkZdxOZv4G4wTcCrYp4PXSG9HE9Ew110');

var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_login = require('../Page/BB_Login');
var eyesSetUp = require('../Page/EyesSetUp.js');
var captureBrowserCapabilities = require ('../Page/CaptureBrowserCapabilities.js');
var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');
var BB_menu = require ('../Page/BB_Menu.js');
var BB_userList = require('../Page/BB_UserList');
var verify_UserInformation = require('../Page/VerifyUserInfo.js');
var BB_editRoles = require('../Page/BB_EditRoles.js');
var verifyPopUpMessages = require('../Page/VerifyPopUpMessages.js');

//testing
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var protractor = require('protractor');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');

var myBlackBookSteps = function myBlackBookSteps() {

    // this.Given(/^I enter Soltech Website$/, function (callback)
    // {
    //     try
    //     {
    //
    //             // Start visual testing with browser viewport set if needed.
    //             //eyes.open(driver, app_name, test_name, viewport_size)
    //           //  eyes.open(browser, 'App Name: BlackBook' , 'Test Name: Simple Soltech Test');
    //
    //             //no angular page
    //             browser.driver.get('http://soltech.net/');
    //             browser.manage().window().maximize();
    //             //browser.ignoreSynchronization = false;
    //             //element(by.xpath('//*[@id="navbar"]/div/ul/li[1]')).click();
    //             //eyes.setStitchMode(Eyes.StitchMode.CSS);
    //
    //         //    eyes.checkWindow('Soltech Demo');
    //
    //             //with Angular
    //             //browser.get('http://soltech.net/');
    //             //browser.waitForAngular();
    //             //searchPage.OpenGoFanWebsite();
    //         //    eyes.close();
    //
    //
    //
    //              callback();
    //
    //     }
    //     catch (e){
    //      //   eyes.abortIfNotClosed();
    //     }
    // });

    //This is for timeout issues default is 5 sec
    this.setDefaultTimeout(80 * 1000);  //todo estaba a 80
    var startTime = new Date().getTime();

    this.Before(function () {
        utilities.ElapsedTime(startTime);
        return captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes);
    });

    this.After(function (scenario, callback) {
        eyesSetUp.EyesClose_EndTestcase(eyes);
        //TODO: not working for picture but it is needed for callback()
        // if (scenario.isFailed()) {
        //     browser.takeScreenshot().then(function (base64png) {
        //         var decodedImage = new Buffer(base64png, 'base64').toString('binary');
        //         scenario.attach(decodedImage, '/Users/Vsilva/Desktop');
        //         console.log("\r\nSenario Failed: Missing Element in Screen");
        //         callback();
        //     }, function (err) {
        //         callback(err);
        //     });
        // } else {
        //     console.log("PASS");
        //     callback();
        // }
        if (scenario.isFailed()) {
            utilities.ElapsedTime(startTime);
            console.log("\r\nSenario Failed: Missing Element in Screen");
            callback();
        }
        else {
            utilities.ElapsedTime(startTime);
            console.log("PASS");
            callback();
        }
    });

    this.When(/^I enter my first name (.*) in Form$/, function (firstName ) {
        return BB_editUserProfile.Enter_FirstName_inForm(firstName);
    });

    this.When(/^I enter my last name (.*) in Form$/, function (lastName ) {
        return BB_editUserProfile.Enter_LastName_inForm(lastName);
    });

    this.When(/^I enter my email address (.*) in Form$/, function (emailAddress ) {
        return  BB_editUserProfile.Enter_EmailAddress_inForm(emailAddress);
    });

    this.When(/^I enter my phone number (.*) in Form$/, function (phoneNumber) {
        return BB_editUserProfile.Enter_PhoneNumber_inForm(phoneNumber);
    });

    this.When(/^I enter my new Password (.*) in Form$/, function (newPassword) {
        return BB_editUserProfile.Enter_NewPassword_inForm(newPassword);
    });

    this.When(/^I enter my confirm new password (.*) in Form$/, function (confirmNewPassword) {
        return BB_editUserProfile.Enter_ConfirmNewPassword_inForm(confirmNewPassword);
    });

    this.Then(/^I enter my Previous Password (.*) in Form$/, function (previousPassword) {
        return BB_editUserProfile.Enter_PreviousPassword_inForm(previousPassword);
    });

    this.Given(/^I click Edit Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_EditButton_EditUserProfile();
    });

    this.Given(/^I click Reset Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_ResetButton_EditUserProfile ();
    });

    this.When(/^I click Cancel Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_CancelButton_EditUserProfile();
    });

    this.Then(/^I click on Save button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_SaveButton_EditUserProfile();
    });

    this.When(/^I clear text box selected "([^"]*)"$/, function (TextboxName) {
        return BB_editUserProfile.DeleteContentInTextBox(TextboxName);
    });

    this.Given(/^I enter BlackBook Login Website$/, function () {
        return BB_login.OpenBlackBookLogIn_Page(eyes);
    });

    this.Given(/^I enter my user email address (.*) in Login$/, function (currentEmailAddress) {
        return BB_login.Enter_CurrentEmailAddress_Login(currentEmailAddress);
    });

    this.Given(/^I enter my Password (.*) in Login$/, function (currentPassword) {
        return BB_login.Enter_CurrentPassword_Login(currentPassword);
    });

    this.Given(/^I click Login Button$/, function () {
        return BB_login.Click_LoginButton();
    });

    this.Given(/^I click Avatar Image Button$/, function () {
        return BB_menu.Click_AvatarImageButton();
    });

    this.Given(/^I click My Profile sub menu from Avatar$/, function () {
        return BB_menu.Click_MyProfileSubmenu();
    });

    this.Given(/^I click Logout sub menu from Avatar$/, function () {
        return BB_menu.Click_LogOutSubmenu();
    });

    this.Given(/^I click on Admin Tab$/, function () {
        return BB_menu.Click_AdminTab();
    });

    this.Given(/^I click on Users submenu from Admin Tab$/, function () {
        return BB_menu.Click_Users_Submenu();
    });

    this.Given(/^I click on Roles submenu from Admin Tab$/, function () {
        return BB_menu.Click_Roles_Submenu();
    });

    this.Given(/^I click on New User Button in User List$/, function () {
        return BB_userList.Click_NewUser_Button();
    });

    this.Given(/^I enter Filter User List (.*) in User List$/, function (filterValue) {
        return BB_userList.EnterValueToFilter_FilterUseList(filterValue);
    });

    this.Given(/^I click Status Filter$/, function () {
        return BB_userList.Click_StatusFilter();
    });

    this.Given(/^I click Inactive in submenu from Status Filter$/, function () {
        return BB_userList.Click_StatusFilter_Inactive_Submenu();
    });

    this.Given(/^I click on Gear Icon (.*)$/, function (ElementToSelect) {
        return BB_userList.Click_GearIcon(ElementToSelect);
    });

    this.Given(/^I click Deactivate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Deactivate_Submenu();
    });

    this.Given(/^I click Activate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Activate_Submenu();
    });

    this.Given(/^I click View from Gear Icon$/, function () {
        return BB_userList.Click_Gear_View_Submenu();
    });

    this.Given(/^I click Edit from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Edit_Submenu();
    });

    this.Given(/^I click on Save button in Role Editor$/, function () {
        return BB_editRoles.Click_SaveButton_RoleEditor ();
    });

    this.Given(/^I click X on Message Popup in Role list$/, function ( ) {
        return   BB_editRoles.Click_X_CloseMessagePopup_RoleEditor();
    });

    this.Given(/^I click checkbox Permission "([^"]*)" in Role Editor$/, function (permissionName ) {
        return   BB_editRoles.Click_AddNamePermissionCheckbox_RoleEditor(permissionName);
    });

    this.Given(/^I click Cancel Button from Edit Roles$/, function () {
        return BB_editRoles.Click_CancelButton_RoleEditor ();
    });

    this.Given(/^I enter "([^"]*)" on Filter Permissions in Role Editor$/, function (filterPermissions) {
        return BB_editRoles.Enter_FilterPermissions_RoleEditor(filterPermissions);
    });

    this.Given(/^I click checkbox  "([^"]*)" Permission row in Role Editor/, function (permissionRowNumber) {
        return BB_editRoles.Click_AddRowPermissionCheckbox_RoleEditor(permissionRowNumber);
    });

    this.Given(/^I enter "([^"]*)" on Filter Users in Role Editor$/, function (filterUser) {
        return BB_editRoles.Enter_FilterUsers_RoleEditor(filterUser);
    });

    this.Then(/^I should see Permissions "([^"]*)" checkbox "([^"]*)" in Role Editor$/, function (permissionName, isCheckedorUnchecked) {
        return BB_editRoles.Verify_RolePermissions_CheckedorUnchecked_RoleEditor(permissionName, isCheckedorUnchecked);
    });

    this.Given(/^I click first checkbox found for Roles Users in Role Editor$/, function () {
        return BB_editRoles.Click_CheckboxfoundFilterUsers_RoleEditor();
    });

    //VERIFY
    this.Then(/^I should see user's "([^"]*)" displayed in screen with value "([^"]*)"$/, function (textboxName, valueCompare) {
        return verify_UserInformation.Verify_UserInformation(textboxName, valueCompare);
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName) {
        return verifyErrorMessage.Verify_ErrorMessagesNotToDisplay(str_TextboxName);
    });

    this.Then(/^I should see "([^"]*)" message "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyErrorMessage.Verify_ErrorMessageToDisplay(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
    });

    this.Then(/^I should see "([^"]*)" displayed on "([^"]*)" popup$/, function (VerifyMessage, PopUpPageName) {
        return verifyPopUpMessages.Verify_PopUpMessage(PopUpPageName,VerifyMessage );
    });

    //EMPTY FUNCTION FOR READABILITY ONLY ON CUCUMBER READABILITY
    this.When(/^I enter "([^"]*)"$/, function (c) {
        return new Promise((success, failure)=> {
            success();
        });
    });

    ///BUGS FIXES TO TEST OTHER THINGS
    this.Given(/^I wait$/, function () {
        return new Promise((success, failure)=> {
           browser.driver.wait( browser.driver.sleep(4000).then(()=>{
                success();
            }));

        });
    });

    this.Then(/^I reload page "([^"]*)"$/, function (URL) {
        return new Promise((success, failure)=> {
            browser.ignoreSynchronization = true;
            page.executeSequence([browser.driver.get(URL), browser.sleep(5000).then(()=>{

                browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
                    var currentURL = getCurrentURL.split("://");

                    if (currentURL[1].trim() != 'qa-autobahn.blackbookcloud.com/login') {
                        browser.ignoreSynchronization = true;
                        page.executeSequence([browser.driver.get(URL), browser.driver.sleep(5000)]).then(()=>{});
                    }
                    success();
                });
            })]).then(()=>{});
        });
    });

    this.Given(/^I re-enter the same user name and password$/, function () {
       return page.executeSequence([ browser.driver.sleep(2000).then(()=>{BB_login.Click_LoginButton();}),  browser.driver.sleep(2000).then(()=>{BB_login.Click_LoginButton();}),  browser.driver.sleep(2000).then(()=>{BB_login.Click_LoginButton();})]);
    });

    this.Then(/^I add extra string "([^"]*)" to my "([^"]*)"$/, function (addString, TextboxName) {
        var s = TextboxName;
        BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();
        return BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(addString);
    });

    this.Then(/^I delete the amount "([^"]*)" characters from my "([^"]*)"$/, function (amountDeleted,TextboxName ) {
        var s = TextboxName;
        var amount = parseInt(amountDeleted);
        // console.log('amount:'+typeof amount+' amountDeleted:'+typeof amountDeleted);
        BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();
        return BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            // for ( var a = 0 ; a == amount ;a++) {
            //     console.log('a:' + a + ' amountDeleted:' + amountDeleted);
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys("ppppppppppp");
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            // }
    });

    this.Then(/^I should see in "([^"]*)" "([^"]*)"$/, function (ElementName, isEnableOrDisable) {
        var s = ElementName;
        var a = isEnableOrDisable;
        browser.driver.sleep(10000);

        //return browser.wait(protractor.ExpectedConditions.elementToBeSelected( element(by.css('button[disabled=""]'))),3000);
        // return browser.wait(protractor.ExpectedConditions.elementToBeClickable( element(by.css('button[disabled=""]'))),3000);
         return browser.driver.wait(protractor.ExpectedConditions.elementToBeClickable(BB_editUserProfileRepo.Select_Element_SaveButton),3000);
       // return browser.wait(protractor.ExpectedConditions.elementToBeSelected(BB_editUserProfileRepo.Select_Element_SaveButton),3000);
    });

    this.Given(/^I should see that I am in "([^"]*)" "([^"]*)" URL$/, function (partURL, VerifyURL) {
        browser.driver.sleep(4000);
        return new Promise((success, failure)=> {
            browser.driver.getCurrentUrl().then(function (getCurrentURL) {

                var currentURL = getCurrentURL.split("://");

                switch  (partURL) {
                    case 'part':
                        var modURL1 = currentURL[1].split('/');
                        var modURL2 = modURL1[0] + '/' + modURL1[1];
                        console.log(modURL2);

                        if (modURL2.trim() == VerifyURL) {
                            browser.driver.sleep(2000);
                            success();
                        }
                        break;

                    case 'full':
                        if (currentURL[1].trim() == VerifyURL) {
                            browser.driver.sleep(2000);
                            success();
                        }
                        break;

                    default:
                        failure();
                }
            });
        });
    });

    this.Given(/^I click User Active checkbox$/, function () {
       return element(by.css('span.checkbox-label')).click();
    });

    this.Then(/^I click User Active checkbox "([^"]*)"$/, function (isEnableOrDisable) {
        return new Promise((success, failure)=> {
            element(by.css('span.checkbox-label')).click();
            browser.driver.sleep(1000);
            //Si funciono :Before tira "" con double quotes  y cuando no esta el :After tira "none" sin double quotes cuando no existe y cuando existe tira "".
            browser.driver.executeScript('return window.getComputedStyle(document.querySelector(".checkbox-label"), "::after").content')
                .then(function (data) {
                   // console.log(data);

                    if (data == '""' && isEnableOrDisable == "Disable") {
                        console.log("Disable");
                        element(by.css('span.checkbox-label')).click();
                    }
                    if (data == 'none' && isEnableOrDisable == "Enable") {
                        console.log("Enable");
                        element(by.css('span.checkbox-label')).click();
                    }

                    success();
                });
        });
    });

    this.Then(/^I should see on User Active checkbox inactive$/, function () {
        return new Promise((success, failure)=> {
            browser.sleep(1000);
            //TODO si funciono :Before tira "" con double quotes  y cuando no esta el :After tira "none" sin double quotes cuando no existe y cuando existe tira "".
            browser.driver.executeScript('return window.getComputedStyle(document.querySelector(".checkbox-label"), "::after").content').then(function (data) {
                // console.log(data);

                if (data == '""') {
                    console.log('Pass, It wont change setting');
                    success();
                }
                else {
                    console.log("Fail, User Active change settings");
                    failure();
                }
            });
        });
    });

    this.Given(/^I click on Home Tab$/, function () {
        return element(by.linkText('Home')).click();
    });


    this.Given(/^I click Refresh$/, function () {
        return  browser.refresh();
    });

    this.When(/^I check heading from Grid$/, function () {
        //return element(by.css('div.ag-header-container')).getText().then(function(arr) {
        //return element(by.css('div.ag-header')).getText().then(function(arr) {
        return element(by.id('center')).getText().then(function(arr) {
            //arr[0].evaluate('cat.id'); // This is a promise which resolves to the id.
            var headers = arr.split('/r');
            console.log(headers[0]);
        });
    });

    this.Given(/^I should see User List Edit sub-menu options$/, function () {
        return new Promise((success, failure)=> {
         browser.wait(element(by.css('ul.action-menu')).getText().then(function (arr) {
            //arr[0].evaluate('cat.id'); // This is a promise which resolves to the id.
            //var headers = arr.split('/r');
            var headers = arr.toString().split("\n");

            if (headers[0] == "View")
            {
                console.log("header:|"+headers[0]+"|");
                if (headers[1] == "Edit")
                {
                    console.log("header:|"+headers[1]+"|");
                    if (headers[2] == "Deactivate")
                    {
                        console.log("header:|"+headers[2]+"|");
                        success();
                    }
                }
            }
            else
            {
                failure();
            }
        }));
        });
    });

    this.When(/^I click on Gear Icons (.*) inactive$/, function (arg1) {
       return element(by.css('div.icon-cog.parent.inactive')).click();
    });

    this.Then(/^I click checkbox User's Roles "([^"]*)"$/, function (arg1) {
       return element.all(by.css('span.icon-square-o.grid-checkbox-unchecked.grid-checkbox')).get(0).click();
    });

    this.Given(/^I click Forgot Password link$/, function () {
        return element(by.css('a[href="/login/forgot"]')).click();
    });

    this.Given(/^I enter my email "([^"]*)" for Forgot Page$/, function (emailAddress) {
        return element(by.css('input[name="email"]')).sendKeys(emailAddress);
    });

    this.Given(/^I click Send Link button$/, function () {
        return element(by.css('button[type="submit"]')).click();
    });

    this.Then(/^I should see message "([^"]*)" displayed$/, function (Message) {
        return new Promise((success, failure)=> {
            browser.driver.wait(element(by.css('.message-container.success')).getText()).then((GetText) => {
                //console.log("GetText:"+GetText +" Message:"+Message);
                if (GetText == Message) {
                    success();
                }
                else
                {
                    failure();
                }
            });
        });
    });

    this.Given(/^I should see Role Market value "([^"]*)"$/, function (roleMarketSelection) {
        var currentText = '';

        return new Promise((success, failure)=> {
            element(by.css('select[name="market"]')).getAttribute('value').then((value) => {
                console.log('value:'+value);
                var option = 0;

                if (value == 'null') {
                    value = 1;
                    option = parseInt(value);
                }

                if (value > 1) {
                    option = parseInt(value) - 3/*this is because value 5 from option 2 so -3 for all other options*/;
                }

                element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[' + option + ']')).getText().then((text) => {
                    currentText = text;
                    if (roleMarketSelection == currentText) {
                        success();
                    }
                    else
                    {
                        failure();
                    }
                });
            });
        });
    });

    this.Given(/^I click Reset Button in Edit Roles$/, function () {
        return element(by.css('button.button.yellow-btn')).click();
    });

    this.Given(/^I enter Role Name "([^"]*)"$/, function (roleName) {
        browser.driver.sleep(3000);
        return element.all(by.css('input[type="text"]')).get(0).sendKeys(roleName);
    });

    this.Then(/^I should see in "([^"]*)" button "([^"]*)" in Edit Role$/, function (ButtonName, isEnableOrDisable) {
        return new Promise((success, failure)=>{
            switch (ButtonName.toString().toLowerCase()) {
                case "save":
                    utilities.VerifyButtonStatus_isEnableorDisable(element(by.css('button.button.green-btn')),isEnableOrDisable,success, failure);
                    break;

                default:
                    console.log("Button Name selection is not in function.");
                    failure();
            }
        });
    });


    var numberofUsers = 0;

    this.Then(/^I should see \#of Users has increase value for Administration in Role List$/, function () {
        return new Promise((success, failure)=> {

            element.all(by.css('div[colid="users"]')).get(1).getText().then((currentValue)=>{
               console.log( currentValue);
               numberofUsers++;

               if (numberofUsers == currentValue)
               {
                   success();
               }
            });
        });
    });

    this.Given(/^I store value \#of Users displayed for Administration in Role List$/, function () {

          return new Promise((success, failure)=> {

              element.all(by.css('div[colid="users"]')).get(1).getText().then((currentValue)=> {
                  console.log(currentValue);
                  numberofUsers = currentValue;
                  success();
              });
          });
    });

    this.Then(/^I should see \#of Users has increase value for "([^"]*)" in Role List$/, function (arg1) {
        return new Promise((success, failure)=> {

            element.all(by.css('div[colid="users"]')).get(4).getText().then((currentValue)=> {
                console.log(currentValue);
                numberofUsers = currentValue;
                success();
            });
        });
    });


    this.Then(/^I should see user's Role "([^"]*)" in User List$/, function (userRole) {
        return new Promise((success, failure)=> {

            element(by.css('div.role-cell')).getText().then((currentValue)=> {
                console.log("user roles: "+currentValue);

                if (userRole == currentValue) {
                    success();
                }
            });
        });
    });

    this.Given(/^I click on New Role Button in Role List$/, function () {
        //return page.executeSequence([ browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css('button.button'))),4000), element(by.css('button.button')).click()]);
          browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.css('button.button'))),4000);
        return element(by.css('button.button')).click();
    });

    this.Given(/^I select Role Market "([^"]*)" in Role Editor$/, function (roleMarketSelection) {
        return new Promise((success, failure) => {
            element(by.css('select[name="market"]')).click();
            switch (roleMarketSelection) {
                case "Select One":
                    element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[1]')).click();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys('a').perform();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                    success();
                    break;
                case "US Used Car":
                    element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[2]')).click();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys('u').perform();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();

                    success();
                    break;
                case "CA Used Car":
                    element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[3]')).click();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys('c').perform();
                    browser.driver.sleep(1000);
                    browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                    success();
                    break;
                default:
                    console.log("Role Market selection is not in function.");
                    failure();
            }
        });
    });

    this.Given(/^I click Filter By Group dropdown "([^"]*)" Permissions in Role Editor$/, function (PermissionsName) {
        return new Promise ((success, failure)=>{
            element.all(by.css('select[name="filterGroupTerm"]')).get(0).click();

            if(PermissionsName.toString().toLowerCase() == 'all') {
                element.all(by.css('option[value="' + PermissionsName.toString().toLowerCase() + '"]')).get(0).click();
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
            }
            else {
               // browser.driver.actions().sendKeys('u').perform();
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                element(by.css('option[value="' + PermissionsName.toString().toLowerCase() + '"]')).click();
            }
            success();
        });
    });

    this.Given(/^I click Filter By Status dropdown "([^"]*)" in Role Editor$/, function (FilterByStatusName) {

        return new Promise((success, failure) => {
            element.all(by.css('select[name="filterGroupTerm"]')).get(1).click();

            if (FilterByStatusName.toString().toLowerCase() == 'all') {
                element.all(by.css('option[value="' + FilterByStatusName.toString().toLowerCase() + '"]')).get(1).click();
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
            }
            else {
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                element(by.css('option[value="' + FilterByStatusName.toString().toLowerCase() + '"]')).click();
            }
            success();
        });
    });

    this.Given(/^I should see "([^"]*)" display for Filter By Group in Role Editor$/, function (PermissionsName) {
        return new Promise ((success, failure)=> {
            browser.driver.wait(element.all(by.css('select[name="filterGroupTerm"]')).get(0).getAttribute('value').then((attributeValue) => {
                console.log("text:" + attributeValue);
                if (PermissionsName.toString().toLowerCase() == attributeValue.toString().toLowerCase()) {
                    success();
                }
                else {
                    failure();
                }
            }));
        });

    });

    this.Then(/^I should see "([^"]*)" display for Filter By Status in Role Editor$/, function (FilterByStatusName) {
        return new Promise ((success, failure)=> {
            browser.driver.wait(element.all(by.css('select[name="filterGroupTerm"]')).get(1).getAttribute('value').then((attributeValue) => {
                console.log("text:" + attributeValue);
                if (FilterByStatusName.toString().toLowerCase() == attributeValue.toString().toLowerCase()) {
                    success();
                }
                else {
                    failure();
                }
            }));
        });
    });

    this.Given(/^I enter Filter Roles search "([^"]*)" in Edit User Profile$/, function (filterRoleSearch) {
        element(by.css('input[placeholder="Search"]')).sendKeys(filterRoleSearch);
    });

    this.Then(/^I click Delete from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Delete_Submenu();
    });

    this.Then(/^I should see (.*) displayed for Confirm Role Deletion in Role Editor$/, function (errorMessage) {

        return new Promise((success, failure)=> {

            element(by.css('.warning-msg')).getText().then((currentValue)=> {
               // console.log("warning-msg: "+currentValue);
               // console.log("warning-msg: "+errorMessage);
                if (errorMessage == currentValue) {
                    success();
                }
                else
                {
                    failure();
                }
            });
        });
    });

    this.Then(/^I click "([^"]*)" Button for modal warning message from Edit Roles$/, function (buttonName) {
        return new Promise((success, failure) => {
            if (buttonName.toString().toLowerCase() == "cancel" ) {
                element(by.css('button.button.red-btn')).click();
                success();
            }

            if (buttonName.toString().toLowerCase() == "confirm" ) {
                element(by.css('.button.green-btn.close-modal')).click();
                success();
            }
        });
    });
};

module.exports = myBlackBookSteps;