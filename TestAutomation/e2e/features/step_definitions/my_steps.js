var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('zgr3zfZKIc8JyUNkZdxOZv4G4wTcCrYp4PXSG9HE9Ew110');

var BB_dashboard = require('../Page/BB_Dashboard.js');
var eyesSetUp = require('../Page/EyesSetUp.js');
var captureBrowserCapabilities = require ('../Page/CaptureBrowserCapabilities.js');

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
        captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes);
    });

    this.After(function() {
        eyesSetUp.EyesClose_EndTestcase(eyes);
    });

    this.Given(/^I enter BlackBook Website$/, function () {
        return BB_dashboard.OpenBlackBookDashboard(eyes);
    });

    this.When(/^I enter my first name (.*)$/, function (firstName) {
        return BB_dashboard.Enter_FirstName(firstName);
    });

    this.When(/^I enter my last name (.*)$/, function (lastName ) {
        return BB_dashboard.Enter_LastName(lastName);
    });

    this.When(/^I enter my email address (.*)$/, function (emailAddress) {
        return BB_dashboard.Enter_EmailAddress(emailAddress);
    });

    this.When(/^I enter my phone number (.*)$/, function (phoneNumber) {
        return BB_dashboard.Enter_PhoneNumber(phoneNumber );
    });

    this.When(/^I enter my new Password (.*)$/, function (newPassword) {
        return BB_dashboard.Enter_NewPassword(newPassword);
    });

    this.When(/^I enter my confirm new password (.*)$/, function (confirmNewPassword) {
        return BB_dashboard.Enter_ConfirmNewPassword(confirmNewPassword);
    });

    this.When(/^I click Cancel Button$/, function () {
        element(by.buttonText('Cancel')).click();
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed$/, function (str_TextboxName, str_VerifyErrorName) {
        BB_dashboard.Verify_ErrorMessageToDisplayEmptyFields(str_TextboxName, str_VerifyErrorName);
        // callback();
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName) {
       return BB_dashboard.Verify_ErrorMessagesNotToDisplay(str_TextboxName);
        // callback();
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField) {
        BB_dashboard.Verify_ErrorMessageToDisplay(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
        // callback();
    });

    //EMPTY FUNCTION FOR READABILITY ONLY ON CUCUMBER
    this.When(/^I enter "([^"]*)"$/, function (arg1) {
        // callback();
    });
};

module.exports = myBlackBookSteps;