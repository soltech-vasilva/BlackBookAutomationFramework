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

        return new Promise((success, failure)=> {
            //page is non-angular
            browser.ignoreSynchronization = true;
            //Open BlackBook website
            browser.driver.get(BB_loginRepo.BlackBookUrl)
                .then(()=> {
                    if (protractorConfig.config.ApplitoolsOn == false) {
                        browser.driver.manage().window().setSize(protractorConfig.config.width, protractorConfig.config.height);
                        //browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
                    }
                    eyesSetUp.EyesCheckWindow(eyes, BB_loginRepo.EyesVerify_BB_Login, protractorConfig.config.ApplitoolsOn);
                    browser.waitForAngular();
                    success();
                });
        });
    };

    BB_Login.prototype.Enter_CurrentEmailAddress = function (currentEmail) {

        this.currentEmailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentEmail.toString());
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_loginRepo.Select_Element_UserEmailAddressTextbox), 10000);

        BB_loginRepo.Select_Element_UserEmailAddressTextbox.click();

        return new Promise((success, failure)=> {
            if (this.currentEmailAddress != '') {
                BB_loginRepo.Select_Element_UserEmailAddressTextbox.sendKeys(this.currentEmailAddress).then(()=> {
                    success();
                });
            }
            else {
                success();
            }
        });
    };

    BB_Login.prototype.Enter_CurrentPassword = function (currentPasswordEntered) {

        this.currentPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentPasswordEntered.toString());
        BB_loginRepo.Select_Element_UserPasswordTextbox.click();

        if (this.currentPassword != '') {
            return new Promise((success, failure)=> {
                if (this.currentPassword != '') {
                    BB_loginRepo.Select_Element_UserPasswordTextbox.sendKeys(this.currentPassword).then(()=> {
                        success();
                    });
                }
                else
                {
                    success();
                }
            });
        }
    };

    BB_Login.prototype.Click_LoginButton = function () {
        return new Promise((success, failure)=> {
            BB_loginRepo.Select_Element_LogInButton.click().then(()=> {
                browser.waitForAngular();
                success();
            });
        });
    };
};
module.exports = new BB_Login();