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

var BB_Login = function BB_Login() {

    BB_Login.prototype.currentEmailAddress = '';
    BB_Login.prototype.currentPassword = '';

    BB_Login.prototype.OpenBlackBookLogIn = function (eyes) {

        return new Promise((success, failure)=> {
            //page is non-angular
            browser.ignoreSynchronization = true;
            //Open BlackBook website
            return browser.driver.get(BB_loginRepo.BlackBookUrl)
                .then(()=> {
                    if (protractorConfig.config.ApplitoolsOn == false) {
                        browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
                    }

                    eyesSetUp.EyesCheckWindow(eyes, BB_loginRepo.EyesVerify_BB_Login, protractorConfig.config.ApplitoolsOn);
                    success();
                });
        });
    };

    BB_Login.prototype.Enter_CurrentEmailAddress = function (currentEmail) {
        //timeout issues on loading page so I added 2sec before it starts typing.
        browser.sleep(2000);
        this.currentEmailAddress = currentEmail.toString();
        BB_loginRepo.Select_Element_UserEmailAddressTextbox.click();
        return new Promise((success, failure)=> {
            BB_loginRepo.Select_Element_UserEmailAddressTextbox.sendKeys(this.currentEmailAddress).then(()=> {
                success();
            });
        });
    };

    BB_Login.prototype.Enter_CurrentPassword = function (currentPasswordEntered) {
        this.currentPassword = currentPasswordEntered.toString();
        BB_loginRepo.Select_Element_UserPasswordTextbox.click();

        return new Promise((success, failure)=> {
            BB_loginRepo.Select_Element_UserPasswordTextbox.sendKeys(this.currentPassword).then(()=> {
                success();
            });
        });
    };

    BB_Login.prototype.Click_LoginButton = function () {
        return new Promise((success, failure)=> {
            BB_loginRepo.Select_Element_LogInButton.click().then(()=> {
                success();
            });
        });
    };
};
module.exports = new BB_Login();