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
var page = require ('../Page/Page_Objects');

var BB_Login = function BB_Login() {
    BB_Login.prototype.currentEmailAddress = '';
    BB_Login.prototype.currentPassword = '';

    BB_Login.prototype.OpenBlackBookLogIn_Page = function () {
       // return new Promise((success, failure) => {
       //     //page is non-angular
       //     browser.ignoreSynchronization = true;
       //     //Open BlackBook website
       //     page.executeSequence([browser.driver.manage().window().setSize(protractorConfig.config.width, protractorConfig.config.height),
       //         browser.driver.get(BB_loginRepo.BlackBookUrl).then(() => {
       //         console.log('dentro getURL');
       //         //if (protractorConfig.config.ApplitoolsOn == false) {
       //           //  browser.driver.manage().window().setSize(protractorConfig.config.width, protractorConfig.config.height);
       //           //  browser.driver.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
       //         //}
       //         //  page.executeSequence([eyesSetUp.EyesCheckWindow(eyes, BB_loginRepo.EyesVerify_BB_Login, protractorConfig.config.ApplitoolsOn)]).then(()=>{success()});
       //     },
       //         browser.driver.sleep(5000)
       //     )]).then(()=>{ success(); console.log('afuera getURL');});
       // });

        return new Promise((success, failure) => {
            page.executeSequence([page.setResolution(protractorConfig.config.width, protractorConfig.config.height),
                page.openUrl(true, BB_loginRepo.BlackBookUrl, 4000)
            ]).then(()=>{ success();});
        });
    };

    BB_Login.prototype.Enter_CurrentEmailAddress_Login = function (currentEmail) {
        return new Promise((success, failure)=> {
            this.currentEmailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentEmail.toString());
            page.executeSequence([page.waitForElementTobePresent(BB_loginRepo.Select_Element_UserEmailAddressTextbox),
                page.click(BB_loginRepo.Select_Element_UserEmailAddressTextbox),
                utilities.SendKeysSlower(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress)
            ]).then(() => {
               //if (this.currentEmailAddress != '') {
                    if (this.currentEmailAddress != '') {
                        // browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress)).then(() => {
                        //     success();
                        // });
                        page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserEmailAddressTextbox, this.currentEmailAddress)]).then(() => {
                            success();
                        });
                    }
                    else {
                        success();
                    }
                //}
            });
        });
    };

    BB_Login.prototype.Enter_CurrentPassword_Login = function (currentPasswordEntered) {
        return new Promise((success, failure) => {
            this.currentPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(currentPasswordEntered.toString());
            page.executeSequence([page.waitForElementTobePresent(BB_loginRepo.Select_Element_UserPasswordTextbox),
                page.click(BB_loginRepo.Select_Element_UserPasswordTextbox),
                utilities.SendKeysSlower(BB_loginRepo.Select_Element_UserPasswordTextbox, this.currentPassword)
            ]).then(() => {
                //if (this.currentPassword != '') {
                    if (this.currentPassword != '') {
                        // browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserPasswordTextbox, this.currentPassword)).then(() => {
                        //     success();
                        // });

                        page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_loginRepo.Select_Element_UserPasswordTextbox, this.currentPassword)]).then(() => {
                            success();
                        });
                    }
                    else {
                        success();
                    }
               // }
            });
        });
    };

    BB_Login.prototype.Click_LoginButton = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([page.waitForElementTobePresent(BB_loginRepo.Select_Element_LogInButton),BB_loginRepo.Select_Element_LogInButton.click()]).then(()=> {
                success();
            });
        });
    };
};
module.exports = new BB_Login();