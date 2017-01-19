/**
 * Created by Vsilva on 12/15/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');
var utilities = require('../Page/Utilities.js');

var BB_Login = function BB_Login() {

    BB_Login.prototype.currentEmailAddress = '';
    BB_Login.prototype.currentPassword = '';

    BB_Login.prototype.OpenBlackBookLogIn = function (eyes) {
       return new Promise((success, failure) => {
            //page is non-angular
            browser.ignoreSynchronization = true;
            //Open BlackBook website
           browser.wait(browser.driver.get(BB_loginRepo.BlackBookUrl)
                .then(() => {
                    if (protractorConfig.config.ApplitoolsOn == false) {
                        //browser.driver.manage().window().setSize(protractorConfig.config.width, protractorConfig.config.height);
                        browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
                    }
                    eyesSetUp.EyesCheckWindow(eyes, BB_loginRepo.EyesVerify_BB_Login, protractorConfig.config.ApplitoolsOn);
                    success();
                }));
        });
    };

    BB_Login.prototype.Enter_CurrentEmailAddress = function (currentEmail) {
        this.currentEmailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentEmail.toString());
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_loginRepo.Select_Element_UserEmailAddressTextbox), protractorConfig.config.WaitTime);
        BB_loginRepo.Select_Element_UserEmailAddressTextbox.click();
        utilities.SendKeysSlower(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress );

        if (this.currentEmailAddress != '') {
            return new Promise((success, failure)=> {
                if (this.currentEmailAddress != '') {
                    browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress, success));
                }
                else {
                    success();
                }
            });
        }
    };

    BB_Login.prototype.Enter_CurrentPassword = function (currentPasswordEntered) {
        this.currentPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentPasswordEntered.toString());
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_loginRepo.Select_Element_UserPasswordTextbox), protractorConfig.config.WaitTime);
        BB_loginRepo.Select_Element_UserPasswordTextbox.click();

        if (this.currentPassword != '') {
            return new Promise((success, failure)=> {
                if (this.currentPassword != '') {
                    BB_loginRepo.Select_Element_UserPasswordTextbox.sendKeys(this.currentPassword);
                    browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserPasswordTextbox, this.currentPassword, success));
                }
                else {
                    success();
                }
            });
        }
    };

    BB_Login.prototype.Click_LoginButton = function () {
        //added this to give a buffer to click
        browser.driver.sleep(2000);
        return new Promise((success, failure)=> {
            browser.wait(BB_loginRepo.Select_Element_LogInButton.click().then(()=> {
                success();
            }));
        });
    };
};
module.exports = new BB_Login();