/**
 * Created by Vsilva on 12/15/16.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_AddUserProfileRepo  = require('../Repository/BB_AddUserProfileRepo.js');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_login = require('../Page/BB_Login.js');
var BB_loginRepo = require ('../Repository/BB_LoginRepo.js');
var utilities = require('../Page/Utilities.js');
var BB_userListRepo =  require('../Repository/BB_UserListRepo.js');


var VerifyErrorMessage = function VerifyErrorMessage(){

    VerifyErrorMessage.prototype.ExpectTextEqualsTo = function(elementToCheck, compareValuesString, success, failure){
        return elementToCheck.getText().then((Text)=>{
            if (Text.trim() == compareValuesString) {
                success();
            }
            else {
                console.log('Text: |'+Text+'| is not equal to compareValuesString: |'+ compareValuesString+'|');
                failure();
            }
        });
        //this kill script and dont fail gracely and report are blank "DONT USE EXPECT
        // expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
    };

    VerifyErrorMessage.prototype.AssertElementsToDisplay = function (isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay , success, failure ) {

        if (isElementPresent == true) {
             browser.driver.wait(VerifyErrorMessage.prototype.ExpectTextEqualsTo(elementToCheck, compareValuesString, success, failure));
        }
        else {
            console.log(consoleErrorMessageDisplay);
            // process.exit(1);
            failure();
        }
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessageToDisplay = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {
        return new Promise ((success, failure)=> {
            switch (str_TextboxName.toLowerCase()) {
                case 'firstname':
                    // console.log(str_TextboxName.toLowerCase());
                    // console.log('|'+BB_editUserProfile.firstName+'|');

                    if ((BB_editUserProfile.firstName != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.firstName == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName);
                        //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName), 10000);
                        browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
                      //      console.log(isPresente);
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                        });
                    }
                    break;

                case 'lastname':
                    if ((BB_editUserProfile.lastName != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.lastName == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName);
                        //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName), 10000);
                        browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name', success, failure);
                        });
                    }
                    break;

                case 'emailaddress':

                    if ((BB_editUserProfile.emailAddress != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.emailAddress == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email);
                        //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email), 10000);
                        browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address', success, failure);
                        });
                    }
                    break;

                case 'phonenumber':
                    if ((BB_editUserProfile.phoneNumber != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber);
                        //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber), 10000);
                        browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number', success, failure);
                        });
                    }
                    break;

                case 'newpassword':
                    if ((BB_editUserProfile.newPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.newPassword == '' && FilledOrEmptyField == 'empty')) {

                        browser.getCurrentUrl().then(function (getCurrentURL) {

                            if (getCurrentURL.trim() === 'http://qa-autobahn.blackbookcloud.com/user') {
                                utilities.ExpectedElement_StopAutomationAtFail(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character);
                                //browser.wait(protractor.ExpectedConditions.presenceOf(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character), 10000);
                                browser.isElementPresent(BB_AddUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then(function (isPresente) {
                                    VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                });
                            }
                            else {

                                if (str_VerifyErrorName == 'Required') {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character);
                                    // browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character), 10000);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Require).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                            }
                        });
                    }
                    break;

                case 'confirmnewpassword':
                    if ((BB_editUserProfile.confirmNewPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.confirmNewPassword == '' && FilledOrEmptyField == 'empty')) {

                        browser.getCurrentUrl().then(function (getCurrentURL) {

                            if (getCurrentURL.trim() === 'http://qa-autobahn.blackbookcloud.com/user') {
                                if (str_VerifyErrorName == 'Required') {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Required);
                                    //browser.wait(protractor.ExpectedConditions.presenceOf(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Required), 10000);
                                    browser.isElementPresent(BB_AddUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Required).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Required, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                                else
                                {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch);
                                    //browser.wait(protractor.ExpectedConditions.presenceOf(BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch), 10000);
                                    browser.isElementPresent(BB_AddUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_AddUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                            }
                            else {
                                if (str_VerifyErrorName == 'Required') {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require);
                                    //browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require), 10000);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Require).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch);
                                    //browser.wait(protractor.ExpectedConditions.presenceOf(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch), 10000);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                            }
                        });
                    }
                    break;

                case 'currentemailaddress' :
                    if ((BB_login.currentEmailAddress != '' && FilledOrEmptyField == 'filled') || (BB_login.currentEmailAddress == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword);
                        //browser.wait(protractor.ExpectedConditions.visibilityOf( BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword), 10000);
                        browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Email Address', success, failure);
                        });
                    }
                    break;

                case 'currentpassword' :
                    if ((BB_login.currentPassword != '' && FilledOrEmptyField == 'filled') || (BB_login.currentPassword == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword);
                        //browser.wait(protractor.ExpectedConditions.visibilityOf( BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword), 10000);
                        browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Password', success, failure);
                        });
                    }
                    break;

                case 'previouspassword' :
                    if ((BB_editUserProfile.previousPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.previousPassword == '' && FilledOrEmptyField == 'empty')) {
                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require);
                            //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require), 10000);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Previous Password', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character);
                            //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character), 10000);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Leastbe8Character).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Previous Password', success, failure);
                            });
                        }
                    }
                    break;

                default:
                    console.log(str_TextboxName+' : is not part of switch statement in Verify_ErrorMessageToDisplay function.');
                    failure();
            }
        });
    };

    VerifyErrorMessage.prototype.AssertElementsNotToDisplay = function (isElementPresent, elementToCheck, consoleErrorMessageDisplay, success, failure )
    {
        if (isElementPresent == true) {
            return browser.driver.wait(elementToCheck.getText().then((Text)=> {

                if (Text.trim() != "") {
                    console.log('ERROR: |' + Text + '|. ' + consoleErrorMessageDisplay);
                    //process.exit(1);
                    failure();
                }
                else {
                    //when element is present but it is empty string
                    console.log('pass: empty string');
                    success();
                }
            }));
        }
        else {
             success();
        }
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessagesNotToDisplay = function (TextboxName) {
        browser.driver.sleep(2000);
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_FirstName).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName, 'It should not show any errors in First Name', success, failure);
                    });
                    break;

                case 'lastname':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_LastName).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName, 'It should not show any errors in Last Name', success, failure);
                    });
                    break;

                case 'emailaddress':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_Email).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email, 'It should not show any errors in Email Address', success, failure);
                    });
                    break;

                case 'phonenumber':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number', success, failure);
                    });
                    break;

                case 'newpassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, 'It should not show any errors in New Password', success, failure);
                    });
                    break;

                case 'confirmnewpassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, 'It should not show any errors in Confirm New Password', success, failure);
                    });
                    break;

                case 'currentemailaddress':
                    browser.driver.sleep(3000);
                    browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword , 'It should not show any errors in Current Email Address', success, failure);
                    });
                    break;

                case 'currentpassword':
                    browser.driver.sleep(3000);
                    browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword , 'It should not show any errors in Current Password', success, failure);
                    });
                    break;
                case 'previouspassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Require).then((isPresente)=> {
                       VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require , 'It should not show any errors in Previous Password', success, failure);
                    });
                    break;

                default:
                    console.log(TextboxName+' : is not part of switch statement in Verify_ErrorMessagesNotToDisplay function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyErrorMessage();