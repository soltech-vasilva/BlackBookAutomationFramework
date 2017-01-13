/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var utilities = require('../Page/Utilities.js');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var BB_EditUserProfile = function BB_UserProfileEdit(){

    BB_EditUserProfile.prototype.firstName = '';
    BB_EditUserProfile.prototype.lastName = '';
    BB_EditUserProfile.prototype.emailAddress = '';
    BB_EditUserProfile.prototype.phoneNumber = '';
    BB_EditUserProfile.prototype.newPassword = '';
    BB_EditUserProfile.prototype.confirmNewPassword = '';
    BB_EditUserProfile.prototype.previousPassword = '';

    BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile = function(success){
        return BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText.click().then(()=> {
            return success();
        });
    };

   BB_EditUserProfile.prototype.Enter_FirstName = function (firstName) {
       this.firstName =   utilities.ReplaceDoubleQuotesWithWhiteSpace(firstName.toString());
       browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_FirstNameTextbox), protractorConfig.config.WaitTime);
       BB_editUserProfileRepo.Select_Element_FirstNameTextbox.click();

       return new Promise((success, failure)=> {
           if (this.firstName != '') {
               BB_editUserProfileRepo.Select_Element_FirstNameTextbox.sendKeys(this.firstName);
               browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_FirstNameTextbox, this.firstName, success));
           }
           BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
       });
   };

    BB_EditUserProfile.prototype.Enter_LastName = function (lastName) {
        this.lastName = utilities.ReplaceDoubleQuotesWithWhiteSpace(lastName.toString());
        BB_editUserProfileRepo.Select_Element_LastNameTextbox.click();

        return new Promise((success, failure)=> {
            if (this.lastName != '') {
                BB_editUserProfileRepo.Select_Element_LastNameTextbox.sendKeys(this.lastName);
                browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_LastNameTextbox, this.lastName, success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.Enter_EmailAddress = function (emailAddress) {
        this.emailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString());
        BB_editUserProfileRepo.Select_Element_EmailAddressTextbox.click();

        return new Promise((success, failure)=> {
            if (this.emailAddress != '') {
                BB_editUserProfileRepo.Select_Element_EmailAddressTextbox.sendKeys(this.emailAddress);
                browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox, this.emailAddress, success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.Enter_PhoneNumber = function (phoneNumber) {
        this.phoneNumber = utilities.ReplaceDoubleQuotesWithWhiteSpace(phoneNumber.toString());
        BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox.click();

        return new Promise((success, failure)=> {
            if (this.phoneNumber != '') {
                BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox.sendKeys(this.phoneNumber);
                browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox, this.phoneNumber, success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.Enter_NewPassword = function (newPassword) {
        this.newPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(newPassword.toString());
        BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.newPassword != '') {
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(this.newPassword);
                browser.wait(utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, this.newPassword,success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.Enter_ConfirmNewPassword = function (confirmNewPassword) {
        this.confirmNewPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(confirmNewPassword.toString());
        BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.confirmNewPassword != '') {
                BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox.sendKeys(this.confirmNewPassword);
                browser.wait(utilities.VerifyValueEntered_RetypeValue( BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox, this.confirmNewPassword, success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.Enter_PreviousPassword = function (previousPassword) {
        this.previousPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(previousPassword.toString());
        BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.previousPassword != '') {
                BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox.sendKeys(this.previousPassword);
                browser.wait(utilities.VerifyValueEntered_RetypeValue( BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox, this.previousPassword,success));
            }
            BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
        });
    };

    BB_EditUserProfile.prototype.DeleteContentInTextBox = function (TextboxName) {
        return new Promise((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_FirstNameTextbox);
                    success();
                    break;
                case 'lastname':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_LastNameTextbox);
                    break;
                case 'emailaddress':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_EmailAddressTextbox);
                    break;
                case 'newpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_NewPasswordTextbox);
                    break;
                case 'confirmnewpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox);
                    break;
                default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox function.');
                    failure();
            }
        });
    };

    BB_EditUserProfile.prototype.Click_Delete_Content = function(success, ElementToClick) {
        ElementToClick.click();
        //it works on Firefox only
        keyStrokesRepo.CONTROL_ALL_DELETE();
        BB_EditUserProfile.prototype.Click_TittleAddNewUserProfile(success);
    };

    BB_EditUserProfile.prototype.Click_EditButton = function () {
        //This give a time to transition
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_EditButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_editUserProfileRepo.Select_Element_EditButton.click().then(()=> {
                success();
            });
        });
    };

    BB_EditUserProfile.prototype.Click_ResetButton = function () {
        //This give a time to transition
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ResetButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_editUserProfileRepo.Select_Element_ResetButton.click().then(()=> {
                browser.waitForAngular();
                success();
            });
        });
    };

    BB_EditUserProfile.prototype.Click_CancelButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_CancelButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_editUserProfileRepo.Select_Element_CancelButton.click().then(()=> {
                success();
            });
        });
    };

    BB_EditUserProfile.prototype.Click_SaveButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_SaveButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_editUserProfileRepo.Select_Element_SaveButton.click().then(()=> {
                success();
            });
        });
    };

    // if (typeof console == "undefined") {
    //     window.console = {
    //         log: function () {}
    //     };
    // }
    //Console.log(ispresent);
        // BB_EditUserProfile.prototype.closeAdsOnSoltechMainPage = function ()
   // {
   //    //  var displayed ='hhhhhh';
   //    //
   //    //  browser.sleep(2000);
   //    // var ele = browser.element(by.xpath('//*[@id="columbus-optin-wrapper"]/a'));
   //    //
   //    //  ele.isDisplayed().then(function(visible){
   //    //          displayed = visible;
   //    //      });
   //    //
   //    //  console.log(displayed);
   //    // expect(ele.isDisplayed()).toBe(true);
   //     // .isDisplayed().then(function(visible){
   //     //     displayed = visible;
   //     // });
   //
   //     //Closing Ads when scrolling for applitools can scan items on page.
   //     // browser.executeScript('window.scrollTo(0,1048);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,2096);').then(function () {
   //     //     browser.sleep(4000);
   //     //
   //     //     if (displayed == true)
   //     //     {
   //     //         console.log(visible);
   //     //        // BB_editUserProfileRepo.Select_Element_Ads_CloseXicon.click();
   //     //         displayed = false;
   //     //     }
   //     //     browser.sleep(3000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,0);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //
   //     // then(function() {
   //     //     browser.sleep(3000);
   //     //     browser.executeScript('window.scrollTo(0,0);');
   //     //     browser.sleep(3000);
   //     // });
   // };
};
module.exports = new BB_EditUserProfile();
