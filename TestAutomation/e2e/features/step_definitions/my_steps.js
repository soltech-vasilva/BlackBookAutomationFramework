var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('zgr3zfZKIc8JyUNkZdxOZv4G4wTcCrYp4PXSG9HE9Ew110');

var BB_userProfileEdit = require('../Page/BB_UserProfileEdit.js');
var BB_login = require('../Page/BB_Login');
var eyesSetUp = require('../Page/EyesSetUp.js');
var captureBrowserCapabilities = require ('../Page/CaptureBrowserCapabilities.js');
var verifyMessage = require('../Page/VerifyMessage.js');

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

    this.Before(function () {
        return captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes);
    });

    this.After(function (scenario, callback) {
        eyesSetUp.EyesClose_EndTestcase(eyes);

        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (base64png) {
                var decodedImage = new Buffer(base64png, 'base64').toString('binary');
                scenario.attach(decodedImage, '/Users/Vsilva/Desktop');
                console.log("\r\nSenario Failed: Missing Element in Screen");
                callback();
            }, function (err) {
                callback(err);
            });
        } else {
            //console.log("PASS");
            callback();
        }
    });

    this.Given(/^I enter BlackBook Website$/, function () {
        return BB_userProfileEdit.OpenBlackBookDashboard(eyes);
    });

    this.When(/^I enter my first name (.*)$/, function (firstName) {
        return BB_userProfileEdit.Enter_FirstName(firstName);
    });

    this.When(/^I enter my last name (.*)$/, function (lastName ) {
        return BB_userProfileEdit.Enter_LastName(lastName);
    });

    this.When(/^I enter my email address (.*)$/, function (emailAddress) {
        return BB_userProfileEdit.Enter_EmailAddress(emailAddress);
    });

    this.When(/^I enter my phone number (.*)$/, function (phoneNumber) {
        return BB_userProfileEdit.Enter_PhoneNumber(phoneNumber);
    });

    this.When(/^I enter my new Password (.*)$/, function (newPassword) {
        return BB_userProfileEdit.Enter_NewPassword(newPassword);
    });

    this.When(/^I enter my confirm new password (.*)$/, function (confirmNewPassword) {
        return BB_userProfileEdit.Enter_ConfirmNewPassword(confirmNewPassword);
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName) {
       return verifyMessage.Verify_ErrorMessagesNotToDisplay(str_TextboxName);
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        return verifyMessage.Verify_ErrorMessageToDisplay(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
    });

    //EMPTY FUNCTION FOR READABILITY ONLY ON CUCUMBER
    this.When(/^I enter "([^"]*)"$/, function (c) {
        return new Promise((success, failure)=> {
            success();
        });
    });

    this.Given(/^I enter BlackBook Login Website$/, function () {
        return BB_login.OpenBlackBookLogIn(eyes);
    });

    this.Given(/^I enter my user email address (.*)$/, function (currentEmailAddress) {
        return BB_login.Enter_CurrentEmailAddress(currentEmailAddress);
    });

    this.Given(/^I enter my Password (.*)$/, function (currentPassword) {
        return BB_login.Enter_CurrentPassword(currentPassword);
    });

    this.Given(/^I click Login Button$/, function () {
        return BB_login.Click_LoginButton();
    });

    this.Given(/^I click Edit Button$/, function () {
       return BB_userProfileEdit.Click_EditButton();
    });

    this.Given(/^I click Reset Button$/, function () {
        return BB_userProfileEdit.Click_ResetButton ();
    });

    this.Given(/^I wait$/, function () {
        return browser.sleep(4000);
    });

    this.Given(/^I click Profile Button$/, function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(element(by.xpath('//*[@id="page-box"]/header/div[3]/div'))), 10000);
        return element(by.xpath('//*[@id="page-box"]/header/div[3]/div')).click();
    });

    this.Given(/^I click My Profile sub menu$/, function () {
        return element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[2]/a')).click();
    });

    this.Given(/^I click Logout sub menu$/, function () {
        return element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[1]/a')).click();
    });

    this.When(/^I click Cancel Button$/, function () {
        return element(by.buttonText('Cancel')).click();
    });

    this.Then(/^I enter my Previous Password (.*)$/, function (previousPassword) {
        return BB_userProfileEdit.Enter_PreviousPassword(previousPassword);
    });

    this.When(/^I clear text box first name "([^"]*)"$/, function (TextboxName) {
       return BB_userProfileEdit.DeleteContentInTextBox(TextboxName);
    });
};

module.exports = myBlackBookSteps;