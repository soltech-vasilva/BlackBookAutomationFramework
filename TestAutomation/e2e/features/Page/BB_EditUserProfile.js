/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractorConfigfile = require('../Repository/BB_configuration.js');
var protractorConfig = require (protractorConfigfile.Path_protractorConfig);
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var utilities = require('../Page/Utilities.js');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var page = require ('../Page/Page_Objects');

var BB_EditUserProfile = function BB_UserProfileEdit(){

    BB_EditUserProfile.prototype.firstName = '';
    BB_EditUserProfile.prototype.lastName = '';
    BB_EditUserProfile.prototype.emailAddress = '';
    BB_EditUserProfile.prototype.phoneNumber = '';
    BB_EditUserProfile.prototype.newPassword = '';
    BB_EditUserProfile.prototype.confirmNewPassword = '';
    BB_EditUserProfile.prototype.previousPassword = '';
    BB_EditUserProfile.prototype.filterRoles = '';

    BB_EditUserProfile.prototype.Click_EditButton_EditUserProfile = function () {
        return new Promise((success, failure) => {
            page.executeSequence([ browser.sleep(2000),
                page.clickElement(BB_editUserProfileRepo.Select_Element_EditButton,protractorConfig.config.WaitTime),
               page.clearFocus()
                // page.focus(BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText,success )
            ]).then(()=>{success();});
        });
    };

    BB_EditUserProfile.prototype.Click_ResetButton_EditUserProfile = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_editUserProfileRepo.Select_Element_ResetButton,protractorConfig.config.WaitTime),
                page.clearFocus()
                // page.focus(BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText,success )
            ]).then(()=>{success();});
        });
    };

    BB_EditUserProfile.prototype.Click_CancelButton_EditUserProfile = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editUserProfileRepo.Select_Element_CancelButton,protractorConfig.config.WaitTime,success);
        });
    };

    BB_EditUserProfile.prototype.Click_SaveButton_EditUserProfile = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_editUserProfileRepo.Select_Element_SaveButton, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditUserProfile.prototype.Enter_filterRoleName_inForm = function (filterRoleSearch) {
        return new Promise((success, failure) => {
            page.executeSequence([this.filterRoles = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterRoleSearch.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_FilterRoleSearchTextbox, this.filterRoles, protractorConfig.config.WaitTime, BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(() => {
            });
        });
    };

    BB_EditUserProfile.prototype.Enter_FirstName_inForm = function (firstName) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.firstName = utilities.ReplaceDoubleQuotesWithWhiteSpace(firstName.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_FirstNameTextbox, this.firstName, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_LastName_inForm = function (lastName) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.lastName = utilities.ReplaceDoubleQuotesWithWhiteSpace(lastName.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_LastNameTextbox, this.lastName, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_EmailAddress_inForm = function (emailAddress) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.emailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox, this.emailAddress, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_PhoneNumber_inForm = function (phoneNumber) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.phoneNumber = utilities.ReplaceDoubleQuotesWithWhiteSpace(phoneNumber.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox, this.phoneNumber, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_NewPassword_inForm = function (newPassword) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.newPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(newPassword.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, this.newPassword, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_ConfirmNewPassword_inForm = function (confirmNewPassword) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.confirmNewPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(confirmNewPassword.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox, this.confirmNewPassword, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Enter_PreviousPassword_inForm = function (previousPassword) {

        return new Promise((success, failure)=> {
            page.executeSequence([this.previousPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(previousPassword.toString()),
                page.fill(BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox, this.previousPassword, protractorConfig.config.WaitTime,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)
            ]).then(()=>{});
        });
    };

    BB_EditUserProfile.prototype.Click_UserActive_checkbox = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editUserProfileRepo.Select_Element_UserActiveCheckbox, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditUserProfile.prototype.Click_UsersRolesCheckbox_Administrator = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editUserProfileRepo.Select_Element_UsersRolesCheckbox_Administrator, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditUserProfile.prototype.VerifyElementNotInPage_NewPasswordTextbox = function () {
        return new Promise((success, failure) => {
            page.verifyElementNotInPage(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, 4000, success);
        });
    };

    BB_EditUserProfile.prototype.Verify_UserActive_Checkbox_Inactive = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.waitForElementTobePresent(BB_editUserProfileRepo.Select_Element_UserActiveCheckbox, protractorConfig.config.WaitTime),
                // browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css('span.checkbox-label'))), protractorConfig.config.WaitTime),
                // browser.sleep(1000),
                //TODO si funciono :Before tira "" con double quotes  y cuando no esta el :After tira "none" sin double quotes cuando no existe y cuando existe tira "".
                browser.executeScript('return window.getComputedStyle(document.querySelector(".checkbox-label"), "::after").content').then(function (data) {
                    // console.log(data);

                    if (data === '""') {
                        console.log('Pass, It wont change setting');
                        success();
                    }
                    else {
                        console.log("Fail, User Active change settings");
                        failure();
                    }
                })
            ]).then(() => {
            });
        });
    };

    BB_EditUserProfile.prototype.DeleteContentInTextBox_RoleEditor = function (TextboxName) {
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

                case 'phonenumber':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;

                case 'newpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_NewPasswordTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;

                case 'confirmnewpassword':
                    BB_EditUserProfile.prototype.Click_Delete_Content(success, BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox,BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText);
                    break;

                default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox_RoleEditor function.');
                    failure();
            }
        });
    };

    BB_EditUserProfile.prototype.Click_Delete_Content = function(success, elementToClick, elementTitlePage) {
        return page.executeSequence([page.clickElement(elementToClick, protractorConfig.config.WaitTime),
            keyStrokesRepo.CONTROL_ALL_DELETE(elementToClick),
            page.clearFocus()
                //page.focus(elementTitlePage, success)
        ]).then(() => {
            success();
        });
    };


};
module.exports = new BB_EditUserProfile();
