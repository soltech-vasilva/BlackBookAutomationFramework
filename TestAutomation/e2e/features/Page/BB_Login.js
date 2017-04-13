/**
 * Created by Vsilva on 12/15/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var BB_loginRepo = require ('../Repository/BB_LoginRepo.js');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');

var BB_Login = function BB_Login() {

    BB_Login.prototype.currentEmailAddress = '';
    BB_Login.prototype.currentPassword = '';

    BB_Login.prototype.Click_LoginButton_Login = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_loginRepo.Select_Element_LogInButton, protractorConfig.config.WaitTime,success);
        });
    };

    BB_Login.prototype.Click_ForgotPasswordLink_Login = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_loginRepo.Select_Element_ForgotPasswordLink, protractorConfig.config.WaitTime, success);
        });
    };

    BB_Login.prototype.Click_LoginButtonX3 = function () {
        return page.executeSequence([
            browser.driver.sleep(2000),
            page.clickElement(BB_loginRepo.Select_Element_LogInButton, protractorConfig.config.WaitTime),
            browser.driver.sleep(2000),
            page.clickElement(BB_loginRepo.Select_Element_LogInButton, protractorConfig.config.WaitTime),
            browser.driver.sleep(2000),
            BB_Login.prototype.Click_LoginButton_Login()]).then(() => {
        });
    };

    BB_Login.prototype.Enter_CurrentEmailAddress_Login = function (currentEmail) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.currentEmailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentEmail.toString()),
                page.fill(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress, protractorConfig.config.WaitTime,BB_loginRepo.Select_Element_AutoBahnLogInPageImage, success)
            ]).then(()=>{});
        });
    };

    BB_Login.prototype.Enter_CurrentPassword_Login = function (currentPasswordEntered) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.currentPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentPasswordEntered.toString()),
                page.fill(BB_loginRepo.Select_Element_UserPasswordTextbox, this.currentPassword, protractorConfig.config.WaitTime,BB_loginRepo.Select_Element_AutoBahnLogInPageImage, success)
            ]).then(()=>{});
        });
    };

    BB_Login.prototype.Reload_Page = function (url) {

        var URL = url;

        if (URL.toString().toLowerCase() == 'login') {
            URL = BB_loginRepo.BlackBookUrl + '/login';
        }

        return new Promise((success, failure) => {
            browser.ignoreSynchronization = true;
            page.executeSequence([browser.driver.wait(browser.driver.getCurrentUrl()).then(function (getCurrentURL) {
                var currentURL = getCurrentURL.split("://");
                var getURL = URL.toString().split("://");

                if (currentURL[1].trim() != getURL[1].trim()) {
                    page.openUrl(true, URL, 4000).then(() => {
                        success();
                    });
                }
                else {
                    success();
                }
            })]).then(() => {
                page.clickElement(BB_loginRepo.Select_Element_AutoBahnLogInPageImage, protractorConfig.config.WaitTime).then(() => {
                });
            });
        });
    };

    BB_Login.prototype.OpenBlackBook_LogInPage = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.setResolution(protractorConfig.config.width, protractorConfig.config.height),
                page.openUrl(true, BB_loginRepo.BlackBookUrl, 4000).then(()=>{success();})
            ]).then(()=>{});
        });
    };
};
module.exports = new BB_Login();