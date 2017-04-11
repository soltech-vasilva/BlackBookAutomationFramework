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
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');
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
var BB_userListRepo = require('../Repository/BB_userListRepo.js');
var BB_loginForgot = require('../Page/BB_LoginForgot.js');
var BB_roleList = require('../Page/BB_RoleList.js');


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

    this.Given(/^I enter my phone number (.*) in Form$/, function (phoneNumber) {
        return BB_editUserProfile.Enter_PhoneNumber_inForm(phoneNumber);
    });

    this.Given(/^I enter my new Password (.*) in Form$/, function (newPassword) {
        return BB_editUserProfile.Enter_NewPassword_inForm(newPassword);
    });

    this.Given(/^I enter my confirm new password (.*) in Form$/, function (confirmNewPassword) {
        return BB_editUserProfile.Enter_ConfirmNewPassword_inForm(confirmNewPassword);
    });

    this.Given(/^I enter my Previous Password (.*) in Form$/, function (previousPassword) {
        return BB_editUserProfile.Enter_PreviousPassword_inForm(previousPassword);
    });

    this.Given(/^I click Edit Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_EditButton_EditUserProfile();
    });

    this.Given(/^I click Reset Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_ResetButton_EditUserProfile ();
    });

    this.Given(/^I click Cancel Button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_CancelButton_EditUserProfile();
    });

    this.Given(/^I click on Save button in Edit User Profile$/, function () {
        return BB_editUserProfile.Click_SaveButton_EditUserProfile();
    });

    this.Given(/^I clear text box selected "([^"]*)" in User Profile$/, function (TextboxName) {
        return BB_editUserProfile.DeleteContentInTextBox(TextboxName);
    });

    this.Given(/^I enter BlackBook Login Website$/, function () {
        return BB_login.OpenBlackBook_LogInPage();
    });

    this.Given(/^I enter my user email address (.*) in Login$/, function (currentEmailAddress) {
        return BB_login.Enter_CurrentEmailAddress_Login(currentEmailAddress);
    });

    this.Given(/^I enter my Password (.*) in Login$/, function (currentPassword) {
        return BB_login.Enter_CurrentPassword_Login(currentPassword);
    });

    this.Given(/^I click Login Button$/, function () {
        return BB_login.Click_LoginButton_Login();
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
        //TODO NOT USED RIGHT NOW
        return BB_userList.Click_StatusFilter();
    });

    this.Given(/^I click Filter By User List Status dropdown "([^"]*)" in User List$/, function (PermissionsName ) {
        return BB_userList.Click_FilterUserListStatus_Submenu(PermissionsName);
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

    //TODO CHECK FOR THIS FUNTION REFACTOR
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
    this.Given(/^I enter "([^"]*)"$/, function (c) {
        return new Promise((success, failure)=> {
            success();
        });
    });

    ///BUGS FIXES TO TEST OTHER THINGS
    this.Given(/^I wait$/, function () {
        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.sleep(5000).then(() => {
                console.log("wait before success");
            })]).then(() => {
                success();
                console.log("wait sequence then");
            });
        });
    });

    this.Given(/^I reload "([^"]*)" page$/, function (url) {
        return BB_login.Reload_Page(url);
       //  var URL = url;
       //
       // // console.log("URL:|"+URL.toString().toLowerCase()+'|');
       //
       //  if (URL.toString().toLowerCase() == 'login')
       //  {
       //      URL = BB_loginRepo.BlackBookUrl+'/login';
       //  }
       //
       //  return new Promise((success, failure)=> {
       //      browser.ignoreSynchronization = true;
       //      page.executeSequence([ browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
       //          var currentURL = getCurrentURL.split("://");
       //          var getURL = URL.toString().split("://");
       //
       //          if (currentURL[1].trim() != getURL[1].trim()) {
       //              page.openUrl(true, URL, 4000).then(()=> {
       //                  success();
       //              });
       //          }
       //          else {
       //              success();
       //          }
       //      })]).then(()=>{
       //          page.clickElement( BB_loginRepo.Select_Element_AutoBahnLogInPageImage, protractorConfig.config.WaitTime).then(()=>{});
       //      });
       //  });
    });

    // this.Given(/^I reload LogIn Page$/, function () {
    //
    //     var URL = BB_loginRepo.BlackBookUrl+'/login';
    //
    //     return new Promise((success, failure)=> {
    //         browser.ignoreSynchronization = true;
    //         page.executeSequence([
    //             browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
    //                 var currentURL = getCurrentURL.split("://");
    //                 var getURL = URL.toString().split("://");
    //
    //                 if (currentURL[1].trim() != getURL[1].trim()) {
    //                     page.openUrl(true, URL, 4000).then(()=> {
    //                         success();
    //                     });
    //                 }
    //                 else {
    //                     success();
    //                 }
    //             })]).then(()=>{
    //             page.clickElement( BB_loginRepo.Select_Element_AutoBahnLogInPageImage, protractorConfig.config.WaitTime).then(()=>{});});
    //     });
    // });

    this.Then(/^I should see that I am in "([^"]*)" "([^"]*)" URL$/, function (partURL, VerifyURL) {
        return utilities.VerifyActualURLLoaded(partURL, VerifyURL);

        // return new Promise((success, failure)=> {
        //     page.executeSequence([browser.driver.sleep(4000),
        //     browser.driver.wait(browser.driver.getCurrentUrl().then(function (getCurrentURL) {
        //
        //         var currentURL = getCurrentURL.split("://");
        //
        //         switch  (partURL) {
        //             case 'part':
        //                 var modURL1 = currentURL[1].split('/');
        //                 var modURL2 = modURL1[0] + '/' + modURL1[1];
        //                 console.log(modURL2);
        //
        //                 if (modURL2.trim() == VerifyURL) {
        //                     browser.driver.sleep(2000);
        //                     success();
        //                 }
        //                 break;
        //
        //             case 'full':
        //                 console.log(currentURL[1].trim());
        //                 if (currentURL[1].trim() == VerifyURL) {
        //                     browser.driver.sleep(2000);
        //                     success();
        //                 }
        //                 break;
        //
        //             default:
        //                 failure();
        //         }
        //     })
        //     )]).then(()=>{});
        // });
    });

    this.Given(/^I click User Active checkbox$/, function () {
        return BB_editUserProfile.Click_UserActive_checkbox();
        // return new Promise((success, failure) => {
        //     page.clickButton(BB_editUserProfileRepo.Select_Element_UserActiveCheckbox, protractorConfig.config.WaitTime, success);
        // });
    });

    this.Then(/^I should see on User Active checkbox inactive$/, function () {
        return BB_editUserProfile.Verify_UserActive_Checkbox_Inactive();
        // return new Promise((success, failure) => {
        //     page.executeSequence([page.waitForElementTobePresent(BB_editUserProfileRepo.Select_Element_UserActiveCheckbox, protractorConfig.config.WaitTime),
        //         // browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.css('span.checkbox-label'))), protractorConfig.config.WaitTime),
        //         // browser.driver.sleep(1000),
        //         //TODO si funciono :Before tira "" con double quotes  y cuando no esta el :After tira "none" sin double quotes cuando no existe y cuando existe tira "".
        //         browser.driver.executeScript('return window.getComputedStyle(document.querySelector(".checkbox-label"), "::after").content').then(function (data) {
        //             // console.log(data);
        //
        //             if (data == '""') {
        //                 console.log('Pass, It wont change setting');
        //                 success();
        //             }
        //             else {
        //                 console.log("Fail, User Active change settings");
        //                 failure();
        //             }
        //         })
        //     ]).then(()=>{});
        // });
    });

    this.Given(/^I click on Gear Icons (.*) inactive "([^"]*)"$/, function (arg1, arg2) {
        return BB_userList.Click_GearIcon_Inactive();
        // return new Promise((success, failure)=> {
        //     page.clickButton( BB_userListRepo.Select_Element_GeardIcon_Inactive, protractorConfig.config.WaitTime, success);
        // });
    });

    this.Given(/^I click checkbox User's Roles "([^"]*)" "([^"]*)"$/, function (arg1, arg2) {
        return BB_editUserProfile.Click_UsersRolesCheckbox_Administrator();
        // return new Promise((success, failure)=> {
        //     page.clickButton(BB_editUserProfileRepo.Select_Element_UsersRolesCheckbox_Administrator, protractorConfig.config.WaitTime, success);
        //  });
    });

    this.Then(/^I should see Role Market value "([^"]*)"$/, function (roleMarketSelection) {
        return BB_editRoles.Verify_RoleMarketValue_Dropdownbox_RoleEditor(roleMarketSelection);
    });

    this.Given(/^I click Reset Button in Edit Roles$/, function () {
        return BB_editRoles.Click_ResetButton_RoleEditor();
    });

    this.Given(/^I enter Role Name "([^"]*)"$/, function (roleName) {
        return BB_editRoles.Enter_RoleName_inForm(roleName);
    });

    this.Then(/^I should see in "([^"]*)" button "([^"]*)" in Edit Role$/, function (ButtonName, isEnableOrDisable) {
        return BB_editRoles.VerifyButtonsEnableOrDisable(ButtonName, isEnableOrDisable);
        // return new Promise((success, failure)=>{
        //     switch (ButtonName.toString().toLowerCase()) {
        //         case "save":
        //             utilities.VerifyButtonStatus_isEnableorDisable(BB_editRolesRepo.Select_Element_Save_button,isEnableOrDisable,success, failure);
        //             break;
        //
        //         case "delete":
        //             utilities.VerifyButtonStatus_isEnableorDisable(BB_editRolesRepo.Select_Element_Delete_button,isEnableOrDisable,success, failure);
        //             break;
        //
        //         default:
        //             console.log("Button Name selection is not in function.");
        //             failure();
        //     }
        // });
    });

    this.Given(/^I click on New Role Button in Role List$/, function () {
        return BB_roleList.Click_NewRole_Button();
    });

    this.Given(/^I select Role Market "([^"]*)" in Role Editor$/, function (roleMarketSelection) {
        return BB_editRoles.Click_RoleMarketSelection(roleMarketSelection);
        // return new Promise((success, failure) => {
        //     switch (roleMarketSelection) {
        //         case "US Used Car":
        //             page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_RoleMarketDropdown, '5', success);
        //             break;
        //
        //         case "Canada Used Car":
        //             page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_RoleMarketDropdown, '6', success);
        //             break;
        //
        //         default:
        //             console.log("Role Market selection is not in function.");
        //             failure();
        //     }
        // });
    });

    this.Given(/^I click Filter By Group dropdown "([^"]*)" Permissions in Role Editor$/, function (PermissionsName) {
        return BB_editRoles.Click_FilterByGroupPermissionsName(PermissionsName);
        // return new Promise ((success, failure)=>{
        //     page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_FilterByGroupDropdown, PermissionsName, success);
        // });
    });

    this.Given(/^I click Filter By Status dropdown "([^"]*)" in Role Editor$/, function (FilterByStatusName) {
        return BB_editRoles.Click_FilterByStatusName(FilterByStatusName);
        // return new Promise ((success, failure)=>{
        //     page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_FilterByStatusDropdown, FilterByStatusName, success);
        // });
    });

    this.Then(/^I should see "([^"]*)" display for Filter By Group in Role Editor$/, function (PermissionsName) {
        return BB_editRoles.Verify_FilterByGroupPermissionsName(PermissionsName);
        // return new Promise ((success, failure)=> {
        //     page.VerifyDropdownAttributeValue(BB_editRolesRepo.Select_Element_FilterByGroupDropdown, PermissionsName, success, failure).then(()=>{});
        // });
    });

    this.Given(/^I enter Filter Roles search "([^"]*)" in Edit User Profile$/, function (filterRoleSearch) {
      return BB_editUserProfile.Enter_filterRoleName_inForm(filterRoleSearch);
        // var filterRoles = '';
        // return new Promise((success, failure)=> {
        //     page.executeSequence([filterRoles = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterRoleSearch.toString()),
        //         page.fill(BB_editUserProfileRepo.Select_Element_FilterRoleSearchTextbox, filterRoles, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
        //     ]).then(()=>{});
        // });
    });

    this.Given(/^I click Delete from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Delete_Submenu();
    });

    this.Then(/^I should see (.*) displayed for Confirm Role Deletion in Role Editor$/, function (errorMessage) {
        return BB_editRoles.Verify_ConfirmRoleDeletionMessage_popup(errorMessage);
        // return new Promise((success, failure) => {
        //     page.verifyMessageDisplay(BB_roleListRepo.Select_Element_ConfirmPopupMessage_Popup_RoleList, errorMessage, protractorConfig.config.WaitTime,success, failure );
        // });
    });

    this.Then(/^I should see "([^"]*)" message "([^"]*)" displayed for this "([^"]*)" field in Role Editor$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyErrorMessage.Verify_ErrorMessageToDisplay_RoleEditor(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
    });

    this.Given(/^I click (.*) View from Gear Icon in Role List$/, function (rowNumber) {
        return BB_roleList.Click_Gear_View_Submenu(rowNumber);
    });

    this.Given(/^I click on Settings submenu from Admin Tab$/, function () {
        return BB_menu.Click_Settings_Submenu();
    });

    this.Given(/^I clear text box selected "([^"]*)" in Role Editor$/, function (TextboxName) {
        return BB_editRoles.DeleteContentInTextBox(TextboxName);
    });

    this.Then(/^I should not see "([^"]*)" "([^"]*)" in Edit Profile$/, function (arg1, arg2) {
        return BB_editUserProfile.VerifyElementNotInPage_NewPasswordTextbox();
        // return new Promise((success, failure)=> {
        //     page.verifyElementNotInPage(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, 4000, success);
        // });
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed in Edit Role$/, function (str_TextboxName) {
        return verifyErrorMessage.Verify_ErrorMessagesNotToDisplay_RoleEditor(str_TextboxName);
    });


    this.Given(/^I click Circle icon in permissions grid to "([^"]*)" in Role Editor$/, function (expandOrCollapse) {
        return BB_editRoles.Click_CircleIconInPermissions();
        // return new Promise((success, failure)=> {
        //     page.clickButton(BB_editRolesRepo.Select_Element_CircleIconPermission.get(0),protractorConfig.config.WaitTime, success );
        // });
    });

    this.Then(/^I should see in "([^"]*)" button "([^"]*)" in User List$/, function (ButtonName, isEnableOrDisable) {
        return BB_userList.VerifyButtonsEnableOrDisable(ButtonName, isEnableOrDisable);
        // return new Promise((success, failure)=>{
        //     switch (ButtonName.toString().toLowerCase()) {
        //         case "newuser":
        //             utilities.VerifyButtonStatus_isEnableorDisable(BB_userListRepo.Select_Element_NewUserButton,isEnableOrDisable,success, failure);
        //             break;
        //
        //         default:
        //             console.log("Button Name selection is not in function.");
        //             failure();
        //     }
        // });
    });

    this.Given(/^I click "([^"]*)" Button for modal warning message from Edit Roles$/, function (buttonName) {
       return BB_editRoles.Click_ModalWarningMessage_ConfirmOrCancel_Button(buttonName);
        // return new Promise((success, failure) => {
        //     switch (buttonName.toString().toLowerCase()) {
        //         case 'cancel':
        //             page.clickButton(BB_editRolesRepo.Select_Element_Cancel_button_PopMenu ,protractorConfig.config.WaitTime, success);
        //             break;
        //
        //         case 'confirm':
        //             browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
        //                 var currentURL = getCurrentURL.split("://");
        //                // console.log('currentURL:'+currentURL[1]);
        //
        //                 var URL = BB_loginRepo.BlackBookUrl.split("://");
        //
        //                 if (currentURL[1].trim() == URL[1] + '/role/list') {
        //                     page.clickButton(BB_editRolesRepo.Select_Element_Confirm_button_RoleList, protractorConfig.config.WaitTime, success);
        //                 }
        //                 else {
        //                  //   console.log('Confirm button on other page CHECK URL BUG');
        //                   //  console.log('currentURL:'+currentURL[1]);
        //                     page.clickButton(BB_editRolesRepo.Select_Element_Confirm_button_RoleProfile,protractorConfig.config.WaitTime, success);
        //                 }
        //             });
        //             break;
        //         default:
        //             console.log(TextboxName+' : is not part of switch statement in Verify_UserInformation function.');
        //             failure();
        //     }
        // });
    });

    this.Given(/^I click on Home Tab$/, function () {
       return BB_menu.Click_HomeTab();
        // return new Promise((success, failure) => {
        //     page.clickButton(BB_menuRepo.Select_Element_HomeTab, protractorConfig.config.WaitTime, success);
        // });
    });

    this.Given(/^I click Refresh$/, function () {
        return utilities.RefreshPage();
        // return new Promise((success, failure) => {
        //     page.executeSequence([browser.refresh(),
        //         success()]).then(() => {
        //     });
        // });
    });

    this.Then(/^I should see Gear sub-menu options "([^"]*)"$/, function (arg) {
        return BB_userList.VerifyGearSubMenuOptions();
        // return new Promise((success, failure) => {
        //     page.executeSequence([BB_userListRepo.Select_Element_Gear_All_Submenu.getText().then(function (arr) {
        //         var headers = arr.toString().split("\n");
        //
        //         if (headers[0] == "View") {
        //             //console.log("header:|"+headers[0]+"|");
        //             if (headers[1] == "Edit") {
        //                 //  console.log("header:|"+headers[1]+"|");
        //                 if (headers[2] == "Deactivate") {
        //                     //    console.log("header:|"+headers[2]+"|");
        //                     success();
        //                 }
        //             }
        //         }
        //         else {
        //             failure();
        //         }
        //     })]).then(() => {});
        // });
    });

    this.Given(/^I click Forgot Password link$/, function () {
        return BB_login.Click_ForgotPasswordLink_Login();
    });

    this.Given(/^I enter my email "([^"]*)" for Forgot Page$/, function (emailAddress) {
        return BB_loginForgot.Enter_EmailAdress(emailAddress);
    });

    this.Given(/^I click Send Link button$/, function () {
        return BB_loginForgot.Click_SendLinkButton();
    });

    this.Then(/^I should see \#of Users has increase value for "([^"]*)" in Role List$/, function (RoleName) {
        return BB_roleList.Verify_NumberOfUsersColumn_Increase(RoleName);
        // return new Promise((success, failure)=> {
        //     page.executeSequence([ page.waitForElementTobePresent( BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7), protractorConfig.config.WaitTime),
        //
        //         BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7).getText().then((currentValue)=> {
        //             numberofUsers = currentValue;
        //             success();
        //         })]).then(()=>{});
        // });
    });

    // this.Then(/^I should see \#of Users has increase value for Administration in Role List$/, function () {
    //     //todo refactored
    //     return new Promise((success, failure)=> {
    //         page.executeSequence([ page.waitForElementTobePresent(BB_roleListRepo.Select_Element_ColumnNumberOfUsers.get(1), protractorConfig.config.WaitTime),
    //
    //             BB_roleListRepo.Select_Element_ColumnNumberOfUsers.get(1).getText().then((currentValue)=>{
    //            console.log( currentValue);
    //            numberofUsers++;
    //
    //            if (numberofUsers == currentValue)
    //            {
    //                success();
    //            }
    //            else
    //            {
    //                console.log('Did not see any change number of users.');
    //                failure();
    //            }
    //         })]).then(()=>{});
    //     });
    // });

    this.Given(/^I store value \#of Users displayed for "([^"]*)" in Role List$/, function (RoleName) {
        return BB_roleList.Store_NumberOfUsersColumn(RoleName);
        //   return new Promise((success, failure)=> {
        //       page.executeSequence([ page.waitForElementTobePresent(BB_roleListRepo.Select_Element_ColumnNumberOfUsers.get(1), protractorConfig.config.WaitTime),
        //           BB_roleListRepo.Select_Element_ColumnNumberOfUsers.get(1).getText().then((currentValue) => {
        //               console.log(currentValue);
        //               numberofUsers = currentValue;
        //               success();
        //           })]).then(()=>{});
        //   });
    });

    this.Then(/^I should see user's Role "([^"]*)" in User List$/, function (userRole) {
       return BB_userList.Verify_UsersRole(userRole);
        // return new Promise((success, failure) => {
        //     page.verifyMessageDisplay(BB_userListRepo.Select_Element_CellAdmin, userRole, protractorConfig.config.WaitTime,success, failure );
        // });
    });

    this.Then(/^I should see "([^"]*)" display for Filter By Status in Role Editor$/, function (FilterByStatusName) {
        return BB_editRoles.Verify_FilterByStatusName(FilterByStatusName);
        // return new Promise ((success, failure)=> {
        //     page.VerifyDropdownAttributeValue(BB_editRolesRepo.Select_Element_FilterByStatusDropdown,FilterByStatusName, success, failure ).then(()=>{});
        // });
    });

    this.Given(/^I should not see "([^"]*)" Button in User List$/, function (buttonName) {
        return BB_userList.Verify_ButtonNotInPage(buttonName);
        // return new Promise((success, failure)=> {
        //     page.verifyElementNotInPage(BB_userListRepo.Select_Element_NewUserButton, 4000, success);
        // });
    });


    this.Then(/^I should not see "([^"]*)" Button in AdminTab$/, function (buttonName) {
        return BB_menu.Verify_ButtonNotInPage_Menu(buttonName);
        // return new Promise((success, failure)=> {
        //     page.verifyElementNotInPage(BB_menuRepo.Select_Element_SettingsSubMenuButton, 4000, success);
        // });
    });

    this.Then(/^I verify BlackBook "([^"]*)" page with Applitools$/, function (namePage) {
        return utilities.Verify_BlackBookPage_Applitools(namePage, eyesSetUp, eyes);
        // return new Promise((success, failure)=> {
        //     page.executeSequence([browser.driver.sleep(1000) ,
        //         eyesSetUp.EyesCheckWindow(eyes, namePage, protractorConfig.config.ApplitoolsOn),
        //         browser.driver.sleep(1000) ]).then(() => {
        //         success();
        //     });
        // });
    });

    this.Given(/^I click Edit Button in Edit Roles$/, function () {
        return BB_editRoles.Click_EditButton();
        // return new Promise((success, failure) => {
        //     page.clickButton(BB_editRolesRepo.Select_Element_Edit_button,protractorConfig.config.WaitTime, success );
        // });
    });

    this.Given(/^I click on Delete button in Role Editor$/, function () {
        return BB_editRoles.Click_DeleteButton();
        // return new Promise((success, failure) => {
        //     page.clickButton(BB_editRolesRepo.Select_Element_Delete_button, protractorConfig.config.WaitTime,success );
        // });
    });

    this.Given(/^I re-enter the same user name and password$/, function () {
        return BB_login.Click_LoginButtonX3();
        // return page.executeSequence([
        //         page.clickElement(BB_loginRepo.Select_Element_UserPasswordTextbox,protractorConfig.config.WaitTime ),
        //         browser.driver.sleep(2000),
        //         page.clickElement(BB_loginRepo.Select_Element_UserPasswordTextbox,protractorConfig.config.WaitTime ),
        //         browser.driver.sleep(2000),
        //         BB_login.Click_LoginButton_Login()]).then(()=>{});
    });

    this.Then(/^I should see in "([^"]*)" "([^"]*)"$/, function (ElementName, isEnableOrDisable) {
        //todo refactored
        return new Promise((success, failure)=> {
            var s = ElementName;
            var a = isEnableOrDisable;

            page.executeSequence([
                browser.driver.wait(protractor.ExpectedConditions.elementToBeClickable(BB_editUserProfileRepo.Select_Element_SaveButton), protractorConfig.config.WaitTime)]).then(() => {
                success();
            });
        });
    });

    //TODO STILL IN TEST CASES BUT NOT USED (NOT FIX BUG)
    this.Given(/^I add extra string "([^"]*)" to my "([^"]*)"$/, function (addString, TextboxName) {
        //todo refactored
        return new Promise((success, failure)=> {
            var s = TextboxName;
            page.executeSequence([page.waitForElementTobePresent(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, protractorConfig.config.WaitTime),
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click(),
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(addString)]).then(()=>{success();});
        });
    });

    //TODO STILL IN TEST CASES BUT NOT USED (NOT FIX BUG)
    this.Given(/^I delete the amount "([^"]*)" characters from my "([^"]*)"$/, function (amountDeleted,TextboxName ) {
        //todo refactored
        return new Promise((success, failure)=> {
            var s = TextboxName;
            var amount = parseInt(amountDeleted);
            page.executeSequence([page.waitForElementTobePresent( BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, protractorConfig.config.WaitTime),
                // console.log('amount:'+typeof amount+' amountDeleted:'+typeof amountDeleted);
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click(),
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE)]).then(()=>{ success();});
        });
    });


    //TODO STILL NOT USED BUT SAVE FOR TEST CASES
    // this.Then(/^I click User Active checkbox "([^"]*)"$/, function (isEnableOrDisable) {
    //     return new Promise((success, failure) => {
    //         page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.css('span.checkbox-label'))), protractorConfig.config.WaitTime),
    //             element(by.css('span.checkbox-label')).click(),
    //             browser.driver.sleep(1000),
    //             //Si funciono :Before tira "" con double quotes  y cuando no esta el :After tira "none" sin double quotes cuando no existe y cuando existe tira "".
    //             browser.driver.executeScript('return window.getComputedStyle(document.querySelector(".checkbox-label"), "::after").content')
    //                 .then(function (data) {
    //                     // console.log(data);
    //
    //                     if (data == '""' && isEnableOrDisable == "Disable") {
    //                         console.log("Disable");
    //                         element(by.css('span.checkbox-label')).click();
    //                     }
    //                     if (data == 'none' && isEnableOrDisable == "Enable") {
    //                         console.log("Enable");
    //                         element(by.css('span.checkbox-label')).click();
    //                     }
    //
    //                     success();
    //                 })]);
    //     });
    // });

    //TODO STILL NOT USED BUT SAVE FOR TEST CASES
    // this.When(/^I check heading from Grid$/, function () {
    //     return new Promise((success, failure)=> {
    //         page.executeSequence([page.waitForElementTobePresent(element(by.id('center')), protractorConfig.config.WaitTime),
    //             //return element(by.css('div.ag-header-container')).getText().then(function(arr) {
    //             //return element(by.css('div.ag-header')).getText().then(function(arr) {
    //             element(by.id('center')).getText().then(function (arr) {
    //                 //arr[0].evaluate('cat.id'); // This is a promise which resolves to the id.
    //                 var headers = arr.split('/r');
    //                 console.log(headers[0]);
    //             })]).then(()=>{success();});
    //     });
    // });

};
module.exports = myBlackBookSteps;