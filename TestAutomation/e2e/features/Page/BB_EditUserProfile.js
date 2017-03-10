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
var page = require ('../Page/Page_Objects');

var BB_EditUserProfile = function BB_UserProfileEdit(){

    BB_EditUserProfile.prototype.firstName = '';
    BB_EditUserProfile.prototype.lastName = '';
    BB_EditUserProfile.prototype.emailAddress = '';
    BB_EditUserProfile.prototype.phoneNumber = '';
    BB_EditUserProfile.prototype.newPassword = '';
    BB_EditUserProfile.prototype.confirmNewPassword = '';
    BB_EditUserProfile.prototype.previousPassword = '';

    BB_EditUserProfile.prototype.Click_TittleofPage = function(elementTitlePage, success){
        return page.executeSequence([elementTitlePage.click(),
              success()]).then(()=>{});
    };

   BB_EditUserProfile.prototype.Enter_FirstName_inForm = function (firstName) {
       this.firstName =   utilities.ReplaceDoubleQuotesWithWhiteSpace(firstName.toString());
       browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_FirstNameTextbox), protractorConfig.config.WaitTime);
       BB_editUserProfileRepo.Select_Element_FirstNameTextbox.click();

       return new Promise((success, failure)=> {
           if (this.firstName != '') {
               BB_editUserProfileRepo.Select_Element_FirstNameTextbox.sendKeys(this.firstName);
               page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_FirstNameTextbox, this.firstName)]).then(()=>{});
           }
           BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
       });
   };

    BB_EditUserProfile.prototype.Enter_LastName_inForm = function (lastName) {
        this.lastName = utilities.ReplaceDoubleQuotesWithWhiteSpace(lastName.toString());
        BB_editUserProfileRepo.Select_Element_LastNameTextbox.click();

        return new Promise((success, failure)=> {
            if (this.lastName != '') {
                BB_editUserProfileRepo.Select_Element_LastNameTextbox.sendKeys(this.lastName);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_LastNameTextbox, this.lastName)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_EmailAddress_inForm = function (emailAddress) {
        this.emailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString());
        BB_editUserProfileRepo.Select_Element_EmailAddressTextbox.click();

        return new Promise((success, failure)=> {
            if (this.emailAddress != '') {
                BB_editUserProfileRepo.Select_Element_EmailAddressTextbox.sendKeys(this.emailAddress);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox, this.emailAddress)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_PhoneNumber_inForm = function (phoneNumber) {
        this.phoneNumber = utilities.ReplaceDoubleQuotesWithWhiteSpace(phoneNumber.toString());
        BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox.click();

        return new Promise((success, failure)=> {
            if (this.phoneNumber != '') {
                BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox.sendKeys(this.phoneNumber);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox, this.phoneNumber)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_NewPassword_inForm = function (newPassword) {
        this.newPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(newPassword.toString());
        BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.newPassword != '') {
                BB_editUserProfileRepo.Select_Element_NewPasswordTextbox.sendKeys(this.newPassword);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, this.newPassword)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_ConfirmNewPassword_inForm = function (confirmNewPassword) {
        this.confirmNewPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(confirmNewPassword.toString());
        BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.confirmNewPassword != '') {
                BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox.sendKeys(this.confirmNewPassword);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue( BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox, this.confirmNewPassword)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_PreviousPassword_inForm = function (previousPassword) {
        this.previousPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(previousPassword.toString());
        BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox.click();

        return new Promise((success, failure)=> {
            if (this.previousPassword != '') {
                BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox.sendKeys(this.previousPassword);
                page.executeSequence([utilities.VerifyValueEntered_RetypeValue( BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox, this.previousPassword)]).then(()=>{});
            }
            BB_EditUserProfile.prototype.Click_TittleofPage( BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success);
        });
    };

    BB_EditUserProfile.prototype.DeleteContentInTextBox = function (TextboxName) {
        return new Promise((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_FirstNameTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;
                case 'lastname':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_LastNameTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;
                case 'emailaddress':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_EmailAddressTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;
                case 'newpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_NewPasswordTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;
                case 'confirmnewpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;
                default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox function.');
                    failure();
            }
        });
    };

    BB_EditUserProfile.prototype.Click_Delete_Content = function(success, elementToClick, elementTitlePage) {
        elementToClick.click();
        keyStrokesRepo.CONTROL_ALL_DELETE();
        return BB_EditUserProfile.prototype.Click_TittleofPage(elementTitlePage, success);
    };

    BB_EditUserProfile.prototype.Click_EditButton_EditUserProfile = function () {
        //This give a time to transition
        browser.driver.sleep(2000);
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_EditButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            page.executeSequence([BB_editUserProfileRepo.Select_Element_EditButton.click(),success()]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Click_ResetButton_EditUserProfile = function () {
        //This give a time to transition
        //page.executeSequence([browser.driver.sleep(2000).then (()=>{browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ResetButton), protractorConfig.config.WaitTime);})]);
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ResetButton), protractorConfig.config.WaitTime);

        return new Promise((success, failure)=> {
            page.executeSequence([BB_editUserProfileRepo.Select_Element_ResetButton.click()]).then(()=>{success();});
        });
    };

    BB_EditUserProfile.prototype.Click_CancelButton_EditUserProfile = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_CancelButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            page.executeSequence([BB_editUserProfileRepo.Select_Element_CancelButton.click()]).then(()=>{success();});
        });
    };

    BB_EditUserProfile.prototype.Click_SaveButton_EditUserProfile = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_SaveButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            page.executeSequence([BB_editUserProfileRepo.Select_Element_SaveButton.click()]).then(()=>{success();});
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
