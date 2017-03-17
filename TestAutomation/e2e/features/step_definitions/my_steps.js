var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('3YYHRcaSI3DcqsNPRFm3WnU1BFg3vP72Ftxe6e8t6iY110');

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
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
//testing
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var protractor = require('protractor');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_userListRepo = require('../Repository/BB_userListRepo.js');

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

    this.Before(function (scenario) {
        return new Promise((success, failure)=> {
           page.executeSequence([utilities.ElapsedTime(startTime),captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes, scenario)]).then(()=>{success();});
        });
    });

    this.After(function (scenario, callback) {


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


       eyesSetUp.EyesClose_EndTestcase(eyes);
         if (scenario.isFailed()) {
            if (protractorConfig.config.ApplitoolsOn == true) {
                console.log("FAIL ABORT EYES");
                 eyes.abortIfNotClosed();
            }
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

    this.Given(/^I enter my first name (.*) in Form$/, function (firstName ) {
        return BB_editUserProfile.Enter_FirstName_inForm(firstName);
    });

    this.Given(/^I enter my last name (.*) in Form$/, function (lastName ) {
        return BB_editUserProfile.Enter_LastName_inForm(lastName);
    });

    this.Given(/^I enter my email address (.*) in Form$/, function (emailAddress ) {
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

    this.When(/^I clear text box selected "([^"]*)" in User Profile$/, function (TextboxName) {
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

    this.Given(/^I click Inactive in submenu from Status FilterValue/, function () {
        return BB_userList.Click_StatusFilter_Inactive_Submenu();
    });

    this.Given(/^I click on Gear Icon (.*) "([^"]*)"$/, function (ElementToSelect, arg2) {
        return BB_userList.Click_GearIcon(ElementToSelect);
    });

    this.Given(/^I click Deactivate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Deactivate_Submenu();
    });

    this.Given(/^I click Activate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Activate_Submenu();
    });

    this.Given(/^I click (.*) View from Gear Icon in User List$/, function (rowNumber) {
        return BB_userList.Click_Gear_View_Submenu(rowNumber);
    });

    this.Given(/^I click Edit from Gear Icon "([^"]*)"$/, function (arg1) {
        return BB_userList.Click_Gear_Edit_Submenu();
    });

    this.Given(/^I click on Save button in Role Editor$/, function () {
        return BB_editRoles.Click_SaveButton_RoleEditor ();
    });

    //TODO delete is not used anymore to close pop ups it better to change it to click to close
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

    this.Given(/^I click checkbox  "([^"]*)" "([^"]*)" Permission row in Role Editor/, function (permissionRowNumber, arg2) {
        return BB_editRoles.Click_AddRowPermissionCheckbox_RoleEditor(permissionRowNumber);
    });

    this.Given(/^I enter "([^"]*)" on Filter Users in Role Editor$/, function (filterUser) {
        return BB_editRoles.Enter_FilterUsers_RoleEditor(filterUser);
    });

    this.Then(/^I should see Permissions "([^"]*)" checkbox "([^"]*)" in Role Editor$/, function (permissionName, isCheckedorUnchecked) {
        return BB_editRoles.Verify_RolePermissions_CheckedorUnchecked_RoleEditor(permissionName, isCheckedorUnchecked);
    });

    this.Given(/^I click checkbox on first user found from Filter Users in Role Editor$/, function () {
        return BB_editRoles.Click_CheckboxfoundFilterUsers_RoleEditor();
    });

    //VERIFY
    this.Then(/^I should see user's "([^"]*)" displayed in screen with value "([^"]*)"$/, function (textboxName, valueCompare) {
        return verify_UserInformation.Verify_UserInformation(textboxName, valueCompare);
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName) {
        return verifyErrorMessage.Verify_ErrorMessagesNotToDisplay_UserProfile(str_TextboxName);
    });

    this.Then(/^I should see "([^"]*)" message "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyErrorMessage.Verify_ErrorMessageToDisplay_UserProfile(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
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
            page.executeSequence([ browser.driver.sleep(5000).then(()=>{ console.log("wait before success"); success(); })
            ]).then(()=>{console.log("wait sequence then");});
        });
    });

    this.Then(/^I reload page "([^"]*)"$/, function (URL) {

        return new Promise((success, failure)=> {
            browser.ignoreSynchronization = true;
            page.executeSequence([browser.driver.get(URL), browser.driver.sleep(4000).then(()=>{

                browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
                    var currentURL = getCurrentURL.split("://");
                    var getURL = URL.toString().split("://");

                    if (currentURL[1].trim() != getURL[1].trim()) {
                        browser.ignoreSynchronization = true;
                        page.executeSequence([browser.driver.get(URL), browser.driver.sleep(4000)]).then(()=>{success();});
                    }
                    else {
                        success();
                    }
                });
            })]).then(()=>{ });
        });
    });

    this.Given(/^I re-enter the same user name and password$/, function () {
        return new Promise((success, failure)=> {
            page.executeSequence([
                                BB_login.Click_LoginButton(),
                                browser.driver.sleep(2000),
                                BB_login.Click_LoginButton(),
                                browser.driver.sleep(2000),
                                BB_login.Click_LoginButton(),
                                browser.driver.sleep(2000).then(()=>{success()})]).then(()=>{});
        });
    });

    this.Then(/^I add extra string "([^"]*)" to my "([^"]*)"$/, function (addString, TextboxName) {
        return new Promise((success, failure)=> {
            var s = TextboxName;
            BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();
            BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(addString);
            success();
        });
    });

    this.Then(/^I delete the amount "([^"]*)" characters from my "([^"]*)"$/, function (amountDeleted,TextboxName ) {
        return new Promise((success, failure)=> {
            var s = TextboxName;
            var amount = parseInt(amountDeleted);
            // console.log('amount:'+typeof amount+' amountDeleted:'+typeof amountDeleted);
            BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();
            BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            success();
            // for ( var a = 0 ; a == amount ;a++) {
            //     console.log('a:' + a + ' amountDeleted:' + amountDeleted);
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys("ppppppppppp");
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            // }
        });
    });

    this.Then(/^I should see in "([^"]*)" "([^"]*)"$/, function (ElementName, isEnableOrDisable) {
        return new Promise((success, failure)=> {
            var s = ElementName;
            var a = isEnableOrDisable;
            browser.driver.sleep(10000);

            //return browser.wait(protractor.ExpectedConditions.elementToBeSelected( element(by.css('button[disabled=""]'))),3000);
            // return browser.wait(protractor.ExpectedConditions.elementToBeClickable( element(by.css('button[disabled=""]'))),3000);
            browser.driver.wait(protractor.ExpectedConditions.elementToBeClickable(BB_editUserProfileRepo.Select_Element_SaveButton), protractorConfig.config.WaitTime);
            success();
            // return browser.wait(protractor.ExpectedConditions.elementToBeSelected(BB_editUserProfileRepo.Select_Element_SaveButton),3000);
        });
    });

    this.Then(/^I should see that I am in "([^"]*)" "([^"]*)" URL$/, function (partURL, VerifyURL) {
        browser.driver.sleep(4000);
        return new Promise((success, failure)=> {
            browser.wait(browser.driver.getCurrentUrl().then(function (getCurrentURL) {

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
            })
            );
        });
    });

    this.Given(/^I click User Active checkbox$/, function () {
        return new Promise((success, failure)=> {
             element(by.css('span.checkbox-label')).click();
             success();
        });
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
        return new Promise((success, failure)=> {
            element(by.linkText('Home')).click().then(()=>{ success();});
        });
    });


    this.Given(/^I click Refresh$/, function () {
        return new Promise((success, failure)=> {
            browser.refresh();
            success();
        });
    });

    this.When(/^I check heading from Grid$/, function () {
        return new Promise((success, failure)=> {
            //return element(by.css('div.ag-header-container')).getText().then(function(arr) {
            //return element(by.css('div.ag-header')).getText().then(function(arr) {
            element(by.id('center')).getText().then(function (arr) {
                //arr[0].evaluate('cat.id'); // This is a promise which resolves to the id.
                var headers = arr.split('/r');
                console.log(headers[0]);
                success();
            });
        });
    });

    this.Then(/^I should see User List Edit sub-menu options$/, function () {
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
        return new Promise((success, failure)=> {
             element(by.css('div.icon-cog.parent.inactive')).click();
             success();
        });
    });

    this.Then(/^I click checkbox User's Roles "([^"]*)"$/, function (arg1) {
        return new Promise((success, failure)=> {
            element.all(by.css('span.icon-square-o.grid-checkbox-unchecked.grid-checkbox')).get(2).click();
            success();
        });
    });

    this.Given(/^I click Forgot Password link$/, function () {
        return new Promise((success, failure)=> {
             element(by.css('a[href="/login/forgot"]')).click();
             success();
        });
    });

    this.Given(/^I enter my email "([^"]*)" for Forgot Page$/, function (emailAddress) {
        return new Promise((success, failure)=> {
             element(by.xpath('//*[@id="login-box"]/div/form/div[1]/input')).sendKeys(emailAddress);
             success();
        });
    });

    this.Given(/^I click Send Link button$/, function () {
        return new Promise((success, failure)=> {
             element(by.xpath('//*[@id="login-box"]/div/form/div[2]/div[1]/button')).click();
             success();
        });
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

    this.Then(/^I should see Role Market value "([^"]*)"$/, function (roleMarketSelection) {

             return   BB_editRoles.Verify_RoleMarketValue_Dropdownbox_RoleEditor(roleMarketSelection);

    });

    this.Given(/^I click Reset Button in Edit Roles$/, function () {

        return new Promise((success, failure) => {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( element(by.css('button.button.yellow-btn'))), protractorConfig.config.WaitTime),
                element(by.css('button.button.yellow-btn')).click()
            ]).then(() => {
                success();
            });
        });

    });

    this.Given(/^I enter Role Name "([^"]*)"$/, function (roleName) {

        return BB_editRoles.Enter_RoleName_inForm(roleName);
        // return new Promise((success, failure)=> {
        //     browser.driver.sleep(3000);
        //      element.all(by.css('input[type="text"]')).get(0).sendKeys(roleName);
        //     success();
        // });
    });

    this.Then(/^I should see in "([^"]*)" button "([^"]*)" in Edit Role$/, function (ButtonName, isEnableOrDisable) {
        return new Promise((success, failure)=>{
            switch (ButtonName.toString().toLowerCase()) {
                case "save":
                    utilities.VerifyButtonStatus_isEnableorDisable(element(by.css('button.button.green-btn')),isEnableOrDisable,success, failure);
                    break;

                case "delete":
                    utilities.VerifyButtonStatus_isEnableorDisable(element(by.css('button.button.red-btn')),isEnableOrDisable,success, failure);
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
               else
               {
                   console.log('Did not see any change number of users.');
                   failure();
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

            element.all(by.css('div[colid="users"]')).get(5).getText().then((currentValue)=> {
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
            //took this out and it worked
            //element(by.css('select[name="market"]')).click();
            switch (roleMarketSelection) {

                case "Select One":
                    page.executeSequence([  element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[1]')).click(),
                                            browser.driver.sleep(1000),
                                            browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(),
                                            browser.driver.sleep(1000) ]).then(()=>{ success();});
                    // element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[1]')).click();
                    // browser.driver.sleep(1000);
                    // browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                    // browser.driver.sleep(1000);
                    // success();
                    break;

                case "US Used Car":

                    page.executeSequence([  element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[11]')).click(),
                        browser.driver.sleep(1000),
                        browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(),
                        browser.driver.sleep(1000) ]).then(()=>{ success();});

                    // element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[11]')).click();
                    // browser.driver.sleep(1000);
                    // browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                    // browser.driver.sleep(1000);
                    // success();
                    break;

                case "Canada Used Car":

                    page.executeSequence([  element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[5]')).click(),
                        browser.driver.sleep(1000),
                        browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(),
                        browser.driver.sleep(1000) ]).then(()=>{ success();});

                    // element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/select/option[5]')).click();
                    // browser.driver.sleep(1000);
                    // browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
                    // browser.driver.sleep(1000);
                    // success();
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

    this.Then(/^I should see "([^"]*)" display for Filter By Group in Role Editor$/, function (PermissionsName) {
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
        return new Promise ((success, failure)=> {
            element(by.css('input[placeholder="Search"]')).sendKeys(filterRoleSearch);
            success();
        });
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

    this.Then(/^I should not see "([^"]*)" Button in User List$/, function (buttonName) {
        return new Promise((success, failure)=> {
        browser.driver.wait(protractor.ExpectedConditions.stalenessOf(BB_userListRepo.Select_Element_NewUserButton), 5000);
            success();
        });
    });

    this.Then(/^I should see "([^"]*)" message "([^"]*)" displayed for this "([^"]*)" field in Role Editor$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyErrorMessage.Verify_ErrorMessageToDisplay_RoleEditor(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
    });

    this.Given(/^I click View from Gear Icon in Role List$/, function () {
        return new Promise((success, failure)=> {
            //console.log('before View gear icon');
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(element.all(by.css('div.action-menu-link')).get(0)), 5000), /*, element.all(by.css('div.action-menu-link')).get(0).getText().then((text)=>{console.log('text: '+text);})*/
            element.all(by.css('div.action-menu-link')).get(0).click()/*, keyStrokesRepo.ENTER(), browser.driver.sleep(1000)*/]).then(() => {
                success();
                //console.log('Pass View gear icon');
            });
        });
    });

    this.Then(/^I should not see "([^"]*)" Button in AdminTab$/, function (buttonName) {
        return new Promise((success, failure)=> {
            browser.driver.wait(protractor.ExpectedConditions.stalenessOf(element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/ul/li[3]/a'))), 2000);
            success();
        });
    });

    this.Given(/^I click on Settings submenu from Admin Tab$/, function () {
        return new Promise((success, failure)=> {
            page.executeSequence([element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/ul/li[3]/a')).click()]).then(()=>{success();});
        });
    });

    this.Given(/^I clear text box selected "([^"]*)" in Role Editor$/, function (TextboxName) {
        return BB_editRoles.DeleteContentInTextBox(TextboxName);
    });

    this.Then(/^I should not see "([^"]*)" "([^"]*)" in Edit Profile$/, function (arg1, arg2) {
        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.stalenessOf(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox), protractorConfig.config.WaitTime)]).then(()=>{success()});
        });
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed in Edit Role$/, function (str_TextboxName) {
        return verifyErrorMessage.Verify_ErrorMessagesNotToDisplay_RoleEditor(str_TextboxName);
    });


    this.Then(/^I click Circle icon in permissions grid to "([^"]*)" in Role Editor$/, function (expandOrCollapse) {
        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.sleep(2000).then(() => {
                    element.all(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div/div/span/span[2]/span')).get(0).click();
            }), browser.driver.sleep(2000).then(() => {
                success();
            })]).then(()=>{});
        });

            // browser.driver.sleep(3000);
            // element.all(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div/div/span/span[2]/span')).get(0).click();
            // browser.driver.sleep(3000);
            // success();
            //});
    });

    this.Given(/^I END test suite/, function (callback) {
        eyesSetUp.EyesClose_EndTestcase(eyes);
        callback();
    });

    this.Given(/^I START test suite/, function (callback) {
        captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes);
        callback();
    });

    this.Then(/^I verify BlackBook "([^"]*)" page with Applitools$/, function (namePage) {
        return new Promise((success, failure)=> {
            page.executeSequence([eyesSetUp.EyesCheckWindow(eyes, namePage, protractorConfig.config.ApplitoolsOn)]).then(() => {
                success()
            });
        });
    });

    this.Then(/^I click Edit Button in Edit Roles$/, function () {
        return new Promise((success, failure) => {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/div/button'))), protractorConfig.config.WaitTime),
                element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/div/button')).click()
            ]).then(() => {
                success();
            });
        });
    });

    this.Then(/^I click All in submenu from Status FilterValue$/, function () {
        return BB_userList.Click_StatusFilter_All_Submenu();
    });

    this.Then(/^I click Active in submenu from Status FilterValue$/, function () {
        return BB_userList.Click_StatusFilter_Active_Submenu();
    });
};
module.exports = myBlackBookSteps;