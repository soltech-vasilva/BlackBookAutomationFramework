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


//testing
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var protractor = require('protractor');
var utilities = require('../Page/Utilities.js');

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
    this.setDefaultTimeout(25 * 1000);  //todo estaba a 80

    this.Before(function () {
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
            console.log("\r\nSenario Failed: Missing Element in Screen");
            callback();
        }
        else {
            console.log("PASS");
            callback();
        }
    });

    this.Given(/^I enter BlackBook Website$/, function () {
        return BB_editUserProfile.OpenBlackBookDashboard(eyes);
    });

    this.When(/^I enter my first name (.*)$/, function (firstName) {
        return BB_editUserProfile.Enter_FirstName(firstName);
    });

    this.When(/^I enter my last name (.*)$/, function (lastName ) {
        return BB_editUserProfile.Enter_LastName(lastName);
    });

    this.When(/^I enter my email address (.*)$/, function (emailAddress , callback) {
        BB_editUserProfile.Enter_EmailAddress(emailAddress);
        callback();
    });

    this.When(/^I enter my phone number (.*)$/, function (phoneNumber) {
        return BB_editUserProfile.Enter_PhoneNumber(phoneNumber);
    });

    this.When(/^I enter my new Password (.*)$/, function (newPassword) {
        return BB_editUserProfile.Enter_NewPassword(newPassword);
    });

    this.When(/^I enter my confirm new password (.*)$/, function (confirmNewPassword) {
        return BB_editUserProfile.Enter_ConfirmNewPassword(confirmNewPassword);
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName) {
       return verifyErrorMessage.Verify_ErrorMessagesNotToDisplay(str_TextboxName);
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyErrorMessage.Verify_ErrorMessageToDisplay(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
    });

    //EMPTY FUNCTION FOR READABILITY ONLY ON CUCUMBER READABILITY
    this.When(/^I enter "([^"]*)"$/, function (c) {
        return new Promise((success, failure)=> {
            success();
        });
    });

    this.Given(/^I enter BlackBook Login Website$/, function () {
        return BB_login.OpenBlackBookLogIn(eyes);
    });

    this.Given(/^I enter my user email address (.*)$/, function (currentEmailAddress, callback) {
        BB_login.Enter_CurrentEmailAddress(currentEmailAddress);
        callback();
    });

    this.Given(/^I enter my Password (.*)$/, function (currentPassword) {
        return BB_login.Enter_CurrentPassword(currentPassword);
    });

    this.Given(/^I click Login Button$/, function () {
        return BB_login.Click_LoginButton();
    });

    this.Given(/^I click Edit Button$/, function () {
       return BB_editUserProfile.Click_EditButton();
    });

    this.Given(/^I click Reset Button$/, function () {
        return BB_editUserProfile.Click_ResetButton ();
    });

    this.Given(/^I click Profile Button$/, function () {
        return BB_menu.Click_AvatarImageButton();
    });

    this.Given(/^I click My Profile sub menu$/, function () {
        return BB_menu.Click_MyProfileSubmenu();
    });

    this.Given(/^I click Logout sub menu$/, function () {
        return BB_menu.Click_LogOutSubmenu();
    });

    this.When(/^I click Cancel Button$/, function () {
        return BB_editUserProfile.Click_CancelButton();
    });

    this.Then(/^I enter my Previous Password (.*)$/, function (previousPassword) {
        return BB_editUserProfile.Enter_PreviousPassword(previousPassword);
    });

    this.When(/^I clear text box selected "([^"]*)"$/, function (TextboxName) {
       return BB_editUserProfile.DeleteContentInTextBox(TextboxName);
    });

    this.Given(/^I click on Admin Tab$/, function () {
        return BB_menu.Click_AdminTab();
    });

    this.Given(/^I click on Users submenu from Admin Tab$/, function () {
        return BB_menu.Click_Users_Submenu();
    });

    this.Given(/^I click on New User Button$/, function () {
        return BB_userList.Click_NewUser_Button();
    });

    this.Then(/^I click on Save button$/, function () {
        return BB_editUserProfile.Click_SaveButton();
    });

    this.Given(/^I enter filter value (.*)$/, function (filterValue, callback ) {
        BB_userList.EnterValueToFilter_FilterUseList(filterValue);
        callback();
    });

    this.Given(/^I click on Gear Icon$/, function () {
        return BB_userList.Click_GearIcon();
     });

    this.Given(/^I click Deactivate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Deactivate_Submenu();
    });

    this.Given(/^I click Status Filter$/, function () {
        return BB_userList.Click_StatusFilter();
    });

    this.Given(/^I click Inactive in submenu from Status Filter$/, function () {
        return BB_userList.Click_StatusFilter_Inactive_Submenu();
    });

    this.Given(/^I click Activate in submenu from Gear Icon$/, function () {
        return BB_userList.Click_Gear_Activate_Submenu();
    });

    this.Given(/^I click View from Gear Icon$/, function () {
        return BB_userList.Click_Gear_View_Submenu();
    });

    this.Then(/^I should see user's "([^"]*)" displayed in screen with value "([^"]*)"$/, function (textboxName, valueCompare) {
        return verify_UserInformation.Verify_UserInformation(textboxName, valueCompare);
    });


    ///BUGS FIXES TO TEST OTHER THINGS
    this.Given(/^I wait$/, function () {
        return browser.sleep(4000);
    });

    this.Then(/^I reload page "([^"]*)"$/, function (URL) {
        browser.ignoreSynchronization = true;
        browser.driver.get(URL);
        browser.sleep(5000);
        return browser.getCurrentUrl().then(function (getCurrentURL) {
            if (getCurrentURL.trim() != 'http://qa-autobahn.blackbookcloud.com/login') {
                browser.ignoreSynchronization = true;
                browser.driver.get(URL);
                browser.sleep(5000);
            }
        });
    });

    this.Given(/^I enter time the same user name and password$/, function () {

        // for ( var a=0 ;a > 6 ;a++)
        // {
          //  BB_login.Enter_CurrentEmailAddress('user1@example.com');
          //  BB_login.Enter_CurrentPassword('Password0');
        // }

            BB_login.Click_LoginButton();
            browser.sleep(2000);
            BB_login.Click_LoginButton();
            browser.sleep(2000);
            BB_login.Click_LoginButton();
            return browser.sleep(2000);
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
        BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            // for ( var a = 0 ; a == amount ;a++) {
            //     console.log('a:' + a + ' amountDeleted:' + amountDeleted);
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys("ppppppppppp");
            //     BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(protractor.Key.BACK_SPACE);
            // }
    });
};

module.exports = myBlackBookSteps;